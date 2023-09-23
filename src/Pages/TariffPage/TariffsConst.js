import CompareHelper from "../../Utils/CompareHelper";
import { compose } from "../../Utils/utils";
import { tariffValidations } from "./tariffsValidation";

export const tariffContext = {
  tariffsWithAllRequiredFields: new Set(),
  tariffsWithPartialFields: new Set(),
  tariffsWithoutHDChannels: new Set(),
  object: null,
  profit: {
    internet: {
      speed_in: new CompareHelper(0, "Лучшая скорость"),
    },
    displayPrice: new CompareHelper(Infinity, "Самый дешевый"),
    tv: {
      channels: new CompareHelper(0, "Больше всего каналов"),
      channels_hd: new CompareHelper(0, "Больше всего HD каналов"),
    },
  },
};

export const validationTariff = compose(...tariffValidations);

// remove
export const bestShape = {
  internet: {
    speed_in: new CompareHelper(0),
  },
  displayPrice: new CompareHelper(Infinity),
  tv: {
    channels: new CompareHelper(0),
    channels_hd: new CompareHelper(0),
  },
};
