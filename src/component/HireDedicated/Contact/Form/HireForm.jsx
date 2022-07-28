
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ButtonCustom from "../../../Button/ButtonCustom";
import { FromWrap, FormTitle, FormSubTitle } from "./HireForm.style";
const HireForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [value, setValue] = useState();
  return (
    <FromWrap>
      <FormTitle className="fw700 text-uppercase text-center">
        LET’S tALK
      </FormTitle>
      <FormSubTitle className="fw400 text-center">
        {/* Ready to create an unique experience? Let's get in touch! */}
      </FormSubTitle>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Full Name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Company Name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Control required type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                placeholder="Mobile Number"
                defaultCountry="US"
                value={value}
                onChange={setValue}
                // className="form-control"
              />
              {/* <Form.Control required type="phone" placeholder="Mobile Number" /> */}
            </Form.Group>
          </Col>
          <Col sm={12}>
            <Form.Group
              className="form-group"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                required
                as="textarea"
                placeholder="Requirement (Optional)"
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <ButtonCustom
              BtnTransparent={false}
              titleText="Submit"
              colorChange="text-uppercase"
            />
          </Col>
        </Row>
      </Form>
    </FromWrap>
  );
};

export default HireForm;
