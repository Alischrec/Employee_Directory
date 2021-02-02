import React from "react";

function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <th scope="row"></th>
                    <td> {props.employee.picture.thumbnail} </td>
                    <td> {props.employee.name.first} {props.employee.name.last}</td>
                    <td> {props.employee.phone}</td>
                    <td> {props.employee.email}  </td>
                    <td>  {props.employee.dob.date} </td> */}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;