import { useQuery } from "react-apollo";
import { TARIFFS_QUERY } from "../Queries/tariffsQuery";
import { data } from "../Consts/data";

const getTariffsOptions = (url, provider) => ({
  skip: !provider?.id,
  variables: {
    filter: `region.url=${url}&provider.url_name=${provider.url_name}`,
    limit: 100,
    offset: 0,
    sort: "name",
  },
  notifyOnNetworkStatusChange: true,
});

export default function useLoadTariffs(url, provider) {
  const tariffOptions = getTariffsOptions(url, provider);

  const tariffs = useQuery(TARIFFS_QUERY, tariffOptions);

  return data;
  //return tariffs?.data?.tariffs?.data || [];
}
