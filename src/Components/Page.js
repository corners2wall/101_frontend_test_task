import { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
import { tariffColumns } from "../Pages/TariffPage/TariffTableColumns";
import useTariffsMapper from "../Pages/TariffPage/useTariffsMapper";
import useLoadTariffs from "../Hooks/useLoadTariffs";
import useLoadProviders from "../Hooks/useLoadProviders";

const REGION_URL = "moskva";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 500,
  },
}));

function Page() {
  const classes = useStyles();

  const [currentProvider, setCurrentProvider] = useState({});

  const providers = useLoadProviders(REGION_URL);

  const tariffs = useLoadTariffs(REGION_URL, currentProvider);

  const { sortedData, profit } = useTariffsMapper(tariffs);

  const handleChange = (event) => {
    const foundProvider = providers.find((x) => x.id === +event.target.value);

    if (foundProvider) setCurrentProvider(foundProvider);
  };

  return (
    <Container>
      <Typography variant="h3" component="h2">
        Таблица сравнения
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="provider-select-label">Провайдер</InputLabel>
        <Select
          labelId="provider-select-label"
          id="provider-select"
          value={currentProvider?.id || 0}
          onChange={handleChange}
          label="Provider"
          MenuProps={{ classes: { paper: classes.menuPaper } }}
        >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {providers
            .filter((x) => x.info.cnt_tariffs > 0)
            .map((provider) => (
              <MenuItem key={provider.id} value={provider.id}>
                {provider.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table data={sortedData} columns={tariffColumns} payload={{ profit }} />
      </TableContainer>
    </Container>
  );
}

export default Page;
