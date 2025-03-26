import React from "react";
import { Row, Col, Card } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./style.css"; // Import CSS file

const contactInfo = [
  {
    icon: <MailOutlined />,
    title: "Email",
    value: "miraaqib514@gmail.com",
  },
  {
    icon: <PhoneOutlined />,
    title: "Phone",
    value: "+91 9596523404",
  },
];

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="underline"></div>

      <Row gutter={[30, 30]} justify="center">
        {contactInfo.map((info, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="contact-card" hoverable>
              <div className="contact-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p>{info.value}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contact;
