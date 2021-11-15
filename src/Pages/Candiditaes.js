import { Button } from 'react-bootstrap';
import { MDBDataTableV5 } from 'mdbreact';



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
      },{
        ID: '2',
        Name: 'Haya',
        Position: 'Edinburgh',
        City: 'Nablus',
        PhoneNumber: '0597292545',
        CVID: '320',
      },{
        ID: '2',
        Name: 'Haya',
        Position: 'Edinburgh',
        City: 'Nablus',
        PhoneNumber: '0597292545',
        CVID: '320',
      },{
        ID: '2',
        Name: 'Haya',
        Position: 'Edinburgh',
        City: 'Nablus',
        PhoneNumber: '0597292545',
        CVID: '320',
      },{
        ID: '2',
        Name: 'Haya',
        Position: 'Edinburgh',
        City: 'Nablus',
        PhoneNumber: '0597292545',
        CVID: '320',
      },
    ],
  }


export default function Candiditaes(){
  
    return(
        <div>
           <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={Candidates} />

           {/* <Button>Add</Button> */}
        </div>
    )
}