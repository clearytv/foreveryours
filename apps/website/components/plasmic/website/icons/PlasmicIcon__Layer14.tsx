// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer14Icon(props: Layer14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.972 20.914c-1.008-2.362-2.294-4.603-3.64-6.79-1.07-1.744-2.098-3.905-3.675-5.274a.914.914 0 00-.068-.617c.717-1.389 2.22-5.294.244-6.34a2.64 2.64 0 00-.203-.088 11.8 11.8 0 01-.034-.852c0-.275.02-.55-.122-.798a.327.327 0 00-.5-.067c-.386.375-.325 1.093-.224 1.63-1.11.181-2.247 1.275-2.788 2.255-.379-1.215-1.793-2.255-3.059-2.047-.034-.127-.074-.255-.101-.362-.088-.356-.102-.799-.38-1.06C7.26.349 7.038.396 6.916.57c-.304.422-.074 1.2.19 1.69-1.909 1.37.216 4.59 1.062 5.952-.013.14 0 .295.034.436-1.577 1.261-2.842 3.1-4.02 4.69-1.57 2.127-2.97 4.334-4.04 6.736-.128.067-.203.249-.074.376C2.72 23.155 7.05 23.8 10.67 23.967c3.796.174 8.04-.174 11.152-2.563a.194.194 0 00.081-.134.32.32 0 00.068-.356zM7.064 4.006c-.013-.584.508-1.2 1.096-1.335.339-.074.887.208 1.158.376.636.402 1.001 1.006 1.326 1.664a.265.265 0 00.054.067c.075.134.298.188.386.02.298-.557.595-1.087 1.069-1.517.758-.697 2.389-1.456 2.754.195.325 1.463-.412 2.959-.805 4.354-.893-.16-1.84-.067-2.748-.053-.886.013-1.8-.027-2.68.114-.615-1.168-1.57-2.523-1.603-3.878l-.007-.007zm3.607 19.142c-3.763-.16-6.91-1.12-10.144-2.965 1.32-1.986 2.605-4.006 4.027-5.925 1.292-1.744 2.977-3.328 4.202-5.133.304.027.609.034.913.034-.825 1.362-1.657 2.986-1.99 4.475-.046.215.245.443.407.235 1.029-1.315 1.78-3.12 2.328-4.73.284-.014.568-.027.86-.034-.312 1.664-.292 3.69-.041 5.348.04.268.473.255.527 0 .346-1.637.386-3.71.034-5.361.291 0 .59.02.894.04.527 1.59.994 3.315 1.8 4.777.142.249.46.06.426-.18-.216-1.57-.974-3.148-1.719-4.577a6.27 6.27 0 001.076-.04c2.172 4.086 4.886 7.917 7.12 11.976-3.432 1.604-6.924 2.215-10.72 2.054v.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer14Icon;
/* prettier-ignore-end */
