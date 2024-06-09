import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function MonthReceiptMetrics() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-base">Receita total (mês)</CardTitle>
          <DollarSign className="size-5 ml-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="font-bold text-2xl">R$ 365,20</h2>
        <span className="text-xs text-rose-400">-81,48%</span>{' '}
        <span className="text-xs">em relação ao mês passado</span>
      </CardContent>
    </Card>
  )
}
