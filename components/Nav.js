import { AiOutlineMenu } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill, BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";

function Nav() {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <div className="flex w-full h-10 items-center justify-between mt-6 ml-5 cursor-pointer">
      <div
        className={
          !search ? "flex flex-row gap-7 ml-5 py-5 items-center" : "hidden"
        }
      >
        <AiOutlineMenu size={25} />
        <div className="flex items-center gap-1">
          <AiFillYoutube size={35} color="red" />
          <p className=" text-2xl">Youtube</p>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center w-full ">
        <div
          className={search ? "flex  ml-10 sm:ml-24 " : "hidden sm:flex ml-0"}
        >
          <input
            className="rounded-full w-96 p-3 mt-2 border-2 border-gray-500"
            type="text"
            placeholder="Search"
          />
        </div>

        <div onClick={handleSearch}>
          <AiOutlineSearch size={25} />
        </div>

        <div className="hidden sm:flex">
          <BsFillMicFill size={23} />
        </div>
      </div>

      <div className="flex items-center gap-7 mr-10">
        <div>
          <AiFillVideoCamera size={25} />
        </div>
        <div>
          <IoIosNotifications size={25} />
        </div>
        <div>
          <BsFillPersonLinesFill size={25} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
