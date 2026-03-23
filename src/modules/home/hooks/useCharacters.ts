import { CharacterType } from "@/src/utils/types";
import { useQuery } from "@tanstack/react-query";
import { CharacterData } from "starrail.js";

export const useCharacters = () => {
  return useQuery({
    queryKey: ["character-list"],
    queryFn: async (): Promise<CharacterType[]> => {
      const res = await fetch("/api/characters");
      const response = await res.json();

      return response;
    },
  });
};
