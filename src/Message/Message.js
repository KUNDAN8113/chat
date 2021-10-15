import { Typography, Card, CardContent } from '@mui/material';
import React,{forwardRef} from 'react';
import './message.css';

const Message= forwardRef(({ message, userName },ref) => {
    const isUser = userName === message.userName;
    return (

        <div ref={ref} className = { `message ${isUser && "mess__user"}` }>
        <Card className = { isUser ? "mess__userCard" : "mess__guestCard" }>
        <CardContent>
        <
        Typography color = "black"
        variant = "h5"
        component = "h2" >
        { !isUser && `${message.userName || 'Unknown User' }: ` } { message.text } 
        </Typography> 
        </CardContent> 
        </Card> 
       </div>




    )
})

export default Message;
