"use client";

import { useCharacters } from "./hooks/useCharacters";

export default function Home() {
  const { data: dataCharacter } = useCharacters();

  console.log(`character data:`, dataCharacter?.[0]);

  return (
    <div className="bg-primary-dark text-primary-green h-screen wrapper">
      <div className="flex gap-2 max-w-full overflow-auto">
        {dataCharacter?.map((item) => {
          return (
            <img
              key={item.id}
              src={item.miniIcon}
              alt={item.name}
              className={`rounded-full border-2`}
            />
          );
        })}
      </div>
      <p className="text-7xl text-center font-bold">Test</p>
    </div>
  );
}
