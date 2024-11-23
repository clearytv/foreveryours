// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramButtonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramButtonIcon(props: InstagramButtonIconProps) {
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
          "M21.284 1.313c3.946 0 7.804 1.154 11.085 3.317a19.748 19.748 0 017.35 8.836 19.444 19.444 0 011.135 11.375 19.608 19.608 0 01-5.46 10.08 20.039 20.039 0 01-10.217 5.388c-3.871.76-7.883.37-11.53-1.12a19.898 19.898 0 01-8.954-7.251A19.501 19.501 0 011.33 21 19.555 19.555 0 017.175 7.079a20.091 20.091 0 0114.109-5.766zm0-1.313A21.49 21.49 0 009.459 3.54a21.064 21.064 0 00-7.839 9.424A20.74 20.74 0 00.41 25.097a20.915 20.915 0 005.825 10.752 21.375 21.375 0 0010.898 5.748c4.128.81 8.408.394 12.297-1.196a21.226 21.226 0 009.552-7.734A20.802 20.802 0 0042.568 21c0-5.57-2.243-10.911-6.234-14.85A21.43 21.43 0 0021.284 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M26.252 17.2a1.11 1.11 0 001.118-1.102c0-.61-.5-1.103-1.118-1.103a1.11 1.11 0 00-1.117 1.103c0 .609.5 1.102 1.117 1.102z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M30.542 17.213a6.66 6.66 0 00-.432-2.23 4.692 4.692 0 00-1.073-1.626 4.77 4.77 0 00-1.647-1.059 6.918 6.918 0 00-2.262-.426c-.997-.06-1.317-.06-3.844-.06-2.528 0-2.847 0-3.838.053a6.918 6.918 0 00-2.261.427 4.769 4.769 0 00-1.647 1.059 4.693 4.693 0 00-1.074 1.625 6.66 6.66 0 00-.432 2.23c-.06.985-.06 1.3-.06 3.794 0 2.494 0 2.809.053 3.787a6.66 6.66 0 00.433 2.23c.239.61.604 1.164 1.073 1.626.468.462 1.03.823 1.647 1.059a6.917 6.917 0 002.261.426c.991.046 1.33.053 3.838.053s2.847 0 3.838-.053a6.918 6.918 0 002.261-.426 4.77 4.77 0 001.647-1.06 4.692 4.692 0 001.074-1.624 6.66 6.66 0 00.432-2.231c.066-.978.066-1.293.066-3.787 0-2.494 0-2.809-.053-3.787zm-1.676 7.501a5.023 5.023 0 01-.32 1.707 3.043 3.043 0 01-.696 1.057c-.305.3-.67.535-1.072.688a5.216 5.216 0 01-1.73.315c-.984.046-1.277.053-3.764.053-2.488 0-2.78 0-3.765-.053a5.216 5.216 0 01-1.73-.315 3.09 3.09 0 01-1.071-.688 3.04 3.04 0 01-.697-1.057 5.026 5.026 0 01-.32-1.707c-.046-.97-.053-1.26-.053-3.714 0-2.454 0-2.743.053-3.714.007-.583.115-1.16.32-1.707a3.04 3.04 0 01.697-1.057c.305-.3.67-.535 1.072-.688a5.215 5.215 0 011.73-.315c.984-.046 1.276-.053 3.764-.053 2.487 0 2.78 0 3.764.053a5.21 5.21 0 011.73.315 3.09 3.09 0 011.072.688c.304.3.542.66.697 1.057.205.547.313 1.124.32 1.707.046.97.052 1.26.052 3.714 0 2.454-.013 2.743-.053 3.714z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M21.284 16.281c-.946 0-1.87.277-2.657.796a4.732 4.732 0 00-1.761 2.117 4.66 4.66 0 00-.273 2.726 4.7 4.7 0 001.31 2.416c.668.66 1.52 1.11 2.448 1.292.928.181 1.89.088 2.763-.269a4.77 4.77 0 002.146-1.738 4.673 4.673 0 00-.595-5.958 4.816 4.816 0 00-3.381-1.382zm0 7.783c-.614 0-1.215-.18-1.726-.516a3.074 3.074 0 01-1.144-1.375 3.027 3.027 0 01-.177-1.771c.12-.595.416-1.14.85-1.57a3.144 3.144 0 013.385-.664 3.097 3.097 0 011.395 1.129 3.036 3.036 0 01-.387 3.87 3.127 3.127 0 01-2.196.897z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramButtonIcon;
/* prettier-ignore-end */