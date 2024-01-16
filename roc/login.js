function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // leerling
    if (username == "149655" && password == "root") {
        alert("Login Succes")
        window.location.href = "main.html";
        
    }
    // docent
    if (username == "120775" && password == "ADMIN") {
        window.location.href = "docent.html";
        alert("succes");
    }
    else{
        document.getElementById("username").placeholder = '';
        document.getElementById("password").placeholder = '';
        document.getElementById("username").value = '';
        document.getElementById("password").value = '';
        
        if (username == "120775" || username == "149655" ){
            document.getElementById("password").placeholder = 'Wachtwoord verkeerd'; 
            
        }
        else if (password == "root" ||password ==  "ADMIN"){
            document.getElementById("username").placeholder = 'Geen geldige student nummer';
            
        }
        else if (password != "root" || password != "ADMIN" && username != "120775" || username != "149655"){
            document.getElementById("username").placeholder = 'Geen geldige student nummer';
            document.getElementById("password").placeholder = 'Wachtwoord verkeerd';
        }
    }
}