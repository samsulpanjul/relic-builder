import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabsLayout({ dataRelic, handleClick }) {
  return (
    <Tabs className="fixed left-10 ml-10 rounded-lg overflow-y-auto h-5/6 mt-14 tabs-scrollbar bg-lime-200 dark:bg-[#2d2d2d]">
      <TabList className="grid grid-cols-2 text-center font-semibold text-lg bg-[#69DC9E] dark:bg-[#262322] sticky top-0 rounded-t-lg">
        <Tab className="cursor-pointer hover:bg-[#5ecb91] dark:hover:bg-[#1c1a19] rounded-tl-lg w-full py-3">Relic</Tab>
        <Tab className="cursor-pointer hover:bg-[#5ecb91] dark:hover:bg-[#1c1a19] rounded-tr-lg w-full py-3">Planetary</Tab>
      </TabList>
      <TabPanel className="grid grid-cols-2 place-items-center gap-3 mt-2">
        {dataRelic.map(
          (item) =>
            item.relic && (
              <div key={item.id} className="bg-slate-200 hover:bg-slate-300 dark:hover:bg-[#141414] dark:bg-[#141414a9] rounded-full px-2 cursor-pointer p-2">
                <img src={item.img} alt="Relic" className=" w-[100px]" onClick={() => handleClick(item)} />
              </div>
            )
        )}
      </TabPanel>
      <TabPanel className="grid grid-cols-2 place-items-center gap-3 mt-2">
        {dataRelic.map(
          (item) =>
            item.relic === false && (
              <div key={item.id} className="bg-slate-200 hover:bg-slate-300 dark:hover:bg-[#141414] dark:bg-[#141414a9] rounded-full px-2 cursor-pointer p-2">
                <img src={item.img} alt="Planetary" className=" w-[100px]" onClick={() => handleClick(item)} />
              </div>
            )
        )}
      </TabPanel>
    </Tabs>
  );
}
