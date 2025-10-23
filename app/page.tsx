import { DashboardHeader } from "@/components/dashboard-header"
import { KpiCards } from "@/components/kpi-cards"
import { FraudTrendsChart } from "@/components/fraud-trends-chart"
import { TransactionTable } from "@/components/transaction-table"
import { MerchantRiskChart } from "@/components/merchant-risk-chart"
import { ModelPerformanceCard } from "@/components/model-performance-card"

export default function FraudDetectionDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Fraud Detection Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Real-time monitoring and analytics for payment transaction fraud
            </p>
          </div>
        </div>

        <KpiCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <FraudTrendsChart />
          <ModelPerformanceCard />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TransactionTable />
          </div>
          <div>
            <MerchantRiskChart />
          </div>
        </div>
      </main>
    </div>
  )
}
