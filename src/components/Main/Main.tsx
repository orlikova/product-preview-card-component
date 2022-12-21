import { Stack, StackProps } from "@mui/material";
import { COLORS_LIGHT } from "../../constants/theme/colorsLight";
import { ProductCard } from "../ProductCard/ProductCard";

export const Main = ({ children, ...rest }: StackProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", backgroundColor: COLORS_LIGHT.cream }}
    >
      <ProductCard />
    </Stack>
  );
};
