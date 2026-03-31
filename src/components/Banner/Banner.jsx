import { CiPlay1 } from "react-icons/ci";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
   <div className="p-10">
     <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="badge badge-soft badge-info text-sm font-medium">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl  lg:text-5xl font-extrabold leading-tight tracking-tighter text-black">
            Supercharge Your <br /> Digital Work flow
          </h1>

          <p className="text-lg text-accent max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary rounded-full">
              {" "}
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full group flex items-center gap-2">
              <span className="group-hover:translate-x-1 transition">
                <CiPlay1 />
              </span>
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Banner;
