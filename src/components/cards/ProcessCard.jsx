import React from "react";

const ProcessCard = ({ item }) => {
  return (
    <div className="w-full p-8">
      <div className="text-center">
        <div className="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-gray-100 rounded-full">
          <div className="font-bold text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {item?.step}
          </div>
        </div>
        <div className="md:max-w-xs mx-auto">
          <h3 className="mb-4 text-xl font-bold">{item?.title}</h3>
          <p className="text-sm text-zinc-500 leading-6">{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
