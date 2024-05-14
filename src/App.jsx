import { ThemeProvider } from "./components/theme-provider";
import Relic from "./components/fragments/Relic";
import Command from "./components/fragments/Command";

function App() {
  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10 pb-[150px]">
        <Relic />
        <Command />
      </div>
    </ThemeProvider>
  );
}

export default App;
