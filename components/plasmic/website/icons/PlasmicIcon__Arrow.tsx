// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.32 12.375H0v-2.75h22.32l-10.266-7.7L14.667 0l14.666 11-14.666 11-2.613-1.925 10.267-7.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
