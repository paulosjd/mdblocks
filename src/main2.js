import { MarkdownPreview } from 'react-marked-markdown';
import React from 'react';
import { Navbar } from 'reactstrap';


class MainContainer2 extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            mdContent: '',
        };
    }

    componentDidMount() {
        this.getMarkdownContent();
    }

    getMarkdownContent() {
        let url = 'http://127.0.0.1:8000/api/segment/';
        let mdContent = '';
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                obj.forEach(obj => mdContent = mdContent + obj.content)
                this.setState({mdContent})});
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <>
                <div>
                    <Navbar color="light" light expand="md">

                    </Navbar>
                </div>
                <div>
                    <h2>{'this.props.subTopic'}</h2>
                    <MarkdownPreview value={this.state.mdContent}/>
                </div>
            </>
        );
    }
}

export default MainContainer2;