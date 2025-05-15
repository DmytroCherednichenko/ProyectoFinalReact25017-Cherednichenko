import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"

const NavbarComponent = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("auth") === "true";

    const cerrarSession = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/men">Men</Nav.Link>
                            <Nav.Link as={Link} to="/women">Women</Nav.Link>
                            <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
                        </Nav>
                        <Nav>
                            
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/cart"><i className="bi bi-cart"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent; 
