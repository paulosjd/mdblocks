import React from "react";
import { Route } from 'react-router-dom'

export default (props) => {
    const addLen = props.selectedOption ? props.selectedOption.length * 9 : 30;
    const width = 24 + addLen;

    let options = [];
    if ( props.selectedOption ) {
        options = props.options.map(opt => {
            console.log(opt.slug)
            return <Route key={opt.name} render={
                ({ history }) =>
                    <option
                        key={opt.name}
                        onClick={() => { if (props.isTopic) {
                            history.push('/topics/' + opt.slug)
                        }}}
                        value={opt.name}
                    >{opt.name}</option> }
                  />
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
