import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

class TopicPage extends React.Component {

    componentDidMount() {
        this.props.getMarkdownContent(this.props.match.params.slug);
    }

    render() {
        return <MarkdownPreview value={this.props.mdContent}/>
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
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicPage);
