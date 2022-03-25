import React, { useEffect, useState } from 'react'
import { getAll } from '../../../api/news';
// import { list } from '../../../api/products';
import HeaderAmin from '../../../component/admin/HeaderAmin'
import { NewType } from '../../../types/news';
import {Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    
   <Table  striped bordered hover>
   <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((item, index) => {
            return <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.img}</td>
              <td>{item.description}</td>
             
              <td>
                  <Button size="sm" variant="danger" >Remove</Button>
                  <Button size="sm" className="m-2" variant="warning">
                    <Link to={`/admin/news/${item.id}/edit`}>Update</Link>
                  </Button>
                  <Button size="sm"  variant="primary">View</Button>
              </td>
            </tr>;
          })}
        </tbody>
   </Table>
 
   
  
       
    </div>
  )
}

export default NewAdmin