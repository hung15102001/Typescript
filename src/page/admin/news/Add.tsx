import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {NewType} from '../../../types/news'
import {Form, Button, Toast} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { add } from '../../../api/news';
import HeaderAmin from '../../../component/admin/HeaderAmin';
import toastr from "toastr";
import { upload } from '../../../ultils/uploads';
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

  const handleFileUpload = (e:any) => {
      setFile(URL.createObjectURL(e.target.files[0]))
  }
  const previewFile = (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data)
    reader.onloadend = ()=>{
      setViewFile(reader.result)
    }
  }
  const onSubmit : SubmitHandler<FormN> =async data => {
   try {
     console.log(data);
     
    const imgUrl  = await upload(data.img[0]);
    console.log(imgUrl);
    
   await add({...data, img: imgUrl});

    setFile('')
    toastr.success("Thành công")
      
      navigate('/admin/news')
   } catch (error) {
      toastr.error('Lỗi')
   }
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
        <Form.Control type="file" placeholder="Chọn ảnh" {...register('img', {required: true})}
          onChange={e=>handleFileUpload(e)}
        
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