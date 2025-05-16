import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import "./login.css"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        navigate("/profile/user123");
    };

    return (
        <Container className="login">
            <h2>Iniciar sesión</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="form-field" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-field" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={()=>handleLogin()}>
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login;