import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, TrendingUp, Target } from "lucide-react"

const kpis = [
  {
    title: "Model AUC",
    value: "92.4%",
    change: "+2.1%",
    trend: "up",
    icon: Target,
    description: "Area Under Curve",
  },
  {
    title: "False Positives",
    value: "18%",
    change: "-18%",
    trend: "down",
    icon: TrendingDown,
    description: "Reduction achieved",
  },
  {
    title: "Recall Rate",
    value: "87.3%",
    change: "+15%",
    trend: "up",
    icon: TrendingUp,
    description: "Fraud detection rate",
  },
  {
    title: "High Risk Alerts",
    value: "247",
    change: "+12",
    trend: "up",
    icon: AlertTriangle,
    description: "Last 24 hours",
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        const isPositive = kpi.trend === "up" && !kpi.title.includes("Alert")
        const isNegative = kpi.trend === "up" && kpi.title.includes("Alert")

        return (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className={isPositive ? "text-chart-2" : isNegative ? "text-destructive" : "text-chart-2"}>
                  {kpi.change}
                </span>
                <span>{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
