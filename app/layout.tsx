import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExamplesNav } from "@/components/examples-nav"
import { StyleSwitcher } from "@/components/style-switcher"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "UI Play",
  description:
    "UI playground created with Radix, Tailwind, Recharts, TanStack Table, React Hook Form",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main>
            <div className="container py-10">
              <ExamplesNav />
              {children}
            </div>
          </main>
          <SiteFooter />
        </ThemeProvider>
        <StyleSwitcher />
      </body>
    </html>
  )
}
