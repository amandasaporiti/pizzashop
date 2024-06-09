import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Table } from 'lucide-react'

export function OrderDetailsModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Detalhes do pedido <strong>#UHYHS63442KL</strong>
        </DialogTitle>
        <DialogDescription>Detalhes do seu pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-8">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-zinc-400">Status</TableCell>
              <TableCell className="text-right">Pendente</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-zinc-400">Cliente</TableCell>
              <TableCell className="text-right">Amanda Saporiti</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-zinc-400">Telefone</TableCell>
              <TableCell className="text-right">41997472736</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-zinc-400">E-mail</TableCell>
              <TableCell className="text-right">
                amandasaporiti@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-zinc-400">Realizado há</TableCell>
              <TableCell className="text-right">3 dias</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Qtd</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="w-full">
                Pizza de Calabresa + 1 Refrigerante 2L
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>29,90</TableCell>
              <TableCell>29,90</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
