// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _30304IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _30304Icon(props: _30304IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 125"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path opacity={".9"} d={"M0 0h125v125H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _30304Icon;
/* prettier-ignore-end */
