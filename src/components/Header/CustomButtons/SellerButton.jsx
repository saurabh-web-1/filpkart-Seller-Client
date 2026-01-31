import { Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const SellerButton = ({ mobile }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleClick = () => {
    console.log("👉 SellerButton clicked");
    console.log("👉 isAuthenticated =", isAuthenticated);

    if (isAuthenticated) {
      console.log("✅ User already logged in → /seller/login");
      navigate("/seller/login");
    } else {
      console.log("❌ User NOT logged in");
      console.log("➡️ Redirecting to /login?redirect=/seller/login");
      navigate("/login?redirect=/seller/login");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        flex items-center gap-2 cursor-pointer
        ${mobile ? "text-black py-2" : "text-white"}
        hover:opacity-90
      `}
    >
      <Store size={18} />
      <span>Become a Seller</span>
    </button>
  );
};

export default SellerButton;
