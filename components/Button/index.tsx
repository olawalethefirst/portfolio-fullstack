import React, { PropsWithChildren } from "react";
import { useTheme } from "next-themes";
import { colorScheme } from "../../constants";

const buttonScheme = {
  primary: {
    background: colorScheme.primary,
    font: colorScheme.primaryAccent,
    border: colorScheme.primaryAccent,
    hoverBackground: colorScheme.secondaryAccent,
  },
  secondary: {
    background: colorScheme.secondary,
    font: colorScheme.secondaryAccent,
    border: colorScheme.secondaryAccent,
    hoverBackground: colorScheme.primaryAccent,
  },
} as const;

const Button = ({
  children,
  type = "primary",
  onClick,
  classes,
  outlined,
}: PropsWithChildren<{
  type?: "primary" | "secondary";
  onClick: () => unknown;
  classes?: string;
  outlined?: boolean;
}>) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        flex items-center 
        text-xs tablet:text-sm laptop:text-base 
        leading-none tablet:leading-none laptop:leading-none 
        text-${type}Accent
        py-1 tablet:py-1.5 laptop:py-2 px-2 tablet:px-3 laptop:px-4
        rounded-3xl
        transition-all ease-out duration-300 
        ${
          outlined
            ? `bg-${type} border ${
                type === "primary"
                  ? "border-secondaryAccent"
                  : "border-primaryAccent"
              }`
            : ""
        }
        ${`${
          type === "primary"
            ? "hover:bg-secondaryAccent active:bg-secondaryAccent"
            : "hover:bg-primaryAccent active:bg-primaryAccent"
        }`}
        ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
