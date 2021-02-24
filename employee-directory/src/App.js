
import Header from "./components/Header.js"
import SearchBox from "./components/SearchBox"
import Table from "./components/Table"
import Footer from "./components/Footer"
import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    console.log('useEffect')
  
    const fetchData = async () => {
        try {
          const response = await fetch ('https://randomuser.me/api/?results=10')
          const data = await response.json()
          setUsers([...data.results])
        } catch(e) {
          console.log(e); 

        }
    }
    fetchData()
    
  }, [])

  console.log('users1', users)
  useEffect(() => (console.log('users2', users)))
  return (
    <div className="App">
    <Header />
    <SearchBox />
    <Table />
    <Footer />
     </div>
  );
}

export default App;
