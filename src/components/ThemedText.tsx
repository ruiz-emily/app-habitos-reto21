import React from 'react';
import { Text, TextProps } from 'react-native';
import { AppColors } from '../constants/habitsData';

interface Props extends TextProps {
  colors: AppColors;
  muted?: boolean;
  title?: boolean;
}

export function ThemedText({ colors, muted, title, style, ...props }: Props) {
  return (
    <Text
      style={[
        {
          color: muted ? colors.muted : colors.text,
          fontSize: title ? 22 : 15,
          fontWeight: title ? '700' : '400',
        },
        style,
      ]}
      {...props}
    />
  );
}