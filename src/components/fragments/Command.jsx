import { useRef, useState } from "react";
import { useRelicStore } from "@/stores/relic-store";
import { useShallow } from "zustand/react/shallow";
import dataRelic from "@/utils/dataRelic";
import { subStats } from "@/utils/dataStat";

export default function Command() {
  const [relic, piece, mainStat, sub] = useRelicStore(useShallow((state) => [state.relic, state.piece, state.mainStat, state.sub]));

  const textAreaRef = useRef(null);

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const codeText = textAreaRef.current.innerText;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex flex-col w-fit mx-auto">
        <div>Command</div>
        <div className="flex gap-3 place-items-center">
          <span className="bg-slate-800 px-5 py-2 mx-auto" ref={textAreaRef}>
            /relic give {dataRelic.find((val) => val.name === relic)?.set[piece - 1]?.relicId} {relic && "15"} {mainStat} {relic && sub.reduce((acc, curr) => (curr.stat !== "" ? acc + 1 : acc), 0)}{" "}
            {sub.map((subItem) => (subItem.stat !== "" ? `${subStats.find((stat) => stat.name === subItem.stat)?.id} ${subItem.step} ` : ""))}
          </span>
          <button className="text-sm font-sans rounded-lg px-2 py-2 hover:bg-[#141414] bg-[#141414a9] h-fit w-16" onClick={handleCopyClick}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
