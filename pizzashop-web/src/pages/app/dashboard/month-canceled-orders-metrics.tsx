import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Ban } from 'lucide-react'

export function MonthCanceledOrdersMetrics() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-base">Cancelamentos (mês)</CardTitle>
          <Ban className="size-5 ml-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold">2</h2>
        <span className="text-xs text-emerald-400">+95%</span>{' '}
        <span className="text-xs">em relação ao mês passado</span>
      </CardContent>
    </Card>
  )
}
