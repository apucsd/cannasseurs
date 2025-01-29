import TitleBg from "../Components/ui/TitleBg";
import aboutUsImg1 from "../assets/Frame 1000011859.png";
import aboutUsImg2 from "../assets/Frame 1000011859 (1).png";
import aboutUsImg3 from "../assets/Frame 1707481807.png";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Doublet24</title>
      </Helmet>
      <TitleBg title="About Us" />
      <div className=" font-fontTwo">
        <div className="md:px-20 px-7 ">
          <div className="md:flex items-center max-w-7xl mx-auto justify-center gap-10 py-20">
            <div className="text-justify md:text-start">
              <h1 className="text-4xl font-bold clash">
                <span className="text-[#00863D] font-semibold">About</span> Us
              </h1>
              <p className="my-5 text-lg">
                Welcome to The Cannasseurs Club, your trusted destination for
                premium THCA packaged products. We specialize in delivering
                high-quality cannabis flower and accessories, all crafted to
                meet strict legal standards and exceed expectations in both
                quality and value
              </p>
              <p className="text-lg">
                At The Cannasseurs Club, we prioritize transparency, offering
                lab-tested products that guarantee safety and satisfaction. Our
                curated selection includes premium strains and wholesale options
                tailored to meet your needs. Join us in experiencing the best
                the industry has to offer—crafted for quality, delivered with
                care."
              </p>
            </div>
            <img
              className="w-[450px] md:h-[350px] shadow-xl"
              src={aboutUsImg1}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
            <div className="md:px-20 px-7 max-w-7xl mx-auto space-y-3 md:flex items-center justify-center gap-10 ">
              <img
                className="w-[450px] md:h-[350px] shadow-xl"
                src={aboutUsImg2}
                alt=""
              />
              <div className="text-justify md:text-left">
                <h1 className="text-4xl clash font-bold">
                  What{" "}
                  <span className="text-[#00863D] font-semibold">
                    We Offer?
                  </span>
                </h1>
                <p className="my-5 text-lg">
                  Welcome to The Cannabis Club, your trusted destination for
                  premium THCA products. We specialize in delivering
                  high-quality cannabis flower and accessories for enthusiasts
                  and businesses alike. Whether you're shopping for bulk orders
                  or personal use, we ensure every product meets strict legal
                  standards and exceeds your expectations in quality and
                  potency.
                </p>
                <p className="text-lg">
                  At The Cannabis Club, we prioritize transparency, offering
                  lab-tested products that guarantee safety and satisfaction.
                  Our curated selection includes premium strains, ounces, and
                  wholesale options tailored to meet your needs. Join us in
                  experiencing the best the industry has to offer—crafted for
                  quality, delivered with care.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-20 px-7">
          <div className="md:flex max-w-7xl mx-auto items-center justify-center gap-10 py-20">
            <div>
              <h1 className="text-4xl clash font-bold">
                Why You{" "}
                <span className="text-[#00863D] font-semibold">Choose Us?</span>
              </h1>
              <p className="my-5 text-lg">
                Welcome to The Cannabis Club, your trusted destination for
                premium THCA products. We specialize in delivering high-quality
                cannabis flower and accessories for enthusiasts and businesses
                alike. Whether you're shopping for bulk orders or personal use,
                we ensure every product meets strict legal standards and exceeds
                your expectations in quality and potency.
              </p>
              <p className="text-lg">
                At The Cannabis Club, we prioritize transparency, offering
                lab-tested products that guarantee safety and satisfaction. Our
                curated selection includes premium strains, ounces, and
                wholesale options tailored to meet your needs. Join us in
                experiencing the best the industry has to offer—crafted for
                quality, delivered with care.
              </p>
            </div>
            <img
              className="w-[450px] md:h-[350px] shadow-xl"
              src={aboutUsImg3}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
