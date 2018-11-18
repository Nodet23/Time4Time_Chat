$(function (){
 const socket = io();

//obteniendo elementos del DOM desde la web

const $messageForm= $('#message-form');
const $messageBox= $('#message');
const $chat= $('#chat');

//eventos
$messageForm.submit( e =>  {
    e.preventDefault();
    console.log($messageBox.val());
});

})