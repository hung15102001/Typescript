import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { add } from '../../../api/products'
import { ProductType } from '../../../types/products'
import {useNavigate, useNavigationType} from 'react-router-dom';

type AddProps = {
    onAddPro:(product: ProductType) => void
}

type FormV = {
    name: String,
    price: number,
    quantity: number,
    image:String,
    description:String,
    category:number,
}




const Add = (props: AddProps) => {
    
    const {register, handleSubmit,  formState: { errors }} = useForm<FormV>();
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<FormV> = (data)=>{
        props.onAddPro(data);
        navigate('/admin/products')
    };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register('name', {required: true})}/>
        {errors.name  && errors.name.type === "required" && <span>Kh được bỏ trống</span>}
        <label>Price</label>
        <input type="number" {...register('price')}/>
        <button>Add</button>
    </form>
  )
}

export default Add