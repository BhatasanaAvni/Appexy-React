// src/components/FeatureItem.js
import React from 'react';
import { Icon } from '@mui/material'; 
import { Check, Layers, Lock } from '@mui/icons-material'; 
import "../Features/Feature.css"
const iconMap = {
  check: <Check />,
  layers: <Layers />,
  lock: <Lock />,
};

const FeatureItem = ({ icon, description }) => (
  <div className="d-flex mb-3 ">
    <div className="flex-shrink-0">
      <span className="avatar avatar-lg bg-white text-primary rounded-circle shadow-primary">
        {iconMap[icon]} 
      </span>
    </div>
    <div className="flex-grow-1 ms-4">
      <p className="text-muted mt-3">
        <span className="text-dark fw-bold"></span> {description}
      </p>
    </div>
  </div>
);

export default FeatureItem;
