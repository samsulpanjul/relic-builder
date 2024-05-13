import relic from "../../utils/dataRelic";
import Combobox from "./Combobox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function RelicPiece({ reset, name, relicPc, setRelic, mainStat, setMainStat, pc, upgradePc, children }) {
  return (
    <div className="border-b py-5">
      <div className="flex items-center gap-5">
        <h2 className="text-xl font-semibold pb-3">{name}</h2>
        <Button variant={"destructive"} onClick={reset}>
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <p className="text-md">Relic Set</p>
          <ComboboxRelic data={relic} name={"relic set"} value={relicPc} setValue={setRelic} />
          <p>{relic.map((set) => (set.name === relicPc ? set.pc2 : null))}</p>
          <p>{relic.map((set) => (set.name === relicPc ? set.pc4 : null))}</p>
          <p className="pt-5">Select Main Stat</p>
          <Combobox data={relic[0].set[pc].mainStat} name={"main stat"} value={mainStat} setValue={setMainStat} />
        </div>
        <div className="col-span-3">
          <h2>Sub Stat</h2>
          <p>Upgrade: {upgradePc}/5</p>
          <div className="flex flex-col gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ComboboxRelic({ data, name, value, setValue }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className={`justify-between`}>
          {value ? data.find((item) => item.name === value)?.name : `Select ${name}...`}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder={`Search ${name}...`} />
          <CommandEmpty>No character found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {data.map(
                (item) =>
                  item.type === "relic" && (
                    <CommandItem
                      key={item.id}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? value : currentValue);
                        setOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-5">
                        <img className="h-[50px]" src={item.img} alt={item.name} />
                        <span className="text-lg">{item.name}</span>
                      </div>
                    </CommandItem>
                  )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
