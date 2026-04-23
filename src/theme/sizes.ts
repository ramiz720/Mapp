import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const sizes = {
  windowWidth: width,
  windowHeight: height,
  
  // Icon sizes
  iconS: 16,
  iconM: 24,
  iconL: 32,
  iconXL: 48,

  // Button heights
  buttonS: 32,
  buttonM: 48,
  buttonL: 56,
} as const;