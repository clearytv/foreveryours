// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer1Icon(props: Layer1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 92 98"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M91.962 41.143c0-1.357-1.62-2.347-2.785-1.612-6.165 3.93-12.757 7.747-18.468 12.383-.114-4.297-.114-8.595-.057-12.92 0-.283-.057-.509-.142-.707 4.177-4.1 5.938-12.185 6.25-17.528C77.5 8.206 68.977-1.181 56.106.12 49.4.8 42.467 5.577 39.342 11.825 37.438 5.69 32.806.884 24.652.262 13.344-.586 1.354 8.63.104 19.995c-.881 8.114 3.95 14.928 10.654 18.292-.198.028-.426.057-.625.085-.255.056-.426.17-.511.367-.511.057-1.051.425-1.08 1.018-.54 11.677-.085 23.41-.511 35.085-.029 1.046.852 1.697 1.79 1.782 8.268.876 16.678 1.187 25.117 1.244-4.887 4.919-9.263 10.262-13.667 15.605-.739.877.426 2.093 1.279 1.273 4.83-4.496 9.66-8.99 14.092-13.853.086 2.007.313 4.014.37 5.993.085 3.223-.483 6.587.966 9.528.454.904 1.733.735 2.216 0 1.875-2.912 1.392-6.927 1.193-10.263-.113-1.696-.199-3.506-.483-5.258 1.932 2.43 4.29 4.58 6.507 6.672 2.926 2.77 6.023 6.474 9.66 8.255 1.42.679 3.324-.792 2.33-2.318-2.273-3.421-6.109-5.994-9.149-8.764-2.557-2.319-5.143-4.92-8.04-6.87 9.489-.114 18.95-.481 28.298-.849.938-.028 2.046-.848 1.904-1.894-.54-4.1-.91-8.199-1.194-12.27 5.797 3.28 11.82 6.107 17.417 9.754 1.165.763 3.183-.226 2.984-1.725-1.222-9.895.199-19.79.37-29.713l-.03-.028zM44.91 38.626c-2.585-.028-5.17-.113-7.756-.197-1.42-.057-2.87-.142-4.319-.227 2.529-2.318 4.518-5.597 5.796-9.273.966 3.902 3.069 7.323 6.28 9.697zM3.485 22.201C3.229 12.956 11.298 5.69 19.907 4.05 40.961.063 41.927 35.996 23.8 37.692c-.938-.028-1.847-.056-2.785-.056C12.662 35.714 3.77 32.435 3.485 22.2zm8.183 50.973c.312-10.997.483-22.08-.966-32.993 8.438 2.234 17.814 1.923 26.48 2.375 9.945.51 19.889.82 29.805-.31-.313 10.318.313 20.666 1.42 30.928-18.865-.056-37.902 1.555-56.74 0zM55.65 38.315c-10.399-.48-13.893-7.407-15.058-15.973 1.221-9.33 4.716-17.557 15.74-18.546 11.394-1.018 17.332 7.463 16.31 17.924-.995 10.234-6.11 17.076-17.02 16.567l.028.028zm31.652 29.007c-5.143-2.884-10.257-5.909-15.684-8.199-.227-.084-.426-.141-.653-.141-.086-1.498-.142-3.025-.2-4.523 6.053-2.602 11.764-6.248 17.332-9.81-.397 7.576-1.278 15.125-.823 22.701l.028-.028z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer1Icon;
/* prettier-ignore-end */