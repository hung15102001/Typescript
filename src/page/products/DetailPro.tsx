import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { view } from '../../api/products'
import { ProductType } from '../../types/products'

type Props = {
}

const DetailPro = (props: Props) => {
  const [products, setProduct] = useState<ProductType[]>([])
  const {id} = useParams()
  console.log(id);
  
  useEffect( () => {  
    const getData = async () => {
      const {data} = await view(id)
      console.log(data);
      
      setProduct(data)
      
    }
    getData()
  },[])
  return (
<div>
  <section id="services" className="services section-bg">
    <div className="container-fluid">
 
      <div className="row row-sm">
        <div className="col-md-6 _boxzoom">
          <div className="zoom-thumb">
            <ul className="piclist">
            
              <li><img src={products.image}/></li>
            </ul>
          </div>
          <div className="_product-images">
            <div className="picZoomer">
              <img className="my_img" src={products.image} width="150px"/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="_product-detail-content">
            <p className="_p-name"> {products.name}</p> 
            <div className="_p-price-box">
              <div className="p-list">
                <span> Price <i className="fa fa-inr" /> <del> 1399</del> </span>
                <span className="price"> {products.price} $</span> 
              </div>
              <div className="_p-add-cart">
                <div className="_p-qty">
                  <span>Add Quantity</span>
                
                  <input type="number" name="qty" id="number" defaultValue={1} />
                  
                </div>
              </div>
              <div className="_p-features">
                <span> Description About this product:- </span>
                {products.description}                    
              </div>
              <form method="post" acceptCharset="utf-8">
                <ul className="spe_ul" />
                <div className="_p-qty-and-cart">
                  <div className="_p-add-cart">
                 
                    <button className="btn-theme btn btn-success" onClick={()=>onAddCart()}>
                      <i className="fa fa-shopping-cart" /> Add to Cart
                    </button>
                    <input type="hidden" name="pid" defaultValue={18} />
                    <input type="hidden" name="price" defaultValue={850} />
                  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>


  )
}

export default DetailPro