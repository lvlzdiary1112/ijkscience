var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
	  for (var word in mobileKeyWords) {
		if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
			alert("모바일로 접속시 화면이 깨지는 현상이 일어날 수 있습니다.");
		   break;
	  }
	}