import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Navbar } from 'reactstrap';
import NavDropdownSelect from "../components/nav_dropdown_select"


class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 3
        };
    }

    render() {
        const catOptions = this.props.categories.map(cat => {
            return {name: cat, slug: cat.toLowerCase().replace(' ', '_')}
        });
        return (
            <Navbar color="light" light expand="md">
                <li>
                    <NavLink to="/" exact activeStyle={
                        { color:'green' }
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeStyle={
                        { color:'green' }
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/user/john" exact activeStyle={
                        { color:'green' }
                    }>User John</NavLink>
                </li>
                <li>
                    <NavLink to="/user/peter" exact activeStyle={
                        { color:'green' }
                    }>User Peter</NavLink>
                </li>
                <NavDropdownSelect
                    selectedOption={this.props.activeCategory}
                    options={catOptions}
                    handleSelection={this.props.handleCategorySelection}
                />
                <NavDropdownSelect
                    selectedOption={this.props.activeTopic}
                    options={this.props.topics}
                    handleSelection={this.props.handleTopicSelection}
                />
            </Navbar>
        );
    }
}

export default TopNav;