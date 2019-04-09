import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import Route from "../App";

class TopicPage extends React.Component {

    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.props.setTopicFromSlug(slug);
        this.props.getMarkdownContent(slug);
    }

    render() {
        return (
            <div className='topic_page'>
            <MarkdownPreview value={this.props.mdContent}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mdContent: state.mdContent,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMarkdownContent: (slug) => dispatch(actionCreator.getMarkdownContent(slug)),
        setTopicFromSlug: (slug) => dispatch(actionCreator.setTopicFromSlug(slug)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicPage);
