import { compose } from "../../Utils/utils";
import { tariffValidations } from "./TariffsValidation";

export const tariffContext = {
  tariffsWithAllRequiredFields: new Set(),
  tariffsWithPartialFields: new Set(),
  tariffsWithoutHDChannels: new Set(),
  object: null,
  maxValue: {
    HDChannels: {},
    price: {},
    speedInternet: {},
    channels: {},
  },
};

export const validationTariff = compose(...tariffValidations);
