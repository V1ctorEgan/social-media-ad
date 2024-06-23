import Svg, { Path, Circle } from "react-native-svg";

const FingerPrintIcon = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={41} height={41} fill="none">
      <Path
        stroke="#101010"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.563}
        d="M12.69 5.744c6.784-4.61 16.584-2.115 20.162 5.22m-14.304 26.49c8.075 1.124 15.619-5.174 15.619-13.178v-6.623M12.69 35.202C9.15 32.796 6.833 28.8 6.833 24.276V16.67c0-2.023.464-3.942 1.294-5.66"
      />
      <Path
        stroke="#101010"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.563}
        d="M27.333 23.575c0 3.963-3.06 7.175-6.833 7.175-3.774 0-6.834-3.212-6.834-7.175v-6.15c0-1.1.236-2.143.658-3.075m6.176-4.1c3.774 0 6.833 3.212 6.833 7.175M20.5 17.938v5.125"
      />
    </Svg>
  );
};

const BackSpace = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none">
      <Path
        stroke="#101010"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m20.5 13.333-5.333 5.333m0-5.333 5.333 5.333m-9.44-12a2.667 2.667 0 0 0-2.025.931L3.32 14.264a2.667 2.667 0 0 0 0 3.472l5.714 6.666a2.667 2.667 0 0 0 2.025.931h14.773a2.667 2.667 0 0 0 2.667-2.666V9.332a2.667 2.667 0 0 0-2.667-2.667H11.06Z"
      />
    </Svg>
  );
};

const BackArrow = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} fill="none">
      <Path
        fill="#101010"
        d="M17 9a1 1 0 1 0 0-2v2ZM.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93L.293 7.293ZM17 7H1v2h16V7Z"
      />
    </Svg>
  );
};

const PinIcon = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={42} height={49} fill="none">
      <Path
        fill="#101010"
        d="M0 0h12v10H0zM15 0h12v10H15zM30 0h12v10H30zM0 13h12v10H0zM15 13h12v10H15zM30 13h12v10H30zM0 26h12v10H0zM15 26h12v10H15zM30 26h12v10H30zM15 39h12v10H15z"
      />
    </Svg>
  );
};

const PinDot = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} fill="none">
      <Circle cx={5.5} cy={5.5} r={5} fill="#101010" />
    </Svg>
  );
};
export { FingerPrintIcon, BackSpace, BackArrow, PinIcon, PinDot };
