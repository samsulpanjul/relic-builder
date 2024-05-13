import Combobox from "./Combobox";
import { subStats } from "@/utils/dataStat";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SubStat({ index, sub, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade }) {
  return (
    <div className="grid grid-cols-3">
      <Combobox cn="w-fit" data={subStats} name={"sub stat"} value={sub[index].stat} setValue={(val) => setSubStat(index, val)} />
      <div className="flex items-center gap-3">
        <Button disabled={upgrade === 0 || sub[index].step === 1} onClick={() => decreaseSubStep(index)}>
          -
        </Button>
        <p>{sub[index].step - 1}</p>
        <Button disabled={upgrade === 5 || sub[index].step === 6 || sub[index].stat === ""} onClick={() => increaseSubStep(index)}>
          +
        </Button>
        <p>upgrade</p>
      </div>
      <div className="flex items-center gap-3">
        <p>Roll: </p>
        <Select onValueChange={(val) => setRoll(index, val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Mid" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Low</SelectItem>
            <SelectItem value="1">Mid</SelectItem>
            <SelectItem value="2">High</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
