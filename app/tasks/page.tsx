import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m0@example.com",
    },
    {
      id: "728ed52g",
      amount: 101,
      status: "pending",
      email: "m1@example.com",
    },
    {
      id: "728ed52h",
      amount: 102,
      status: "pending",
      email: "m2@example.com",
    },

    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
