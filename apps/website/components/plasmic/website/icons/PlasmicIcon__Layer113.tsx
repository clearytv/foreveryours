// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer113IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer113Icon(props: Layer113IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 59"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M9.158.733L0 9.167h9.158V.733z"} fill={"currentColor"}></path>

      <path
        d={
          "M12.82 0v12.833H0v45.834h43.956V0H12.82zm21.978 47.667H9.158V44h25.64v3.667zm0-9.167H9.158v-3.667h25.64V38.5zm0-9.167H9.158v-3.666h25.64v3.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer113Icon;
/* prettier-ignore-end */
