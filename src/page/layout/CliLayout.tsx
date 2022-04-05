import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCli from '../../component/FooterCli'
import HeaderCli from '../../component/HeaderCli'

type Props = {}

const CliLayout = (props: Props) => {
  return (
    <div>
      <HeaderCli />
        <main>
            <Outlet />
        </main>
        <FooterCli/>
    </div>
  )
}

export default CliLayout