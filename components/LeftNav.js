import { AiFillHome } from "react-icons/ai";
import { TbLetterS } from "react-icons/tb";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
function LeftNav() {
  return (
    <div className="h-screen fixed top-20 left-0 my-12 flex flex-col gap-10 cursor-pointer ml-3 ">
      <div className="flex flex-col  items-center">
        <AiFillHome size={25} />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex flex-col  items-center">
        <TbLetterS size={25} />
        <p className="text-sm">Shorts</p>
      </div>
      <div className="flex flex-col  items-center">
        <MdOutlineVideoLibrary size={25} />
        <p className="text-sm">Subscriptions</p>
      </div>
      <div className="flex flex-col  items-center">
        <MdSubscriptions size={25} />
        <p className="text-sm">Lirary</p>
      </div>
    </div>
  );
}

export default LeftNav;
