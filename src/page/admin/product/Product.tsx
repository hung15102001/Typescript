import axios from "axios";
import React, { useEffect, useState } from "react";
import { list, remove } from "../../../api/products";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import { ProductType } from "../../../types/products";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type ProductProps = {
  data: ProductType[];
  onRemove: (id: number) => void;
};

const ProductAdmin = (props: ProductProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [rowData, setRowData] = useState<ProductType[]>([]);

  const [viewShow, setViewShow] = useState(false);
  const handleViewShow =  ()=> {setViewShow (true)};
  const hanleViewClose = ()=>{setViewShow (false)}


  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProduct();
  }, []);

  const onRemove =  (id: number) => {
        remove(id);
    setProducts(products.filter(item => item.id !== id));
  }


  return (
    <div>
      <HeaderAmin />
   
        <Link className="font-bold m-2 btn btn-primary" to={`/admin/products/add`}>Add new</Link>
      
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
          {products?.map((product, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.image}</td>
              <td>{product.description}</td>
              <td>{product.categoryId}</td>
              
              <td>
                  <Button size="sm" variant="danger"  onClick={()=>onRemove(product.id)}>Remove</Button>
                  <Button size="sm" className="m-2" variant="warning">
                    <Link to={`/admin/products/${product.id}/edit`}>Update</Link>
                  </Button>
                  <Button size="sm"  variant="primary" onClick={() =>{handleViewShow(setRowData(product.id))}}>View</Button>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
      <div className="modal-box-view">
        <Modal
        show = {viewShow}
        onHide={hanleViewClose}
        backdrop="static"
        keyboard={false}
        >
           
            <Modal.Header closeButton>
            <Modal.Title className="text-center">
                  View Sản Phẩm
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                  <div>
                      <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                        
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Price</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                       
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Quantity</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                        
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Image</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                           
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Description</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                         
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Category</Form.Label>
                          <Form.Control className="name" value="demo" readOnly>

                          </Form.Control>
                      </Form.Group>
                  </div>
              </Modal.Body>
            
        </Modal>
      </div>
    </div>
  );
};

export default ProductAdmin;
