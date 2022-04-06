import React, { useEffect, useState } from 'react'
import Banner from '../../component/Banner'
import HeaderCli from '../../component/HeaderCli'
import ProductList from '../../component/ProductList'
import Search from '../../component/Search'
import { ProductType } from '../../types/products'
import { Link } from 'react-router-dom';
import { list } from '../../api/products';

type Props = {}

const ProductCli = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [filter, setFilter] = useState<ProductType[]>({
    title : ''
  })
  useEffect(()=>{
    const getPro = async () =>{
        const {data} = await list();
        console.log(data);
        
        setProducts(data.pro)
    }
    getPro()
},[])
  const handleSubmit = async (handleFilter:ProductType) => {

    setProducts({
      ...filter,
      title: handleFilter.searchs
    })
  }
  return (
    <div>
        <Banner/>
        <Search onSubmit={handleSubmit}/> 
        <main>
        <div>
         <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
   
          {products?.map((item, index) => { 
          return(
            <div className="col mb-5">  
          <div className="card h-100">
       
          <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
    
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
          <div className="card-body p-4">
            <div className="text-center">
       
              <h5 className="fw-bolder">{item.name}</h5>
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
          )})}
    </div>
  </div>
</section>

    </div>
        </main>
    </div>
  )
}

export default ProductCli