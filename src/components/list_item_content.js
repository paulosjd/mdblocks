import React from "react";

export default (props) => {
    let logo = './logos/'.concat(props.catName.toLowerCase().replace(' ', '_'), '_logo.png');

    return (
        <div>
        <img className='category_logo' src={logo} width="100" />
        <h5 className='category_label'>{props.catName}</h5>
        </div>
    )
}