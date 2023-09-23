import { useQuery } from "react-apollo";
import { PROVIDERS_QUERY } from "../Queries/providersQuery";

export default function useLoadProviders(url) {
  const providers = useQuery(PROVIDERS_QUERY, {
    variables: {
      filter: `region.url=${url}`,
      limit: 50,
      offset: 0,
      sort: "name",
    },
    notifyOnNetworkStatusChange: true,
  });

  return providers?.data?.providers?.data || [];
}
