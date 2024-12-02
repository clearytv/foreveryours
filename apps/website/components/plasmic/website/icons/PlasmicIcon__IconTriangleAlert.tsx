// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconTriangleAlertIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconTriangleAlertIcon(props: IconTriangleAlertIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 9v4m0 4h.01m9.72 1l-8-14a2 2 0 00-3.48 0l-8 14A2 2 0 004 21h16a2.001 2.001 0 001.73-3z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconTriangleAlertIcon;
/* prettier-ignore-end */
