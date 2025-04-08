import Combobox from "./Combobox"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getData } from "@/services/hakush"
import { useReplace } from "@/hooks/useReplace"
import { useRelicStore } from "@/stores/relic-store"

export default function RelicPiece({ reset, relicMain, name, relicPc, setRelic, mainStat, setMainStat, upgradePc, random, randomStep, children }) {
  const { relics: data } = useRelicStore()

  const relic = Object.values(data).find((item) => item.en === relicPc)

  const pc2 = useReplace(relic?.set["2"].en, relic?.set["2"].ParamList)
  const pc4 = useReplace(relic?.set["4"].en, relic?.set["4"].ParamList)

  return (
    <div className="border-b py-5">
      <div className="flex items-center gap-5">
        <span className="text-xl font-semibold pb-3">{name}</span>
        <Button
          variant={"destructive"}
          onClick={reset}
        >
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <p className="text-md">Relic Set</p>
          <ComboboxRelic
            data={data}
            name={"relic set"}
            value={relicPc}
            setValue={setRelic}
          />
          <p>{relicPc}</p>
          {relicPc && (
            <>
              <p>2-pc: {pc2}</p>
              <p>4-pc: {pc4}</p>
            </>
          )}
          <p className="pt-5">Select Main Stat</p>
          <Combobox
            data={relicMain}
            name={"main stat"}
            value={mainStat}
            setValue={setMainStat}
          />
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-3">
            <h2>Sub Stat</h2>
            <Button
              disabled={!mainStat}
              onClick={random}
            >
              Random sub stat
            </Button>
            <Button
              disabled={!mainStat}
              onClick={randomStep}
            >
              Random upgrade
            </Button>
          </div>
          <p>Upgrade: {upgradePc}/5</p>
          <div className="flex flex-col gap-3">{children}</div>
        </div>
      </div>
    </div>
  )
}

function ComboboxRelic({ data, name, value, setValue }) {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`justify-between`}
        >
          {value ? value : `Select ${name}...`}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder={`Search ${name}...`} />
          <CommandEmpty>No character found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {Object.entries(data).map(([id, data]) => (
                <div key={id}>
                  {data.set[4] && (
                    <CommandItem
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? value : currentValue)
                        setOpen(false)
                      }}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          className="h-[50px]"
                          src={`https://api.hakush.in/hsr/UI/itemfigures/${data.icon.split("/").pop()?.replace(".png", "")}.webp`}
                          alt={data.en}
                        />
                        <span className="text-lg">{data.en}</span>
                      </div>
                    </CommandItem>
                  )}
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
