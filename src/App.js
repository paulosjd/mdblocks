import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { connect } from "react-redux";
import TopNav from "./containers/top_nav";
import TopicPage from './containers/topic_page'
import * as actionCreator from "./store/actions/actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicSegments: '',
            categories: [],
            activeCategory: '',
            allTopics: [],
            filteredTopics: [],
            activeTopic: '',
        };
    }

    componentDidMount() {
        this.props.setCategories()
        }

    getTopicSegments() {
        // let url = `http://127.0.0.1:8000/api/topics/${this.state.activeTopic}`;
        let url = `http://127.0.0.1:8000/api/topics/py_async`;
        let topicSegments = '';
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                obj.forEach(obj => topicSegments = topicSegments + obj.content)
                this.setState({topicSegments})});
    }

    handleTopicSelection(activeTopic) {
        this.setState({activeTopic}, this.getTopicSegments)
    }

    topicsByCategory() {
        const filtered = this.state.allTopics.filter(
            topic => topic.catName === this.state.activeCategory);
        const filteredTopics = filtered.topics ? filtered.topics :[];
        this.setState({filteredTopics});
    }

    // set up redux and redux thunk - have these .. how to not have to keep pass props/handler funcs etc.

    handleCategorySelection(activeCategory) {
        this.setState({activeCategory}, this.topicsByCategory);
    }

    render() {
        console.log(this.state.categories)
      return (
        <Router>
        <div className="App">
            <TopNav
                categories={this.state.categories}
                activeCategory={this.state.activeCategory}
                topics={this.state.filteredTopics}
                activeTopic={this.state.activeTopic}
                handleCategorySelection={this.handleCategorySelection.bind(this)}
                handleTopicSelection={this.handleTopicSelection.bind(this)}
            />
            <Route path="/" exact strict render={
              () => {
                return ( <h1>Welcome Home</h1>);
              }
            }/>
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
        allTopics: state.allTopics
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategories: () => dispatch(actionCreator.setCategories()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
