import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children: ReactNode
}

const PrivateRouter = ({children}: Props) => {
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : null
    if (user && user.role === 'admin') {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}/>
    }
}

export default PrivateRouter