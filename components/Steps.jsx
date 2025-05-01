import { LucideClipboardList } from "lucide-react";
import { AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Steps = () => {
  return (
    <section className="mb-[75px]">
      <div className="container mx-auto">
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="h2 mb-4">How It Works</h2>
          <p className="mb-10 text-center">
            Please follow the procedure to make sure got response from us.
          </p>
          {/* steps */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-[50px] text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-blue-800 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                1
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <LucideClipboardList className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                List your Equipment
              </h2>
              <p className="mt-5">
                Make sure you already list the equipment, then send email to us
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-blue-800 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                2
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <AiOutlineMail className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Qoute will send
              </h2>
              <p className="mt-5">
                We will send the price as your equipment list
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-blue-800 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                3
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <VscTools className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Start Calibration
              </h2>
              <p className="mt-5">Proceed to Calibration Tool until finish</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-blue-800 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                4
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <TbTruckDelivery className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Deliver to Customer
              </h2>
              <p className="mt-5">
                We will send the equipment and certificate to your place
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
