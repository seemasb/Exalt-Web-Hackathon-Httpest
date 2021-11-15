import './App.css';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import {Col,Row} from 'react-bootstrap'
import React, { useState } from 'react';

// pages
import Meetings from './Pages/Meetings'
import Candiditaes from './Pages/Candiditaes'
import Interviewers from './Pages/Interviewers'
import Halls from './Pages/Halls'
import LogIn from './Pages/LogIn'
import MainPage from '../src/Pages/MainPage'



function App() {
  const [Page, setPage] = useState('Meetings');
  const [Logged, setLogged] = useState(false);
  const [HomeLog, setHomeLog] = useState('Log');
  const [size, setSize] = useState(window.innerWidth);

  ////////////////////////user//////////////////////
  const [Name, setName] = useState('Seema Sbouh');
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState('seema.sbouh512@gmail.com');
  const [Streaks, setStreaks] = useState('10');
  const [Score, setScore] = useState();
  const [Image, setImage] = useState();
  const [Position, setPosition] = useState('Digital Internship');

 

  return (
    
    <div className="App hide-scroll">
      {HomeLog=='Home' ? 

      <div>
      <Row>
      <Col className="HeaderCol">
      <Header Logged={Logged} setLogged={setLogged} setHomeLog={setHomeLog} />
      </Col>
      </Row>
      <Row>
        <Col lg="2" md="2" sm="3"><SideBar setPage={setPage} Page={Page} setHomeLog={setHomeLog}/></Col>
        <Col lg="10" md="10" sm="9">
          {
          
          Page=='Candiditaes' ? <Candiditaes/> : (Page=='Meetings' ? <Meetings />: (Page=='Interviewers' ? <Interviewers /> : (Page=='Halls' ? <Halls/> : <div>h</div>)))
          
          }
        </Col>
      </Row>
      </div>


      : 
      // <MainPage/>
      <LogIn setLogged={setLogged} setHomeLog={setHomeLog}/>
      }
      
      
    </div>
  );
}

export default App;

