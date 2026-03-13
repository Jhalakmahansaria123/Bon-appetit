import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/bon_apetite.svg";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 relative  overflow-visible">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link
          to="/"
          className="relative z-20">
            <img
              src={logo}
               alt="Bon Appetit Logo"
              className=" h-20 sm:h-24 md:h-32 lg:h-36 
                -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10
              w-auto object-contain"
            />
        
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
