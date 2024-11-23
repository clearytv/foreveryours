// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialReelsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialReelsIcon(props: SocialReelsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 97 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.188 9.117c0 1.005-.365 1.79-1.094 2.352-.73.562-1.719.844-2.969.844-1.354 0-2.396-.175-3.125-.524v-1.281c.469.198.98.354 1.531.469a8.062 8.062 0 001.64.171c.886 0 1.553-.166 2-.5.449-.338.673-.807.673-1.406 0-.396-.081-.719-.242-.969-.157-.255-.422-.49-.797-.703-.37-.213-.935-.455-1.696-.726-1.062-.38-1.823-.831-2.28-1.352-.454-.52-.68-1.2-.68-2.039 0-.88.33-1.58.992-2.101C1.802.83 2.677.57 3.766.57c1.135 0 2.18.209 3.132.625l-.414 1.157c-.942-.396-1.859-.594-2.75-.594-.703 0-1.252.15-1.648.453-.396.302-.594.721-.594 1.258 0 .396.073.721.219.976.146.25.39.482.734.696.35.208.88.44 1.594.695 1.198.427 2.02.885 2.469 1.375.453.49.68 1.125.68 1.906zm10.531-1.25c0 1.396-.352 2.487-1.055 3.274-.703.78-1.674 1.171-2.914 1.171-.766 0-1.445-.18-2.04-.539-.593-.359-1.051-.875-1.374-1.546-.323-.672-.484-1.459-.484-2.36 0-1.396.348-2.482 1.046-3.258.698-.78 1.667-1.171 2.907-1.171 1.198 0 2.148.398 2.851 1.195.709.797 1.063 1.875 1.063 3.234zm-6.524 0c0 1.094.22 1.927.657 2.5.437.573 1.08.86 1.93.86.848 0 1.491-.284 1.929-.852.443-.573.664-1.409.664-2.508 0-1.088-.221-1.914-.664-2.476-.438-.568-1.086-.852-1.945-.852-.85 0-1.49.279-1.922.836-.432.557-.649 1.388-.649 2.492zm13.227 4.446c-1.24 0-2.2-.38-2.883-1.141-.677-.766-1.016-1.846-1.016-3.242 0-1.433.344-2.54 1.032-3.32.692-.782 1.677-1.173 2.953-1.173.411 0 .823.045 1.234.133.412.089.735.193.969.313l-.398 1.101a5.827 5.827 0 00-.938-.28 4.053 4.053 0 00-.898-.118c-1.74 0-2.61 1.11-2.61 3.328 0 1.052.211 1.86.633 2.422.427.562 1.057.844 1.89.844.714 0 1.446-.154 2.196-.461v1.148c-.573.297-1.294.445-2.164.445zm6.5-.157h-1.297V3.594h1.297v8.562zM29.516 1.273c0-.296.073-.513.218-.648a.756.756 0 01.547-.21c.209 0 .388.07.54.21.15.14.226.357.226.648 0 .292-.076.51-.227.657a.764.764 0 01-.539.21.756.756 0 01-.547-.21c-.146-.146-.218-.365-.218-.657zm10.422 10.883l-.258-1.219h-.063c-.427.537-.854.902-1.281 1.094-.422.188-.95.281-1.586.281-.849 0-1.516-.218-2-.656-.48-.437-.719-1.06-.719-1.867 0-1.73 1.383-2.635 4.149-2.719l1.453-.047v-.53c0-.673-.146-1.167-.438-1.485-.286-.323-.747-.485-1.383-.485-.713 0-1.52.22-2.421.657l-.399-.992a6.11 6.11 0 011.383-.54 6.051 6.051 0 011.516-.195c1.02 0 1.776.227 2.265.68.495.453.742 1.18.742 2.18v5.843h-.96zm-2.93-.914c.807 0 1.44-.221 1.898-.664.464-.443.696-1.062.696-1.86v-.773L38.305 8c-1.032.036-1.776.198-2.235.484-.453.282-.68.722-.68 1.32 0 .47.141.826.422 1.071.287.245.685.367 1.196.367zm8.867.914h-1.297V0h1.297v12.156zm10.43-4.75v4.75h-1.328V.734h3.132c1.401 0 2.435.269 3.102.805.672.537 1.008 1.344 1.008 2.422 0 1.51-.766 2.531-2.297 3.062l3.101 5.133h-1.57l-2.766-4.75h-2.382zm0-1.14h1.82c.938 0 1.625-.185 2.063-.555.437-.375.656-.935.656-1.68 0-.755-.224-1.3-.672-1.633-.443-.333-1.156-.5-2.14-.5h-1.727v4.368zm12.985 6.047c-1.267 0-2.267-.386-3-1.157-.73-.77-1.095-1.84-1.095-3.21 0-1.38.339-2.477 1.016-3.29.682-.812 1.596-1.218 2.742-1.218 1.073 0 1.922.354 2.547 1.062.625.703.938 1.633.938 2.79v.82h-5.899c.026 1.005.279 1.768.758 2.288.484.521 1.164.782 2.039.782.922 0 1.833-.193 2.734-.578v1.156a6.628 6.628 0 01-1.304.422 7.046 7.046 0 01-1.477.133zm-.353-7.79c-.687 0-1.236.224-1.648.672-.406.448-.646 1.068-.719 1.86h4.477c0-.818-.182-1.443-.547-1.875-.365-.438-.885-.657-1.563-.657zm10.336 7.79c-1.265 0-2.265-.386-3-1.157-.729-.77-1.093-1.84-1.093-3.21 0-1.38.338-2.477 1.015-3.29.683-.812 1.597-1.218 2.743-1.218 1.072 0 1.921.354 2.546 1.062.625.703.938 1.633.938 2.79v.82h-5.899c.026 1.005.28 1.768.758 2.288.485.521 1.164.782 2.04.782.921 0 1.833-.193 2.734-.578v1.156a6.628 6.628 0 01-1.305.422 7.047 7.047 0 01-1.477.133zm-.351-7.79c-.688 0-1.237.224-1.649.672-.406.448-.645 1.068-.718 1.86h4.476c0-.818-.182-1.443-.547-1.875-.364-.438-.885-.657-1.562-.657zm8.016 7.633H85.64V0h1.296v12.156zM96.21 9.82c0 .797-.296 1.412-.89 1.844-.593.432-1.427.649-2.5.649-1.135 0-2.02-.18-2.656-.54V10.57c.412.209.852.373 1.32.492.474.12.93.18 1.368.18.677 0 1.197-.107 1.562-.32.365-.219.547-.55.547-.992 0-.334-.146-.617-.438-.852-.286-.24-.849-.52-1.687-.844-.797-.296-1.365-.554-1.703-.773-.334-.224-.584-.477-.75-.758-.162-.281-.242-.617-.242-1.008 0-.698.283-1.247.851-1.648.568-.406 1.346-.61 2.336-.61.922 0 1.823.188 2.703.563l-.46 1.055c-.86-.354-1.639-.532-2.337-.532-.614 0-1.078.097-1.39.29-.313.192-.469.458-.469.796 0 .23.057.425.172.586.12.162.31.315.57.461.26.146.76.357 1.5.633 1.016.37 1.7.742 2.055 1.117.36.375.539.847.539 1.414z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default SocialReelsIcon;
/* prettier-ignore-end */