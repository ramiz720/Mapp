export const typography = {
  fontFamily: {
    thin: "Poppins-Thin",
    light: "Poppins-Light",
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
    extraBold: "Poppins-ExtraBold",
    black: "Poppins-Black",
  },
  fontSize: {
    xs: 9,
    s: 11,
    m: 13,
    l: 15,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  lineHeight: {
    xs: 16,
    s: 20,
    m: 24,
    l: 28,
    xl: 32,
    xxl: 40,
    xxxl: 48,
  },
} as const;

// Helper to combine properties
export const textVariants = {
  header: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    lineHeight: typography.lineHeight.xxl,
    fontWeight: typography.fontWeight.bold,
  },
  subheader: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.l,
    lineHeight: typography.lineHeight.l,
    fontWeight: typography.fontWeight.medium,
  },
  body: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.m,
    lineHeight: typography.lineHeight.m,
    fontWeight: typography.fontWeight.regular,
  },
  caption: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.s,
    lineHeight: typography.lineHeight.s,
    fontWeight: typography.fontWeight.regular,
  },
} as const;