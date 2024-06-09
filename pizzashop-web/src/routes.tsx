import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './_layouts/app-layout'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Orders />} />
      </Route>

      <Route path="/entrar" element={<SignIn />} />
      <Route path="/criar-conta" element={<SignUp />} />
    </Routes>
  )
}
