import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CateType } from '../../types/category'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Modal, Table, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {getAll, remove} from '../../api/category'
type Props = {
    data: CateType[];
    onRemove: (id:number) => void;
}



const Category = (props: Props) => {
    const [category, setCategory] = useState<CateType[]>([])
    const [rowData, setRowData] = useState<CateType[]>([]);

    const [viewShow, setViewShow] = useState(false);
    const handleViewShow =  ()=> {setViewShow (true)};
    const hanleViewClose = ()=>{setViewShow (false)}
    const {Content} = Layout

    useEffect(()=>{
        const getCate = async () => {
            const {data} = await getAll();
            console.log(data);
            
            setCategory(data)
        }
        getCate()
    },[])

    const onRemove = async (_id:number) => {
        remove(_id)
        setCategory(category.filter(item => item._id !== _id))
    }
  return (
    <div>
        <Content className="site-layout" style={{ padding: '0 50px'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Link className="font-bold m-2 btn btn-primary" to={`/admin/category/add`}>Add new</Link>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((item, index) =>{
                return  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>
                        <Button size="sm" variant={'danger'} onClick={()=>onRemove(item._id)}>Remove</Button>
                        <Button size="sm" className="m-2" variant="warning">
                    <Link className="text-white text-decoration-none" to={`/admin/category/${item._id}/edit`}>Update</Link>
                  </Button>
                  <Button size="sm"  variant="secondary" onClick={() =>{handleViewShow(getDetail(item._id))}}>View</Button>
                    </td>
                </tr>
            })}
        </tbody>
      </Table>


      <div className="modal-box-view">
        <Modal
        show = {viewShow}
        onHide={hanleViewClose}
        backdrop="static"
        keyboard={false}
        >
           
            <Modal.Header closeButton>
            <Modal.Title className="text-center">
                  View Sản Phẩm
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                  <div>
                      <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control className="name" value={"demo"} readOnly>
                          
                          </Form.Control>
                        
                      </Form.Group>
                  </div>
              </Modal.Body>
            
        </Modal>
      </div>
      </div>
    </Content>
   
   
       
    </div>
  )
}

export default Category