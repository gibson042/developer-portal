(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{576:function(t,e,a){},639:function(t,e,a){"use strict";var i=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!i.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},640:function(t,e,a){"use strict";a(576)},687:function(t,e,a){"use strict";a.r(e);var i=a(46),s=a(17),r=(a(9),a(53),a(110)),n=a.n(r),o=a(639),l=a.n(o),c={data:function(){return{step:0,email:null,requestURL:"https://app.mailerlite.com/webforms/submit/n7t4w7",callback:"jQuery18301604647979314595_1638523133802",_:"1638523153680",commonFormData:{"ml-submit":"1",ajax:"1",guid:"35feb5b5-09a6-3e6f-0a82-237790847108"}}},computed:{emailInvalid:function(){return!l.a.validate(this.email)}},methods:{actionGoForwards:function(){this.step+=1},actionGoBackwards:function(){this.step-=1},actionSubmitEmail:function(){this.emailInvalid||(this.actionSubscribe(),this.step=1)},actionSubscribe:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.subscribe({requestURL:t.requestURL,callback:t.callback,_:"1638523153680"}),t.actionGoForwards();case 2:case"end":return e.stop()}}),e)})))()},subscribe:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n.a.stringify(Object(i.a)(Object(i.a)({"fields[email]":e.email,"fields[website]":"Developer Portal"},e.commonFormData),t))},a.next=3,fetch(e.requestURL,s);case 3:case"end":return a.stop()}}),a)})))()}}},u=(a(640),a(1)),m=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wizard"},[a("div",{staticClass:"wizard__inner"},[a("transition",{attrs:{name:"fade"}},[0===t.step?a("div",{key:"step0",ref:"step0",staticClass:"tm-grid-base"},[a("div",{staticClass:"wizard-col"},[a("h4",[a("label",{attrs:{for:"field-email"}},[t._v("Get Cosmos updates")])]),a("p",{staticClass:"mt-3 tm-lh-title tm-rf-1 tm-medium tm-muted"},[t._v("Unsubscribe at any time. "),a("a",{staticClass:"tm-link tm-link-external",attrs:{href:"https://v1.cosmos.network/privacy",target:"_blank"}},[a("span",[t._v("Privacy Policy")])])])]),a("div",{staticClass:"wizard-col"},[a("div",{staticClass:"form tm-center"},[a("div",{staticClass:"form__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__input__input tm-rf0 tm-lh-copy tm-title",attrs:{id:"field-email",name:"fields[email]",type:"email",placeholder:"Enter your email",required:"required"},domProps:{value:t.email},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.actionSubmitEmail.apply(null,arguments)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("button",{staticClass:"form__input__button",attrs:{type:"submit",disabled:t.emailInvalid},on:{click:function(e){return e.preventDefault(),t.actionSubmitEmail.apply(null,arguments)}}},[a("span",{staticClass:"sr-only"},[t._v("Next")]),a("icon-arrow",{staticClass:"newsletter__input__input__button__icon",attrs:{type:"right"}})],1)])])])]):t._e(),1===t.step?a("div",{key:"step1",ref:"step1",staticClass:"tm-grid-base"},[a("div",{staticClass:"wizard-col _top"},[a("h4",[t._v("Almost there!"),a("br"),t._v("Confirm your email")]),a("img",{staticClass:"success-graphics",attrs:{src:"/success-mails.svg"}})]),a("div",{staticClass:"wizard-col _top"},[a("p",{staticClass:"tm-rf0 tm-lh-copy tm-title"},[t._v("You should get a confirmation email for each of your selected\ninterests. Open it up and click\n‘Confirm your email’\nso we can keep you updated.")]),a("p",{staticClass:"tm-rf-1 tm-lh-title tm-text"},[t._v("Don’t see the confirmation email yet?")]),a("p",{staticClass:"tm-rf-1 tm-lh-title tm-muted"},[t._v("It might be in your spam folder."),a("br"),t._v('If so, make sure to mark it as "not spam".')])])]):t._e()])],1)])}),[],!1,null,"e0e02ad4",null);e.default=m.exports}}]);