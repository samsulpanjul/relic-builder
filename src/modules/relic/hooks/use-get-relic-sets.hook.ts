import { BASE_URL } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetRelicSets = () => {
  return useQuery({
    queryKey: ["relic-sets"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL.neonteam}/relics/sets`);
      const data = await response.json();

      return data;
    },
  });
};
