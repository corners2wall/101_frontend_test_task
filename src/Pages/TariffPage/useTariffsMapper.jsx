import { tariffContext, validationTariff } from "./tariffsConst";

export default function useTariffsMapper(data) {
  const result = data.reduce((ctx, tariffItem) => {
    ctx.object = tariffItem;

    return validationTariff(ctx);
  }, tariffContext);

  const sortedData = [
    ...result.tariffsWithAllRequiredFields,
    ...result.tariffsWithPartialFields,
    ...result.tariffsWithoutHDChannels,
  ];

  return { sortedData };
}
