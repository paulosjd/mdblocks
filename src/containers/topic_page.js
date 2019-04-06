import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { Navbar } from 'reactstrap';


class TopicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdContent: '',
        };
    }

    componentDidMount() {
        this.getMarkdownContent();
    }

    getMarkdownContent() {
        let url = 'http://127.0.0.1:8000/api/topics/generators';
        let mdContent = '';
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                obj.forEach(obj => mdContent = mdContent + obj.content)
                this.setState({mdContent})});
    }

    render() {
        return <MarkdownPreview value={this.state.mdContent}/>
    }
}

export default TopicPage;