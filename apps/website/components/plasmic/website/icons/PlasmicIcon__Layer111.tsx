// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer111Icon(props: Layer111IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 35"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.667 5.333v16H9.333v-16h29.334zM44 0H4v26.667h40V0zM29.333 29.333V32H18.667v-2.667H0v5.334h48v-5.334H29.333zm12 4C40.533 33.333 40 32.8 40 32c0-.8.533-1.333 1.333-1.333.8 0 1.334.533 1.334 1.333 0 .8-.534 1.333-1.334 1.333z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default Layer111Icon;
/* prettier-ignore-end */
