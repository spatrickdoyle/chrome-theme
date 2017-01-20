var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if ((!location.ancestorOrigins.contains(extensionOrigin))&&(window == window.top)) {
	const header = document.createElement('header');
	const div = header.attachShadow({mode: 'open'});
	//const h1 = document.createElement('h1');
	//h1.textContent = 'Hello world!';
	//div.appendChild(h1);

	//var div = document.createElement('div');
	//header.setAttribute("id","specific-id-css-ultimate-reset");
	header.style.cssText = 'position:fixed;top:0px;left:0;display:block;width:100%;height:22px;z-index:10000000000;margin:0px;padding:0px;background-color:#272822;font-family:Hack;font-size:11pt;color:#ffffff;';

	/*var div2 = document.createElement('div');
	div2.style.cssText = "height:1px";
	div.appendChild(div2);

	div2 = document.createElement('div');
	div2.style.cssText = "height:18px; color:#272822; background-color:#ffffff; margin-left:1px; margin-right:1px;padding-top:0px;-moz-user-select: none;-webkit-user-select: none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor: default;";
	div.appendChild(div2);

	var tab1 = document.createElement('span');
	tab1.innerHTML = "&nbsp;Sean Doyle X&nbsp;";
	div2.appendChild(tab1);

	var tab2 = document.createElement('span');
	tab2.style.cssText = "color:#ffffff; background-color:#272822; padding-bottom:2px;";
	tab2.innerHTML = "&nbsp;PHYS 1304 Syllabus X&nbsp;";
	div2.appendChild(tab2);

	var tab3 = document.createElement('span');
	tab3.innerHTML = "&nbsp;i3: i3User's Guide X&nbsp;";
	div2.appendChild(tab3);

	var newtab = document.createElement('span');
	newtab.style.cssText = "color:#ffffff; background-color:#3a3b36; padding-bottom:2px;";
	newtab.innerHTML = "&nbsp;+&nbsp;";
	div2.appendChild(newtab);

	div2 = document.createElement('div');
	div2.style.cssText = "height:1px; color:#272822; background-color:#ffffff; margin-left:1px; margin-right:1px";
	div.appendChild(div2);*/

	div2 = document.createElement('div');
	div2.style.cssText = "height:22px; margin-left:1px;-moz-user-select: none;-webkit-user-select: none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor: default;";
	div.appendChild(div2);

	var back = document.createElement('span');
	back.innerHTML = "&nbsp;&lt;&nbsp;";
	div2.appendChild(back);

	var forward = document.createElement('span');
	forward.innerHTML = "&nbsp;&gt;&nbsp;&nbsp;";
	div2.appendChild(forward);

	var input = document.createElement('input');
	input.style.cssText = "height: 20px; width: 80%; font-family: Hack; color: #FFFFFF; outline: none; font-size: 11pt; background: #272822; border-style: solid; border-width: 0px; border-radius: 0px;";
	input.type="text";
	input.setAttribute("spellcheck","false");
	input.autocomplete="off";
	input.setAttribute("placeholder",window.location.href);
	div2.appendChild(input);

	document.documentElement.style.cssText = 'margin-top:22px !important;position:relative !important;';
	if (document.getElementsByClassName("_2t-a _26aw _50ti _2s1y")[0] != undefined) {
			document.getElementsByClassName("_2t-a _26aw _50ti _2s1y")[0].style.cssText = 'margin-top:22px';
	}

	document.documentElement.insertBefore(header,document.head);

	$(window).load("https://www.google.com");
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
		/*alert("going");
		$.mobile.pageContainer.pagecontainer("change", "test.html", { 
			reload : true
		});*/
    }
});

$(back).on('click', function (e) {
    window.history.back();
});

$(forward).on('click', function (e) {
    window.history.forward();
});

/*$(newtab).on('click', function (e) {
	var win = window.open("http://www.spatrickdoyle.com", '_blank');
	win.focus();
});*/
