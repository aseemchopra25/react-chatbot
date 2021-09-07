// this defines methods which are called when the message is parsed and an action or reply
// is needed

class ActionProvider {
    constructor (createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleCBSEList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on CBSE:",
            {
                widget: "cbseLinks"
            }
        );
        this.updateChatBotState(message);
    };
    handleFashionList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Fashion Design:",
            {
                widget: "fashionLinks"
            }
        );
        this.updateChatBotState(message);
    };
    greet(){
        const greetingMessage = this.createChatBotMessage("Hi, Nandini/Manya!")
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