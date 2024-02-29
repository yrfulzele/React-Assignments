import logo from './logo.svg';
import './App.css';

function App() {



  //let studObj = { sid: 10, sname: "Yash", course: "Science", age:18, total:85 };

  let docArray = [
    { docId: 10, dname: "Yash", desg: "Surgeon", exp: 5, num:345345345 },
    { docId: 20, dname: "Sahil", desg: "Cardio", exp: 3, num:987765543 },
    { docId: 30, dname: "Atharva", desg: "Dentist" , exp: 7, num:567678890},
    { docId: 40, dname: "Krishna", desg: "Gynac", exp: 1, num:234345567 },
  ];

  let docArray2 =  docArray.map(item => 
    {
      return <tr>
              <td>{item.docId}</td>
              <td>{item.dname}</td>
              <td>{item.desg}</td>
              <td>{item.exp}</td>
              <td>{item.num}</td>
            </tr>;
    });

  return (
    <>

    <h1 className="doc-table">Doctor's Details</h1>

<table  border="2"  width="500">

<tr>
  <th>Doctor Id</th>
  <th>Doctor Name</th>
  <th>Doctor Desgination</th>
  <th>Experience</th>
  <th>Contact Number</th>
</tr>

{docArray2}
</table>

    </>
);
}

export default App;
