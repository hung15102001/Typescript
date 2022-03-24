import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {NewType} from '../../../types/news'
type Props = {
  onAddNew:(news: NewType) => void;
}

type Form = {
  name: string,
}
const AddNew = (props: Props) => {
  const {register, handleSubmit, formState: {errors}} =  useForm<Form>();
  const navigate = useNavigate();

  const onSubmit : SubmitHandler<Form> = (data) => {
      props.onAddNew(data);
      navigate('/admin/news')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Name</label>
    <input type="text" {...register('name', {required: true})}/>
    {errors.name  && errors.name.type === "required" && <span>Kh được bỏ trống</span>}
   
    <button>Add</button>
</form>
  )
}

export default AddNew