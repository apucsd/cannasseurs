import { Link } from "react-router";
import secImg from "../../assets/aboutUsImg.png";
import { Button } from "antd";
import buttonLogo from "../../assets/Frame 1000011842.png";

const AboutUsSection = () => {
  return (
    <div className="relative p-6 md:p-28">
      <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>

      <div className="md:flex max-w-6xl mx-auto items-center justify-center gap-5 relative">
        <img
          className="md:w-[450px] md:h-[300px] shadow-xl"
          src={secImg}
          alt=""
        />
        <div>
          <h1 className="md:text-3xl text-2xl mb-3 clash mt-5 text-center md:text-left font-bold">
            <span className="text-[#00863D]">About</span> Us
          </h1>
          <p className="text-lg text-justify">
            We are a leading supplier of high-quality THCA hemp flower,
            specializing in wholesale distribution for retailers and businesses.
            We only offer pounds and packaged eighths, ensuring the best quality
            and value. Our mission is to provide businesses with top-tier
            products at competitive prices, backed by reliable service and fast
            delivery. Whether you’re looking to stock up on bulk THCA flower or
            explore white-label opportunities, we are committed to helping you
            grow your business with premium, legal THCA products.
          </p>
          <div className="md:my-5 my-2 w-full">
            <Link to={"/aboutUs"}>
              <Button className="bg-[#FFC313] w-full font-bold text-lg md:w-[35%] py-5 md:py-5 border-[#FFC313]">
                Learn More
                <span>
                  <img src={buttonLogo} alt="" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
