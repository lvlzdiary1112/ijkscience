var UserAgent = window.navigator.userAgent.toLowerCase();
var Chrome = UserAgent.indexOf('chrome');
var Edge = UserAgent.indexOf('edge');
var IE = UserAgent.indexOf('trident');

if(Chrome > -1) {
    if(Edge > -1) {
        alert("edge browser");
    } else {
        alert("chrome")
        window.location.href = "www.google.com";
    }
} else {
    alert("internet explorer");
}