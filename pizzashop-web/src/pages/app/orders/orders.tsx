import { Table, TableBody } from '@/components/ui/table'
import { FilterOrdersForm } from './filter-orders-form'
import { OrderTableHeader } from './orders-table-header'
import { OrdersTableRow } from './orders-table-row'
import { TablePaginate } from './table-paginate'

export function Orders() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Pedidos</h1>

      <FilterOrdersForm />

      <main className="border rounded-md">
        <Table>
          <OrderTableHeader />
          <TableBody>
            {Array.from({ length: 8 }, (_, index) => {
              return <OrdersTableRow key={index} />
            })}
          </TableBody>
        </Table>
      </main>
      <TablePaginate />
    </div>
  )
}
