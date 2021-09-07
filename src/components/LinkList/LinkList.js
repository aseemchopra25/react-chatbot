import React from 'react'
import './LinkList.css'
//remember to write css later after finishing up js links
const LinkList = (props) => {
    const linkMarkup = props.options.map((link) =>(
        <li key={link.id} className="link-list-item">
            <a 
                href={link.url}
                target="_blank"
                rel = "noopener noreferrer"
                className= "link-list-item-url"
            >
                {link.text}
            </a>
        </li>
    ));
    return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;