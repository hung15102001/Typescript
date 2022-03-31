import React from 'react'
import {Layout} from 'antd'
type Props = {}
const {Footer} = Layout
const FooterAdmin = (props: Props) => {
  return (
    <div>
        <Footer style={{ textAlign: 'center', fontWeight: 'bold' , fontSize:'24px', position:'static' }}>HungNS</Footer>
    </div>
  )
}

export default FooterAdmin