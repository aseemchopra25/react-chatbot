// this calls the parse method
// this method is constructed with an action provider class that we pass as props
// to the chatbot, here we control how the message is parsed that is the parse logic 
// and what action to take based on the said parsing

// let's now create a simple chatbot response


class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state
    }
    parse(message){
        // console.log(message)
        const lowerCaseMessage = message.toLowerCase()
        
        if(lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")){
            // we haven't created greet method yet, so let's create it
            // in action provider file
            this.actionProvider.greet()
        }
        if(lowerCaseMessage.includes("fashion design")){
            this.actionProvider.handleFashionList()
        }
        if(lowerCaseMessage.includes("cbse")){
            this.actionProvider.handleCBSEList()
        }

    }
}

export default MessageParser;