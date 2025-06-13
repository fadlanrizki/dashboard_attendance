import { Card, Divider } from "@heroui/react";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { RiFileCopy2Fill } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi2";
import { BsBoxFill } from "react-icons/bs";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { TbMessageUser } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const menu = [
  {
    name: 'Dashboard Attendance',
    logo: <HiMiniBuildingStorefront fontSize={20} /> 
  },
  {
    name: '',
    logo: <RiFileCopy2Fill fontSize={20} /> 
  },
  {
    name: '',
    logo: <img src="image/common/menu/companies-logo.png" width={20} height={20}/> 
  },
  {
    name: '',
    logo: <HiCreditCard fontSize={20} /> 
  },
  {
    name: '',
    logo: <BsBoxFill fontSize={20} /> 
  },
  {
    name: '',
    logo: <HiWrenchScrewdriver fontSize={20} /> 
  },
  {
    name: '',
    logo: <TbMessageUser fontSize={20} /> 
  },
  {
    name: '',
    logo: <HiWrenchScrewdriver fontSize={20} /> 
  },
  {
    name: '',
    logo: <RiFileCopy2Fill fontSize={20} /> 
  },
  {
    name: '',
    logo: <FaHandHoldingUsd fontSize={20} /> 
  },
  {
    name: '',
    logo: <MdRocketLaunch fontSize={20} /> 
  },

]

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
        <div className="grid grid-cols-1 gap-5 overflow-y-hidden">
          {menu.map((item, index) => (
          <Card key={index} className="p-4">{item.logo}</Card>
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
