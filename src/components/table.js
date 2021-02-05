import React from "react";

function Table({ visibleEmployees }) {
    return (
        <table className="table table-striped table-hover table-fluid">

            <thead >
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>

                {visibleEmployees.map((employee, idx) => {
                    // console.log(employee)
                    return (<tr key={idx}>
                        <td>
                            <img src={employee.picture.thumbnail} alt='employee thumbnail' ></img>
                        </td>
                        <td> {employee.name.first} {employee.name.last} </td>
                        <td> {employee.phone} </td>
                        <td> {employee.email} </td>
                        <td> {employee.dob.date} </td>
                    </tr>)

                })}

            </tbody>

        </table>
    )
}


export default Table;