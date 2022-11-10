import { Form, Input, Upload, Button } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {url_header} from "./../../../const"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const TeamMemberForm = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (values) => {
    console.log("submitted");
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("mobileNo", values.mobileNo);
    data.append("designation", values.designation);
    data.append("img", values.img.file.originFileObj);
    console.log(data);
    axios
      .post(`${url_header}/api/teamMember`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Successfully Created!!");
      })
      .catch((err) => console.log("The following error occured:", err));
    window.location.reload();
  };

  return (
    <div>
      <h1>Add team member</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={handleSubmit}
        validateMessages={validateMessages}
        enctype="multipart/form-data"
        action="http://localhost:8000/api/teamMember"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ type: "text" }, { required: true }]}
        >
          <Input name="name" onChange={handleChange} value={values.name} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true }]}
        >
          <Input name="email" onChange={handleChange} value={values.email} />
        </Form.Item>

        <Form.Item
          label="Mobile No."
          name="mobileNo"
          rules={[
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Enter a valid mobile number",
              min: 10,
              required: true,
              pattern: ".{9}",
            },
          ]}
        >
          <Input
            maxlength={10}
            name="mobileNo"
            onChange={handleChange}
            value={values.mobileNo}
          />
        </Form.Item>

        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ type: "text" }, { required: true }]}
        >
          <Input
            name="name"
            onChange={handleChange}
            value={values.designation}
          />
        </Form.Item>

        <Form.Item name="img" label="Image" rules={[{ required: true }]}>
          <Upload name="img" action="http://localhost:8000/api/teamMember">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TeamMemberForm;
