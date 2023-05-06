import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      to_name: "Roshan Yadav",
      from_name: email,
      message: "Newsletter Subscription"
    };
    setMsg('sending');
    let res = await emailjs.send('service_27ts0ls', 'template_0pibll5', templateParams, 'AcurIRJfgbi9run-l')

    if (res) {
      setMsg('success');
    } else {
      setMsg('error');
    }
  }



  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {msg === 'sending' && <Alert>Sending...</Alert>}
            {msg === 'error' && <Alert variant="danger">{msg}</Alert>}
            {msg === 'success' && <Alert variant="success">{msg}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button className="submit-btn" type="submit">Submit</button>
              </div>
              <button type="submit" className="submit-btn-sec">Submit</button>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
