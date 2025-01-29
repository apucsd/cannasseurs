import { Table } from "antd";
import { useState } from "react";
import TitleBg from "../Components/ui/TitleBg";
import productImg1 from "../assets/bubbaKush.png";
import productImg2 from "../assets/Frame 1000011859.png";
import productImg3 from "../assets/Frame 1707481910.png";
import productImg4 from "../assets/Frame 1707481911.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  // Cart state
  const [cart, setCart] = useState([
    {
      key: "1",
      product: {
        image: productImg1,
        name: "Bubba Kush THCA Flower",
      },
      price: 750,
      quantity: 1,
      subtotal: 750,
    },
    {
      key: "2",
      product: {
        image: productImg2,
        name: "Sour Diesel THCA Flower",
      },
      price: 850,
      quantity: 2,
      subtotal: 1700,
    },
    {
      key: "3",
      product: {
        image: productImg3,
        name: "OG Kush THCA Flower",
      },
      price: 950,
      quantity: 1,
      subtotal: 950,
    },
    {
      key: "4",
      product: {
        image: productImg4,
        name: "Granddaddy Purple THCA Flower",
      },
      price: 1000,
      quantity: 3,
      subtotal: 3000,
    },
  ]);

  // Update quantity
  const updateQuantity = (key, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: newQuantity * item.price,
            }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (key) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.subtotal, 0);

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (product) => (
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover"
          />
          <span>{product.name}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className="flex items-center gap-4 mt-3">
          <div className="flex border font-semibold p-2 rounded-2xl border-gray-300 items-center gap-3">
            <button
              onClick={() =>
                updateQuantity(record.key, quantity > 1 ? quantity - 1 : 1)
              }
              className="border bg-gray-200 rounded-2xl px-3 py-1"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => updateQuantity(record.key, quantity + 1)}
              className="border bg-gray-200 rounded-2xl px-3 py-1"
            >
              +
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (subtotal) => `$${subtotal.toFixed(2)}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button
          className="text-red-500 hover:underline"
          onClick={() => removeItem(record.key)}
        >
          X
        </button>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Cart - Doublet24</title>
      </Helmet>
      <TitleBg title="CART" />
      <div className="md:p-20 max-w-7xl mx-auto p-5 md:flex gap-10 w-full">
        <div className="md:w-[70%]">
          <Table
            className="border-t-8 border-t-[#173616] rounded-2xl"
            dataSource={cart}
            columns={columns}
            pagination={false}
            scroll={{ x: 700 }}
          />
        </div>
        <div className="md:w-[30%] border-t-8 mt-10 md:mt-0 border-t-[#173616] bg-white rounded-2xl">
          <div className=" p-6 ">
            <h1 className="text-2xl font-bold mb-4 border-b-2 pb-3">
              Cart Total
            </h1>

            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between  pb-3 text-lg mb-2">
              <span>Total:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>

            <Link to={"/checkout"}>
              <button className="w-full mt-4 bg-[#173616] text-white py-3 rounded-2xl hover:bg-[#145014]">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
