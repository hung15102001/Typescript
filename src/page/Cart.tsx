import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="mt-4">
    <h1 className="text-center fw-bold text-success">  My Cart</h1>
 <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-8 table-responsive mb-5">
    
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th className="text-white">Products</th>
            <th className="text-white">Price</th>
            <th className="text-white">Quantity</th>
            <th className="text-white">Total</th>
            <th className="text-white">Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle"><tr>
            <td className="align-middle"><img src=""  style={{width: 50}} /></td>
            <td className="align-middle"></td>
            <td className="align-middle">
              <div className="input-group quantity mx-auto" style={{width: 100}}>
                <div className="input-group-btn">
                  {/* <button data-id="${item.id}" className="btn btn-delete btn-decrease btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button> */}
                </div>
                <input type="text" className="form-control form-control-sm bg-secondary text-center" value='0' />
                <div className="input-group-btn">
                  {/* <button  className="btn btn-delete btn-increase btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button> */}
                </div>
              </div>
            </td>
            <td id="mn" className=" align-middle"></td>
            <td className="align-middle"><button  className="btn btn-delete btn-sm btn-primary">Remove</button></td>
          </tr></tbody>
      </table>
    </div>
    <div className="col-lg-4">
      <form className="mb-5" >
        <div className="input-group">
          <input type="text" className="form-control p-4" placeholder="Coupon Code" />
          <div className="input-group-append">
            <button className="btn btn-primary">Apply Coupon</button>
          </div>
        </div>
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">$10</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold"></h5>
          </div>
          <button className="btn-block btn-success my-3 py-3"><Link className="text-white "to={'/'}>Proceed To Checkout</Link></button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Cart;
