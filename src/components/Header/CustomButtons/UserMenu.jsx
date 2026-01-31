import {
  User,
  Heart,
  Gift,
  Bell,
  LogOut,
  Star,
  Wallet,
} from "lucide-react";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/slices/authSlice";

const UserMenu = ({ user, mobile }) => {
  const dispatch = useAppDispatch();

  // 🔥 SAFETY GUARD (NO CRASH)
  if (!user) {
    return null; // ya loader / skeleton bhi dikha sakte ho
  }

  if (mobile) {
    return (
      <button
        onClick={() => dispatch(logout())}
        className="flex items-center gap-2 text-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>
    );
  }

  return (
    <div className="relative group">
      {/* 🔥 SAFE ACCESS */}
      <button className="font-semibold">
        {user?.name || "User"}
      </button>

      <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow hidden group-hover:block">
        <ul className="text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <User size={16} /> My Profile
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <Wallet size={16} /> SuperCoin Zone
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <Star size={16} /> Flipkart Plus
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <Heart size={16} /> Wishlist
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <Gift size={16} /> Gift Cards
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex gap-2">
            <Bell size={16} /> Notifications
          </li>
          <li
            onClick={() => dispatch(logout())}
            className="px-4 py-2 hover:bg-gray-100 flex gap-2 text-red-600 cursor-pointer"
          >
            <LogOut size={16} /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
