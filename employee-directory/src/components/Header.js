import React from "react"

function Header() {
    const date = new Date ()
        const hours = date.getHours()
        let timeOfDay
        if (hours <12) {
          timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
        } else {
          timeOfDay = "night"
        }
    return (
        
          <div>
             
            <h1 >Good {`${timeOfDay}`} Employee Directory Dashboard</h1>
      
            
          </div>
        );
      }
      
      export default Header; 