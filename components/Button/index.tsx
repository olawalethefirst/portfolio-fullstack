import React, { PropsWithChildren } from "react";
import { useTheme } from "next-themes";
import { colorScheme } from "../../constants";

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
            ? "tex-secondaryAccent hover:bg-primaryAccent active:bg-secondaryAccent"
            : "text-primaryAccent hover:bg-secondaryAccent active:bg-primaryAccent"
        }`}
        ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
