import { Button } from "@heroui/react";
import { IoSunny } from "react-icons/io5";
import { PiMoonFill } from "react-icons/pi";
import { Switch } from "@heroui/switch";
import { MdLogout } from "react-icons/md";

const TopBar = ({ title, isDark }) => {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-10 bg-[#F8F9FA]">
      
      <h2 className="font-bold text-2xl text-[#344767]">
        Dashboard Attendance
      </h2>
      
      <div className="flex justify-end items-center gap-5">
        <Button variant="bordered">--All Organization--</Button>
        <div className="flex gap-2">
          <IoSunny size={30} />
          <Switch />
          <PiMoonFill size={30} />
        </div>
        <MdLogout size={30} />
      </div>
    </div>
  );
};

export default TopBar;
