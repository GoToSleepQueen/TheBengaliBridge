import React from 'react'
import Svg, { Circle } from 'react-native-svg'

const TwoCircle = ({ width = 60, height = 40, color = 'white' }: { width?: number; height?: number; color?: string }) => (
  <Svg width={width} height={height} viewBox="0 0 120 64" fill="none">
    <Circle cx="30" cy="32" r="20" fill={color} />
    <Circle cx="90" cy="32" r="20" fill={color} />
  </Svg>
)

export default TwoCircle
