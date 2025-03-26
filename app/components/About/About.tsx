import React from "react";
import { Row, Col, Progress, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./style.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="underline"></div>

      <Row gutter={[40, 40]} align="middle">
        {/* Left Side - About Text */}
        <Col xs={24} md={12}>
          <p className="about-text">
            I am a **MERN Stack Developer** with expertise in **frontend, backend, API development, and UI/UX**.  
            I build scalable web applications using **React.js, Node.js, Express.js, and MongoDB**.  
            I have experience working with **RESTful APIs, authentication, and responsive UI design**.  
            Passionate about developing high-performance applications and enhancing user experience.
          </p>
          <Button type="primary"  className="cv-button" icon={<DownloadOutlined />}>
          </Button>

           <Button className="portfolio-btn" type="default" icon={<DownloadOutlined />}>
           Download My CV
           </Button>
        </Col>

        {/* Right Side - Skills */}
        <Col xs={24} md={12}>
          <div className="skills">
            <p>Frontend Development (React, Next.js)</p>
            <Progress percent={95} showInfo={true} strokeColor="#333" />
            <p>Backend Development (Node.js, Express.js)</p>
            <Progress percent={90} showInfo={true} strokeColor="#555" />
            <p>API Development (REST, MongoDB, Firebase)</p>
            <Progress percent={85} showInfo={true} strokeColor="#666" />
            <p>UI/UX (Ant Design, Material-UI, CSS)</p>
            <Progress percent={80} showInfo={true} strokeColor="#777" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
