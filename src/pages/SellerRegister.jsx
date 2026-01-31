import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import StepOne from "../components/steps/StepOne";
import StepTwo from "../components/steps/StepTwo";
import StepThree from "../components/steps/StepThree";

import {
  sellerRegister,
  sellerStep2,
  sellerStep3,
} from "../services/sellerApi";

const SellerRegister = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("sellerToken");
    if (token) {
      navigate("/seller/dashboard");
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    displayName: "",
    businessName: "",
    businessAddress: "",
    pickupAddress: "",
    pincode: "",
    pan: "",
    gst: "",
    bankAccount: "",
    ifsc: "",
  });

  const nextStep = () => setStep((p) => p + 1);
  const prevStep = () => setStep((p) => p - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* STEP 1 SUBMIT */
  const handleStep1 = async () => {
    try {
      await sellerRegister({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        displayName: formData.displayName,
      });

      nextStep();
    } catch (err) {
      if (err.response?.status === 409) {
        alert("Seller already exists. Please login.");
        navigate("/login");
        return;
      }

      alert(err.response?.data?.message || "Seller register failed");
    }
  };

  /* FINAL SUBMIT */
  const handleSubmit = async () => {
    try {
      await sellerStep2({
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
        pickupAddress: formData.pickupAddress,
        pincode: formData.pincode,
      });

      await sellerStep3({
        pan: formData.pan,
        gst: formData.gst,
        bankAccount: formData.bankAccount,
        ifsc: formData.ifsc,
      });

      navigate("/seller/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Onboarding failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-2xl bg-white p-8 mt-6 rounded-xl shadow-lg">

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Seller Registration
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Step {step} of 3 – Complete onboarding to start selling
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="h-2 rounded bg-gradient-to-r from-indigo-600 to-purple-600 transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {step === 1 && (
          <StepOne
            data={formData}
            onChange={handleChange}
            onNext={handleStep1}
          />
        )}

        {step === 2 && (
          <StepTwo
            data={formData}
            onChange={handleChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {step === 3 && (
          <StepThree
            data={formData}
            onChange={handleChange}
            onBack={prevStep}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default SellerRegister;
