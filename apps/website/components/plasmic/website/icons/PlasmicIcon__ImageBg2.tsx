// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImageBg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImageBg2Icon(props: ImageBg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 122 122"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 61C0 27.31 27.31 0 61 0s61 27.31 61 61-27.31 61-61 61S0 94.69 0 61z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ImageBg2Icon;
/* prettier-ignore-end */
