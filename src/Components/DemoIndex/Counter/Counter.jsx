import React from 'react';
import CountUp from 'react-countup';
import "./Counter.css"; 

const Counter = () => {
  const counters = [
    { target: 825, label: 'Global Brands', icon: 'mdi mdi-web' },
    { target: 1800, label: 'Happy Clients', icon: 'mdi mdi-emoticon-happy' },
    { target: 599, label: 'Creative Ideas', icon: 'mdi mdi-lightbulb-on' },
    { target: 2000, label: 'User Clients', icon: 'mdi mdi-account-multiple' },
  ];

  return (
    <section className="section cta-bg">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row" id="counter">
          {counters.map((counter, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="text-center my-3">
                <div className="d-flex align-items-center counter-content text-start">
                  <div className="flex-shrink-0">
                    <i className={`${counter.icon} text-white display-5`}></i>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h1 className="text-white">
                      <CountUp start={0} end={counter.target} duration={2.75} separator="," />+
                    </h1>
                    <p className="counter-name">
                      {counter.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
