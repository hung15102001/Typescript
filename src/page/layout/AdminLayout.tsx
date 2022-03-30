
import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterAdmin from '../../component/admin/FooterAdmin'
import HeaderAmin from '../../component/admin/HeaderAmin'
import ProductAdmin from '../admin/product/Product'


type Props = {}

const AdminLayout    = (props: Props) => {
  return (
    <div>
      <HeaderAmin/>
      <main>
            <Outlet/>
      </main>
      <FooterAdmin/>      
     </div>
  )
    }

export default AdminLayout