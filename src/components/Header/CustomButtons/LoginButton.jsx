import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const LoginButton = ({ mobile }) => {
  return (
    <Link
      to="/login"
      className={`
        inline-flex items-center gap-2 font-semibold
        ${mobile
          ? "text-[#2874f0] py-2"
          : "bg-white text-[#2874f0] px-4 py-1.5 rounded"
        }
        hover:opacity-90
      `}
    >
      <LogIn size={16} />
      Login
    </Link>
  );
};

export default LoginButton;
