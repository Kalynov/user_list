(()=>{"use strict";var e={33:(e,t)=>{function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var r=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(n=document.createElement("input")).setAttribute("type","button"),n.setAttribute("value",t.content),n.className="button",n.classList.add(t.class),this.parent=t.parent?t.parent:document.body,this.element=n}var t,r;return t=e,(r=[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parent;return e.appendChild(this.element)}},{key:"addEvent",value:function(e,t){return this.element.addEventListener(e,t)}},{key:"hide",value:function(){return this.element.classList.add("hiden")}},{key:"show",value:function(){return this.element.classList.remove("hiden")}}])&&n(t.prototype,r),e}();t.Button=r},855:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0;var r=n(33),a=n(465),i=n(617);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){var e,t=function(){function t(e){var n,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=document.createElement("div")).className="form",this.callBack=e,this.state={name:"",number:"",isValid:!1},this.validation,(i=document.createElement("label")).textContent="Name",n.append(i),this.nameInput=new a.Input({type:"text",value:this.state.name,minlength:1,error:"Name must not be empty"}),this.nameInput.render(n),(s=document.createElement("label")).textContent="Number",this.telephoneInput=new a.Input({type:"tel",value:this.state.number,error:'the number can consist of digits (0-9) and a dash "-"'}),n.append(s),this.telephoneInput.render(n),this.saveButton=new r.Button({class:"button_save",parent:n,content:"Save"}),this.saveButton.render(),this.element=n}var n,u;return n=t,(u=[{key:"validateForm",value:function(){var e,t,n,r,a;if(this.validation=(0,i.validate)({name:this.nameInput.getValue(),number:this.telephoneInput.getValue()}),this.state.isValid=this.validation.isValid,this.state.errors=this.validation.errors,!this.state.isValid){for(a=[],t=0,n=(r=this.state.errors).length;t<n;t++)"name"===(e=r[t])&&this.nameInput.isError(),"number"===e?a.push(this.telephoneInput.isError()):a.push(void 0);return a}}},{key:"render",value:function(t){var n=this;return t.appendChild(this.element),this.saveButton.addEvent("click",(function(){return e.call(n)}))}},{key:"update",value:function(){return this.callBack&&this.callBack({name:this.nameInput.getValue(),number:this.telephoneInput.getValue()}),this.nameInput.element.value="",this.telephoneInput.element.value=""}}])&&s(n.prototype,u),t}();return e=function(){if(this.validateForm(),this.state.isValid)return this.update()},t}.call(void 0);t.Form=u},465:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var r=n(653);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=document.createElement("div"),this.wrapper.className="inputWrapper",this.error=new r.Text({content:t.error}),this.error.render(this.wrapper),this.error.hide(),(n=document.createElement("input")).setAttribute("type",t.type),n.setAttribute("minlength",t.minlength||0),this.pattern=t.pattern,this.state={value:t.value?t.value:"",isValid:!0},n.value=this.state.value,this.wrapper.appendChild(n),this.error.render(this.wrapper),this.element=n}var t,n;return t=e,(n=[{key:"update",value:function(){return this.error.hide(),this.element.classList.remove("error"),this.element.value=this.state.value}},{key:"render",value:function(e){var t=this;return this.element.onchange=function(e){return t.state.value=e.target.value,t.update()},e.appendChild(this.wrapper)}},{key:"getValue",value:function(){return this.state.value}},{key:"hide",value:function(){return this.element.classList.add("hiden")}},{key:"show",value:function(){return this.element.classList.remove("hiden")}},{key:"isError",value:function(){return this.error.show(),this.element.classList.add("error")}}])&&a(t.prototype,n),e}();t.Input=i},285:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0;var r=n(615);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var a,i,s,u,o,l,h,d,c;for(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(d=document.createElement("table")).setAttribute("border","1"),u=document.createElement("tr"),(s=document.createElement("th")).append("Telephon number"),(i=document.createElement("th")).append("Name"),(a=document.createElement("th")).append("Actions"),u.appendChild(i),u.appendChild(s),u.appendChild(a),d.appendChild(u),this.items=[],o=0,h=n.length;o<h;o++)l=n[o],(c=new r.TableItem({},l)).render(d),this.items.push(c);this.parent=(null!=t?t.parent:void 0)?t.parent:document.body,this.element=d}var t,n;return t=e,(n=[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parent;return e.appendChild(this.element)}},{key:"update",value:function(e){var t,n,a,i,s,u,o,l;for(t=0,i=(u=this.items).length;t<i;t++)(n=u[t]).element.remove();for(this.items=[],o=[],a=0,s=e.length;a<s;a++)n=e[a],(l=new r.TableItem({},n)).render(this.element),o.push(this.items.push(l));return o}}])&&a(t.prototype,n),e}();t.Table=i},615:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableItem=void 0;var r=n(33),a=n(465),i=n(653),s=n(617);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){var e,t,n,o=function(){function o(e,t){var n,s,u,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),l=document.createElement("tr"),this.id=t.id,this.state={editing:!1,name:t.name,number:t.number,isValid:!1},this.validation,u=document.createElement("th"),this.textTelephone=new i.Text({content:this.state.number}),this.telephoneInput=new a.Input({type:"tel",value:this.state.number,error:'the number can consist of digits (0-9) and a dash "-"'}),this.textTelephone.render(u),this.telephoneInput.hide(),this.telephoneInput.render(u),s=document.createElement("th"),this.textName=new i.Text({content:this.state.name}),this.textName.render(s),this.nameInput=new a.Input({type:"text",value:this.state.name,minlength:1,error:"Name must not be empty"}),this.nameInput.hide(),this.nameInput.render(s),n=document.createElement("th"),this.editButton=new r.Button({class:"button_edit",parent:n,content:"Edit"}),this.editButton.render(),this.saveButton=new r.Button({class:"button_save",parent:n,content:"Save"}),this.saveButton.render(),this.saveButton.hide(),this.deleteButton=new r.Button({class:"button_delete",parent:n,content:"Delete"}),this.deleteButton.render(),l.appendChild(s),l.appendChild(u),l.appendChild(n),this.element=l}var l,h;return l=o,(h=[{key:"validateForm",value:function(){var e,t,n,r,a;if(this.validation=(0,s.validate)({name:this.nameInput.getValue(),number:this.telephoneInput.getValue()}),this.state.isValid=this.validation.isValid,this.state.errors=this.validation.errors,!this.state.isValid){for(a=[],t=0,n=(r=this.state.errors).length;t<n;t++)"name"===(e=r[t])&&this.nameInput.isError(),"number"===e?a.push(this.telephoneInput.isError()):a.push(void 0);return a}}},{key:"render",value:function(r){var a=this;return r.appendChild(this.element),this.editButton.addEvent("click",(function(){return t.call(a)})),this.saveButton.addEvent("click",(function(){return n.call(a)})),this.deleteButton.addEvent("click",(function(){return e.call(a)}))}},{key:"append",value:function(e){return this.element}},{key:"update",value:function(e){return this.state.name=e.name,this.state.number=e.number,this.textName.update(this.state.name),this.textTelephone.update(this.state.number)}}])&&u(l.prototype,h),o}();return t=function(){return this.saveButton.show(),this.editButton.hide(),this.textTelephone.hide(),this.telephoneInput.show(),this.textName.hide(),this.nameInput.show(),this.state.editing=!0},n=function(){var e;if(this.validateForm(),this.state.isValid)return e={name:this.nameInput.getValue(),number:this.telephoneInput.getValue(),id:this.id},this.update(e),this.editButton.show(),this.saveButton.hide(),this.textTelephone.show(),this.telephoneInput.hide(),this.textName.show(),this.nameInput.hide(),this.state.editing=!1},e=function(){return this.element.remove()},o}.call(void 0);t.TableItem=o},653:(e,t)=>{function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;var r=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(n=document.createElement("span")).textContent=t.content,this.element=n}var t,r;return t=e,(r=[{key:"render",value:function(e){return e.appendChild(this.element)}},{key:"update",value:function(e){return this.element.textContent=e}},{key:"hide",value:function(){return this.element.classList.add("hiden")}},{key:"show",value:function(){return this.element.classList.remove("hiden")}}])&&n(t.prototype,r),e}();t.Text=r},617:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validate=void 0,t.validate=function(e){var t,n,r;return n={isValid:!0,errors:[]},r=/(^\d[\d\(\)\ -]{4,14}\d$)|(^\+\d[\d\(\)\ -]{4,14}\d$)/.test(e.number),t=0!==e.name.length,r||(n.isValid=!1,n.errors.push("number")),t||(n.isValid=!1,n.errors.push("name")),n}},376:(e,t,n)=>{n.r(t)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(376),n(33);var e,t,r,a,i=n(285),s=n(855);t=[{name:"Alexey",number:"+89993247575",id:0},{name:"Elena",number:"+79993247575",id:1},{name:"Ivan",number:"+89993247575",id:2},{name:"Maksim",number:"+79993247575",id:3}],(r=document.createElement("div")).className="main",document.body.appendChild(r),(a=new i.Table({},t)).render(r),e=function(e){return t.push(e),a.update(t)},new s.Form(e).render(r)})()})();