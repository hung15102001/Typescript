import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {NewType} from '../../../types/news'
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { add } from '../../../api/news';
import HeaderAmin from '../../../component/admin/HeaderAmin';
type Props = {
}

type FormN = {
  name: string,
  img: string,
  description: string
}
const AddNew = (props: Props) => {
  const {register, handleSubmit, formState: {errors}} =  useForm<Form>();
  const [news, setNews] = useState<NewType[]>([])
  const navigate = useNavigate();

  const onSubmit : SubmitHandler<FormN> =async (demo) => {
    
    const {data} = await add(demo);
    console.log(data);
    
    setNews([...news, data])
      
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
        <Button variant="primary" type="submit">Add</Button>
        <Link className="btn btn-primary m-2" to={"/admin/news"}>Back</Link>
      </Form>
      </div>
  )
}

export default AddNew