export default function FreeSR({ imgRelic, selectedMainStat, dataSubStat, checkedItems, countSteps, textAreaRef, copied, handleCopyClick }) {
  return (
    <div className="w-5/12 mx-auto">
      <pre className="dark:bg-slate-800 bg-slate-200 p-5 relative">
        <button className="text-sm font-sans rounded-lg px-2 py-1 bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] absolute top-5 right-5" onClick={handleCopyClick}>
          {copied ? "Copied!" : "Copy"}
        </button>
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
  );
}
