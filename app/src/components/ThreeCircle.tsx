import React from 'react'
import Svg, { Circle } from 'react-native-svg'

const ThreeCircle = ({ width = 60, height = 60, color = 'white' }: { width?: number; height?: number; color?: string }) => (
  <Svg width={width} height={height} viewBox="0 0 120 120" fill="none">
    {/* Bottom left circle */}
    <Circle cx="20" cy="75" r="20" fill={color} />
    {/* Bottom right circle */}
    <Circle cx="80" cy="75" r="20" fill={color} />
    {/* Top center circle */}
    <Circle cx="50" cy="20" r="20" fill={color} />
  </Svg>
)

export default ThreeCircle
