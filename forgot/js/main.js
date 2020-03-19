var firebaseConfig = {
    apiKey: "AIzaSyBGf_Squby6IcCogGVbQTK1wzUHYFNz3Fk",
    authDomain: "javascript-myfirst.firebaseapp.com",
    databaseURL: "https://javascript-myfirst.firebaseio.com",
    projectId: "javascript-myfirst",
    storageBucket: "javascript-myfirst.appspot.com",
    messagingSenderId: "510179206818",
    appId: "1:510179206818:web:c0d70b445c1e875cab59fb"
  };
  var aaaa=0;
   firebase.initializeApp(firebaseConfig);
var index=0;
  var database= firebase.database();
  var ref= database.ref("data");


const inputs = document.querySelectorAll(".input");
var id=0, password=0;

var oid = new Array() ,opassword = new Array(), oemail= new Array();

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


document.getElementById("userid").onchange = function()
{

	id = document.getElementById("userid").value;
	check();
	
}


function check()
{
	if(id!=0)
	{

		ref.on('value',gotdata,errdata);
	


		function gotdata(datan)
		{       
					aaaa=0;
			
					var userobj=datan.val();
					var keys=Object.keys(userobj);
		
					for(var ii=0;ii<keys.length;ii++)
					{	
						var kk=keys[ii];
						oid[ii]=userobj[kk].id;
						oemail[ii] = userobj[kk].email; 
						if(oid[ii]==id || oemail[ii]==id)
							{
								document.getElementById("passcode").disabled = false;
								index=ii;
								aaaa=1;
							}

						
					}
					if(aaaa!=1)
					{
						alert("WRONG ID");
					}


		}
		function errdata(errn)
		{
        		    console.log('error');
        
        }

	}
}	

document.getElementById("passcode").onchange = function()
{		

	ref.on('value',gotdata,errdata);
	
	function gotdata(datan)
		{       
			
	var userobj=datan.val();
	var keys=Object.keys(userobj);
	var kk=keys[index];

	password =  document.getElementById("passcode").value;
	
	userobj[kk].password=password;
	var az=userobj[kk].password;		
	var keysss= keys[index];
			ref.child(keysss).update({password: az});
			
			


}
	
		function errdata(errn)
		{
        		    console.log('error');
        
        }

}



document.getElementById("update").onclick = function() 

{
	alert("Password Successfully Changed");	
	window.open("../index.html", "_self")
}