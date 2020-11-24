function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}

var UserAgent = navigator.platform;

$("button#redirect_naver").click( function () {
  if (UserAgent.match(/i(Phone|Pod)/i) != null ){
    alert("애플 기기에서는 자동 복사가 되지 않습니다. 사이트를 새로고침하여 이메일을 미리 복사하고 이동해주세요.\n 확인을 누르면 새로고침됩니다.");
  } else {
    copyToClipboard('lovelinus_sujeong@naver.com');
    alert("이메일이 자동으로 복사되었습니다.\n 확인을 누르면 네이버 이메일로 이동합니다.");
    window.location.href="https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com";
  }
});
$("button#redirect_google").click( function () {
    if (UserAgent.match(/i(Phone|Pod)/i) != null ){
    alert("애플 기기에서는 자동 복사가 되지 않습니다. 사이트를 새로고침하여 이메일을 미리 복사하고 이동해주세요.\n 확인을 누르면 새로고침됩니다.");
  } else {
    copyToClipboard('lovelinus_sujeong@naver.com');
    alert("이메일이 자동으로 복사되었습니다.\n 확인을 누르면 구글 이메일로 이동합니다.");
    window.location.href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  }
  });
$("button#redirect_outlook").click( function () {
    if (UserAgent.match(/i(Phone|Pod)/i) != null ){
    alert("애플 기기에서는 자동 복사가 되지 않습니다. 사이트를 새로고침하여 이메일을 미리 복사하고 이동해주세요.\n 확인을 누르면 새로고침됩니다.");
  } else {
    copyToClipboard('lovelinus_sujeong@naver.com');
    alert("이메일이 자동으로 복사되었습니다.\n 확인을 누르면 아웃룩 이메일로 이동합니다.");
    window.location.href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1605936965&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3da142dc35-8e80-9285-b0fc-5989be60df39&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015";
  }
  });
$("button#redirect_daum-hanmail").click( function () {
    if (UserAgent.match(/i(Phone|Pod)/i) != null ){
    alert("애플 기기에서는 자동 복사가 되지 않습니다. 사이트를 새로고침하여 이메일을 미리 복사하고 이동해주세요.\n 확인을 누르면 새로고침됩니다.");
  } else {
    copyToClipboard('lovelinus_sujeong@naver.com');
    alert("이메일이 자동으로 복사되었습니다.\n 확인을 누르면 다음(한메일) 이메일로 이동합니다.");
     window.location.href="https://logins.daum.net/accounts/signinform.do?url=https%3A%2F%2Fwww.daum.net%2F";
  }
  });
$("button#redirect_daum-hanmail").click( function () {
if (UserAgent.match(/i(Phone|Pod)/i) != null ){
    alert("애플 기기에서는 자동 복사가 되지 않습니다. 사이트를 새로고침하여 이메일을 미리 복사하고 이동해주세요.\n 확인을 누르면 새로고침됩니다.");
  } else {
    copyToClipboard('lovelinus_sujeong@naver.com');    
    alert("이메일이 자동으로 복사되었습니다.\n 확인을 누르면 다음(카카오) 이메일로 이동합니다.");
    window.location.href="https://accounts.kakao.com/login?continue=https%3A%2F%2Flogins.daum.net%2Faccounts%2Fksso.do%3Frescue%3Dtrue%26url%3Dhttps%253A%252F%252Fwww.daum.net%252F";
  }
  });
