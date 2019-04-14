import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

class SearchResults extends React.Component {

    componentDidMount() {
        const text = this.props.match.params.text;
        this.props.setPathname();
        this.props.setSearchRedirect(false);

        console.log(text)
        console.log(this.props)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.topicSlug !== this.props.topicSlug) {
    //         console.log('did upate!!')
    //         this.props.getMarkdownContent(this.props.topicSlug)
    //     }
    // }

    render() {
        // console.log('alltopics:')
        // console.log(this.props.allTopics)
        // console.log('categories:')
        // console.log(this.props.categories)
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
        // topicSlug: state.topicSlug,
        categories: state.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getMarkdownContent: (slug) => dispatch(actionCreator.getMarkdownContent(slug)),
        setCategories: (slug) => dispatch(actionCreator.setCategories(slug)),
        setSearchRedirect: (val) => dispatch(actionCreator.setSearchRedirect(val)),
        setPathname: () => dispatch(actionCreator.setPathname()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);
