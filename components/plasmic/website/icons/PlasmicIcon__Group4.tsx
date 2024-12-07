// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.663 10.854c-.04-.43-.397-.757-.86-.645-4.031 1.004-8.055 2.033-12.095 3.014-.34.08-.576.478-.47.813.843 2.584 1.257 5.248 1.338 7.96.024.876.04 1.762 0 2.647-1.598-.567-3.748.39-4.372 1.945-.714 1.779.527 3.725 2.514 3.573 2.953-.231 3.27-3.652 3.31-5.893.04-2.026-.073-4.043-.39-6.029 3.424-.415 6.97-1.42 10.271-2.353.292 1.524.633 3.039.909 4.554.146.797.373 1.754.494 2.72-1.865.534-5.03 1.642-4.68 4.074.276 1.93 2.806 2.225 4.259 1.428 2.352-1.292 1.995-4.346 1.687-6.54-.535-3.787-1.558-7.456-1.923-11.268h.008zM5.51 17.465a26.37 26.37 0 00-.77-3.133c3.528-.894 7.073-1.763 10.61-2.632.057.989.187 1.97.35 2.943-3.36.757-6.97 1.563-10.19 2.822zM21.125.503c-1.038-1.291-2.223.168-2.831 1.404-.195-.439-.479-.813-.917-1.029-.64-.319-1.517-.183-1.906.447-.438.71-.138 1.69.187 2.376.624 1.324 1.63 2.536 2.458 3.748.243.36.908.47 1.12 0 .591-1.315 1.256-2.615 1.751-3.971.284-.774.73-2.217.13-2.967l.008-.008zm4.413 9.036c-1.135-.822-1.963.263-2.393 1.427-.592-.837-1.736-1.308-2.417-.24-.406.63-.065 1.245.39 1.723.819.854 1.573 1.7 2.222 2.688.276.423 1.046.407 1.16-.152.252-1.236.811-2.256 1.265-3.413.26-.646.422-1.547-.235-2.025l.008-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
