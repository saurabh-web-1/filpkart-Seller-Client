import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import SearchBar from "./CustomButtons/SearchBar";
import LoginButton from "./CustomButtons/LoginButton";
import UserMenu from "./CustomButtons/UserMenu";
import CartButton from "./CustomButtons/CartButton";
import SellerButton from "./CustomButtons/SellerButton";
import MoreMenu from "./CustomButtons/MoreMenu";

import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white shadow-md
      bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">

        {/* Logo */}
        <Link to="/" className="font-bold italic text-xl leading-4">
          Savanna
          <span className="block text-xs text-yellow-300 not-italic">
            Explore Plus
          </span>
        </Link>

        {/* Search (desktop only) */}
        {/* <div className="hidden md:block flex-1">
          <SearchBar />
        </div>

        Desktop Menu
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {!isAuthenticated ? <LoginButton /> : <UserMenu user={user} />}
          <SellerButton />
          
          <CartButton />
          <MoreMenu />
        </div> */}

        {/* Mobile Hamburger */}
        {/* <button
          className="ml-auto md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
       */}
        </div>
      {/* Mobile Menu
      {open && (
        <div className="md:hidden bg-white text-black px-4 pb-4 space-y-4">
          <SearchBar />

          {!isAuthenticated ? <LoginButton mobile /> : <UserMenu user={user} mobile />}

          <SellerButton mobile />
          <CartButton mobile />
          <MoreMenu mobile />
        </div>
      )} */}
    </header>
  );
};

export default Header;
