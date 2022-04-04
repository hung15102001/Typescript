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
  const {register, handleSubmit, formState: {errors}} =  useForm<FormN>();
  const [news, setNews] = useState<NewType[]>([])
  const [file, setFile] = useState<string>()
  const [viewFile, setViewFile] = useState()
  const navigate = useNavigate();
  const handleFileUpload = (e) => {
      // setFile(URL.createObjectURL(e.target.files[0]))
      const demo = e.target.files[0]
      previewFile(demo)
  }
  const previewFile = (demo) => {
    const reader = new FileReader();
    reader.readAsDataURL(demo)
    reader.onloadend = ()=>{
      setViewFile(reader.result)
    }
    
  }
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

        <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Chọn ảnh" {...register('image', {required: true})}
          onChange={(e)=>handleFileUpload(e)}
          value={file}
        />
      </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"
                   placeholder="Nhập bản tin"{...register("description", { required: true })}/>
        </Form.Group>
        <Button variant="primary" type="submit" >Add</Button>
        <Link className="btn btn-primary m-2" to={"/admin/news"}>Back</Link>
      </Form>
      {viewFile && (
        <img src={viewFile} alt="chosen" 
          width="200px"
        />
      )}
      </div>
  )
}

export default AddNew