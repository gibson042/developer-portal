(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{577:function(e,t,a){},641:function(e,t,a){"use strict";a(577)},690:function(e,t,a){"use strict";a.r(t);a(21),a(50);var n={data:function(){return{language:null,languageList:null}},created:function(){this.language=this.$localeConfig.path,this.languageList=this.$site.locales},methods:{select:function(e){this.$router.push(this.$page.path.replace(this.$localeConfig.path,e.target.value))}}},l=(a(641),a(1)),u=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],on:{input:e.select,change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.language=t.target.multiple?a:a[0]}}},e._l(e.languageList,(function(t,n){return a("option",{domProps:{value:n}},[e._v(e._s(t.label||t.lang))])})),0)])])}),[],!1,null,"008cdb4a",null);t.default=u.exports}}]);