import { DemoCookieSettings } from "./cookie-settings"
import { DemoCreateAccount } from "./create-account"
import "./styles.css"

export default function CardsPage() {
  return (
    <div className="flex gap-3 rounded-lg border">
      <DemoCookieSettings />
      <DemoCreateAccount />
    </div>
  )
}
