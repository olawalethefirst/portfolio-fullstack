import { useRouter } from "next/router";
import Button from "@/components/atoms/Button";
import { MobileHeader } from "./components/MobileHeader";
import Icon from "@/components/atoms/Icon";

const Header = () => {
  return (
    <>
      <MobileHeader options={["Work", "About", "Blog", "Resume", "Contact"]} />

      <div
        className={`
          hidden tablet:flex
          sticky top-[10px] z-[99]
          flex-row items-center justify-between  
          bg-secondary rounded-[32px] p-1.5 mx-[-16px]
        `}
      >
        <Icon name="logo" size={24} />

        <div className="flex">
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => {}}
            type="secondary"
          >
            Work
          </Button>
          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => {}}
            type="secondary"
          >
            About
          </Button>

          <Button
            onClick={() => {}}
            className="laptop:my-1 p-1 laptop:p-1"
            type="secondary"
          >
            Resume
          </Button>

          <Button
            className="laptop:my-1 p-1 laptop:p-1"
            onClick={() => window.open("mailto:hello@chetanverma.com")}
            type="secondary"
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
