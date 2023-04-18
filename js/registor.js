let form = document.querySelector('.form_register');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let { firstname, lastname, email, password, repeatpassword } = event.target;
   
    let register_user = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        password: pass.value,
        repeatpassword: rpass.value
    };

    localStorage.setItem('register_user', JSON.stringify(register_user));
    location.href = "./login.html"


})
