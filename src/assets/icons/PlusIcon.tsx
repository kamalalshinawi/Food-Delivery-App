import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PlusIcon = (props:SvgProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      d="M9.0001 3.60001V14.4M14.4001 9.00001H3.6001"
      stroke="#FE8C00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlusIcon;
