import React from 'react'
import {createChatBotMessage} from 'react-chatbot-kit';
import LearningOptions from '../components/LearningOptions/LearningOptions';
import LinkList from '../components/LinkList/LinkList';

const config = {
    botName: "Board Bot",
    initialMessages: [
        createChatBotMessage("Hi! Enter a XIIth CBSE subject.",
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
            widgetName: "physicsLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Physics XIIth CBSE Sample Paper Term 1",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Physics-SQP.pdf",
                        id: 1,
                    },
                    {
                        text: "Physics XIIth CBSE Sample Paper Term 1 Answers",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Physics-MS.pdf",
                        id: 2,
                    },
                    {
                        text: "Physics XIIth CBSE Syllabus",
                        url: "http://cbseacademic.nic.in/web_material/CurriculumMain22/SrSec/Physics_SrSec_2021-22.pdf",
                        id: 3,
                    },
                    {
                        text: "Physics XIIth NCERT Download Part 1",
                        url: "https://ncert.nic.in/textbook/pdf/leph1dd.zip",
                        id: 4,
                    },
                    {
                        text: "Physics XIIth NCERT Download Part 2",
                        url: "https://ncert.nic.in/textbook/pdf/leph2dd.zip",
                        id: 5,
                    },
                    
                ],
            },
        },
        {
            widgetName: "chemistryLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Chemistry XIIth CBSE Sample Paper Term 1",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Chemistry-SQP.pdf",
                        id: 1,
                    },
                    {
                        text: "Chemistry XIIth CBSE Sample Paper Term 1 Answers",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Chemistry-MS.pdf",
                        id: 2,
                    },
                    {
                        text: "Chemistry XIIth CBSE Syllabus",
                        url: "http://cbseacademic.nic.in/web_material/curriculummain22/termwise/srsecondary/chemistry_2021-22.pdf",
                        id: 3,
                    },
                    {
                        text: "Chemistry XIIth NCERT Download Part 1",
                        url: "https://ncert.nic.in/textbook/pdf/lech1dd.zip",
                        id: 4,
                    },
                    {
                        text: "Chemistry XIIth NCERT Download Part 2",
                        url: "https://ncert.nic.in/textbook/pdf/lech2dd.zip",
                        id: 5,
                    },
                    
                ],
            },
        },
        {
            widgetName: "mathematicsLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Mathematics XIIth CBSE Sample Paper Term 1",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Maths-SQP.pdf",
                        id: 1,
                    },
                    {
                        text: "Mathematics XIIth CBSE Sample Paper Term 1 Answers",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Maths-MS.pdf",
                        id: 2,
                    },
                    {
                        text: "Mathematics XIIth CBSE Syllabus",
                        url: "http://cbseacademic.nic.in/web_material/CurriculumMain21/revisedsyllabi/SrSecondary/REVISEDMathematics_Sr.Sec_2020-21.pdf",
                        id: 3,
                    },
                    {
                        text: "Mathematics XIIth NCERT Download Part 1",
                        url: "https://ncert.nic.in/textbook/pdf/lemh1dd.zip",
                        id: 4,
                    },
                    {
                        text: "Mathematics XIIth NCERT Download Part 2",
                        url: "https://ncert.nic.in/ncerts/l/lemh2dd.zip",
                        id: 5,
                    },
                    
                ],
            },
        },
        {
            widgetName: "englishLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "English Core XIIth CBSE Sample Paper Term 1",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/EnglishCore-SQP.pdf",
                        id: 1,
                    },
                    {
                        text: "English Core XIIth CBSE Sample Paper Term 1 Answers",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/EnglishCore-MS.pdf",
                        id: 2,
                    },
                    {
                        text: "English Core XIIth CBSE Syllabus",
                        url: "http://cbseacademic.nic.in/web_material/CurriculumMain22/SrSec/English_core_SrSec_2021-22.pdf",
                        id: 3,
                    },
                    {
                        text: "English Core 'VISTAS' XIIth NCERT Download",
                        url: "https://ncert.nic.in/textbook/pdf/levt1dd.zip",
                        id: 4,
                    },
                    {
                        text: "English Core 'FLAMINGO' XIIth NCERT Download",
                        url: "https://ncert.nic.in/textbook/pdf/lefl1dd.zip",
                        id: 5,
                    },
                    
                ],
            },
        },
        {
            widgetName: "economicsLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Economics XIIth CBSE Sample Paper Term 1",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Economics-SQP.pdf",
                        id: 1,
                    },
                    {
                        text: "Economics XIIth CBSE Sample Paper Term 1 Answers",
                        url: "http://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Economics-MS.pdf",
                        id: 2,
                    },
                    {
                        text: "Economics XIIth CBSE Syllabus",
                        url: "http://cbseacademic.nic.in/web_material/CurriculumMain22/termwise/SrSecondary/Economics_2021-22.pdf",
                        id: 3,
                    },
                    {
                        text: "Economics XIIth NCERT Introduction to Microeconomics Download",
                        url: "https://ncert.nic.in/textbook/pdf/leec2dd.zip",
                        id: 4,
                    },
                    {
                        text: "Economics XIIth NCERT Introduction to Macroeconomics Download",
                        url: "https://ncert.nic.in/textbook/pdf/leec1dd.zip",
                        id: 5,
                    },
                    
                ],
            },
        },


        // end of links
        
    ],
};

export default config