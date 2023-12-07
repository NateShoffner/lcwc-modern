import { useQuery } from "react-query";
import { Agency } from "@api/agency.types";
import { getAgencies } from "@api/agencies";

export function useGetAgencies(category: string) {
  const key = `agencies_${category.toLowerCase()}`;
  const query = useQuery<Agency[], Error>(
    key,
    ({ signal }) => getAgencies(category, { signal }),
    {
      staleTime: 300000, // 5 minutes
      keepPreviousData: true,
    }
  );
  return query;
}
