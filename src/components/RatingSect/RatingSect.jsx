import React from 'react';

const RatingSect = () => {
  return (
    <div className='bg-blue-700 mb-20'>
      <div className='container mx-auto py-20 px-10'>
      <div className='ratingContainer flex flex-col md:flex-row items-center justify-around gap-10'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-white'>50k+</h1>
      <p className='text-zinc-300'>Active Users</p>
    </div>
     <div className=" divider divider-horizontal text-zinc-300"></div>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-white'>200k+</h1>
      <p className='text-zinc-300'>Premium Tools</p>
    </div>
     <div className=" divider divider-horizontal text-zinc-300"></div>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-white'>4.9</h1>
      <p className='text-zinc-300'>Customer Rating</p>
    </div>
      </div>
    </div>
    </div>
  );
};

export default RatingSect;