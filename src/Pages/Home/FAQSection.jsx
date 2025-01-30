import { Button, Collapse } from 'antd';
import { useState } from 'react';
import buttonLogo from '../../assets/Frame 1000011842.png';
import { Link } from 'react-router';
import { useGetFaqQuery } from '../../redux/features/faqApi';
const FAQSection = () => {
        const { data: faqsData } = useGetFaqQuery([]);

        const [activePanel, setActivePanel] = useState(null);

        // const faqData = [
        //         {
        //                 key: '1',
        //                 header: 'What is this website about?',
        //                 content: "This website is a platform where users can explore various services and information. It's designed to provide a user-friendly experience with easy navigation and relevant content.",
        //         },
        //         {
        //                 key: '2',
        //                 header: 'How do I create an account?',
        //                 content: "To create an account, click on the 'Sign Up' button and fill in your details. A confirmation email will be sent to you to verify your email address.",
        //         },
        //         {
        //                 key: '3',
        //                 header: 'What services do you offer?',
        //                 content: "We offer a variety of services including hair, nail, and beauty treatments. You can find detailed information on each service under the 'Services' section of the website.",
        //         },
        //         {
        //                 key: '4',
        //                 header: 'How can I contact customer support?',
        //                 content: "You can contact our customer support team via the 'Contact Us' page or by emailing us at support@example.com. We're here to help you 24/7.",
        //         },
        //         {
        //                 key: '5',
        //                 header: 'What payment methods do you accept?',
        //                 content: 'We accept a range of payment methods including credit cards, PayPal, and bank transfers. You can choose your preferred method during the checkout process.',
        //         },
        //         {
        //                 key: '6',
        //                 header: 'How do I track my order?',
        //                 content: "Once your order is placed, you will receive a confirmation email with a tracking link. You can track your order status in the 'Order History' section of your account.",
        //         },
        // ];

        const handlePanelChange = (key) => {
                setActivePanel(key ? Number(key) : null);
        };

        return (
                <div className="p-8 mx-auto max-w-7xl md:p-20 md:px-40">
                        <h1 className="mb-10 text-2xl font-bold text-center md:text-4xl clash">
                                Frequently Asked <span className="text-[#00863D]">Questions</span>
                        </h1>
                        <Collapse
                                accordion
                                expandIconPosition="end"
                                bordered={false}
                                onChange={handlePanelChange}
                                className="bg-[#eeeeee] space-y-3"
                        >
                                {faqsData?.map((item) => (
                                        <Collapse.Panel
                                                key={item._id}
                                                header={item.question}
                                                className={`rounded-2xl ${
                                                        activePanel === Number(item._id)
                                                                ? 'bg-[#ebfff4] border-t-8 border-[#033F1B]'
                                                                : 'bg-white'
                                                }`}
                                        >
                                                <div
                                                        className={`p-4 ${
                                                                activePanel === Number(item._id)
                                                                        ? 'text-black'
                                                                        : 'text-gray-600'
                                                        }`}
                                                >
                                                        {item.answer}
                                                </div>
                                        </Collapse.Panel>
                                ))}
                        </Collapse>

                        <div className="my-2 w-full text-center md:my-5">
                                <Link to={'/f-a-q'}>
                                        <Button className="bg-[#00863D] text-white  py-6 md:py-5 border-[#00863D] font-semibold">
                                                See All
                                                <span>
                                                        <img src={buttonLogo} alt="" />
                                                </span>
                                        </Button>
                                </Link>
                        </div>
                </div>
        );
};

export default FAQSection;
