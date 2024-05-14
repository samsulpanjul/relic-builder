import { useRelicStore } from "@/stores/relic-store";
import dataRelic from "@/utils/dataRelic";
import { useShallow } from "zustand/react/shallow";
import { Button } from "../ui/button";
import Combobox from "./Combobox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import SubStat from "./SubStat";

export default function Relic() {
  const [relic, setRelic, piece, setPiece, mainStat, setMainStat, sub, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade, reset] = useRelicStore(
    useShallow((state) => [state.relic, state.setRelic, state.piece, state.setPiece, state.mainStat, state.setMainStat, state.sub, state.setSubStat, state.increaseSubStep, state.decreaseSubStep, state.setRoll, state.upgrade, state.reset])
  );

  const [type, setType] = useState("");
  function handleType(val) {
    return setType(dataRelic.find((item) => item.name === val)?.type);
  }

  console.log(sub[0]);

  return (
    <div>
      <div className="border-b py-5">
        <div className="flex gap-5 items-center">
          <h2 className="text-xl font-semibold">Relic</h2>
          <Button variant={"destructive"} onClick={reset}>
            Reset
          </Button>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <p className="text-md">Relic Set</p>
            <Combobox
              data={dataRelic}
              name={"relic set"}
              value={relic}
              setValue={(val) => {
                setRelic(val);
                handleType(val);
              }}
            />
            <p>{dataRelic.map((set) => (set.name === relic ? set.pc2 : null))}</p>
            <p>{dataRelic.map((set) => (set.name === relic ? set.pc4 : null))}</p>

            <p className="pt-5">Piece</p>
            <Select disabled={!relic} defaultValue={piece} onValueChange={setPiece} value={relic ? piece : ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select piece" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {dataRelic
                    .find((val) => val.name === relic)
                    ?.set.map((set) => (
                      <SelectItem key={set.id} value={set.id}>
                        {set.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <p className="pt-5">Select Main Stat</p>
            <Select disabled={!relic} onValueChange={setMainStat} value={relic ? mainStat : ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select main stat" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {type === "relic"
                    ? dataRelic[0].set[piece - 1].mainStat.map((stat) => (
                        <SelectItem key={stat.id} value={stat.id}>
                          {stat.name}
                        </SelectItem>
                      ))
                    : dataRelic[12].set[piece - 1].mainStat.map((stat) => (
                        <SelectItem key={stat.id} value={stat.id}>
                          {stat.name}
                        </SelectItem>
                      ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-3">
            <h2>Sub Stat</h2>
            <p>Upgrade: {upgrade}/5</p>
            <div className="flex flex-col gap-3">
              <SubStat index={0} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
              <SubStat index={1} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
              <SubStat index={2} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
              <SubStat index={3} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
