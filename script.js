const email=document.getElementById("email");
const form=document.querySelector("form");
const small=document.getElementById("text0");

form.addEventListener("submit" ,(e)=>{
    if(email.value==""){
        text0.textContent="Email Address cannot be empty";
        email.style.borderColor="hsl(0, 93%, 68%)";
    }else if(checkEmail(email.value)!==true){
        text0.textContent="Please provide a valid email";
        email.style.borderColor="hsl(0, 93%, 68%)";
    }
    else{
        text1.textContent='';
        inputEmail.style.borderColor='';
    }

    e.preventDefault()
})


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }