import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// dimensions in design
const guidelineBaseHeight = 812;
const guidelineBaseWidth = 375;

const horizontalScale = (sizeInDesign) =>
  (sizeInDesign / guidelineBaseWidth) * 100;

const verticalScale = (sizeInDesign) =>
  (sizeInDesign / guidelineBaseHeight) * 100;

export const horizontal = (sizeInDesign) => wp(horizontalScale(sizeInDesign));
export const vertical = (sizeInDesign) => hp(verticalScale(sizeInDesign));
