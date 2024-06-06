import { ThemeProvider } from "./components/theme-provider";
import Character from "./components/fragments/Character";

function App() {
  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10">
        <Character />
      </div>
    </ThemeProvider>
  );
}

export default App;
