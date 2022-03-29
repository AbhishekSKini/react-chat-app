import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed  from './components/Chatfeed';
import LoginForm from './components/LoginForm';
const ProjectID= "4a922e54-fa7b-4c7d-8632-7e41f01e5095";
const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm ProjectID={ProjectID}/>

    return (
        <ChatEngine 
        height = "100vh"
        projectID={ProjectID}
        userName= {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // userName="Sam"
        // userSecret="123"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
       
        />
    );
}
export default App;