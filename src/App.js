import React from 'react'
import './App.css';
import ChatBot from 'react-chatbot-kit';
import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider'
import MessageParser from './chatbot/MessageParser'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
