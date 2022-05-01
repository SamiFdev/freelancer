(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},144:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(32),s=t.n(r),i=t(3),o=t(20),l=t(10),d=t(94),j=t(97),b=t(163),m=t(159),u=t(92),O=(t(104),t(105),t(43)),p=t(44),h=t(72),x=t.n(h),g=new(function(){function e(){Object(O.a)(this,e)}return Object(p.a)(e,[{key:"getProfile",value:function(){return x()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return x()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),v=t(160),f=t(85),y=t(93),N=t(1);function k(){var e=g.getToken();return Object(N.jsx)(v.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",id:"main-nav",className:"col",children:Object(N.jsxs)(f.a,{className:" justify-content-between",children:[Object(N.jsx)(v.a.Brand,{as:o.b,to:"/",className:"col",children:"Freelancer"}),Object(N.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(N.jsx)(v.a.Collapse,{className:"col",id:"responsive-navbar-nav",children:e?Object(N.jsxs)(y.a,{className:"header-nav",children:[Object(N.jsx)(y.a.Link,{as:o.b,to:"/",children:"Home"}),Object(N.jsx)(y.a.Link,{as:o.b,to:"/profile",children:"Profile"}),Object(N.jsx)(y.a.Link,{onClick:function(){g.logout()},children:"Logout"})]}):Object(N.jsxs)(y.a,{className:"header-nav",children:[Object(N.jsx)(y.a.Link,{as:o.b,to:"/",children:"Home"}),Object(N.jsx)(y.a.Link,{as:o.b,to:"/signup",children:"Signup"}),Object(N.jsx)(y.a.Link,{as:o.b,to:"/login",children:"Login"})]})})]})})}t(113);var w=function(){return Object(N.jsx)("div",{className:"col-12 align-self-end py-3 footer",children:Object(N.jsx)("div",{className:"container text-center",children:Object(N.jsx)("h4",{children:"Brought to you by Sami, James & Andreas."})})})},C=t(9);t(114),t.p,t(81);function $(e){var a=e.job;return Object(N.jsx)(o.b,{className:"col-3 p-2",to:"job/".concat(a._id),children:Object(N.jsx)("div",{className:"card",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title",children:a.name}),Object(N.jsxs)("h6",{className:"card-subtitle mb-2",children:["$",a.price]}),Object(N.jsx)("p",{className:"card-text",children:a.description})]})})})}var _,S,I,T,L,P=t(156),D=t(22),A=t(162),q=Object(A.a)(_||(_=Object(D.a)(["\n  query {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),F=Object(A.a)(S||(S=Object(D.a)(["\nquery Job($jobId: ID!) {\n  job(jobId: $jobId) {\n    _id\n    name\n    description\n    price\n    category {\n      _id\n      name\n    }\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"]))),B=Object(A.a)(I||(I=Object(D.a)(["\nquery allJobs {\n  allJobs {\n    _id\n    name\n    description\n    price\n    category {\n      _id\n      name\n    }\n    user {\n      _id\n      firstName\n      lastName\n      email\n      password\n    }\n  }\n}\n"]))),J=Object(A.a)(T||(T=Object(D.a)(["\n  query JobsByCategory($category: ID) {\n    jobsByCategory(category: $category) {\n      _id\n      description\n      price\n      name\n      category {\n        name\n        _id\n      }\n      user {\n        _id\n        firstName\n        lastName\n        email\n        password\n      }\n    }\n  }\n"]))),G=(Object(A.a)(L||(L=Object(D.a)(["\n  query User {\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n"]))),t(89));function E(){var e,a,t=Object(n.useState)(""),c=Object(C.a)(t,2),r=c[0],s=c[1];function i(e){var a=e.currentTarget.dataset.category;s(a)}a=""===r?"":r;var l=Object(P.a)(J,{variables:{category:a}}),d=l.loading,j=l.data;e=(null===j||void 0===j?void 0:j.jobsByCategory)||[];var b=Object(P.a)(q),m=b.loading,u=b.data,O=(null===u||void 0===u?void 0:u.categories)||[];return Object(N.jsxs)("div",{id:"listing-area",children:[Object(N.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",id:"category-nav",children:[Object(N.jsx)("button",{className:"navbar-toggler ms-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#responsive-categories",children:Object(N.jsx)("span",{className:"navbar-toggler-icon"})}),Object(N.jsx)("div",{className:"collapse navbar-collapse row justify-content-between ms-4",id:"responsive-categories",children:Object(N.jsxs)("ul",{className:"navbar-nav col",children:[Object(N.jsx)(y.a.Link,{as:o.b,to:"/",children:Object(N.jsx)("h3",{onClick:i,id:"all-categories",children:"All"})}),m?"":O.map((function(e){return Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)("h3",{onClick:i,"data-category":e._id,className:"nav-link text-dark",children:e.name})},e._id)}))]})}),Object(N.jsx)("div",{id:"but-row",className:"row ms-auto mx-3",children:Object(N.jsx)(G.a,{className:"col",href:"/post",children:"Post"})})]}),Object(N.jsx)("div",{id:"listings",className:"row card-row justify-content-center",children:d?"":e.map((function(e){return Object(N.jsx)("div",{className:"col card-col",children:Object(N.jsx)($,{job:e})},e._id)}))})]})}var U=t(90);function M(){return Object(N.jsx)(f.a,{id:"page",children:Object(N.jsxs)(U.a,{className:"row-content justify-content-center",children:[Object(N.jsx)("div",{id:"content-top",className:"col align-self-start",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)(k,{}),Object(N.jsx)(l.a,{})]})}),Object(N.jsx)(w,{})]})})}t(116);var V=t(164),H=t.p+"static/media/audioWave.bde8cb60.jpeg",z=t.p+"static/media/art.1540747f.jpeg",W=t.p+"static/media/cooking.2927bb37.jpeg",K=t.p+"static/media/socialMedia.befc021f.jpeg",Q=t.p+"static/media/tech.98972c86.jpeg";function R(){var e=Object(l.h)().jobId,a=Object(P.a)(F,{variables:{jobId:e}}),t=a.loading,n=a.data,c=(null===n||void 0===n?void 0:n.job)||[],r="";if(!t)switch(r=c.category.name){case"Tech":r=Q;break;case"Audio":r=H;break;case"Art":r=z;break;case"Cooking":r=W;break;case"Social Media":r=K;break;default:console.log("no category!")}return Object(N.jsx)("div",{id:"job-content",children:t?"":Object(N.jsx)(f.a,{id:"job",children:Object(N.jsx)(U.a,{className:" justify-content-center",children:Object(N.jsxs)(V.a,{className:"col",children:[Object(N.jsx)(V.a.Img,{variant:"top",src:r}),Object(N.jsxs)(V.a.Body,{children:[Object(N.jsx)(V.a.Title,{children:c.name}),Object(N.jsx)(V.a.Text,{children:c.description}),Object(N.jsxs)(V.a.Text,{className:"row justify-content-center",children:["$",c.price]}),Object(N.jsxs)(V.a.Text,{className:"row justify-content-center",children:[c.user.firstName," ",c.user.lastName]})]}),Object(N.jsx)(V.a.Body,{children:Object(N.jsx)("div",{className:"row justify-content-center text-center",children:Object(N.jsx)(G.a,{href:"mailto:".concat(c.user.email),className:"col-4 bg-success",children:"Hire Me"})})})]})})})})}var X,Y,Z,ee,ae,te,ne=t(47),ce=t(11),re=t(34),se=t.n(re),ie=(t(118),t(158)),oe=Object(A.a)(X||(X=Object(D.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),le=Object(A.a)(Y||(Y=Object(D.a)(["\n  mutation userAdd(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    userAdd(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),de=(Object(A.a)(Z||(Z=Object(D.a)(["\n  mutation UserAdd($id: ID!) {\n    userDelete(id: $id) {\n      _id\n    }\n}\n"]))),Object(A.a)(ee||(ee=Object(D.a)(["\nmutation JobAdd($name: String!, $description: String!, $price: Float!, $category: ID!) {\n  jobAdd(name: $name, description: $description, price: $price, category: $category) {\n    _id\n    name\n    description\n    price\n    category {\n      _id\n      name\n    }\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"])))),je=Object(A.a)(ae||(ae=Object(D.a)(["\n  mutation JobUpdate($jobUpdateId: ID!, $name: String, $description: String, $price: Float) {\n    jobUpdate(id: $jobUpdateId, name: $name, description: $description, price: $price) {\n      _id\n      name\n      description\n      price\n      category {\n        _id\n        name\n      }\n    }\n  }\n"]))),be=Object(A.a)(te||(te=Object(D.a)(["\n  mutation JobDelete($jobDeleteId: ID!) {\n    jobDelete(id: $jobDeleteId) {\n      _id\n      name\n      description\n      price\n      category {\n        _id\n        name\n      }\n    }\n  }\n"]))),me=t(91),ue=t(161);function Oe(){var e=Object(n.useState)(!1),a=Object(C.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({email:"",password:""}),s=Object(C.a)(r,2),o=s[0],l=s[1],d=Object(ie.a)(oe),j=Object(C.a)(d,2),b=j[0],m=j[1],u=(m.error,m.data),O=function(e){var a=e.target,t=a.name,n=a.value;l(Object(i.a)(Object(i.a)({},o),{},Object(ce.a)({},t,n)))},p=function(){var e=Object(ne.a)(se.a.mark((function e(a){var t,n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!0!==a.currentTarget.checkValidity()){e.next=15;break}return e.prev=3,e.next=6,b({variables:Object(i.a)({},o)});case 6:t=e.sent,n=t.data,g.login(n.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:l({email:"",password:""});case 15:c(!0);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsx)(U.a,{className:"justify-content-center pt-5 mt-5",children:Object(N.jsx)(me.a,{xxl:4,xl:5,lg:6,md:7,sm:9,xs:10,className:"",children:u?window.location.assign("/"):Object(N.jsxs)(ue.a,{noValidate:!0,validated:t,onSubmit:p,className:"",children:[Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Email Address"}),Object(N.jsx)(ue.a.Control,{required:!0,type:"email",name:"email",placeholder:"Email Address",value:o.email,onChange:O,className:""}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a valid email address."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Password"}),Object(N.jsx)(ue.a.Control,{required:!0,type:"password",name:"password",placeholder:"Password",value:o.password,onChange:O,className:""}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a password."})]}),Object(N.jsx)(G.a,{variant:"primary",type:"submit",children:"Log In"})]})})})}t(119);function pe(){var e=Object(n.useState)(!1),a=Object(C.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),s=Object(C.a)(r,2),o=s[0],l=s[1],d=Object(ie.a)(le),j=Object(C.a)(d,2),b=j[0],m=j[1],u=(m.error,m.data,function(e){var a=e.target,t=a.name,n=a.value;l(Object(i.a)(Object(i.a)({},o),{},Object(ce.a)({},t,n)))}),O=function(){var e=Object(ne.a)(se.a.mark((function e(a){var t,n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!0!==a.currentTarget.checkValidity()){e.next=14;break}return e.prev=3,e.next=6,b({variables:Object(i.a)({},o)});case 6:t=e.sent,n=t.data,g.login(n.userAdd.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:c(!0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsx)(U.a,{className:"justify-content-center pt-5 mt-5",children:Object(N.jsx)(me.a,{xxl:4,xl:5,lg:6,md:7,sm:9,xs:10,children:Object(N.jsxs)(ue.a,{noValidate:!0,validated:t,onSubmit:O,children:[Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"First Name"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"First Name",required:!0,type:"text",name:"firstName",value:o.firstName,onChange:u}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a first name."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Last Name"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"Last Name",required:!0,type:"text",name:"lastName",value:o.lastName,onChange:u}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a last name."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Email Address"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"Email Address",required:!0,type:"email",name:"email",value:o.email,onChange:u}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a valid email address."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Password"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"Password",required:!0,type:"password",name:"password",value:o.password,onChange:u}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a password."})]}),Object(N.jsx)(G.a,{variant:"primary",type:"submit",children:"Sign Up"})]})})})}t(120);function he(){var e=g.getProfile(),a=Object(P.a)(B),t=a.loading,n=a.data,c=null===n||void 0===n?void 0:n.allJobs,r=Object(ie.a)(be),s=Object(C.a)(r,1)[0],i=Object(ie.a)(je),o=(Object(C.a)(i,1)[0],"");t||c.map((function(a){if(a.user._id===e.data._id)switch(o=a.category.name,console.log(o),o){case"Tech":o=Q;break;case"Audio":o=H;break;case"Art":o=z;break;case"Cooking":o=W;break;case"Social Media":o=K;break;default:console.log("no category!")}}));var l=function(e){var a=e.currentTarget,t=a.closest("#profile");console.log(a),t.remove()};return Object(N.jsx)("div",{className:"row justify-content-center p-5",children:t?"":c.map((function(a){if(a.user._id===e.data._id){a._id;if(a.user._id===e.data._id)switch(o=a.category.name){case"Tech":o=Q;break;case"Audio":o=H;break;case"Art":o=z;break;case"Cooking":o=W;break;case"Social Media":o=K;break;default:console.log("no category!")}return Object(N.jsxs)(V.a,{className:"col",id:"profile",children:[Object(N.jsx)(V.a.Img,{src:o}),Object(N.jsxs)(V.a.Body,{children:[Object(N.jsx)(V.a.Title,{children:a.name}),Object(N.jsx)(V.a.Text,{children:a.description})]}),Object(N.jsx)(V.a.Body,{children:Object(N.jsxs)("div",{className:"row justify-content-between",children:[Object(N.jsx)(G.a,{className:"col-4",type:"button",onClick:function(){return s(a._id)},children:"Edit"}),Object(N.jsx)(G.a,{className:"col-4 bg-danger",type:"button",onClick:l,children:"Delete"})]})})]},a._id)}}))})}function xe(){var e=Object(n.useState)(!1),a=Object(C.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({name:"",price:"",description:"",category:""}),s=Object(C.a)(r,2),o=s[0],l=s[1],d=Object(ie.a)(de),j=Object(C.a)(d,2),b=j[0],m=(j[1].error,Object(P.a)(q)),u=m.loading,O=m.data,p=(null===O||void 0===O?void 0:O.categories)||[],h=function(e){var a=e.target,t=a.name,n=a.value;l(Object(i.a)(Object(i.a)({},o),{},Object(ce.a)({},t,n)))},x=function(){var e=Object(ne.a)(se.a.mark((function e(a){var t,n,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!0===a.currentTarget.checkValidity())try{t=parseFloat(o.price),console.log(t),n={name:o.name,description:o.description,price:t,category:o.category},console.log(n),r=b({variables:Object(i.a)({},n)}),r.data,window.location.assign("/"),console.log("Success!")}catch(a){console.error(a),console.log(a)}c(!0);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsx)(U.a,{className:"justify-content-center mt-5",children:Object(N.jsx)(me.a,{xxl:4,xl:5,lg:6,md:7,sm:9,xs:10,children:Object(N.jsxs)(ue.a,{noValidate:!0,validated:t,onSubmit:x,children:[Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Title"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"Title",required:!0,type:"text",name:"name",onChange:h}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a title."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Price"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"$$$",required:!0,type:"number",name:"price",value:o.price,onChange:h}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a price."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsx)(ue.a.Label,{hidden:!0,children:"Description"}),Object(N.jsx)(ue.a.Control,{className:"",placeholder:"Description",required:!0,as:"textarea",rows:5,name:"description",value:o.description,onChange:h}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please enter a valid description."})]}),Object(N.jsxs)(ue.a.Group,{className:"mb-4",children:[Object(N.jsxs)(ue.a.Select,{onChange:h,required:!0,"aria-label":"Default select example",name:"category",children:[Object(N.jsx)("option",{selected:!0,disabled:!0,children:"Please select a Category"}),u?Object(N.jsx)("option",{}):p.map((function(e){return Object(N.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),Object(N.jsx)(ue.a.Control.Feedback,{type:"invalid",children:"Please select a catgeory."})]}),Object(N.jsx)(G.a,{variant:"primary",type:"submit",children:"POST"})]})})})}var ge=Object(d.a)({uri:"/graphql"}),ve=Object(u.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),fe=new j.a({link:ve.concat(ge),cache:new b.a});var ye=function(){return Object(N.jsx)(m.a,{client:fe,children:Object(N.jsx)(o.a,{children:Object(N.jsx)(l.d,{children:Object(N.jsxs)(l.b,{path:"/",element:Object(N.jsx)(M,{}),children:[Object(N.jsx)(l.b,{path:"/",element:Object(N.jsx)(E,{})}),Object(N.jsx)(l.b,{path:"job/:jobId",element:Object(N.jsx)(R,{})}),Object(N.jsx)(l.b,{path:"login",element:Object(N.jsx)(Oe,{})}),Object(N.jsx)(l.b,{path:"signup",element:Object(N.jsx)(pe,{})}),Object(N.jsx)(l.b,{path:"profile",element:Object(N.jsx)(he,{})}),Object(N.jsx)(l.b,{path:"post",element:Object(N.jsx)(xe,{})})]})})})})};t(121),t(122),t(144);s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(ye,{})}),document.getElementById("root"))},81:function(e,a,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.e5b3fedc.chunk.js.map