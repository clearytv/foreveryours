// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TikTokButtonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TikTokButtonIcon(props: TikTokButtonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28 16.068v2.929a7.094 7.094 0 01-4.11-1.306v5.922c0 2.085-1.204 3.899-2.961 4.793a5.473 5.473 0 01-2.484.594C15.443 29 13 26.585 13 23.613c0-2.97 2.443-5.386 5.445-5.386.252 0 .501.018.745.05v2.992a2.492 2.492 0 00-.745-.111c-1.371 0-2.484 1.1-2.484 2.458 0 1.359 1.113 2.456 2.484 2.456 1.372 0 2.484-1.1 2.484-2.456V12h2.961c0 2.248 1.84 4.068 4.11 4.068z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M21.002 0C9.42 0 0 9.42 0 21.002c0 11.581 9.42 21.002 21.002 21.002 11.581 0 21.002-9.42 21.002-21.002C42.004 9.42 32.58 0 21.002 0zm0 40.552c-10.782 0-19.554-8.772-19.554-19.554 0-10.781 8.772-19.55 19.554-19.55 10.781 0 19.554 8.772 19.554 19.554 0 10.781-8.773 19.554-19.554 19.554v-.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TikTokButtonIcon;
/* prettier-ignore-end */
