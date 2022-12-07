function validate(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;

    if (username =="admin" && password == "123"){
        alert("Welcome!");
        return false;
    }
    else{
        alert("Not Registered!");
    }
}

