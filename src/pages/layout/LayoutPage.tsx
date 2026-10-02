import { useEffect } from "react"

export function LayoutPage() {
  useEffect(() => {
    if (import.meta.env.VITE_ENABLE_REDIRECT_FROM_LAYOUT_TO_EMPLOYEES === `true`) {
      window.location.href = `/employees`
    }
  }, [])

  return (
    <div>Layout page</div>
  )
}