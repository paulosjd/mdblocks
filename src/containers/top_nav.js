import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Navbar } from 'reactstrap';
import NavDropdownSelect from "../components/nav_dropdown_select"
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";


class TopNav extends Component {

    handleTopicSelection(topic) {
        this.props.setTopic(topic);
    }

    handleCategorySelection(category) {
        this.props.setCategory(category);
        this.props.topicsByCategory()
    }

    render() {
        const catOptions = this.props.categories.map(cat => {
            return {name: cat, slug: cat.toLowerCase().replace(' ', '_')}
        });

        // ROUTER SELECT OPTION NAVBAR LIKE LINKS

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
                    handleSelection={this.handleCategorySelection.bind(this)}
                />
                <NavDropdownSelect
                    selectedOption={this.props.activeTopic}
                    options={this.props.topics}
                    handleSelection={this.handleTopicSelection.bind(this)}
                />
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        allTopics: state.allTopics,
        filteredTopics: state.filteredTopics,
        activeTopic: state.activeTopic,
        activeCategory: state.activeCategory,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: (val) => dispatch(actionCreator.setTopic(val)),
        setCategory: (val) => dispatch(actionCreator.setCategory(val)),
        topicsByCategory: () => dispatch(actionCreator.topicsByCategory()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);