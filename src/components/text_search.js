import React from "react";
import { Button } from "reactstrap";

const TextSearchInput = (props) => {

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value)
    };

    const handleInputBlur = (e) => {
        if (!e.relatedTarget || !e.relatedTarget.className.includes('text_filter')) {
            props.resetTextInput();
        }
    };

    return <React.Fragment>
        <input name='text_filter' type="text" placeholder="Enter text"
               className='text_filter'
               value={props.textInput}
               onChange={handleTextChange}
               onBlur={handleInputBlur}
               />
        {/*<Link to="/about" >*/}
        {/*<button type="button">About</button>*/}
        {/*</Link>*/}
        <Button disabled={props.textInput.length < 3}
                className='text_filter'
                onClick={props.handleTextSubmit}
                >Search</Button>
        </React.Fragment>
};

export default TextSearchInput;