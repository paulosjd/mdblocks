import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { connect } from "react-redux";
import Home from "./containers/home"
import TopNav from "./containers/top_nav";
import TopicPage from './containers/topic_page'
import * as actionCreator from "./store/actions/actions";

class App extends Component {

    componentDidMount() {
        this.props.fetchCategoriesData()
        }

    render() {
      return (
        <Router>
        <div className="App">
            <TopNav/>
            <Route path="/" exact strict
                   render={(props) => <Home {...props} />}
            />
            <Route path="/about" exact strict render={
              () => {
                return ( <h1>Welcome About</h1>);
              }
            }/>
            <Route
                path="/topics/:slug" exact strict
                render={(props) => <TopicPage {...props} />}
            />
        </div>
      </Router>
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
        fetchCategoriesData: () => dispatch(actionCreator.setCategories()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);