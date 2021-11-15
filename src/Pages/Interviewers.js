
import { MDBDataTableV5 } from 'mdbreact';

var Employees = {
    columns: [
        {
            label: 'ID',
            field: 'ID',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Name',
            field: 'Name',
            width: 270,
          },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'PhoneNumber',
        field: 'PhoneNumber',
        width: 200,
      },
      {
        label: 'Email',
        field: 'Email',
        width: 150,
      },
    ], 
    rows: [
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
        {
            ID: '1',
            Name: 'sara',
            Position: 'FrontEnd',
            PhoneNumber: '0597292545', 
            Email: 'seee"hmail.cim'

        },
    ],
  }

export default function Interviewers(){
    return(
        <div>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={Employees} />

        </div>
    )
}