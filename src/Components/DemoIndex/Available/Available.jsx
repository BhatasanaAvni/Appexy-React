import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import appStoreImage from '../../../assets/Image/i-store.png'; 
import playStoreImage from '../../../assets/Image/play-store.png'; 

const Available = () => {
    return (
        <section className=" ">
            <div className='custom-container section'>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <div className="text-center">
                            <h1 className="display-5 fw-bold mb-4">
                                Available For Your <br />
                                Smartphone.
                            </h1>
                            <p className="text-muted mx-auto mb-5 w-75">
                                The wise man therefore always holds in these matters to this of selection he rejects pleasures to other greater that is pains to avoid worse.
                            </p>
                            <a href="javascript:void(0);" className="me-1">
                                <img src={appStoreImage} alt="App Store" className="shadow" height="52" />
                            </a>
                            <a href="javascript:void(0);">
                                <img src={playStoreImage} alt="Play Store" className="shadow" height="52" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Available;
