(this["webpackJsonpreact-forms-example"]=this["webpackJsonpreact-forms-example"]||[]).push([[0],{23:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s(0),n=s.n(r),c=s(15),i=s.n(c),o=(s(23),s(6)),d=s(7),u=s(11),l=s(10),m=s(5),p=(s(27),function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(d.a)(s,[{key:"render",value:function(){var e=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,t=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i,s=/^(?=.*[a-z])/g,r=/^(?=.*[A-Z])/g,n=/^(?=.*\d{1,})/g,c=/(?=.*[-+_!@#$%^&*?])/g;return Object(a.jsxs)("div",{className:"contact-form",children:[Object(a.jsx)("h2",{children:"Sign Up Form"}),Object(a.jsx)(m.d,{initialValues:{email:"",password:""},validate:function(a){var i={};return a.email?e.test(a.email)||(i.email="Invalid email address!"):i.email="Email is required!",a.password?s.test(a.password)?r.test(a.password)?n.test(a.password)?c.test(a.password)?t.test(a.password)||(i.password="Password must have at least 8 characters!"):i.password="Password must include at least one: '-+_!@#$%^&*?'":i.password="Password must have a digit character!":i.password="Password must have an uppercase character!":i.password="Password must have a lowercase character!":i.password="Password is required!",i},onSubmit:function(e,t){var s=t.setSubmitting,a=t.resetForm;setTimeout((function(){alert(JSON.stringify(e,null,2)),a({}),s(!1)}),500)},children:function(e){var t=e.isSubmitting;return Object(a.jsxs)(m.c,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(m.b,{type:"email",name:"email",placeholder:"email address"}),Object(a.jsx)(m.a,{name:"email",component:"span"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(m.b,{type:"password",name:"password",placeholder:"password"}),Object(a.jsx)(m.a,{name:"password",component:"span"})]}),Object(a.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})]})}}]),s}(r.Component)),j=(s(28),function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(p,{})})}}]),s}(r.Component)),b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),b()}},[[29,1,2]]]);
//# sourceMappingURL=main.45038c15.chunk.js.map