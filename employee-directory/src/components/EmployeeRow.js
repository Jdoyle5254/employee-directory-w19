import React from "react"

function EmployeeRow(props) {
    
    return (

        <tbody>
         {props.users.map(user => {
             return (
            
            <tr key={user.login.uuid}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
            </tr>

         )})}

        </tbody>
    )

}


export default EmployeeRow; 