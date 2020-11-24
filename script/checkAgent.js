var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
	  for (var word in mobileKeyWords) {
		if (navigator.userAgent.match(mobileKeywords[word]) == /i(Phone|Pod)/i) {
			alert("모바일로 접속시 화면 최적화가 되지 않아 화면이 깨지는 현상이 발생하며, 아이폰으로 접속시 링크 리다이렉트시 이메일 자동복사가 되지 않습니다..");
		   break;
		} else if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
			alert("모바일로 접속시 화면 최적화가 되지 않아 화면이 깨지는 현상이 발생합니다.");
		   break;
	  }
	}
