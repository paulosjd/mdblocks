import React, { Component } from 'react';
import { NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Navbar } from 'reactstrap';
import NavDropdownSelect from "../components/nav_dropdown_select"
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";


class TopNav extends Component {

    handleTopicSelection(topic) {
        this.props.setTopic({topicName: topic, allTopics: this.props.allTopics});
        this.props.setPathname()
    }

    handleCategorySelection(category) {
        this.props.setCategory(category);
        this.props.topicsByCategory();
        this.props.showTopicPlaceholder()
    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.topicSlug !== this.props.topicSlug) {
    //         console.log('did upate!!')
    //         this.props.getMarkdownContent(this.props.topicSlug)
    //     }
    // }

    render() {

        const catOptions = this.props.categories.map(cat => {
            return {name: cat, slug: cat.toLowerCase().replace(' ', '_')}
        });

        const categorySelect = () => {
            if (this.props.pathname !== '/') {
                return <NavDropdownSelect
                    selectedOption={this.props.activeCategory}
                    options={catOptions}
                    handleSelection={this.handleCategorySelection.bind(this)}/>
            }
        };

        const topicSelect = () => {
            if (this.props.topicName && this.props.pathname !== '/') {
                return <NavDropdownSelect
                    showTopicPlaceholder={this.props.showTopicPlaceholder}
                    isTopic={true}
                    selectedOption={this.props.topicName}
                    options={this.props.filteredTopics}
                    handleSelection={this.handleTopicSelection.bind(this)}/>
            }
        };

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
                {categorySelect()}
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
        showTopicPlaceholder: state.showTopicPlaceholder,
        pathname: state.pathname
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: (val) => dispatch(actionCreator.setTopic(val)),
        setCategory: (val) => dispatch(actionCreator.setCategory(val)),
        topicsByCategory: () => dispatch(actionCreator.topicsByCategory()),
        showTopicPlaceholder: ()=> dispatch(actionCreator.showTopicPlaceholder()),
        setTopicFromSlug: (slug) => dispatch(actionCreator.setTopicFromSlug(slug)),
        setPathname: () => dispatch(actionCreator.setPathname())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);