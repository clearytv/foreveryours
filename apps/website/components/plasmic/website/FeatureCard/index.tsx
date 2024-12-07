import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import React, { useReducer } from "react";

interface Props {
  className?: string;
  featureCardDescription?: string;
  featureCardTitle?: string;
  icon?: React.ReactNode;
}

function reducer(state: { isHovered: boolean }, action: 'mouse_enter' | 'mouse_leave') {
  switch (action) {
    case "mouse_enter":
      return { isHovered: true };
    case "mouse_leave":
      return { isHovered: false };
    default:
      return state;
  }
}

export const FeatureCard = React.forwardRef<HTMLDivElement, Props>(
  function FeatureCard(props, ref) {
    const {
      className,
      featureCardDescription = "Some description text of this feature goes here to try fill the space.",
      featureCardTitle = "Feature Title",
      icon,
    } = props;

    const [state, dispatch] = useReducer(reducer, { isHovered: false });
    const isHovered = state.isHovered;

    return (
      <div
        className={`w-[222px] flex flex-col items-center gap-3.5 justify-center relative transition-all duration-300 ${
          isHovered ? "shadow-[0px_3px_25px_#d8dbdd] h-[310px] scale-[1.03]" : "h-[300px]"
        } ${className}`}
        onMouseLeave={() => dispatch("mouse_leave")}
        onMouseEnter={() => dispatch("mouse_enter")}
        ref={ref}
      >
        <div
          className={`bg-forever-yours-original-colors-FY-blueish relative transition-all duration-300 rounded-full ${
            isHovered ? "w-[102.93px] h-[102.93px] mt-[-4.43px]" : "w-[100px] h-[100px]"
          }`}
        >
          {icon}
        </div>

        <div
          className={`relative transition-all duration-300 ${
            isHovered
              ? "w-[232.5px] mr-[-7.25px] ml-[-3.25px] h-[201.93px] mb-[-4.43px]"
              : "w-[226px] mr-[-4.00px] h-[196px]"
          }`}
        >
          <p
            className={`font-['Open_Sans',Helvetica] left-0 text-forever-yours-original-colors-FY-grey font-normal text-center absolute transition-all duration-300 ${
              isHovered
                ? "w-[228px] tracking-[1.03px] text-[16.5px] top-[103px] h-[99px] leading-[32.9px]"
                : "w-[222px] tracking-[1.00px] text-base top-[100px] h-24 leading-8"
            }`}
          >
            {featureCardDescription}
          </p>

          <div
            className={`h-0.5 bg-forever-yours-original-colors-FY-grey-faded absolute transition-all duration-300 ${
              isHovered ? "w-[175px] left-[27px] top-20" : "w-[170px] left-[26px] top-[78px]"
            }`}
          />

          <div
            className={`font-['Amatic_SC',Helvetica] left-0 top-0 text-forever-yours-original-colors-FY-grey font-normal text-center absolute transition-all duration-300 ${
              isHovered
                ? "w-[228px] tracking-[2.06px] text-4xl h-[73px] leading-[72.0px]"
                : "w-[222px] tracking-[2.00px] text-[35px] h-[70px] leading-[70px]"
            }`}
          >
            {featureCardTitle}
          </div>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard"; 