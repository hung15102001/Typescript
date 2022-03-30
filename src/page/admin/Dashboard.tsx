import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderAmin from '../../component/admin/HeaderAmin'
import {Layout} from 'antd'
type Props = {}
const { Content } = Layout;
const Dashboard = (props: Props) => {
  return (
    <div>
        <main>
          <HeaderAmin />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            
          </Content>
        </main>
    </div>
  )
}

export default Dashboard