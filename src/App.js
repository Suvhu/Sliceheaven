import {useState} from 'react'
import Home from "./Screens/Home"
import Userlogin from "./Screens/Userlogin"
import Usersignup from "./Screens/Usersignup"
import Adminlogin from "./Screens/Adminlogin"
import Adminsignup from "./Screens/Adminsignup"
import Alert from "./Components/Alert"
import Homeabout from "./Components/Homeabout"

import Aresetpassword from "./Admin/Aresetpassword"
import Aforgotpassword from "./Admin/Aforgotpassword"
import Admindash from './Admin/Admindash'
import Adminorder from './Admin/Adminorder'
import Adminproduct from './Admin/Adminproduct'

import Resetpassword from "./User/Resetpassword"
import Forgotpassword from "./User/Forgotpassword"
import Userdash from './User/Userdash'
import Useraccount from './User/Useraccount'
import Userorder from './User/Userorder'
import Usercart from './User/Usercart'

import Error from "./Components/Error"
import AllState from "./Context/items/AllState";
import AllStateuser from './Context/items/AllStateuser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <AllState>
    <AllStateuser>
   <Router>
    <Alert alert={alert}/>
    <div>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/userlogin' element={<Userlogin showAlert = {showAlert}/>}/>
        <Route exact path ='/usersignup' element={<Usersignup showAlert = {showAlert}/>}/>
        <Route exact path ='/about' element={<Homeabout/>}/>
        <Route exact path ='/resetpassword' element={<Resetpassword showAlert = {showAlert}/>}/>
        <Route exact path ='/forgotpassword/:id/:token' element={<Forgotpassword showAlert = {showAlert}/>}/>
        <Route exact path ='/adminlogin' element={<Adminlogin showAlert = {showAlert}/>}/>
        <Route exact path ='/adminsignup' element={<Adminsignup showAlert = {showAlert}/>}/>
        <Route exact path ='/aresetpassword' element={<Aresetpassword showAlert = {showAlert}/>}/>
        <Route exact path ='/aforgotpassword/:id/:token' element={<Aforgotpassword showAlert = {showAlert}/>}/>
        <Route exact path ='/admindash' element={<Admindash showAlert = {showAlert}/>}/>
        <Route exact path ='/adminorder' element={<Adminorder showAlert = {showAlert}/>}/>
        <Route exact path ='/adminproduct' element={<Adminproduct showAlert = {showAlert}/>}/>
        <Route exact path ='/userdash' element={<Userdash showAlert = {showAlert}/>}/>
        <Route exact path ='/userorder' element={<Userorder showAlert = {showAlert}/>}/>
        <Route exact path ='/usercart' element={<Usercart showAlert = {showAlert}/>}/>
        <Route exact path ='/useraccount' element={<Useraccount showAlert = {showAlert}/>}/>

        <Route exact path ='*' element={<Error />}/>
      
      </Routes>
    </div>
   </Router>
   </AllStateuser>
   </AllState>
   </>
  );
}

export default App;
