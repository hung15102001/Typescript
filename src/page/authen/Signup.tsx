import React, { useState } from 'react'
import HeaderAmin from '../../component/admin/HeaderAmin'
import {Button, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import HeaderCli from '../../component/HeaderCli'
import {User} from '../../types/user';
import { SubmitHandler,useForm } from 'react-hook-form'
import { add } from '../../api/user'
type Props = {}
type FormSignup = {
  email: string;
  username: string;
  password: string;
}
const Signup = (props: Props) => {
  const [users, setUsers] =  useState<User[]>([])
  const {register, handleSubmit, formState: {errors}} = useForm<FormSignup>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormSignup> = async (user) => {
    const {data} = await add(user);
    console.log(data);
    setUsers([...users, data])
    navigate('/login')
  }
  return (
    <div>
    <HeaderCli/>
    <div className="container">
  <div className="row content">
    <div className="col-md-6 mb-3">
        <img className="img-responsive rounded" src="https://kingspet.vn/wp-content/uploads/2021/02/1614337299_Cho-meo-con-an-gi-de-co-chiec-meo-beo.jpg" alt="" />
    </div>
    <div className="col-md-5">
      <h3 className="signin-text mb-3"> Sign Up</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email"  className="form-control" {...register('email', {required: true})}/>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="email">User Name</label>
          <input type="text" className="form-control" {...register('username', {required: true})}/>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="password">Password</label>
          <input type="password"  className="form-control"  {...register('password', {required: true})}/>
        </div>
        {/* <div className="form-group my-4">
          <label htmlFor="password">Password ConFirm</label>
          <input type="password" name="password" className="form-control" />
        </div> */}
        <Button variant="primary" type="submit">Sign Up</Button>
        <Link to={'/signup'} className="btn btn-primary m-2">Login</Link>
      </Form>
    </div>
  </div>
</div>
</div>


  )
}

export default Signup