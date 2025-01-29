import { FaUsers } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
import { GrUserNew } from "react-icons/gr";
import { GiRadioactive } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";

const GeneralStateSection = () => {
  // Simulated dummy data
  const generalState = {
    data: {
      totalActiveUsers: 1500,
      newSignups: 120,
      totalActiveVendors: 45,
      totalCompletedOrders: 320,
      totalServices: 75,
    },
  };

  const isLoading = false; // Simulated loading state

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const state = generalState?.data;

  return (
    <div className="grid md:grid-cols-5 gap-6 md:h-[80px]">
      <div className="bg-white rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#d8f5d9] flex items-center justify-center">
          <FaUsers color="#173616" size={24} />
        </div>
        <div className="flex flex-col py-1 items-start">
          <h2 className="text-center text-base">Total User</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalActiveUsers}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#d8f5d9] flex items-center justify-center">
          <GrUserNew color="#173616" size={24} />
        </div>
        <div className="flex flex-col py-1 items-start">
          <h2 className="text-center text-base">New Sign Ups</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.newSignups}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#d8f5d9] flex items-center justify-center">
          <GiRadioactive color="#173616" size={24} />
        </div>
        <div className="flex flex-col py-1 items-start">
          <h2 className="text-center text-base">Active Buyers</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalActiveVendors}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#d8f5d9] flex items-center justify-center">
          <IoCheckmarkDoneCircle color="#173616" size={24} />
        </div>
        <div className="flex flex-col py-1 items-start">
          <h2 className="text-center text-base">Completed Orders</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalCompletedOrders}
          </h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full bg-[#d8f5d9] flex items-center justify-center">
          <AiFillProduct color="#173616" size={24} />
        </div>
        <div className="flex flex-col py-1 items-start">
          <h2 className="text-center text-base">Total Product</h2>
          <h3 className="text-center text-2xl font-semibold">
            {state?.totalServices}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralStateSection;
