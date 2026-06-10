
document.getElementById("form-validation").addEventListener('submit', function(event){

    event.preventDefault();
    let UserName=document.getElementById("UserName").value.trim()
    let Email=document.getElementById("Email").value.trim()
    let Password=document.getElementById("Password").value.trim()
    let ConfirmPassword=document.getElementById("ConfirmPassword").value.trim()
    // Prathap

    let isvalid=true;
    let unameerror=/^[A-Za-z]+ [A-Za-z]$/;
    let emailerror=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    let passworderror=/^[A-Za-z0-9]$/;

    if(UserName == ""){
        document.getElementById("un-er").innerText="Name is Required";
        isvalid=false;
    }
    else if(!unameerror.test(UserName)){
        document.getElementById("un-er").innerText="Enter Your Full Name";
        isvalid=false;
    }
    else if(unameerror.test(UserName)){
        document.getElementById("un-er").innerText="";
        isvalid=true;
    }
    if(Email == ""){
        document.getElementById("mail-er").innerText="Email is Required";
        isvalid=false;
    }
    else if(!emailerror.test(Email)){
        document.getElementById("mail-er").innerText="Enter a valid Email";
        isvalid=false;
    }
    else if(emailerror.test(Email)){
        document.getElementById("mail-er").innerText="";
        isvalid=true;
    }
    if(Password == ""){
        document.getElementById("ps-er").innerText="Password is Required";
        isvalid=false;
    }
    else if(passworderror.length<2 || passworderror.length>11){
        document.getElementById("ps-er").innerText="Password length should be <3 and >10";
        isvalid=false;
    }
    else if(passworderror.length<2 || passworderror.length>11){
        document.getElementById("ps-er").innerText="";
        isvalid=true;
    }
    if(ConfirmPassword == ""){
        document.getElementById("cps-er").innerText="Confirm Password is Required";
        isvalid=false;
    }
    else if(Password!=ConfirmPassword){
        document.getElementById("cps-er").innerText="Password is not same";
        document.getElementById("ps-er").innerText="";
        isvalid=false;
    }
    else if(Password==ConfirmPassword){
        document.getElementById("cps-er").innerText="";
        isvalid=true;
    }
    if(isvalid){
            alert(`Hi, ${UserName}, Your Account has been Created Successfully`);
            console.log(UserName, Email, Password);
            
    }
})

