  !function(e,n,t,r){
  function o(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var t=n.getElementsByTagName("script")[0],r=n.createElement("script");r.async=!0,r.src=e.url,t.parentNode.insertBefore(r,t)}}catch(e){}}var s,p,a,i=[],c=[];e[t]={init:function(){s=arguments;var e={then:function(n){return c.push({type:"t",next:n}),e},catch:function(n){return c.push({type:"c",next:n}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},        e.__onWebMessengerHostReady__=function(n){if(delete e.__onWebMessengerHostReady__,e[t]=n,s)for(var r=n.init.apply(n,s),o=0;o<c.length;o++){var u=c[o];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&n.render.apply(n,p),a&&n.destroy.apply(n,a);for(o=0;o<i.length;o++)n.on.apply(n,i[o])};var u=new XMLHttpRequest;u.addEventListener("load",o), u.addEventListener("load", s), u.open("GET", r+"/loader.json", !0),u.responseType = "json", u.send()
    }(window, document, "Bots", "https://saas-hcm-bot.herokuapp.com/client_sdk_js");

var access_token=null;
var user_id=null;
var Servlet_uri = "https://"+window.location.host+"/fscmRestApi/tokenrelay";


getJWT();
// to clear the client whenever the page is reloaded including page navigation 
 var keys = Object.keys(localStorage);
  for(var i = 0; i < keys.length; i++){
    localStorage.removeItem(keys[i]);
  }
  Bots.destroy();
 Bots.on("ready", changeAllTags);
  Bots.on("message:received", changeLastMessage);
  Bots.on("message:received", deleteTagsInCarouselPreview);

Bots.init({ appId: '5c7e8d08f1544100290f9e9d',
		//displayStyle: 'tab',
		backgroundImageUrl: 'https://www.intouchsol.com/wp-content/uploads/2018/01/fbhauls-herolarge.jpg',
        businessName: 'Oracle Guided Learning',
		fixedIntroPane: true,
        introductionText: 'Mobile Cloud Enterprise',
        businessIconUrl: 'https://soarbotsdkclient.herokuapp.com/images/botFace.svg',
        customColors: {
              brandColor: '0000ff',
			  conversationColor: '0000ff',
              actionColor: '0000ff',
        },
        customText: {
            headerText: 'Hi there, How can we help?',
			introductionText: 'We\'re here to talk, so ask us anything!',
			inputPlaceholder: 'Enter your query...',
			//introductionText: 'How can I help you?'
        }
  }).then(function addCustomTagStyling() {
    const chatFrame = document.getElementById("web-messenger-container").contentDocument;
    const cssLink = document.createElement("link");
    cssLink.href = "https://smoochbotclient.herokuapp.com/custom_tag_styling.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
	//for clear conversation button
	 chatFrame.getElementById("intro_text").appendChild(space); 
	chatFrame.getElementById("intro_text").appendChild(addClearButton()); 
    chatFrame.head.appendChild(cssLink);	
	
  });


  //Bots.init({ appId: '5c7e8d08f1544100290f9e9d',
       // businessName: 'Oracle Guided Learning',
		//fixedIntroPane: true,
       // introductionText: 'Mobile Cloud Enterprise',
       // businessIconUrl: 'https://soarbotsdkclient.herokuapp.com/images/botFace.svg',
       // customColors: {
       //       brandColor: '65758e',
		//	  conversationColor: '65758e',
        //      actionColor: '65758e',
        //},
       // customText: {
         //   headerText: 'Hi there, How can we help?'
			//introductionText: 'How can I help you?'
       // }
  //}).then(function(){
  //  Bots.updateUser({
  //  "givenName": access_token,
  //  "surname": user_id
//})
//});



			// Get JWT token using token relay FA Servlet
			function getJWT() {
				var xhttp = new XMLHttpRequest();
				xhttp.open("GET",Servlet_uri, true);
				xhttp.setRequestHeader("Content-type", "application/json");
				xhttp.onreadystatechange = function () {
				if(xhttp.readyState === 4 && xhttp.status === 200) {

					access_token=JSON.parse(xhttp.responseText).access_token;
					user_id=JSON.parse(xhttp.responseText).principal;
				}
				};
				xhttp.send();

			}