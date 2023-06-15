import { Image, ImageContentFit, ImageSource, ImageStyle } from "expo-image";
import React from "react";

import {
  Fade,
  Placeholder,
  PlaceholderMedia,
  Shine,
  ShineOverlay,
} from "rn-placeholder";
import AppActivityIndicator from "../loaders/AppActivityIndicator";
interface Props {
  style?: ImageStyle | ImageStyle[];
  source: string | number | ImageSource | ImageSource[] | string[];
  placeholder?: string | number | string[] | ImageSource | ImageSource[];
  contentFit?: ImageContentFit;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppFastImage: React.FC<Props> = ({
  style = { width: "100%", height: 200, borderRadius: 4 },
  source,
  contentFit='cover',
  children,
  ...otherProps
}) => {
  return (
    <Image
      style={style}
      source={source ? source : require("../../assets/images/blurHash.png")}
      placeholderContentFit="fill"
      contentFit={contentFit}
      transition={800}
      cachePolicy="memory-disk"
      {...otherProps}
    />
  );
};

export default AppFastImage;
