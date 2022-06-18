
let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data = {
        name : form.name.value,
        email : form.email.value,
        password : form.password.value
    }
    // console.log(data);
    if(checkEmails(data.email)===true){
        userData.push(data);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("Account created successfully");
        window.location.href = "signup_page.html";
    }else{
        alert("Account already Exists");
    }
})

function checkEmails(email){
    let filtered = userData.filter(function(element){
        return email === element.email;
    })
    if(filtered.length > 0){
        return false;
    }else{
        return true;
    }
}