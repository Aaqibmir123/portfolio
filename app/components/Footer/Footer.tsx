import React from "react";
import "./style.css"; // Import CSS file

const CustomFooter = () => {
  return (
    <div className="custom-footer">
      <p>© {new Date().getFullYear()} Mir Aaqib Bashir | All Rights Reserved</p>
    </div>
  );
};

export default CustomFooter;
