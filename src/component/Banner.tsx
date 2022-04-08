import React from 'react'
import { Carousel } from 'react-responsive-carousel';
type Props = {}

const Banner = (props: Props) => {
  return (
    <Carousel>
    <div className="img">
        <img src="img/meo1.jpg" />
        <p className="legend ">Shop Mèo Béo</p>
    </div>
    <div className="img">
        <img src="img/meo2.jpg" />
        <p className="legend">Đưa Mèo Béo Đến Mọi Nhà</p>
    </div>
    <div className="img">
        <img src="img/meo3.jpg" />
        <p className="legend">KHông Béo Hoàn Trả 200%</p>
    </div>
  </Carousel>

  )
}

export default Banner