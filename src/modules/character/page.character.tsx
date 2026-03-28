"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCharacters } from "./hooks/use-characters.hook";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import PathIcon from "@/src/components/icons/path.icon";
import ElementIcon from "@/src/components/icons/element.icon";
import EditCard from "./components/edit-card.character";
import { useCharacterStore } from "./store/use-character.store";
import { useLightcones } from "./hooks/use-lightcones.hook";
import { useParsedDesc } from "@/src/hooks/use-parsed-desc.hook";

const CharacterPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: allCharacters, isPending } = useCharacters();
  useLightcones();
  const parseDesc = useParsedDesc();
  const [isEdit, setIsEdit] = useState(false);

  // INITIATE STORE VALUE
  const { setId, setChar } = useCharacterStore();
  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id, setId]);

  const char = useMemo(() => {
    return allCharacters?.[id];
  }, [allCharacters, id]);

  useEffect(() => {
    if (char) {
      setChar(char);
    }
  }, [char, setChar]);

  if (isPending || !char) {
    return;
  }

  return (
    <div className="wrapper my-8 pb-16">
      <div className="rounded-xl h-172 flex overflow-hidden relative">
        <Button
          className="absolute top-2 left-2 z-60"
          onClick={() => setIsEdit((prev) => !prev)}
          size={"lg"}
        >
          {isEdit ? "Close" : "Edit"}
        </Button>

        {/* LEFT IMAGE */}
        <div className="w-72 h-full overflow-hidden p-4 relative z-10">
          <div className="bg-[url(/space.webp)] bg-cover bg-center size-full absolute left-0 top-0 -z-50 opacity-75" />
          <Image
            src={char?.portrait ?? ""}
            alt={String(char?.name) ?? ""}
            width={2048}
            height={2048}
            className="object-cover object-center scale-200 h-full"
          />
        </div>

        {/* RIGHT CARD */}
        <motion.div
          layout
          transition={{
            layout: { duration: 0.5, ease: "backOut" },
            opacity: { duration: 0.3 },
          }}
          className={`
                      ${
                        isEdit
                          ? "absolute inset-0 z-50 w-full ml-0"
                          : "relative flex-1 -ml-4 z-20"
                      }
                      p-4 rounded-xl bg-background/50 backdrop-blur-lg flex flex-col
                    `}
        >
          <motion.div
            layout
            transition={{ duration: 0.5, ease: "circOut" }}
            className={isEdit ? "pl-15 transition-all" : "pt-0 transition-all"}
          >
            <div className="flex items-center gap-2">
              <p
                className="text-3xl font-bold tracking-wide"
                dangerouslySetInnerHTML={{
                  __html: parseDesc(char.name, []) ?? "Character Name",
                }}
              />
              <PathIcon src={char?.path ?? ""} />
              <ElementIcon src={char?.element ?? ""} />
            </div>
          </motion.div>

          {isEdit ? (
            <EditCard />
          ) : (
            <div>
              {!isEdit && <p className="text-xl font-semibold">Lv. 80</p>}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterPage;
