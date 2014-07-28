
var chromecastScript = document.createElement('script');
chromecastScript.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";


var casterScript = document.createElement('script');
casterScript.src = chrome.extension.getURL('caster.js');


casterScript.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(casterScript);


chromecastScript.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(chromecastScript);

var chromeIconOffMetaTag = document.createElement('meta');
chromeIconOffMetaTag.name = "chromeIconOffSrc"
chromeIconOffMetaTag.content = chrome.extension.getURL('cast_off_dark.png');
document.head.appendChild(chromeIconOffMetaTag);

var chromeIconOnMetaTag = document.createElement('meta');
chromeIconOnMetaTag.name = "chromeIconOnSrc"
chromeIconOnMetaTag.content = chrome.extension.getURL('cast_on_dark.png');
document.head.appendChild(chromeIconOnMetaTag);
