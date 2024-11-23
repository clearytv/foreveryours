// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIcon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIcon3Icon(props: SocialIcon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.843 17.145a11.957 11.957 0 01-1.183 2.127c-.622.886-1.131 1.5-1.524 1.841-.608.56-1.26.846-1.958.862-.5 0-1.105-.142-1.809-.432-.705-.287-1.354-.43-1.947-.43-.622 0-1.289.143-2.003.43-.714.29-1.29.44-1.73.455-.67.029-1.336-.266-2.002-.885-.425-.37-.957-1.006-1.594-1.907-.683-.961-1.245-2.076-1.685-3.347-.472-1.373-.708-2.703-.708-3.99 0-1.474.319-2.746.957-3.811A5.612 5.612 0 015.66 6.03a5.39 5.39 0 012.708-.764c.532 0 1.23.164 2.096.487.864.325 1.418.489 1.662.489.181 0 .798-.192 1.842-.576.988-.355 1.822-.502 2.505-.444 1.851.149 3.242.879 4.166 2.193-1.655 1.003-2.474 2.408-2.457 4.21.015 1.404.524 2.572 1.524 3.5.454.43.96.763 1.524 1a16.43 16.43 0 01-.388 1.019zM16.598.44c0 1.1-.402 2.128-1.203 3.079-.967 1.13-2.137 1.783-3.405 1.68a3.417 3.417 0 01-.026-.417c0-1.056.46-2.186 1.277-3.11A4.91 4.91 0 0114.796.504c.627-.306 1.22-.475 1.779-.504.016.147.023.294.023.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIcon3Icon;
/* prettier-ignore-end */
