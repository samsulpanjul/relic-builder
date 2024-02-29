import { useState, useRef } from "react";
import RelicHeader from "../fragments/RelicHeader";
import RelicSet from "../fragments/RelicSet";
import StatsDisplay from "../fragments/StatsDisplay";
import FreeSR from "../fragments/FreeSR";
import SubStat from "../fragments/SubStat";

export default function RelicLayout({ selectedItem, dataSubStat }) {
  const [selectedRelic, setSelectedRelic] = useState(null);
  const [selectedMainStat, setSelectedMainStat] = useState(null);
  const [imgRelic, setImgRelic] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(dataSubStat.length).fill(false));
  const [countSteps, setCountSteps] = useState(Array(dataSubStat.length).fill(1));
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  const handleChecked = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleCountStepChange = (index, newCountStep) => {
    const newCountSteps = [...countSteps];
    newCountSteps[index] = newCountStep;
    setCountSteps(newCountSteps);
  };

  const handleCopyClick = () => {
    const codeText = textAreaRef.current.innerText;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetClick = () => {
    setCountSteps(Array(dataSubStat.length).fill(1));
    setCheckedItems(Array(dataSubStat.length).fill(false));
  };

  const handleClickRelic = (item) => {
    setSelectedRelic(item);
  };

  const handleClickMainStat = (item) => {
    setSelectedMainStat(item);
    setImgRelic(selectedRelic);
  };

  return (
    <div className="ml-[400px] mt-5 min-w-[800px] max-w-[800px] flex flex-col gap-5">
      <RelicHeader selectedItem={selectedItem} />
      <RelicSet selectedItem={selectedItem} handleClickRelic={handleClickRelic} />
      {selectedRelic && selectedRelic.mainStat && (
        <>
          <StatsDisplay>
            <p className="text-3xl font-bold text-center">Select Main Stat</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {selectedRelic.mainStat.map((item, index) => (
                <button key={item.name} className="text-lg rounded-lg font-bold cursor-pointer bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] px-3 py-2" onClick={() => handleClickMainStat(item)}>
                  {item.name}
                </button>
              ))}
            </div>
          </StatsDisplay>
          {selectedMainStat && selectedMainStat.name && (
            <StatsDisplay>
              <p className="text-3xl font-bold text-center">Main Stat</p>
              <div className="flex justify-center place-items-center gap-5">
                <img src={imgRelic.img} alt={selectedRelic.name} className="w-[75px]" />
                <p className="text-xl font-semibold text-center">{selectedMainStat.name}</p>
              </div>
            </StatsDisplay>
          )}
          <StatsDisplay>
            <div className="flex justify-center gap-10">
              <p className="text-3xl font-bold text-center">Sub Stat</p>
              <button className="text-lg w-fit rounded-lg font-bold cursor-pointer bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] px-3 py-2" onClick={handleResetClick}>
                Reset
              </button>
            </div>
            <SubStat dataSubStat={dataSubStat} checkedItems={checkedItems} handleChecked={handleChecked} countSteps={countSteps} handleCountStepChange={handleCountStepChange} />
          </StatsDisplay>
          {imgRelic && selectedMainStat && (
            <FreeSR imgRelic={imgRelic} dataSubStat={dataSubStat} selectedMainStat={selectedMainStat} countSteps={countSteps} checkedItems={checkedItems} handleCopyClick={handleCopyClick} copied={copied} textAreaRef={textAreaRef} />
          )}
        </>
      )}
    </div>
  );
}
