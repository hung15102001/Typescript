import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children: JSX.Element
}

const PrivateRouter = (props: Props) => {
    const isAuth = true
    if(!isAuth) {
        return <Navigate to='/login'/>
    }
    return props.children
    
  
}

export default PrivateRouter