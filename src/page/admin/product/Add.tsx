import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { add } from "../../../api/products";
import { ProductType } from "../../../types/products";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import { getAll } from "../../../api/category";
import { CateType } from "../../../types/category";

type AddProps = {
 
};

type FormV = {
  name: String
  price: number
  quantity: number
  image: String
  description: String
  category: String
};

const Add = (props: AddProps) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cate, setCate] = useState<CateType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormV>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormV> = async (product)=> {
      const {data} = await add(product);
      setProducts([...products, data]);
      navigate('/admin/products');
}
useEffect(()=>{
  const getCate = async () =>{
    const {data} = await getAll()
    console.log(data);
    setCate(data)
  }
  getCate()
},[])

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
        <Form.Control as="select" {...register('category')}>

    {cate?.map((item, index)=>{
          return  <option key={index} value={item.id}>{item.name}</option>
            // <option key={} value="1">1</option>
        })}
         
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

export default Add;
