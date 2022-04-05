import React from 'react'
import Banner from '../../component/Banner'
import HeaderCli from '../../component/HeaderCli'
import ProductList from '../../component/ProductList'

type Props = {}

const ProductCli = (props: Props) => {
  return (
    <div>
        <Banner/>
        <main>
            <ProductList />
        </main>
    </div>
  )
}

export default ProductCli