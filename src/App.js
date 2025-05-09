import EmployeeComponent from "./Components/EmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListEmployee from "./Components/ListEmployee";

import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  return (
    
    <>
     <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListEmployee/>}></Route>
      <Route path='/employees' element={<ListEmployee/>}></Route>
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

      {/* <Route path="/update-employee/:id" element={<EmployeeComponent/>}/> */}
      <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
      
      
   </Routes>



    </BrowserRouter>

    
    </>

      );
}

export default App;
