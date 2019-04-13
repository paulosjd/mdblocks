import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import NavDropdownSelect from "../components/nav_dropdown_select"
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";
import TextSearch from "../components/text_search"

class TopNav extends Component {

    handleTopicSelection(topic) {
        this.props.setTopic({topicName: topic, allTopics: this.props.allTopics});
        this.props.setPathname()
    }

    handleCategorySelection(category) {
        this.props.setCategory(category);
        this.props.topicsByCategory();
    }

    render() {

        const catOptions = this.props.categories.map(cat => {
            return {name: cat, slug: cat.toLowerCase().replace(' ', '_')}
        });

        const topicSelect = () => {
            if (this.props.topicName && this.props.pathname !== '/') {
                return <NavDropdownSelect
                    isTopic={true}
                    selectedOption={this.props.topicName}
                    options={this.props.filteredTopics}
                    handleSelection={this.handleTopicSelection.bind(this)}/>
            }
        };

        const textSearch = <TextSearch />;

        if (this.props.pathname !== '/') {
            return (
                <Navbar color="light" light expand="md">
                    {/*<Link to="/about" >*/}
                    {/*<button type="button">About</button>*/}
                    {/*</Link>*/}
                    {/*<NavLink to="/user/peter" exact activeStyle={*/}
                    {/*{ color:'green' }*/}
                    {/*}>User Peter</NavLink>*/}
                    <NavDropdownSelect
                        selectedOption={this.props.activeCategory}
                        options={catOptions}
                        handleSelection={this.handleCategorySelection.bind(this)}
                    />
                    {topicSelect()}
                    <Link className="nav_link_index" to="/" exact activeStyle={
                        { color:'green' }
                    }>Index</Link>
                    {textSearch}
                </Navbar>
            )
        } else return (
            <Navbar color="light" light expand="md">
                {textSearch}
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicName: state.topicName,
        categories: state.categories,
        allTopics: state.allTopics,
        filteredTopics: state.filteredTopics,
        activeCategory: state.activeCategory,
        pathname: state.pathname
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: (val) => dispatch(actionCreator.setTopic(val)),
        setCategory: (val) => dispatch(actionCreator.setCategory(val)),
        topicsByCategory: () => dispatch(actionCreator.topicsByCategory()),
        setTopicFromSlug: (slug) => dispatch(actionCreator.setTopicFromSlug(slug)),
        setPathname: () => dispatch(actionCreator.setPathname())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);