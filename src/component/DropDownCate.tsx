import React ,{useState, useEffect} from 'react'
import { Dropdown } from 'react-bootstrap'
import {CateType} from '../types/category'
import {getAll} from '../api/category'
import { Link } from 'react-router-dom'
type Props = {}

const DropDownCate = (props: Props) => {
    const [cate, setCate] = useState<CateType[]>([])
    useEffect(() => {
        const getData = async () => {
            const {data} = await getAll()
            console.log(data);
            setCate(data)
            
        }
        getData()
    },[])
  return (
    <div>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
      {cate?.map((item)=> {
      return  <Dropdown.Item key={item._id} >
          <Link to={`/products/category/${item._id}`}>  {item.name}</Link>
          </Dropdown.Item>
      })}
    
   
  </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default DropDownCate