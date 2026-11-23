import React from 'react';
import { View, ViewProps } from 'react-native';
import { AppColors } from '../constants/habitsData';

interface Props extends ViewProps {
  colors: AppColors;
}

export function ThemedView({ colors, style, ...props }: Props) {
  return <View style={[{ flex: 1, backgroundColor: colors.bg }, style]} {...props} />;
}