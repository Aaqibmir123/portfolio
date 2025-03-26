import React from "react";
import { Timeline } from "antd";
import "./style.css"; // Import CSS file

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">My Experience</h2>
      <div className="underline"></div>

      <Timeline mode="alternate">
        {/* Frontend Development Experience */}
        <Timeline.Item label="2019 - 2021">
          <div className="experience-content">
            <h3>Frontend Developer</h3>
            <p>
              Worked on building **interactive and responsive UIs** using **React.js, Next.js, and Ant Design**.  
              Developed multiple **e-commerce, admin dashboards, and real estate platforms** with dynamic UI elements.
            </p>
          </div>
        </Timeline.Item>

        {/* Backend Development Experience */}
        <Timeline.Item label="2021 - 2022">
          <div className="experience-content">
            <h3>Backend Developer</h3>
            <p>
              Created **scalable backend solutions** using **Node.js, Express.js, and MongoDB**.  
              Integrated **RESTful APIs, authentication (JWT, Firebase), and third-party services**.
            </p>
          </div>
        </Timeline.Item>

        {/* MERN Stack Development Experience */}
        <Timeline.Item label="2022 - 2023">
          <div className="experience-content">
            <h3>MERN Stack Developer</h3>
            <p>
              Developed **full-stack web applications** using the **MERN (MongoDB, Express, React, Node)** stack.  
              Managed **API integrations, payment gateways, and real-time data updates**.
            </p>
          </div>
        </Timeline.Item>

        {/* UI/UX Design Experience */}
        <Timeline.Item label="2023 - Present">
          <div className="experience-content">
            <h3>UI/UX Designer</h3>
            <p>
              Designed **intuitive and visually appealing user interfaces** with **Ant Design and Material-UI**.  
              Focused on **user experience, accessibility, and responsive design**.
            </p>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
