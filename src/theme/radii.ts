export const radii = {
  none: 0,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
} as const;

export type Radii = keyof typeof radii;