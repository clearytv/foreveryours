// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component2Icon(props: Component2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 47"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M47.389 32.639V5.222H5.61V32.64h18.28v5.222h-5.222v5.222h15.666v-5.222h-5.222V32.64H47.39zm-2.611-3.917c.783 0 1.305.522 1.305 1.306 0 .783-.522 1.305-1.305 1.305-.784 0-1.306-.522-1.306-1.305 0-.784.522-1.306 1.306-1.306zm-33.945-1.305V10.444h31.334v16.973H10.833z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default Component2Icon;
/* prettier-ignore-end */
