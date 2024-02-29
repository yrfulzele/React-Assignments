import logo from './logo.svg';
import './App.css';

function App() {



  let studObj = { sid: 10, sname: "Yash", course: "Science", age:18, total:85 };


  return (
    <>

    <table border="2" class='table-center'>

        <tr>
          <th>Student Details</th> 
        </tr>

        <tr>
          <td>Student ID</td>
          <td>{studObj.sid}</td>
        </tr>
        <tr>
          <td>Student Name</td>
          <td>{studObj.sname}</td>
        </tr>
        <tr>
          <td>Student Course</td>
          <td>{studObj.course}</td>
        </tr>
        <tr>
          <td>Student Age</td>
          <td>{studObj.age}</td>
        </tr>
        <tr>
          <td>Student Total</td>
          <td>{studObj.total}</td>
        </tr>

    </table>
      
    </>
  );
}

export default App;
