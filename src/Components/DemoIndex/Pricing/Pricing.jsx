import React, { useState } from 'react';
import {PricingData} from '../../../Data/DemoIndex/DemoAllData';
import PricingCard from '../Pricing/PricingCard';
import "../Pricing/Pricing.css"
function Pricing() {
  const [activeTab, setActiveTab] = useState('monthly');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="custom-container" id="pricing">
      <div className="container">
        <div className="row justify-content-center mb-5 pt-5">
          <div className="col-md-8 col-lg-6 text-center">
            <h6 className="subtitle">Our <span className="fw-bold">Pricing</span></h6>
            <h2 className="title">Pricing Plan</h2>
            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className="nav nav-pills pricing-tab mb-4" id="pills-tab" role="tablist">
              <li className="nav-item me-2" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'monthly' ? 'active' : ''}`}
                  onClick={() => handleTabClick('monthly')}
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'yearly' ? 'active' : ''}`}
                  onClick={() => handleTabClick('yearly')}
                >
                  Yearly
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className={`tab-pane fade ${activeTab === 'monthly' ? 'show active' : ''}`}>
                <div className="row">
                  {PricingData.monthly.map((plan, index) => (
                    <PricingCard
                      key={index}
                      title={plan.title}
                      price={plan.price}
                      period={plan.period}
                      features={plan.features}
                      badge={plan.badge}
                    />
                  ))}
                </div>
              </div>

              <div className={`tab-pane fade ${activeTab === 'yearly' ? 'show active' : ''}`}>
                <div className="row">
                  {PricingData.yearly.map((plan, index) => (
                    <PricingCard
                      key={index}
                      title={plan.title}
                      price={plan.price}
                      period={plan.period}
                      features={plan.features}
                      badge={plan.badge}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
