import React from "react";
import styles from "./styles.module.css";
import { FeatureIconReplace } from "./FeatureIconReplace";

interface Props {
  className?: string;
  featureCardDescription?: string;
  featureCardTitle?: string;
  icon?: React.ReactNode;
  themeResetClass?: string;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, Props>(
  function FeatureCard(props, ref) {
    const {
      className,
      themeResetClass,
      featureCardDescription = "Some description text of this feature goes here to try fill the space.",
      featureCardTitle = "Feature Title",
      icon = <FeatureIconReplace />,
    } = props;

    return (
      <div
        className={`${styles.featureCard} ${className || ""} ${themeResetClass || ""}`}
        ref={ref}
      >
        <div className={styles.iconContainer}>
          {icon}
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            {featureCardTitle}
          </h3>

          <div className={styles.divider} />

          <p className={styles.description}>
            {featureCardDescription}
          </p>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard"; 