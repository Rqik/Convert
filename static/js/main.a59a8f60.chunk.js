(this.webpackJsonpconvert=this.webpackJsonpconvert||[]).push([[0],{27:function(e,n,c){},28:function(e,n,c){},29:function(e,n,c){},54:function(e,n,c){},55:function(e,n,c){"use strict";c.r(n);var a=c(0),t=c(3),s=c.n(t),r=c(5),i=c.n(r),o=c(15),u=c(19),l=c(1),j=function(){return Object(l.jsx)("input",{})},d=(c(27),c(28),function(e){var n=e.number,c=e.difference,a=e.priceChange,t=e.size;return Object(l.jsxs)("div",{className:"number ".concat(a&&"number_"+a,"\n   ").concat(t&&"number_"+t),children:[n,c&&Object(l.jsxs)("div",{className:"number__difference",children:[" ",c]})]})}),b=function(e){var n=e.Name,c=e.CharCode,a=e.Value,t=e.Previous,s=e.Nominal,r=a<t?"decreased":"increased",i=Math.round(1e4*(a-t))/1e4;return Object(l.jsxs)("div",{className:"finance",children:[Object(l.jsxs)("div",{className:"finance__currency",children:[Object(l.jsx)("div",{className:"finance__name",children:n}),Object(l.jsx)("div",{className:"finance__abbreviation",children:c})]}),Object(l.jsxs)("div",{className:"finance__current-value",children:[Object(l.jsxs)("div",{className:"finance__today",children:[Object(l.jsx)(d,{number:a,difference:i,priceChange:r}),Object(l.jsx)("div",{className:"finance__caption",children:"\u0446\u0435\u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"})]}),Object(l.jsxs)("div",{className:"finance__tomorrow",children:[Object(l.jsx)(d,{number:t,size:"font-small"}),Object(l.jsx)("div",{className:"finance__caption",children:"\u0446\u0435\u043d\u0430 \u0432\u0447\u0435\u0440\u0430"})]}),Object(l.jsxs)("div",{className:"finance__ratio",children:[Object(l.jsx)("div",{className:"finance__ratio-span",children:s+c}),"1RUB"]})]})]})},f=(c(29),function(e){var n=e.curs,c=void 0===n?{}:n,a=Object.keys(c).map((function(e){return console.log(c),Object(l.jsx)(b,{Name:c[e].Name,CharCode:c[e].CharCode,Value:c[e].Value,Previous:c[e].Previous,Nominal:c[e].Nominal},c[e].Previous*c[e].Value)}));return Object(l.jsx)("div",{className:"finance-list",children:a})}),v=c(16),m=c.n(v);var h=function(){var e=Object(a.useState)({}),n=Object(u.a)(e,2),c=n[0],t=n[1];function s(){return(s=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://www.cbr-xml-daily.ru/daily_json.js");case 3:n=e.sent,t(n.data.Valute),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{curs:c}),Object(l.jsx)(j,{})]})},O=c(18),x=(c(54),c(20)),p={},_=Object(x.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;return n.type,e}));s.a.render(Object(l.jsx)(O.a,{store:_,children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a59a8f60.chunk.js.map