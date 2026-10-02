import { useEffect } from "react"
import { ENABLE_REDIRECT_FROM_LAYOUT_TO_EMPLOYEES } from "../../common/config/config"

export function LayoutPage() {
  useEffect(() => {
    if (ENABLE_REDIRECT_FROM_LAYOUT_TO_EMPLOYEES === `true`) {
      window.location.href = `/employees`
    }
  }, [])

  return (
    <div>Layout page</div>
  )
}