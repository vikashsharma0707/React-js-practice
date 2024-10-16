import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{

    const [mydata, setMydata]= useState([]);

    const loadData=()=>{
        let url="http://localhost:3000/customer";
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
                <td> {key.productno} </td>
                <td> {key.productqn} </td>
                <td> {key.price} </td>
                <td> {key.name} </td>
                <td> {key.prodeuctn} </td>
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