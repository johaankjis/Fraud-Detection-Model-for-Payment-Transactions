"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { category: "Electronics", riskScore: 78 },
  { category: "Jewelry", riskScore: 85 },
  { category: "Online Retail", riskScore: 72 },
  { category: "Travel", riskScore: 45 },
  { category: "Restaurants", riskScore: 23 },
  { category: "Gas Stations", riskScore: 18 },
]

const chartConfig = {
  riskScore: {
    label: "Risk Score",
    color: "hsl(var(--chart-1))",
  },
}

export function MerchantRiskChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Merchant Risk Categories</CardTitle>
        <CardDescription>Average risk scores by merchant type</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" className="text-xs" />
              <YAxis dataKey="category" type="category" width={100} className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="riskScore" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">High Risk Categories</span>
            <span className="font-medium">3 identified</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Electronics, Jewelry, and Online Retail require enhanced monitoring
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
