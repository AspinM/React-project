import React from 'react'
import './Dashboardhome.css';
import { useEffect } from 'react'
import { useState } from 'react';

function Dashboardhome() {

  const [users, setUsers] = useState([]);
  const [droup, setdroup] = useState([]);
  const [total, settotal] = useState([]);
  const [course, setCourse] = useState([]);


  const fetchdata = async () => {
    return fetch(`http://localhost:8081/SCHOOL/viewall`,
      {
        method: 'Get',
        headers: {
          "Content-type": 'application/json',
          "Accept": 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data);
      })
  }




  const totaldata = async () => {
    return fetch(`http://localhost:8081/SCHOOL/totalStudents`,
      {
        method: 'Get',
        headers: {
          "Content-type": 'application/json',
          "Accept": 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(tit => {
        settotal(tit);

      })
  }


  const coursedetial = async () => {
    fetch(`http://localhost:8081/SCHOOL/courseDetail`,

      {
        method: 'Get',
        headers: {
          "Content-type": 'application/json',
          "Accept": 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(cour => {
        setCourse(cour);
        console.log(cour)
      })
  }


  useEffect(() => {
    fetchdata();
    totaldata();
    coursedetial();
  }, [])

  const droupdown = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8081/SCHOOL/convert?file=${droup}`)
      .then((response) => response.json())

  }






  return (
    <>
      <div className='dash-home'>

        <div className='dash-main'>
          <figure class="pie-chart">

          </figure>

          <div className='boxes'>
            <div className='total'>Total Student {total}</div>
            <div className='mba' >MBA studentds <br></br>{course.MBA}</div>
            <div className='mca'>MCA Students<br></br>{course.MCA}</div>
            <div className='btech'>B.Tech Students<br></br>{course.BTech}</div>
            <div className='be'>ME students<br></br>{course.ME}</div>

          </div>





        </div>

        <div className='droup-down'>
          <form onSubmit={droupdown}>
            <select className='select-input' onChange={e => setdroup(e.target.value)}>
              <option hidden>Choose a file</option>
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="Xls">XLS</option>
              <option value="Xlsx">XLSX</option>
            </select>

            &nbsp;&nbsp; <button type='submit' className="btn btn-success">Click me</button>

          </form>

        </div>

        <div className='tables'>

          <table className='home-main-table'>
            <tbody>
              <tr>
                <th>id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>DateofBirth</th>
                <th>Mail</th>
                <th>Phone No</th>
                <th>Gender</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Pincode</th>
                <th>Hobbies</th>
                <th>Qualification 10</th>
                <th>Qualification 12</th>
                <th>Course</th>


              </tr>
              {users.map((userObj) => (
                <tr>
                  <td key={userObj.id}>{userObj.id}</td>
                  <td key={userObj.id}>{userObj.firstname}</td>
                  <td key={userObj.id}>{userObj.lastname}</td>
                  <td key={userObj.id}>{userObj.dob}</td>
                  <td key={userObj.id}>{userObj.mail}</td>
                  <td key={userObj.id}>{userObj.phone}</td>
                  <td key={userObj.id}>{userObj.gender}</td>
                  <td key={userObj.id}>{userObj.address}</td>
                  <td key={userObj.id}>{userObj.city}</td>
                  <td key={userObj.id}>{userObj.state}</td>

                  <td key={userObj.id}>{userObj.country}</td>
                  <td key={userObj.id}>{userObj.pincode}</td>
                  <td key={userObj.id}>{userObj.hobbies}</td>
                  <td key={userObj.id}>{userObj.qualification10}</td>
                  <td key={userObj.id}>{userObj.qualification12}</td>
                  <td key={userObj.id}>{userObj.courses}</td>



                </tr>
              ))}

            </tbody>
          </table>
        </div>


      </div>


    </>
  )
}

export default Dashboardhome