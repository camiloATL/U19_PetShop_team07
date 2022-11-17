import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './config/auth'
import Admin from './pages/admin'
import UpdateUsuario from './pages/admin/update-usuario'
import Usuarios from './pages/admin/usuarios'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

export default function RoutesApp(isAuth) {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path='usuarios/all' element={<Usuarios />} />
          <Route path='usuario/:id' element={<UpdateUsuario />} />
        </Route>
        <Route path="/login" element={<Login titulo={"Omega"} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  )
}
