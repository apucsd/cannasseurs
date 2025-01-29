import React, { useState } from "react";
import { Form, Input, Button, Upload, Typography, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const UpdateAboutUs = () => {
  const [sections, setSections] = useState([
    { title: "", description: "", image: null, fileList: [] },
    { title: "", description: "", image: null, fileList: [] },
    { title: "", description: "", image: null, fileList: [] },
  ]);

  const handleInputChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleImageChange = (index, info) => {
    const newSections = [...sections];
    newSections[index].image = info.file.originFileObj;
    newSections[index].fileList = info.fileList;
    setSections(newSections);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(sections);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Update About Us Page</Title>
      <Form onSubmit={handleSubmit}>
        {sections.map((section, index) => (
          <Card
            key={index}
            title={`Section ${index + 1}`}
            style={{ marginBottom: "20px" }}
          >
            <Form.Item label="Title">
              <Input
                value={section.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea
                value={section.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                rows={4}
              />
            </Form.Item>
            <Form.Item label="Image">
              <Upload
                beforeUpload={() => false}
                onChange={(info) => handleImageChange(index, info)}
                fileList={section.fileList}
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Card>
        ))}
        <Form.Item>
          <Button
            className="py-7 w-[30%] bg-[#173616] text-white text-2xl rounded-2xl"
            htmlType="submit"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateAboutUs;
