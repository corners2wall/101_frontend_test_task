import { TableCell } from "@material-ui/core"

function renderCell(property, object, payload) {
    
    return (<TableCell>
      {property ? property : "-"}
    </TableCell>)
}

export const tariffColumns = [
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