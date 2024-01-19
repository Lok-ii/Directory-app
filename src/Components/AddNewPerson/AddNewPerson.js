import React, { useEffect, useRef, useState } from "react";
import "./addperson.css";
import Table from "../Table/Table";

const AddNewPerson = () => {
  let currDate = new Date();
  const nameRef = useRef();
  const dateRef = useRef(currDate);
  const aadharRef = useRef();
  const mobileRef = useRef();
  const [ageDifference, setDiff] = useState("");
  const [rows, setRow] = useState([]);
  const [hidden, setHidden] = useState("none");

  useEffect(() => {
    setRow(() => {
      let data = JSON.parse(localStorage.getItem("rows"));
      return data;
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    setRow((prev) => {
      let newData = [
        ...prev,
        {
          name: nameRef.current.value,
          dob: dateRef.current.value,
          aadhar: aadharRef.current.value,
          mobile: mobileRef.current.value,
          age: ageDifference,
        },
      ];
      localStorage.setItem("rows", JSON.stringify(newData));
      return newData;
    });
    setHidden(() => "none");

    nameRef.current.value = "";
    dateRef.current.value = "";
    aadharRef.current.value = "";
    mobileRef.current.value = "";
    setDiff(() => 0);
  };

  const ageCalculator = () => {
    let d1 = new Date();
    let d2 = new Date(dateRef.current.value);
    let year = d1.getFullYear() - d2.getFullYear();
    if (year <= 0) {
      year = 0;
    }
    setDiff(() => year);
  };
  return (
    <div className="addNewPersonPage">
      <p className="addPersonHeading">Add New Person</p>

      <form
        className="getUserDetails"
        onSubmit={addPerson}
        style={{ display: hidden }}
      >
        <p className="formTitle">Fill below form for New Entry</p>
        <div className="addDetails">
          <input type="text" ref={nameRef} className="name" placeholder="Name" required />
          <input
            type="date"
            ref={dateRef}
            className="dob"
            required
            onChange={ageCalculator}
            placeholder="Date of Birth"
          />
          <input
            type="number"
            ref={aadharRef}
            className="aadhar"
            required
            min={100000000000}
            max={999999999999}
            placeholder="Aadhar Number"
          />
          <input
            type="number"
            ref={mobileRef}
            className="mobile"
            required
            min={1000000000}
            max={9999999999}
            placeholder="Mobile Number"
          />
          <input type="number" className="age" 
            placeholder="Age" value={ageDifference} disabled />
          <button type="submit" className="submitButton">
            Add Person
          </button>
        </div>
      </form>

      <Table rows={JSON.parse(localStorage.getItem("rows"))} setRows={setRow} />

      <div className="addBtnContainer">
        <button className="addBtn" onClick={() => setHidden(() => "flex")}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewPerson;
