import React from "react";
import {Button} from "reactstrap";

const TextSearchInput = (props) => {

    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value, 'text_filter')
    };

    const handleInputBlur = () => {
        props.resetTextInput()
    };

    return <React.Fragment>
    <input name='text_filter' type="text" placeholder="Enter text"
           className='text_filter_input'
        // value={props.filterText}
        // onChange={handleFilterTextChange.bind(this)}
        // onBlur={handleInputBlur.bind(this)}
    />
    <Button className='text_filter_submit' >Search</Button>
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