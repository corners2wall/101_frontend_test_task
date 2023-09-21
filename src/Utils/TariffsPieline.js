const defaultTariffShape = {
  name: "",
  displayPrice: null,
  internet: {
    speed_in: null,
  },
  tv: {
    channels: null,
    channels_hd: null,
  },
};

export function useValidateChannels(ctx, next) {
  const channels = ctx.object?.tv?.channels;
}

export function useValidateHDChannels(ctx, next) {
  const hdChannels = ctx.object?.tv?.channels_hd;
}

export function useValidateInternetSpeed(ctx, next) {
  const internetSpeed = ctx.object?.internet?.speed_in;
}

export function useValidatePrice(ctx, next) {
  const price = ctx.object?.price;
}
