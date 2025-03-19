import {IoClose} from "react-icons/io5";
import useAppContext from "../../context/useAppContext.ts";
import {clearFilterButton} from "../../utils/testid-list.ts";
import {Button, ButtonProps} from "@mui/material";

export default function ClearFilterButton({...props }: ButtonProps) {
  const { priceFilter, setPriceFilter } = useAppContext();

  function clearFilter() {
    setPriceFilter(undefined);
  }

  return priceFilter ? (
    <Button
      onClick={clearFilter}
      data-testid={clearFilterButton}
      variant="text"
      startIcon={<IoClose />}
      {...props}
    >
      Limpar filtro
    </Button>
  ) : null;
}