import { useState, useRef } from "react";
import RelicHeader from "../relics/RelicHeader";
import RelicSet from "../relics/RelicSet";
import StatsDisplay from "./StatsDisplay";
import StepCounter from "../counter/StepCounter";

export default function StatsLayout({ selectedRelic, selectedMainStat, imgRelic, selectedItem, dataSubStat, handleClickRelic, handleClickMainStat, onCountStepChange, step }) {
  const [countStep, setCountStep] = useState(1);
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
    setCountStep(1);
    setCountSteps(Array(dataSubStat.length).fill(1));
    setCheckedItems(Array(dataSubStat.length).fill(false));
  };

  return (
    <>
      {selectedItem && (
        <>
          <RelicHeader selectedItem={selectedItem} />
          <RelicSet selectedItem={selectedItem} handleClickRelic={handleClickRelic} />
          {selectedRelic && selectedRelic.mainStat && (
            <>
              <StatsDisplay>
                <p className="text-3xl font-bold text-center">Select Main Stat</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {selectedRelic.mainStat.map((item, index) => (
                    <button key={item.name} className="text-lg rounded-lg font-bold cursor-pointer hover:bg-[#141414] bg-[#141414a9] px-3 py-2" onClick={() => handleClickMainStat(item)}>
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
                  <button className="text-lg w-fit rounded-lg font-bold cursor-pointer hover:bg-[#141414] bg-[#141414a9] px-3 py-2" onClick={handleResetClick}>
                    Reset
                  </button>
                </div>
                <div className="flex flex-col mx-auto min-w-7/12 h-[300px] overflow-y-scroll gap-y-2 gap-x-20">
                  {dataSubStat.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col gap-2 justify-center">
                        <div className="flex justify-between place-items-center gap-5 max-w-full">
                          <div className="flex place-items-center gap-5">
                            <input type="checkbox" className="toggle toggle-md" onChange={() => handleChecked(index)} checked={checkedItems[index]} />
                            <p className="text-md font-semibold px-3 py-2 rounded-lg">{item.subStat}</p>
                          </div>
                          <StepCounter countStep={countSteps[index]} setCountStep={(newStep) => handleCountStepChange(index, newStep)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </StatsDisplay>
              {imgRelic && selectedMainStat && (
                <div className="w-5/12 bg-slate-800 p-5 m-auto relative">
                  <button className="text-sm rounded-lg px-2 py-1 hover:bg-[#141414] bg-[#141414a9] absolute top-5 right-5" onClick={handleCopyClick}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <pre>
                    <code ref={textAreaRef}>
                      Id = {imgRelic.relicId},
                      <br />
                      Level = 15,
                      <br />
                      MainAffixId = {selectedMainStat.id},
                      <br />
                      SubAffixLists =<br />
                      &#123;
                      {/* // Start */}
                      {dataSubStat.map(
                        (item, index) =>
                          checkedItems[index] && (
                            <div key={item.subStat}>
                              {"    new RelicAffix"}
                              <br />
                              {"    "}&#123;
                              <br />
                              {`        AffixId = ${item.id},`}
                              <br />
                              {`        Cnt = ${countSteps[index]},`}
                              <br />
                              {`        Step = ${countSteps[index] * 2},`}
                              <br />
                              {"    "}&#125;,
                            </div>
                          )
                      )}
                      {/* End */}
                      &#125;
                    </code>
                  </pre>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
