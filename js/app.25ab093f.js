(function(t){function e(e){for(var r,i,a=e[0],c=e[1],u=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1bae":function(t,e,n){"use strict";n("c23e")},"2e48":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader",{on:{toggleTheme:t.toggleTheme}}),n("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Where in the world?")]),n("div",{staticClass:"split",on:{click:t.changeTheme}},[n("fa-icon",{staticClass:"icon",attrs:{icon:["far","moon"]}}),n("span",[t._v("Dark Mode")])],1)])},a=[],c={name:"AppHeader",methods:{changeTheme:function(){this.$store.commit("toggleDarkTheme"),this.$emit("toggleTheme")}}},u=c,l=(n("1bae"),n("2877")),d=Object(l["a"])(u,i,a,!1,null,"3b820417",null),p=d.exports,h={name:"App",components:{AppHeader:p},computed:{darkMode:function(){return this.$store.getters.darkTheme}},methods:{toggleTheme:function(){this.darkMode?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}}},f=h,m=(n("034f"),Object(l["a"])(f,o,s,!1,null,null,null)),g=m.exports,v=n("ecee"),y=n("c074"),b=n("b702"),C=n("ad3d"),_=(n("ac1f"),n("1276"),n("a15b"),n("4de4"),n("2f62")),k=n("bc3a"),S=n.n(k);r["a"].use(_["a"]);var $=new _["a"].Store({state:{loadingStatus:!1,countries:[],selectedCountry:Object(),selectedRegion:"",regions:["Africa","Americas","Asia","Europe","Oceania"],borders:[],darkTheme:!1},mutations:{changeLoadingStatus:function(t,e){t.loadingStatus=e.loading},setAllCountries:function(t,e){t.countries=e.data},setSelectedCountry:function(t,e){t.selectedCountry=e.country},makeRegionSelection:function(t,e){t.selectedRegion=e.region},setListOfBorders:function(t,e){t.borders=e.borders},resetBorders:function(t){t.borders=[]},toggleDarkTheme:function(t){t.darkTheme=!t.darkTheme}},actions:{getAllCountries:function(t){var e=t.commit;e("changeLoadingStatus",{loading:!0}),S.a.get("https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all").then((function(t){e("setAllCountries",{data:t.data}),e("changeLoadingStatus",{loading:!1})})).catch((function(t){return console.error("An error has occurred: "+t.message)}))},selectCountry:function(t,e){var n=t.commit;S.a.get("https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/alpha/"+e).then((function(t){n("setSelectedCountry",{country:t.data})})).catch((function(t){return console.error("An error has occurred: "+t.message)}))},findBorders:function(t,e){var n=t.commit;n("changeLoadingStatus",{loading:!0}),S.a.get("https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/alpha/"+e+"?fields=borders").then((function(t){var e=t.data.borders;e=e.join(";").split(","),""!=e&&S.a.get("https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/alpha?codes="+e).then((function(t){return n("setListOfBorders",{borders:t.data})}))})).catch((function(t){return console.error("An error occurred trying to complete the request: ".concat(t.message))})),n("changeLoadingStatus",{loading:!1})}},getters:{filterCountriesByRegion:function(t){return t.countries.filter((function(e){return e.region===t.selectedRegion}))},allCountries:function(t){return t.countries},regions:function(t){return t.regions},loadingStatus:function(t){return t.loadingStatus},singleCountry:function(t){return t.selectedCountry},borders:function(t){return t.borders},darkTheme:function(t){return t.darkTheme}}}),w=$,O=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("LoadingSpinner",{attrs:{status:t.loading}}),n("div",{staticClass:"btn",on:{click:t.goBack}},[n("fa-icon",{staticClass:"icon",attrs:{icon:"arrow-left"}}),n("span",[t._v("Back")])],1),n("div",{staticClass:"country-details"},[n("img",{staticClass:"flag",attrs:{src:t.country.flag,alt:""}}),n("div",{staticClass:"right"},[n("div",{staticClass:"basic-details"},[n("h3",[t._v(t._s(t.country.name))]),n("p",[n("span",[t._v("Native Name:")]),t._v(" "+t._s(t.country.nativeName))]),n("p",[n("span",[t._v("Population:")]),t._v(" "+t._s(t.population))]),n("p",[n("span",[t._v("Region:")]),t._v(" "+t._s(t.country.region))]),n("p",[n("span",[t._v("Sub Region:")]),t._v(" "+t._s(t.country.subregion))]),n("p",[n("span",[t._v("Capital:")]),t._v(" "+t._s(t.country.capital))])]),n("div",{staticClass:"official-details"},[n("p",[n("span",[t._v("Top Level Domain:")]),t._v(" "+t._s(t.topLevelDomain))]),n("p",[n("span",[t._v("Currencies:")]),t._v(" "+t._s(t.currencies))]),n("p",[n("span",[t._v("Languages:")]),t._v(" "+t._s(t.languages))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.borders.length>0,expression:"borders.length > 0"}],staticClass:"border-countries"},[n("h4",[t._v("Border Countries:")]),n("div",{staticClass:"borders"},t._l(t.borders,(function(e,r){return n("div",{key:r,staticClass:"btn",on:{click:function(n){return t.goToCountry(e)}}},[t._v(" "+t._s(e.name))])})),0)])])])],1)},L=[],j=(n("5319"),n("d3b7"),n("25f0"),n("159b"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"loader"})}),T=[],A={name:"LoadingSpinner",props:{status:{type:Boolean,required:!0}}},B=A,R=(n("7dcd"),Object(l["a"])(B,j,T,!1,null,"ae75a4a0",null)),E=R.exports,N={name:"CountryDetails",components:{LoadingSpinner:E},methods:{goBack:function(){this.$router.go(-1)},goToCountry:function(t){this.$store.dispatch("selectCountry",t.alpha3Code),this.$router.push({path:"/country/".concat(t.alpha3Code)})},loadCountry:function(){this.$store.dispatch("selectCountry",this.$route.params.countryName),this.$store.dispatch("findBorders",this.$route.params.countryName)},resetBorders:function(){this.$store.commit("resetBorders")}},computed:{loading:function(){return this.$store.getters.loadingStatus},country:function(){return this.$store.getters.singleCountry},population:function(){return this.country.population?this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""},topLevelDomain:function(){return this.country.topLevelDomain?this.country.topLevelDomain.join(", "):""},currencies:function(){var t=[];return this.country.currencies?(this.country.currencies.forEach((function(e){t.push(e.name)})),t.join(", ")):""},languages:function(){var t=[];return this.country.languages?(this.country.languages.forEach((function(e){t.push(e.name)})),t.join(", ")):""},borders:function(){return this.$store.getters.borders}},created:function(){this.resetBorders(),this.loadCountry()},watch:{"$route.params.countryName":function(){this.resetBorders(),this.loadCountry()}}},F=N,P=(n("8808"),Object(l["a"])(F,x,L,!1,null,"e12333e8",null)),V=P.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"split"},[n("SearchField",{attrs:{countries:t.countries}}),n("SelectFilter",{staticClass:"select",attrs:{options:t.regions,default:"Filter by Region"},on:{filterActive:function(e){t.filter=!0}}})],1),n("LoadingSpinner",{attrs:{status:t.loading}}),n("div",{staticClass:"country-container"},t._l(t.countries,(function(t,e){return n("CountryCard",{key:e,attrs:{country:t}})})),1)],1)},M=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-input"},[n("fa-icon",{staticClass:"icon",attrs:{icon:"search"}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],attrs:{type:"text",name:"country-name",id:"country-name",placeholder:"Search for a country..."},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchValue,expression:"searchValue"}],staticClass:"autocomplete-results"},t._l(t.filterResults,(function(e,r){return n("li",{key:r,staticClass:"autocomplete-result",on:{click:function(n){return t.setResult(e)}}},[n("router-link",{attrs:{to:t.path},on:{click:function(n){return t.setResult(e)}}},[n("img",{attrs:{src:e.flag,alt:"Flag"}}),t._v(" "+t._s(e.name)+" ")])],1)})),0)],1)},H=[],I={name:"SearchField",props:{countries:{type:Array,required:!0}},data:function(){return{searchValue:"",results:[],isOpen:!1,path:""}},computed:{filterResults:function(){var t=this;return this.countries.filter((function(e){return e.name.toLowerCase().indexOf(t.searchValue.toLowerCase())>-1}))}},methods:{setResult:function(t){this.searchValue=t.name,this.$store.dispatch("selectCountry",t.alpha3Code),this.isOpen=!1,this.$router.push({path:"/country/".concat(t.alpha3Code)})},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)},watch:{searchValue:function(){var t=this;this.results=this.countries.filter((function(e){return e.name.toLowerCase().indexOf(t.searchValue.toLowerCase())>-1}))}}},J=I,U=(n("cf34"),Object(l["a"])(J,q,H,!1,null,"5198bcd4",null)),W=U.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-select",attrs:{tabindex:t.tabIndex},on:{blur:function(e){t.open=!1},keydown:function(e){t.open=!1}}},[n("div",{staticClass:"selected",class:{open:t.open},on:{click:function(e){t.open=!t.open}}},[t._v(" "+t._s(t.selected)+" ")]),n("div",{staticClass:"items",class:{selectHide:!t.open}},t._l(t.options,(function(e,r){return n("div",{key:r,on:{click:function(n){return t.makeSelection(e)}}},[t._v(t._s(e))])})),0)])},G=[],K=(n("a9e3"),{name:"SelectFilter",props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null},tabIndex:{type:Number,required:!1,default:0}},data:function(){return{selected:this.default?this.default:this.options.length>0?this.options[0]:null,open:!1}},methods:{filterSelected:function(){this.$store.commit("makeRegionSelection",{region:this.selected})},makeSelection:function(t){this.selected=t,this.open=!1,this.filterSelected(),this.$emit("filterActive")}}}),Q=K,X=(n("ed5c"),Object(l["a"])(Q,z,G,!1,null,"b81112d6",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:t.selectThisCountry}},[n("div",{staticClass:"flag"},[n("img",{attrs:{src:t.country.flag,alt:"Flag"}})]),n("div",{staticClass:"details"},[n("h3",[t._v(t._s(t.country.name))]),n("p",[n("span",[t._v("Population:")]),t._v(" "+t._s(t.populationFormat))]),n("p",[n("span",[t._v("Region:")]),t._v(" "+t._s(t.country.region))]),n("p",[n("span",[t._v("Capital:")]),t._v(" "+t._s(t.country.capital))])])])},tt=[],et={name:"CountryCard",props:{country:Object},computed:{populationFormat:function(){return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},methods:{selectThisCountry:function(){this.$store.dispatch("selectCountry",this.country.alpha3Code),this.$router.push({path:"/country/".concat(this.country.alpha3Code)})}}},nt=et,rt=(n("c0e4"),Object(l["a"])(nt,Z,tt,!1,null,"5b941a0f",null)),ot=rt.exports,st={name:"HomePage",components:{SearchField:W,SelectFilter:Y,CountryCard:ot,LoadingSpinner:E},data:function(){return{filter:!1}},computed:{countries:function(){return this.filter?this.$store.getters.filterCountriesByRegion:this.$store.getters.allCountries},regions:function(){return this.$store.getters.regions},loading:function(){return this.$store.getters.loadingStatus}},created:function(){this.$store.dispatch("getAllCountries")}},it=st,at=(n("ce62"),Object(l["a"])(it,D,M,!1,null,"4398cc9a",null)),ct=at.exports;r["a"].use(O["a"]);var ut=new O["a"]({mode:"history",routes:[{path:"/",component:ct},{path:"/country/:countryName",name:"Country Details",component:V}]}),lt=ut;v["c"].add(y["c"],y["d"],y["a"],y["b"],b["a"]),r["a"].component("fa-icon",C["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)},store:w,router:lt}).$mount("#app")},"716b":function(t,e,n){},"7b8f":function(t,e,n){},"7dcd":function(t,e,n){"use strict";n("2e48")},"85ec":function(t,e,n){},8808:function(t,e,n){"use strict";n("7b8f")},c0e4:function(t,e,n){"use strict";n("d0396")},c23e:function(t,e,n){},ce62:function(t,e,n){"use strict";n("fc9b")},cf34:function(t,e,n){"use strict";n("e66b")},d0396:function(t,e,n){},e66b:function(t,e,n){},ed5c:function(t,e,n){"use strict";n("716b")},fc9b:function(t,e,n){}});
//# sourceMappingURL=app.25ab093f.js.map
