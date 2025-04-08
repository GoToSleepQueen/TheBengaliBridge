import React from 'react'
import Svg, { Circle } from 'react-native-svg'

const OneCircle = ({ width = 40, height = 40, color = 'white' }: { width?: number; height?: number; color?: string }) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
    <Circle cx="32" cy="32" r="20" fill={color} />
  </Svg>
)

export default OneCircle

