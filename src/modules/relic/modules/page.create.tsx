"use client";

import { Button } from "@/src/components/ui/button";
import { useGetRelicSets } from "../hooks/use-get-relic-sets.hook";
import { useGetRelics } from "../hooks/use-get-relics.hook";
import { useCreateRelicStore } from "./store/use-create-relic.store";

const RELIC_PART = ["Head", "Hand", "Body", "Feet"];
const ORNAMENTS = ["Planar", "Link"];

const CreateRelicPage = () => {
  const { relic, updateRelic } = useCreateRelicStore();
  console.log(`relic:`, relic);
  const { data: allRellics } = useGetRelics();
  const { data: allRelicSets } = useGetRelicSets();

  return (
    <div className="card">
      <p>Create page</p>
      <div className="rounded-lg bg-primary w-fit overflow-hidden">
        <div className="flex">
          {RELIC_PART.map((item) => (
            <div
              key={item}
              onClick={() => {
                updateRelic({ type: item.toLowerCase() });
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
                updateRelic({ type: item.toLowerCase() });
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
    </div>
  );
};

export default CreateRelicPage;
