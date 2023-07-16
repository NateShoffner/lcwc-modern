import { useQuery } from "react-query";
import { Incident } from "../api/incident.types";
import { getActiveIncidents } from "../api/incidents";

export function useGetActiveIncidents() {
    const query = useQuery<Incident[], Error>(
        "active_incidents",
        ({ signal }) => getActiveIncidents({ signal }),
        { 
            staleTime: 1000 * 5, // 5 seconds
            keepPreviousData: true }
      );
  return query;
}