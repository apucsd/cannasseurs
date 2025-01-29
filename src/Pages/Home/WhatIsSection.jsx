import { Button } from "antd";
import whatIsImg from "../../assets/whatIsImg.png";
import buttonLogo from "../../assets/Frame 1000011842.png";
import { Link } from "react-router";

const WhatIsSection = () => {
  return (
    <div className="relative md:p-16 p-8">
      <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
      <div className="md:flex max-w-7xl mx-auto py-20 md:px-16 gap-5 items-center justify-center relative">
        <img
          className="w-[500px] md:h-[320px] mb-5 md:mb-0 shadow-xl"
          src={whatIsImg}
          alt=""
        />
        <div>
          <h1 className="md:text-4xl md:text-start text-2xl text-center clash font-bold">
            What is <span className="text-[#00863D]">THCA?</span>
          </h1>
          <p className="my-5 text-lg text-justify">
            THCA stands for{" "}
            <span className="font-bold">Tetrahydrocannabinolic Acid</span>. It’s
            a compound found in raw cannabis that turns into THC when heated.
            Unlike THC, THCA doesn’t cause a “high.” It’s legal to buy because
            it has less than 0.3% Delta-9 THC, staying within legal limits. THCA
            is believed to have health benefits, such as reducing inflammation
            and protecting the nervous system.
          </p>
          <div className="md:my-5 my-2 w-full">
            <Link to={"/shop/category/1"}>
              <Button className="bg-[#FFC313] w-full md:w-[35%] text-lg py-5 md:py-5 border-[#FFC313] font-bold">
                Shop Now
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

export default WhatIsSection;
