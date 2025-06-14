import SideBar from "../../components/common/SideBar";
import TopBar from "../../components/common/TopBar";
import { IoChevronDown } from "react-icons/io5";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/12">
        <SideBar />
      </div>
      <div className="relative">
        <div className="absolute ml-[-20px] mt-[20px]">
          <div className="p-2 rounded-full bg-slate-500 border-3 border-white cursor-pointer">
            <IoChevronDown fontSize={20} color="#fff" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
