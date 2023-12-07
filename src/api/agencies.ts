import { axios } from "./axios";
import type { AgenciesData  } from "./agency.types";

export async function getAgencies(
  category: string,
  options?: { signal?: AbortSignal },
) {
  const { data } = await axios.get<AgenciesData>(`/agencies/${category}`, {
    signal: options?.signal,
  });
  return data.data;
}