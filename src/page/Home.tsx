import React from 'react'
import Banner from '../component/Banner'
import HeaderCli from '../component/HeaderCli'
import New from './New'

import ProductCli from './products/Product'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <main>
            <ProductCli />
            <New />
        </main>
    </div>

  )
}

export default Home