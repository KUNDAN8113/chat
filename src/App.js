import React, {useState,useEffect} from 'react';
import {FormControl,Input} from '@mui/material';
import './App.css';
import Message from './Message/Message';
import db from './firebase';
import firebase from 'firebase/app';
import FlipMove from 'react-flip-move';
import logo from './chat.jfif';
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from '@mui/material';

function App() {
  const [input,setInput]= useState('');
  const [messages,setMessages]= useState([]);
  const [userName,setUserName]= useState('');
  

  const sendmessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      text:input,
      userName:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
     
      setInput('');
  }

  useEffect(() => {
db.collection('messages')
.orderBy('timestamp','desc')
.onSnapshot(snapshot => {
  setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()}) ))
});
  }, [])


   useEffect(() => {
     setUserName(prompt('Enter your name'))
   },[])

  return (
    <div className="App">
    
      
      <h2>Welcome {userName}</h2>
      <img src={logo} alt={"logo"} width="100" height="100"/>
      <h1>Let those beeps fly...</h1>
      <form className="app__form">

      <FormControl className="app__formControl">
     
      <Input className="app__input" placeholder='Type here....' value={input} onChange={event => setInput(event.target.value)} />
     
      <IconButton className="app__iconButton" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendmessage}><SendIcon /></IconButton>

      </FormControl>

 
      
      </form>
     
<FlipMove>
{
  // eslint-disable-next-line array-callback-return
  messages.map(({id,message}) => (
    // eslint-disable-next-line react/jsx-no-undef
    <Message key={id} userName={userName} message={message} />
   
  ))
}
</FlipMove>
     

  </div>
  );
}

export default App;
