"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function OverviewBar() {
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

export function OverviewPie() {
  const data01 = [
    { name: "Revenue A", value: 400 },
    { name: "Revenue B", value: 300 },
    { name: "Revenue C", value: 300 },
    { name: "Revenue D", value: 200 },
    { name: "Revenue E", value: 278 },
    { name: "Revenue F", value: 189 },
  ]

  const data02 = [
    { name: "Expenditure A", value: 2400 },
    { name: "Expenditure B", value: 4567 },
    { name: "Expenditure C", value: 1398 },
    { name: "Expenditure D", value: 9800 },
    { name: "Expenditure E", value: 3908 },
    { name: "Expenditure F", value: 4800 },
  ]

  const COLORS = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#84cc16",
    "#06b6d4",
    "#3b82f6",
  ]
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          outerRadius={80}
          stroke="none"
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          dataKey="value"
          data={data02}
          cx={500}
          innerRadius={40}
          outerRadius={80}
          stroke="none"
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
