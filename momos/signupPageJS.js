let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("click", function(event){
    event.preventDefault();
    let data ={
        email : form.email.value,
        password : form.password.value
    }
    if(checkSignIn(data.email,data.password) === true){
        localStorage.setItem("signIn",JSON.stringify(data));
        alert("sign in successful");
        window.location.href="index.html";
        console.log(data);
    }else{
        alert("Wrong username or password");
    }
})

function checkSignIn(email, password){
    let filter = userData.filter(function(element){
        return element.email === email && element.password === password;
    })
    if(filter.length > 0){
        return true;
    }else{
        return false;
    }
}