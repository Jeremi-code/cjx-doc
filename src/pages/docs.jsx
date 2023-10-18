import DocBody from "../component/DocBody";
import { GlobalProvider } from "../store/store";
import Default from "../layout/Default";
import LeftSidebar from "../component/LeftSidebar";
import RightSidebar from "../component/RightSidebar";

export default function () {

  return (
    <div className="bg-bodyGradient h-screen relative">
      <Default>
        <GlobalProvider>
          <div className="grid grid-cols-6 h-full w-full absolute pt-28 px-28">
            <div className="flex flex-col border-r border-custom-white overflow-y-auto">
              <LeftSidebar />
            </div>
            <div className="flex flex-col border-r border-custom-white col-span-4">
              <DocBody />
            </div>
            <div className="text-white flex flex-col items-center">
              <RightSidebar/>
            </div>
          </div>
        </GlobalProvider>
      </Default>
    </div>
  );
}
