import React from "react";
import { Route } from 'react-router-dom'

export default (props) => {

    const optionNames = props.options.map(x => x.name);
    const isDiffCategory = !optionNames.includes(props.selectedOption);

    let addLen = 0;
    if (isDiffCategory && optionNames.length > 0) {
        const maxNameLen = Math.max(...optionNames.map(x => x.length));
        addLen = (maxNameLen * 4);
    } else addLen = props.selectedOption ? props.selectedOption.length * 4 : 20;
    const width = 60 + addLen;

    let options = [];
    if (props.selectedOption) {
        options = props.options.map(opt => {
            return <Route key={opt.name} render={
                ({ history }) =>
                    <option
                        key={opt.name} value={opt.name}
                        onClick={() => { if (props.isTopic) {
                            history.push('/topics/' + opt.slug)
                        }}}
                    >{opt.name}</option> }
                  />
        });
        if (isDiffCategory) {
            options.unshift(<option key='topic0' className='topic_placeholder' value={''}>{''}</option>)
        }
    }

    if ( props.options ) {
        return (
            <select
                style={{'width': width}}
                className='nav_dropdown_select'
                onChange={(e) => {if (e.target.value) {
                    props.handleSelection(e.target.value)
                }}}
                value={props.selectedOption}
            >
            {options}
            </select>
        )
    } else return <select className='nav_dropdown_select' style={{'width': width}} />
}