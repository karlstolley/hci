/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,l,f,u="modernizr",d=a("div"),c=p();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=f,x.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function l(){d&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var d,p,c,h,v,y=["modernizr","tspan","samp"];!z.style&&y.length;)d=!0,z.modElem=a(y.shift()),z.style=z.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=z.style[h],i(h,"-")&&(h=u(h)),z.style[h]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?h:!0;try{z.style[h]=o}catch(g){}if(z.style[h]!=v)return l(),"pfx"==n?h:!0}return l(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",b=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=b;var E=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

(function($) {

  // Helper for toggling label text
  $.fn.toggleLabel = function(beforetxt, aftertxt) {
    var txt = beforetxt;
    if (this.html()==txt) {
      txt = aftertxt;
    }
    this.html(txt);
  };

  // Utility class for JavaScript detection in CSS
  $('html').addClass('hasjs');


  // Highlight the current and next weeks

  // Get the current time as a Unix timestamp
  var currentTime = new Date();
  currentTime = Math.round(currentTime.getTime() / 1000);

  // Arrays to make reader-friendly days and months
  var namedDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
  var namedMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // Create an array to hold the future weeks
  var futureWeeks = [];

  // Create a variable to hold HTML for the toggle label
  var toggledLabel;



  // Go through each week to build the array of future weeks
  $('.week').each(function() {
      var weekTime = new Date($(this).attr('data-expires'));
      weekTime = Math.round(weekTime.getTime() / 1000);
      if ((weekTime - currentTime) > 0) {
        futureWeeks.push($(this));
      }
  });

  // Until the semester is over, do nice things with the calendar
  if (futureWeeks.length > 0) {

      // Put an .extended class on all weeks
      $('.week').each(function() {
          $(this).addClass('extended');
      });

    // Show the current week
    futureWeeks[0].addClass('preview is-current').removeClass('extended').attr('id','current-week');

    // If there is another week beyond the current one, show it as well
    if (futureWeeks[1]!==undefined) {
      futureWeeks[1].addClass('preview is-next').removeClass('extended');
      var dueDate = new Date(futureWeeks[0].attr('data-expires'));
      $('#current-week .assigned h3').html('Assigned Work <small>Due ' + namedDays[dueDate.getDay()] + ' ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate() +'</small>');
    }

    // Watch for hashes pointing to #current-week or #week-XX
    if (window.location.hash.indexOf('week') === -1) {

      toggledLabel = ' <small class="button"><span class="showing">Current</span> Weeks <a class="toggle" href="#current-week">Show All</a></small>';

    }
    else {

      $('.primary').addClass('is-visible');
      toggledLabel = ' <small class="button"><span class="showing">All</span> Weeks <a class="toggle" href="#current-week">Show Current</a></small>';

    }

  }

  // Toggles for showing full calendar
  // Append a show link (.button)
  $('.label').append(toggledLabel);

  // Toggle to actually show/hide content
  $('.button').on('click', function(e) {
    $(this).toggleClass('is-active');
    $(this).find('.showing').toggleLabel('All','Current');
    $(this).find('.toggle').toggleLabel('Show All', 'Show Only Current');
    $(this).closest('.primary').toggleClass('is-visible');
  });

})(jQuery);
