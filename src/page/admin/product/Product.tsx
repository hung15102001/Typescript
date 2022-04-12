import React, { useEffect, useState } from "react";
import { list, remove, view } from "../../../api/products";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import { ProductType } from "../../../types/products";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import Paginate from "../../../component/Pagination/Pagination";


type ProductProps = {
  data: ProductType[];
  onRemove: (id: number) => void;
  getDetail: (id: string) => void;
};

const ProductAdmin = (props: ProductProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [rowData, setRowData] = useState<ProductType[]>([]);
  const [totalItem, setTotalItem] = useState(0);
  const { id, page } = useParams();

  const [viewShow, setViewShow] = useState(false);
  const handleViewShow = () => {
    setViewShow(true);
  };
  const hanleViewClose = () => {
    setViewShow(false);
  };
  const { Content } = Layout;

  useEffect(() => {
    const getData = async () => {
      const { data:pro } = await list();
    
      setProducts([pro]);
    }
    getData();
  },[]);

  const onRemove = (_id: number) => {
    remove(_id);
    setProducts(products.filter((item) => item._id !== _id));
  };

  const getDetail = async (id) => {
    const { data } = await view(id);

    
    setRowData(data.pro);
  };

  return (
    <div>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Link
            className="font-bold m-2 btn btn-primary"
            to={`/admin/products/add`}
          >
            Add new
          </Link>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Description</th>
                <th>Category</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
             
                
                return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td><img src={product.image}  width="150px" /></td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>

                    <td>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => onRemove(product._id)}
                      >
                        Remove
                      </Button>
                      <Button size="sm" className="m-2" variant="warning">
                        <Link
                          className="text-white text-decoration-none"
                          to={`/admin/products/${product._id}/edit`}
                        >
                          Update
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          handleViewShow(getDetail(product._id));
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>)
              })}
            </tbody>
          </Table>



          <div className="modal-box-view">
            <Modal
              show={viewShow}
              onHide={hanleViewClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-center">View Sản Phẩm</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.name}
                      readOnly
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.price}
                      readOnly
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.quantity}
                      readOnly
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <img src={rowData.image} width="150px" alt="" /> 
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.description}
                      readOnly
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.category}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default ProductAdmin;
