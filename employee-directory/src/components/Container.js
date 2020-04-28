import React, { Component } from "react";
import Header from "./Header";
import Row from "./Row";
import getEmployees from "../utils/getEmployees";

class Container extends Component {
    state = {
        currentEmp: [],
        allEmp: [],
        currentSort: ""
    };

    componentDidMount() {
        getEmployees().then(response => {
            console.log(response);
            let employees = response.data.results.map(result => {
                return {
                    name: `${result.name.first} ${result.name.last}`,
                    email: result.email,
                    country: result.location.country,
                    picture: result.picture.thumbnail,
                    number: result.cell
                }
            });
            this.setState({ ...this.state, allEmp: employees, currentEmp: employees });
        });
    };

    handleSort = event => {
        let sort = event.target.name;
        let sortedEmployees = [];
        console.log(sort);
        if (this.state.currentSort === sort) {
            sortedEmployees = employeeSort(this.state.currentEmp, sort, true);
        } else {
            sortedEmployees = employeeSort(this.state.currentEmp, sort);
        }

        this.setState({ ...this.state, currentEmp: sortedEmployees, currentSort: sort });
    };

    handleSearch = event => {
        event.preventDefault();
        let searchTerm = event.target.value.toUpperCase();
        let newState = this.state.allEmp.filter(employee => {
            return (employee.name.toUpperCase().includes(searchTerm) || employee.country.toUpperCase().includes(searchTerm) || employee.number.includes(searchTerm) || employee.email.toUpperCase().includes(searchTerm));
        });
        this.setState({ ...this.state, currentEmp: newState });
    };

    clearSort = event => {
        this.setState({ ...this.state, currentSort: "", currentEmp: this.state.allEmp });
    }


    render() {
        return (
            <div>
                <Header handleSearch={this.handleSearch} handleSort={this.handleSort} currentSort={this.state.currentSort} clearSort={this.clearSort} />
                <div className="container-fluid">
                    <Row name="" picture="" email="" country="" number="" />
                    {createRows(this.state.currentEmp)};
                </div>
            </div>
        );
    };
};

function createRows(employees) {
    return employees.map(employee => {
        return <Row name={employee.name} picture={employee.picture} email={employee.email} country={employee.country} number={employee.number} />;
    });
};

function employeeSort(employees, sort, inv = false) {
    let sortedEmployees = [];

    if (inv) {
        sortedEmployees = employees.reverse();
    } else {
        switch (sort) {
            case "name":
                sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));
                break;

            case "email":
                sortedEmployees = employees.sort((a, b) => a.email.localeCompare(b.email));
                break;

            case "country":
                sortedEmployees = employees.sort((a, b) => a.country.localeCompare(b.country));
                break;
            default:
                sortedEmployees = employees;
        }
    }
    return sortedEmployees;
};


export default Container;