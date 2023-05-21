"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const examples = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Cards",
    href: "/cards",
  },
  {
    name: "Tasks",
    href: "/tasks",
  },
  {
    name: "Music",
    href: "/music",
  },
  {
    name: "Authentication",
    href: "/authentication",
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()
  return (
    <div className={cn("mb-4 flex items-center", className)} {...props}>
      {examples.map((example) => (
        <Link
          href={example.href}
          key={example.href}
          className={cn(
            "flex px-4 font-medium",
            pathname === example.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {example.name}
        </Link>
      ))}
    </div>
  )
}
