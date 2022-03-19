
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { list, remove } from '../../../api/products';
import HeaderAmin from '../../../component/admin/HeaderAmin';
import { ProductType } from '../../../types/products';


type ProductProps = {
   data: ProductType[];
}

const ProductAdmin = (props: ProductProps) => {
  
    const [producst, setProducts] = useState<ProductType[]>([]);

    useEffect(()=>{
        const getProduct = async () => {
            const {data} = await list();
            
            
            setProducts(data);
        }
        getProduct();
    },[])

    const removeItem = async (id: number) => {
  
        const {data} = await remove(id);
    
        data && setProducts(producst.filter(item => item._id !== data._id));
      }
    

  return (
    
      
    <div>
       
        <HeaderAmin />
        <div className="card mb-4">
            <div className="card-body">
            <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th> 
                                            <th>Price</th>
                                            <th >function</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    {props.data && props.data.map((item, index) => {
                                        return (
                                        <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {<button onClick={()=> removeItem(item._id)}>Remove</button>}
                                        </td>
                                        </tr> 
                                        )
                                    })}
                                    
                         </tbody>
                 </table>
            </div>
        </div>
    </div>
  )
}

export default ProductAdmin