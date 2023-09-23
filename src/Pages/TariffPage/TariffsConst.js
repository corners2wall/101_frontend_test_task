import { PROFIT_TARIFF_VALUE } from "../../Const/stringConst";
import FieldHelper from "../../Utils/FieldHelper";
import { compose, findMaxValue, findMinValue } from "../../Utils/utils";
import { tariffValidations } from "./tariffsValidation";

const speed_in = new FieldHelper(
  0,
  PROFIT_TARIFF_VALUE.bestSpeed,
  findMaxValue
);
const displayPrice = new FieldHelper(
  Infinity,
  PROFIT_TARIFF_VALUE.bestPrice,
  findMinValue
);
const channels = new FieldHelper(
  0,
  PROFIT_TARIFF_VALUE.mostChannels,
  findMaxValue
);
const channels_hd = new FieldHelper(
  0,
  PROFIT_TARIFF_VALUE.mostHDChannels,
  findMaxValue
);

export const tariffContext = {
  tariffsWithAllRequiredFields: new Set(),
  tariffsWithPartialFields: new Set(),
  tariffsWithoutHDChannels: new Set(),
  object: null,
  profit: {
    internet: {
      speed_in,
    },
    displayPrice,
    tv: {
      channels,
      channels_hd,
    },
  },
};

export const validationTariff = compose(...tariffValidations);
