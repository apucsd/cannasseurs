import { Button } from "antd";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({
  image,
  label,
  title,
  description,
  price,
  categoryId,
  productId,
  favoriteTrue,
}) => {
  const [isFavorite, setIsFavorite] = useState(favoriteTrue);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    toast.success(
      isFavorite ? "Removed from favorites!" : "Added to favorites!"
    );
  };

  return (
    <div className="border md:min-w-[300px] shadow-xl md:max-w-[600px] md:h-[455px] rounded-2xl md:m-10 m-5 p-3 flex items-start flex-col">
      <div className="relative w-full">
        <img className="w-full md:h-48 rounded-t-2xl" src={image} alt={title} />
        <button
          className="p-1 border absolute bg-[#e8f7ee] top-5 right-5 rounded-full z-10"
          onClick={handleFavorite}
        >
          <FaHeart size={20} color={isFavorite ? "red" : "#666666"} />
        </button>
      </div>
      <p className="bg-[#FFC313] px-2 py-1 text-sm mt-3 rounded-3xl w-[45%]">
        {label}
      </p>
      <h1 className="md:text-2xl text-lg font-semibold">{title}</h1>
      <p className="my-1 text-start text-lg line-clamp-1">{description}</p>
      <p className="text-2xl font-semibold">{price}</p>

      {/* Spacer to push the button to the bottom */}
      <div className="flex-grow"></div>
      <div className="w-full">
        <Link to={`/shop/category/${categoryId}/${productId}`}>
          <Button className="bg-[#00863D] w-full py-5 mb-1 rounded-xl font-bold text-white">
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
