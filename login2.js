function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="admin123")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}


}