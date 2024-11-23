// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 227 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.978 26.86c-.43 0-.646-.25-.646-.748v-.408a1.43 1.43 0 00.034-.34v-.17l-.612-4.114a32.942 32.942 0 01-.306-1.87 444.9 444.9 0 01-.646-5.304A840.82 840.82 0 00.85 6.29l-.102-.782C.408 2.947.158 1.541 0 1.292A.983.983 0 01.306.986.731.731 0 01.714.85c.34 0 .567.057.68.17.136.113.204.317.204.612v1.02a866.957 866.957 0 002.21 20.808h.068c.068-.657.204-2.46.408-5.406l.068-.986c.159-2.879.25-4.397.272-4.556.068-.68.204-1.677.408-2.992l.408-2.754.102-1.564c.023-.272.034-.499.034-.68.023-.204.045-.351.068-.442l.034-.442a.26.26 0 01.034-.102 1.16 1.16 0 01.17-.136c.317 0 .521.08.612.238a.504.504 0 01.136.238.884.884 0 01.034.272l.068.306c.227 1.201.714 4.33 1.462 9.384.748 5.055 1.201 8.387 1.36 9.996l.102.068 1.258-13.77c.045-.861.193-2.221.442-4.08.227-1.881.34-3.411.34-4.59l-.034-.34V.816c0-.295.068-.499.204-.612.136-.136.363-.204.68-.204a.64.64 0 01.408.17c.159.113.238.238.238.374 0 .227-.125.442-.374.646.023.023.034.09.034.204 0 .136-.023.283-.068.442a2.167 2.167 0 01-.068.306c-.25 2.04-.555 5.043-.918 9.01l-.68 7.038-.272 2.686-.408 3.434-.17 1.734c0 .272-.045.476-.136.612-.068.136-.227.204-.476.204-.363 0-.578-.136-.646-.408-.045-.136-.09-.453-.136-.952l-.034-.51c-.544-3.49-1.36-9.701-2.448-18.632L6.29 6.29l-.034.034v.034l-1.7 18.564v.612c0 .884-.193 1.326-.578 1.326zm20.48-.442a.721.721 0 01-.476-.17.556.556 0 01-.17-.408v-4.454c0-.272-.578-.521-1.734-.748-1.156-.227-2.108-.34-2.856-.34-.046 0-.125.17-.238.51-.09.34-.159.59-.204.748-.295 1.179-.59 2.437-.884 3.774l-.17.748c-.046.181-.159.272-.34.272a.861.861 0 01-.51-.17.515.515 0 01-.204-.408l.034-.068v-.034l.374-1.7a61.04 61.04 0 00.714-3.128c.226-1.156.396-1.904.51-2.244.181-.748.544-2.618 1.088-5.61l.204-1.122c.59-3.49.997-5.69 1.224-6.596.113-.544.317-1.349.612-2.414.113-.453.272-.907.476-1.36.204-.385.374-.578.51-.578.363 0 .623.113.782.34.113.204.283 1.326.51 3.366.25 2.04.464 4.103.646 6.188l.442 5.644c0 .975.068 2.448.204 4.42.136 1.995.204 3.48.204 4.454v.136c0 .25-.034.476-.102.68-.09.181-.306.272-.646.272zm-1.36-6.562c.453 0 .68-.113.68-.34 0-1.405-.08-3.32-.238-5.746a202.198 202.198 0 00-.51-6.46 31.269 31.269 0 00-.272-2.618l-.136-1.326c0 .023-.023-.102-.068-.374l-.068-.408c-.181.499-.363 1.19-.544 2.074-.159.884-.329 1.927-.51 3.128-.544 3.377-1.009 5.916-1.394 7.616l-.306 1.156c-.34 1.133-.51 1.995-.51 2.584v.204c.997.317 2.142.476 3.434.476h.204a.752.752 0 00.238.034zm11.014 6.766c-.227 0-.397-.08-.51-.238a1.194 1.194 0 01-.17-.646v-6.052l-.068-5.44a212.846 212.846 0 01-.102-5.44l.034-.986V5.61c0-2.448-.023-3.672-.068-3.672h-3.842a1.01 1.01 0 01-.51-.136.427.427 0 01-.204-.374c0-.181.034-.306.102-.374.068-.068.25-.125.544-.17.317-.068.77-.102 1.36-.102h3.4l3.74-.034c.272 0 .454.045.544.136.113.09.17.238.17.442 0 .34-.215.51-.646.51H34.86l-.306.034.034 1.972V23.12l.034 2.516v.068c0 .181-.011.34-.034.476a.517.517 0 01-.136.272c-.068.113-.181.17-.34.17zm13.116.34c-.635 0-1.304-.25-2.006-.748-.703-.499-1.202-1.065-1.496-1.7-.272-.59-.556-2.46-.85-5.61-.272-3.15-.408-5.497-.408-7.038v-1.802a39.68 39.68 0 01-.034-1.734c0-1.179.068-2.346.204-3.502a9.26 9.26 0 01.34-1.462c.158-.408.374-.805.646-1.19.498-.77 1.246-1.28 2.244-1.53a6.868 6.868 0 011.734-.204c.43 0 .861.125 1.292.374.453.25.68.544.68.884 0 .25-.182.374-.544.374-.136 0-.397-.08-.782-.238-.34-.159-.646-.238-.918-.238a3.69 3.69 0 00-1.734.408c-.499.25-.896.59-1.19 1.02-.25.363-.465.861-.646 1.496a9.345 9.345 0 00-.34 1.904 17.449 17.449 0 00-.102 2.04l.034 1.904c.022.544.034 1.133.034 1.768 0 1.564.158 3.865.476 6.902.317 3.037.623 4.794.918 5.27.272.43.668.76 1.19.986.544.227 1.11.34 1.7.34 1.042 0 1.836-.329 2.38-.986.204-.272.419-.408.646-.408.204 0 .306.159.306.476 0 .408-.125.77-.374 1.088-.25.295-.59.521-1.02.68a5.873 5.873 0 01-2.38.476zm13.514-.204c-.181 0-.306-.045-.374-.136-.068-.09-.102-.227-.102-.408v-.408a1.59 1.59 0 00.034-.374c0-3.105-.113-7.038-.34-11.798h-1.53c-1.27 0-2.062.034-2.38.102 0 1.655.09 3.706.272 6.154.204 2.788.306 4.84.306 6.154 0 .34-.124.51-.374.51-.34 0-.51-.159-.51-.476-.022-1.11-.08-2.64-.17-4.59a331.368 331.368 0 00-.204-4.998c-.43-5.395-.646-10.563-.646-15.504 0-.227.148-.34.442-.34.136 0 .238.045.306.136.09.068.125.17.102.306v2.516c0 .612.057 1.768.17 3.468l.068 1.156c.046 1.27.068 2.029.068 2.278v1.666c0 .59.057.884.17.884l1.292-.068.68-.068c1.134-.09 1.78-.136 1.938-.136l.034-.068c0-.997-.056-2.913-.17-5.746-.113-2.879-.17-4.805-.17-5.78 0-.272.159-.408.476-.408a.63.63 0 01.408.136c.114.068.17.17.17.306 0 4.42.08 9.282.238 14.586.159 5.327.238 8.59.238 9.792v.476c0 .181-.045.34-.136.476-.068.136-.17.204-.306.204zm17.574.374c-3.15 0-4.726-5.451-4.726-16.354v-1.36c0-1.904.113-3.559.34-4.964.136-.884.317-1.61.544-2.176.25-.567.578-1.02.986-1.36.385-.385.884-.578 1.496-.578.544 0 1.043.113 1.496.34.453.204.827.476 1.122.816.25.317.476.737.68 1.258.204.521.362 1.02.476 1.496l.272 1.598c.544 3.876.816 7.31.816 10.302v.102c0 1.133-.023 2.176-.068 3.128a29.44 29.44 0 01-.374 3.57 7.135 7.135 0 01-.408 1.598 7.398 7.398 0 01-.646 1.36c-.476.816-1.145 1.224-2.006 1.224zm.068-.952c.362 0 .691-.204.986-.612.294-.43.521-1.02.68-1.768.362-1.587.59-3.14.68-4.658.045-1.224.068-2.414.068-3.57v-.136l-.034-3.4c-.045-1.224-.181-2.81-.408-4.76-.181-1.383-.555-2.8-1.122-4.25-.227-.567-.533-1.009-.918-1.326-.363-.317-.76-.476-1.19-.476-.386 0-.726.181-1.02.544-.295.363-.533.873-.714 1.53-.408 1.519-.635 2.924-.68 4.216a56.214 56.214 0 00-.102 3.434v1.666c0 1.519.147 3.445.442 5.78.181 1.473.408 2.754.68 3.842.272 1.088.635 2.006 1.088 2.754.453.793.975 1.19 1.564 1.19zm13.688.884a3.223 3.223 0 01-1.463-.34 3.353 3.353 0 01-1.121-.884 5.178 5.178 0 01-.782-1.258 9.923 9.923 0 01-.544-1.496c-.227-.77-.397-1.734-.51-2.89l-.069-1.054c0-.227-.01-.374-.034-.442v-.136c-.113-1.11-.26-3.559-.442-7.344-.158-3.785-.237-6.732-.237-8.84v-.51c0-.59.17-.884.51-.884.476 0 .714.272.714.816v.238l-.034.272c0 2.63.079 5.746.237 9.35.16 3.581.318 6.165.477 7.752.113.997.305 2.017.578 3.06.18.703.373 1.292.578 1.768.226.476.51.873.85 1.19.407.363.804.544 1.19.544.385 0 .725-.09 1.02-.272.317-.181.555-.42.714-.714.158-.25.283-.567.374-.952.113-.408.18-.793.203-1.156.023-.227.034-.6.034-1.122v-3.876c0-1.723-.045-3.842-.135-6.358l-.137-4.352-.068-2.89a58.598 58.598 0 01-.101-2.89c0-.25.068-.442.204-.578a.652.652 0 01.475-.204c.182 0 .33.068.443.204.136.136.204.329.204.578v2.584c0 1.133.01 2.153.034 3.06v3.06c0 2.199.022 4.125.068 5.78.022 1.677.033 3.559.033 5.644 0 .567-.022 1.065-.067 1.496-.046.43-.136.884-.272 1.36a4.607 4.607 0 01-.578 1.394 2.956 2.956 0 01-.919.918 2.8 2.8 0 01-1.427.374zm14.908-.306c-.453 0-.737-.227-.85-.68l-.408-1.496c-.635-2.108-1.099-3.887-1.394-5.338-.181-.793-.408-1.893-.68-3.298-.317-1.632-.612-2.958-.884-3.978l-.34.204-.442.204.068 13.09v.51c0 .453-.204.68-.612.68a.598.598 0 01-.442-.17.558.558 0 01-.17-.408v-.51l.068-6.868.068-3.298c.091-3.967.136-7.344.136-10.132V.884c0-.204.204-.306.612-.306.589 0 1.133.159 1.632.476a3.36 3.36 0 011.224 1.292 7.414 7.414 0 01.918 3.638c0 1.043-.227 2.176-.68 3.4-.136.34-.306.737-.51 1.19-.204.43-.385.725-.544.884.476 1.745 1.167 4.431 2.074 8.058l1.598 6.12c.023.068.034.193.034.374a.897.897 0 01-.136.51c-.068.159-.181.238-.34.238zm-5.032-15.504c.181 0 .487-.215.918-.646.431-.43.737-.793.918-1.088.159-.317.295-.793.408-1.428.113-.635.17-1.201.17-1.7 0-.93-.159-1.881-.476-2.856-.159-.567-.397-1.02-.714-1.36-.317-.363-.669-.544-1.054-.544h-.068c-.023.023-.057.034-.102.034v9.588zm19.989 15.436c-.272-.068-.396-.102-.374-.102-.408-1.677-.861-4.182-1.36-7.514l-1.87-12.138-.306-1.496c-.498-1.95-.748-3.32-.748-4.114 0-.159.046-.295.136-.408.114-.136.227-.204.34-.204a.55.55 0 01.238.068c.114.045.216.17.306.374.091.181.136.351.136.51l.068.476.476 2.618.306 1.802 1.7 11.662.442 3.23c.182 1.088.329 2.12.442 3.094l.238-2.414.374-3.91.816-7.446c.204-2.108.352-3.49.442-4.148l.17-1.768.238-1.7c.114-.68.193-1.315.238-1.904.046-.43.261-.646.646-.646l.204.136h-.068l.34.272c0 .657-.09 1.62-.272 2.89l-.204 1.326-.102.85c-.294 2.47-.476 4.012-.544 4.624-.34 2.879-.702 5.995-1.088 9.35-.362 3.355-.555 5.327-.578 5.916-.181.499-.396.748-.646.748l-.136-.034zm-.034-1.938l-.034-.102-.068.102h.102zm11.139 1.53a51.506 51.506 0 00-2.074-.034.677.677 0 01-.442-.17.521.521 0 01-.17-.374c0-.295.193-.442.578-.442h1.326c0-2.607-.079-5.893-.238-9.86a370.875 370.875 0 00-.272-7.48l.034-1.734V3.944c0-1.133-.023-1.859-.068-2.176h-1.19c-.227 0-.34-.159-.34-.476 0-.204.091-.363.272-.476.159-.068.578-.102 1.258-.102h.952c.34.023.771.034 1.292.034.181 0 .329.045.442.136.113.068.17.181.17.34 0 .136-.034.26-.102.374a.334.334 0 01-.306.17c-.159 0-.295-.011-.408-.034h-.748c-.227 0-.363.023-.408.068l-.068.136c0 1.768.147 5.338.442 10.71.272 4.964.408 8.534.408 10.71v.952c-.023.295-.034.6-.034.918h1.224c.521 0 .782.159.782.476a.64.64 0 01-.17.408c-.091.113-.193.17-.306.17h-1.836zm9.246.204a1.81 1.81 0 01-.816-.204c-.272-.136-.408-.295-.408-.476 0-.136.091-.363.272-.68.181-.295.261-.521.238-.68l-.102-2.992-.238-9.282-.068-4.114c-.023-2.516-.079-4.091-.17-4.726a4.014 4.014 0 00-.272-.85c-.159-.43-.238-.737-.238-.918 0-.544.861-.816 2.584-.816h.17c1.156 0 2.153.397 2.992 1.19.657.612 1.247 1.575 1.768 2.89.363 1.043.635 2.21.816 3.502.091.68.17 1.723.238 3.128v1.054c0 1.405-.193 2.935-.578 4.59a21.488 21.488 0 01-1.564 4.59 9.317 9.317 0 01-1.598 2.448c-.635.725-1.247 1.303-1.836 1.734-.589.408-.986.612-1.19.612zm.51-1.734c.839-.43 1.587-1.054 2.244-1.87a10.679 10.679 0 001.564-2.754c.34-.839.623-1.79.85-2.856.227-1.088.385-2.097.476-3.026.068-.816.102-1.598.102-2.346 0-6.619-1.825-9.928-5.474-9.928-.476 0-.714.125-.714.374 0 .793.045 1.734.136 2.822.091 1.11.136 2.051.136 2.822 0 1.247.091 3.411.272 6.494.159 2.675.238 4.828.238 6.46v3.808h.17zm13.371 1.87c-.544 0-.929-.057-1.156-.17-.204-.09-.306-.283-.306-.578v-.646a5.105 5.105 0 01-.034-.612v-.068l.034-4.964-.034-14.042c0-1.45-.022-2.709-.068-3.774 0-.272.057-.499.17-.68.114-.181.261-.272.442-.272h2.108c.318 0 .556.023.714.068.227.068.34.26.34.578a.548.548 0 01-.204.442.876.876 0 01-.442.204h-.578l-1.088-.068c-.158 0-.272.034-.34.102-.045.045-.068.147-.068.306 0 1.065.012 2.029.034 2.89v7.14c0 .045.023.068.068.068h.068a23.13 23.13 0 011.836-.068c.363 0 .544.159.544.476 0 .227-.045.385-.136.476-.068.068-.192.102-.374.102h-1.938c-.09 0-.136.057-.136.17l.068 5.032c.046 1.564.068 3.366.068 5.406v1.258h3.196c.408 0 .612.147.612.442 0 .363-.102.578-.306.646-.272.09-.827.136-1.666.136h-1.428zm12.391.51c-3.151 0-4.726-5.451-4.726-16.354v-1.36c0-1.904.113-3.559.34-4.964.136-.884.317-1.61.544-2.176.249-.567.578-1.02.986-1.36.385-.385.884-.578 1.496-.578.544 0 1.043.113 1.496.34.453.204.827.476 1.122.816.249.317.476.737.68 1.258.204.521.363 1.02.476 1.496l.272 1.598c.544 3.876.816 7.31.816 10.302v.102c0 1.133-.023 2.176-.068 3.128a29.36 29.36 0 01-.374 3.57 7.168 7.168 0 01-.408 1.598 7.418 7.418 0 01-.646 1.36c-.476.816-1.145 1.224-2.006 1.224zm.068-.952c.363 0 .691-.204.986-.612.295-.43.521-1.02.68-1.768a28.54 28.54 0 00.68-4.658c.045-1.224.068-2.414.068-3.57v-.136l-.034-3.4c-.045-1.224-.181-2.81-.408-4.76-.181-1.383-.555-2.8-1.122-4.25-.227-.567-.533-1.009-.918-1.326-.363-.317-.759-.476-1.19-.476-.385 0-.725.181-1.02.544-.295.363-.533.873-.714 1.53-.408 1.519-.635 2.924-.68 4.216a56.214 56.214 0 00-.102 3.434v1.666c0 1.519.147 3.445.442 5.78.181 1.473.408 2.754.68 3.842.272 1.088.635 2.006 1.088 2.754.453.793.975 1.19 1.564 1.19zm10.56.986a5.13 5.13 0 01-.952-.068 2.277 2.277 0 01-.68-.204 1.376 1.376 0 01-.612-.578c0-.272.124-.408.374-.408.249 0 .566.08.952.238.362.181.668.272.918.272.498 0 .952-.204 1.36-.612.43-.408.759-.94.986-1.598.453-1.292.68-2.437.68-3.434 0-1.11-.159-2.233-.476-3.366a16.516 16.516 0 00-1.258-3.196 19.62 19.62 0 00-.578-1.122 104.998 104.998 0 01-1.292-2.652 15.05 15.05 0 01-.782-2.108c-.318-1.02-.476-2.12-.476-3.298 0-.748.113-1.462.34-2.142a4.558 4.558 0 011.156-1.802c.566-.521 1.201-.782 1.904-.782.272 0 .6.113.986.34.385.204.578.408.578.612 0 .181-.068.272-.204.272-.136 0-.318-.057-.544-.17a1.197 1.197 0 00-.578-.17c-.522 0-.986.193-1.394.578a3.472 3.472 0 00-.85 1.428 4.91 4.91 0 00-.238 1.564c0 .884.113 1.802.34 2.754.226.93.532 1.802.918 2.618l1.19 2.482.34.714a35 35 0 011.088 2.414c.272.635.498 1.349.68 2.142.249 1.065.374 2.085.374 3.06 0 1.315-.34 2.652-1.02 4.012a4.46 4.46 0 01-1.36 1.598 3.13 3.13 0 01-1.87.612zm40.205-12.873h-22.321v-2.75h22.321l-10.267-7.7 2.613-1.925 14.667 11-14.667 11-2.613-1.925 10.267-7.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
