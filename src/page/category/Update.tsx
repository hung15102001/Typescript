import React, { useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {SubmitHandler, useForm } from 'react-hook-form'
import { CateType } from '../../types/category'
import { edit, getDetail} from '../../api/category'
type Props = {
}
type FormC = {
  name: String
}

const UpdateCate = (props: Props) => {
  const navigate =  useNavigate()
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormC>()
  const [category, setCategory] = useState<CateType[]>([])
const {id} = useParams()
console.log(id);

useEffect(()=>{
    const getData = async ()=>{
      const {data} = await getDetail(id);
      console.log(data);
      reset(data.cate);
    }
    getData();

  },[id])
  
  const onSubmit:SubmitHandler<FormC> = async (cate)=>{
      const {data} = await edit(cate)
      setCategory(category.filter(item => item.id == data.id ? data: item))
      navigate('/admin/category')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Name Cate" {...register('name', {required: true})}/>
  {errors.name && errors.name.type === "required" && <span>Không được bỏ trống</span>}


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

export default UpdateCate