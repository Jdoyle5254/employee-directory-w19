import React, {useState, useEffect} from "react"
import EmployeeRow from "./EmployeeRow"
import SearchBox from "./SearchBox"

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
    const [users, setUsers] = useState([{
      
    }])
    const [filteredUsers, setFilteredUsers]  = useState([{}])
    var order = 'descend';
    useEffect(() => {
      
      const fetchData = async () => {
          try {
            const response = await fetch ('https://randomuser.me/api/?results=10')
            const data = await response.json()
            console.log("this is the data", data.results)
            setFilteredUsers(data.results)
            setUsers([...data.results])
          } catch(e) {
            console.log(e); 
  
          }
      }
      fetchData()
      
    }, [])

    function handleSearchChange(e) {
      e.preventDefault();
      console.log("event change", e.target.value)
      // const filter = e.target.value
      const newFilteredList = users.filter(user => user.name.first.toLowerCase().indexOf(e.target.value.toLowerCase())  !== -1)
      console.log("the filters", newFilteredList, e.target.value)
     setFilteredUsers(newFilteredList)
     
    }

    /* 
     need to sort by the table headings of name, location, 
     need headings listed to be sorted by? 

     ]
     */

     function handleSort(heading) {
      console.log("1",users , filteredUsers);
      console.log("2",heading);
      console.log("3",useState.order);
      console.log("3",order);

       const sortedUsers = filteredUsers.sort((a, b) => {
         console.log("here", a, b)
         if (order === "ascend") {
            if (heading === "first") {
              return a.name.first.localeCompare(b.name.first);
            }
          } else if (heading === "last") {
            return a.name.last.localeCompare(b.name.last);
          }
          else  { 
            if (heading === "first") {
              return b.name.first.localeCompare(a.name.first)
          } else if (heading === "last") 
          return b.name.last.localeCompare(a.name.last)
          }
          return 0;
        //else
        //  return a[heading]-b[heading]
    
      });

       setUsers({ filteredUsers: sortedUsers }); 
       if (order === "descend") {
         order = "ascend"
      }
      else{
        order = "descend"
      } 
    }
  
    console.log('users1', users)
    useEffect(() => (console.log('users2', users)))
    return (
    
      <div className="container">

        <SearchBox handleSearchChange={handleSearchChange} />
        {/* <h2>{users[0].name.first}</h2> */}
        <table>
          <thead>
            <tr>
              <th> Image</th>
              <th  onClick={() => {handleSort("first")}} > First Name </th>
              <th onClick={() => {handleSort("last")}} > Last Name </th>
              <th > Email </th>
            </tr>

          </thead>
          <EmployeeRow users = {filteredUsers}
          />
        </table>
        </div>
    );
  }
  
  export default Employee;