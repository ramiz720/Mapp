import { ViewStyle } from 'react-native';
import { Theme } from './index';

export const getCommonStyles = (theme: Theme) => ({
  // Layout
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  fill: {
    flex: 1,
  } as ViewStyle,
  
  // Containers
  screenPadding: {
    padding: theme.spacing.l,
  } as ViewStyle,
  
  // Shadows
  shadowSubtle: {
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,
  shadowCard: {
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  } as ViewStyle,

  // Interactive
  activeBorder: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  } as ViewStyle,
  inactiveBorder: {
    borderWidth: 1,
    borderColor: theme.colors.border,
  } as ViewStyle,
});