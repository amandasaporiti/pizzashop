import { signOut } from '@/api/sign-out'
import { useGetManagedRestaurant } from '@/hooks/useGetManagedRestaurant'
import { useGetProfile } from '@/hooks/useGetProfile'
import { ChevronDown, LogOut, Store } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { UpdateRestaurantProfileModal } from './update-restaurant-profile-modal'

export function DropdownRestaurantProfile() {
  const [open, setOpenChange] = useState(false)
  const { user, isLoadingUser } = useGetProfile()
  const { restaurant, isLoadingRestaurantData } = useGetManagedRestaurant()
  const navigate = useNavigate()

  async function handleSignOut() {
    try {
      await signOut()
      navigate('/entrar', {
        replace: true,
      })
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
  return (
    <Dialog open={open} onOpenChange={setOpenChange}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex items-center gap-2">
          <Button variant="outline">
            <ChevronDown className="size-4" />
            {isLoadingRestaurantData ? (
              <Skeleton className="w-28 h-4" />
            ) : (
              restaurant?.name
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex flex-col mr-10">
            {isLoadingUser ? (
              <div className="space-y-1">
                <Skeleton className="w-36 h-4" />
                <Skeleton className="w-[165px] h-3" />
              </div>
            ) : (
              <>
                {user?.name}
                <span className="text-xs text-zinc-500">{user?.email}</span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem className="flex items-center gap-1.5">
              <Store className="size-4" />
              Perfil da loja
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-rose-500"
          >
            <LogOut className="size-4" />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UpdateRestaurantProfileModal open={open} onOpenChange={setOpenChange} />
    </Dialog>
  )
}
