import Combobox from "./Combobox";
import { subStats } from "@/utils/dataStat";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRelicStore } from "@/stores/relic-store";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function SubStat({ index, sub, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade }) {
  const [open, setOpen] = useState(false);
  const [relic, mainStat, subb, setSubStatt] = useRelicStore((state) => [state.relic, state.mainStat, state.sub, state.setSubStat]);

  return (
    <div className="grid grid-cols-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className={`justify-between w-40`}>
            {sub[index].stat ? subStats.find((item) => item.name === sub[index].stat)?.name : `Select sub stat...`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <Command>
            <CommandInput placeholder={`Search stat...`} />
            <CommandEmpty>No character found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {subStats.map((item) => (
                  <CommandItem
                    disabled={subb.some((val) => val.stat === item.name) || relic === ""}
                    key={item.id}
                    onSelect={(currentValue) => {
                      setSubStatt(index, currentValue === sub[index].stat ? sub[index].stat : currentValue);
                      setOpen(false);
                    }}
                    value={item.id}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-md">{item.name}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
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
    </div>
  );
}
