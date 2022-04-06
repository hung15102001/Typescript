import React, { useState } from 'react'
import HeaderCli from '../../component/HeaderCli'
import {Button, Form} from 'react-bootstrap'
import { SubmitHandler,useForm } from 'react-hook-form'
import { UserType } from '../../types/user'
import { signin } from '../../api/user'
import { useNavigate } from 'react-router-dom'
import { authen } from '../../ultils/localStore'
import toastr from 'toastr'
type Props = {}
type FormL = {
  name:string | number
  email: string
  password: string | number
}
const Login = (props: Props) => {

  const {register, handleSubmit, formState: {errors}} = useForm<FormL>();
  const navigate = useNavigate()

  const onLogin: SubmitHandler<FormL> = async dataForm => {
      try {
        const {data:user} = await signin(dataForm);
        localStorage.setItem('authen', JSON.stringify(dataForm));
        toastr.success('success');
       authen(user, ()=> navigate('/'))
      } catch (error) {
        toastr.error('error')
      }
  }
  return (
    <div>

    <div className="container">
  <div className="row content">
    <div className="col-md-6 mb-3">
        <img className="img-responsive rounded" src="https://kingspet.vn/wp-content/uploads/2021/02/1614337299_Cho-meo-con-an-gi-de-co-chiec-meo-beo.jpg" alt="" />
    </div>
    <div className="col-md-5">
      <h3 className="signin-text mb-3"> Sign In</h3>
      <Form onSubmit={handleSubmit(onLogin)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" {...register('email', {required: true})}/>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="password">Password</label>
          <input type="password"  className="form-control" {...register('password', {required: true})}/>
        </div>
        <div className="form-group form-check my-4">
          <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember Me</label>
        </div>
        <Button variant="primary" type="submit" >Login</Button>
      </Form>
    </div>
  </div>
</div>
</div>




  )
}

export default Login