var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
	  for (var word in mobileKeyWords) {
		if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
			alert("모바일로 접속시 리다이렉트가 불가할 수 있으며,\n화면 최적화가 되지 않아 화면이 깨지는 현상이 발생합니다.");
		   break;
	  }
	}
