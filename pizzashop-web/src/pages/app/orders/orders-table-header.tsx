import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function OrderTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[25px]"></TableHead>
        <TableHead className="w-[140px]">ID do pedido</TableHead>
        <TableHead className="w-[130px]">Realizado há</TableHead>
        <TableHead className="w-[150px]">Status</TableHead>
        <TableHead className="w-[220px]">Cliente</TableHead>
        <TableHead className="w-[140px]">Total do pedido</TableHead>
        <TableHead className="w-[150px]">Alterar status</TableHead>
        <TableHead className="w-[150px]">Cancelar pedido</TableHead>
      </TableRow>
    </TableHeader>
  )
}
