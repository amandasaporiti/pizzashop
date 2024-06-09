import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDetailsModal } from './order-details-modal'

export function OrdersTableRow() {
  return (
    <TableRow>
      <Dialog>
        <DialogTrigger asChild>
          <TableCell>
            <div className="border rounded-md w-10 h-9 flex items-center justify-center cursor-pointer">
              <Search className="size-4 text-rose-400" />
            </div>
          </TableCell>
        </DialogTrigger>
        <TableCell>UHYHS63442KL</TableCell>
        <TableCell className="text-zinc-400">há 1 dia</TableCell>
        <TableCell className="">
          <div className="text-zinc-400 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Entregue</span>
          </div>
        </TableCell>
        <TableCell className="font-semibold">Amanda Santos</TableCell>
        <TableCell className="font-semibold">R$ 129,90</TableCell>
        <TableCell>
          <Button variant="outline" className="space-x-2">
            <ArrowRight className="size-4" />
            <span>Aprovar</span>
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="ghost" className="space-x-2">
            <X className="size-4 text-rose-500" />
            <span>Cancelar</span>
          </Button>
        </TableCell>
        <OrderDetailsModal />
      </Dialog>
    </TableRow>
  )
}
