import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Pizza } from 'lucide-react'

export function DailyReceiptMetrics() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-base">Total de pedidos (mês)</CardTitle>
          <Pizza className="size-5 ml-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold">20</h2>
        <span className="text-xs text-emerald-400">+25%</span>{' '}
        <span className="text-xs">em relação ao mês passado</span>
      </CardContent>
    </Card>
  )
}
