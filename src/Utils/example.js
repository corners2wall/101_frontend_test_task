import Pipeline from "./Pipeline";

const context = {
  first: [],
  last: [],
  maxValue: {
    HDChannels: {},
    price: {},
    speedInternet: {},
    channels: {},
  },
};

const tariffsPipeline = new Pipeline({});

tariffsPipeline.push();

tariffsPipeline.push();
