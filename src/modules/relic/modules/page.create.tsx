"use client";

import { useGetRelicSets } from "../hooks/use-get-relic-sets.hook";
import { useGetRelics } from "../hooks/use-get-relics.hook";
import {
  DEFAULT_CREATE_RELIC,
  useCreateRelicStore,
} from "./store/use-create-relic.store";
import React, { useEffect, useMemo } from "react";
import { useParsedDesc } from "@/src/hooks/use-parsed-desc.hook";
import { useGetMainAffixes } from "../hooks/use-get-main-affixes.hook";
import TypeCreateRelic from "./components/type.create-relic";
import SetCreateRelic from "./components/set.create-relic";
import MainAffixCreateRelic from "./components/main-affix.create-relic";
import SubAffixCreateRelic from "./components/sub-affix.create-relic";

const CreateRelicPage = () => {
  const relic = useCreateRelicStore((state) => state.relic);
  const updateRelic = useCreateRelicStore((state) => state.updateRelic);

  const parsedDesc = useParsedDesc();

  useEffect(() => {
    updateRelic(DEFAULT_CREATE_RELIC);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // DATA
  const { data: allRelics } = useGetRelics();
  const { data: allRelicSets } = useGetRelicSets();
  const { data: mainAffixes } = useGetMainAffixes();

  const currentRelicData = useMemo(
    () => Object.values(allRelics ?? {}).find((d) => d.id === relic.relic_id),
    [allRelics, relic.relic_id],
  );

  const currentMainAffixData = useMemo(() => {
    if (!mainAffixes || !currentRelicData?.main_affix_id) return;

    return mainAffixes?.[currentRelicData?.main_affix_id];
  }, [mainAffixes, currentRelicData?.main_affix_id]);

  const mainAffixProperty = useMemo(() => {
    if (!currentMainAffixData || !relic.main_affix_id) return;

    return Object.values(currentMainAffixData ?? {}).find(
      (item) => item.AffixID === relic.main_affix_id,
    )?.Property;
  }, [currentMainAffixData, relic.main_affix_id]);

  return (
    <div className="card grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <p className="text-xl font-semibold">Relic Set</p>
        <div className="flex gap-4">
          {/* TYPE */}
          <TypeCreateRelic />

          <div className="flex-1 space-y-2">
            {/* SET */}
            <SetCreateRelic />

            {/* MAIN STAT */}
            <MainAffixCreateRelic
              currentMainAffixData={currentMainAffixData}
              currentRelicData={currentRelicData}
            />
          </div>
        </div>

        {/* SET BONUS */}
        <div>
          {!!relic.relic_set_id &&
            allRelicSets?.[relic.relic_set_id].set_bonus.map(
              ([count, bonus]) => {
                const params = bonus.properties.map((p) => p.value);

                const htmlContent = parsedDesc(bonus.desc, params);

                return (
                  <div key={count}>
                    <h4 className="font-bold">{count}-Piece:</h4>
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

      {/* SUB STAT */}
      <SubAffixCreateRelic mainAffixProperty={mainAffixProperty} />
    </div>
  );
};

export default CreateRelicPage;
