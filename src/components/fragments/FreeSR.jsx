export default function FreeSR({ imgRelic, selectedMainStat, dataSubStat, checkedItems, countSteps, textAreaRef, copied, handleCopyClick }) {
  return (
    <div className="w-fit mx-auto">
      <pre className="dark:bg-slate-800 bg-slate-200 p-5 relative">
        <button className="text-sm font-sans rounded-lg px-2 py-1 bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] absolute top-5 right-5" onClick={handleCopyClick}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <code ref={textAreaRef}>
          BattleRelic &#123;
          <br />
          &#9;id= {imgRelic.relicId},
          <br />
          &#9;level: 15,
          <br />
          &#9;main_affix_id: {selectedMainStat.id},
          <br />
          {checkedItems.find((item) => item == true) && (
            <>
              &#9;sub_affix_list: vec!&#91;
              <br />
              {/* // Start */}
              {dataSubStat.map(
                (item, index) =>
                  checkedItems[index] && (
                    <div key={item.subStat}>
                      &#9;&#9;RelicAffix &#123;
                      <br />
                      &#9;&#9;&#9;affix_id: {item.id},
                      <br />
                      &#9;&#9;&#9;cnt: {countSteps[index]},
                      <br />
                      &#9;&#9;&#9;step: {countSteps[index] * 2},
                      <br />
                      &#9;&#9;&#125;,
                    </div>
                  )
              )}
              &#9;&#93;
              <br />
            </>
          )}
          &#9;{"..Default::default()"}
          <br />
          {/* End */}
          &#125;,
        </code>
      </pre>
    </div>
  );
}
