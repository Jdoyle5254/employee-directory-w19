import React from "react"

function EmployeeRow(props) {
    
    return (

        <tbody>
         {props.users[0] !== undefined && props.users[0].login !== undefined ? (
             props.users.map(user => {
             return (
                
            <tr key={user.login.uuid}>
                <td><img src={user.picture.thumbnail} alt={user.name.first}/></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
            </tr>

         ); })): (<> </>)}

        </tbody>
    )

}


export default EmployeeRow; 