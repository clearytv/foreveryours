// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Placeholder3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Placeholder3Icon(props: Placeholder3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#hd7obfFwQIOAa)"}>
        <path
          d={"M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"}
          stroke={"currentColor"}
          strokeWidth={"1.667"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"hd7obfFwQIOAa"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Placeholder3Icon;
/* prettier-ignore-end */
