import '../Styles/MainPage.css'
import Exalt from '../Images/Exalt.png'
import {Navbar , Container, Nav , Button} from 'react-bootstrap'

export default function MainPage(){
    return(
        <div>
            <div className="MainPage_Header">
                <img src={Exalt} className="logo"></img>

                <div className="NavBar">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#link">Teams</Nav.Link>
                            <Nav.Link href="#home">Partners</Nav.Link>
                            <Nav.Link href="#link">Apply</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
                
                <Button>Login</Button>
            </div>
            <div className="MainPage_body">
                <div>Apply to exalt</div>
                <img ></img>
            </div>
        </div>
    )
}