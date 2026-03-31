import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="getStartedContainer container mx-auto ">
      <div className="getStartedContent space-y-8 py-10">
       <div className="flex flex-col items-center justify-center text-center"> <h1 className="text-4xl font-bold  mb-5">Get Started with Digitools</h1>
        <p className="text-zinc-500 ">
          Ready to get started? Follow these simple steps to begin your journey
          with our platform.
        </p></div>

        <div className="cardContainer grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
          <div className="relative  border border-gray-300 shadow-lg rounded-lg p-10  m-2 text-center items-center justify-center space-y-4">
           <div  className="absolute top-2 right-2 bg-blue-500 text-white font-bold
            h-6 w-6 rounded-full flex items-center justify-center mx-auto mb-4">
             <p>01</p>
           </div>
            <div className="flex justify-center mb-4 ">
              {" "}
              <img className="" src={userImg} alt="User" />
            </div>
            <h2 className="font-bold text-lg">Create Account</h2>
            <p className="text-zinc-500">
              Sign up for free in seconds. No credit card required to get
              started..
            </p>
          </div>
          <div className="relative  border border-gray-300 shadow-lg rounded-lg p-10  m-2 text-center items-center justify-center space-y-4">
           <div  className="absolute top-2 right-2 bg-blue-500 text-white font-bold
            h-6 w-6 rounded-full flex items-center justify-center mx-auto mb-4">
             <p>02</p>
           </div>
            <div className="flex justify-center mb-4 ">
              {" "}
              <img className="" src={packageImg} alt="User" />
            </div>
            <h2 className="font-bold text-lg">Choose Products</h2>
            <p className="text-zinc-500">
             Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
          <div className="relative  border border-gray-300 shadow-lg rounded-lg p-10  m-2 text-center items-center justify-center space-y-4">
           <div  className="absolute top-2 right-2 bg-blue-500 text-white font-bold
            h-6 w-6 rounded-full flex items-center justify-center mx-auto mb-4">
             <p>03</p>
           </div>
            <div className="flex justify-center mb-4 ">
              {" "}
              <img className="" src={rocketImg} alt="User" />
            </div>
            <h2 className="font-bold text-lg">Start Creating</h2>
            <p className="text-zinc-500">
            Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
