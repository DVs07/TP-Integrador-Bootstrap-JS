const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

function submitAlert(){
    Swal.fire({
        icon: 'success',
        title: 'Excellent',
        text: 'The message is send!!!'
    })
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
}