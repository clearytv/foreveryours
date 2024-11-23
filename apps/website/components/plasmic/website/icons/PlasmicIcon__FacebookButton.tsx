// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookButtonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookButtonIcon(props: FacebookButtonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.532 29.407v-7.48h2.514l.374-2.915h-2.888v-1.87c0-.846.236-1.417 1.444-1.417h1.542V13.1c-.748-.074-1.5-.107-2.25-.099-2.226 0-3.755 1.359-3.755 3.852v2.153H17v2.92h2.52v7.482h3.012z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M21 2.313a19.688 19.688 0 110 39.375 19.688 19.688 0 010-39.376zM21 1a21 21 0 100 42 21 21 0 000-42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookButtonIcon;
/* prettier-ignore-end */
