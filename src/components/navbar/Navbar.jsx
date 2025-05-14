import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css"

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>TiendaLogo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/caballero">Caballero</Link></Nav.Link>
                        <Nav.Link><Link to="/dama">Dama</Link></Nav.Link>
                        <Nav.Link><Link to="/nino">Niño</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button className="me-2"><Link style={{color: "white"}} to="/login">Administracion</Link></Button>
                <Button>
                    <Link style={{color: "white"}} to="/carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </Link>
                </Button>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent; 
