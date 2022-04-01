import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {SubmitHandler, useForm } from 'react-hook-form'
import { CateType } from '../../types/category'
import {add} from '../../api/category'
type Props = {}
type FormC = {
  name: String
}

const AddCate = (props: Props) => {
  const navigate =  useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<FormC>()
  const [category, setCategory] = useState<CateType[]>([])
  const onSubmit:SubmitHandler<FormC> = async (cate)=>{
      const {data} = await add(cate)
      setCategory([...category, data])
      navigate('/admin/category')
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter email" {...register('name', {required: true})}/>
    </Form.Group>

  
    <Button  variant="primary" type="submit">
      Submit
    </Button>

    <Link className="btn btn-primary m-2" to={"/admin/category"}>
      Back
    </Link>
  </Form>
  )
}

export default AddCate