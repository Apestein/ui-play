"use client"
import { Icons } from "./icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="container justify-between flex items-center sticky top-0 w-full py-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
        <span className="text-[hsl(200,100%,60%)]">UI</span>{" "}
        <span className="text-[hsl(280,100%,60%)]">Play</span>
      </h1>
      <ModeToggle />
    </header>
  )
}

function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0 duration-500" />
          <Icons.moon className="absolute rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
