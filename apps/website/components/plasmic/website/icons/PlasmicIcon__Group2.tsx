// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.635 3.762a.405.405 0 00-.402-.403c-1.892-.015-3.813-.068-5.727-.053-.205-.593-.722-1.026-1.087-1.527-.326-.448-.6-.972-1.025-1.33a.335.335 0 00-.266-.25c-2.521-.35-5.72-.235-8.226.312a.212.212 0 00-.167-.008c-.547.213-.684.904-.942 1.39-.235.44-.524.866-.737 1.33-.174 0-.349.007-.524.015.046-.456-.167-.958-.653-1.026-1.048-.16-2.248-.023-3.312-.015-.22 0-.44.197-.425.425.015.236.015.464.03.692-.501 0-1.01-.016-1.511-.03-.236-.008-.426.204-.426.424C.175 8.228.053 12.74 0 17.252c0 .22.197.433.418.417 3.311-.152 6.623.137 9.927.023a8.072 8.072 0 003.342.38 9.498 9.498 0 002.69-.668c1.602.129 3.25-.016 4.853-.061 1.504-.038 3.023.007 4.504-.259.084-.015.137-.075.16-.151a.325.325 0 00.068-.198c.152-4.314-.19-8.667-.327-12.98v.007zM8.454 2.417c.19-.326.524-.76.63-1.185 1.383.099 2.788-.045 4.17-.09 1.231-.039 2.462.014 3.684-.13.122.517.456 1.018.737 1.42.213.304.44.63.714.89a43.333 43.333 0 00-3.152.174c-.95-.357-1.99-.51-2.91-.243-1.45-.091-2.9-.084-4.367-.061.175-.25.334-.524.494-.79v.015zM.844 16.834c.09-4.223.128-8.447.227-12.67 2.605.137 5.378.289 8.051.099-2.468 1.352-4.086 4.314-3.828 7.185.213 2.355 1.512 4.27 3.32 5.431-2.575-.174-5.204-.068-7.77-.045zm12.243.28c-3.57.153-6.843-2.559-6.874-6.258-.038-3.973 2.864-5.978 6.335-6.692 1.58.084 2.955.213 4.307 1.367 1.284 1.094 2.218 2.72 2.567 4.376.881 4.26-2.324 7.033-6.327 7.208h-.008zm4.808-.546c1.892-1.352 2.97-3.54 2.537-6.327-.341-2.21-1.595-4.39-3.38-5.75a6.843 6.843 0 00-.516-.357c2.757.114 5.552.007 8.31.023.098 4.132.045 8.302.417 12.411-2.27-.32-4.952-.296-7.36 0h-.008z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.435 9.678c-.372-2.574-3.365-5.309-6.008-4.337C9.533 5.394 7.307 8 7.672 10.94c.402 3.244 2.947 5.158 6.152 4.68 2.871-.426 5.036-2.986 4.61-5.94zm-5.218 4.862c-2.553.174-4.398-1.664-4.512-4.216-.107-2.423 1.64-3.51 3.577-4.155.957.061 1.9-.007 2.796.448 1.29.654 2.08 1.884 2.233 3.29.258 2.46-1.687 4.466-4.094 4.633z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.806 7.643c-.235.06-.455.16-.66.273-.396.16-.76.41-1.056.752-1.254 1.443-.79 3.92 1.094 4.558 1.815.622 3.942-.828 4.056-2.742.114-1.823-1.664-3.32-3.434-2.849v.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
