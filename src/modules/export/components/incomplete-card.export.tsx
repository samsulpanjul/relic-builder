import Image from "next/image";
import Link from "next/link";
import { PlayingCard } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { IncompleteCharacter, RELIC_SLOTS } from "../utils/helpers";

const SLOT_LABELS: Record<string, string> = {
  HEAD: "Head",
  HAND: "Hands",
  BODY: "Body",
  FOOT: "Feet",
  NECK: "Sphere",
  OBJECT: "Rope",
};

const slotClass = (isMissing: boolean) =>
  cn(
    "size-6 rounded-md border flex items-center justify-center",
    isMissing
      ? "border-dashed border-destructive bg-destructive/20 [&>*]:opacity-30"
      : "border-primary/40 bg-white/10",
  );

interface Props {
  char: IncompleteCharacter;
}

const IncompleteCardExport = ({ char }: Props) => {
  const missingLabels = [
    ...(char.hasLightcone ? [] : ["Lightcone"]),
    ...char.missingSlots.map((slot) => SLOT_LABELS[slot]),
  ];

  return (
    <Link
      href={`/character/${char.id}`}
      prefetch={false}
      title={`Missing: ${missingLabels.join(", ")}`}
      className="flex items-center gap-3 rounded-xl border border-secondary/50 bg-white/5 p-2 transition-colors hover:border-primary hover:bg-white/15"
    >
      <Image
        unoptimized
        width={128}
        height={128}
        src={`https://fribbels.github.io/hsr-optimizer/assets/icon/avatar/${char.id}.webp`}
        alt={char.name}
        className="size-12 shrink-0 rounded-full border-2 border-secondary bg-white/5"
      />

      <div className="min-w-0 space-y-1">
        <p className="truncate text-sm font-semibold">{char.name}</p>
        <div className="flex gap-1">
          <div className={slotClass(!char.hasLightcone)}>
            <PlayingCard className="size-4" />
          </div>
          {RELIC_SLOTS.map((slot) => (
            <div
              key={slot}
              className={slotClass(char.missingSlots.includes(slot))}
            >
              <Image
                unoptimized
                width={24}
                height={24}
                src={`/icons/part/part${slot}.webp`}
                alt={SLOT_LABELS[slot]}
                className="size-5"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default IncompleteCardExport;
