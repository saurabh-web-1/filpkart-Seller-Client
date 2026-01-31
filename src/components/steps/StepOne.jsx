import { useAppSelector } from "../../redux/hooks";

const StepOne = ({ data, onChange, onNext }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
   <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
  {/* Step Title */}
  <h3 className="text-lg font-semibold mb-6">
    Step 1: Basic Seller Details
  </h3>

  {/* Name Row */}
  <div className="grid grid-cols-2 gap-4 mb-4">
    <input
      name="firstName"
      placeholder="First Name"
      value={data.firstName || user?.name || ""}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />

    <input
      name="lastName"
      placeholder="Last Name"
      value={data.lastName}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />
  </div>

  {/* Display + Phone */}
  <div className="grid grid-cols-2 gap-4 mb-4">
    <input
      name="displayName"
      placeholder="Display Name"
      value={data.displayName}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />

    <input
      name="phone"
      placeholder="Phone Number"
      value={data.phone}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />
  </div>

  {/* Email + Password */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    <input
      name="email"
      placeholder="Email"
      value={data.email || user?.email || ""}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={data.password}
      onChange={onChange}
      className="border p-3 rounded w-full"
    />
  </div>

  {/* Continue Button */}
  <button
    onClick={onNext}
    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700  text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
  >
    Continue
  </button>
</div>

  );
};

export default StepOne;
