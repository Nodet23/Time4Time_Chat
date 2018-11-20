$(function (){
 const socket = io();

//obteniendo elementos del DOM desde la web

const $messageForm= $('#message-form');
const $messageBox= $('#message');
const $chat= $('#chat');

//objetos dl nickname
const $nickForm = $('#nickForm');
const $nickname = $('#nickname');
const $nickError = $('#nickError');
const $users = $('#usernames');

$nickForm.submit(e => {

    e.preventDefault();
    console.log("enviando user");
    socket.emit('new user', $nickname.val(), data => {
      if(data) {
        $('#nickWrap').hide();
        $('#contentWrap').show();
      } else {
        $nickError.html(`
          <div class="alert alert-danger">
            username already in use
          </div>
        `);
      }
    });
    $nickname.val('');
  });


//eventos
$messageForm.submit( e =>  {
    e.preventDefault();
    socket.emit('send message', $messageBox.val());
    $messageBox.val('');
});
socket.on('new message', function (data){
$chat.append(data + '<br/>'); // añade al chat el mensaje
})
})