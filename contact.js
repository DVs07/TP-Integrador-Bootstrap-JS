const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

function submitAlert(){

    if(inputName.value == "" && inputEmail.value == "" && inputMessage.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            footer: 'Complete all fields please',
        })

    } else{
        Swal.fire({
            icon: 'success',
            title: 'Excellent',
            footer: 'The message has been sent successfully'
        })
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
    }
    }
    