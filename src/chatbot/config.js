// intitialMessages property in this config file is put into 
// the chatbot's internal state in a property called messages

import React from 'react'
import {createChatBotMessage} from 'react-chatbot-kit';
import LearningOptions from '../components/LearningOptions/LearningOptions';
import LinkList from '../components/LinkList/LinkList';

const config = {
    botName: "LearningBot",
    initialMessages: [
        createChatBotMessage("Hi Manya/Nandini. What do you want to learn?",
        {
            widget: "learningOptions",
        })
    ],
    customStyles:{
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E"
        },
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />
        },
        {
            widgetName: "cbseLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "New CBSE XIIth Sample Papers",
                        url: "http://cbseacademic.nic.in/SQP_CLASSXII_2021-22.html",
                        id: 1,
                    },

                ],
            },
        },
        {
            widgetName: "fashionLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Wikipedia",
                        url: "https://en.wikipedia.org/wiki/Fashion_design",
                        id: 2,
                    },

                ],
            },
        },
    ],
};

export default config