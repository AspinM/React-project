import React, { useState } from 'react';
import './Registerstyle.css'

function Register() {
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
    const register = (e) => {
        e.preventDefault();
        alert("Registeration Successfully")
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

        fetch('http://localhost:8081/SCHOOL/post', {  // Enter your IP address here

            method: 'POST',
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
            <div className='stud-main-box '>
                <div className='register-main'>
                    <h1>Student Registeration</h1>

                    <form onSubmit={register}>
                        <label className='first-name-label'>First Name:</label>
                        <input className='first-name-input' type='text' onChange={e => setFirstName(e.target.value)}></input> <br></br>
                        <br></br>
                        <label className='first-name-label'>LastName Name:</label>
                        <input className='Last-name-input' type='text' onChange={e => setLastName(e.target.value)}></input><br></br>
                        <br></br>

                        <label className='first-name-label'>Date of Birth:</label>
                        <input className='date-input' type='Date' onChange={e => setDate(e.target.value)}></input><br></br>
                        <br></br>

                        <label className='first-name-label'>Email:</label>
                        <input className='mail-input' type='email' onChange={e => setMail(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>Mobile No:</label>
                        <input className='mobile-input' type='number' onChange={e => setMobile(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>Gender:</label>
                        <input className='radio-input' type="radio" value={"male"} onChange={e => setGender(e.target.value)}></input>
                        <label >Male</label>
                        <input type="radio" value={"female"} onChange={e => setGender(e.target.value)}></input>
                        <label>Female</label><br></br>
                        <br></br>

                        <label className='first-name-label'>Address:</label>
                        <textarea className='address-input' onChange={e => setAddress(e.target.value)}></textarea><br></br>
                        <br></br>

                        <label className='first-name-label'>City:</label>
                        <input className='city-input' type='text' onChange={e => setCity(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>Pin code:</label>
                        <input className='pincode-input' type='number' onChange={e => setPincode(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>State:</label>
                        <input className='state-input' type='text' onChange={e => setState(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>Country:</label>
                        <input className='country-input' type='text' onChange={e => setCountry(e.target.value)}></input><br></br>
                        <br></br>
                        <label className='first-name-label'>Hobbies:</label>

                        <input className='playing-input' type={'checkbox'} name={"hobbies"} value={'playing,'} onChange={handleCheck} /> playing <br></br>
                        <input className='check-input' type={'checkbox'} name={"hobbies"} value={'dancing,'} onChange={handleCheck} /> dancing<br></br>
                        <input className='check-input' type={'checkbox'} name={"hobbies"} value={'drawing,'} onChange={handleCheck} /> drawing<br></br>
                        <input className='check-input' type={'checkbox'} name={"hobbies"} value={'others,'} onChange={handleCheck} /> others<br></br>
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
                        <select className='select-input' onChange={e => setOption(e.target.value)}>
                            <option hidden>Choose a course</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="BTech">B.Tech</option>
                            <option value="ME">ME</option>
                        </select>
                        <br></br>
                        <br></br>


                        <button className='submit-button'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register