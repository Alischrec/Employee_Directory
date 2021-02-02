import React from "react";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            <hr className='my-4 underline'></hr>
            </div>
        </div>
    );
}

export default Header;