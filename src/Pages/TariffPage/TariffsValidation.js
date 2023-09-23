function checkChannels(ctx) {
  const channels = ctx.object?.tv?.channels;

  if (!channels) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function checkInternetSpeed(ctx) {
  const internetSpeed = ctx.object?.internet?.speed_in;

  if (!internetSpeed) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function checkPrice(ctx) {
  const price = ctx.object?.displayPrice;

  if (!price) ctx.tariffsWithPartialFields.add(ctx.object);

  return ctx;
}

function checkHDChannels(ctx) {
  const hdChannels = ctx.object?.tv?.channels_hd;

  if (!hdChannels) {
    ctx.tariffsWithPartialFields.delete(ctx.object);
    ctx.tariffsWithoutHDChannels.add(ctx.object);
  }

  return ctx;
}

function checkAllFields(ctx) {
  const object = ctx.object;
  const hasPartialFields =
    ctx.tariffsWithoutHDChannels.has(object) ||
    ctx.tariffsWithPartialFields.has(object);

  if (!hasPartialFields) ctx.tariffsWithAllRequiredFields.add(object);

  return ctx;
}

function findBestValue(ctx) {
  const currentChannels = ctx.object?.tv?.channels ?? 0;
  const currentInternetSpeed = ctx.object?.internet?.speed_in ?? 0;
  const currentPrice = ctx.object?.displayPrice ?? Infinity;
  const currentHdChannels = ctx.object?.tv?.channels_hd ?? 0;

  const {
    profit: { internet, displayPrice, tv },
  } = ctx;

  displayPrice.compare(currentPrice);
  tv.channels.compare(currentChannels);
  tv.channels_hd.compare(currentHdChannels);
  internet.speed_in.compare(currentInternetSpeed);

  return ctx;
}

export const tariffValidations = [
  findBestValue,
  checkAllFields,
  checkHDChannels,
  checkChannels,
  checkInternetSpeed,
  checkPrice,
];
