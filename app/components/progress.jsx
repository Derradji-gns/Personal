import React from "react";

const ProgressBar3 = () => {
  return (
    <div className="  mt-7 w-full px-4 lg:w-5/12">
      {/* 50% */}
      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold  z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">HTML & CSS</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] rounded-2xl mr-auto ml-auto">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            90%
          </div>
        </div>
      </div>

      {/* 75% */}
      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">Javascript</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] mr-auto ml-auto rounded-2xl ">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[65%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            65%
          </div>
        </div>
      </div>

      {/* 90% */}
      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">React.js</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] mr-auto ml-auto rounded-2xl">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            80%
          </div>
        </div>
      </div>
    
    <div className=" mt-9 ">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">Tailwind CSS</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] mr-auto ml-auto rounded-2xl">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            80%
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">Git & Github</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] mr-auto ml-auto rounded-2xl">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            70%
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">Firebase</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] mr-auto ml-auto rounded-2xl">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            70%
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h4 className=" pb-5 relative text-bold z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-sm  font-bold text-transparent text-left pl-7">Animation Tools</h4>
        <div className="bg-gray-300 relative h-4 w-[95%] ml-auto mr-auto  rounded-2xl">
          <div className="bg-blue-800 absolute top-0 left-0 flex h-full w-[85%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
            85%
          </div>
        </div>
      </div>
      </div>
  );
};

export default ProgressBar3;
