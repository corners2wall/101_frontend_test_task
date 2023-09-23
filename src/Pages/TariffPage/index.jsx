import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TableContainer,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import { REGION_URL } from "../../Const/stringConst";
import useLoadProviders from "../../Hooks/useLoadProviders";
import useLoadTariffs from "../../Hooks/useLoadTariffs";
import useTariffsMapper from "./useTariffsMapper";
import Table from "../../Components/Table";
import { tariffColumns } from "./TariffTableColumns";
import MainBar from "../../Components/MainBar";

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

export default function TariffPage() {
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
    <>
      <MainBar />
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
          <Table
            data={sortedData}
            columns={tariffColumns}
            payload={{ profit }}
          />
        </TableContainer>
      </Container>
    </>
  );
}
