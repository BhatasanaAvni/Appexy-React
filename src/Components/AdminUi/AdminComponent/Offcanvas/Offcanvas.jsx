import React from 'react';
import { Card, Button, Offcanvas,Container } from 'react-bootstrap';

const OffcanvasExample = () => {
    const [showTop, setShowTop] = React.useState(false);
    const [showBottom, setShowBottom] = React.useState(false);
    const [showRight, setShowRight] = React.useState(false);
    const [showLeft, setShowLeft] = React.useState(false);

    const handleCloseTop = () => setShowTop(false);
    const handleCloseBottom = () => setShowBottom(false);
    const handleCloseRight = () => setShowRight(false);
    const handleCloseLeft = () => setShowLeft(false);

    const handleShowTop = () => setShowTop(true);
    const handleShowBottom = () => setShowBottom(true);
    const handleShowRight = () => setShowRight(true);
    const handleShowLeft = () => setShowLeft(true);

    return (
        <Container className='mt-3'>
        <div className="col-12">
            <Card className='shadow'>
                <Card.Header>
                    <Card.Title className="mb-0">Offcanvas</Card.Title>
                    <p className="mb-0">
                        Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>.show</code> class on an element with the <code>.offcanvas</code> class.
                    </p>
                </Card.Header>
                <Card.Body>
                    <div>
                        <Button className="me-1 mb-2" variant="primary" onClick={handleShowTop}>
                            Top Offcanvas
                        </Button>
                        <Button className="me-1 mb-2" variant="primary" onClick={handleShowBottom}>
                            Bottom Offcanvas
                        </Button>
                        <Button className="me-1 mb-2" variant="primary" onClick={handleShowRight}>
                            Left Offcanvas
                        </Button>
                        <Button className="me-1 mb-2" variant="primary" onClick={handleShowLeft}>
                            Right Offcanvas
                        </Button>
                    </div>

       
                    <Offcanvas show={showTop} onHide={handleCloseTop} placement="top">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>Some text as placeholder. In real life, you can have the elements you have chosen. Like, text, images, lists, etc.</div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas show={showBottom} onHide={handleCloseBottom} placement="bottom">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>Some text as placeholder. In real life, you can have the elements you have chosen. Like, text, images, lists, etc.</div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas show={showRight} onHide={handleCloseRight} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>Some text as placeholder. In real life, you can have the elements you have chosen. Like, text, images, lists, etc.</div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas show={showLeft} onHide={handleCloseLeft} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>Some text as placeholder. In real life, you can have the elements you have chosen. Like, text, images, lists, etc.</div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card.Body>
            </Card>
        </div>
        </Container>
    );
};

export default OffcanvasExample;
