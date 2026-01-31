const StepThree = ({ data, onChange, onBack, onSubmit }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-6">
        Step 3: Banking & Tax Details
      </h3>

      {/* PAN & GST */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          name="pan"
          placeholder="PAN Number"
          value={data.pan}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />

        <input
          name="gst"
          placeholder="GST Number"
          value={data.gst}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />
      </div>

      {/* Bank Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          name="bankAccount"
          placeholder="Bank Account Number"
          value={data.bankAccount}
          onChange={onChange}
          className="border p-3 rounded w-full"
        />

        <input
          name="ifsc"
          placeholder="IFSC Code"
          value={data.ifsc}
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
          onClick={onSubmit}
          className="w-1/2 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white  p-3 rounded font-semibold hover:bg-green-700"
        >
          Create Seller
        </button>
      </div>
    </div>
  );
};

export default StepThree;
