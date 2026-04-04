import { useUserStore } from "@/src/store/use-user.store";
import { useGetRelics } from "../hooks/use-get-relics.hook";
import { LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ButtonGroup } from "@/src/components/ui/button-group";
import { cn } from "@/src/lib/utils";
import RelicCard from "./relic-card";
import DeleteRelicDialog from "./delete-relic-dialog";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/src/components/ui/combobox";
import { useGetRelicSets } from "../hooks/use-get-relic-sets.hook";
import { RelicSet } from "../types/relic-set.type";
import { RELIC_TYPES } from "../utils/constants";

interface Props {
  onSelect?: (relicId: string, type: string) => void;
  withDelete?: boolean;
  contentClassName?: string;
  emptyClassName?: string;
  type?: string;
}

const RelicList = ({
  onSelect,
  withDelete = true,
  contentClassName,
  emptyClassName,
  type,
}: Props) => {
  const anchor = useComboboxAnchor();
  const [selectedType, setSelectedType] = useState(type || "all");
  const [selectedSet, setSelectedSet] = useState<RelicSet[]>([]);

  const { data: allRellics } = useGetRelics();
  const { data: relicSets } = useGetRelicSets();
  const relicList = useUserStore((state) => state.relics);

  if (!allRellics) return;

  const filteredRelics = Object.values(relicList).filter((item) => {
    const matchesType =
      selectedType === "all" ||
      item.type.toLowerCase() === selectedType.toLowerCase();

    const matchesSet =
      selectedSet.length === 0 ||
      selectedSet.some((set) => set.id === item.relic_set_id);

    return matchesType && matchesSet;
  });

  return (
    <>
      <div className="flex flex-wrap gap-2 pb-4">
        <ButtonGroup>
          {RELIC_TYPES.map((type) => (
            <Button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg transition-all capitalize ${
                selectedType === type
                  ? "bg-background text-background-foreground shadow-md"
                  : "bg-primary text-primary-foreground hover:bg-primary"
              }`}
            >
              {type === "all" ? (
                <LayoutGrid size={28} />
              ) : (
                <img
                  src={`/icons/part/part${type}.webp`}
                  alt={type}
                  className="size-6"
                />
              )}
            </Button>
          ))}
        </ButtonGroup>
        <Combobox
          multiple
          autoHighlight
          value={selectedSet}
          onValueChange={(values) => setSelectedSet(values)}
          items={Object.values(relicSets ?? {}).reverse()}
          itemToStringLabel={(item: RelicSet) => item.name}
          itemToStringValue={(item) => String(item.id)}
        >
          <ComboboxChips ref={anchor} className={"w-full max-w-xs"}>
            <ComboboxValue>
              {(values) => {
                return (
                  <>
                    {values.map((value: RelicSet) => {
                      return (
                        <ComboboxChip key={value.id}>{value.name}</ComboboxChip>
                      );
                    })}
                    <ComboboxChipsInput placeholder="Filter by set..." />
                  </>
                );
              }}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No relic sets found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem
                  key={item.id}
                  value={item}
                  className={"flex items-center gap-2 py-2"}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="size-6 shrink-0"
                  />
                  <span className="line-clamp-2">{item.name}</span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className={cn(`grid grid-cols-7 gap-4`, contentClassName)}>
        {filteredRelics.length > 0 ? (
          filteredRelics.map((item) => {
            return (
              <RelicCard
                key={item.id}
                relic={item}
                onClick={() => onSelect?.(item.id as string, item.type)}
                renderAction={withDelete && <DeleteRelicDialog relic={item} />}
              />
            );
          })
        ) : (
          <div
            className={cn(
              `col-span-7 py-20 text-center text-muted-foreground`,
              emptyClassName,
            )}
          >
            No relics of this type.
          </div>
        )}
      </div>
    </>
  );
};

export default RelicList;
