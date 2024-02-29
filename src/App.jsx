import relic from "./utils/dataRelic";
import { subStats } from "./utils/dataStat";
import { useState } from "react";
import TabsLayout from "./components/layouts/TabsLayout";
import RelicLayout from "./components/layouts/RelicLayout";

function App() {
  const dataRelic = relic;
  const dataSubStat = subStats;
  const [selectedItem, setSelectedItem] = useState(dataRelic[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex px-10 text-slate-900 dark:text-slate-200 pb-[150px]">
      <TabsLayout handleClick={handleClick} dataRelic={dataRelic} />
      <RelicLayout selectedItem={selectedItem} dataSubStat={dataSubStat} />
    </div>
  );
}

export default App;
