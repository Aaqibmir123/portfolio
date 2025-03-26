import React from "react";
import { Row, Col, Button, Image } from "antd";
import { DribbbleOutlined, LinkedinOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-section">
      <Row justify="center" align="middle" className="home-container">
        <Col xs={24} md={12} className="home-text">
          <p className="greeting">Hey, I'm</p>
          <h1 className="name">Mir Aaqib Bashir</h1>
          <p className="designation">Full-Stack Developer | UX Enthusiast</p>
          <p className="description">
            Passionate about building scalable web applications and creating seamless 
            user experiences. I specialize in **MERN Stack** and intuitive UI/UX design.
          </p>

          <div className="social-icons">
            <DribbbleOutlined />
            <LinkedinOutlined />
          </div>

          <Button className="portfolio-btn" type="default">
            View My Work <ArrowRightOutlined />
          </Button>
        </Col>

        {/* Corrected Image Path */}
        <Col xs={24} md={12} className="home-image">
        <Image src="/images/image.png" alt="Profile" preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
