import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import googleimg from '../Images/google.webp';
import facebookimg from '../Images/facebook.png'





function Login() {
    const navigate = useNavigate();

    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = (e) => {

        e.preventDefault();
        console.log("username" + Username, "password" + password);
        fetch(`http://localhost:8081/SCHOOL/validating?username=${Username}&password=${password}`,
            {
                mathod: 'Get',
                headers: {
                    "Content-type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            .then(async response => {

                const data = await response.json();
                console.log(data);
                if (!response.ok) {
                    alert("Enter the valid Input")

                }
                else {
                    alert("successfully Login")
                    navigate("dashboard/home")
                }
            })


    }
    return (

        <div className='loginmain'>


            <div className='loginImage'>

            </div>
            <div className='loginDetials'>
                <h2 className='login-txt'>Login</h2>

                <form onSubmit={handlesubmit}>

                    <input className='user-input' placeholder='USER NAME' onChange={e => setUserName(e.target.value)}></input> <br></br>

                    <input className='password-input' placeholder='PASSWORD' type={'password'} onChange={e => setPassword(e.target.value)}></input><br></br>
                    <p className='for-get'> Forget Password?</p>
                    <button className='submit-but'>Login</button>

                    <p className='dont-have'>Doesn't have any account yet?<span>Sign up</span> </p>
                    <div className='images'>
                    <img src={googleimg} alt='' width="80px" height="50px"></img>
                    <img src={facebookimg} alt='' width="80px" height="50px"></img>
                </div>
                </form>

                

            </div>


        </div>



    )
}

export default Login