import Accordion from "react-bootstrap/Accordion";
import {CustomAccordianData} from "../../../Data/DemoIndex/DemoAllData";
import faqimg from "../../../assets/Image/faq.png";

function CustomAccordion() {
  return (
    <section className=" bg-light ">
      <div className="section custom-container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-10 text-center">
            <h6 className="subtitle">
              Our <span className="fw-bold">FAQs</span>
            </h6>
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>
        </div>

        <div className="row align-items-center ">
          <div className="col-lg-4">
            <img src={faqimg} alt="" className="img-fluid d-block mx-auto" />
          </div>

          <div className="col-lg-7 offset-lg-1">
            <Accordion defaultActiveKey="0" >
              {CustomAccordianData.map((faq) => (
                <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey} style={{borderRadius: "9px"}}>
                  <Accordion.Header className="m-2 pt-2">{faq.title}</Accordion.Header>
                  <Accordion.Body >{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomAccordion;
