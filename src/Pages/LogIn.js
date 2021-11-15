import {Form,Button,Row,Col} from 'react-bootstrap'
import '../Styles/LogIn.css'
import React, { useState } from 'react';
import axios from 'axios';

// imgs
import Interview from '../Images/Interview.jpg'



function logging (User,Pass){

    axios.post('https://reqres.in/invalid-url', 
    {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    )
    .then(response => console.log(response) );

}
export default function LogIn(props){
    const [User, setUser] = useState();
    const [Pass, setPass] = useState();
    const {setLogged,setHomeLog} = props
    // console.log(User)
    return(
        <div>
            <Row>
                
                <Col lg="6">
                    <Form className="Form">
                     <div className="form_header">
                            {/* <img src={Logo} ></img> */}
                            <span className="form_title">Login to your account</span>
                    </div>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form_label">Username</Form.Label>
                                <Form.Control className="form_input" type="usename" placeholder="Enter your username" onChange={ (event) => { setUser(event.target.value) } }/>
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="form_label">Password</Form.Label>
                                <Form.Control className="form_input" type="password" placeholder="Password" onChange={ (event) => { setPass(event.target.value) } }/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remeber me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="LoginBtn" onClick={()=>{setLogged(true) ; setHomeLog('Home')}}>
                            {/* onClick={logging(User,Pass,setLogged,setHomeLog,setName, setScore,setEmail,setStreaks,setImage,setPosition,setUsername)} */}
                            

                                Login
                            </Button>
                        </Form>
                </Col>

                <Col lg="5">
                <img src={Interview} className="Login_img"></img>

                </Col>

            </Row>
           
        </div>
    )
}