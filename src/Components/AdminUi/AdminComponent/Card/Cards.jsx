import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import counterImg from "../../../../assets/Image/counter-bg.jpg";
const Cards = () => {
  return (
    <>
      <Container className='mt-3'>
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header">
              <h5 className="card-title mb-0">Card</h5>
              <p className="mb-0">
                {" "}
                Bootstrap's cards provide a flexible and extensible content
                container with multiple variants and options. Check out{" "}
                <a href="https://getbootstrap.com/docs/4.4/components/card/">
                  Bootstrap's Doc
                </a>{" "}
                for more examples.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src={counterImg}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-muted">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="row g-0 align-items-center">
                      <div className="col-md-5">
                        <img src={counterImg} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title mb-0">Card title</h5>
                          <p className="card-text text-muted">
                            This is a wider card with supporting text lead-in to
                            additional content.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-5 ">
                    <div className="row g-0 align-items-center">
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title fs-16">Card title</h5>
                          <p className="card-text text-muted">
                            This is a wider card with supporting text lead-in to
                            additional content.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <img src={counterImg} className="card-img" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
       
              </div>
           
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cards;
