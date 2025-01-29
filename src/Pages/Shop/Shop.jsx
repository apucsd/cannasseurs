import { useParams } from "react-router";
import TitleBg from "../../Components/ui/TitleBg";
import thcaFImg from "../../assets/aboutUsImg.png";
import productImg1 from "../../assets/Frame 1707481877 (3).png";
import { CiHeart } from "react-icons/ci";
import { Button } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ProductCard from "../../Components/ui/ProductCard";
import { Helmet } from "react-helmet-async";

const products = [
  {
    id: 1,
    image: productImg1,
    label: "WHOLESALE",
    title: "Bubba Kush",
    description: "THCA Flower Pounds Indica | 22.70% THCa | HP, LB",
    price: "$750 - $1000",
  },
  {
    id: 2,
    image: productImg1,
    label: "PREMIUM",
    title: "Pineapple Express",
    description: "Sativa | 18.90% THCa | HP, LB",
    price: "$650 - $900",
  },
  {
    id: 3,
    image: productImg1,
    label: "WHOLESALE",
    title: "OG Kush",
    description: "Hybrid | 20.50% THCa | HP, LB",
    price: "$800 - $1100",
  },
  {
    id: 4,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
  {
    id: 5,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
  {
    id: 6,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
];

const Shop = () => {
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState(id);
  const [swiperRef, setSwiperRef] = useState(null);

  console.log(categoryId);

  return (
    <>
      <Helmet>
        <title>Shop - Doublet24</title>
      </Helmet>
      <TitleBg title="THCA Flower" />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
        <div className="md:flex  max-w-7xl mx-auto items-center md:py-24 p-8 md:px-32 justify-center gap-5">
          <img className="w-[400px] md:h-[300px]" src={thcaFImg} alt="" />
          <div>
            <h1 className="md:text-4xl text-2xl mt-5 font-bold mb-3 md:mb-5">
              THCA <span className="text-[#00863D]">Flower</span>
            </h1>
            <p className="text-lg">
              Explore the finest selection of premium THCA flower strains,
              expertly cultivated for exceptional quality and maximum potency.
              Whether you’re an enthusiast or a business owner, our THCA flower
              offers a superior experience while staying fully compliant with
              legal standards. Choose from ounces, quarter pounds, or wholesale
              bulk options tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="py-14  max-w-[1600px] mx-auto">
          {/* category 1 */}
          <div className="md:px-20 px-8 bg-white">
            <h1 className="md:text-4xl clash text-2xl border-b-4 md:w-[32%] pb-3 border-[#00863D] font-semibold">
              <span className="text-[#00863D]">Premium</span> THCA Flower
            </h1>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    image={product?.image}
                    label={product?.label}
                    title={product?.title}
                    description={product?.description}
                    price={product?.price}
                    categoryId={categoryId}
                    productId={product?.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* category 2 */}

          <div className="md:px-20 px-8 bg-white">
            <h1 className="md:text-4xl clash text-2xl border-b-4 md:w-[28%] w-[75%] pb-3 border-[#00863D] font-semibold">
              TCHA <span className="text-[#00863D]">Flower Smalls</span>
            </h1>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    image={product?.image}
                    label={product?.label}
                    title={product?.title}
                    description={product?.description}
                    price={product?.price}
                    categoryId={categoryId}
                    productId={product?.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* category 3 */}

          <div className="md:px-20 px-8 bg-white">
            <h1 className="md:text-4xl text-2xl clash border-b-4 md:w-[30%] w-[75%] pb-3 border-[#00863D] font-semibold">
              Pre <span className="text-[#00863D]">Packaged Flower</span>
            </h1>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    image={product?.image}
                    label={product?.label}
                    title={product?.title}
                    description={product?.description}
                    price={product?.price}
                    categoryId={categoryId}
                    productId={product?.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
