import React, { useEffect, useState } from "react";
import {Form, Button} from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form"
import { ProductType } from "../../../types/products";
import { update, view } from "../../../api/products";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import { getAll } from "../../../api/category";
import { CateType } from "../../../types/category";
import toastr from "toastr";
import { upload } from "../../../ultils/uploads";

type Props = {};

type FormUp = {
  name: string
  price: number
  quantity: number
  image: string
  description: string
  category: string
}


const Update = (props: Props) => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm<FormUp>();
  const [products, setProducts] = useState<ProductType[]>([])
  const [category, setCategory] = useState<CateType[]>([])
  const [preView, setPreView] = useState<string>()
  // console.log(products);
  
  const handleUpload = (e: any) => {
    setPreView(URL.createObjectURL(e.target.value))
  }
  const {id} = useParams();
  useEffect(()=>{

    const getData = async () => {
      const {data} = await view(id);
      reset(data);
    }
    getData();

    const getCate = async ()=>{
      const {data} = await getAll();
      console.log(data);
    
      setCategory(data)
    }
    getCate()

  },[])
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormUp> = async (product:ProductType)=>{
      
    try {

   
          // const url = await upload(product.image[0])
  

      const {data} = await update(product );
      setProducts(products.filter(item => item.id !== data.id ? item : data));
      toastr.success('Update success')
      navigate('/admin/products');

    } catch (error) {
      toastr.error('Lỗi')
    }
  }
  return (
   
    <div>
     <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" {...register('name', {required: true})}/>
      {errors.name && errors.name.type === "required" && <span>Không được bỏ trống</span>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" {...register('price', {required: true})}/>
      {errors.price && errors.price.type === "required" && <span>Không được bỏ trống</span>}

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" {...register('quantity', {required: true})}/>
      {errors.quantity && errors.quantity.type === "required" && <span>Không được bỏ trống</span>}

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" {...register('description', {required: true})}/>
      {errors.description && errors.description.type === "required" && <span>Không được bỏ trống</span>}

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Img</Form.Label>
        <Form.Control type="file" placeholder="Img" {...register('image')}
            onChange={(e) => handleUpload(e)}
        />

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" {...register('category')}>
        {category?.map((item, index)=>{
           return     <option key={index} value={item._id}>{item.name}</option>
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

export default Update;
