import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const BenEdit = (props:SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_148001_2084)">
      <Path
        d="M11.2413 2.99133L12.366 1.866C12.6005 1.63155 12.9184 1.49983 13.25 1.49983C13.5816 1.49983 13.8995 1.63155 14.134 1.866C14.3685 2.10045 14.5002 2.41843 14.5002 2.75C14.5002 3.08156 14.3685 3.39955 14.134 3.634L4.55467 13.2133C4.20222 13.5656 3.76758 13.8245 3.29 13.9667L1.5 14.5L2.03333 12.71C2.17552 12.2324 2.43442 11.7978 2.78667 11.4453L11.242 2.99133H11.2413ZM11.2413 2.99133L13 4.75"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_148001_2084">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BenEdit;
