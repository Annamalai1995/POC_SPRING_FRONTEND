import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployee = () => {
        

const [employees, setEmployees] = useState([]);

const navigator=useNavigate();

useEffect(
    () =>
        {
            getAllEmployees();
        
    },[]
)

function getAllEmployees()
{
 listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
       
}
    

function addNewEmployee()
{
    navigator('/add-employee')
    
    
}
function updateEmployee(id)
{
    navigator(`/update-employee/${id}`)
}   
function removeEmployee(id)
{
    console.log(id);
    deleteEmployee(id).then((response)=>{
        getAllEmployees();


    }).catch(error => {
        console.error(error);
    })

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
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info'onClick={()=>updateEmployee(employee.id)}>update</button>
                                <button className='btn btn-secondary'onClick={()=>removeEmployee(employee.id)}
                                    style={{marginLeft:"20px"}}>Delete
                                    </button>
                            </td>

          
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}


export default ListEmployee 