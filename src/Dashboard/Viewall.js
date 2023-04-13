import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import './Viewall.css'


function Viewall() {

  const [userlist, setUserList] = useState([]);
  const [firstdate, setFirstDate] = useState();
  const [seconddate, setSecondDate] = useState();



  const columns = [
    { dataField: 'id', text: 'ID', sort: true },
    { dataField: 'firstname', text: 'firstname', sort: true },
    { dataField: 'lastname', text: 'lastName' },
    { dataField: 'mail', text: 'mail' },
    { dataField: 'dob', text: 'DataOfBirth' },
    { dataField: 'phone', text: 'Phone' },
    { dataField: 'gender', text: 'Gender' },
    { dataField: 'address', text: 'Address' },
    { dataField: 'city', text: 'City' },
    { dataField: 'state', text: 'State' },
    { dataField: 'country', text: 'Country' },
    { dataField: 'pincode', text: 'PinCode' },
    { dataField: 'hobbies', text: 'Hobbies' },
    { dataField: 'qualification10', text: 'Qualification10', },
    { dataField: 'qualification12', text: 'Qualification12' },
    { dataField: 'courses', text: 'Courses' },
  ]



  const pagination = paginationFactory({
    // page: 2,
    pageStartIndex: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    sizePerPageList: [
      {
        text: '2', value: 2
      },
      {
        text: '3', value: 3
      },
      {
        text: '4', value: 4
      },
      {
        text: '5', value: 5
      },
      {
        text: '8', value: 8
      },
      {
        text: '10', value: 10
      },
      {
        text: '15', value: 15
      },
      {
        text: '20', value: 20
      },
      {
        text: '25', value: 25
      },
      {
        text: '30', value: 30
      },
      {
        text: '35', value: 35
      },
      {
        text: '40', value: 40
      }
    ],


    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizeperpage', sizePerPage)
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizeperpage', sizePerPage)
    }

  })



  useEffect(() => {
    fetch('http://localhost:8081/SCHOOL/viewall')
      .then(response => response.json())
      .then(result => setUserList(result))
      .catch(error => console.log(error))

  }, [])

  const filter = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8081/SCHOOL/dob?start=${firstdate}&end=${seconddate}`)
      .then(response => response.json())
      .then(result => setUserList(result))
      .catch(error => console.log(error))
  }



  return (


    <>



      <div class="view-all-main ">
        <label className='viewall-label'>View All Detials</label>
        <div className='filter'>
          <form onSubmit={filter}>
            <label>Filter by Date:</label>
            <input type='date' onChange={e => setFirstDate(e.target.value)}></input>
            &nbsp;<input type='date' onChange={e => setSecondDate(e.target.value)}></input>
            &nbsp; &nbsp;<button type='submit' className="btn btn-success">click me</button>
          </form>
        </div>
        <div className='viewall-condent'>


          <BootstrapTable classes='w-auto' bootstrap4 keyField='id'
            columns={columns}

            data={userlist}
            pagination={pagination} striped
            hover
            condensed  />
        </div>
      </div>
    </>

  )
}

export default Viewall




































































// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react';
// import './Viewall.css'

// function Viewall() {
//   const [users, setUsers] = useState([])

//   const fetchdata = () => {
//     return fetch(`http://localhost:8081/SCHOOL/viewall`,
//       {
//         method: 'Get',
//         headers: {
//           "Content-type": 'application/json',
//           "Accept": 'application/json'
//         }
//       })
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data);
//       })
//   }


//   useEffect(() => {
//     fetchdata();
//   }, [])


//   return (

//     <>
//       <div className='viewall-main'>

//         <table className='viewall-table'>
//           <tbody>
//             <tr>
//               <th>id</th>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Date of Birth</th>
//               <th>Mail</th>
//               <th>Phone No</th>
//               <th>Gender</th>
//               <th>Address</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Country</th>
//               <th>Pin code</th>
//               <th>Hobbies</th>
//               <th>Qualification 10</th>
//               <th>Qualification 12</th>
//               <th>Course</th>


//             </tr>
//             {users.map((userObj) => (
//               <tr>
//                 <td key={userObj.id}>{userObj.id}</td>
//                 <td key={userObj.id}>{userObj.firstname}</td>
//                 <td key={userObj.id}>{userObj.lastname}</td>
//                 <td key={userObj.id}>{userObj.dob}</td>
//                 <td key={userObj.id}>{userObj.mail}</td>
//                 <td key={userObj.id}>{userObj.phone}</td>
//                 <td key={userObj.id}>{userObj.gender}</td>
//                 <td key={userObj.id}>{userObj.address}</td>
//                 <td key={userObj.id}>{userObj.city}</td>
//                 <td key={userObj.id}>{userObj.state}</td>

//                 <td key={userObj.id}>{userObj.country}</td>
//                 <td key={userObj.id}>{userObj.pincode}</td>
//                 <td key={userObj.id}>{userObj.hobbies}</td>
//                 <td key={userObj.id}>{userObj.qualification10}</td>
//                 <td key={userObj.id}>{userObj.qualification12}</td>
//                 <td key={userObj.id}>{userObj.courses}</td>
//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
//     </>



//   )
// }

// export default Viewall