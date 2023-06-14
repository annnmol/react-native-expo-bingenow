import React from "react";
import {
  Circle,
  Defs,
  Path,
  Pattern,
  RadialGradient,
  Stop,
  Svg,
  Use,
} from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
}

const RadialCircle: React.FC<Props> = ({ width = 369, height = 657 }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Circle cx={202.5} cy={339.5} r={133.5} fill="url(#a)" />
      <Path fill="url(#b)" d="M0 0h369v657H0z" />
      <Defs>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(89.777 -69.162 271.395) scale(128.501)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.927} stopColor="#1C58F2" />
        </RadialGradient>
        <Pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use
            xlinkHref="#image0_103_210"
            transform="matrix(.00046 0 0 .00026 0 0)"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
};

export default RadialCircle;
