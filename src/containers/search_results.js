import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { connect } from "react-redux";
import { Spinner } from 'reactstrap';
import * as actionCreator from "../store/actions/actions";

class SearchResults extends React.Component {

    componentDidMount() {
        const text = this.props.match.params.text;
        this.props.setPathname();
        this.props.setSearchRedirect(false);
        this.props.setLoading(true);
        console.log(text)
        this.props.getSearchResults(text)
        console.log(this.props)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className='topic_page'>
                    <Spinner color="secondary" />
                </div>
            );
        }
        return (
            <div className='topic_page'>
                {/*<MarkdownPreview value={this.props.mdContent}/>*/}
                <p>Test</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // mdContent: state.mdContent,
        categories: state.categories,
        isLoading: state.searchTextLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getSearchResults: (text) => dispatch(actionCreator.getSearchResults(text)),
        setCategories: (slug) => dispatch(actionCreator.setCategories(slug)),
        setSearchRedirect: (val) => dispatch(actionCreator.setSearchRedirect(val)),
        setPathname: () => dispatch(actionCreator.setPathname()),
        setLoading: (val) => dispatch(actionCreator.setSearchLoading(val)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);
