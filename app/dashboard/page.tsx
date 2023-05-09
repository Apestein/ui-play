import { TeamSwitcher } from "./components/team-switcher"
import { MainNav } from "./components/main-nav"
import { Search } from "./components/search"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { UserNav } from "./components/user-nav"

export default function DashboardPage() {
  return (
    <div className="outline outline-1 outline-white/50">
      <div className="flex justify-between p-3">
        <div className="flex space-x-4">
          <TeamSwitcher />
          <MainNav />
        </div>
        <div className="flex space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
      <CalendarDateRangePicker />
      <Overview />
      <RecentSales />
    </div>
  )
}
