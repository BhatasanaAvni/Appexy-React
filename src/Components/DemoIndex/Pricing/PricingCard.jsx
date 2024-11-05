import React from 'react';
import "../Pricing/Pricing.css"
function PricingCard({ title, price, period, features, badge }) {
  const boldTerms = (feature) => {
    const termsToBold = ['10', '1TB', 'Unlimited', '12', '24/7', '20', '2.5TB', '18', '3', '580GB', '5'];
    const regex = new RegExp(`(${termsToBold.join('|')})`, 'g');
    return feature.replace(regex, '<strong><span style="color: black;">$1</span></strong>');
  };
  
  return (
    <div className="col-lg-4">
      <div className="pricing-box mt-sm-5">
        {badge && <span className="pricing-badge">{badge}</span>}
        <div className="text-center mb-4 bg-light p-4 rounded">
          <h5>{title}</h5>
          <h1 className="mt-3 mb-0 text-primary d-flex gap-2 justify-content-center">
            {price}<span className="mont-year  fw-normal mt-3"> {period}</span>
          </h1>
        </div>
        <ul className="list-unstyled text-secondary mb-5 pt-2">
          {features.map((feature, index) => (
            <li className="my-3 d-flex" key={index}>
              <span className="material-icons me-1">check</span>
              <li key={index} dangerouslySetInnerHTML={{ __html: boldTerms(feature) }} />
             
            </li>
          ))}
        </ul>
        <a href="javascript:void(0);" className="btn btn-gradient-primary w-100">Choose Plan</a>
      </div>
    </div>
  );
}

export default PricingCard;
