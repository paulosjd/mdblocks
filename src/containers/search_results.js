import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import * as actionCreator from "../store/actions/actions";

class SearchResults extends React.Component {

    componentDidMount() {
        this.props.setSearchLoading()
        this.props.setSearchRedirect(false);
        this.props.getSearchResults(this.props.match.params.text);
    }

    // may need componenetdidupdate to see if new search made



    render() {
        if (this.props.isLoading) {
            return (
                <div className='topic_page'>
                    <Spinner color="secondary" />
                </div>
            );
        }
        // props.searchResults
        {/*<div className='topic_page'>*/}
        {/*/!*<MarkdownPreview value={this.props.mdContent}/>*!/*/}
        {/*<p>Test</p>*/}
        {/*</div>*/}
        if (this.props.searchResults.length > 0) {
            return (
                <div className='topic_page'>
                <ListGroup>
                    {this.props.searchResults.map((obj, ind) => {
                        return (
                            <ListGroupItem
                                tag="a" key={ind}
                                active={false} action
                            >{obj.content}
                            </ListGroupItem>)
                    })}
                </ListGroup></div>)
        } else return <div className='topic_page'><p>No results</p></div>




    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        isLoading: state.searchTextLoading,
        searchResults: state.searchResults,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSearchResults: (text) => dispatch(actionCreator.getTextSearchResults(text)),
        setCategories: (slug) => dispatch(actionCreator.setCategories(slug)),
        setSearchRedirect: (val) => dispatch(actionCreator.setSearchRedirect(val)),
        setPathname: () => dispatch(actionCreator.setPathname()),
        setSearchLoading: () => dispatch(actionCreator.setSearchLoading()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);
