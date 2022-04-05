import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
   <header className="bg-dark py-5 banner">
  <div className="container px-4 px-lg-5 my-5">
    <div className=" text-center">
      <h1 className="display-4 fw-bolder text-white">Shop Mèo Béo</h1>
      <p className="lead fw-normal text-white-50 mb-0">Đưa Mèo Béo Đến Mọi Nhà</p>
    </div>
  </div>
</header>

  )
}

export default Banner