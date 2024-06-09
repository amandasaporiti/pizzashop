import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-base">Produtos populares</CardTitle>
          <BarChart className="size-5 ml-auto" />
        </div>
      </CardHeader>
    </Card>
  )
}
