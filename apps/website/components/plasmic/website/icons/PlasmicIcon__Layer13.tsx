// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer13Icon(props: Layer13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.847 21.813c-.754-6.087-4.908-11.344-10.294-12.992.036-.493 0-.999-.024-1.528a.847.847 0 00-.478-.734c.742-.842 1.4-1.744 2.106-2.61a.767.767 0 00.156-.433.524.524 0 00.143-.638c-.395-.854-.945-1.804-1.651-2.418a.368.368 0 00-.371-.084c-1.257-.47-2.765-.361-4.094-.373-1.412 0-2.848-.024-4.237.3-.036 0-.06.025-.084.037-.574.096-.921.782-1.244 1.215-.383.517-.85 1.034-1.042 1.66a.375.375 0 00.048.277c0 .132.048.252.132.36.826 1.023 1.675 2.058 2.61 2.984-.06.024-.12.036-.18.06-.204.084-.431.229-.467.47-.084.625 0 1.335.131 1.996-.012 0-.035 0-.047.024-.072.024-.108.073-.168.109C4.479 11.155-.297 18.457.014 26.132c.383 9.6 9.336 13.907 17.918 13.859 9.575-.048 13.968-9.6 12.915-18.178zM18.782 6.475h-.874c.096-.253.192-.505.287-.77.18-.493.455-1.07.635-1.624.574 0 1.137.024 1.711.036-.598.782-1.197 1.552-1.747 2.358h-.012zm-3.124.048h-.311c-.156-.674-.36-1.347-.539-2.009-.048-.192-.107-.36-.143-.505 1.065.012 2.118.036 3.183.06-.299.794-.598 1.6-.814 2.418-.454 0-.91.012-1.364.036h-.012zm4.668-5.353c.311.59.67 1.155.993 1.744h-2.357c-.168-.637-.826-1.263-1.377-1.744.922.06 1.855.144 2.74 0zm-5.614 1.42c.168-.494.491-.987.755-1.456h1.363c.347.505.766.95 1.101 1.467.084.133.144.241.18.325-1.161 0-2.334.024-3.495.024.024-.108.06-.228.107-.36h-.012zm-3.195-.458c.251-.325.634-.673.802-1.07.67.072 1.352.084 2.034.072-.299.565-.538 1.179-.598 1.804-.934 0-1.88-.012-2.813-.036.192-.253.383-.53.575-.782v.012zm.06 1.865h2.238c.155.842.359 1.732.646 2.562-.24 0-.467.012-.706.036-.658-.914-1.4-1.78-2.179-2.598zm4.703 33.648C8.931 37.14 2.11 33.386 2.133 25.158c.024-7.134 4.38-12.223 10.7-14.352 3.543.229 6.99-.746 10.246 1.432 3.028 2.02 5.146 6.472 5.553 9.984.946 8.229-3.387 16.036-12.34 15.423h-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer13Icon;
/* prettier-ignore-end */
