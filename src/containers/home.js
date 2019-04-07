import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import ListItemContent from "../components/list_item_content"


class Home extends Component {

    // handleTopicSelection(topic) {
    //     this.props.setTopic(topic);
    // }
    //
    // handleCategorySelection(category) {
    //     this.props.setCategory(category);
    //     this.props.topicsByCategory()
    // }

    render() {
        console.log(this.props.categories)
        return (
            <div className='homepage' >
            <Col md={4}>
                <ListGroup>
                    {this.props.categories.map(name => {
                        return (
                        <ListGroupItem tag="a" key={name} active={name === this.props.activeCategory}
                                       value={name} action>
                            <ListItemContent catName={name}/>
                        </ListGroupItem>)
                    })}


                    {/*<ListGroupItem  tag="a" href="#" action>Cras justo odio</ListGroupItem>*/}
                    {/*<ListGroupItem active={false} tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>*/}
                    {/*<ListGroupItem active={true} tag="a" href="#" action>Morbi leo risus</ListGroupItem>*/}
                    {/*<ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>*/}
                    {/*<ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>*/}
                </ListGroup>
            </Col>
            <Col md={8} />
            </div>
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
)(Home);