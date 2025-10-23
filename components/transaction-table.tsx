"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye } from "lucide-react"

const transactions = [
  {
    id: "TXN-2024-001",
    amount: 1245.67,
    merchant: "Electronics Store",
    riskScore: 0.92,
    status: "flagged",
    timestamp: "2024-01-12 14:23:45",
  },
  {
    id: "TXN-2024-002",
    amount: 89.99,
    merchant: "Coffee Shop",
    riskScore: 0.12,
    status: "legitimate",
    timestamp: "2024-01-12 14:18:32",
  },
  {
    id: "TXN-2024-003",
    amount: 3456.78,
    merchant: "Jewelry Store",
    riskScore: 0.87,
    status: "flagged",
    timestamp: "2024-01-12 14:15:21",
  },
  {
    id: "TXN-2024-004",
    amount: 234.56,
    merchant: "Gas Station",
    riskScore: 0.23,
    status: "legitimate",
    timestamp: "2024-01-12 14:12:09",
  },
  {
    id: "TXN-2024-005",
    amount: 5678.9,
    merchant: "Online Marketplace",
    riskScore: 0.95,
    status: "blocked",
    timestamp: "2024-01-12 14:08:54",
  },
]

export function TransactionTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>High-risk transactions requiring review</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Merchant</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                <TableCell>{txn.merchant}</TableCell>
                <TableCell className="text-right font-medium">
                  ${txn.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full ${
                          txn.riskScore > 0.7 ? "bg-destructive" : txn.riskScore > 0.4 ? "bg-yellow-500" : "bg-chart-2"
                        }`}
                        style={{ width: `${txn.riskScore * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{(txn.riskScore * 100).toFixed(0)}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      txn.status === "blocked" ? "destructive" : txn.status === "flagged" ? "default" : "secondary"
                    }
                  >
                    {txn.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
