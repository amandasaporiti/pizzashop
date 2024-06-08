import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './_layouts/app-layout'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { RegisterStore } from './pages/auth/register-store'
import { SignIn } from './pages/auth/sign-in'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Orders />} />
      </Route>

      {/* <Route path="/" element={<AuthLayout />}> */}
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/novo-estabelecimento" element={<RegisterStore />} />
      {/* </Route> */}
    </Routes>
  )
}
