// document.querySelector("#newAccount").addEventListener("click",createAccount);
let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data = {
        name : form.name.value,
        email : form.email.value,
        password : form.password.value
    }
    console.log(data);
    if(checkEmails(data.email)===true){
        userData.push(data);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("Account created successfully");
        window.location.href = "signupPage.html";
    }else{
        alert("Account already Exists");
    }
})
document.querySelector("#createAcc").addEventListener("click",goToLogin)
    function goToLogin(){
        window.location.href = "signupPage.html";
    }


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

// function createAccount(){
//     window.location.href = "createAccount.html";
// }