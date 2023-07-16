import { axios } from "./axios";
import type { Incident } from "./incident.types";

export async function getActiveIncidents(
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get<Incident[]>("/incidents/active", {
    signal: options?.signal,
  });
  return data;
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