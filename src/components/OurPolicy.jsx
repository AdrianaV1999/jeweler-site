import React from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <ArrowsRightLeftIcon className="w-12 m-auto mb-5 text-gray-800" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer free exchange policy</p>
      </div>
      <div>
        <ShieldCheckIcon className="w-12 m-auto mb-5 text-gray-800" />
        <p className="font-semibold">14 Days Return Policy</p>
        <p className="text-gray-400">We provide 14 days free return policy</p>
      </div>
      <div>
        <PhoneArrowUpRightIcon className="w-12 m-auto mb-5 text-gray-800" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
