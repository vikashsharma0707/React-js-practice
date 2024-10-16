
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{

    const [myData,setData] =useState([]);

    const handledata=()=>{
        let url="http://localhost:3000/employee";
        axios.get(url).then((res)=>{
               setData(res.data);
        })
    }

    useEffect(()=>{
        handledata();
    });

    const ans =myData.map((key)=>{
        return(
            <>
        <tr>
          <td>{key.empid}</td>
          <td>{key.name}</td>
          <td>{key.desi}</td>
          <td>{key.dept}</td>
          <td>{key.salary}</td>



        </tr>
        </>
        )

    })


    return(
        <>
        <h1>this is display page</h1>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
        
        
        </>
    )
}

export default Display;