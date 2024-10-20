import { useRouter } from "next/router";
import Button from "@/components/atoms/Button";
import { MobileHeader } from "./components/MobileHeader";
import Icon from "@/components/atoms/Icon";
import { NavigationOption } from "./types";

interface HeaderProps {
  navigationOptions: NavigationOption[];
}
const Header = ({ navigationOptions }: HeaderProps) => {
  return (
    <>
      <MobileHeader options={navigationOptions} />

      <div
        className={`
          hidden tablet:flex
          sticky top-[10px] z-[99]
          flex-row items-center justify-between  
          bg-secondary rounded-[32px] p-1.5 mx-[-16px]
        `}
      >
        <Icon name="logo" size={24} />

        <div className="flex gap-1">
          {navigationOptions.map((option) => (
            <Button
              className="laptop:my-1 p-1 laptop:p-1"
              onClick={option.onClick}
              type="secondary"
              key={option.title}
            >
              {option.title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
