import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ variant = 'light', message, title, dismissible }) => {
  const variantStyles = {
    info: { text: 'text-info', bg: 'bg-light' },
    light: { text: 'text-dark', bg: 'bg-light' },
    success: { text: 'text-success', bg: 'bg-success' },
    danger: { text: 'text-danger', bg: 'bg-danger' },
    warning: { text: 'text-warning', bg: 'bg-warning' },

    primary: { text: 'text-white', bg: 'bg-primary' },
    secondary: { text: 'text-white', bg: 'bg-secondary' },
  };
  
  const { text, bg } = variantStyles[variant] || variantStyles.light; 

  return (
    <BootstrapAlert variant={variant} dismissible={dismissible}>
      {title && <BootstrapAlert.Heading className={text}>{title}</BootstrapAlert.Heading>}
      <div className={text} style={{
           
            color: "black",         
            borderRadius: '5px',   
          }}>{message}</div>
    </BootstrapAlert>
  );
};

export default Alert;
