import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabsLayout({ dataRelic, handleClick }) {
  return (
    <Tabs className="fixed left-10 ml-10 rounded-b-lg overflow-y-auto h-5/6 mt-14 tabs-scrollbar bg-[#141414]">
      <TabList className="grid grid-cols-2 text-center font-semibold text-lg bg-[#00bb79] text-black sticky top-0 rounded-t-lg">
        <Tab className="cursor-pointer hover:bg-[#00bb7b] brightness-105 rounded-tl-lg w-full py-3">Relic</Tab>
        <Tab className="cursor-pointer hover:bg-[#00bb7b] brightness-105 rounded-tr-lg w-full py-3">Planetary</Tab>
      </TabList>
      <TabPanel className="grid grid-cols-2 place-items-center gap-3 mt-2">
        {dataRelic.map(
          (item) =>
            item.relic && (
              <div key={item.id} className="hover:bg-slate-800 bg-slate-900 rounded-full px-2 cursor-pointer p-2">
                <img src={item.img} alt="Relic" className=" w-[100px]" onClick={() => handleClick(item)} />
              </div>
            )
        )}
      </TabPanel>
      <TabPanel className="grid grid-cols-2 place-items-center gap-3 mt-2">
        {dataRelic.map(
          (item) =>
            item.relic === false && (
              <div key={item.id} className="hover:bg-slate-800 bg-slate-900 rounded-full px-2 cursor-pointer p-2">
                <img src={item.img} alt="Relic" className=" w-[100px]" onClick={() => handleClick(item)} />
              </div>
            )
        )}
      </TabPanel>
    </Tabs>
  );
}
