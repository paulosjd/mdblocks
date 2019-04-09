import React, { Component } from 'react';
import * as actionCreator from "../store/actions/actions";
import {connect} from "react-redux";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import CategoryItemContent from "../components/category_item_content"

class CategoriesIndex extends Component {

    // handleTopicSelection(topic) {
    //     this.props.setTopic(topic);
    // }
    //
    handleCategorySelection(catName) {
        console.log(catName)
        this.props.setCategory(catName);
        this.props.topicsByCategory()
    }

    render() {
        console.log(this.props.filteredTopics)
        return (
            <div className='CategoriesIndexpage' >
            <Container>
            <Row>
            <Col xs="4" >
                <ListGroup>
                    {this.props.categories.map(name => {
                        return (
                        <ListGroupItem
                            className={'cats'} tag="a" key={name}
                            active={name === this.props.activeCategory} action>
                            <CategoryItemContent
                                catName={name}
                                handleClick={this.handleCategorySelection.bind(this)}
                            />
                        </ListGroupItem>)
                    })}
                </ListGroup>
            </Col>
            <Col xs="8">
                <ListGroup>
                    {this.props.filteredTopics.map((obj, ind) => {
                        return (
                            <ListGroupItem
                                tag="a" href={'/topics/' + obj.slug} key={ind}
                                active={this.props.activeTopic === obj.name} action
                            >{obj.name}
                            </ListGroupItem>)
                    })}
                </ListGroup>
            </Col>
            </Row>
            </Container>
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
)(CategoriesIndex);