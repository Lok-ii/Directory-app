import react from 'react';
import "./table.css";

import React from 'react'

const Table = (props) => {

  const deleteRow = (e, aadhar)=>{
    props.setRows((prev)=>{
      let newData = prev.filter((data) => data.aadhar != aadhar);
      localStorage.setItem("rows", JSON.stringify(newData));
      return newData;
    });
  }
  return (
    <table>
        <thead>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Aadhar Number</th>
          <th>Mobile Number</th>
          <th>Age</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            props.rows.map((row, idx)=>{
              return <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.dob}</td>
                <td>{row.aadhar}</td>
                <td>{row.mobile}</td>
                <td>{row.age}</td>
                <td><button id={idx} className='addBtn' onClick={(e)=>{deleteRow(e, row.aadhar)}}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
    </table>
  )
}

export default Table;
