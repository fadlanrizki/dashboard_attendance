import { Card, Divider } from "@heroui/react";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { RiFileCopy2Fill } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi2";
import { BsBoxFill } from "react-icons/bs";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { TbMessageUser } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

const menu = [
  {
    name: "Dashboard Attendance",
    logo: <HiMiniBuildingStorefront fontSize={20} />,
    child: true,
  },
  {
    name: "",
    logo: <RiFileCopy2Fill fontSize={20} />,
    child: true,
  },
  {
    name: "",
    logo: (
      <img src="image/common/menu/companies-logo.png" width={20} height={20} />
    ),
    child: false,
  },
  {
    name: "",
    logo: <HiCreditCard fontSize={20} />,
    child: false,
  },
  {
    name: "",
    logo: <BsBoxFill fontSize={20} />,
    child: false,
  },
  {
    name: "",
    logo: <HiWrenchScrewdriver fontSize={20} />,
    child: false,
  },
  {
    name: "",
    logo: <TbMessageUser fontSize={20} />,
    child: true,
  },
  {
    name: "",
    logo: <HiWrenchScrewdriver fontSize={20} />,
    child: true,
  },
  {
    name: "",
    logo: <RiFileCopy2Fill fontSize={20} />,
    child: false,
  },
  {
    name: "",
    logo: <FaHandHoldingUsd fontSize={20} />,
    child: false,
  },
  {
    name: "",
    logo: <MdRocketLaunch fontSize={20} />,
    child: false,
  },
];

const SideBar = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-screen bg-[#981A1A] py-5 flex flex-col gap-2 justify-between items-center">
        {/* Logo */}
        <div>
          <div className="h-[80px] w-[80px]"></div>
          <Divider />
        </div>
        {/* Menu */}
        <div className="w-full flex flex-col overflow-y-hidden">
          {menu.map((item, index) => (
            <div key={index} className="w-11/12 flex flex-col items-center py-3 hover:bg-[#F53939] hover:rounded-md cursor-pointer">
              <div className="w-full flex items-center justify-center">
                <Card className="w-fit p-4">
                  {item.logo}
                </Card>
                <div className="relative">
                  <div className="absolute ml-3 mt-[-10px]">{item.child && <IoChevronDown fontSize={20} color="#6C757D" />}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="text-white text-xs text-center">
          &copy; 2023 Cudo Communication
        </div>
      </div>
    </div>
  );
};

export default SideBar;
