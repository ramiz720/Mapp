import { TextStyle, ViewStyle } from "react-native";
import { Theme } from "../index";

export type InputVariantStyle = {
  container: ViewStyle;
  input: TextStyle;
  placeholder: string;
};

export type InputColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export const getInputVariants = (
  theme: Theme,
  isFocused: boolean,
  hasError: boolean,
  color: InputColor = "primary",
): Record<string, InputVariantStyle> => {
  const activeColor = hasError ? theme.colors.error : theme.colors[color];

  return {
    default: {
      container: {
        backgroundColor: theme.colors.surface,
        borderColor: hasError
          ? theme.colors.error
          : isFocused
            ? activeColor
            : theme.colors.border,
        borderRadius: theme.radii.m,
        paddingHorizontal: theme.spacing.m,
        height: theme.sizes.buttonM,
        borderWidth: 1,
      },
      input: {
        color: theme.colors.text,
      },
      placeholder: theme.colors.textMuted,
    },
    filled: {
      container: {
        backgroundColor: theme.colors.surfaceHighlight,
        borderColor: hasError
          ? theme.colors.error
          : isFocused
            ? activeColor
            : "transparent",
        borderRadius: theme.radii.m,
        paddingHorizontal: theme.spacing.m,
        height: theme.sizes.buttonM,
        borderWidth: 1,
      },
      input: {
        color: theme.colors.text,
      },
      placeholder: theme.colors.textMuted,
    },
  };
};