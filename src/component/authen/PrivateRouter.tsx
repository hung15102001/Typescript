import React from 'react'
import { Navigate } from 'react-router-dom'
import {isAuthenticate} from '../../ultils/localStore'
type Props = {
    children: JSX.Element
}

const PrivateRouter = (props: Props) => {
    const {user} = isAuthenticate();
    if(user?.role == 1) { //! role thi la 0 role thì là 1 tuong duong true and false
        return <Navigate to='/login'/>
    }
    return props.children
    
  
}

export default PrivateRouter