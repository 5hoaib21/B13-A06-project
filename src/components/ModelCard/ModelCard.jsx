import React from 'react';
import { useState } from 'react';
import { TiTick } from "react-icons/ti";

const ModelCard = ({model, carts, setCarts}) => {
  const [isBought,  setIsBought] = useState(false)


  const handleBuyNow = () => {
    setIsBought(true);
    setCarts([  ...carts, model])
  }


  return (
     <div
            className="shadow-xl p-5 rounded-2xl border border-gray-300"
            key={model.id}
          >
            <div className="space-y-3">
              {/* img and badge div */}
              <div className="flex justify-between relative">
                <img
                  className="h-10 w-10 p-2 m-2 object-contain bg-gray-100"
                  src={model.image}
                  alt=""
                />
                <p
                  className={
                    `absolute  -top-4 right-0 ${model.tag === "popular" && "badge badge-soft badge-primary"}
                    ${model.tag === "new" && "badge badge-soft badge-accent"}
                    ${model.tag === "best seller" && "badge badge-soft badge-warning"} `}
                >
                  {model.tag}
                </p>
              </div>
              {/* name & description div */}
              <div>
                <h3 className="text-2xl font-semibold">{model.name}</h3>
                <p className="text-sm mt-2 text-accent">{model.description}</p>
              </div>
              <div>
                <p>
                  <span className="font-bold">${model.price.toFixed(2)}</span>/
                  {model.period}
                </p>
              </div>
              <div className="text-gray-500">
                <p className="flex items-center gap-1">
                  <TiTick />
                  {model.featuresOne}
                </p>
                <p className="flex items-center gap-1">
                  <TiTick />
                  {model.featuresTwo}
                </p>
                <p className="flex items-center gap-1">
                  <TiTick />
                  {model.featuresThree}
                </p>
                <p className="flex items-center gap-1">
                  <TiTick />
                  {model.featuresFour}
                </p>
              </div>
              <button onClick={()=> handleBuyNow()} className={`
              btn ${isBought ? "btn-active btn-success" : "btn-primary"} w-full rounded-2xl`}>
                {isBought ? "Added to Cart" : "Buy Now"}
              </button>
            </div>
          </div>
  );
};

export default ModelCard;