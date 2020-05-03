let login = () => {
    let inputs = document.getElementsByTagName("input");
    let fail = document.getElementById("fail");
    if(inputs[0].value == "Hatim" && inputs[1].value == "hello"){
        fail.innerHTML = "Successful login."
    }else{
        let issue = "";
        if(inputs[0].value != "Hatim") issue = "username";
        if(inputs[1].value != "hello") issue = "password";
        if(inputs[0].value != "Hatim" && inputs[1].value != "hello") issue = "username and password"
        
        fail.innerHTML = `Incorrect ${issue}.`;
    }
}