import { useState } from "react";
import Header from "@/components/header";
import SideNav from "@/components/side-nav";
import IconController from "@/components/icon-controller";
import BackgroundController from "@/components/background-controller";
import LogoPreview from "@/components/logo-preview";
import { UpdateStorageContext } from "./context/update-storage-context";
import "./index.css";

function App() {
  const [selectedIndex, setSelectIndex] = useState<number>(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownLoadIcon] = useState<any>();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header setDownLoadIcon={setDownLoadIcon}></Header>
        <div className="w-64 fixed">
          <SideNav
            selectedIndex={(value: number) => setSelectIndex(value)}
          ></SideNav>
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed ">
          {(selectedIndex === 0 || selectedIndex === 1) && (
            <>
              <div className=" col-span-1 md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
                {selectedIndex === 0 && <IconController />}
                {selectedIndex === 1 && <BackgroundController />}
              </div>
              <div className="col-span-1 md:col-span-4 flex items-center justify-center">
                {(selectedIndex === 0 || selectedIndex === 1) && (
                  <LogoPreview downloadIcon={downloadIcon} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
