import { Button, Collapse, Modal, Input, Form, Space } from "antd";
import { useState } from "react";
import logo from "../.././../assets/Frame 1000011842.png";

const FaqManagement = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [faqData, setFaqData] = useState([
    {
      key: "1",
      header: "What is this website about?",
      content:
        "This website is a platform where users can explore various services and information. It's designed to provide a user-friendly experience with easy navigation and relevant content.",
    },
    {
      key: "2",
      header: "How do I create an account?",
      content:
        "To create an account, click on the 'Sign Up' button and fill in your details. A confirmation email will be sent to you to verify your email address.",
    },
    {
      key: "3",
      header: "What services do you offer?",
      content:
        "We offer a variety of services including hair, nail, and beauty treatments. You can find detailed information on each service under the 'Services' section of the website.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(null);

  const handlePanelChange = (key) => {
    setActivePanel(key ? Number(key) : null);
  };

  const handleAddFaq = (values) => {
    if (isEditing) {
      // Edit existing FAQ
      setFaqData(
        faqData.map((faq) =>
          faq.key === currentFaq.key
            ? { ...faq, header: values.question, content: values.answer }
            : faq
        )
      );
    } else {
      // Add new FAQ
      const newFaq = {
        key: (faqData.length + 1).toString(),
        header: values.question,
        content: values.answer,
      };
      setFaqData([...faqData, newFaq]);
    }
    setIsModalOpen(false);
    form.resetFields();
    setIsEditing(false);
    setCurrentFaq(null);
  };

  const handleEditFaq = (faq) => {
    setIsEditing(true);
    setCurrentFaq(faq);
    form.setFieldsValue({
      question: faq.header,
      answer: faq.content,
    });
    setIsModalOpen(true);
  };

  const handleDeleteFaq = (faqKey) => {
    setFaqData(faqData.filter((faq) => faq.key !== faqKey));
  };

  return (
    <div className="md:p-20 p-8 md:px-40 max-w-7xl mx-auto">
      <h1 className="md:text-4xl text-2xl mb-10 text-center font-bold">
        FAQ <span className="text-[#00863D]">Management</span>
      </h1>

      <Collapse
        accordion
        expandIconPosition="end"
        bordered={false}
        onChange={handlePanelChange}
        className="bg-transparent space-y-3"
      >
        {faqData.map((item) => (
          <Collapse.Panel
            key={item.key}
            header={item.header}
            className={`rounded-2xl ${
              activePanel === Number(item.key)
                ? "bg-[#ebfff4] border-t-8 border-[#033F1B]"
                : "bg-white"
            }`}
          >
            <div
              className={`p-4 ${
                activePanel === Number(item.key)
                  ? "text-black"
                  : "text-gray-600"
              }`}
            >
              {item.content}
              <div className="border-t mt-10">
                <Space className="mt-4">
                  <Button
                    className="bg-blue-500 text-white"
                    onClick={() => handleEditFaq(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-500 text-white"
                    onClick={() => handleDeleteFaq(item.key)}
                  >
                    Delete
                  </Button>
                </Space>
              </div>
            </div>
          </Collapse.Panel>
        ))}
      </Collapse>

      <div className="md:my-5 my-2 text-center w-full">
        <Button
          className="bg-[#00863D] text-white py-6 md:py-5 border-[#00863D] font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          Add FAQ
          <span>
            <img src={logo} alt="" />
          </span>
        </Button>
      </div>

      <Modal
        title={isEditing ? "Edit FAQ" : "Add New FAQ"}
        visible={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setIsEditing(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form form={form} onFinish={handleAddFaq} layout="vertical">
          <Form.Item
            name="question"
            label="Question"
            rules={[{ required: true, message: "Please enter a question" }]}
          >
            <Input placeholder="Enter FAQ question" />
          </Form.Item>
          <Form.Item
            name="answer"
            label="Answer"
            rules={[{ required: true, message: "Please enter an answer" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter FAQ answer" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#00863D] text-white border-[#00863D]"
            >
              {isEditing ? "Save Changes" : "Add FAQ"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FaqManagement;
