import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function MonthOrdersReceiptMetrics() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-base">Total de pedidos (mês)</CardTitle>
          <Utensils className="size-5 ml-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold">20</h2>
        <span className="text-xs text-rose-400">-81,48%</span>{' '}
        <span className="text-xs">em relação ao mês passado</span>
      </CardContent>
    </Card>
  )
}
