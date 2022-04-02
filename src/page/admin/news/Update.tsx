import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {SubmitHandler, useForm} from 'react-hook-form'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { update, view } from "../../../api/news";
import HeaderAmin from "../../../component/admin/HeaderAmin";
import {NewType} from '../../../types/news'
type Props = {};

type FormN = {
    name: string,
    img: string,
    description: string
}



const Update = (props: Props) => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormN>()
    const {id} = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState<NewType[]>([])
    // console.log(news);
    

    useEffect(()=>{
        const getNew = async () => {
            const {data} = await view(id)
            console.log(data);
            
            reset(data)
        }
        getNew();
    },[])

    const onSubmit:SubmitHandler<FormN> = async (demo) =>{
      console.log(demo);
      
       const {data} = await update(demo);
       console.log(data.id);
       
        setNews(news.filter(item => item.id !== data.id ? data : item))
        navigate('/admin/news')
    }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Nhập bản tin"{...register("name", { required: true })}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Nhập bản tin"{...register("img", { required: true })}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Nhập bản tin"{...register("description", { required: true })}/>
        </Form.Group>
        <Button variant="warning" type="submit">Update</Button>
        <Link className="btn btn-primary m-2" to={"/admin/news"}>Back</Link>
      </Form>
     
    </div>
  );
};

export default Update;
