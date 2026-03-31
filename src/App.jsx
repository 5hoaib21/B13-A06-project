import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import Navbar from "./components/Navbar/Navbar";
import GetStarted from "./components/GetStarted/GetStarted";

const getModels = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const modelPromise = getModels();

function App() {

  const [switchTab, setSwitchTab] = useState("products");
const [carts, setCarts] = useState([])



  return (
    <>
      <Navbar carts={carts} />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Products"
          onClick={()=> setSwitchTab('products')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label={`Cart (${carts.length})`}
          onClick={()=> setSwitchTab('cart')}
        />
      </div>

      {switchTab === 'products' && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {switchTab === 'cart' && <Cart  carts={carts} 
      setCarts={setCarts}
      />}
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
