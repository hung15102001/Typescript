import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderAmin from '../../component/admin/HeaderAmin'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
        <main>
      
          <HeaderAmin />

        </main>
    </div>
  )
}

export default Dashboard