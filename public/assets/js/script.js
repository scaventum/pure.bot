"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var AttrHelper=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"toggleClass",value:function(t,e){for(var i=t.className.split(/\s+/),n=i.length,a=0;a<n;a++)if(i[a]===e){i.splice(a,1);break}n===i.length&&i.push(e),t.className=i.join(" ")}},{key:"hasClass",value:function(t,e){return-1!==t.className.indexOf(e)}},{key:"removeElementsByClass",value:function(t){if(t.length>0)for(var e=t.length-1;e>=0;e--)t[e].parentNode.removeChild(t[e])}}]),t}(),PositionHelper=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"isScrolledIntoView",value:function(t){var e=t.getBoundingClientRect(),i=e.top,n=e.bottom;return i<window.innerHeight&&n>=0}}]),t}(),Animations=function(){function t(){_classCallCheck(this,t),this.animations={},this.speed=100,this.position_helper=new PositionHelper}return _createClass(t,[{key:"init",value:function(){var t=this;this.animations=Array.prototype.slice.call(document.querySelectorAll("[data-animation]")),this.animations.forEach(function(e){t.position_helper.isScrolledIntoView(e)&&t.animate(e)}),window.addEventListener("scroll",function(e){t.animations.forEach(function(e){t.position_helper.isScrolledIntoView(e)&&t.animate(e)})})}},{key:"animate",value:function(t){var e=t.dataset.animation||t.getAttribute("animation"),i=t.dataset.animationSpeed||this.speed;i=isNaN(i)?this.speed:i,"function"==typeof this[e]&&this[e](t,i),this.removeAnimation(t)}},{key:"typewriter",value:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=(n=0==n.length?t.innerHTML:n).length;t.innerHTML=a,a+=n.charAt(o),t.innerHTML=a+"<span class='typwriter__blink'>_</span>",o<s&&(o++,setTimeout(function(){i.typewriter(t,e,n,a,o)},e))}},{key:"removeAnimation",value:function(t){t.removeAttribute("data-animation"),this.animations=Array.prototype.slice.call(document.querySelectorAll("[data-animation]"))}}]),t}(),animations=new Animations,ChatBox=function(){function t(){_classCallCheck(this,t),this.attr_helper=new AttrHelper,this.chatbox="",this.container="",this.chatbox_form="",this.chatbox_list="",this.chatbox_message_box="",this.welcome="",this.initiated=!1}return _createClass(t,[{key:"init",value:function(){var t=this;this.chatbox=document.querySelector(".chat-box"),null!==this.chatbox&&(this.container=this.chatbox.parentNode,this.chatbox_form=this.chatbox.querySelector(".chat-box__form"),this.chatbox_list=this.chatbox.querySelector(".chat-box__list"),this.welcome=document.getElementsByClassName("welcome"),this.chatbox_message_box=this.chatbox_form.querySelector("#message"),this.chatbox_form.addEventListener("submit",function(e){e.preventDefault(),t.initiated||t.initiateContainer(),t.chat()}))}},{key:"initiateContainer",value:function(){this.initiated=!0,this.attr_helper.removeElementsByClass(this.welcome),this.attr_helper.hasClass(this.container,"h-100")||this.attr_helper.toggleClass(this.container,"h-100")}},{key:"chat",value:function(){var t=this,e=this.chatbox_message_box.value,i="";this.chatbox_message_box.value="",this.insertBubble(e,"text","human"),axios.post("/api/purebot",{message:e}).then(function(e){var n=e.data;i=n.response,t.insertBubble(i,"text","purebot")}).catch(function(t){console.log(t)})}},{key:"insertBubble",value:function(t,e,i){var n=document.createElement("span"),a=document.createTextNode(t);n.appendChild(a),n.classList.add("chat-box__list__bubble"),n.classList.add("chat-box__list__bubble__"+i),this.chatbox_list.appendChild(n),this.chatbox_list.scrollTop=this.chatbox_list.scrollHeight,this.chatbox_message_box.focus()}}]),t}(),chatbox=new ChatBox,SideBar=function(){function t(){_classCallCheck(this,t),this.attr_helper=new AttrHelper}return _createClass(t,[{key:"init",value:function(){var t=this,e=document.getElementById("layout"),i=document.getElementById("menu"),n=document.getElementById("menuLink"),a=document.getElementById("main"),o=[e,i,n];n.onclick=function(e){t.toggleSideBar(e,o,"active")},a.onclick=function(e){t.attr_helper.hasClass(i,"active")&&t.toggleSideBar(e,o,"active")}}},{key:"toggleSideBar",value:function(t,e,i){var n=this;t.preventDefault(),e.forEach(function(t){n.attr_helper.toggleClass(t,i)})}}]),t}(),sideBar=new SideBar;sideBar.init(),animations.init(),chatbox.init(),AOS.init({offset:0,delay:50,duration:1e3,easing:"linear"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyIsImhlbHBlci9hdHRyX2hlbHBlci5qcyIsImhlbHBlci9wb3NpdGlvbl9oZWxwZXIuanMiLCJsYXlvdXQvYW5pbWF0aW9ucy5qcyIsImxheW91dC9jaGF0Ym94LmpzIiwibGF5b3V0L3NpZGViYXIuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQXR0ckhlbHBlciIsInRoaXMiLCJ2YWx1ZSIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwic3BsaXQiLCJzcGxpY2UiLCJwdXNoIiwiam9pbiIsImluZGV4T2YiLCJlbGVtZW50cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIlBvc2l0aW9uSGVscGVyIiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxfdG9wIiwidG9wIiwiZWxfYm90IiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsInNwZWVkIiwicG9zaXRpb25faGVscGVyIiwiX3RoaXMiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhbmltYXRpb24iLCJpc1Njcm9sbGVkSW50b1ZpZXciLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhbmltYXRpb25fdHlwZSIsImRhdGFzZXQiLCJnZXRBdHRyaWJ1dGUiLCJhbmltYXRpb25fc3BlZWQiLCJhbmltYXRpb25TcGVlZCIsImlzTmFOIiwicmVtb3ZlQW5pbWF0aW9uIiwiX3RoaXMyIiwiZnVsbF9zdHJpbmciLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0ZW1wX3N0cmluZyIsImxpbWl0IiwiaW5uZXJIVE1MIiwiY2hhckF0Iiwic2V0VGltZW91dCIsInR5cGV3cml0ZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJDaGF0Qm94IiwiYXR0cl9oZWxwZXIiLCJjaGF0Ym94IiwiY29udGFpbmVyIiwiY2hhdGJveF9mb3JtIiwiY2hhdGJveF9saXN0IiwiY2hhdGJveF9tZXNzYWdlX2JveCIsIndlbGNvbWUiLCJpbml0aWF0ZWQiLCJfdGhpczMiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5pdGlhdGVDb250YWluZXIiLCJjaGF0IiwicmVtb3ZlRWxlbWVudHNCeUNsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsIl90aGlzNCIsIm1lc3NhZ2UiLCJwdXJlYm90X21lc3NhZ2UiLCJpbnNlcnRCdWJibGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJwdXJlYm90IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJzb3VyY2UiLCJidWJibGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJmb2N1cyIsIlNpZGVCYXIiLCJfdGhpczUiLCJsYXlvdXQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJtZW51TGluayIsImNvbnRlbnQiLCJ0b2dnbGVkRWxlbWVudCIsIm9uY2xpY2siLCJ0b2dnbGVTaWRlQmFyIiwiYWN0aXZlIiwiX3RoaXM2Iiwic2lkZUJhciIsImluaXQiLCJBT1MiLCJvZmZzZXQiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzaW5nIl0sIm1hcHBp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T0FBQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0luY2x1ZGUgSlMgZmlsZXMgZnJvbSBpbmNsdWRlIGZvbGRlciBoZXJlIGFuZCBzb3J0IHRoZW0gYWNjb3JkaW5nIHRvIGl0cyBkZXBlbmRlbmNpZXNcclxuXHJcbi8vQ2FsbCBzaWRlYmFyLmpzXHJcbnNpZGVCYXIuaW5pdCgpXHJcblxyXG4vL0NhbGwgYW5pbWF0aW9ucy5qc1xyXG5hbmltYXRpb25zLmluaXQoKVxyXG5cclxuLy9DYWxsIGNoYXRib3guanNcclxuY2hhdGJveC5pbml0KClcclxuXHJcbi8vQ2FsbCBhb3MuanNcclxuQU9TLmluaXQoe1xyXG4gICAgb2Zmc2V0OiAwLFxyXG4gICAgZGVsYXk6IDUwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXHJcbiAgICBkdXJhdGlvbjogMTAwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xyXG4gICAgZWFzaW5nOiAnbGluZWFyJywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXHJcbn0pIiwiY2xhc3MgQXR0ckhlbHBlciB7XHJcbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksXHJcbiAgICAgICAgICAgIGxlbmd0aCA9IGNsYXNzZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpID0gMFxyXG5cclxuICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoZSBjbGFzc05hbWUgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gY2xhc3Nlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcclxuICAgIH1cclxuXHJcbiAgICBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTFcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3MoZWxlbWVudHMpIHtcclxuICAgICAgaWYoZWxlbWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xyXG4gICAgICAgICAgZWxlbWVudHNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBQb3NpdGlvbkhlbHBlciB7XHJcbiAgICBpc1Njcm9sbGVkSW50b1ZpZXcoZWwpIHtcclxuICAgICAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgbGV0IGVsX3RvcCA9IHJlY3QudG9wO1xyXG4gICAgICBsZXQgZWxfYm90ID0gcmVjdC5ib3R0b207XHJcblxyXG4gICAgICAvL2xldCBpc1Zpc2libGUgPSAoZWxfdG9wID49IDApICYmIChlbF9ib3QgPD0gd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICBcclxuICAgICAgbGV0IGlzVmlzaWJsZSA9IGVsX3RvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiBlbF9ib3QgPj0gMDtcclxuICAgICAgcmV0dXJuIGlzVmlzaWJsZTtcclxuICB9XHJcbn0iLCIvKlxyXG4qXHJcbkFuaW1hdGlvbnMgQ2xhc3MgLSBieSBzY2F2ZW50dW1cclxuKlxyXG5Vc2FnZTpcclxuMS4gQWRkIDxkYXRhLWFuaW1hdGlvbj1cIltvcHRpb25zXVwiPiBhcyByZXF1aXJlZCBlbGVtZW50IGF0dHJpYnV0ZS5cclxuICAgW29wdGlvbnNdIGF2YWlsYWJsZTpcclxuICAgLSB0eXBld3JpdGVyXHJcbjIuIEFkZCA8ZGF0YS1hbmltYXRpb24tc3BlZWQ9XCJbdmFsdWVdXCI+IGFzIG9wdGlvbmFsIGVsZW1lbnQgYXR0cmlidXRlLlxyXG4gICBbdmFsdWVdOiBwb3NpdGl2ZSBpbnRlZ2VyIGluIG1pbGxpc2Vjb25kcyBcclxuKlxyXG4qL1xyXG5cclxuY2xhc3MgQW5pbWF0aW9ucyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fVxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDBcclxuICAgICAgICB0aGlzLnBvc2l0aW9uX2hlbHBlciA9IG5ldyBQb3NpdGlvbkhlbHBlcigpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltYXRpb25dXCIpKVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucG9zaXRpb25faGVscGVyLmlzU2Nyb2xsZWRJbnRvVmlldyhhbmltYXRpb24pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZShhbmltYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wb3NpdGlvbl9oZWxwZXIuaXNTY3JvbGxlZEludG9WaWV3KGFuaW1hdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZShhbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKGFuaW1hdGlvbil7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbl90eXBlID0gYW5pbWF0aW9uLmRhdGFzZXQuYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5nZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbicpXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbl9zcGVlZCA9IGFuaW1hdGlvbi5kYXRhc2V0LmFuaW1hdGlvblNwZWVkIHx8IHRoaXMuc3BlZWRcclxuICAgICAgICBhbmltYXRpb25fc3BlZWQgPSBpc05hTihhbmltYXRpb25fc3BlZWQpID8gdGhpcy5zcGVlZCA6IGFuaW1hdGlvbl9zcGVlZFxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbYW5pbWF0aW9uX3R5cGVdID09PSBcImZ1bmN0aW9uXCIpIHsgXHJcbiAgICAgICAgICAgIHRoaXNbYW5pbWF0aW9uX3R5cGVdKGFuaW1hdGlvbixhbmltYXRpb25fc3BlZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbilcclxuICAgIH1cclxuXHJcbiAgICB0eXBld3JpdGVyKGFuaW1hdGlvbixzcGVlZCxmdWxsX3N0cmluZyA9IFwiXCIsdGVtcF9zdHJpbmcgPSBcIlwiLGkgPSAwKXtcclxuICAgICAgICBmdWxsX3N0cmluZyA9IGZ1bGxfc3RyaW5nLmxlbmd0aCA9PSAwID8gYW5pbWF0aW9uLmlubmVySFRNTCA6IGZ1bGxfc3RyaW5nXHJcbiAgICAgICAgbGV0IGxpbWl0ID0gZnVsbF9zdHJpbmcubGVuZ3RoXHJcblxyXG4gICAgICAgIGFuaW1hdGlvbi5pbm5lckhUTUwgPSB0ZW1wX3N0cmluZ1xyXG4gICAgICAgIHRlbXBfc3RyaW5nICs9IGZ1bGxfc3RyaW5nLmNoYXJBdChpKVxyXG5cclxuICAgICAgICBhbmltYXRpb24uaW5uZXJIVE1MID0gdGVtcF9zdHJpbmcgK1wiPHNwYW4gY2xhc3M9J3R5cHdyaXRlcl9fYmxpbmsnPl88L3NwYW4+XCJcclxuXHJcbiAgICAgICAgaWYoaSA8IGxpbWl0KXtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZXdyaXRlcihhbmltYXRpb24sc3BlZWQsZnVsbF9zdHJpbmcsdGVtcF9zdHJpbmcsaSlcclxuICAgICAgICAgICAgfSwgc3BlZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFuaW1hdGlvbihhbmltYXRpb24pe1xyXG4gICAgICAgIGFuaW1hdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJylcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW5pbWF0aW9uXVwiKSlcclxuICAgIH1cclxufVxyXG5cclxubGV0IGFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucygpXHJcblxyXG4iLCIvKlxyXG4qXHJcbkNoYXRCb3ggQ2xhc3MgLSBieSBzY2F2ZW50dW1cclxuKlxyXG4qL1xyXG5cclxuY2xhc3MgQ2hhdEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmF0dHJfaGVscGVyID0gbmV3IEF0dHJIZWxwZXIoKSAgXHJcbiAgICAgICAgdGhpcy5jaGF0Ym94ID0gJydcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICcnXHJcbiAgICAgICAgdGhpcy5jaGF0Ym94X2Zvcm0gPSAnJ1xyXG4gICAgICAgIHRoaXMuY2hhdGJveF9saXN0ID0gJydcclxuICAgICAgICB0aGlzLmNoYXRib3hfbWVzc2FnZV9ib3ggPSAnJ1xyXG4gICAgICAgIHRoaXMud2VsY29tZSA9ICcnXHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0Ym94ICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdC1ib3gnKVxyXG4gICAgICAgIGlmKHRoaXMuY2hhdGJveCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jaGF0Ym94LnBhcmVudE5vZGVcclxuICAgICAgICAgICAgdGhpcy5jaGF0Ym94X2Zvcm0gPSB0aGlzLmNoYXRib3gucXVlcnlTZWxlY3RvcignLmNoYXQtYm94X19mb3JtJylcclxuICAgICAgICAgICAgdGhpcy5jaGF0Ym94X2xpc3QgPSB0aGlzLmNoYXRib3gucXVlcnlTZWxlY3RvcignLmNoYXQtYm94X19saXN0JylcclxuICAgICAgICAgICAgdGhpcy53ZWxjb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VsY29tZScpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhdGJveF9tZXNzYWdlX2JveCA9IHRoaXMuY2hhdGJveF9mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhdGJveF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaW5pdGlhdGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYXRlQ29udGFpbmVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXQoKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYXRlQ29udGFpbmVyKCl7XHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXR0cl9oZWxwZXIucmVtb3ZlRWxlbWVudHNCeUNsYXNzKHRoaXMud2VsY29tZSlcclxuICAgICAgICBpZiAoIXRoaXMuYXR0cl9oZWxwZXIuaGFzQ2xhc3ModGhpcy5jb250YWluZXIsICdoLTEwMCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cl9oZWxwZXIudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsICdoLTEwMCcpIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGF0KCl7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNoYXRib3hfbWVzc2FnZV9ib3gudmFsdWVcclxuICAgICAgICBsZXQgcHVyZWJvdF9tZXNzYWdlID0nJ1xyXG5cclxuICAgICAgICB0aGlzLmNoYXRib3hfbWVzc2FnZV9ib3gudmFsdWUgPSAnJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0QnViYmxlKG1lc3NhZ2UsJ3RleHQnLCdodW1hbicpXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvcHVyZWJvdCcsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwdXJlYm90ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBwdXJlYm90X21lc3NhZ2UgPSBwdXJlYm90LnJlc3BvbnNlXHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QnViYmxlKHB1cmVib3RfbWVzc2FnZSwndGV4dCcsJ3B1cmVib3QnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEJ1YmJsZShtZXNzYWdlLHR5cGUsc291cmNlKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW1wiK3R5cGUrXCIsIFwiK3NvdXJjZStcIl06IFwiK21lc3NhZ2UpXHJcblxyXG4gICAgICAgIGxldCBidWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSk7ICAgICAgXHJcbiAgICAgICAgYnViYmxlLmFwcGVuZENoaWxkKHRleHQpOyAgIFxyXG4gICAgICAgIGJ1YmJsZS5jbGFzc0xpc3QuYWRkKFwiY2hhdC1ib3hfX2xpc3RfX2J1YmJsZVwiKSAgICBcclxuICAgICAgICBidWJibGUuY2xhc3NMaXN0LmFkZChcImNoYXQtYm94X19saXN0X19idWJibGVfX1wiK3NvdXJjZSkgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuY2hhdGJveF9saXN0LmFwcGVuZENoaWxkKGJ1YmJsZSk7XHJcbiAgICAgICAgdGhpcy5jaGF0Ym94X2xpc3Quc2Nyb2xsVG9wID0gdGhpcy5jaGF0Ym94X2xpc3Quc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmNoYXRib3hfbWVzc2FnZV9ib3guZm9jdXMoKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNoYXRib3ggPSBuZXcgQ2hhdEJveCgpIiwiLypcclxuKlxyXG5TaWRlQmFyIENsYXNzIC0gYnkgc2NhdmVudHVtIGZyb20gUHVyZS5jc3NcclxuKlxyXG4qL1xyXG5cclxuY2xhc3MgU2lkZUJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmF0dHJfaGVscGVyID0gbmV3IEF0dHJIZWxwZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIGxheW91dCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpLFxyXG4gICAgICAgICAgICBtZW51ICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXHJcbiAgICAgICAgICAgIG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVMaW5rJyksXHJcbiAgICAgICAgICAgIGNvbnRlbnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG5cclxuICAgICAgICBsZXQgdG9nZ2xlZEVsZW1lbnQgPSBbXHJcbiAgICAgICAgICAgIGxheW91dCxcclxuICAgICAgICAgICAgbWVudSxcclxuICAgICAgICAgICAgbWVudUxpbmtcclxuICAgICAgICBdLFxyXG4gICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnXHJcblxyXG4gICAgICAgIG1lbnVMaW5rLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZGVCYXIoZSwgdG9nZ2xlZEVsZW1lbnQsIGFjdGl2ZSlcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgY29udGVudC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cl9oZWxwZXIuaGFzQ2xhc3MobWVudSxhY3RpdmUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZGVCYXIoZSwgdG9nZ2xlZEVsZW1lbnQsIGFjdGl2ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU2lkZUJhcihlLCBlbGVtZW50cywgYWN0aXZlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBcclxuICAgICAgICAgICAgdGhpcy5hdHRyX2hlbHBlci50b2dnbGVDbGFzcyhlbGVtZW50LCBhY3RpdmUpIFxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc2lkZUJhciA9IG5ldyBTaWRlQmFyKClcclxuIl19
