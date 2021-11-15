import {Col,Row,Carousel , Modal , Button , Form} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import React, { useState } from 'react';
import '../Styles/Meetings.css'


var Candidates = {
  columns: [
    {
      label: 'ID',
      field: 'ID',
      width: 270,
    },
    {
      label: 'Name',
      field: 'Name',
      width: 200,
    },
    {
      label: 'Position',
      field: 'Position',
      width: 100,
    },
    {
      label: 'City',
      field: 'City',
      width: 150,
    },
    {
      label: 'PhoneNumber',
      field: 'PhoneNumber',
      width: 150,
    },
    {
      label: 'CV ID',
      field: 'CVID',
      width: 150,
    },
  ], 
  rows: [
    {
      ID: '1',
      Name: 'Seema',
      Position: 'Edinburgh',
      City: 'Nablus',
      PhoneNumber: '0597292545',
      CVID: '320',
    },
  ],
}

var Employees = {
  columns: [
    {
      label: 'Position',
      field: 'position',
      width: 270,
    },
    {
      label: 'Office',
      field: 'office',
      width: 200,
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc',
      width: 100,
    },
    {
      label: 'Start date',
      field: 'date',
      sort: 'disabled',
      width: 150,
    },
  ], 
  rows: [

  ],
}

var datatable2 ={
  columns: [
    {
      label: 'Name',
      field: 'name',
      width: 150,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name',
      },
    },
    {
      label: 'Position',
      field: 'position',
      width: 270,
    },
    {
      label: 'Office',
      field: 'office',
      width: 200,
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc',
      width: 100,
    },
    {
      label: 'Start date',
      field: 'date',
      sort: 'disabled',
      width: 150,
    },
    {
      label: 'Salary',
      field: 'salary',
      sort: 'disabled',
      width: 100,
    },
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      date: '2011/04/25',
      salary: '$320',
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: '63',
      date: '2011/07/25',
      salary: '$170',
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: '66',
      date: '2009/01/12',
      salary: '$86',
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: '22',
      date: '2012/03/29',
      salary: '$433',
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: '33',
      date: '2008/11/28',
      salary: '$162',
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: '61',
      date: '2012/12/02',
      salary: '$372',
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: '59',
      date: '2012/08/06',
      salary: '$137',
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      age: '55',
      date: '2010/10/14',
      salary: '$327',
    },
    {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      age: '39',
      date: '2009/09/15',
      salary: '$205',
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      age: '23',
      date: '2008/12/13',
      salary: '$103',
    },
    {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      age: '30',
      date: '2008/12/19',
      salary: '$90',
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      age: '22',
      date: '2013/03/03',
      salary: '$342',
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      age: '36',
      date: '2008/10/16',
      salary: '$470',
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      office: 'London',
      age: '43',
      date: '2012/12/18',
      salary: '$313',
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      office: 'London',
      age: '19',
      date: '2010/03/17',
      salary: '$385',
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      office: 'London',
      age: '66',
      date: '2012/11/27',
      salary: '$198',
    },

  ],
}


var CandidatesList = [
{
  firstName:'seema',
  Position: 'FrontEnd',
},
{
  firstName:'Hina',
  Position: 'BacktEnd',
},
]

export default function Meetings(){
  const [datatable, setDatatable] = useState();
  const [show, setShow] = useState(false);
  const [filled, setfilled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // setDatatable(datatable2)

    return(
        <div>
          <Button className='btn' onClick={handleShow}>Schedule a meeting</Button >
          <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={Candidates} />

          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Schedule New Meeting</Modal.Title>
        </Modal.Header>

        <Modal.Body>
                      <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Choose a candidate</Form.Label>

                  <Form.Select aria-label="Default select example">
                      <option>Coose a Candidate</option>

                      {/* {CandidatesList.map(x=>{
                        <option value={x.firstName}>{x.firstName}</option>
                      })} */}

                      <option value="1">Seema Sbouh</option>
                      <option value="2">Haya Mikkawi</option>
                      <option value="3">Nabeel Kayed</option>
                      <option value="3">Zain Baker</option>

                  </Form.Select>


                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Position</Form.Label>
                  {/* <Form.Control type="Position" placeholder="Position" /> */}
                  <Form.Select aria-label="Default select example">
                      <option value="0">Position</option>
                      <option value="1">FrontEnd</option>
                      <option value="3">BackEnd</option>
                      </Form.Select>

                </Form.Group>
                <Form.Label>Choose a Date</Form.Label><br></br>
                <input type="date" id="birthday" name="birthday"></input>
                </Form.Group>

                <Form.Group >
                <Form.Label>Choose a Time</Form.Label><br></br>

                <input type="time" id="appt" name="appt"
                 required></input>
                 </Form.Group>
                 <br></br>

                 <Form.Group >
                <Form.Label>Available Halls</Form.Label><br></br>
                <Form.Select aria-label="Default select example">
                      <option value="0">List of available halls based on time and date</option>
                      <option value="1">Hall1-11D-Nablus</option>
                      <option value="3">Hall3-13D-Ramallah</option>
                      </Form.Select>
                 </Form.Group>
                    <br></br>
                 <Form.Group >
                <Form.Label>Available Seniors</Form.Label><br></br>
                <Form.Select aria-label="Default select example">
                      <option value="0">List of available Seniors</option>
                      <option value="1">Ahmad Hashem</option>
                      <option value="3">Mustafa Mohammad</option>
                      <option value="3">Sara Emad</option>

                      </Form.Select>
                 </Form.Group>
                 <br></br>

                 <Button variant="primary" onClick={()=>{setfilled(true)}}>Display Back-up</Button>
                 <br></br>



                
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}

                <br></br>
                <div className={filled?'show':'hide'}>
                    Choose a Back-Up interviewer
                  <Form.Group >
                    <Form.Select aria-label="Default select example">
                          <option value="1">Ahmad Hashem</option>
                          <option value="3">Sara Emad</option>
                          </Form.Select>
                 </Form.Group>

                </div>



              </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Confirm</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}