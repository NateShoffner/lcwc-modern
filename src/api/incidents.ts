import { axios } from "./axios";
import type { Incident, IncidentsData } from "./incident.types";

export async function getActiveIncidents(
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get<IncidentsData>("/incidents/active", {
    signal: options?.signal,
  });
  return data.data;
}

export async function getIncident(
    number: number,
    options?: { signal?: AbortSignal }
  ) {
    const { data } = await axios.get<Incident>(`/incident/${number}`, {
      signal: options?.signal,
    });
    return data;
  }