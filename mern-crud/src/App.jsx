import React from 'react'
import { Route , Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser';
import Users from './Users';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Users/>}></Route>
    <Route path='/create' element={<CreateUser/>}></Route>
    <Route path='/update' element={<UpdateUser/>}></Route>
   </Routes>
    </>
  )
}

export default App
