function validate()
{
    var name = document.getElementById("uname")
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var subject = document.getElementById("subject");
    var subject = document.getElementById("message");

    if(name.value =="" && email.value =="" && phone.value =="" && subject.value =="" ||message.value =="")
    {
    alert("No blank values allowed");
        return false;
    }
    else
    {
        true;
    }
}