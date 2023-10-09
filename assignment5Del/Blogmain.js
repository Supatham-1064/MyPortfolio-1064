function postFunction()
{
    var TextCheck = document.getElementById("text1").value;
    
    var Topic = document.getElementById("topic1");
    var Comment1 = document.getElementById("comment1");
    var Comment2 = document.getElementById("comment2");


    if(Topic.innerHTML == "")
    {
        Topic.innerHTML = TextCheck; 
    }
    else if(Comment1.innerHTML == "")
    {
        Comment1.innerHTML = TextCheck;
    }
    else if(Comment2.innerHTML == "")
    {
        Comment2.innerHTML = TextCheck;
    }
}
function clearFunction()
{
    document.getElementById("text1").value = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}