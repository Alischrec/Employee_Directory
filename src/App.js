import './App.css';
import React, { useEffect } from 'react';
import { getEmployees } from './utils/api';
import SearchBar from './components/searchbar'

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
      <SearchBar search={searchQuery} handleInputChange={handleSearchChange} />
      {visibleEmployees.map((employee, idx) => {
        return (
          <div key={idx}>
            {/* {employee.picture.thumbnail} */}

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
