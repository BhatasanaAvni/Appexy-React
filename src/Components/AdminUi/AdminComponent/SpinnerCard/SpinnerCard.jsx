import React from 'react';
import { Card, Container } from 'react-bootstrap';

const SpinnerCard = () => {
    return (
        <Container className='mt-3'>

        <div className="col-12">
            <Card className='shadow'>
                <Card.Header>
                    <Card.Title className="mb-0">Spinners</Card.Title>
                    <p className="mb-0">
                        Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
                    </p>
                </Card.Header>
                <Card.Body>
                    <div>
                        <div className="d-flex flex-wrap">
                            <div className="spinner-border text-primary m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-secondary m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-success m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-danger m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-warning m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-info m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <p className="sub-header mt-4">
                            If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!
                        </p>

                        <div className="d-flex flex-wrap">
                            <div className="spinner-grow text-primary m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-danger m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-warning m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-info m-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </Container>
    );
};

export default SpinnerCard;
