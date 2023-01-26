import { IoMdArrowDropdown } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="h-24 border-b-2 font-main">
      <div className="flex flex-row p-6 lg:items-center xl:pl-14">
        <button>
          <svg
            role="img"
            aria-labelledby="logo"
            className="h-12 w-20"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="21"
            viewBox="0 0 45 21"
          >
            <title id="logo">Ableton Homepage</title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
        </button>
        <div className="hidden flex-row gap-7 pl-14 text-lg font-extrabold lg:flex xl:gap-10 xl:text-2xl">
          <button>Live</button>
          <button>Push</button>
          <button>Note</button>
          <button>Link</button>
          <button>Shop</button>
          <button>Packs</button>
          <button>Help</button>
          <button className="flex items-center text-[#FF764D]">
            More <BsPlus className="text-4xl" />
          </button>
        </div>
        <div className="ml-auto hidden xl:flex">
          <button className="text-2xl font-semibold text-[blue]">
            Try Live for free
          </button>
          <button className="ml-10 mr-7 text-lg font-semibold">
            Log in or register
          </button>
        </div>
        <button className="flex items-center pl-10 text-2xl lg:hidden">
          Menu &nbsp;
          <IoMdArrowDropdown className="mt-1" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
