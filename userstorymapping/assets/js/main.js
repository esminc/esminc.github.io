

$(function() {
	if($(".error-message")[0]){
		location.href="#contact";
	}

	if($("input[type='text'][value!='']")[0]){
		location.href="#contact";
	}
});