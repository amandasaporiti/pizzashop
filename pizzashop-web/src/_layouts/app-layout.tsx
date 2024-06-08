import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="h-screen m-auto w-full flex flex-col space-y-8 antialiased">
      <Header />
      <main className="px-14 pb-2">
        <Outlet />
      </main>
    </div>
  )
}
