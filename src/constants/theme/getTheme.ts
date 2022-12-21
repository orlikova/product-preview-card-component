import { createTheme } from "@mui/material";
import { PALETTE_CONFIG } from "./paletteConfig";
import { TYPOGRAPHY_CONFIG } from "./typographyConfig";

export const getTheme = createTheme({
  typography: TYPOGRAPHY_CONFIG,
  palette: PALETTE_CONFIG,
});
