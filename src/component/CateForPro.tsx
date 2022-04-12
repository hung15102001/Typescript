import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Menu from './Menu'
import {ProductType} from '../types/products'
import {useParams} from 'react-router-dom'
import {cateForPro} from '../api/products'
import Search from '../component/Search'
import DropDownCate from '../component/DropDownCate'
type Props = {}

const CateForPro = (props: Props) => {
    const [products, setProduct] = useState<ProductType[]>([])
   const {id} = useParams()

    useEffect(()=>{
      const getPro = async () => {
        const {data} = await cateForPro(id)
        console.log(data);
        
        setProduct(data.pro)
      }
      getPro()
    },[id])
    console.log(products);
    
  return (
    <div>
        <Banner />
        <div className="">
        <div className="float-start">
        <Search /> 
        </div>
        <div className="float-end mt-4 ">
        <DropDownCate />
        </div>
        </div>
        <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> 
        {products?.map((item)=>{
        
        return  <div className="col mb-5" >  
          <div className="card h-100">
          <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
    
          <img className="card-img-top" src={item.image}  width="100px" alt="..." />
      
          <div className="card-body p-4">
            <div className="text-center">
       
              <h5 className="fw-bolder">${item.name}</h5>
              <span className="text-muted text-decoration-line-through">$50.00</span>
               <span className="fw-bold text-danger">{item.price} $</span>
            </div>
          </div>
          {/* Product actions*/}
          <div className="d-inline-flex">
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={'/cart'}>Add to cart</Link></div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/products/${item._id}`}>View Products</Link></div>
          </div>
          </div>
        </div>
        </div>
         
        })}
            
    </div>
  </div>
</section>
    </div>
  )
}

export default CateForPro