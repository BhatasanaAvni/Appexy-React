// src/components/FeatureList.js
import React from 'react';
import FeatureItem from '../Features/FeatureItem';

const FeatureList = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureItem 
          key={index} 
          icon={feature.icon} 
          title={feature.title} 
          description={feature.description} 
        />
      ))}
    </>
  );
};

export default FeatureList;
