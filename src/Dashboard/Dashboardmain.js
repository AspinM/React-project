import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Dashboardmain.css';
import image from '../Images/sideboxlogo.png';
import video from '../Images/Pexels Videos 4562.mp4'


function Dashboardmain() {
    let navigate = useNavigate();

    const home = () => {

        navigate('/dashboard/home')
    }
    const login = () => {
        navigate('/')
    }
    return (
        <>
            <div className='dash-main-box'>
                <div className='head-condent'>
                    <div className='vedio-top'><video src={video} width="250px" autoPlay="true" height="80px"></video></div>
                    <i class="fa-solid fa-house home-icon" onClick={home}></i>
                    <i class="fa-solid fa-right-to-bracket login-icon" onClick={login}></i>
                </div>
                <div className='side-condent'>
                    <div className='nav-buttons'>
                        <img className='logo-image' src={image} alt="" width="250px" height="110px"></img>

                        <Link style={{textDecoration: 'none'}} to="/dashboard/register" > <div className='link-but'> Register</div></Link>
                        <br></br>
                        <Link style={{textDecoration: 'none'}} to="/dashboard/view" ><div className='link-but'>View Student detials</div></Link>
                        <br></br>

                        <Link style={{textDecoration: 'none'}} to="/dashboard/delete" ><div className='link-but'>Delete</div></Link>
                        <br></br>

                        <Link style={{textDecoration: 'none'}} to="/dashboard/update" ><div className='link-but'>Update</div></Link>
                        <br></br>

                        <Link style={{textDecoration: 'none'}} to="/dashboard/viewall"><div className='link-but'>View ALL</div></Link>
                    </div>

                    <div className='change-condent'>
                        <Outlet />


                    </div>


                </div>
            </div>
        </>
    )
}

export default Dashboardmain