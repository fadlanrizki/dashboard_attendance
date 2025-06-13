import SideBar from "../../components/common/SideBar";
import TopBar from "../../components/common/TopBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/12">
        <SideBar />
      </div>
      <div className="w-full h-screen flex flex-col">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
