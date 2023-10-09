window.onload = loginLoad;

const query = window.location.search;
const UrlParams = new URLSearchParams(query);
const username = UrlParams.get('username');
const password = UrlParams.get('password');

function loginLoad(){
	var form = document.getElementById("myLogin");	
	form.onsubmit = checkLogin;
	form.onreset = reset;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(document.forms["myLogin"]["username"].value == username)
	{
		if(document.forms["myLogin"]["password"].value == password)
		{
			alert("Welcome to Web");
		}
		else
		{
			alert("Error maybe check?");
			return false;
		}
	}
	else
	{
		alert("No data Pls [Check or Register]");
		return false;
	}
}

function reset (){
    login.reset;
}

			