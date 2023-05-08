import { TeamSwitcher } from "./components/team-switcher"
import { MainNav } from "./components/main-nav"
import { Search } from "./components/search"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { UserNav } from "./components/user-nav"

export default function DashboardPage() {
  return (
    <div>
      <div className="flex">
        <TeamSwitcher />
        <MainNav />
        <Search />
      </div>
      <CalendarDateRangePicker />
      <Overview />
      <RecentSales />
      <UserNav />
    </div>
  )
}
