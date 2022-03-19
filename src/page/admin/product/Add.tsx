import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { add } from '../../../api/products'
import { ProductType } from '../../../types/products'
import {useNavigate, useNavigationType} from 'react-router-dom';

type AddProps = {
    onAdd:(product: ProductType) => void
}

type FormV = {
    name: string,
    price: number
}




const Add = (props: AddProps) => {
    const {register, handleSubmit,  formState: { errors }} = useForm<FormV>();
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<FormV> = (data)=>{
        props.onAdd(data);
        navigate('/admin/products')
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register('name')}/>
        <label>Price</label>
        <input type="number" {...register('price')}/>
        <button>Add</button>
    </form>
  )
}

export default Add