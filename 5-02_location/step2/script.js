var lang = document.querySelector('html').lang;

var opt;
if(lang === 'ko') {
	opt = document.querySelector('option[value="index.html"]');
} else if(lang === 'en') {
	opt = document.querySelector('option[value="index-en.html"]');
} else if(lang === 'ja') {
	opt = document.querySelector('option[value="index-jp.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function() {
	location.href = document.getElementById('form').select.value;
}
