import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export function FilterOrdersForm() {
  return (
    <form className="flex items-center gap-3">
      <p className="font-semibold">Filtros:</p>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="preparing">Preparando</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
            <SelectItem value="delivering">Saiu para entrega</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="flex items-center gap-1.5 h-9" type="submit">
        <Search className="size-4" />
        <span className="font-bold">Filtrar</span>
      </Button>
      <Button
        variant="secondary"
        type="reset"
        className="flex items-center gap-1.5 h-9"
      >
        <X className="size-4" />
        <span className="font-bold">Remover filtros</span>
      </Button>
    </form>
  )
}
