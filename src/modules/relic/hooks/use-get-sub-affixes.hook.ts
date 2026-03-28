import { BASE_URL } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetSubAffixes = () => {
  return useQuery({
    queryKey: ["sub-affixes"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL.neonteam}/relics/sub-affixes`);
      const data = await response.json();

      return data;
    },
  });
};
