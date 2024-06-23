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

const FaceID = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={49} fill="none">
      <Path
        fill="#101010"
        fillRule="evenodd"
        d="M2.988 13.446V7.943a5.461 5.461 0 0 1 5.455-5.455h5.503a1.244 1.244 0 0 0 0-2.488H8.443C4.063 0 .5 3.563.5 7.943v5.503a1.244 1.244 0 0 0 2.488 0Zm10.958 33.066a1.244 1.244 0 0 1 0 2.488H8.443C4.063 49 .5 45.437.5 41.057v-5.503a1.244 1.244 0 0 1 2.488 0v5.503a5.461 5.461 0 0 0 5.455 5.455h5.503ZM49.5 35.554v5.503c0 4.38-3.563 7.943-7.943 7.943h-5.503a1.244 1.244 0 1 1 0-2.488h5.503a5.461 5.461 0 0 0 5.455-5.455v-5.503a1.244 1.244 0 0 1 2.488 0Zm0-27.61v5.502a1.244 1.244 0 1 1-2.488 0V7.943a5.461 5.461 0 0 0-5.455-5.455h-5.503a1.244 1.244 0 0 1 0-2.488h5.503c4.38 0 7.943 3.563 7.943 7.943ZM33.586 36.215a1.292 1.292 0 1 0-1.753-1.898A10.041 10.041 0 0 1 25 36.989a10.04 10.04 0 0 1-6.833-2.671 1.292 1.292 0 0 0-1.753 1.898A12.618 12.618 0 0 0 25 39.573c3.193 0 6.242-1.192 8.586-3.357ZM27.584 18.47v9.187a3.306 3.306 0 0 1-3.302 3.302H23.23a1.292 1.292 0 0 1 0-2.584h1.052a.719.719 0 0 0 .718-.718v-9.187a1.292 1.292 0 1 1 2.584 0Zm8.9 3.613v-3.685a1.22 1.22 0 1 0-2.44 0v3.684a1.22 1.22 0 0 0 2.44 0Zm-22.681 0a1.22 1.22 0 0 0 2.44 0v-3.685a1.22 1.22 0 0 0-2.44 0v3.684Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export { FingerPrintIcon, BackSpace, BackArrow, PinIcon, PinDot, FaceID };
