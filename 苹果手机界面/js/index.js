
// 禁用浏览器拖拽图片时的显示效果
document.getElementById('bg').ondragstart = function() { 
	return false;
}
document.getElementById('home_button').ondragstart = function() { 
	return false;
}


function change_home_button() {
	alert("Hello");
}