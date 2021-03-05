function validation() {
    var user = document.getElementById('fname').value;
    var contact = document.getElementById('contact').value;
    var verify = document.getElementById('verify').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // user validation
    if(user == ""){
        
        alert("Please Enter Your Full Name");
        return false;
    }
    if(!isNaN(user)){
        alert("Please Enter Characters Only");
        return false;
    } 
    // contact validation
    if (contact=="") {
        alert("Please Enter Your phone Number");
        return false;
    }
    if(isNaN(contact)){
        alert("Please Enter Digits only");
        return false;
    }
    if(contact.length!=10){
        alert("Mobile number shouldn't greater then 10 digits.");
        return false;
    }
    // password validation
    if(password== ""){
        alert("Please Enter Your Password");
        return false;
    }
    if((pass.length <=8 ) || (pass.length > 20)){
        alert("Password Lies between 8 to 20 Characters");
        return false;
    }
    if (email=="") {
        alert("Please Enter Your Email");
        return false;
    }
    if (email.indexOf('@')<=0) {
        alert("Invalid email address");
        return false;   
    }
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
        alert("Invalid Email address")
    }
    if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . Invalid Position";
        return false;
    }

}