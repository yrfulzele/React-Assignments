import { useState } from "react";


function Employee() {

    const [empArray, setEmpArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getDeptsClick() {
        let data = [
            { empno: 101, ename: "Yash Fulzele", job: "CBO" , sal:40000, deptno:2},
            { empno: 102, ename: "Atharva Udawant", job: "C&M" , sal:35000, deptno:3},
            { empno: 103, ename: "Sahil Bhawani ", job: "S&A" , sal:45000, deptno:1},
            { empno: 104, ename: "Krishnakant Phate", job: "CBO" , sal:40000, deptno:2 },
        ];

        setEmpArray(data);

    }

    function addDeptClick()
    {
        let empObj = { };
        empObj.empno = deptno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal = sal;
        empObj.deptno = deptno;
        

        let tempArray = [...empArray];
        tempArray.push(empObj);       
        setEmpArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");

    }


    function  deleteClick(eno)
    {


        let tempArray = [...empArray];
        
        let  index = tempArray.findIndex( item => item.empno == eno );
        tempArray.splice(index, 1); 

        setEmpArray( tempArray );
    }

    function  selectClick(eno)
    {
      let empObj =   empArray.find(item =>  item.empno ==  eno);

    setEmpno(empObj.empno);
    setEname(empObj.ename);
    setJob(empObj.job);
    setSal(empObj.sal);
    setDeptno(empObj.deptno);
   
    }


    function  updateDeptClick()
    {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;


        setEmpArray( tempArray );

        clearFields();
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}>Update</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.empno)}}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Emp No" type="text"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Employee Name" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="sal" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />

             <input placeholder="dept number" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />


            <hr />

            <input type="button" value="Get Employee" onClick={getDeptsClick} />
            <input type="button" value="Add Employee" onClick={addDeptClick} />
            <input type="button" value="Update Employee" onClick={updateDeptClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Employee Job</th>
                    <th>Employee Salary</th>
                    <th>Employee Dept No</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default Employee;