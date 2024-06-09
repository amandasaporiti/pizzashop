import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'

export function DailyReceiptPeriodChart() {
  return (
    <Card className="col-span-6">
      <div className="flex items-center justify-between">
        <CardHeader>
          <CardTitle className="text-base">Receitas no período</CardTitle>
          <CardDescription className="text-sm">
            Receita diária no período
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm">Selecionar período</p>
            <DatePickerWithRange />
          </div>
        </CardHeader>
      </div>
    </Card>
  )
}
