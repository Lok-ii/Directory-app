import React, { useRef, useState } from 'react';
import "./retrieve.css";
import Table from "../Table/Table";

const Retrieve = () => {
  const searchRef = useRef();
  const [data, setData] = useState([]);

  const searchData = ()=>{
    let value = searchRef.current.value;
    let storageData = JSON.parse(localStorage.getItem("rows"));

    setData(()=>{
      return storageData.filter((item)=>item.aadhar == value);
    });
  }
  return (
    <div className='retrievePage'>
      <p className='retrieveHead'>Retrieve Data</p>
      <div className="searchBox">
        <input type="number" className="search" ref={searchRef} />
        <button className="searchBtn" onClick={searchData}>Search Data</button>
      </div>

      <Table rows={data} setRows={setData} />
    </div>
  )
}

export default Retrieve;
