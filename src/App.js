import './App.css';
import React, { useEffect } from 'react';
import { getEmployees } from './utils/api';
import SearchBar from './components/searchbar'
import Header from './components/header'
import Table from './components/table'

function App() {
  const [employees, setEmployees] = React.useState([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    getEmployees().then((results) => {
      setEmployees(results)
    })
  }, [])
  const visibleEmployees = employees.filter((employee) => {
    const fullName = `${employee.name.first} ${employee.name.last}`.toLowerCase()
    const query = searchQuery.toLowerCase()
    return fullName.includes(query)
  })
  return (
    <div className="App">
      <Header />
      <SearchBar search={searchQuery} handleInputChange={handleSearchChange} />
      {visibleEmployees.map((employee, idx) => {
        return (
          <div key={idx}>
            <img src={employee.picture.thumbnail} ></img>
            

            {employee.name.first} {employee.name.last}
            {employee.phone} 
            {employee.email} 
            {employee.dob.date}
          </div>
        )
      })}
    </div>
  );
}

export default App;
