"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  { name: "Precision", value: 94.2, color: "bg-chart-1" },
  { name: "Recall", value: 87.3, color: "bg-chart-2" },
  { name: "F1 Score", value: 90.6, color: "bg-chart-3" },
  { name: "Accuracy", value: 96.8, color: "bg-chart-4" },
]

export function ModelPerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Performance Metrics</CardTitle>
        <CardDescription>Current ML model evaluation scores</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{metric.name}</span>
              <span className="text-muted-foreground">{metric.value}%</span>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        ))}

        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">AUC-ROC Score</p>
              <p className="text-xs text-muted-foreground">Area Under Curve</p>
            </div>
            <div className="text-2xl font-bold text-chart-2">92.4%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
