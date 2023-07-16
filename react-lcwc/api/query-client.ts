import { QueryClient } from "react-query";

const defaultQueryConfig = { staleTime: 60000 };

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
