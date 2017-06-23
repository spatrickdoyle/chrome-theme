var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if ((!location.ancestorOrigins.contains(extensionOrigin))&&(window == window.top)) {
	//Create the space to put stuff in
	const header = document.createElement('header');
	const div = header.attachShadow({mode: 'open'});

	header.style.cssText = 'position:fixed;top:0px;left:0;display:block;width:100%;height:42px;z-index:10000000000;margin:0px;padding:0px;background-color:#272822;font-family:Hack;font-size:11pt;color:#ffffff;';
	header.id = "headerbar";

	//Draw the tabs
	line1 = document.createElement('div');
	line1.style.cssText = "height:18px; margin-left:1px;-moz-user-select: none;-webkit-user-select: none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor: default; background-color:#FFFFFF; margin-top:1px; color:#000000";
	line1.innerHTML = "asdf";
	div.appendChild(line1);

	//Make the address bar
	line2 = document.createElement('div');
	line2.style.cssText = "height:22px; margin-left:1px;-moz-user-select: none;-webkit-user-select: none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor: default;";
	div.appendChild(line2);

	//Back button
	var back = document.createElement('span');
	back.innerHTML = "&nbsp;&lt;&nbsp;";
	line2.appendChild(back);

	//Forward button
	var forward = document.createElement('span');
	forward.innerHTML = "&nbsp;&gt;&nbsp;&nbsp;";
	line2.appendChild(forward);

	//Address bar
	var input = document.createElement('input');
	input.style.cssText = "height: 20px; width: 80%; font-family: Hack; color: #FFFFFF; outline: none; font-size: 11pt; background: #272822; border-style: solid; border-width: 0px; border-radius: 0px; margin-top:1px;";
	input.type="text";
	input.setAttribute("spellcheck","false");
	input.autocomplete="off";
	input.setAttribute("placeholder",window.location.href);
	line2.appendChild(input);

	//Move all page content down the right amount
	document.documentElement.style.cssText = 'margin-top:42px !important;position:relative !important;';
	//This bit makes Facebook work properly
	if (document.getElementsByClassName("_2t-a _26aw _50ti _2s1y")[0] != undefined) {
			document.getElementsByClassName("_2t-a _26aw _50ti _2s1y")[0].style.cssText = 'margin-top:22px';
	}

	//Stick it all on
	document.documentElement.insertBefore(header,document.head);
}

function go() {
	var address = input.value;
	if (address == "") {
		window.location.reload();
	}
	else if (/.+\..+/.test(address)) {
		if ((address.indexOf("http://") != 0)&&(address.indexOf("https://") != 0)) {
			address = "http://"+address
		}
		window.location.href = address;
	}
	else {
		window.location.href = "https://www.google.com/#safe=active&q="+address;
	}
}

$(input).on('keyup', function (e) {
    if (e.keyCode == 13) {
        go();
    }
});

$(back).on('click', function (e) {
    window.history.back();
});

$(forward).on('click', function (e) {
    window.history.forward();
});

$("#newtab").on('click', function (e) {
	alert("asdf");
	var win = window.open("http://www.spatrickdoyle.com", '_blank');
	win.focus();
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var s = "&nbsp;";
		for (r = 0; r < request.length; r++) {
			s += request[r].title;
			s += "&nbsp;|&nbsp;";
		}
		s += "<span id='newtab'>+&nbsp;|</span>";
		line1.innerHTML = s;
	});
