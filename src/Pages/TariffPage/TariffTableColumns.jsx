function renderCell(property, object, payload) {
    if (!property) return <span> - </span>

    return <span>{property}</span>
}

export const tariffTableColumns = [
    {
        title: "Название тарифа",
        dataPath: "name",
        renderCell,
      },
      {
        title: "Цена",
        dataPath: "displayPrice",
        renderCell,
      },
      {
        title: "Скорость интернета",
        dataPath: "internet.speed_in",
        renderCell,
      },
      {
        title: "Количество телеканалов",
        dataPath: "tv.channels",
        renderCell,
      },
      {
        title: "Количество HD-телеканалов",
        dataPath: "tv.channels_hd",
        renderCell,
      },
]