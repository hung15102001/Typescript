import React from 'react'
import { Carousel } from 'react-responsive-carousel';
type Props = {}

const Banner = (props: Props) => {
  return (
<header className="bg-dark py-5 banner">
<div className="container px-4 px-lg-5 my-5">
  <div className="text-center text-white">
    <h1 className="display-4 fw-bolder">Shop Mèo Béo</h1>
    <p className="lead fw-normal  mb-0">Không Béo Không Lấy Tiền</p>
  </div>
</div>
</header>

  )
}

export default Banner