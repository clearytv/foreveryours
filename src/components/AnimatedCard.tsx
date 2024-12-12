import { HTMLElementRefOf } from "@plasmicapp/react-web";
import React from "react";
import styles from "./AnimatedCard.module.css";

export interface AnimatedCardProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "elevated" | "highlighted";
  onClick?: () => void;
}

export function AnimatedCard(props: AnimatedCardProps) {
  const { className, children, variant = "default", onClick } = props;
  
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
} 