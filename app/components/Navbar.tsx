import React from "react";
import { Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./style.css"; // Import CSS file

const Navbars = () => {
  return (
    <div className="navbar">
      <Row justify="space-between" align="middle" className="nav-container">
        {/* Logo */}
        <Col>
          <h2 className="logo">Ashton.</h2>
        </Col>

        {/* Navigation Links */}
        <Col className="nav-links-container">
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </Col>

        {/* Mobile Menu Icon */}
        <Col className="menu-icon">
          <MenuOutlined />
        </Col>
      </Row>
    </div>
  );
};

export default Navbars;
