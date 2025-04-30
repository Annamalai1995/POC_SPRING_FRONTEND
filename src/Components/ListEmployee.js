import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployee = () => {
        

const [employees,setEmployees]=useState([])
const navigator=useNavigate();

useEffect(
    () =>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
        
    },[]
)
function addNewEmployee()
{
    navigator('/add-employee')
    
    
}
    
    
  return (
    <div className="container">
        <h2>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-border'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr keys={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee