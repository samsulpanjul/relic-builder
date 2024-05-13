import relic from "./utils/dataRelic";
import { subStats } from "./utils/dataStat";
import { useState } from "react";
import CreateRelic from "./components/fragments/CreateRelic";
import { ThemeProvider } from "./components/theme-provider";
import Code from "@/components/fragments/Code";

function App() {
  const dataRelic = relic;
  const dataSubStat = subStats;
  const [selectedItem, setSelectedItem] = useState(dataRelic[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10 pb-[150px]">
        <CreateRelic />
        <Code />
      </div>
    </ThemeProvider>
  );
}

export default App;
