import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
import AuthPage from '../pages/AuthPage'
import Layout from '../components/Layout'
import Register from '../pages/RegisterPage'
import UserConfigPage from '../pages/UserConfigPage'
import EditUserPage from '../pages/EditUserPage'
import UserPasswordPage from '../pages/UserPasswordPage'
import PetsPage from '../pages/PetsPage'
import MyPetsPage from '../pages/MyPetsPage'
import ReportPage from '../pages/ReportPage'
import HeroPage from '../pages/HeroPage'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HeroPage />} />
        <Route path='/login' element={<AuthPage/>}/>
        <Route path='/singup' element={<Register/>}/>
        <Route path='/user' element={<UserConfigPage/>}/>
        <Route path='/user/data' element={<EditUserPage/>}/>
        <Route path='/user/password' element={<UserPasswordPage/>}/>
        <Route path='/pets' element={<PetsPage/>}/>
        <Route path='/pets/my-pets' element={<MyPetsPage/>}/>
        <Route path='/reports' element={<ReportPage/>}/>
   
        </Route>
    </Routes>
  )
}

export default Router
