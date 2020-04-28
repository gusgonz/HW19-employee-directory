import React from "react";

function Row(props) {
    return (
        <div className="row">
            <div className="col">
                {props.picture ? <img alt="Employee" src={props.picture} /> : <h2>Picture</h2>}
            </div>
            <div className="col">
                {props.name ? <p>{props.name}</p> : <h2>Name</h2>}
            </div>
            <div className="col">
                {props.email ? <p>{props.email}</p> : <h2>Email</h2>}
            </div>
            <div className="col">
                {props.number ? <p>{props.number}</p> : <h2>Number</h2>}
            </div>
            <div className="col">
                {props.country ? <p>{props.country}</p> : <h2>Country</h2>}
            </div>
        </div>
    );
};

export default Row;