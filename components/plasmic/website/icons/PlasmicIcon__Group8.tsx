// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.036 2H4.202A2.201 2.201 0 002 4.2v37.84c0 1.215.986 2.2 2.202 2.2h30.834a2.201 2.201 0 002.202-2.2V4.2c0-1.215-.986-2.2-2.202-2.2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.289"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M33.714 5.52H5.524V37.2h28.19V5.52zm-16.738 35.2h4.405"}
        stroke={"currentColor"}
        strokeWidth={"2.289"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
