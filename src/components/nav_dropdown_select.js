import React from "react";

export default (props) => {
    console.log(props)
    const addLen = props.selectedOption.length * 9;
    const width = 24 + addLen;

    if ( props.options ) {
        return (
            <select
                style={{'width': width}}
                className='nav_dropdown_select'
                onChange={(e) => props.handleSelection(e.target.value)}
                value={props.selectedOption}
            >
                {props.options.map(opt => {
                    return <option key={opt.name} value={opt.name}>{opt.name}</option>
                })}
            </select>
        )
    } else return <select className='nav_dropdown_select' style={{'width': width}} />
}
