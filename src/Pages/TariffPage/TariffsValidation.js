function useValidateChannels(ctx) {
  const channels = ctx.object?.tv?.channels;

  if (!channels) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function useValidateInternetSpeed(ctx) {
  const internetSpeed = ctx.object?.internet?.speed_in;

  if (!internetSpeed) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function useValidatePrice(ctx) {
  const price = ctx.object?.displayPrice;

  if (!price) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function useValidateHDChannels(ctx) {
  const hdChannels = ctx.object?.tv?.channels_hd;

  if (!hdChannels) {
    ctx.tariffsWithPartialFields.delete(ctx.object);
    ctx.tariffsWithoutHDChannels.add(ctx.object);
  }

  return ctx;
}

function useValidateAllFields(ctx) {
  const object = ctx.object;
  const hasPartialFields =
    ctx.tariffsWithoutHDChannels.has(object) ||
    ctx.tariffsWithPartialFields.has(object);

  if (!hasPartialFields) ctx.tariffsWithAllRequiredFields.add(object);

  return ctx;
}

export const tariffValidations = [
  useValidateAllFields,
  useValidateChannels,
  useValidateInternetSpeed,
  useValidatePrice,
  useValidateHDChannels,
];
