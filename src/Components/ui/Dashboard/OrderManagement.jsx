import React, { useState } from "react";
import { Input, Table, Tag, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const OrderManagement = () => {
  const [data, setData] = useState([
    {
      orderNo: "001",
      userEmail: "john.doe@example.com",
      paymentBy: "Credit Card",
      totalItems: 3,
      price: "$45.00",
      tId: "TXN001",
      deliveryTime: "2024-12-25 14:30",
      status: "Pending",
    },
    {
      orderNo: "002",
      userEmail: "jane.smith@example.com",
      paymentBy: "PayPal",
      totalItems: 5,
      price: "$75.00",
      tId: "TXN002",
      deliveryTime: "2024-12-26 10:00",
      status: "Shipped",
    },
    {
      orderNo: "003",
      userEmail: "mike.brown@example.com",
      paymentBy: "Debit Card",
      totalItems: 2,
      price: "$30.00",
      tId: "TXN003",
      deliveryTime: "2024-12-27 16:00",
      status: "Shipping",
    },
    {
      orderNo: "004",
      userEmail: "susan.white@example.com",
      paymentBy: "Cash on Delivery",
      totalItems: 4,
      price: "$60.00",
      tId: "TXN004",
      deliveryTime: "2024-12-28 12:30",
      status: "Pending",
    },
    {
      orderNo: "005",
      userEmail: "david.jones@example.com",
      paymentBy: "Credit Card",
      totalItems: 1,
      price: "$15.00",
      tId: "TXN005",
      deliveryTime: "2024-12-29 11:00",
      status: "Shipped",
    },
    {
      orderNo: "006",
      userEmail: "emily.green@example.com",
      paymentBy: "PayPal",
      totalItems: 6,
      price: "$90.00",
      tId: "TXN006",
      deliveryTime: "2024-12-30 18:00",
      status: "Shipping",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    filterData(value, selectedStatus);
  };

  // Handle status change
  const handleStatusChange = (value) => {
    setSelectedStatus(value);
    filterData(searchText, value);
  };

  // Filter data based on search text and status
  const filterData = (searchText, status) => {
    const filtered = data.filter((item) => {
      const matchesSearch = Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(searchText)
      );
      const matchesStatus = status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });

    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Order No",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Payment By",
      dataIndex: "paymentBy",
      key: "paymentBy",
    },
    {
      title: "Total Items",
      dataIndex: "totalItems",
      key: "totalItems",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "T.ID",
      dataIndex: "tId",
      key: "tId",
    },
    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Select
          value={text}
          onChange={(value) => handleStatusChange(value, record)}
          style={{ width: 120 }}
        >
          <Option value="Shipped">
            <Tag color="green">Shipped</Tag>
          </Option>
          <Option value="Pending">
            <Tag color="blue">Pending</Tag>
          </Option>
          <Option value="Shipping">
            <Tag color="orange">Shipping</Tag>
          </Option>
        </Select>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-start">Order Management</h1>
      <div className="mb-4 flex items-center">
        <Input
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearch}
          className="py-3 w-[50%] mr-4"
        />
        <Select
          value={selectedStatus}
          onChange={handleStatusChange}
          style={{ width: 150, height: 50 }}
        >
          <Option value="All">All</Option>
          <Option value="Shipped">Shipped</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Shipping">Shipping</Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="orderNo"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default OrderManagement;
