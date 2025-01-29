import { Button, Divider } from "antd";
import bannerBg from "../../assets/Background.png";
import buttonLogo from "../../assets/Frame 1000011842.png";
import bannerLogo from "../../assets/Group 24899.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative md:h-[700px]">
      <div>
        <img
          className="md:h-[700px] w-full object-cover"
          src={bannerBg}
          alt=""
        />
      </div>
      <div className="absolute top-0 md:pt-56 pt-6 bg-[#0c2919] bg-opacity-80 h-full w-full">
        <div className="text-center text-white">
          <h1
            className="md:text-6xl text-2xl clash
           text-[#FFC313]"
          >
            Premium Hemp Products
          </h1>
          <h1 className="md:text-6xl text-2xl clash mb-1 md:my-4">
            for a Healthier Lifestyle
          </h1>
          <p className="md:text-xl text-sm mx-auto font-fontThree w-[70%] md:w-[40%]">
            Explore our wide selection of high-quality bulk hemp flower,
            packaged products, and more. Experience the natural benefits of hemp
            today!
          </p>
          <div className="md:my-5 my-2">
            <Link to={"/shop/category/1"}>
              <Button className="bg-[#FFC313] text-lg md:py-6 border-[#FFC313] font-semibold">
                Shop Now
                <span>
                  <img src={buttonLogo} alt="" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute max-w-7xl mx-auto hidden md:visible top-0 right-20 pt-28 text-white md:flex flex-col gap-10  items-center justify-center">
        <img className="w-32 h-32" src={bannerLogo} alt="" />
        <p className="transform rotate-90 origin-center">Follow Us</p>
        <Divider type="vertical" className="h-16 bg-white" />
        <div className="flex flex-col gap-1">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
