import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth/pages/LoginPage'
import { MyPcHome } from '../computers/pages/MYPCHOME'
import { PcHome } from '../computers/pages/PCHome'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<PcHome/>}></Route>
        <Route path='/about' element={<MyPcHome/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
    </>
  )
}
