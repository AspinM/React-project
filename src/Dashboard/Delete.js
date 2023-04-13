import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import './Delete.css';
import image from '../Images/nodata.webp'

function Delete() {
  const [Idlist, setIdlist] = useState([])
  const [Idname, setIdname] = useState([])
  const navigate = useNavigate();

  const handlechage = (event) => {
    setIdname(event.target.value)
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


  const deleteid = (e) => {
    e.preventDefault();
    // alert(Idname);
    navigate(`/dashboard/deletedata/${Idname}`);
    
  }


  return (

    <>

      <div className='delete-main'>
<label className='delete-label'>Select the Register Number:</label>
        <select value={Idname} onChange={handlechage}>
          <option hidden>choose a id</option>
          {Idlist.map(View => (
            <option value={View.id} key={View.name} >{View.id}</option>
          ))}


        </select>


        <button className='delete-but' type='submit' onClick={deleteid}>click me</button>

        <div className='no-data-image'>
         <img src={image} alt=''></img>

      </div>
      </div>

      


    </>
  )
}

export default Delete