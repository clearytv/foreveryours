// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterviewsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InterviewsIcon(props: InterviewsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 84 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 11.742V.32h1.328v11.422H0zm11.133 0V6.203c0-.698-.159-1.219-.477-1.562-.318-.344-.815-.516-1.492-.516-.896 0-1.552.242-1.969.727-.416.484-.625 1.283-.625 2.398v4.492H5.273V3.18h1.055l.211 1.172h.063a2.622 2.622 0 011.117-.977 3.596 3.596 0 011.601-.352c1.032 0 1.808.25 2.328.75.521.495.782 1.29.782 2.383v5.586h-1.297zm7.734-.914c.23 0 .45-.015.664-.047.214-.036.383-.073.508-.11v.993c-.14.068-.349.123-.625.164-.27.047-.516.07-.734.07-1.657 0-2.485-.872-2.485-2.617V4.187H14.97v-.625l1.226-.539.547-1.828h.75V3.18h2.485v1.007h-2.485v5.04c0 .515.123.911.367 1.187.245.276.581.414 1.008.414zm7.508 1.07c-1.266 0-2.266-.385-3-1.156-.73-.77-1.094-1.841-1.094-3.21 0-1.381.339-2.477 1.016-3.29.682-.812 1.596-1.219 2.742-1.219 1.073 0 1.922.355 2.547 1.063.625.703.937 1.633.937 2.789v.82h-5.898c.026 1.006.279 1.769.758 2.29.484.52 1.164.78 2.039.78.922 0 1.833-.192 2.734-.578v1.157a6.628 6.628 0 01-1.304.422 7.041 7.041 0 01-1.477.132zm-.352-7.789c-.687 0-1.236.224-1.648.672-.406.448-.646 1.068-.719 1.86h4.477c0-.818-.182-1.443-.547-1.875-.365-.438-.885-.657-1.563-.657zm10.625-1.086c.38 0 .722.032 1.024.094l-.18 1.203a4.418 4.418 0 00-.937-.117c-.693 0-1.287.281-1.782.844-.49.562-.734 1.263-.734 2.101v4.594h-1.297V3.18h1.07l.149 1.586h.062c.318-.558.701-.987 1.149-1.29.448-.302.94-.453 1.476-.453zm5.5 8.719l-3.25-8.562h1.391l1.844 5.078c.416 1.187.661 1.958.734 2.312h.063c.057-.276.237-.846.539-1.71.307-.87.992-2.764 2.054-5.68h1.391l-3.25 8.562h-1.516zm8.438 0h-1.297V3.18h1.297v8.562zM49.18.86c0-.296.073-.513.218-.648A.757.757 0 0149.945 0c.209 0 .388.07.54.21.15.142.226.358.226.65 0 .291-.076.51-.227.656a.764.764 0 01-.539.21.757.757 0 01-.547-.21c-.145-.146-.218-.365-.218-.657zm8.773 11.038c-1.266 0-2.266-.385-3-1.156-.729-.77-1.094-1.841-1.094-3.21 0-1.381.339-2.477 1.016-3.29.682-.812 1.596-1.219 2.742-1.219 1.073 0 1.922.355 2.547 1.063.625.703.938 1.633.938 2.789v.82h-5.899c.026 1.006.279 1.769.758 2.29.484.52 1.164.78 2.039.78.922 0 1.833-.192 2.734-.578v1.157a6.631 6.631 0 01-1.304.422 7.041 7.041 0 01-1.477.132zm-.351-7.789c-.688 0-1.237.224-1.649.672-.406.448-.646 1.068-.719 1.86h4.477c0-.818-.182-1.443-.547-1.875-.364-.438-.885-.657-1.562-.657zm13.711 7.633l-1.57-5.023c-.1-.308-.285-1.005-.555-2.094h-.063c-.208.911-.39 1.615-.547 2.11l-1.617 5.007h-1.5L63.125 3.18h1.36c.552 2.15.97 3.789 1.257 4.914.292 1.125.459 1.883.5 2.273h.063a20.774 20.774 0 01.61-2.273l1.57-4.914h1.406l1.53 4.914c.292.896.49 1.648.595 2.258h.062c.021-.188.076-.477.164-.868.094-.39.638-2.492 1.633-6.304h1.344l-2.367 8.562h-1.54zm11.984-2.336c0 .797-.297 1.412-.89 1.844-.594.432-1.428.648-2.5.648-1.136 0-2.022-.18-2.657-.539v-1.203c.412.209.852.373 1.32.492.474.12.93.18 1.368.18.677 0 1.197-.107 1.562-.32.365-.219.547-.55.547-.992 0-.334-.146-.618-.438-.852-.286-.24-.849-.52-1.687-.844-.797-.297-1.365-.554-1.703-.773-.334-.224-.584-.477-.75-.758-.162-.281-.242-.617-.242-1.008 0-.698.283-1.247.851-1.648.568-.406 1.346-.61 2.336-.61.922 0 1.823.188 2.703.563l-.46 1.055c-.86-.355-1.639-.532-2.337-.532-.614 0-1.078.097-1.39.29-.313.192-.47.458-.47.796 0 .23.058.425.173.586.12.162.31.315.57.461.26.146.76.357 1.5.633 1.016.37 1.7.742 2.055 1.117.36.375.539.847.539 1.414z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default InterviewsIcon;
/* prettier-ignore-end */
