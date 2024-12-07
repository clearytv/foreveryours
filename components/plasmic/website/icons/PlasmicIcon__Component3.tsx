// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component3Icon(props: Component3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 88"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.333 21.806H15.667c-2.22 0-3.917 1.697-3.917 3.916v36.556c0 2.089 1.697 3.916 3.917 3.916h15.666c2.22 0 3.917-1.827 3.917-3.916V25.722c0-2.22-1.697-3.916-3.917-3.916zM23.5 64.889a2.619 2.619 0 01-2.611-2.611 2.619 2.619 0 012.611-2.611 2.619 2.619 0 012.611 2.61A2.619 2.619 0 0123.5 64.89zm9.139-6.528H14.36V28.333h18.28v30.028z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default Component3Icon;
/* prettier-ignore-end */
