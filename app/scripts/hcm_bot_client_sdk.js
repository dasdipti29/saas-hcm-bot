  !function(e,n,t,r){
  function o(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var t=n.getElementsByTagName("script")[0],r=n.createElement("script");r.async=!0,r.src=e.url,t.parentNode.insertBefore(r,t)}}catch(e){}}var s,p,a,i=[],c=[];e[t]={init:function(){s=arguments;var e={then:function(n){return c.push({type:"t",next:n}),e},catch:function(n){return c.push({type:"c",next:n}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},        e.__onWebMessengerHostReady__=function(n){if(delete e.__onWebMessengerHostReady__,e[t]=n,s)for(var r=n.init.apply(n,s),o=0;o<c.length;o++){var u=c[o];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&n.render.apply(n,p),a&&n.destroy.apply(n,a);for(o=0;o<i.length;o++)n.on.apply(n,i[o])};var u=new XMLHttpRequest;u.addEventListener("load",o), u.addEventListener("load", s), u.open("GET", r+"/loader.json", !0),u.responseType = "json", u.send()
    }(window, document, "Bots", "https://saas-hcm-bot.herokuapp.com/client_sdk_js");

// to clear the client whenever the page is reloaded including page navigation 
 var keys = Object.keys(localStorage);
  for(var i = 0; i < keys.length; i++){
    localStorage.removeItem(keys[i]);
  }
  Bots.destroy();
// to clear the client whenever the page is reloaded including page navigation 
  Bots.init({ appId: '5c1b6e4b6e393f0022d9cda0',
        businessName: 'Oracle Digital Assistant',
		fixedIntroPane: true,
        introductionText: 'Mobile Cloud Enterprise',
        //businessIconUrl: 'https://soarbotsdkclient.herokuapp.com/images/botFace.svg',
        customColors: {
              brandColor: '65758e',
			  conversationColor: '65758e',
              actionColor: '65758e',
        },
        customText: {
            headerText:'HCM Bot',
			introductionText: 'How can I help you?'
        }
  });
