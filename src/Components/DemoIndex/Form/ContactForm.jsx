import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../Elements/InputField";
import { HelloIcons } from "../../../assets/Image/Images";
import { ContactData } from "../../../Data/DemoIndex/DemoAllData";
import "../Form/Form.css";

const ContactForm = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("contactFormData", JSON.stringify(data));
    alert("Your message has been sent!");
  };

  return (
    <section className="bg-light" id="contactus">
      <div className="custom-container section">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-8 text-center">
            <h6 className="subtitle">
              Our <span className="fw-bold">Contact Us</span>
            </h6>
            <h2 className="title">Get in Touch</h2>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4 custom-margin">
            <div className="d-flex align-items-center mb-5">
              <div className="flex-shrink-0">
                <img src={HelloIcons} alt="..." height="80" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h2 className="mb-0">Say Hello!</h2>
              </div>
            </div>
            {/* Email Section */}
            <div className="mb-4">
              <h5 className="mb-2 fs-18">Email</h5>
              {ContactData.email.map((item, index) => (
                <p key={index} className="mb-1 text">
                  <i className="material-icons text-muted me-1">
                    arrow_forward
                  </i>
                  <a
                    href={`mailto:${item.address}`}
                    className="text-secondary no-underline"
                  >
                    {item.address}
                  </a>
                </p>
              ))}
            </div>

            {/* Phone Section */}
            <div className="mb-4">
              <h5 className="mb-2 fs-18">Phone</h5>
              {ContactData.phone.map((item, index) => (
                <p key={index} className="mb-1 d-flex align-items-center">
                  <i className="material-icons text-muted me-1">
                    arrow_forward
                  </i>
                  <a href={`tel:${item.number}`} className="text-secondary no-underline">
                    {item.number}
                  </a>
                </p>
              ))}
            </div>

            {/* Address Section */}
            <div>
              <h5 className="mb-2 fs-18">Address</h5>
              {ContactData.address.map((item, index) => (
                <div key={index}>
                  <h5 className="fs-16 mb-2 text-secondary d-flex align-items-center mt-2">
                    <i className="material-icons text-muted me-1">
                      arrow_forward
                    </i>
                    {item.label}
                  </h5>
                  <p className="text-muted lh-base">{item.street}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1">
            <div className="card contact-form rounded-lg mt-4 mt-lg-0">
              <div className="card-body p-5">
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <InputField
                          name="firstName"
                          label="First Name"
                          placeholder="Your first name..."
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <InputField
                          name="lastName"
                          label="Last Name"
                          placeholder="Your last name..."
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <InputField
                          name="email"
                          label="Email Address"
                          type="email"
                          placeholder="Your email..."
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <InputField
                          name="phone"
                          label="Phone Number"
                          placeholder="Type phone number..."
                          required
                        />
                      </div>
                      <div className="col-12">
                        <InputField
                          name="subject"
                          label="Subject"
                          placeholder="Type subject..."
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="mb-4">
                          <label htmlFor="formMessages" className="form-label">
                            Messages
                          </label>
                          <textarea
                            className="form-control"
                            id="formMessages"
                            rows="4"
                            placeholder="Type messages..."
                            required
                            {...methods.register("messages")}
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-gradient-danger">
                      Send Messages <i className="material-icons ms-1">send</i>
                    </button>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
