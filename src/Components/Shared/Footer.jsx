import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/footerLogoWhite.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { Button, Input } from "antd";

const Footer = () => {
  return (
    <div className=" bg-[#173616]">
      <div className="md:h-[350px] md:pt-28 pt-10 text-white max-w-7xl mx-auto">
        <div className="md:flex md:px-20 px-10 items-start justify-center gap-9">
          <div>
            <img className="mb-5" src={logo} alt="logo" />
            <p className="md:w-[400px]">
              Premium wholesale provider of THCA hemp flower. Quality you can
              trust, prices you&apos;ll love
            </p>
            <div className="flex items-center justify-start my-5 gap-5">
              <div className="border border-white p-2 rounded-md">
                <FaFacebookF />
              </div>
              <div className="border border-white p-2 rounded-md">
                <FaXTwitter />
              </div>
              <div className="border border-white p-2 rounded-md">
                <FaInstagram />
              </div>
              <div className="border  border-white p-2 rounded-md">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold my-5">Useful Link</h1>
            <ul className="text-gray-300 space-y-3">
              <li className="font-bold">
                <Link to={"/auth/login"}>Admin Login</Link>
              </li>
              <li>
                <Link to={"/aboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/f-a-q"}>Faqs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold my-5">Categories</h1>
            <ul className="text-gray-300  space-y-3">
              <li>
                <Link>THCA Flower Wholesale</Link>
              </li>
              <li>
                <Link>THCA Flower Ounces</Link>
              </li>
              <li>
                <Link>White Label THCA</Link>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg max-w-sm mx-auto">
            <h1 className="font-semibold text-xl mb-2">Stay Update</h1>
            <p className="text-gray-300 mb-4">Get real time Update from us.</p>
            <div className="flex items-center rounded-lg overflow-hidden border border-gray-500 bg-[#002A12]">
              <Input
                placeholder="Email"
                className="border-none focus:outline-none bg-white placeholder:text-gray-400 bg-transparent"
                style={{ boxShadow: "none", border: "none" }}
              />
              <Button
                type="primary"
                className="bg-[#5BBE6A] text-white font-semibold hover:bg-[#4CA95B]"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  border: "none",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-5 bg-[#173616] text-gray-400 border-t-2 border-gray-700 items-end justify-center">
        <p>All right reserved The Cannabis Club © 2024</p>
      </div>{" "}
    </div>
  );
};

export default Footer;
