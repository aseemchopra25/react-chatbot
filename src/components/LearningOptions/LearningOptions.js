import React from 'react'

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Physics", 
            handler:props.actionProvider.handlePhysicsList, 
            id:1,
        },
        {
            text: "Chemistry", 
            handler:props.actionProvider.handleChemistryList, 
            id:2,
        },  
        {
            text: "Mathematics", 
            handler:props.actionProvider.handleMathematicsList, 
            id:3,
        },

        {
            text: "English", 
            handler:props.actionProvider.handleEnglishList, 
            id:4,
        },
        {
            text: "Economics", 
            handler:props.actionProvider.handleEconomicsList, 
            id:5,
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