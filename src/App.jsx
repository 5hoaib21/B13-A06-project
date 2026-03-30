import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import Navbar from "./components/Navbar/Navbar";

const getModels = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const modelPromise = getModels();

function App() {

  

  return (
    <>
      <Navbar />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Cart "
          
        />
      </div>

      <Models modelPromise={modelPromise} />
      <Cart />

      <Footer />
    </>
  );
}

export default App;
