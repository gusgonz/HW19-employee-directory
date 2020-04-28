import React from "react";

function Header(props) {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand" href="#">Employee Directory</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown" key="keylee" >
                        <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                            </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button className={(props.currentSort === "name") ? "dropdown-item active" : "dropdown-item"} name="name" onClick={props.handleSort}>Name</button>
                            <button className={(props.currentSort === "email") ? "dropdown-item active" : "dropdown-item"} name="email" onClick={props.handleSort}>Email</button>
                            <button className={(props.currentSort === "country") ? "dropdown-item active" : "dropdown-item"} name="country" onClick={props.handleSort}>Country</button>
                        </div>
                    </li>
                    {
                        (props.currentSort === "") ?
                            ""
                            :
                            (<li className="nav-item">
                                <button className="nav-link primary" onClick={props.clearSort}>Clear Sort</button>
                            </li>)
                    }

                </ul>

                <input
                    className="form-control mr-sm-2"
                    type="search"
                    onChange={props.handleSearch}
                    placeholder="Search"
                    aria-label="Search" />
            </div>
        </nav>
    </div>

    );
};

export default Header;