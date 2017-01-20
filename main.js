//document.getElementById('addressbar').placeholder = top.window.location.href;

function go() {
	var address = document.getElementById('addressbar').value;
	alert(window.top.location.href);
	top.window.location.href = address;
}

$("#addressbar").on('keyup', function (e) {
    if (e.keyCode == 13) {
        go();
    }
});
