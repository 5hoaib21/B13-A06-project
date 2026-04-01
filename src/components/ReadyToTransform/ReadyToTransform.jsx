import React from 'react';

const ReadyToTransform = () => {
  return (
  <div className="bg-[#4F39F6] mb-0 mt-18 text-center py-12 sm:py-16 lg:py-20 text-white">
  <div className="space-y-5 max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">
    
    <!-- Heading -->
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
      Ready to Transform Your Workflow?
    </h1>

    <!-- Paragraph -->
    <p className="text-zinc-300 text-sm sm:text-base lg:text-lg">
      Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
    </p>

    <!-- Buttons -->
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-4">
      <button className="bg-white text-[#4F39F6] px-6 py-2 rounded-full font-semibold w-full sm:w-auto">
        Explore Products
      </button>
      <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-semibold w-full sm:w-auto">
        View Pricing
      </button>
    </div>

    <!-- Footer text -->
    <p className="text-zinc-300 text-xs sm:text-sm lg:text-base mt-4">
      14-day free trial • No credit card required • Cancel anytime
    </p>

  </div>
</div>
  );
};

export default ReadyToTransform;