!function(){"use strict";function e(){return window.pageYOffset?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function t(t){function n(e){var t=Math.round(l/75);t>=20&&(t=20),setTimeout(function(){window.scrollTo(0,e)},u*t)}var o,a,c=e(),m=document.getElementById(t).offsetTop,l=m>c?m-c:c-m,u=0;if(100>l)return void window.scrollTo(0,m);if(o=Math.round(l/25),a=m>c?c+o:c-o,m>c)for(var r=c;m>r;r+=o)n(a),a+=o,a>m&&(a=m),u++;else for(var r=c;r>m;r-=o)n(a),a-=o,m>a&&(a=m),u++}function n(e){var t=document.getElementById(e),n=document.getElementById("nav-home"),o=document.getElementById("nav-work"),a=document.getElementById("nav-contact");n.className="nav-item",o.className="nav-item",a.className="nav-item",t.className="nav-item active"}function o(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("js-nav"),o=document.getElementById("home").offsetTop,c=document.getElementById("work").offsetTop,m=document.getElementById("contact").offsetTop;"home"!==a&&e>o&&c>e?(n("nav-home"),t.className="nav default",a="home"):"work"!==a&&e>c-1&&m-100>e?(n("nav-work"),t.className="nav nav-fixed",a="work"):"contact"!==a&&e>m-101&&(n("nav-contact"),a="contact")}var a="";window.addEventListener("scroll",o,!1),function(){var e=$("#js-nav-list");e.on("click",function(e){var n=e.target.parentElement;e.target!==this&&(e.preventDefault(),t(n.hash.slice(1)))})}(),function(){function e(){var e=$("#js-form-submit-msg");e.toggle("show"),c.toggle("hide")}function t(e){var t={name:e.name.value||"",_replyto:e._replyto.value,message:e.message.value};return t}function n(){return!!m.message.value&&!!m._replyto.value}function o(){$.ajax({url:"//formspree.io/ikandrius@gmail.com",method:"POST",data:t(m),dataType:"json"}),e(),setTimeout(function(){e()},5e3)}function a(e){e.preventDefault?e.preventDefault():e.returnValue=!1,m.checkValidity?m.checkValidity()&&o():n()&&o()}var c=$("#js-form-submit"),m=document.getElementsByTagName("form")[0];c.on("click",a)}()}();