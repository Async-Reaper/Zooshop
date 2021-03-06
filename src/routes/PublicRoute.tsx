import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import InfoCompany from '../pages/InfoCompany'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Signup from '../pages/Signup'

const PublicRoute: FC = () => {
    return (
        <Routes>
            <Route path='/login' element={ <Login/> } />
            <Route path='/signup' element={ <Signup/> } />
            <Route path='/' element={ <InfoCompany/> } />
            <Route path='/products' element={ <Products/> } />
            <Route path='*' element={ <InfoCompany/> } />
        </Routes>
    )
}

export default PublicRoute