class ActionProvider {
    constructor (createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    //Begin widget calls for individual lists

    handlePhysicsList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Physics:",
            {
                widget: "physicsLinks"
            }
        );
        this.updateChatBotState(message);
    };
    handleChemistryList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Chemistry:",
            {
                widget: "chemistryLinks"
            }
        );
        this.updateChatBotState(message);
    };
    handleMathematicsList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Chemistry:",
            {
                widget: "mathematicsLinks"
            }
        );
        this.updateChatBotState(message);
    };
    handleEnglishList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on English:",
            {
                widget: "englishLinks"
            }
        );
        this.updateChatBotState(message);
    };
    handleEconomicsList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on English:",
            {
                widget: "economicsLinks"
            }
        );
        this.updateChatBotState(message);
    };




    //greeting actions 
    greet(){
        const greetingMessage = this.createChatBotMessage("Hi Buddy, Enter a XIIth CBSE Subject!",
        {
            widget: "learningOptions",
        }
        )
        this.updateChatBotState(greetingMessage)
    }
    updateChatBotState(message){
        // important to preserve the previous state 

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))

    }
}

export default ActionProvider;