
import { MDBDataTableV5 } from 'mdbreact';


var HallsTable = {
    columns: [
      {
        label: 'Hall ID',
        field: 'ID',
        width: 270,
      },
      {
        label: 'Branch',
        field: 'Name',
        width: 200,
      },
      {
        label: 'Time reserved',
        field: 'City',
        width: 150,
      },
      
    ], 
    rows: [
      {
        ID: '1',
        Name: 'Hall-11D Nablus',
        City: '11:00-12:00',
      },
    ],
  }


export default function Halls(){
    return(
        <div>
           <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={HallsTable} />
        </div>
    )
}