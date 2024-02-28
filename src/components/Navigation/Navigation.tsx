import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="md" className="custom-navbar mb-3 fixed-top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <span
            style={{ color: "#66c8e3", fontSize: "26px", display: "inline" }}
          >
            MarcoFreemantle
            <span style={{ color: "white", fontSize: "26px" }}>.</span>
            <span style={{ color: "#bc77ed", fontSize: "26px" }}>_</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              MarcoFreemantle._
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="nav-link">
                // home
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link">
                // expertise
              </Nav.Link>
              <Nav.Link href="#action3" className="nav-link">
                // work
              </Nav.Link>
              <Nav.Link href="#action4" className="nav-link">
                // contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
