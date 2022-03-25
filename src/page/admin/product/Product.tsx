import axios from "axios";
import React, { useEffect, useState } from "react";
import { list, remove } from "../../../api/products";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import { ProductType } from "../../../types/products";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

type ProductProps = {
  data: ProductType[];
  onRemove: (id: number) => void;
};

const ProductAdmin = (props: ProductProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
   
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
                  <Button size="sm"  variant="primary">View</Button>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductAdmin;
