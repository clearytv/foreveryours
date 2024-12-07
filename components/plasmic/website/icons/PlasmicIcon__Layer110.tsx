// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer110Icon(props: Layer110IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.99 11.028c0-.364-.44-.63-.757-.432-1.675 1.053-3.467 2.076-5.019 3.32a86.105 86.105 0 01-.015-3.464.462.462 0 00-.039-.19c1.135-1.098 1.614-3.266 1.699-4.698.2-3.364-2.116-5.88-5.613-5.532-1.822.182-3.706 1.463-4.555 3.138C10.173 1.525 8.915.237 6.699.07 3.626-.157.368 2.313.029 5.36c-.24 2.174 1.072 4 2.894 4.902l-.17.023c-.069.015-.115.046-.138.099-.14.015-.286.114-.294.273-.146 3.13-.023 6.274-.139 9.404-.007.28.232.454.487.477 2.246.235 4.532.319 6.825.334-1.328 1.318-2.517 2.75-3.714 4.183-.2.235.116.56.348.34 1.312-1.204 2.625-2.41 3.83-3.712.022.538.084 1.076.1 1.606.023.864-.132 1.766.262 2.554.124.242.471.197.602 0 .51-.78.379-1.857.324-2.751-.03-.455-.053-.94-.13-1.41.524.652 1.165 1.228 1.767 1.789.796.743 1.637 1.735 2.625 2.213.387.182.904-.213.634-.622-.618-.917-1.66-1.606-2.487-2.349-.694-.621-1.397-1.318-2.185-1.841 2.58-.03 5.15-.13 7.69-.228.255-.007.556-.227.518-.507a53.22 53.22 0 01-.325-3.29c1.575.88 3.212 1.638 4.733 2.615.317.205.865-.06.81-.462-.331-2.652.055-5.305.101-7.964l-.007-.008zm-12.786-.675a97.526 97.526 0 01-2.108-.053c-.386-.015-.78-.038-1.173-.06.687-.622 1.227-1.5 1.575-2.486.262 1.046.834 1.963 1.706 2.6zM.947 5.952C.877 3.473 3.07 1.525 5.41 1.086c5.72-1.069 5.983 8.563 1.057 9.017-.254-.007-.502-.015-.756-.015C3.44 9.573 1.024 8.694.947 5.951zm2.224 13.663c.084-2.948.13-5.919-.263-8.844 2.293.599 4.841.516 7.196.637 2.702.136 5.404.22 8.099-.084-.085 2.766.085 5.54.386 8.29-5.127-.014-10.3.418-15.418 0zm11.951-9.344c-2.825-.129-3.775-1.985-4.092-4.281.332-2.501 1.282-4.706 4.278-4.972 3.096-.272 4.71 2.001 4.431 4.805-.27 2.743-1.66 4.577-4.624 4.44l.007.008zm8.601 7.775c-1.397-.773-2.787-1.584-4.261-2.198a.5.5 0 00-.178-.037 61.49 61.49 0 01-.054-1.213c1.644-.697 3.196-1.675 4.71-2.63-.109 2.031-.348 4.055-.224 6.086l.007-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer110Icon;
/* prettier-ignore-end */
