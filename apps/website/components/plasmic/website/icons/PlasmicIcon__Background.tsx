// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundIcon(props: BackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".9"}
        d={
          "M0 21.5C0 9.626 9.626 0 21.5 0h157C190.374 0 200 9.626 200 21.5S190.374 43 178.5 43h-157C9.626 43 0 33.374 0 21.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackgroundIcon;
/* prettier-ignore-end */
