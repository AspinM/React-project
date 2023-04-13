import React from 'react'
import Login from './Login/Login';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboardmain from './Dashboard/Dashboardmain'
import Register from './Dashboard/Register';
import View from './Dashboard/View';
import Delete from './Dashboard/Delete';
import Update from './Dashboard/Update';
import Viewall from './Dashboard/Viewall';
import Dashboardhome from './Dashboard/Dashboardhome';
import Dataviewpage from './Dashboard/Dataviewpage';
import Deletedetials from './Dashboard/Deletedetials';



function App() {
  
  return (
    <>
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          
          <Route path='/dashboard' element={<Dashboardmain />} >
            <Route path='register' element={<Register />} />
            <Route path='home' element={<Dashboardhome />} />
            <Route path='view' element={<View />} />
            <Route path='delete' element={<Delete />} />
            <Route path='update' element={<Update />} />
            <Route path='viewall' element={<Viewall />} />
            <Route path='dataview/:id' element={<Dataviewpage />} />
            <Route path='deletedata/:id' element={<Deletedetials />} />

          </Route>   
      </Routes>
    </BrowserRouter >
 </>
  )
}

export default App