const StepTwo = ({ data, onChange, onNext, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-6">
        Step 2: Business Details
      </h3>

      {/* Business Name */}
      <div className="mb-4">
        <input
          name="businessName"
          placeholder="Business Name"
          value={data.businessName}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <textarea
          name="businessAddress"
          placeholder="Business Address"
          value={data.businessAddress}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />

        <textarea
          name="pickupAddress"
          placeholder="Pickup Address"
          value={data.pickupAddress}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />
      </div>

      {/* Pincode */}
      <div className="mb-6">
        <input
          name="pincode"
          placeholder="Pincode"
          value={data.pincode}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4">
        <button
          onClick={onBack}
          className="w-1/2 border border-gray-400 p-3 rounded font-semibold hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={onNext}
          className="w-1/2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white p-3 rounded font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
