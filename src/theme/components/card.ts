import { ViewStyle } from "react-native";
import { Theme } from "../index";

export type CardVariantStyle = {
  container: ViewStyle;
};

export type CardVariant = "elevated" | "outlined" | "filled";

export const getCardVariants = (
  theme: Theme,
): Record<CardVariant, CardVariantStyle> => ({
  elevated: {
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.l,
      shadowColor: theme.colors.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
  },
  outlined: {
    container: {
      backgroundColor: "transparent",
      borderRadius: theme.radii.l,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
  },
  filled: {
    container: {
      backgroundColor: theme.colors.surfaceHighlight,
      borderRadius: theme.radii.l,
      borderWidth: 0,
    },
  },
});