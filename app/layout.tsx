import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { ExamplesNav } from "@/components/examples-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "UI Play",
  description: "UI playground created with shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container">
              <ExamplesNav />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
