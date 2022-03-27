import React from 'react'
import HeaderCli from '../../component/HeaderCli'
import {Button} from 'react-bootstrap'
type Props = {}

const Login = (props: Props) => {
  return (
    <div>
    <HeaderCli/>
    <div className="container">
  <div className="row content">
    <div className="col-md-6 mb-3">
        <img className="img-responsive rounded" src="https://kingspet.vn/wp-content/uploads/2021/02/1614337299_Cho-meo-con-an-gi-de-co-chiec-meo-beo.jpg" alt="" />
    </div>
    <div className="col-md-5">
      <h3 className="signin-text mb-3"> Sign In</h3>
      <form className="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <div className="form-group form-check my-4">
          <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember Me</label>
        </div>
        <Button variant="primary">Login</Button>
      </form>
    </div>
  </div>
</div>
</div>




  )
}

export default Login