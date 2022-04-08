import React, { useEffect, useState } from 'react'
import { getAll, remove, view } from '../../../api/news';
// import { list } from '../../../api/products';
import HeaderAmin from '../../../component/admin/HeaderAmin'
import { NewType } from '../../../types/news';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { Button, Modal, Table, Form } from "react-bootstrap";

type NewProps = {
  data: NewType[];
  getDetail: (id:string) => void;
}

const NewAdmin = (props: NewProps) => {
  const [news, setNews] = useState<NewType[]>([]);
  const [rowData, setRowData] = useState<NewType[]>([]);
  const {Content} = Layout
  useEffect(()=>{
    
    const getNew = async () => {
      const {data} = await getAll();
      console.log(news);
      setNews(data);
  
    }
    getNew();
  },[])

  const onRemove =(_id:number) => {

    remove(_id)

    setNews(news.filter(item => item._id !== _id));
  }
  const [viewShow, setViewShow] = useState(false);
  const handleViewShow = () => {
    setViewShow(true);
  };
  const hanleViewClose = () => {
    setViewShow(false);
  };

  const getDetail = async (id) => {
      const {data} = await view(id);
      console.log(data);
      setRowData(data)
  }

   
  return (
 
  <div>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
    <Link to='/admin/news/add' className="btn btn-primary m-2">Add News</Link>
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
              <td><img src={item.img} alt="" width="120px" /></td>
              <td>{item.description}</td>
             
              <td>
                  <Button size="sm" variant="danger" onClick={()=>onRemove(item._id)} >Remove</Button>
                  <Button size="sm" className="m-2" variant="warning">
                    <Link className="text-white text-decoration-none" to={`/admin/news/${item._id}/edit`}>Update</Link>
                  </Button>
                  <Button size="sm"  variant="primary" onClick={()=>handleViewShow(getDetail(item._id))}>View</Button>
              </td>
            </tr>;
          })}
        </tbody>
   </Table>
   <div className="modal-box-view">
            <Modal
              show={viewShow}
              onHide={hanleViewClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-center">View Sản Phẩm</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.name}
                      readOnly
                    ></Form.Control>
                  </Form.Group>

                

                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
             
                 
                        <img src={rowData.img} alt="" width="300px" />
                 
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className="name"
                      value={rowData.description}
                      readOnly
                    ></Form.Control>
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

export default NewAdmin