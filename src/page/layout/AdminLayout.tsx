import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAmin from '../../component/admin/HeaderAmin'
import ProductAdmin from '../admin/product/Product'

type Props = {}

const AdminLayout    = (props: Props) => {
  return (
    <div>
    
        <main>
            
            <Outlet />
        </main>
    </div>
  )
    }

export default AdminLayout