import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const CliLayout = (props: Props) => {
  return (
    <div>CliLayout
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default CliLayout