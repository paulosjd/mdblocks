import React from "react";
import {Button} from "reactstrap";

const TextSearchInput = (props) => {

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value)
    };

    const handleInputBlur = (e) => {
        if (!e.target || e.target.className !== 'text_filter_input') {
            props.resetTextInput();
        }
    };

    return <React.Fragment>
    <input name='text_filter' type="text" placeholder="Enter text"
           className='text_filter_input'
           value={props.textInput}
           onChange={handleTextChange}
           onBlur={handleInputBlur}
    />
    <Button disabled={props.textInput.length < 3} className='text_filter_submit' onClick={props.handleTextSubmit}>Search</Button>
    </React.Fragment>
};

// return <>
//     <div><label htmlFor="text-search">Filter by site name </label></div>
//     <div><input name='text-search' type="text" placeholder="Enter text"
//                 className='filter-element'
//                 value={props.filterText}
//                 onChange={handleFilterTextChange.bind(this)}
//                 onBlur={handleInputBlur.bind(this)}/>
//     </div>
// </>

export default TextSearchInput;