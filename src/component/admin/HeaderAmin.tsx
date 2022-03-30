import React from 'react'
import { Layout, Menu} from 'antd';
import FooterAdmin from './FooterAdmin';
import { Link } from 'react-router-dom';


type Props = {}

const { Header } = Layout;




const HeaderAmin = (props: Props) => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1">
            <Link to={'/admin/products'}>Products</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to={'/admin/news'}>News</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to={'/admin/users'}>Users</Link>
        </Menu.Item>
      </Menu>
    </Header>
      

  </Layout>

  )
};


export default HeaderAmin