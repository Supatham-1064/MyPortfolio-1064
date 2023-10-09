window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    form.onreset = reset;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass_word =  document.forms["myForm"]["password"];
    var Retype_password =  document.forms["myForm"]["Retypepassword"];
    

    if(pass_word.value != Retype_password.value){

        alert("Error check password");
        document.getElementById("errormsg").value = "Pls check password";
        return false;
    }
    else{
        return true
    }
}

function reset (){
    from.reset;
}