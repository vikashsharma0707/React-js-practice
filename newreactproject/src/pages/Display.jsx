import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{

    const [mydata, setMydata]= useState([]);

    const loadData=()=>{
        let url="http://localhost:3000/students";
        axios.get(url).then((res)=>{     
            setMydata(res.data);
        })
    }


    useEffect(()=>{
        loadData();
    }, []);


    const ans=mydata.map((key)=>{
          return(
            <>
              <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
              </tr>
            </>
          )
    })


    return(
        <>
          <h1> Display Students Record</h1>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
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