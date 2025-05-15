import React from "react";
import styles from "../styles/Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // for supporting other props like `disabled`, `type`, etc.

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], styles[size])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
