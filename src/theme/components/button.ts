import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../index';

export type ButtonVariantStyle = {
  container: ViewStyle;
  text: TextStyle;
  indicator: string;
};

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export const getButtonVariants = (
  theme: Theme,
  variant: ButtonVariant,
  color: ButtonColor,
  disabled?: boolean
): ButtonVariantStyle => {
  const colorValue = theme.colors[color];
  
  // Determine foreground color for solid variants
  let foregroundColor = theme.colors.textInverse;
  if (color === 'primary') foregroundColor = theme.colors.primaryForeground;
  if (color === 'secondary') foregroundColor = theme.colors.secondaryForeground;
  
  if (disabled) {
    return {
      container: {
        backgroundColor: variant === 'solid' ? theme.colors.surfaceHighlight : 'transparent',
        borderColor: variant === 'outline' ? theme.colors.border : 'transparent',
        borderWidth: variant === 'outline' ? 1 : 0,
      },
      text: {
        color: theme.colors.textMuted,
      },
      indicator: theme.colors.textMuted,
    };
  }

  switch (variant) {
    case 'solid':
      return {
        container: {
          backgroundColor: colorValue,
          borderWidth: 0,
        },
        text: {
          color: foregroundColor,
        },
        indicator: foregroundColor,
      };
    case 'outline':
      return {
        container: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colorValue,
        },
        text: {
          color: colorValue,
        },
        indicator: colorValue,
      };
    case 'ghost':
      return {
        container: {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
        text: {
          color: colorValue,
        },
        indicator: colorValue,
      };
    case 'subtle':
      let subtleBg = theme.colors.surfaceHighlight;
      if (color === 'primary') subtleBg = theme.colors.primaryBackground;
      if (color === 'success') subtleBg = theme.colors.successBackground;
      if (color === 'warning') subtleBg = theme.colors.warningBackground;
      if (color === 'error') subtleBg = theme.colors.errorBackground;
      
      return {
        container: {
          backgroundColor: subtleBg,
          borderWidth: 0,
        },
        text: {
          color: colorValue,
        },
        indicator: colorValue,
      };
    default:
      return {
        container: {},
        text: {},
        indicator: theme.colors.text,
      };
  }
};