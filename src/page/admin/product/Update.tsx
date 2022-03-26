import React, { useEffect, useState } from "react";
import {Form, Button} from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form"
import { ProductType } from "../../../types/products";
import { update, view } from "../../../api/products";
type Props = {};

type FormUp = {
  name: String
  price: number
  quantity: number
  image: String
  description: String
  category: String

}


const Update = (props: Props) => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm<FormUp>();
  const [products, setProducts] = useState<ProductType[]>([])
  // console.log(products);
  
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    const getData = async ()=>{
      const {data} = await view(id);
      reset(data);
    }
    getData();
  },[])

  const onSubmit: SubmitHandler<FormUp> = async (product)=>{
    // console.log(product);
      const {data} = await update(product);
      setProducts(products.filter(item => item.id !== data.id ? item : data));
      navigate('/admin/products');
  }
  return (
    <div>
     <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" {...register('name', {required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" {...register('price', {required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" {...register('quantity', {required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" {...register('description', {required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Img</Form.Label>
        <Form.Control type="text" placeholder="Description" {...register('image', {required: true})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" {...register('categoryId')}>
          <option value='1'>1</option>

        </Form.Control>
  
       
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>

      <Link className="btn btn-primary m-2" to={"/admin/products"}>
        Back
      </Link>
    </Form>
    </div>
  );
};

export default Update;
