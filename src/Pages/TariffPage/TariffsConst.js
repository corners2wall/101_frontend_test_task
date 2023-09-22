import CompareHelper from "../../Utils/CompareHelper";
import { compose } from "../../Utils/utils";
import { tariffValidations } from "./tariffsValidation";

export const tariffContext = {
  tariffsWithAllRequiredFields: new Set(),
  tariffsWithPartialFields: new Set(),
  tariffsWithoutHDChannels: new Set(),
  object: null,
  maxValue: {
    hdChannels: new CompareHelper(),
    price: new CompareHelper(),
    internetSpeed: new CompareHelper(),
    channels: new CompareHelper(),
  },
};

export const validationTariff = compose(...tariffValidations);
