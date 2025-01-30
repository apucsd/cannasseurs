import { Collapse } from 'antd';
import { useState } from 'react';
import { useGetFaqQuery } from '../redux/features/faqApi';

const FAQ = () => {
        const { data: faqsData } = useGetFaqQuery([]);

        const [activePanel, setActivePanel] = useState(null);

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
                </div>
        );
};

export default FAQ;
