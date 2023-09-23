import { TariffCell, SmartCell, BestCell } from "./TariffTableCell";

export const tariffColumns = [
  {
    title: "Название тарифа",
    dataPath: "name",
    renderCell: TariffCell,
  },
  {
    title: "Цена",
    dataPath: "displayPrice",
    renderCell: SmartCell,
  },
  {
    title: "Скорость интернета",
    dataPath: "internet.speed_in",
    renderCell: SmartCell,
  },
  {
    title: "Количество телеканалов",
    dataPath: "tv.channels",
    renderCell: SmartCell,
  },
  {
    title: "Количество HD-телеканалов",
    dataPath: "tv.channels_hd",
    renderCell: SmartCell,
  },
  {
    title: "Самый выгодный",
    dataPath: "",
    renderCell: BestCell,
  },
];
