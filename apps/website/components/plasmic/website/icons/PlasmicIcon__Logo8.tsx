// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo8Icon(props: Logo8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M27.007 0C12.089 0 0 11.975 0 26.75c0 4.628 1.19 8.985 3.298 12.797L.972 54l14.537-3.024v-.02a27.163 27.163 0 0011.505 2.525c14.904 0 26.993-11.974 26.993-26.737C54.007 11.981 41.91 0 27.007 0zm0 48.841c-3.794 0-7.364-.943-10.505-2.6l-.293-.154L9.866 47.4l-3.19.667.504-3.159 1.02-6.304c-.088-.1-.156-.222-.245-.343a21.85 21.85 0 01-3.257-11.517c-.006-12.19 9.995-22.097 22.309-22.097 12.3 0 22.302 9.907 22.302 22.104S39.306 48.84 27.007 48.84z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.508 13.867c-2.461.202-4.345 3.94-4.215 6.573.034 1.105.217 2.101.57 2.984 1.64 4.155 4.638 7.94 7.997 10.883a22.761 22.761 0 006.622 4.014c2.285.89 5.072 1.785 7.52 1.132.3-.081.599-.182.884-.31a6.682 6.682 0 002.706-2.169c.667-.909.843-2.114.837-3.226 0-.27-.116-.498-.395-.66a127.426 127.426 0 00-5.35-2.768c-.919-.579-1.483-.202-1.939.472l-.788.902c-.408.465-.803 1.078-1.292 1.448-.354.27-.762.337-1.183.175-3.787-1.495-6.793-4.39-8.88-7.805-.422-.694-.578-1.388.095-1.96.734-.687 1.299-1.401 1.693-2.135.197-.357.231-.714.075-1.071l-2.06-5.327c-.238-.633-.612-.99-1.122-1.058a10.233 10.233 0 00-1.795-.087l.02-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo8Icon;
/* prettier-ignore-end */
