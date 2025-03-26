import React from "react";
import { Row, Col, Card } from "antd";
import {
  CodeOutlined,
  DesktopOutlined,
  ApiOutlined,
  DatabaseOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import "./style.css"; // Import CSS file

const services = [
  {
    title: "MERN Stack Development",
    description:
      "Building full-stack web applications with MongoDB, Express.js, React.js, and Node.js.",
    icon: <CodeOutlined />,
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive UI with Next.js, React.js, and Ant Design.",
    icon: <DesktopOutlined />,
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable backend solutions with Node.js, Express.js, and MongoDB.",
    icon: <DatabaseOutlined />,
  },
  {
    title: "API Development",
    description:
      "Designing RESTful and GraphQL APIs for web and mobile applications.",
    icon: <ApiOutlined />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting modern and user-friendly designs using Ant Design and Material-UI.",
    icon: <SketchOutlined />,
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="underline"></div>

      <Row gutter={[30, 30]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="service-card" hoverable>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
