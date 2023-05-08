import { TeamSwitcher } from "./components/team-switcher"
import { MainNav } from "./components/main-nav"
import { Search } from "./components/search"
import { CalendarDateRangePicker } from "./components/date-range-picker"

export default function DashboardPage() {
  return (
    <div>
      <div className="flex">
        <TeamSwitcher />
        <MainNav />
        <Search />
      </div>
      <CalendarDateRangePicker />
    </div>
  )
}
