import { useQuery } from "react-query";
import { Incident } from "@api/incident.types";
import { getIncident } from "@api/incidents";

export function useGetIncident(number: number) {
    const key = `incident_${number}`;
    const query = useQuery<Incident, Error>(
        key,
        ({ signal }) => getIncident(number, { signal }),
        { 
            staleTime: 1000 * 5, // 5 seconds
            keepPreviousData: true }
      );
  return query;
}