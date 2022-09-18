function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username === "20691a3727" && password==="1234")
    {
        alert ("Login Succesfully");
               window.location.href = 'home.html';
               return true;
    
    }
    else {
        alert ("Login Failed");
    }
}