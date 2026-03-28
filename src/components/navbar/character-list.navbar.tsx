"use client";

import Link from "next/link";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useCharacters } from "@/src/modules/character/hooks/use-characters.hook";
import Image from "next/image";

const CharacterNavbar = () => {
  const { data } = useCharacters();
  const dataCharacter = Object.values(data ?? {});

  return (
    <div className="wrapper">
      <ScrollArea className="w-full">
        <div className="flex gap-4 w-max p-4">
          {dataCharacter?.reverse().map((item) => {
            return (
              <Link
                href={`/${item.id}`}
                key={item.id}
                className={`rounded-full border-2 border-secondary overflow-hidden size-16 bg-white/5 hover:bg-white/50 transition-colors duration-300 p-px`}
              >
                <Image
                  width={128}
                  height={128}
                  src={`https://fribbels.github.io/hsr-optimizer/assets/icon/avatar/${item.id}.webp`}
                  alt={item.tag}
                />
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CharacterNavbar;
