import react from "react";
import "./table.css";

import React from "react";

const Table = (props) => {
  const deleteRow = (aadhar) => {
    props.setRows((prev) => {
      let newData = prev.filter((data) => data.aadhar != aadhar);
      localStorage.setItem("rows", JSON.stringify(newData));
      return newData;
    });
  };

  console.log(props.rows);
  return (
    <>
      {props.rows.length === 0 ? (
        <p>No Data</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.dob}</td>
                  <td>{row.aadhar}</td>
                  <td>{row.mobile}</td>
                  <td>{row.age}</td>
                  <td>
                    <button
                      id={idx}
                      className="addBtn"
                      onClick={() => {
                        deleteRow(row.aadhar);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
