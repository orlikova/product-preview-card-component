import { TypographyOptions } from "@mui/material/styles/createTypography";
import { COLORS_LIGHT } from "./colorsLight";

export const TYPOGRAPHY_CONFIG: TypographyOptions = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  body1: {
    color: COLORS_LIGHT.grayBlue,
  },
  overline: {
    color: COLORS_LIGHT.grayBlue,
  },
  h3: {
    color: COLORS_LIGHT.darkBlue,
    fontWeight: 700,
    fontFamily: [
      "Fraunces",
      "-apple-system",
      "serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  h4: {
    color: COLORS_LIGHT.primary,
    fontWeight: 700,
    fontFamily: [
      "Fraunces",
      "-apple-system",
      "serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};
