// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OverlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OverlayIcon(props: OverlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 90 90"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 45C0 20.147 20.147 0 45 0s45 20.147 45 45-20.147 45-45 45S0 69.853 0 45z"
        }
        fill={"currentColor"}
        fillOpacity={".9"}
      ></path>
    </svg>
  );
}

export default OverlayIcon;
/* prettier-ignore-end */