import React from 'react'

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "CBSE", 
            handler:props.actionProvider.handleCBSEList, 
            id:1,
        },


        {
            text: "Fashion Design", 
            handler:props.actionProvider.handleFashionList, 
            id:2,
        },
    ];

    const optionsMarkup = options.map((option)=> (
        <button 
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
        return <div className="learning-options-container">{optionsMarkup}</div>

};

export default LearningOptions;