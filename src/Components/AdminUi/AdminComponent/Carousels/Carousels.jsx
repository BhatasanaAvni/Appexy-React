import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import images from "../../../../Data/AdminUi/NavComponent/images"; 

const Carousels = () => {
  return (
    <Container className='mt-3'>
      <div className="col-12">
        <Card className='shadow'>
          <Card.Header>
            <h5 className="card-title mb-0">Carousel</h5>
            <p className="mb-0">
              A slideshow component for cycling through elements—images or slides of text—like a carousel.
            </p>
          </Card.Header>
          <Card.Body>
            <Carousel id="carouselExampleIndicators">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.src}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card.Body>

          <Card.Header className="border-top py-4">
            <h5 className="card-title mb-0">Carousel with Captions</h5>
            <p className="mb-0">
              You can add captions to your slides with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
              They can be easily hidden on smaller viewports, as shown below, with optional{" "}
              <a href="https://getbootstrap.com/">Bootstrap utilities</a>.
            </p>
          </Card.Header>
          <Card.Body>
            <Carousel id="carouselExampleCaptions">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.src}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                  <Carousel.Caption className="d-none d-md-block">
                    <h5>{image.caption}</h5>
                    <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Carousels;
