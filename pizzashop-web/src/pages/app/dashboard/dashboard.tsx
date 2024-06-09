import { DailyReceiptMetrics } from './daily-receipt-metrics'
import { DailyReceiptPeriodChart } from './daily-receipt-period-chart'
import { MonthCanceledOrdersMetrics } from './month-canceled-orders-metrics'
import { MonthOrdersReceiptMetrics } from './month-orders-receipt-metrics'
import { MonthReceiptMetrics } from './month-receipt-metrics'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-5 items-center">
        <MonthReceiptMetrics />
        <MonthOrdersReceiptMetrics />
        <DailyReceiptMetrics />
        <MonthCanceledOrdersMetrics />
      </div>

      <div className="grid grid-cols-9 gap-5">
        <DailyReceiptPeriodChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}
