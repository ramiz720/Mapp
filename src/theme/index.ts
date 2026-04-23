import { darkColors, lightColors } from "./colors";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { textVariants, typography } from "./typography";

export const lightTheme = {
  colors: lightColors,
  spacing,
  radii,
  typography,
  textVariants,
  sizes,
  mode: "light" as const,
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  radii,
  typography,
  textVariants,
  sizes,
  mode: "dark" as const,
};

export type Theme = typeof lightTheme | typeof darkTheme;

export * from "./colors";
export * from "./components/button";
export * from "./components/card";
export * from "./components/input";

export * from "./palette";
export * from "./radii";
export * from "./sizes";
export * from "./spacing";
export * from "./styles";
export * from "./typography";