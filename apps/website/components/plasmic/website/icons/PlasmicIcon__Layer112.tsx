// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer112IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer112Icon(props: Layer112IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 12.567l-9.317 9.316V0H12.35v21.883l-9.317-9.316L0 15.6l14.517 14.517L29.033 15.6 26 12.567zm.433 22.1H2.6V39h23.833v-4.333z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default Layer112Icon;
/* prettier-ignore-end */
