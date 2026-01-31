import { MoreVertical } from "lucide-react";

const MoreMenu = ({ mobile }) => {
  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        <MoreVertical size={18} />
        More
      </div>
    );
  }

  return (
    <div className="relative group">
      <MoreVertical size={18} />
      <div className="absolute right-0 mt-2 bg-white text-black rounded shadow hidden group-hover:block w-40">
        <p className="px-4 py-2 hover:bg-gray-100">Customer Care</p>
        <p className="px-4 py-2 hover:bg-gray-100">Advertise</p>
      </div>
    </div>
  );
};

export default MoreMenu;
