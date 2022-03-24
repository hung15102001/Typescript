import React, { useEffect, useState } from 'react'
import { getAll } from '../../../api/news';
// import { list } from '../../../api/products';
import HeaderAmin from '../../../component/admin/HeaderAmin'
import { NewType } from '../../../types/news';

type NewProps = {
  data: NewType[];
}

const NewAdmin = (props: NewProps) => {
  const [news, setNews] = useState<NewType[]>([]);

  useEffect(()=>{
    
    const getNew = async () => {
      const {data} = await getAll();
      setNews(data);
  
    }
    getNew();
  },[])
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
                                      
                                        <td>
                                            {/* {<button onClick={()=> removeItem(item._id)}>Remove</button>} */}
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

export default NewAdmin