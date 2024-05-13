import { useState, useRef } from "react";
import { useHandStore, useHeadStore, useBodyStore, useFeetStore, usePlanarStore, useRopeStore } from "../../stores/relic-store";
import { useShallow } from "zustand/react/shallow";
import relic from "@/utils/dataRelic";
import { mainStatBody, mainStatFeet, mainStatPlanar, mainStatLink, subStats } from "@/utils/dataStat";

export default function Code({}) {
  const [relicHead, subHead] = useHeadStore(useShallow((state) => [state.relicHead, state.sub]));

  const [relicHand, subHand] = useHandStore(useShallow((state) => [state.relicHand, state.subHand]));

  const [relicBody, mainStatBodyy, subBody] = useBodyStore(useShallow((state) => [state.relicBody, state.mainStatBody, state.subBody]));

  const [relicFeet, mainStatFeett, subFeet] = useFeetStore(useShallow((state) => [state.relicFeet, state.mainStatFeet, state.subFeet]));

  const [relicPlanar, mainStatPlanarr, subPlanar] = usePlanarStore(useShallow((state) => [state.relicPlanar, state.mainStatPlanar, state.subPlanar]));

  const [relicLink, mainStatLinkk, subLink] = useRopeStore(useShallow((state) => [state.relicRope, state.mainStatRope, state.subRope]));

  function getRelic(relicPiece, index) {
    const relicId = relic.find((item) => item.name === relicPiece)?.set[index].relicId;
    const mainStatBodyId = mainStatBody.find((stat) => stat.name === mainStatBodyy)?.id;
    const mainStatFeetId = mainStatFeet.find((stat) => stat.name === mainStatFeett)?.id;
    const mainStatPlanarId = mainStatPlanar.find((stat) => stat.name === mainStatPlanarr)?.id;
    const mainStatLinkId = mainStatLink.find((stat) => stat.id === mainStatLinkk)?.id;
    return {
      relicId,
      mainStatHeadId: 1,
      mainStatHandId: 1,
      mainStatBodyId,
      mainStatFeetId,
      mainStatPlanarId,
      mainStatLinkId,
    };
  }

  const textAreaRef = useRef(null);

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const codeText = textAreaRef.current.innerText;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    (relicHead || relicHand || relicBody || relicFeet || relicPlanar || relicLink) && (
      <div className="w-fit mx-auto mt-14">
        <pre className="dark:bg-slate-800 bg-slate-200 p-5 relative">
          <button className="text-sm font-sans rounded-lg px-2 py-1 bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] absolute top-5 right-5" onClick={() => handleCopyClick()}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <code ref={textAreaRef}>
            <Relic piece={"Head"} name={relicHead} relic={getRelic(relicHead, 0).relicId} mainStat={getRelic(relicHead, 0).mainStatHeadId} sub={subHead} />
            <Relic piece={"Hand"} name={relicHand} relic={getRelic(relicHand, 1).relicId} mainStat={getRelic(relicHand, 1).mainStatHandId} sub={subHand} />
            <Relic piece={"Body"} name={relicBody} relic={getRelic(relicBody, 2).relicId} mainStat={getRelic(relicBody, 2).mainStatBodyId} sub={subBody} />
            <Relic piece={"Feet"} name={relicFeet} relic={getRelic(relicFeet, 3).relicId} mainStat={getRelic(relicFeet, 3).mainStatFeetId} sub={subFeet} />
            <Relic piece={"Planar"} name={relicPlanar} relic={getRelic(relicPlanar, 0).relicId} mainStat={getRelic(relicPlanar, 0).mainStatPlanarId} sub={subPlanar} />
            <Relic piece={"Rope"} name={relicLink} relic={getRelic(relicLink, 1).relicId} mainStat={getRelic(relicLink, 1).mainStatRopeId} sub={subLink} />
          </code>
        </pre>
      </div>
    )
  );
}

function Relic({ piece, name, relic, mainStat, sub }) {
  return (
    <>
      {name && (
        <>
          BattleRelic &#123;
          <br />
          &#9;// {piece}
          <br />
          &#9;// {name}
          <br />
          &#9;id: {relic},
          <br />
          &#9;level: 15,
          <br />
          &#9;main_affix_id: {mainStat ? mainStat : 1},
          <br />
          &#9;sub_affix_list: vec!&#91;
          <br />
          {sub.map(
            (val) =>
              val.stat && (
                <div key={val.id}>
                  &#9;&#9;RelicAffix &#123;
                  <br />
                  &#9;&#9;&#9;affix_id: {subStats.find((sub) => sub.name === val.stat)?.id},
                  <br />
                  &#9;&#9;&#9;cnt: {val.step},
                  <br />
                  &#9;&#9;&#9;step: {val.step * val.roll},
                  <br />
                  &#9;&#9;&#125;,
                </div>
              )
          )}
          &#9;&#93;,
          <br />
          &#9;{"..Default::default()"}
          <br />
          &#125;,
          <br />
        </>
      )}
    </>
  );
}
