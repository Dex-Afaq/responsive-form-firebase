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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database= firebase.database();
  var ref= database.ref("data");

var password=0,id=0;

var oid = new Array() ,opassword = new Array(), oemail= new Array();
const inputs = document.querySelectorAll(".input");


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
	
}
document.getElementById("passcode").onchange = function()
{

	password = document.getElementById("passcode").value;


}

document.getElementById("submit").onclick = function()
{

	a=0;
			if(id!=0 && password!=0)
		{

			ref.on('value',gotdata,errdata);
		


			function gotdata(datan)
            {       
                
        
                var userobj=datan.val();
                var keys=Object.keys(userobj);
       
                for(var ii=0;ii<keys.length;ii++)
                {	
                    var kk=keys[ii];
                    oid[ii]=userobj[kk].id;
					oemail[ii] = userobj[kk].email; 
					if(oid[ii]==id || oemail[ii]==id)
					{
						
					opassword[ii]=userobj[kk].password;   
						
					if(opassword[ii]==password)
					{
						
						
						aaaa=1;	
						document.getElementById("userid").value="";
						document.getElementById("passcode").value="";

						alert("LOGGED IN SUCESSFULLY  " + userobj[kk].name);
						
						break;
					}
					else {
							alert("Wrong Password");			
							aaaa=1;			
					}	
				
				}
					
					

				}
				
			
				if(aaaa==0)
				{
				
				alert("Check your UserName or Email Again!");		
				}

						
				
         }
   
    function errdata(errn){
            console.log('error');
        
        }






		
		}
		else if(id==0)
		{
			alert("Please Enter User Name");
		}
		else if(password==0)
		{
			alert("Please Enter Your Password");
		}



}
