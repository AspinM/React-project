import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './View.css';


const View = props => {

  const [, setState] = useState({})
  const [Idlist, setIdlist] = useState([])
  const [Idname, setIdname] = useState([])
  const navigate = useNavigate();

  const handlechage = (event) => {
    setIdname(event.target.value);
    const { value } = event.target;
    setState(prevstate => ({
      ...prevstate,
      value
    }));
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/SCHOOL/viewall`);
      const newData = await response.json();
      setIdlist(newData);
      console.log(response);

    };
    fetchData();
  }, [])


  const viewid = (e) => {
    e.preventDefault();
    // alert(Idname)
    navigate(`/dashboard/dataview/${Idname}`)
  }


  return (

    <>
      <div className='view-main-box'>

        <label className='enter-reg'>Enter the Register Number:</label>

        <select value={Idname} onChange={handlechage}>
          <option hidden>choose an id</option>
          {Idlist.map(View => (
            <option value={View.id} key={View.name} >{View.id}</option>
          ))}
        </select>
        <button type='submit' onClick={viewid} className='view-click'>click me</button>
        <div className='nodatapage'>

        </div>
      </div>


    </>



  )
}

export default View