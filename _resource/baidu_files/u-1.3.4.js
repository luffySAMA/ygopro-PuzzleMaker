function user_c(f){var g=encodeURIComponent(window.document.location.href),e="",d="",a="",b="",c=window["BD_PS_C"+(new Date()).getTime()]=new Image();for(v in f){switch(v){case"title":a=encodeURIComponent(f[v].replace(/<[^<>]+>/g,""));break;case"url":a=encodeURIComponent(f[v]);break;default:a=f[v]}e+=v+"="+a+"&"}b="&mu="+g;c.src="http://nsclick.baidu.com/v.gif?pid=201&pj=psuser&"+e+"path="+g+"&wd="+d+"&t="+new Date().getTime();return true}function Dialog(c){var I=window,Q=document.body,O=document.documentElement;var k=baidu.dom.create("div");var G=c.width||395,N=c.height||400;var t,s,u,A,w=8;var e=null;var J=c.closeFunc||function(){};var y,o,m;function L(){a()}function x(){Q.appendChild(k);k.style.display="block";if(c.load){c.load.call(window)}i(true)}function H(b){try{k.style.display="none"}catch(d){}if(!b&&e){try{e.call(window,0)}catch(d){}e=null}}function i(b){if(k.sbIE6){k.sbIE6.redraw()}if(b&&k.msk){k.msk.redraw()}if(k.dlg){k.dlg.redraw()}if(k.shd){k.shd.redraw()}}function n(b,d){G=b;N=d;if(k.dlg){k.dlg.resize(b,d)}if(k.shd){k.shd.resize(b,d)}}function a(){k.innerHTML="";if(baidu.ie){k.sbIE6=F();k.appendChild(k.sbIE6)}if(c.mask){k.msk=l();k.appendChild(k.msk)}k.dlg=g("��¼");k.appendChild(k.dlg);baidu.on(I,"resize",function(){i(true)})}function j(d){d=I.event||d;var b=R(d.clientX-t,0,u);var S=R(d.clientY-s,0,A);baidu.setStyle(k.dlg,"left",b+"px");baidu.setStyle(k.dlg,"top",S+"px");if(k.shd){baidu.setStyle(k.shd,"left",b+w+"px");baidu.setStyle(k.shd,"top",S+w+"px")}}function M(){baidu.un(Q,"mousemove",j);baidu.un(Q,"mouseup",M);if(k.dlg.releaseCapture){k.dlg.releaseCapture()}if(I.releaseEvents){I.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP)}}function h(){if(c.ready){c.ready.call(window)}}function l(){var b=f();var d=E("#000",30,b);d.redraw=function(){var S=f(true);C(d,S);setTimeout(function(){var T=f();C(d,T)},0)};return d}function F(){var b=f();var d=baidu.dom.create("iframe");baidu.setStyle(d,"position","absolute");baidu.setStyle(d,"top",b.y+"px");baidu.setStyle(d,"left",b.x+"px");baidu.setStyle(d,"zIndex",10000);baidu.setStyle(d,"opacity",1/100);baidu.setStyle(d,"filter","alpha(opacity=1)");baidu.setStyle(d,"width",b.w+"px");baidu.setStyle(d,"height",b.h+"px");d.redraw=function(){var S=f(true);baidu.setStyle(d,"width",S.w+"px");baidu.setStyle(d,"height",S.h+"px");setTimeout(function(){var T=f();baidu.setStyle(d,"width",T.w+"px");baidu.setStyle(d,"height",T.h+"px")},0)};return d}function f(d){var b=d?B():p();b.x=0;b.y=0;b.z=10001;return b}function g(T){var b=E("",100,q(true));b.className="bd_dialog";o=baidu.dom.create("div");o.className="bd_dialog_handle";m=baidu.dom.create("span");m.className="bd_dialog_title";m.innerHTML=T;o.appendChild(m);var d=baidu.dom.create("span");d.className="bd_dialog_close";baidu.on(d,"mouseover",function(){baidu.addClass(this,"bd_dialog_close_hover")});baidu.on(d,"mouseout",function(){baidu.removeClass(this,"bd_dialog_close_hover")});baidu.on(d,"mousedown",function(){baidu.addClass(this,"bd_dialog_close_down")});baidu.on(d,"mouseup",function(){baidu.removeClass(this,"bd_dialog_close_down")});baidu.on(d,"click",function(){J();H()});o.appendChild(d);var S=baidu.dom.create("span");baidu.setStyle(S,"clear","both");o.appendChild(S);if(c.drag){baidu.on(o,"mousedown",function(U){U=I.event||U;var V=p();t=U.clientX-b.offsetLeft;s=U.clientY-b.offsetTop;u=V.w-b.clientWidth-w;A=V.h-b.clientHeight-w;baidu.on(Q,"mousemove",j);baidu.on(Q,"mouseup",M);baidu.on(I,"scroll",M);if(b.setCapture){b.setCapture()}else{baidu.on(I,"mouseup",M)}if(I.captureEvents){I.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)}})}y=baidu.dom.create("div");y.className="bd_dialog_main";if(c.domNode){y.appendChild(c.domNode)}b.caption=function(U){if(U){m.innerHTML=U}return m.innerHTML};b.clear=function(){y.innerHTML=""};b.redraw=function(){var U=q(true);C(b,U)};b.resize=P;b.appendChild(o);b.appendChild(y);K(N);return b}function K(b){y.style.height=b-67+"px"}function E(d,S,b){var T=baidu.dom.create("div");baidu.setStyle(T,"position","absolute");baidu.setStyle(T,"top",b.y+"px");baidu.setStyle(T,"left",b.x+"px");baidu.setStyle(T,"zIndex",b.z);baidu.setStyle(T,"backgroundColor",d);baidu.setStyle(T,"opacity",S/100);baidu.setStyle(T,"width",b.w+"px");baidu.setStyle(T,"height",b.h+"px");return T}function P(d,T){var V=p();maxX=V.w-d-w;maxY=V.h-T-w;var S=d-parseInt(baidu.getStyle(this,"width"));var U=T-parseInt(baidu.getStyle(this,"height"));var b=R(parseInt(baidu.getStyle(this,"left"))-S/2,0,maxX);var X=R(parseInt(baidu.getStyle(this,"top"))-U/2,0,maxY);baidu.setStyle(this,"top",X+"px");baidu.setStyle(this,"left",b+"px");baidu.setStyle(this,"width",d+"px");baidu.setStyle(this,"height",T+"px");K(T)}function C(d,b){baidu.setStyle(d,"top",b.y+"px");baidu.setStyle(d,"left",b.x+"px");baidu.setStyle(d,"width",b.w+"px");baidu.setStyle(d,"height",b.h+"px")}function q(S){var b=B();var d=S?0:w;return{z:S?10005:10002,x:R((b.w-G)/2,0)+d+b.l,y:R((b.h-N)/2,0)+d+b.t,w:G,h:N}}function R(d,S,b){if(b){d=d>b?b:d}return d>=S?d:S}function p(d){var S=Math.max(Q.scrollHeight,O.scrollHeight);var b=Math.max(Q.scrollWidth,O.scrollWidth);if(O&&O.clientWidth){S=Math.max(O.clientHeight,S);b=Math.max(O.clientWidth,b)}else{S=Math.max(Q.clientHeight,S);b=Math.max(Q.clientWidth,b)}return{h:S,w:b}}function B(){var b,d;if(O&&O.clientWidth){b=O.clientWidth;d=O.clientHeight}else{b=Q.clientWidth;d=Q.clientHeight}return{w:b,h:d,t:Math.max(Q.scrollTop,O.scrollTop),l:Math.max(Q.scrollLeft,O.scrollLeft)}}function D(b){if(k.dlg){k.dlg.caption(b)}}function z(b){e=b}function r(b){m.innerHTML=b}L();return{resize:n,setCloseCallback:z,caption:D,ready:h,show:x,close:H,domNode:k,setTitle:r}}bds.se.login={dialog:null,closeFunc:null,succFunc:null,fillUsername:false,loginUrl:"http://www.baidu.com/cache/user/html/login-1.2.html",fillUrl:"http://www.baidu.com/cache/user/html/fillusername-1.2.html",addStyle:function(b){if(baidu.ie){var c=document.createStyleSheet();c.cssText=b}else{var a=document.createElement("style");a.type="text/css";a.appendChild(document.createTextNode(b));document.getElementsByTagName("HEAD")[0].appendChild(a)}},init:function(){this.initStyle();this.initLogin();this.setUserInfo();var a=this;bds.comm.loginAction.push(function(b,c){a.setUserInfo(c)})},initStyle:function(){var a=[".bd_dialog{border:1px solid #ccc;background:#fff;color:#333;overflow:hidden}",".bd_dialog_handle{width:100%;height:35px;overflow:hidden;background:#fcfcfc;border-bottom:1px solid #f2f2f2;cursor:move;-moz-user-select:none}",".bd_dialog_title{line-height:24px;font-size:14px;font-weight:bold;float:left;overflow:hidden;margin:6px 10px 0 20px}",".bd_dialog_close{width:14px;height:13px;float:right;background:url(http://s1.bdstatic.com/r/www/cache/user/img/login3.png) 0 -161px;overflow:hidden;margin:10px 10px 0 0;cursor:pointer}",".bd_dialog_close_hover{background-position:-19px -161px}",".bd_dialog_close_down{background-position:-38px -161px}",".bd_dialog_main{width:auto;height:auto;padding:30px 5px 0;overflow:hidden;background:#FFF}"];this.addStyle(a.join(""))},initLogin:function(){var b=document.createElement("DIV");b.style.height="100%";b.innerHTML='<iframe id="login_iframe" width="100%" height="100%" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="about:blank"></iframe>';var a={domNode:b,width:454,height:370,mask:true,shadow:true,drag:true,closeFunc:function(){user_c({fm:"set",tab:"close"})}};this.dialog=new Dialog(a)},setUserInfo:function(b){var a=b||bds.comm.user;if(!a){return}var f=baidu.g("u");var d=(document.URL.indexOf("dsp=")!=-1)?"?dsp=pc":"";if(bds.comm.ishome){}else{var e=bds.comm.username==""?"https:/passport.baidu.com/v2/?ucenteradduname":"http://www.baidu.com/p/"+a+"?from=mn";f.innerHTML="<span id='user'><a href='"+e+"' class='un'  onmousedown=\"return user_c({'fm':'set','tab':'home'})\">"+a+"</a><div id='userMenu'><ul><li><a href='"+e+"' onmousedown=\"return user_c({'fm':'set','tab':'myhome'})\">�ҵ���ҳ</a></li><li><a href='http://passport.baidu.com' onmousedown=\"return user_c({'fm':'set','tab':'username'})\">��������</a></li><li class='nl'><a href='http://passport.baidu.com/?logout&tpl=mn&u="+encodeURIComponent(document.location.href)+"' onmousedown=\"return user_c({'fm':'set','tab':'logout'})\">�˳�</a></li></ul></div></span>|<a href='http://www.baidu.com/gaoji/preferences.html' onmousedown=\"return user_c({'fm':'set','tab':'setting','login':'1'})\">��������</a>|<a href='/"+d+"' class='last' onmousedown=\"return user_c({'fm':'set','tab':'index','login':'1'})\">�ٶ���ҳ</a>"}var a=baidu.g("user");var c=baidu.g("userMenu");if(a&&c){baidu.on(a,"mouseover",function(g){c.style.display="block"},true);baidu.on(a,"mouseout",function(g){c.style.display="none"},true)}},resize:function(a,b){this.dialog.resize(a,b)},setIframeUrl:function(a){baidu.g("login_iframe").src=a},open:function(d,a){var b=this.loginUrl;var c=false;if(bds.comm.user!=""&&a){b=this.fillUrl;c=true}this.fillUsername=a||false;this.dialog.show();if(c){this.dialog.setTitle("��д�û���")}this.setIframeUrl(b);this.succFunc=d||function(){window.document.location.reload(true)};this.closeFunc=d||function(){};this.dialog.setCloseCallback(this.closeFunc)},close:function(){this.dialog.close(true)},success:function(a,d,b){if(this.fillUsername&&d==""){this.setIframeUrl(this.fillUrl);this.dialog.setTitle("��д�û���");var c=this;setTimeout(function(){c.setComm(a,d);c.runLoginAction(a)},20);user_c({fm:"set",tab:"showfill"})}else{user_c({fm:"set",tab:"loginOK",type:b});var c=this;setTimeout(function(){c.setComm(a,d);c.succFunc.call(window,1,a);c.runLoginAction(a);c.close()},20)}},runLoginAction:function(a){for(var b=0;b<bds.comm.loginAction.length;b++){bds.comm.loginAction[b].call(window,1,a)}},setComm:function(a,b){if(!bds.comm){return}bds.comm.user=a;bds.comm.username=b;window.bdUser=a},tongji:function(a){user_c({fm:"set",tab:a})}};bds.se.login.init();window._invoke_login=function(b,a){bds.se.login.open(b,a)};if(baidu.g("lb")){baidu.on("lb","mousedown",function(){bds.se.login.open()})};