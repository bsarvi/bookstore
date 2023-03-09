import { Form, Row, Col, Container } from "react-bootstrap/";

const SignUp = () => {
  return (
    <Container style={{ width: "25rem", marginTop: "5rem" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Test@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignUp;
