import React, { use } from "react";


import ModelCard from "../ModelCard/ModelCard";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);

  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="py-10 grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
         <ModelCard model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
