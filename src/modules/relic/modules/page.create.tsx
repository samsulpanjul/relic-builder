"use client";

import { useGetRelicSets } from "../hooks/use-get-relic-sets.hook";
import { useGetRelics } from "../hooks/use-get-relics.hook";
import {
  DEFAULT_CREATE_RELIC,
  useCreateRelicStore,
} from "./store/use-create-relic.store";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/src/components/ui/combobox";
import { useMemo } from "react";
import { useParsedDesc } from "@/src/hooks/use-parsed-desc.hook";
import { RelicSet } from "../types/relic-set.type";
import { useGetMainAffixes } from "../hooks/use-get-main-affixes.hook";
import { useGetSubAffixes } from "../hooks/use-get-sub-affixes.hook";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { ORNAMENTS, RELIC_PART, RELIC_TYPE_MAP } from "./utils/constants";
import { useGetStatProperties } from "../hooks/use-get-stat-properties.hook";
import { isPercent } from "@/src/utils/helpers";

const CreateRelicPage = () => {
  const { relic, updateRelic, updateSubStat } = useCreateRelicStore();
  const parsedDesc = useParsedDesc();

  // DATA
  const { data: allRelics, isPending: isPendingAllRelics } = useGetRelics();
  const { data: allRelicSets, isPending: isPendingRelicSets } =
    useGetRelicSets();
  const { data: statPorperties } = useGetStatProperties();
  const { data: mainAffixes } = useGetMainAffixes();
  const { data: subAffixes } = useGetSubAffixes();

  const filteredRelicSets = useMemo(() => {
    if (!allRelicSets) return [];

    const allSets = Object.values(allRelicSets);

    const isOrnament = ORNAMENTS.map((o) => o.toLowerCase()).includes(
      relic.type as string,
    );

    if (isOrnament) {
      return allSets
        .filter((set) => set.id.toString().startsWith("3"))
        .reverse();
    } else {
      return allSets
        .filter((set) => set.id.toString().startsWith("1"))
        .reverse();
    }
  }, [allRelicSets, relic.type]);

  const currentRelicData = useMemo(
    () => Object.values(allRelics ?? {}).find((d) => d.id === relic.relic_id),
    [allRelics, relic.relic_id],
  );

  const currentMainAffix = useMemo(() => {
    if (!mainAffixes || !currentRelicData?.main_affix_id) return null;

    return mainAffixes?.[currentRelicData?.main_affix_id];
  }, [mainAffixes, currentRelicData?.main_affix_id]);

  const mainAffixProperty = useMemo(() => {
    if (!currentMainAffix || !relic.main_affix_id) return null;

    return Object.values(currentMainAffix ?? {}).find(
      (item) => item.AffixID === relic.main_affix_id,
    )?.Property;
  }, [currentMainAffix, relic.main_affix_id]);

  const handleChangeType = (item: string) => {
    if (relic.type === item.toLowerCase()) return;

    updateRelic({
      ...DEFAULT_CREATE_RELIC,
      type: item.toLowerCase(),
    });
  };

  console.log(relic);

  return (
    <div className="card grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="rounded-lg bg-primary w-fit overflow-hidden h-fit">
            <div className="flex">
              {RELIC_PART.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    handleChangeType(item);
                  }}
                  className={`${relic.type === item.toLowerCase() ? "bg-background" : ""} p-1 cursor-pointer`}
                >
                  <img
                    src={`/icons/part/part${item}.webp`}
                    alt={item}
                    className="size-8"
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              {ORNAMENTS.map((item) => (
                <div
                  key={item}
                  className={`${relic.type === item.toLowerCase() ? "bg-background" : ""} p-1 cursor-pointer flex-1`}
                  onClick={() => {
                    handleChangeType(item);
                  }}
                >
                  <img
                    src={`/icons/part/part${item}.webp`}
                    alt={item}
                    className="size-8 mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="relic-set">Set</label>
            <Combobox
              items={filteredRelicSets}
              value={
                filteredRelicSets.find((s) => s.id === relic.relic_set_id) ||
                null
              }
              disabled={
                isPendingRelicSets ||
                isPendingAllRelics ||
                filteredRelicSets.length === 0 ||
                !relic.type
              }
              itemToStringLabel={(item: RelicSet) => item.name}
              itemToStringValue={(item) => String(item.id)}
              onValueChange={(relicSet) => {
                const relicData = Object.values(allRelics ?? {}).find(
                  (data) =>
                    data.set_id === relicSet?.id &&
                    data.rarity === 5 &&
                    RELIC_TYPE_MAP[relic.type] === data.type,
                );

                updateRelic({
                  relic_set_id: relicSet?.id,
                  relic_id: relicData?.id,
                });
              }}
            >
              <ComboboxInput id="relic-set" placeholder="Select relic set" />
              <ComboboxContent>
                <ComboboxEmpty>No relics found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem
                      key={item.id}
                      value={item}
                      className={"flex items-center gap-1 py-2"}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="size-6 shrink-0"
                      />{" "}
                      <span className="line-clamp-2">{item.name}</span>
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <label htmlFor="main-affix">
              <span className="font-medium">Main Stat</span>
              <Select
                value={String(relic.main_affix_id || "")}
                onValueChange={(val) => {
                  const newMainId = Number(val);

                  const newMainProperty = Object.values(
                    currentMainAffix ?? {},
                  ).find((item) => item.AffixID === newMainId)?.Property;

                  // CHECK IF THERE IS SOME SUB AFFIX THAT IS SAME WITH MAIN AFFIX
                  const cleanedSubAffixes = relic.sub_affixes.map((sub) => {
                    if (!subAffixes || !sub.sub_affix_id) return sub;

                    const subProperty =
                      subAffixes[5][sub.sub_affix_id]?.Property;

                    if (subProperty === newMainProperty) {
                      return {
                        sub_affix_id: undefined,
                        count: undefined,
                        step: undefined,
                      };
                    }

                    return sub;
                  });

                  updateRelic({
                    main_affix_id: newMainId,
                    sub_affixes: cleanedSubAffixes,
                  });
                }}
              >
                <SelectTrigger
                  id="main-affix"
                  disabled={!currentRelicData?.main_affix_id}
                  className="w-full"
                >
                  <SelectValue placeholder="Select Main Stat" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    {Object.values(currentMainAffix ?? {}).map((item) => {
                      return (
                        <SelectItem
                          key={`${item.AffixID} - ${item.GroupID}`}
                          value={String(item.AffixID)}
                        >
                          {statPorperties?.[item.Property].name}{" "}
                          {isPercent(item.Property) ? "%" : ""}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
          </div>
        </div>
        <div>
          {!!relic.relic_set_id &&
            allRelicSets?.[relic.relic_set_id].set_bonus.map(
              ([count, bonus]) => {
                const params = bonus.properties.map((p) => p.value);

                const htmlContent = parsedDesc(bonus.desc, params);

                return (
                  <div key={count}>
                    <h4 className="font-bold">{count}-Piece Bonus:</h4>
                    <p
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  </div>
                );
              },
            )}
        </div>
      </div>
      <div>
        <p>Sub Stat</p>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <Select
                key={i}
                value={String(relic.sub_affixes[i].sub_affix_id || "")}
                onValueChange={(val) => {
                  updateSubStat(i, { sub_affix_id: Number(val) });
                }}
              >
                <SelectTrigger disabled={!mainAffixProperty} className="w-52">
                  <SelectValue placeholder="Select Sub Stat" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    {subAffixes &&
                      Object.values(subAffixes[5] ?? {}).map((item) => {
                        return (
                          <SelectItem
                            disabled={
                              item.Property === mainAffixProperty ||
                              relic.sub_affixes.some(
                                (r) => r.sub_affix_id === item.AffixID,
                              )
                            }
                            key={item.Property}
                            value={String(item.AffixID)}
                          >
                            {statPorperties?.[item.Property].name}{" "}
                            {isPercent(item.Property) ? "%" : ""}
                          </SelectItem>
                        );
                      })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateRelicPage;
