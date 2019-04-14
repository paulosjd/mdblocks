import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import NavDropdownSelect from "../components/nav_dropdown_select"
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";
import TextSearch from "../components/text_search"

class TopNav extends Component {

    handleTextInput(text) {
        this.props.setTextInput(text)
    }

    handleTextSubmit() {
        this.props.setSearchRedirect(true)

        // this.props.fetchTextSearchResults(this.props.textInput.trim())
    }

    resetTextInput() {
        this.props.setTextInput('')
    }

    handleTopicSelection(topic) {
        this.props.setTopic({topicName: topic, allTopics: this.props.allTopics});
        this.props.setPathname()
    }

    handleCategorySelection(category) {
        this.props.setCategory(category);
        this.props.topicsByCategory();
    }

    render() {
        console.log(this.props.pathname)

        if (this.props.searchRedirect) {
            return <Redirect push to={"/search/" + this.props.textInput} />;
        }

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

        const textSearch = (
            <TextSearch
                handleTextChange={this.handleTextInput.bind(this)}
                handleTextSubmit={this.handleTextSubmit.bind(this)}
                resetTextInput={this.resetTextInput.bind(this)}
                textInput={this.props.textInput}
            />);

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
                        atSearchPage={window.location.href.includes('search/')}
                    />
                    {topicSelect()}
                    <Link className="nav_link_index" to="/" exact='true' >Index</Link>
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
        pathname: state.pathname,
        textInput: state.textInput,
        searchRedirect: state.searchRedirect,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: (val) => dispatch(actionCreator.setTopic(val)),
        setCategory: (val) => dispatch(actionCreator.setCategory(val)),
        topicsByCategory: () => dispatch(actionCreator.topicsByCategory()),
        setTopicFromSlug: (slug) => dispatch(actionCreator.setTopicFromSlug(slug)),
        setPathname: (val) => dispatch(actionCreator.setPathname(val)),
        setTextInput: (val) => dispatch(actionCreator.setTextInput(val)),
        fetchTextSearchResults: (val) => dispatch(actionCreator.fetchTextSearchResults(val)),
        setSearchRedirect: (val) => dispatch(actionCreator.setSearchRedirect(val)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);