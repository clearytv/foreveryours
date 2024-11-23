// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RawFilesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RawFilesIcon(props: RawFilesIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.328 7.406v4.75H0V.734h3.133c1.4 0 2.435.269 3.101.805.672.537 1.008 1.344 1.008 2.422 0 1.51-.765 2.531-2.297 3.062l3.102 5.133h-1.57L3.71 7.406H1.328zm0-1.14h1.82c.938 0 1.625-.185 2.063-.555.437-.375.656-.935.656-1.68 0-.755-.224-1.3-.672-1.633-.442-.333-1.156-.5-2.14-.5H1.328v4.368zm16.742 5.89l-1.422-3.633H12.07l-1.406 3.633H9.32L13.836.687h1.117l4.492 11.47H18.07zm-1.836-4.828L14.906 3.79a18.985 18.985 0 01-.531-1.648c-.115.5-.279 1.05-.492 1.648l-1.344 3.54h3.695zm15.75 4.828h-1.312l-2.305-7.648c-.11-.339-.232-.766-.367-1.281-.135-.516-.206-.826-.21-.93a18.09 18.09 0 01-.548 2.258l-2.234 7.601h-1.313L20.656.734h1.407l1.804 7.055c.25.99.432 1.885.547 2.688.14-.954.349-1.886.625-2.797L27.086.734h1.406l2.149 7.008c.25.807.46 1.719.632 2.735.1-.74.287-1.641.563-2.704L33.633.734h1.406l-3.055 11.422zm12.329 0h-1.329V.734h6.368v1.18h-5.04v4.18h4.735v1.18h-4.734v4.882zm9.039 0h-1.297V3.594h1.297v8.562zM51.945 1.273c0-.296.073-.513.22-.648a.756.756 0 01.546-.21c.208 0 .388.07.539.21.151.14.227.357.227.648 0 .292-.076.51-.227.657a.764.764 0 01-.54.21.756.756 0 01-.546-.21c-.146-.146-.219-.365-.219-.657zm6.453 10.883h-1.296V0h1.296v12.156zm7.368.157c-1.266 0-2.266-.386-3-1.157-.73-.77-1.094-1.84-1.094-3.21 0-1.38.338-2.477 1.016-3.29.682-.812 1.596-1.218 2.742-1.218 1.073 0 1.922.354 2.547 1.062.625.703.937 1.633.937 2.79v.82h-5.898c.026 1.005.278 1.768.757 2.288.485.521 1.164.782 2.04.782.921 0 1.833-.193 2.734-.578v1.156a6.632 6.632 0 01-1.305.422 7.047 7.047 0 01-1.476.133zm-.352-7.79c-.687 0-1.237.224-1.648.672-.407.448-.646 1.068-.72 1.86h4.477c0-.818-.182-1.443-.546-1.875-.365-.438-.886-.657-1.563-.657zM77.656 9.82c0 .797-.297 1.412-.89 1.844-.594.432-1.428.649-2.5.649-1.136 0-2.021-.18-2.657-.54V10.57c.412.209.852.373 1.32.492.475.12.93.18 1.368.18.677 0 1.198-.107 1.562-.32.365-.219.547-.55.547-.992 0-.334-.146-.617-.437-.852-.287-.24-.85-.52-1.688-.844-.797-.296-1.364-.554-1.703-.773a2.42 2.42 0 01-.75-.758c-.161-.281-.242-.617-.242-1.008 0-.698.284-1.247.852-1.648.567-.406 1.346-.61 2.335-.61.922 0 1.823.188 2.704.563l-.461 1.055c-.86-.354-1.638-.532-2.336-.532-.615 0-1.078.097-1.39.29-.313.192-.47.458-.47.796 0 .23.058.425.172.586.12.162.31.315.57.461.26.146.76.357 1.5.633 1.016.37 1.701.742 2.055 1.117.36.375.54.847.54 1.414z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default RawFilesIcon;
/* prettier-ignore-end */