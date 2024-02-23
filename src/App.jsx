import relic from "./utils/dataRelic";
import { subStats } from "./utils/dataStat";
import { useState, useEffect } from "react";
import TabsLayout from "./components/layouts/tabs/TabsLayout";
import RelicLayout from "./components/layouts/relics/RelicLayout";

function App() {
  const [dataRelic, setDataRelic] = useState(relic);
  const [dataSubStat, setDataSubStat] = useState(subStats);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(dataRelic[0]);
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex px-10 text-slate-200 pb-[300px]">
      <TabsLayout handleClick={handleClick} dataRelic={dataRelic} />
      <RelicLayout selectedItem={selectedItem} dataSubStat={dataSubStat} setDataSubStat={setDataSubStat} />
    </div>
  );
}

export default App;
