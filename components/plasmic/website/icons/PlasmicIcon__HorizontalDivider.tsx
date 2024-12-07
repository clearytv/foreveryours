// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalDividerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalDividerIcon(props: HorizontalDividerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 197 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 0h197v2H0V0z"}
        fill={"currentColor"}
        fillOpacity={".21"}
      ></path>
    </svg>
  );
}

export default HorizontalDividerIcon;
/* prettier-ignore-end */
