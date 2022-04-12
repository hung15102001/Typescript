import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../api/news'
import { NewType } from '../types/news'

type Props = {}

const New = (props: Props) => {
    const [news, setNews] = useState<NewType[]>([])

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await getAll();
            console.log(data);
            
            setNews(data)
        };
        getData()
    },[])
  return (
    <div>
        <h1 className="text-center">Hot News</h1>      
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     
            {news?.map((item, index) => { 
            return(
              <div className="col mb-5" key={item._id}>  
            <div className="card h-100">
         
            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Hot</div>
      
            <img className="card-img-top" src={item.img} width="100px" alt="..." />
        
            <div className="card-body p-4">
              <div className="text-center">
         
                <h5 className="fw-bolder">{item.name}</h5>
               
              </div>
            </div>
            {/* Product actions*/}
            <div className="">
          
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/`}>New Detail</Link></div>
            </div>
            </div>
          </div>
          </div>
            )})}
      </div>
    </div>
  </section></div>
  )
}

export default New