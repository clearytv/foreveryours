// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow2Icon(props: Arrow2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.04 0l-1.705 1.882 7.662 7.332H0v2.568h22l-7.665 7.34L16.04 21 27 10.5 16.04 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow2Icon;
/* prettier-ignore-end */
