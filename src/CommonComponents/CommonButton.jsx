
import React from 'react';
import { Button } from 'react-bootstrap';
import 'material-icons/iconfont/material-icons.css';

const CommonButton = ({ icon, label, onClick, link, className }) => {
  return (
    <Button 
      size="sm" 
      onClick={onClick} 
      href={link} 
      className={`nav-btn ${className}`} 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: "6px 16px",
        gap:"4px"
      }}
    >
      <span className="material-icons align-middle">{icon}</span> {label}
    </Button>
  );
};

export default CommonButton;
