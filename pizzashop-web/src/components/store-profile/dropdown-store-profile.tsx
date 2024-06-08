import { ChevronDown, LogOut, Store } from 'lucide-react'
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
import { UpdateProfileStoreModal } from './update-store-profile-modal'

export function DropdownProfileStore() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex items-center gap-2">
          <Button variant="outline">
            <ChevronDown className="size-4" />
            Amanda Saporiti Store
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex flex-col mr-10">
            <p className="text-sm">Amanda Saporiti</p>
            <span className="text-xs text-zinc-500">
              amandasaporiti@email.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem className="flex items-center gap-1.5">
              <Store className="size-4" />
              Perfil da loja
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem className="flex items-center gap-1.5 text-rose-500">
            <LogOut className="size-4" />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UpdateProfileStoreModal />
    </Dialog>
  )
}
