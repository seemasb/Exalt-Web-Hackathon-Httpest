import {Col,Row,Dropdown,InputGroup,FormControl,Button} from 'react-bootstrap'
import Exalt from '../Images/Exalt.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineFire } from 'react-icons/ai';
import '../Styles/Header.css'
import {FiSearch} from 'react-icons/fi'




export default function Header(props){
    const {Logged , setLogged , setHomeLog} = props
    
    function Login (){
        setHomeLog('LogIn')
    }
    return(
        <div className="header">
            <Row className="headerRow">
                <Col lg="2" md="2">
                <img src={Exalt} id="Logo"></img>
                </Col>
                <Col lg="2" md="2">
                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    All Games
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Search Word</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Paltel City</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Card Games</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col lg="5" md="4">
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm"><FiSearch color="#C4C4C4"/></InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"  placeholder="Search"/>
                     </InputGroup>
                </Col>
            </Row>
        </div>
    )
}