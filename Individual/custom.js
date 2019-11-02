function validate ()
{
    var name = document.getElementById("uname")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var subject = document.getElementById("subject")
  
  if(name.value =="" ||password.value=="")
{
    alert("No blank values allowed");
    return false; 
}
else
{
    true;   
}
}