import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartButton = ({ mobile }) => {
  return (
    <Link
      to="/cart"
      className={`flex items-center gap-2 ${
        mobile ? "text-black" : "text-white"
      }`}
    >
      <ShoppingCart size={18} />
      Cart
    </Link>
  );
};

export default CartButton;
