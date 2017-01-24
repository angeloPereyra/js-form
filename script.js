//alert('Load finished');

var username;
var password;
var confpass;
var fname;
var lname;
var age;
var email;
var fax;
var country;
var chkbox;
var phone;
var radio;

function submitForm(){
	var message = validate();
	if(!empty(message)){
		alert(message);
		return;
	}
	alert("Validated!");
}

function getValues(){ 
	username = document.forms["fom"]["f-username"].value;
	 password = document.forms["fom"]["f-password"].value;
	 confpass = document.forms["fom"]["f-confpass"].value;
	 fname = document.forms["fom"]["f-fname"].value;
	 lname = document.forms["fom"]["f-lname"].value;
	 age = document.forms["fom"]["f-age"].value;
	 email = document.forms["fom"]["f-email"].value;
	 fax = document.forms["fom"]["f-fax"].value;
	 country = document.forms["fom"]["f-country"].value;
	 chkbox = document.getElementById("chkbox").checked;
	 phone = document.forms["fom"]["f-phone"].value;
	 radio = document.forms["fom"]["radio"].value;
}

function validate(){
	//returns error message
	getValues();
	if(empty(username))
		return("Username must not be empty");
	else if(empty(password))
		return("Password must not be empty");
	else if(empty(confpass))
		return("Confirm password must not be empty");
	else if(empty(fname))
		return("First name must not be empty");
	else if(empty(email))
		return("Email must not be empty");
	else if(empty(age))
		return("Age must not be empty");
	else if(empty(phone))
		return("Phone must not be empty");
	else if(password.length > 20)
		return("Password must not exceed 20 characters");
	else if(password != confpass)
		return("Password confirmation does not match");
	else if(containsNum(fname))
		return("First name must not contain numbers")
	else if(containsNum(lname))
		return("Last name must not contain numbers");
	else if(containsAlpha(age))
		return("Age must not contain any letter");
	else if(age <= 0)
		return("Invalid age");
	else if(!validEmail(email))
		return("Invalid email!\nIt must be in this form: email@provider.domain");
	else if(containsAlpha(phone))
		return("Phone must not contain any letter");
	else if(phone.length > 20)
		return("Phone number is too long");
	else if(containsAlpha(fax))
		return("Fax must not contain any letter");
	else if(fax.length > 20)
		return("Fax number is too long");
	else if(country == "SELECT A COUNTRY")
		return("Please select a country");
	else if(!chkbox)
		return("Please agree to the disclaimer. Check it");
}


function empty(toCheck){
	//returns true if var is empty or null
	return (toCheck == null || toCheck == "")
}

function containsNum(str){
	//returns true if string contains numbers
	return /\d/.test(str);
}

function containsAlpha(str){
	return (str.match(/[a-z]/i));
}

function validEmail(str){
	return (/[a-z]@[a-z].[a-z]/i.test(str));
}