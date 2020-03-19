var firebaseConfig = {
    apiKey: "AIzaSyBGf_Squby6IcCogGVbQTK1wzUHYFNz3Fk",
    authDomain: "javascript-myfirst.firebaseapp.com",
    databaseURL: "https://javascript-myfirst.firebaseio.com",
    projectId: "javascript-myfirst",
    storageBucket: "javascript-myfirst.appspot.com",
    messagingSenderId: "510179206818",
    appId: "1:510179206818:web:c0d70b445c1e875cab59fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database= firebase.database();
  var ref= database.ref("data");


var password=0,id=0,name=0,email=0;
const inputs = document.querySelectorAll(".input");
var userdata = new Object();

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



document.getElementById("fname").onchange = function()
{

	name = document.getElementById("fname").value;
}
document.getElementById("eadd").onchange = function()
{

	email = document.getElementById("eadd").value;
}





document.getElementById("userid").onchange = function()
{

	id = document.getElementById("userid").value;
}
document.getElementById("passcode").onchange = function()
{

 password = document.getElementById("passcode").value;
}

document.getElementById("signup").onclick = function()
{


			if(id!=0 && password!=0 && name!=0 && email!=0)
		{
				var str = email;
			if((str.search("@")!=-1) && (str.search(".com")!=-1))	
					{userdata = {
						name: name,
						email:email,
						id: id,
						password:password
					}
					ref.push(userdata);
					alert("Welcome to Our Site: " + name);
					window.open("../index.html", "_self")	
				}
				else{

					
			alert("ENTER A VALID EMAIL ADDRESS");

				}
		
		}
		else if(name==0)
		{
			alert("Please Enter Your Full Name");
		}
		else if(email==0)
		{
			alert("Please Enter A Valid Email Address");
		}
		else if(id==0)
		{
			alert("Please Enter A User Name");
		}
		else if(password==0)
		{
			alert("Please Enter A Password");
		}



}
