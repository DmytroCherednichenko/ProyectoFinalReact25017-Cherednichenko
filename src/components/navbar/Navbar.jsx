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
                    <Navbar.Brand as={Link} to="/">SuperStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/lifestyle">Lifestyle</Nav.Link>
                            <Nav.Link as={Link} to="/muebles">Muebles</Nav.Link>
                            <Nav.Link as={Link} to="/zapatos">Zapatos</Nav.Link>
                            {
                                isAuth && (
                                    <>
                                        <Nav.Link as={Link} to="/profile/lisa_simpson">Mi Cuenta</Nav.Link>
                                        <Nav.Link as={Link} to="/admin">Administración</Nav.Link>
                                    </>
                                )
                            }
                        </Nav>
                        <Nav>
                            {
                                !isAuth ? (<Nav.Link as={Link} to="/login">Login</Nav.Link>) 
                                : (<Button variant="secondary" onClick={()=>cerrarSession()}>Logout</Button>)
                            }
                            <Nav.Link as={Link} to="/cart"><i className="bi bi-cart"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent; 
