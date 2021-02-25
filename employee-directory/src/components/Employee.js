import React, {useState, useEffect} from "react"
import EmployeeRow from "./EmployeeRow"

//TODO determine table headers based on information from the employee object:
/* 
TODO 
    user object = 
    Name:  user.name.title, user.name.first. user.name.last
    location: user.location.city  user.location.country
    picutre user.picture.thumbnail
    cell:  user.cell
     email: user.email 

*/
function Employee() {
    const [users, setUsers] = useState([{}])
  
    useEffect(() => {
      
      const fetchData = async () => {
          try {
            const response = await fetch ('https://randomuser.me/api/?results=10')
            const data = await response.json()
            console.log("this is the data", data.results)
            setUsers([...data.results])
          } catch(e) {
            console.log(e); 
  
          }
      }
      fetchData()
      
    }, [])

    /* 
    add function search and filter function should store that in the filtered
    users state and pass that to employee row
    use .sort    .filter 
    always want to pass employee row the filtered users 
    */
  
    console.log('users1', users)
    useEffect(() => (console.log('users2', users)))
    return (
    
      <div className="container">
        {/* <h2>{users[0].name.first}</h2> */}
        <table>
          <thead>
            <tr>
              <th> First Name </th>
              <th> Last Name </th>
              <th>  Email </th>
            </tr>

          </thead>
          <EmployeeRow users = {users} />
        </table>
        </div>
    );
  }
  
  export default Employee;