let login_form = document.querySelector('.login_form')

stripeLogin.addEventListener('submit',(event) => {
    event.preventDefault();

    let {email, password} = event.target;

    let login_user ={
        password:pass.value,
        email:email.value
       
    };

    localStorage.setItem(`${email.value}`, JSON.stringify(login_user));
    location.href="../index.html";
    
})