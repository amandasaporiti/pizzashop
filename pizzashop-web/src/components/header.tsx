import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from './ui/separator'

import { NavLink } from './nav-link'
import { DropdownRestaurantProfile } from './restaurant-profile/dropdown-restaurant-profile'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="w-full flex items-center gap-5 border-b border-zinc-800 px-8 py-3">
      <Pizza className="size-8 text-rose-500" />

      <Separator orientation="vertical" className="h-6" />

      <nav className="flex items-center gap-5">
        <NavLink to="/">
          <Home className="size-4" />
          <span>Início</span>
        </NavLink>

        <NavLink to="/pedidos">
          <UtensilsCrossed className="size-4" />
          <span>Pedidos</span>
        </NavLink>
      </nav>

      <div className="flex items-center gap-3 ml-auto">
        <ThemeToggle />
        <DropdownRestaurantProfile />
      </div>
    </header>
  )
}
