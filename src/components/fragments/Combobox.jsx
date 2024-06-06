import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Combobox({ data, name, value, setValue, cn = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className={`justify-between ${cn}`}>
          {value ? data.find((item) => item.name === value)?.name : `Select ${name}...`}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder={`Search ${name}...`} />
          <CommandEmpty>No character found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {data.map((item, i) => (
                <CommandItem
                  key={item.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? value : currentValue);
                    setOpen(false);
                  }}
                  value={item[i] + 1}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-lg">{item.name}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
