import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import './Dataviewpage.css'

const Dataviewpage = () => {


    let prams = useParams();
    const [users, setUsers] = useState([])


    fetch(`http://localhost:8081/SCHOOL/registerget?id=${prams.id}`,
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

    return (

        <>
        <div className='data-view-main'>
        <table className='data-view-box'>
                <tr>
                    <th>ID</th>
                    <td>{users.id}</td>
                </tr>
                <tr>
                    <th>FirstName</th>
                    <td>{users.firstname}</td>
                </tr>
                <tr>
                    <th>LastName</th>
                    <td>{users.lastname}</td>
                </tr>
                <tr>
                    <th>Mail</th>
                    <td>{users.mail}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{users.gender}</td>
                </tr>
                <tr>
                    <th>Phone NO</th>
                    <td>{users.phone}</td>
                </tr>
                <tr>
                    <th>Date of Birth</th>
                    <td>{users.dob}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{users.address}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{users.city}</td>
                </tr>
                <tr>
                    <th>State</th>
                    <td>{users.state}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{users.country}</td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>{users.hobbies +","}</td>
                </tr>
                <tr>
                    <th>Qualification 10</th>
                    <td>{users.qualification10 +","}</td>
                </tr>
                <tr>
                    <th>Qualification 12</th>
                    <td>{users.qualification12 +","}</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td>{users.courses}</td>
                </tr>
               
            </table>


        </div>
           
        

        </>



    )
}

export default Dataviewpage