/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"c":[".demo-unit,.tk-proxima-nova,body,h2,h3","\"proxima-nova\",sans-serif",".header h1,.hero h1,.hero h2,.tk-omnes-pro","\"omnes-pro\",sans-serif"],"f":"//use.typekit.net/c/6cc2c3/omnes-pro:n2:n3,proxima-nova:n1:n4:n7.X33:J:2,X35:J:2,Vmv:J:2,W0V:J:2,W0Y:J:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9efe135b2a62ccbfeb2638961e3cd6d5df100b524906256756fe4a939aedb86be4646da7d73dd13ddebc724d37b9193811f009e0aeaf00cffcb05febc09fd059969771fe31b5c1abac6d4d5b49893616fd28202efc42d8bf1efbcef19ada5cc6715a22657894f5ee21b156f964f74bf987708fb6f9cdfa291a4f582d8f9a9f6a9452d39f8fd1b8986b4c1303a13d68d939ee5ea0339425340aee7c282c922c1c93aecb354d2b2c1248651a8e0721b0026140b5d40aa8efb65af6b06928dddbefc6d369dace2af77e16342c2edadf8d5a31acea016f0af36b317731e08857bde99983ab0dbc96f3030446a9e48e9e8b873551892b4d9309e9437239b695ef1e4299f687a3343651169d60c2f47a0ff1e8f9dd023f560814afc8071f14f5b49d3fcdcce2282fc50d7978cf5f629a5ee65c71640a4bdb48252ae90982a3ee5ea8c13af9838bb6996da37b4d0d75bdb066210a30b439c9b5b2837d680b34405f4aef1eddf332edf0d2244bed0b5b0505c38b513016eb6fbd74508b5b851c5dc22eb526584ffe9e4fcebd797cf6f2fa94cdea69d8ca460742e6612d52d4639584f5c88502cfebadb4f59e2cf8feeba86d78fc96e8c8991e9ce05ceac42df093c8aced70d6b3128ce54bef15e308a4f02eb4dde961d5b37b8d35bed8c3fddb2a726d","fn":["omnes-pro",["n2","n3"],"proxima-nova",["n1","n4","n7"]],"k":"//use.typekit.net/{id}.js","p":"//p.typekit.net/p.gif?s=1&k=ajf8ggy&ht=tk&h={host}&f=139.175.171.7994.7992&a=22525&_={_}","w":"ajf8ggy"};
/*{"created":"2013-04-11T09:35:32Z","k":"1.5.2"}*/
;(function(window,document,undefined){
    var g=void 0,k=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var aa=this;function ba(a,c){var b=a.split("."),e=aa;!(b[0]in e)&&e.execScript&&e.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)!b.length&&c!==g?e[d]=c:e=e[d]?e[d]:e[d]={}}aa.ab=k;function ca(a,c,b){return a.call.apply(a.bind,arguments)}
    function fa(a,c,b){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,e);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function q(a,c,b){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:fa;return q.apply(l,arguments)}var ga=Date.now||function(){return+new Date};
    function r(a,c){this.Ra=a;this.va=c||a;this.j=this.va.document;this.B=g}r.prototype.createElement=function(a,c,b){a=this.j.createElement(a);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?this.fa(a,c[e]):a.setAttribute(e,c[e]));b&&a.appendChild(this.j.createTextNode(b));return a};function s(a,c,b){a=a.j.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function ha(a){function c(){document.body?a():setTimeout(c,0)}c()}
    function t(a,c){for(var b=a.className.split(/\s+/),e=0,d=b.length;e<d;e++)if(b[e]==c)return;b.push(c);a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(a,c){for(var b=a.className.split(/\s+/),e=[],d=0,f=b.length;d<f;d++)b[d]!=c&&e.push(b[d]);a.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ia(a,c){for(var b=a.className.split(/\s+/),e=0,d=b.length;e<d;e++)if(b[e]==c)return k;return m}
    r.prototype.fa=function(a,c){this.da()?a.setAttribute("style",c):a.style.cssText=c};r.prototype.da=function(){if(this.B===g){var a=this.j.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.B=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.B};function v(a,c,b){this.$a=a;this.ha=c;this.Za=b}ba("internalWebfont.BrowserInfo",v);v.prototype.Ja=n("$a");v.prototype.hasWebFontSupport=v.prototype.Ja;v.prototype.Ka=n("ha");v.prototype.hasWebKitFallbackBug=v.prototype.Ka;
    v.prototype.La=n("Za");v.prototype.hasWebKitMetricsBug=v.prototype.La;function w(a,c,b,e,d,f,h,j){this.H=a;this.Ya=c;this.Ea=b;this.Da=e;this.Ua=d;this.Ta=f;this.Ca=h;this.v=j}ba("internalWebfont.UserAgent",w);w.prototype.getName=n("H");w.prototype.getName=w.prototype.getName;w.prototype.getVersion=n("Ya");w.prototype.getVersion=w.prototype.getVersion;w.prototype.getEngine=n("Ea");w.prototype.getEngine=w.prototype.getEngine;w.prototype.getEngineVersion=n("Da");w.prototype.getEngineVersion=w.prototype.getEngineVersion;
    w.prototype.getPlatform=n("Ua");w.prototype.getPlatform=w.prototype.getPlatform;w.prototype.getPlatformVersion=n("Ta");w.prototype.getPlatformVersion=w.prototype.getPlatformVersion;w.prototype.getDocumentMode=n("Ca");w.prototype.getDocumentMode=w.prototype.getDocumentMode;w.prototype.Ha=n("v");w.prototype.getBrowserInfo=w.prototype.Ha;function ja(a,c){this.e=a;this.u=c}var ka=new w("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",g,new v(m,m,m));
    ja.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")){a=x(this);var c=y(this),b=z(this.e,/(MSIE [\d\w\.]+)/,1);if(""!=b){var e=b.split(" "),b=e[0],e=e[1],d=A(e),f=A(c);a=new w(b,e,b,e,a,c,C(this.u),new v("Windows"==a&&6<=d.l||"Windows Phone"==a&&8<=f.l,m,m))}else a=new w("MSIE","Unknown","MSIE","Unknown",a,c,C(this.u),new v(m,m,m))}else if(-1!=this.e.indexOf("Opera"))a=la(this);else if(/AppleWeb(K|k)it/.test(this.e)){a=x(this);var c=y(this),b=z(this.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,
        1),h=m;""==b&&(b="Unknown");e=A(b);h=A(c);d="Unknown";-1!=this.e.indexOf("Chrome")||-1!=this.e.indexOf("CrMo")||-1!=this.e.indexOf("CriOS")?d="Chrome":/Silk\/\d/.test(this.e)?d="Silk":"BlackBerry"==a||"Android"==a?d="BuiltinBrowser":-1!=this.e.indexOf("Safari")?d="Safari":-1!=this.e.indexOf("AdobeAIR")&&(d="AdobeAIR");f="Unknown";"BuiltinBrowser"==d?f="Unknown":/Silk\/\d/.test(this.e)?f=z(this.e,/Silk\/([\d\._]+)/,1):-1!=this.e.indexOf("Version/")?f=z(this.e,/Version\/([\d\.\w]+)/,1):"Chrome"==d?
        f=z(this.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(f=z(this.e,/AdobeAIR\/([\d\.]+)/,1));"AdobeAIR"==d?(h=A(f),h=2<h.l||2==h.l&&5<=h.A):h="BlackBerry"==a?10<=h.l:"Android"==a?2<h.l||2==h.l&&1<h.A:526<=e.l||525<=e.l&&13<=e.A;a=new w(d,f,"AppleWebKit",b,a,c,C(this.u),new v(h,536>e.l||536==e.l&&11>e.A,"iPhone"==a||"iPad"==a||"iPod"==a||"Macintosh"==a))}else-1!=this.e.indexOf("Gecko")?(c=a="Unknown",b=m,-1!=this.e.indexOf("Firefox")?(a="Firefox",e=z(this.e,/Firefox\/([\d\w\.]+)/,1),""!=e&&
        (b=A(e),c=e,b=3<=b.l&&5<=b.A)):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),e=z(this.e,/rv:([^\)]+)/,1),""==e?e="Unknown":b||(b=A(e),b=1<b.l||1==b.l&&9<b.A||1==b.l&&9==b.A&&2<=b.Sa||e.match(/1\.9\.1b[123]/)!=l||e.match(/1\.9\.1\.[\d\.]+/)!=l),a=new w(a,c,"Gecko",e,x(this),y(this),C(this.u),new v(b,m,m))):a=ka;return a};
    function x(a){var c=z(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=c)return/BB\d{2}/.test(c)&&(c="BlackBerry"),c;a=z(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
    function y(a){var c=z(a.e,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);return c||(c=z(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(c=z(a.e,/(iPhone )?OS ([\d_]+)/,2))||(c=z(a.e,/Linux ([i\d]+)/,1))?c:(a=z(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
    function la(a){var c="Unknown",b="Unknown",e=z(a.e,/(Presto\/[\d\w\.]+)/,1);""!=e?(b=e.split("/"),c=b[0],b=b[1]):(-1!=a.e.indexOf("Gecko")&&(c="Gecko"),e=z(a.e,/rv:([^\)]+)/,1),""!=e&&(b=e));if(-1!=a.e.indexOf("Opera Mini/"))return e=z(a.e,/Opera Mini\/([\d\.]+)/,1),""==e&&(e="Unknown"),new w("OperaMini",e,c,b,x(a),y(a),C(a.u),new v(m,m,m));if(-1!=a.e.indexOf("Version/")){var d=z(a.e,/Version\/([\d\.]+)/,1);if(""!=d)return e=A(d),new w("Opera",d,c,b,x(a),y(a),C(a.u),new v(10<=e.l,m,m))}d=z(a.e,/Opera[\/ ]([\d\.]+)/,
        1);return""!=d?(e=A(d),new w("Opera",d,c,b,x(a),y(a),C(a.u),new v(10<=e.l,m,m))):new w("Opera","Unknown",c,b,x(a),y(a),C(a.u),new v(m,m,m))}function A(a){a=/([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+)?)?)?/.exec(a);var c={};a&&(c.l=parseInt(a[1]||-1,10),c.A=parseInt(a[2]||-1,10),c.Sa=parseInt(a[3]||-1,10));return c}function z(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function C(a){if(a.documentMode)return a.documentMode}function ma(a){this.Pa=a||"-"}
    ma.prototype.h=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Pa)};function na(a,c,b){this.g=a;this.m=c;this.Y=b;this.q="wf";this.n=new ma("-")}function D(a){u(a.m,a.n.h(a.q,"loading"));ia(a.m,a.n.h(a.q,"active"))||t(a.m,a.n.h(a.q,"inactive"));F(a,"inactive")}function F(a,c,b){if(a.Y[c])if(b)a.Y[c](b.getName(),G(b));else a.Y[c]()}
    function H(a,c){this.H=a;this.ia=4;this.T="n";var b=(c||"n4").match(/^([nio])([1-9])$/i);b&&(this.T=b[1],this.ia=parseInt(b[2],10))}H.prototype.getName=n("H");function oa(a){var c=[];a=a.H.split(/,\s*/);for(var b=0;b<a.length;b++){var e=a[b].replace(/['"]/g,"");-1==e.indexOf(" ")?c.push(e):c.push("'"+e+"'")}return c.join(",")}function G(a){return a.T+a.ia}function pa(a){var c="normal",b=a.ia+"00";"o"===a.T?c="oblique":"i"===a.T&&(c="italic");return"font-style:"+c+";font-weight:"+b+";"}
    function I(a,c){this.g=a;this.N=c;this.C=this.g.createElement("span",{"aria-hidden":"true"},this.N)}function J(a,c){a.g.fa(a.C,"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+oa(c)+";"+pa(c))}function qa(a){s(a.g,"body",a.C)}I.prototype.remove=function(){var a=this.C;a.parentNode&&a.parentNode.removeChild(a)};
    function ra(a,c,b,e,d,f,h,j){this.ja=a;this.Oa=c;this.g=b;this.z=e;this.N=j||"BESbswy";this.v=d;this.Q={};this.ga=f||5E3;this.wa=h||l;this.M=this.L=l;a=new I(this.g,this.N);qa(a);for(var p in K)K.hasOwnProperty(p)&&(J(a,new H(K[p],G(this.z))),this.Q[K[p]]=a.C.offsetWidth);a.remove()}var K={eb:"serif",cb:"sans-serif",bb:"monospace"};
    ra.prototype.start=function(){this.L=new I(this.g,this.N);qa(this.L);this.M=new I(this.g,this.N);qa(this.M);this.Wa=ga();J(this.L,new H(this.z.getName()+",serif",G(this.z)));J(this.M,new H(this.z.getName()+",sans-serif",G(this.z)));sa(this)};function ta(a,c,b){for(var e in K)if(K.hasOwnProperty(e)&&c===a.Q[K[e]]&&b===a.Q[K[e]])return k;return m}
    function sa(a){var c=a.L.C.offsetWidth,b=a.M.C.offsetWidth;c===a.Q.serif&&b===a.Q["sans-serif"]||a.v.ha&&ta(a,c,b)?ga()-a.Wa>=a.ga?a.v.ha&&ta(a,c,b)&&(a.wa===l||a.wa.hasOwnProperty(a.z.getName()))?ua(a,a.ja):ua(a,a.Oa):setTimeout(q(function(){sa(this)},a),25):ua(a,a.ja)}function ua(a,c){a.L.remove();a.M.remove();c(a.z)}function L(a,c,b,e){this.g=c;this.D=b;this.aa=0;this.za=this.ta=m;this.ga=e;this.v=a.v}
    L.prototype.watch=function(a,c,b,e){var d=a.length;if(0===d&&e)D(this.D);else{this.aa+=d;e&&(this.ta=e);for(e=0;e<d;e++){var f=a[e],h=c[f.getName()],j=this.D,p=f;t(j.m,j.n.h(j.q,p.getName(),G(p).toString(),"loading"));F(j,"fontloading",p);j=q(this.Fa,this);p=q(this.Ga,this);(new b(j,p,this.g,f,this.v,this.ga,l,h)).start()}}};
    L.prototype.Fa=function(a){var c=this.D;u(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"loading"));u(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"inactive"));t(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"active"));F(c,"fontactive",a);this.za=k;va(this)};L.prototype.Ga=function(a){var c=this.D;u(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"loading"));ia(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"active"))||t(c.m,c.n.h(c.q,a.getName(),G(a).toString(),"inactive"));F(c,"fontinactive",a);va(this)};
    function va(a){0==--a.aa&&a.ta&&(a.za?(a=a.D,u(a.m,a.n.h(a.q,"loading")),u(a.m,a.n.h(a.q,"inactive")),t(a.m,a.n.h(a.q,"active")),F(a,"active")):D(a.D))}function M(a,c){this.Ra=a;this.va=c||a;this.j=document;this.B=g}M.prototype=r.prototype;function O(a){return"https:"==a.j.location.protocol}M.prototype.Ia=function(){return this.j.location.hostname};
    function wa(a,c,b){var e=a.j.getElementsByTagName("head")[0];if(e){var d=a.j.createElement("script");d.src=c;var f=m;d.onload=d.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=k,b&&b(),d.onload=d.onreadystatechange=l,"HEAD"==d.parentNode.tagName&&e.removeChild(d)};e.appendChild(d)}}M.prototype.fa=function(a,c){this.da()?a.setAttribute("style",c):a.style.cssText=c};
    M.prototype.da=function(){if(this.B===g){var a=this.j.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.B=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.B};function xa(){var a=[{name:"font-family",value:P.c[i+1]}];this.Va=[P.c[i]];this.oa=a}function ya(a){for(var c=a.Va.join(","),b=[],e=0;e<a.oa.length;e++){var d=a.oa[e];b.push(d.name+":"+d.value+";")}return c+"{"+b.join("")+"}"}
    function za(a,c,b,e){this.K=a;this.S=c;this.Ma=b;this.fb=e;this.qa={};this.pa={}}za.prototype.F=function(a){return a?(this.qa[a.U]||this.S).slice(0):this.S.slice(0)};za.prototype.watch=function(a,c,b){var e=[],d={};Aa(this,c,e,d);a(e,d,b)};function Aa(a,c,b,e){b.push(a.K);e[a.K]=a.F(c);a=a.pa[c.U]||[];for(c=0;c<a.length;c++){for(var d=a[c],f=d.K,h=m,j=0;j<b.length;j++)b[j]==f&&(h=k);h||(b.push(f),e[f]=d.F())}}function Ca(a,c){this.K=a;this.S=c}Ca.prototype.F=n("S");
    function R(a,c,b){this.Ma=a;this.U=c;this.ra=b}function Da(){this.ma=this.Ba=this.r=this.O=this.P=k}function S(a){Ea.X.push(a)}function T(a){this.g=a;this.na=this.t=this.e=this.W=l;this.o=[];this.R=[];this.Aa=this.ba=this.Z=this.$=l}
    function Fa(a,c){a.e=c;if(a.W){var b;a:{b=a.W;for(var e=a.e,d=a.na,f=0;f<b.X.length;f++){var h=b.X[f],j=e,p=d;p||(p=new Da);if(h.ra&&h.ra(j.getName(),j.getVersion(),j.getEngine(),j.getEngineVersion(),j.getPlatform(),j.getPlatformVersion(),j.getDocumentMode(),p)){b=h;break a}}b=l}a.t=b}}T.prototype.supportsConfiguredBrowser=function(){return!!this.t};
    T.prototype.init=function(){if(0<this.R.length){for(var a=[],c=0;c<this.R.length;c++)a.push(ya(this.R[c]));var c=this.g,a=a.join(""),b=this.g.j.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));s(c,"head",b)}};
    T.prototype.load=function(a,c){var b=this.t.U;if(this.ba){var e;e=this.ba;var d=e.I[b];e=d?Ga(e,d):l;for(d=0;d<this.o.length;d++){for(var f=this.o[d],h=this.t,j=e,p=[],ab=f.K.split(",")[0].replace(/"|'/g,""),Q=f.F(),N=p,B=g,E=[],Ba={},da=0;da<Q.length;da++)B=Q[da],0<B.length&&!Ba[B]&&(Ba[B]=k,E.push(B));Q=E;j=j.ya?j.ya(ab,Q,N):Q;h=h.U;f.qa[h]=j;f.pa[h]=p}}if(this.$){e=[];if(this.Z){e=new Ha(this.g,this.t,this.o);d=[];f=this.Z.J[b]||[];for(p=0;p<f.length;p++){a:switch(f[p]){case "observeddomain":h=
        new Ia(e.g);break a;case "fontmask":h=new Ja(e.t,e.o);break a;default:h=l}h&&d.push(h)}e=d}d=[];for(f=0;f<e.length;f++)d.push(e[f].toString());b=this.$.h(O(this.g),{format:b,extras:d});s(this.g,"head",this.g.createElement("link",{rel:"stylesheet",href:b}))}if(a){var ea=this,cb=this.t;ha(function(){for(var b=0;b<ea.o.length;b++)ea.o[b].watch(a,cb,c&&b==ea.o.length-1)})}};T.prototype.collectFontFamilies=function(a,c){for(var b=0;b<this.o.length;b++)Aa(this.o[b],this.t,a,c)};
    T.prototype.performOptionalActions=function(){if(this.ea){var a=this,c=this.e,b=this.g;ha(function(){var e=a.ea;if(e.xa){var d=window.__adobewebfontsappname__,d=d?d.toString().substr(0,20):"",e=e.xa.h(O(b),{host:encodeURIComponent(b.j.location.hostname),app:encodeURIComponent(d),_:(+new Date).toString()}),f=new Image(1,1);f.src=e;f.onload=function(){f.onload=l}}e=a.ea;e.la&&(e=e.la.h(c,b),s(b,"body",e))})}};function Ka(a,c,b,e,d){this.Qa=a;this.g=c;this.e=b;this.m=e;this.ka=d;this.s=[]}
    Ka.prototype.V=function(a){this.s.push(a)};Ka.prototype.load=function(a,c){var b=a,e=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)e=b||{},b=[];if(b.length)for(var d=this,f=b.length,h=0;h<b.length;h++){var j=this.Qa.h(O(this.g),{id:encodeURIComponent(b[h])});wa(this.g,j,function(){0==--f&&La(d,e)})}else La(this,e)};
    function La(a,c){if(0!=a.s.length){for(var b=new na(a.g,a.m,c),e=m,d=0;d<a.s.length;d++)a.s[d].init(),e=e||a.s[d].supportsConfiguredBrowser();if(e){t(b.m,b.n.h(b.q,"loading"));F(b,"loading");for(var f=new L(a.e,a.g,b),b=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var N=a[e];if(b[N])for(var B=b[N],E=0;E<B.length;E+=1)d.push(new H(N,B[E]));else d.push(new H(N))}f.watch(d,{},ra,c)},e=0;e<a.s.length;e++)d=a.s[e],d.supportsConfiguredBrowser()&&(d.load(b,e==a.s.length-1),d.performOptionalActions(window))}else D(b);
        a.s=[]}}function Ma(a,c){this.G=a;this.ka=c;this.s=[]}Ma.prototype.V=function(a){this.s.push(a)};Ma.prototype.load=function(){var a=this.G.__webfonttypekitmodule__;if(a)for(var c=0;c<this.s.length;c++){var b=this.s[c],e=a[b.Aa];if(e){var d=this.ka;e(function(a,c,e){c=[];var p={};Fa(b,a);b.supportsConfiguredBrowser()&&(b.init(),b.load(l,d),b.collectFontFamilies(c,p),b.performOptionalActions(window));e(b.supportsConfiguredBrowser(),c,p)})}}};function Na(a,c){this.H=a;this.ya=c}
    Na.prototype.getName=n("H");function Oa(a){var c=U;Ga(c,a.getName())||c.ca.push(a)}function Ga(a,c){for(var b=0;b<a.ca.length;b++){var e=a.ca[b];if(c===e.getName())return e}return l}function Ha(a,c,b){this.g=a;this.t=c;this.o=b}function Ia(a){this.g=a}Ia.prototype.toString=function(){return encodeURIComponent(this.g.Ia?this.g.j.location.hostname:document.location.hostname)};function Ja(a,c){this.t=a;this.o=c}
    Ja.prototype.toString=function(){for(var a=[],c=0;c<this.o.length;c++)for(var b=this.o[c],e=b.F(),b=b.F(this.t),d=0;d<e.length;d++){var f;a:{for(f=0;f<b.length;f++)if(e[d]===b[f]){f=k;break a}f=m}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(e=a.length;0<e;e-=4)b=a.slice(0>e-4?0:e-4,e),c.unshift(parseInt(b,2).toString(16));return c.join("")};function V(a){this.Xa=a}
    V.prototype.h=function(a,c){var b=c||{},e=this.Xa.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,e){return e&&b[c]?"/"+b[c].join("/"):b[c]||""});e.match(/^\/\//)&&(e=(a?"https:":"http:")+e);return e.replace(/\/*\?*($|\?)/,"$1")};function Pa(a,c,b,e){this.G=a;this.j=c;this.Na=b;this.ua=e}
    Pa.prototype.h=function(a,c){var b=this.j.createElement("img");b.setAttribute("width",62);b.setAttribute("height",25);b.setAttribute("src",this.Na.h(O(c)));b.setAttribute("class","typekit-badge");b.setAttribute("alt","Fonts by Typekit");b.setAttribute("title","Information about the fonts used on this site");b.style.position="fixed";b.style.zIndex=2E9;b.style.right=0;b.style.bottom=0;b.style.cursor="pointer";b.style.border=0;"Opera"!=a.getName()&&(b.style.content="none");b.style.display="inline";b.style["float"]=
        "none";b.style.height="25px";b.style.left="auto";b.style.margin=0;b.style.maxHeight="25px";b.style.maxWidth="62px";b.style.minHeight="25px";b.style.minWidth="62px";b.style.orphans=2;b.style.outline="none";b.style.overflow="visible";b.style.padding=0;b.style.pageBreakAfter="auto";b.style.pageBreakBefore="auto";b.style.pageBreakInside="auto";b.style.tableLayout="auto";b.style.textIndent=0;b.style.top="auto";b.style.unicodeBidi="normal";b.style.verticalAlign="baseline";b.style.visibility="visible";b.style.widows=
        2;b.style.width="65px";if(this.ua){var e=this.j,d=this.ua;Qa(this,b,"click",function(){e.location.href=d})}var f=a.getPlatform();if("MSIE"==a.getName()&&"Windows Phone"!=f){b.style.position="absolute";var h=this,j=function(){var a=Ra(h,"scrollLeft","scrollTop"),c=Ra(h,"clientWidth","clientHeight");b.style.bottom="auto";b.style.right="auto";b.style.top=a[1]+c[1]-25+"px";b.style.left=a[0]+c[0]-3-62+"px"};Qa(this,this.G,"scroll",j);Qa(this,this.G,"resize",j)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==
        f||"Windows Phone"==f||"BlackBerry"==f)b.style.display="none";return b};function Ra(a,c,b){var e=0,d=0;a=a.j;if(a.documentElement&&(a.documentElement[c]||a.documentElement[b]))e=a.documentElement[c],d=a.documentElement[b];else if(a.body&&(a.body[c]||a.body[b]))e=a.body[c],d=a.body[b];return[e,d]}function Qa(a,c,b,e){if(c.attachEvent){var d=a.G;c["e"+b+e]=e;c[b+e]=function(){c["e"+b+e](d.event)};c.attachEvent("on"+b,c[b+e])}else c.addEventListener(b,e,m)}var Ea=new function(){this.X=[]};
    S(new R("air-linux-win","a",function(a,c,b,e,d,f){if(b=m||("Windows"==d&&"Unknown"==f?k:m)||("Ubuntu"==d||"Linux"==d?k:m))a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=m}else a=m;return a}));
    S(new R("air-osx","b",function(a,c,b,e,d,f){if(!(b=m))b=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&b?(d=parseInt(b[1],10),f=parseInt(b[3],10),b=10<d||10==d&&4<=f):b="Macintosh"==d&&"Unknown"==f?k:m;if(b)a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=m}else a=m;return a}));
    S(new R("builtin-android2to3-android4plus","a",function(a,c,b,e,d,f,h,j){if(!(c=m))b=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=2==c&&2<=b||3==c&&1>b):c=m;c||(f=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&f?(d=parseInt(f[1],10),j=parseInt(f[2],10),c=4==d&&1<=j||4<d):c=m);return!c?m:"BuiltinBrowser"==a}));
    S(new R("builtin-android3to4","f",function(a,c,b,e,d,f,h,j){if(!(c=m))f=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&f?(d=parseInt(f[1],10),j=parseInt(f[2],10),c=3==d&&1<=j||4==d&&1>j):c=m;return!c?m:"BuiltinBrowser"==a}));S(new R("builtin-bb10plus","d",function(a,c,b,e,d,f,h,j){c=m||j.ma&&10<=parseInt(f,10);return!c?m:"BuiltinBrowser"==a}));
    S(new R("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){b=(b=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);b||(e=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&e?(b=parseInt(e[1],10),e=parseInt(e[2],10),b=6<b||6==b&&1<=e):b=m);b||(b=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&b?(f=parseInt(b[1],10),b=parseInt(b[3],10),b=10<f||10==f&&4<=b):b="Macintosh"==d&&"Unknown"==f?k:m);if(b=b||("Ubuntu"==d||"Linux"==d?k:m))a:{if("Chrome"==
        a&&(d=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(c)))if(a=parseFloat(d[1]),c=parseInt(d[2],10),d=parseInt(d[3],10),!(6<=a)&&(4<a||4==a&&249<c||4==a&&249==c&&4<=d)){a=k;break a}a=m}else a=m;return a}));
    S(new R("chrome6plus-androidany-chromeos-ipad5plus-iphone5plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,h,j){b=(b=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);b||(e=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&e?(b=parseInt(e[1],10),e=parseInt(e[2],10),b=6<b||6==b&&1<=e):b=m);b||(e=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&e?(b=parseInt(e[1],10),e=parseInt(e[3],10),b=10<b||10==b&&4<=e):b="Macintosh"==d&&"Unknown"==f?k:
        m);b=(b=(b=b||("Ubuntu"==d||"Linux"==d?k:m))||j.r&&"Android"==d)||"CrOS"==d;b||(b=j.O&&"iPad"==d?(b=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(b[1],10):m:m);b||(b=j.P&&("iPhone"==d||"iPod"==d)?(d=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(d[1],10):m:m);if(b)a:{if("Chrome"==a&&(a=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(c))&&6<=parseFloat(a[1])){a=k;break a}a=g}else a=m;return a}));
    S(new R("chrome6plus-ipad4-iphone4","a",function(a,c,b,e,d,f,h,j){if(!(b=m))a:{if(j.O&&"iPad"==d&&(b=/^([0-9]+)_([0-9]+)/.exec(f))){e=parseInt(b[2],10);b=4==parseInt(b[1],10)&&2<=e;break a}b=m}if(!b)a:{if(j.P&&("iPhone"==d||"iPod"==d))if(d=/^([0-9]+)_([0-9]+)/.exec(f)){f=parseInt(d[2],10);b=4==parseInt(d[1],10)&&2<=f;break a}b=m}if(b)a:{if("Chrome"==a&&(a=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(c))&&6<=parseFloat(a[1])){a=k;break a}a=g}else a=m;return a}));
    S(new R("ff35-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){a=(a=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);a||(a=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&a?(f=parseInt(a[1],10),a=parseInt(a[2],10),a=6<f||6==f&&1<=a):a=m);(a=a||("Ubuntu"==d||"Linux"==d?k:m))?"Gecko"==b?(b=/1.9.1b[1-3]{1}/,e=/1.9.1/.test(e)&&!b.test(e)):e=m:e=m;return e}));
    S(new R("ff35-osx","b",function(a,c,b,e,d,f){if(!(a=m))a=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),a=10<d||10==d&&4<=f):a="Macintosh"==d&&"Unknown"==f?k:m;a?"Gecko"==b?(b=/1.9.1b[1-3]{1}/,e=/1.9.1/.test(e)&&!b.test(e)):e=m:e=m;return e}));
    S(new R("ff36plus-androidany-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,h,j){a=(a=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);a||(c=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&c?(a=parseInt(c[1],10),c=parseInt(c[2],10),a=6<a||6==a&&1<=c):a=m);a||(a=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&a?(f=parseInt(a[1],10),a=parseInt(a[3],10),a=10<f||10==f&&4<=a):a="Macintosh"==d&&"Unknown"==f?k:m);if(a=(a=a||("Ubuntu"==d||"Linux"==
        d?k:m))||j.r&&"Android"==d)a:{if("Gecko"==b&&(e=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(e))){b=parseFloat(e[1]);e=parseInt(e[3],10);b=1.9<b||1.9<=b&&1<e;break a}b=m}else b=m;return b}));
    S(new R("ie6to8-win2003-win7plus-winvista-winxp","i",function(a,c,b,e,d,f,h){b=(b=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);b||(f=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&f?(d=parseInt(f[1],10),f=parseInt(f[2],10),b=6<d||6==d&&1<=f):b=m);h=b?"MSIE"==a?(a=/([0-9]+.[0-9]+)/.exec(c))?6<=parseFloat(a[1])&&(h===g||9>h):m:g:m;return h}));
    S(new R("ie9plus-win7plus-winvista","d",function(a,c,b,e,d,f,h){if(!(c=m))b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=6<c||6==c&&1<=b):c=m;a=(d=c||("Windows"==d&&"6.0"==f?k:m))?"MSIE"==a?9<=h:g:m;return a}));S(new R("ieany-winphone8plus","d",function(a,c,b,e,d,f,h,j){if(!(c=m))f=/^([0-9]+)/.exec(f),c=j.Ba&&"Windows Phone"==d&&f?8<=parseInt(f[1],10):m;return!c?m:"MSIE"==a}));
    S(new R("opera10-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){b=(b=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);b||(b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&b?(f=parseInt(b[1],10),b=parseInt(b[2],10),b=6<f||6==f&&1<=b):b=m);(b=b||("Ubuntu"==d||"Linux"==d?k:m))?"Opera"==a?(a=parseFloat(c),a=10.54<=a&&11.1>a):a=m:a=m;return a}));
    S(new R("opera10-osx","b",function(a,c,b,e,d,f){if(!(b=m))b=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&b?(d=parseInt(b[1],10),f=parseInt(b[3],10),b=10<d||10==d&&4<=f):b="Macintosh"==d&&"Unknown"==f?k:m;b?"Opera"==a?(a=parseFloat(c),a=10.54<=a&&11.1>a):a=m:a=m;return a}));
    S(new R("opera11plus-androidany-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f,h,j){b=(b=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);b||(e=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&e?(b=parseInt(e[1],10),e=parseInt(e[2],10),b=6<b||6==b&&1<=e):b=m);b||(b=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&b?(f=parseInt(b[1],10),b=parseInt(b[3],10),b=10<f||10==f&&4<=b):b="Macintosh"==d&&"Unknown"==f?k:m);b=(b=b||("Ubuntu"==d||"Linux"==
        d?k:m))||j.r&&"Android"==d;return!b?m:"Opera"==a?11.1<=parseFloat(c):m}));S(new R("safari3to5-osx","b",function(a,c,b,e,d,f){if(!(c=m))c=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&c?(d=parseInt(c[1],10),f=parseInt(c[3],10),c=10<d||10==d&&4<=f):c="Macintosh"==d&&"Unknown"==f?k:m;if(c)a:{if("Safari"==a&&"AppleWebKit"==b&&(a=/([0-9]+.[0-9]+)/.exec(e))){a=parseFloat(a[1]);a=525.13<=a&&534.5>a;break a}a=m}else a=m;return a}));
    S(new R("safari3to5-win2003-win7plus-winvista-winxp","a",function(a,c,b,e,d,f){c=(c=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);c||(f=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==d&&f?(d=parseInt(f[1],10),f=parseInt(f[2],10),c=6<d||6==d&&1<=f):c=m);if(c)a:{if("Safari"==a&&"AppleWebKit"==b&&(a=/([0-9]+.[0-9]+)/.exec(e))){a=parseFloat(a[1]);a=525.13<=a&&534.5>a;break a}a=m}else a=m;return a}));
    S(new R("safari5plus-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,e,d,f){c=(c=m||("Windows"==d&&"5.1"==f?k:m)||("Windows"==d&&"5.2"==f?k:m))||("Windows"==d&&"6.0"==f?k:m);if(!c){var h=/^([0-9]+).([0-9]+)/.exec(f);"Windows"==d&&h?(c=parseInt(h[1],10),h=parseInt(h[2],10),c=6<c||6==c&&1<=h):c=m}c||(c=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&c?(d=parseInt(c[1],10),f=parseInt(c[3],10),c=10<d||10==d&&4<=f):c="Macintosh"==d&&"Unknown"==f?k:m);if(c)a:{if("Safari"==a&&"AppleWebKit"==b&&
        (a=/([0-9]+.[0-9]+)/.exec(e))){a=534.5<=parseFloat(a[1]);break a}a=m}else a=m;return a}));
    S(new R("safariany-ipad4-iphone4","a",function(a,c,b,e,d,f,h,j){if(!(c=m))a:{if(j.O&&"iPad"==d&&(c=/^([0-9]+)_([0-9]+)/.exec(f))){e=parseInt(c[2],10);c=4==parseInt(c[1],10)&&2<=e;break a}c=m}if(!c)a:{if(j.P&&("iPhone"==d||"iPod"==d))if(f=/^([0-9]+)_([0-9]+)/.exec(f)){j=parseInt(f[2],10);c=4==parseInt(f[1],10)&&2<=j;break a}c=m}return!c?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==d||"iPad"==d)?k:m}));
    S(new R("safariany-ipad5plus-iphone5plus","d",function(a,c,b,e,d,f,h,j){if(!(c=m))c=j.O&&"iPad"==d?(c=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(c[1],10):m:m;c||(c=j.P&&("iPhone"==d||"iPod"==d)?(f=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(f[1],10):m:m);return!c?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==d||"iPad"==d)?k:m}));
    S(new R("silk1to2-android2to3-osx","a",function(a,c,b,e,d,f,h,j){if(!(b=m))e=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&e?(b=parseInt(e[1],10),e=parseInt(e[2],10),b=2==b&&2<=e||3==b&&1>e):b=m;b||(b=/^([0-9]+)(_|.)([0-9]+)/.exec(f),"Macintosh"==d&&b?(d=parseInt(b[1],10),f=parseInt(b[3],10),b=10<d||10==d&&4<=f):b="Macintosh"==d&&"Unknown"==f?k:m);return!b?m:j.r&&"Silk"==a?2>parseInt(c,10):m}));
    S(new R("silk2plus-android3to4-linux","f",function(a,c,b,e,d,f,h,j){if(!(b=m))b=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&b?(f=parseInt(b[1],10),b=parseInt(b[2],10),b=3==f&&1<=b||4==f&&1>b):b=m;d=b||("Ubuntu"==d||"Linux"==d?k:m);return!d?m:j.r&&"Silk"==a?2<=parseInt(c,10):m}));
    S(new R("silk2plus-android4plus","a",function(a,c,b,e,d,f,h,j){if(!(b=m))f=/([0-9]+).([0-9]+)/.exec(f),j.r&&"Android"==d&&f?(d=parseInt(f[1],10),f=parseInt(f[2],10),b=4==d&&1<=f||4<d):b=m;return!b?m:j.r&&"Silk"==a?2<=parseInt(c,10):m}));var U=new function(){this.ca=[];this.I={}};Oa(new Na("AllFonts",function(a,c){return c}));
    Oa(new Na("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var e=0;e<c.length;e++){var d=c[e],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+d;b.push(new Ca(f,[d]))}a={};for(d=0;d<c.length;d++)b=c[d],e=b.charAt(1),(a[e]||(a[e]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];e=[];for(d=0;d<b.length;d++)for(var f=b[d],h=0;h<f.length;h++){var j=f[h];if(a[j]){e=e.concat(a[j]);break}}b=e;e={};a=[];for(d=0;d<b.length;d++)f=b[d],e[f]||(e[f]=k,a.push(f));b=[];for(e=0;e<c.length;e++){d=c[e];
        for(f=0;f<a.length;f++)h=a[f],h==d&&b.push(h)}return b}));U.I.a="AllFonts";U.I.b="AllFonts";U.I.d="AllFonts";U.I.f="AllFonts";U.I.i="DefaultFourFontsWithSingleFvdFamilies";var W=new function(){this.J={}};W.J.a=[];W.J.b=[];W.J.d=[];W.J.f=["observeddomain"];W.J.i=["observeddomain","fontmask"];var Sa=(new ja(navigator.userAgent,document)).parse();window.Typekit||(window.Typekit={});
    if(!window.Typekit.load){var Ta=window.Typekit.config||{},Ua=l;Ta.k&&(Ua=new V(Ta.k));var Va=function(a,c){setTimeout(a,c)},X=new Ka(Ua,new M(window),Sa,document.documentElement,Va),Y=new Ma(window,Va);window.Typekit.load=function(){X.load.apply(X,arguments)};window.Typekit.addKit=function(){X.V.apply(X,arguments)}}var Wa,Xa=l,Ya=l,Za=l,$a,Z,$,P=window.Typekit.config||{};P.b&&(Xa=new V(P.b),Ya=new Pa(window,document,Xa,P.bu));P.p&&(Za=new V(P.p));$a=new function(){var a=Za;this.la=Ya;this.xa=a};
    $=new T(new M(window));$.ea=$a;Z=new Da;Z.P=!P.si;Z.O=!P.st;Z.r=!P.sa;Z.Ba=!P.sw;Z.ma=!P.sb;$.na=Z;P.w&&($.Aa=P.w);P.f&&(Wa=new V(P.f),$.$=Wa);var i;if(P.fn)for(i=0;i<P.fn.length;i+=2)$.o.push(new za(P.fn[i],P.fn[i+1]));if(P.c)for(i=0;i<P.c.length;i+=2)$.R.push(new xa);$.Z=W;$.W=Ea;$.ba=U;var bb;if(bb=Y)bb=!!Y.G.__webfonttypekitmodule__;bb?(Y.V($),Y.load()):(Fa($,Sa),window.Typekit.addKit($));
})(this,document);
