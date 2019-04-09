import React from "react";

export default (props) => {
    // console.log(props)
    const addLen = props.selectedOption ? props.selectedOption.length * 9 : 30;
    const width = 24 + addLen;

    let options = [];
    if ( props.selectedOption ) {
        options = props.options.map(opt => {
            return <option key={opt.name} value={opt.name}>{opt.name}</option>
        });
    }

    if ( props.options ) {
        return (
            <select
                style={{'width': width}}
                className='nav_dropdown_select'
                onChange={(e) => props.handleSelection(e.target.value)}
                value={props.selectedOption}
            >
            {options}
            </select>
        )
    } else return <select className='nav_dropdown_select' style={{'width': width}} />
}
