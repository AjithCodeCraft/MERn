import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token",result.token);
        console.log('Success:', result);
        // Navigate to another page after successful signup (e.g., login page)
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setFormData({
        email: '',
        name: '',
        password: '',
      });
    }
  };


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">LOGIN</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>  
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login