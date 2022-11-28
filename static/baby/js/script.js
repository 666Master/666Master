$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if((userName=="lijinyu"||userName=="李金玉"||userName=="金玉"||userName=="ljy") &&  (pwd=="1105"||pwd=="19981105")){
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert("Wrong Password");
	}
});
