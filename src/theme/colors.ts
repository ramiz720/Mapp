import { palette } from "./palette";

export type Colors = {
  background: string;
  surface: string;
  surfaceHighlight: string;

  text: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  primary: string;
  primaryForeground: string;
  primaryBackground: string;

  secondary: string;
  secondaryForeground: string;

  border: string;
  separator: string;

  success: string;
  successBackground: string;
  warning: string;
  warningBackground: string;
  error: string;
  errorBackground: string;

  premium: string;
  premiumBackground: string;
  premiumText: string;

  transparent: string;
};

export const lightColors: Colors = {
  background: palette.gray100,
  surface: palette.white,
  surfaceHighlight: palette.gray100,

  text: palette.gray900,
  textSecondary: palette.gray600,
  textMuted: palette.gray400,
  textInverse: palette.white,

  primary: palette.brandPrimary,
  primaryForeground: palette.white,
  primaryBackground: palette.primary50,

  secondary: palette.brandSecondary,
  secondaryForeground: palette.gray900,

  border: palette.gray200,
  separator: palette.gray100,

  success: palette.success500,
  successBackground: palette.success50,
  warning: palette.warning500,
  warningBackground: palette.warning50,
  error: palette.error500,
  errorBackground: palette.error50,

  premium: palette.gold500,
  premiumBackground: palette.gold50,
  premiumText: palette.gold600,

  transparent: "transparent",
};

export const darkColors: Colors = {
  background: palette.gray900,
  surface: palette.gray800,
  surfaceHighlight: palette.gray700,

  text: palette.gray50,
  textSecondary: palette.gray300,
  textMuted: palette.gray500,
  textInverse: palette.gray900,

  primary: palette.brandSecondary,
  primaryForeground: palette.gray900,
  primaryBackground: palette.primary900,

  secondary: palette.brandPrimary,
  secondaryForeground: palette.white,

  border: palette.gray700,
  separator: palette.gray800,

  success: palette.success500,
  successBackground: "rgba(16, 185, 129, 0.2)",

  premium: palette.gold500,
  premiumBackground: "rgba(255, 215, 0, 0.2)",
  premiumText: palette.gold500,

  error: palette.error500,
  errorBackground: "rgba(239, 68, 68, 0.2)",

  transparent: palette.transparent,
};