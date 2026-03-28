import { BASE_URL } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetMainAffixes = () => {
  return useQuery({
    queryKey: ["main-affixes"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL.neonteam}/relics/main-affixes`);
      const data = await response.json();

      return data;
    },
  });
};
