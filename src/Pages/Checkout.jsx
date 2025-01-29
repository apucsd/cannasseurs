import { Form, Input, Button, Card, Radio, Modal } from "antd";
import { useState } from "react";
import TitleBg from "../Components/ui/TitleBg";
import productImg1 from "../assets/bubbaKush.png";
import productImg2 from "../assets/Frame 1000011859.png";
import productImg3 from "../assets/Frame 1707481910.png";
import productImg4 from "../assets/Frame 1707481911.png";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      key: "1",
      product: {
        image: productImg1,
        name: "Bubba Kush THCA Flower",
        price: 750,
      },
    },
    {
      key: "2",
      product: {
        image: productImg2,
        name: "Sour Diesel THCA Flower",
        price: 850,
      },
    },
    {
      key: "3",
      product: {
        image: productImg3,
        name: "OG Kush THCA Flower",
        price: 950,
      },
    },
    {
      key: "4",
      product: {
        image: productImg4,
        name: "Granddaddy Purple THCA Flower",
        price: 1000,
      },
    },
  ]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price,
    0
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Show the confirmation modal after the order is placed
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // You can add any additional actions here (e.g., redirect to a different page)
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Checkout - Doublet24</title>
      </Helmet>
      <TitleBg title="CHECKOUT" />
      <div>
        <div className="p-10 max-w-7xl mx-auto">
          <Form
            layout="vertical"
            className="w-full md:flex gap-5"
            onFinish={onFinish}
          >
            <div className="md:w-[70%] md:p-10">
              <h2 className="text-lg mb-4">Billing Information</h2>
              <Form.Item
                label="Business Name"
                name="fullName"
                rules={[{ required: true }]}
              >
                <Input className="py-2" placeholder="Business Name" />
              </Form.Item>
              <div className="flex w-full gap-5">
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[{ required: true }]}
                  className="w-1/2"
                >
                  <Input className="py-2" placeholder="Country" />
                </Form.Item>
                <Form.Item
                  label="State/Province"
                  name="state"
                  rules={[{ required: true }]}
                  className="w-1/2"
                >
                  <Input className="py-2" placeholder="State/Province" />
                </Form.Item>
              </div>
              <Form.Item
                label="Street Address"
                name="streetAddress"
                rules={[{ required: true }]}
              >
                <Input className="py-2" placeholder="Street Address" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input className="py-2" placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true }]}
              >
                <Input className="py-2" placeholder="Phone" />
              </Form.Item>
              <h1 className="text-2xl font-bold mb-2">Additional Info</h1>
              <Form.Item label="Order Notes (Optional)" name="orderNotes">
                <Input.TextArea placeholder="Order Notes (Optional)" />
              </Form.Item>
            </div>

            <div className="md:w-[30%] border border-t-8 border-t-[#005125] rounded-2xl p-1">
              <h2 className="text-xl font-bold mt-8 px-8">Order Summary</h2>
              <Card className="w-full border-none">
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.key}
                      className="flex items-center justify-between py-2"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover"
                      />
                      <span className="ml-4">{item.product.name}</span>
                      <span className="ml-4">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between font-bold py-3 border-t">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </li>
                  <li className="flex items-center justify-between font-bold py-3 border-t">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </li>
                  <li className="flex items-center justify-between font-bold py-3 border-t">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </li>
                </ul>
              </Card>

              <h2 className="text-lg mx-6 mb-4">Payment Method</h2>
              <Form.Item
                name="paymentMethod"
                className="mx-6"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="cash">Cash on Delivery</Radio>
                  <Radio value="paypal">PayPal</Radio>
                </Radio.Group>
              </Form.Item>
              <Button
                htmlType="submit"
                className=" w-full bg-[#005125] text-white mb-2 py-4 rounded-3xl"
              >
                Place Order
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Custom Confirmation Modal */}
      <Modal
        title="Payment Complete"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Link to={"/"}>
            <Button
              key="home"
              className=" bg-[#005125] text-white  mx-auto rounded-3xl py-2"
              onClick={handleOk}
            >
              Go to Home
            </Button>
          </Link>,
        ]}
        className="border-t-8 border-t-[#005125] rounded-2xl"
      >
        <div className="flex flex-col items-center text-center py-20 justify-center">
          <FaCheckCircle className="text-[#005125]" size={80} />
          <p className="my-2 text-lg font-bold text-[#005125]">
            Thank you for your order! Your payment is complete.
          </p>
          <p className=" text-gray-500">
            We’ll notify you as soon as your order is on its way. If you have
            any questions or need assistance, feel free to contact our support
            team.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
