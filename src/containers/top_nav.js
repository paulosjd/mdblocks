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
        console.log(this.props.topicName)

        const catOptions = this.props.categories.map(cat => {
            return {name: cat, slug: cat.toLowerCase().replace(' ', '_')}
        });

        const topicSelect = () => {
            if (this.props.topicName) {
                return <NavDropdownSelect
                    selectedOption={this.props.topicName}
                    options={this.props.filteredTopics}
                    handleSelection={this.handleTopicSelection.bind(this)}/>
        }};
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
                {topicSelect()}
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        topicName: state.topicName,
        categories: state.categories,
        allTopics: state.allTopics,
        filteredTopics: state.filteredTopics,
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