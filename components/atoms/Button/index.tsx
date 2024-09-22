import React, { PropsWithChildren } from "react";
import { useTheme } from "next-themes";


const Button = ({
  children,
  type = "primary",
  onClick,
  className,
  outlined,
}: PropsWithChildren<{
  type?: "primary" | "secondary";
  onClick: () => unknown;
  className?: string;
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
        font-medium
        py-1 tablet:py-1.5 laptop:py-2 px-2 tablet:px-3 laptop:px-4
        rounded-3xl
        transition-all ease-out duration-300 
        ${
          outlined
            ? `bg-${type} border ${
                type === "primary"
                  ? "border-primaryAccent"
                  : "border-secondaryAccent"
              }`
            : ""
        }
        ${`${
          type === "primary"
            ? "text-primaryAccent hover:bg-secondary active:bg-secondary"
            : "text-primary hover:bg-secondary active:bg-secondary"
        }`}
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
