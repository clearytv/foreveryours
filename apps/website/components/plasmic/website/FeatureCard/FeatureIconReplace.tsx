import React from "react";
import styles from "./styles.module.css";

export const FeatureIconReplace: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.featureIcon}
    >
      <path
        d="M12 2L2 22H22L12 2Z"
        fill="#4A4A4A"
        fillOpacity="0.45"
      />
    </svg>
  );
}; 