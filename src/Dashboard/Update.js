import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Update.css';

function Update() {
  const [Idlist, setIdlist] = useState([])
  const [Idname, setIdname] = useState([])
  const [users, setUsers] = useState([])


  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Date, setDate] = useState('');
  const [Mail, setMail] = useState('');

  const [Mobile, setMobile] = useState('');
  const [Gender, setGender] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [State, setState] = useState('');
  const [Country, setCountry] = useState('');
  const [hobbies, sethobbies] = useState([]);
  const [value, setOption] = useState('');
  const [Board, setBoard] = useState('');
  const [Percentage, setPercentage] = useState('');
  const [Passing, setPassing] = useState('');
  const [Boardhr, setBoardhr] = useState('');
  const [Percentagehr, setPercentagehr] = useState('');
  const [Passinghr, setPassinghr] = useState('');
  const handleCheck = (event) => {
    var permissions_array = [...hobbies];
    if (event.target.checked) {
      permissions_array = [...hobbies, event.target.value];
    } else {
      permissions_array.splice(hobbies.indexOf(event.target.value), 1);
    }
    sethobbies(permissions_array);

  };

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


  const viewid = (e) => {
    e.preventDefault();
    // alert(Idname);
    fetch(`http://localhost:8081/SCHOOL/registerget?id=${Idname}`,
      {
        method: 'Get',
        headers: {
          "Content-type": 'application/json',
          "Accept": 'application/json'
        }
      }, [])
      .then(response => {
        return response.json()


      })
      .then(data => {
        setUsers(data);
      })

  }
  const update = (e) => {
    e.preventDefault();
    console.log(Firstname);
    console.log(Lastname);
    console.log(Date);
    console.log(Mobile);
    console.log(Gender);
    console.log(Address);
    console.log(City);
    console.log(Country);
    console.log(Pincode);
    console.log(State);
    console.log(hobbies);
    console.log(value);
    let qualification = ["Board:" + Board, "Passing:" + Passing, "Percentage:" + Percentage];
    let qualificationhr = ["Board:" + Boardhr, "Passing:" + Passinghr, "Percentage:" + Percentagehr];
    console.log(qualification);
    console.log(qualificationhr);

    fetch(`http://localhost:8081/SCHOOL/update?id=${Idname}`, {  // Enter your IP address here

      method: 'PUT',
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        firstname: Firstname,
        lastname: Lastname,
        dob: Date,
        mail: Mail,
        gender: Gender,
        address: Address,
        city: City,
        phone: Mobile,
        hobbies: hobbies,
        pincode: Pincode,
        state: State,
        country: Country,
        qualification10: qualification,
        qualification12: qualificationhr,
        courses: value
      })

    })

  }

  return (

    <>
      <div className='update-main'>

        <div className='update-section'>
          <label className='update-label'>Select the Register Number:</label>
          <select value={Idname} onChange={handlechage}>
            <option hidden>choose a id</option>
            {Idlist.map(View => (
              <option value={View.id} key={View.name} >{View.id}</option>
            ))}
          </select>


          <button className='submit-button' type='submit' onClick={viewid}>click me</button>
        </div>

        <div >
          <form onSubmit={update}>
            <label className='first-name-label'>First Name:</label>
            <input className='first-name-input' onChange={e => setFirstName(e.target.value)} defaultValue={users.firstname} type='text' ></input> <br></br>

            <br></br>
            <label className='first-name-label'>LastName Name:</label>
            <input className='Last-name-input' onChange={e => setLastName(e.target.value)} type='text' defaultValue={users.lastname} ></input><br></br>
            <br></br>

            <label className='first-name-label'>Date of Birth:</label>
            <input className='date-input' type='Date' defaultValue={users.dob} onChange={e => setDate(e.target.value)}></input><br></br>
            <br></br>

            <label className='first-name-label'>Email:</label>
            <input className='mail-input' type='email' defaultValue={users.mail} onChange={e => setMail(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Mobile No:</label>
            <input className='mobile-input' type='number' defaultValue={users.phone} onChange={e => setMobile(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Gender:</label>
            <input className='radio-input' type="radio" Value={"male"} onChange={e => setGender(e.target.value)}></input>
            <label >Male</label>
            <input type="radio" value={"female"} onChange={e => setGender(e.target.value)}></input>
            <label>Female</label><br></br>
            <br></br>

            <label className='first-name-label'>Address:</label>
            <textarea className='address-input' defaultValue={users.address} onChange={e => setAddress(e.target.value)}></textarea><br></br>
            <br></br>

            <label className='first-name-label'>City:</label>
            <input className='city-input' type='text' defaultValue={users.city} onChange={e => setCity(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Pin code:</label>
            <input className='pincode-input' type='number' defaultValue={users.pincode} onChange={e => setPincode(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>State:</label>
            <input className='state-input' type='text' defaultValue={users.state} onChange={e => setState(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Country:</label>
            <input className='country-input' type='text' defaultValue={users.country} onChange={e => setCountry(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Hobbies:</label>

            <input className='playing-input' type={'checkbox'} name={"hobbies"} value={'playing'} onChange={handleCheck} /> playing <br></br>
            <input className='check-input' type={'checkbox'} name={"hobbies"} value={'dancing'} onChange={handleCheck} /> dancing<br></br>
            <input className='check-input' type={'checkbox'} name={"hobbies"} value={'drawing'} onChange={handleCheck} /> drawing<br></br>
            <input className='check-input' type={'checkbox'} name={"hobbies"} value={'others'} onChange={handleCheck} /> others<br></br>
            <br></br>
            <label className='first-name-label'>Qualification:</label>
            <label className='serial-no'>Sl.No</label>
            <label className='exam-ination'>Examination</label>
            <label className='exam-ination'>Board</label>
            <label className='exam-ination'>Percentage</label>
            <label className='exam-ination'>Year of passing</label> <br></br>
            <br></br>
            <label className='serial-no1'>1</label>
            <label className='serial-no'>class X</label>




            <input className='qual-inputs' type='text' onChange={e => setBoard(e.target.value)}></input>
            <input className='qual-input' type='text' onChange={e => setPercentage(e.target.value)}></input>
            <input className='qual-input' type='text' onChange={e => setPassing(e.target.value)}></input><br></br>
            <br></br>

            <label className='serial-no1'>2</label>
            <label className='serial-no'>class XII</label>
            <input className='qual-input' type='text' onChange={e => setBoardhr(e.target.value)}></input>
            <input className='qual-input' type='text' onChange={e => setPercentagehr(e.target.value)}></input>
            <input className='qual-input' type='text' onChange={e => setPassinghr(e.target.value)}></input><br></br>
            <br></br>
            <label className='first-name-label'>Address:</label>
            <select className='select-input' defaultValue={users.courses} onChange={e => setOption(e.target.value)}>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="ME">B.Tech</option>
            </select>
            <br></br>
            <br></br>
            <button className='update-button'>Update</button>
          </form>
        </div>

      </div>


    </>





  )
}

export default Update