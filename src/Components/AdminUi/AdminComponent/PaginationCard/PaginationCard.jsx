import React from 'react';
import { Card, Pagination,Container } from 'react-bootstrap';

const PaginationCard = () => {
    return (
        <Container className='mt-3'>

        <div className="col-12">
            <Card className='shadow'>
                <Card.Header>
                    <Card.Title className="mb-0">Pagination</Card.Title>
                    <p className="mb-0">
                        Examples for showing pagination to indicate a series of related content exists across multiple pages
                    </p>
                </Card.Header>
                <Card.Body>
                    <div>
                        <nav aria-label="Page navigation example">
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </nav>

                        <p className="sub-header mt-4">
                            You can use icons instead of showing text labels for previous and next actions.
                        </p>

                        <nav aria-label="Page navigation example">
                            <Pagination>
                                <Pagination.Prev aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                </Pagination.Prev>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </Pagination.Next>
                            </Pagination>
                        </nav>

                        <p className="sub-header mt-4">
                            Just add class modifier <code>.pagination-rounded</code> to <code>.pagination</code> in order to have rounded page action links.
                        </p>

                        <nav aria-label="Page navigation example">
                            <Pagination className="pagination-rounded">
                                <Pagination.Prev aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                </Pagination.Prev>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </Pagination.Next>
                            </Pagination>
                        </nav>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </Container>
    );
};

export default PaginationCard;
