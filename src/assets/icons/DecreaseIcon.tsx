import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const DecreaseIcon = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Rect width={20} height={20} rx={4} fill="#FE8C00" fillOpacity={0.05} />
    <Path
      d="M4.16675 10H15.8334"
      stroke="#FE8C00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DecreaseIcon;
