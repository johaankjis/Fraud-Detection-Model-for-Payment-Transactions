"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "2024-01-01", fraudulent: 145, legitimate: 8234 },
  { date: "2024-01-02", fraudulent: 167, legitimate: 8456 },
  { date: "2024-01-03", fraudulent: 134, legitimate: 8123 },
  { date: "2024-01-04", fraudulent: 189, legitimate: 8678 },
  { date: "2024-01-05", fraudulent: 156, legitimate: 8345 },
  { date: "2024-01-06", fraudulent: 178, legitimate: 8567 },
  { date: "2024-01-07", fraudulent: 143, legitimate: 8234 },
  { date: "2024-01-08", fraudulent: 198, legitimate: 8789 },
  { date: "2024-01-09", fraudulent: 167, legitimate: 8456 },
  { date: "2024-01-10", fraudulent: 145, legitimate: 8234 },
  { date: "2024-01-11", fraudulent: 189, legitimate: 8678 },
  { date: "2024-01-12", fraudulent: 156, legitimate: 8345 },
]

const chartConfig = {
  fraudulent: {
    label: "Fraudulent",
    color: "hsl(var(--destructive))",
  },
  legitimate: {
    label: "Legitimate",
    color: "hsl(var(--chart-2))",
  },
}

export function FraudTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Trends</CardTitle>
        <CardDescription>Fraudulent vs legitimate transactions over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                }
                className="text-xs"
              />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="legitimate"
                stackId="1"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="fraudulent"
                stackId="1"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
