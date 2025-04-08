import { ThemeProvider } from "./components/theme-provider"
import Character from "./components/fragments/Character"
import { useRelicStore } from "./stores/relic-store"
import { useEffect } from "react"

function App() {
  const fetchRelics = useRelicStore((state) => state.fetchRelics)

  useEffect(() => {
    fetchRelics()
  }, [fetchRelics])

  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10">
        <Character />
      </div>
    </ThemeProvider>
  )
}

export default App
