!function(){"use strict";var e,n,r,a={6827:function(e,n,r){var a=r(7378),t=r(1542),s=r(1602),i=r(6740),c=r(4649),l=r(126),o=r(5809),d=r(5287),u=r(5491),m=r(8730),v=r(4046),p=r(3564),x="ET7TLNthZ7V2DA4sSUpA",f="_8iZLSriAeqEQ9gv7oos",h="VTvSjhSfrK97lDxSh5nF",j=r(42),b=r.n(j),g=r(5007),N=r(8780),y=r(5647),S=function(e){localStorage.setItem("users",JSON.stringify(e))},k=(0,y.oM)({name:"users",initialState:{valueLike:{}},reducers:{getLike:function(e,n){var r=n.payload,a=e.valueLike[r];e.valueLike[r]=!a,S(e.valueLike)},getData:function(e,n){e.valueLike=n.payload,S(e.valueLike)}}}),w=k.actions,Z=w.getLike,_=w.getData,O=function(e){return e.storage.valueLike},I=k.reducer,L=r(8751),F=r(2837),P="Fya_dRyvqZ8OwluuIFEV",T="Z3TIUjR1VFioPG67ahB6",A="CarCBamopwin7fgqv370",E="hpf_gLyR7x7TQ_ufZ4Ro",C="hFX8fdCVdFtwhnj3J0e9",U="n5KleNPn2FOnh4LNoEEy",D=r(4246),q=function(e){var n=e.el,r=e.likeData,a=(0,N.I0)();return(0,D.jsx)(v.Z,{xs:12,sm:4,md:4,className:b()(P),children:(0,D.jsxs)("div",{className:"animate__animated animate__bounce animate__jackInTheBox "+b()(T),children:[(0,D.jsxs)(s.rU,{to:"/".concat(n.id),className:b()(C),children:[(0,D.jsx)("div",{className:b()(U),children:(0,D.jsx)("img",{src:n.avatar,alt:n.first_name+" "+n.last_name})}),(0,D.jsx)("div",{className:b()(A),children:n.first_name+" "+n.last_name})]}),(0,D.jsx)("div",{className:b()(E),onClick:function(e){var n=e.currentTarget.dataset.id;a(Z(n))},"data-id":n.id,children:r[n.id]?(0,D.jsx)(L.Z,{sx:{fontSize:30}}):(0,D.jsx)(F.Z,{sx:{fontSize:30},"data-id":n.id})})]},n.id)},n.id)},W={nav_wrapper:"hRmycXnq0Zdaf5Eo0BiI",container:"gp1jEJMLh4DPKGAqhb5s",buttonExit:"u4PD2YI7xsApZRJZ0OT7"},R=function(){var e=(0,i.s0)();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("div",{className:b()(W.nav_wrapper),children:(0,D.jsx)("div",{className:b()(W.container),children:(0,D.jsxs)("header",{children:[(0,D.jsx)("nav",{children:(0,D.jsx)("div",{className:b()(W.buttonExit),children:(0,D.jsx)(m.Z,{variant:"outlined",onClick:function(){localStorage.clear(),e("/login")},children:"Выход"})})}),(0,D.jsx)("h1",{className:b()(W.h1),children:"Наша команда"}),(0,D.jsxs)("p",{className:b()(W.p1),children:["Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся",(0,D.jsx)("br",{})," на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций."]})]})})})})},z={container:"GPR5LbMaxI4Iw7EO8g5l"},G=function(){var e=(0,a.useState)(!!JSON.parse(localStorage.getItem("person"))),n=(0,o.Z)(e,2),r=n[0];n[1];return(0,D.jsxs)(D.Fragment,{children:[r?null:(0,D.jsx)(i.Fg,{replace:!0,to:"/login"}),(0,D.jsx)("div",{className:b()(z.container),children:(0,D.jsx)("footer",{className:b()(z.footer),children:(0,D.jsx)("h2",{children:"All rights reserved ©"})})})]})};function X(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?X(Object(r),!0).forEach((function(n){(0,c.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var B=function(){var e=(0,a.useState)(null),n=(0,o.Z)(e,2),r=n[0],t=n[1],s=(0,a.useState)(1),i=(0,o.Z)(s,2),c=i[0],j=i[1],y=(0,a.useState)(!0),S=(0,o.Z)(y,2),k=S[0],w=S[1],Z=(0,N.I0)(),I=(0,N.v9)(O);(0,a.useEffect)((function(){setTimeout((function(){try{g.ZP.get("https://reqres.in/api/users?/page=".concat(c)).then((function(e){var n=e.data.data;if(t(n),j((function(e){return e+1})),localStorage.getItem("users")){var r=JSON.parse(localStorage.getItem("users"));Z(_(r))}else{var a=n.reduce((function(e,n){return e[n.id]=!1,e}),{});Z(_(a))}setTimeout((function(){L()}),1e3)}))}catch(e){console.error(e)}}),500)}),[]);var L=function(){document.querySelectorAll(".animate__animated").forEach((function(e){e.classList.remove("animate__animated","animate__bounce","animate__jackInTheBox")}))};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(R,{}),(0,D.jsxs)("div",{className:b()(x),children:[(0,D.jsx)(p.Z,{sx:{flexGrow:1},children:(0,D.jsx)(v.Z,{container:!0,spacing:{xs:3,md:4},columns:{xs:4,sm:8,md:12},children:r?r.map((function(e){return(0,D.jsx)(q,{el:e,likeData:I},e.id)})):(0,D.jsx)("div",{className:b()(h),children:(0,D.jsx)(d.Z,{color:"secondary"})})})}),3!=c?(0,D.jsx)(D.Fragment,{children:r?(0,D.jsx)("div",{className:b()(f),children:k?(0,D.jsx)(m.Z,{variant:"outlined",onClick:function(e){w(!1),setTimeout((function(){try{g.ZP.get("https://reqres.in/api/users?page=".concat(c)).then((function(e){var n=e.data.data;t((function(n){return[].concat((0,l.Z)(n),(0,l.Z)(e.data.data))})),j((function(e){return e+1})),w(!0);var r=n.reduce((function(e,n){return e[n.id]=!1,e}),{}),a=JSON.parse(localStorage.getItem("users"));Z(_(a)),Z(_(M(M({},r),I))),setTimeout((function(){L()}),1e3)}))}catch(e){console.error(e)}}),1e3)},color:"secondary",endIcon:(0,D.jsx)(u.Z,{}),sx:{margin:"25px",fontSize:"20px",padding:"15px 30px"},children:"Показать еще"}):(0,D.jsx)(d.Z,{sx:{margin:"25px"},color:"secondary"})}):null}):null]}),(0,D.jsx)(G,{})]})},J=r(3771),Q=r(5609),K={userInfo:"wJwbGTexk_VkCQmN6Dad",userDescription:"k1kgFxwCKK327ASJckbJ",userAddress:"iRHDnLy_AhCnsPSdXiK2",userSite:"sC_E7ZdnqLRpLVwiTzlt",userEmail:"rXU75fiuEToM5yXx7m5q",userIcon:"v6dq3QgGWynnwlL5Ycwz",spinner:"ZnIkTMrhjo2dIs5Stn2W"},V=r(6767),Y=r(503),H=r(7047),$={navWrapper:"WGu2GTXSPvofQv3oKcAy",container:"IlLQkt5deaBNGT2dL6qx",headerInfo:"rOpn9NxX_8CBPXNY0p7o",headerImg:"c7y2EwR6DLvmeGUuGGqX",spinner:"grXWW9f8kwnsbT6Fd4mc",btnBack:"DVWg2nW6xkKQ8QDhp6kI",navContainer:"oWmWKf8QkfRx4tHdtJTp",buttonExit:"TbDpnnaum1tfTYEQ0bpq"},ee=function(e){var n=e.support,r=e.data,t=(0,a.useState)(window.innerWidth),s=(0,o.Z)(t,2),c=s[0],l=s[1],d=(0,i.s0)(),u=function(){localStorage.clear(),d("/login")};return window.addEventListener("resize",(function(e){l(window.innerWidth)}),{once:!0}),(0,D.jsx)(D.Fragment,{children:n&&r?(0,D.jsx)("div",{className:b()($.navWrapper),children:(0,D.jsxs)("div",{className:b()($.container),children:[(0,D.jsx)("nav",{className:b()($.navContainer),children:c>=600?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:b()($.buttonExit),children:(0,D.jsx)(m.Z,{variant:"outlined",onClick:function(){return d(-1)},children:"Назад"})}),(0,D.jsx)("div",{className:b()($.buttonExit),children:(0,D.jsx)(m.Z,{variant:"outlined",onClick:u,children:"Выход"})})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:b()($.btnBack),children:(0,D.jsx)(Y.Z,{sx:{fontSize:40},onClick:function(){return d(-1)}})}),(0,D.jsx)("div",{className:b()($.btnBack),children:(0,D.jsx)(H.Z,{sx:{fontSize:40},onClick:u})})]})}),(0,D.jsxs)("header",{className:b()($.header),children:[(0,D.jsx)("div",{className:b()($.headerImg),children:(0,D.jsx)("img",{src:r.avatar,alt:"#"})}),(0,D.jsxs)("div",{className:b()($.headerInfo),children:[(0,D.jsx)("h1",{className:b()($.h1),children:r.first_name+" "+r.last_name}),(0,D.jsx)("p",{className:b()($.p1),children:"Партнер"})]})]})]})}):(0,D.jsx)(V.Z,{color:"secondary"})})},ne=function(){var e=(0,a.useState)(null),n=(0,o.Z)(e,2),r=n[0],t=n[1],s=(0,i.UO)().id;return(0,a.useEffect)((function(){setTimeout((function(){try{g.ZP.get("https://reqres.in/api/users/".concat(s)).then((function(e){t(e.data)}))}catch(e){console.error(e)}}),1e3)}),[]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ee,{support:null==r?void 0:r.support,data:null==r?void 0:r.data}),r?(0,D.jsxs)("main",{className:b()(K.main),children:[(0,D.jsx)("div",{className:b()(K.userInfo),children:(0,D.jsxs)("div",{className:b()(K.userDescription),children:["Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты. ",(0,D.jsx)("br",{})," ",(0,D.jsx)("br",{}),'В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно". ',(0,D.jsx)("br",{})," ",(0,D.jsx)("br",{}),"Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов. ",(0,D.jsx)("br",{})," ",(0,D.jsx)("br",{})]})}),(0,D.jsxs)("div",{className:b()(K.userAddress),children:[(0,D.jsxs)("div",{className:b()(K.userSite),children:[(0,D.jsx)(Q.Z,{sx:{fontSize:30},className:b()(K.userIcon)}),r.support.url]}),(0,D.jsxs)("div",{className:b()(K.userEmail),children:[(0,D.jsx)(J.Z,{sx:{fontSize:30},className:b()(K.userIcon)}),r.data.email]})]})]}):(0,D.jsx)("main",{className:b()(K.main),children:(0,D.jsx)("div",{className:b()(K.spinner),children:(0,D.jsx)(d.Z,{sx:{margin:"25px"},color:"secondary"})})}),(0,D.jsx)(G,{})]})},re=r(2814),ae=r(8158),te=r(1722),se=r(622),ie={container:"M64wALIy_Rpi0FDou0MX",wrapper:"OqU8ZTzAOxIg2_593986",btn:"oQYX1_6yluqmV0szHxMg",passwordShow:"pWj9ip2v9TbAbl_Z1XiQ"},ce=function(e){var n=e.target;return/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(n.value)?(n.classList.remove("is-invalid"),n.classList.add("is-valid"),!0):""==n.value?(n.classList.remove("is-valid","is-invalid"),!0):(n.classList.remove("is-valid"),n.classList.add("is-invalid"),!1)},le=function(e){var n=e.target;0==n.value?(n.classList.remove("is-valid"),n.classList.add("is-invalid")):(n.classList.remove("is-invalid"),n.classList.add("is-valid"))},oe=function(e,n){var r,a;e(!0),document.querySelectorAll(".form-control").forEach((function(e){e.matches(".is-valid")||e.classList.add("is-invalid")})),null===(r=n.current)||void 0===r||r.classList.remove("animate__fadeOutUp"),null===(a=n.current)||void 0===a||a.classList.add("animate__fadeInDown"),setTimeout((function(){var e,r;null===(e=n.current)||void 0===e||e.classList.remove("animate__fadeInDown"),null===(r=n.current)||void 0===r||r.classList.add("animate__fadeOutUp")}),5e3)},de=(0,y.oM)({name:"person",initialState:{userParams:{email:null,token:null,id:null}},reducers:{setUser:function(e,n){e.userParams.email=n.payload.email,e.userParams.token=n.payload.token,e.userParams.id=n.payload.id,function(e){localStorage.setItem("person",JSON.stringify(e))}(e.userParams)}}}),ue=de.actions.setUser,me=de.reducer,ve=function(){var e=(0,a.useState)(""),n=(0,o.Z)(e,2),r=n[0],t=n[1],c=(0,a.useState)(""),l=(0,o.Z)(c,2),d=l[0],u=l[1],m=(0,a.useState)(!1),v=(0,o.Z)(m,2),p=v[0],x=v[1],f=(0,a.useState)(!0),h=(0,o.Z)(f,2),j=h[0],g=h[1],y=(0,N.I0)(),S=(0,i.s0)(),k=(0,a.useRef)(),w=(0,a.useRef)();return(0,D.jsxs)(D.Fragment,{children:[p?(0,D.jsx)(ae.Z,{severity:"error",sx:{zIndex:10},className:"animate__animated animate__bounce",ref:k,children:"Ошибка! Проверьте правильность заполнения полей!"}):null,(0,D.jsx)("div",{className:b()(ie.wrapper),children:(0,D.jsx)("div",{className:b()(ie.container),children:(0,D.jsxs)("form",{className:"row g-3",children:[(0,D.jsx)("strong",{className:b()(ie.strong),children:"Войдите в учетную запись"}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServer03",className:"form-label",children:"Почта*"}),(0,D.jsx)("input",{type:"text",className:"".concat(b()(ie.input)," form-control"),id:"validationServer03","aria-describedby":"validationServer03Feedback",required:!0,placeholder:"Введите email ...",value:r,onChange:function(e){ce(e),t(e.target.value)}}),(0,D.jsx)("div",{id:"validationServer03Feedback",className:"invalid-feedback",children:"Ошибка!"}),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"})]}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServerUsername",className:"form-label",children:"Пароль*"}),(0,D.jsxs)("div",{className:"input-group has-validation",children:[(0,D.jsx)("span",{className:"".concat(b()(ie.passwordShow)," input-group-text"),id:"inputGroupPrepend3",onClick:function(){g((function(e){return!e})),"password"==w.current.getAttribute("type")?w.current.setAttribute("type","text"):(console.log(w.current.getAttribute("type")),w.current.setAttribute("type","password"))},children:j?(0,D.jsx)(se.Z,{}):(0,D.jsx)(te.Z,{})}),(0,D.jsx)("input",{ref:w,type:"password",className:"".concat(b()(ie.input)," form-control"),id:"validationServerUsername","aria-describedby":"inputGroupPrepend3 validationServerUsernameFeedback",required:!0,value:d,onChange:function(e){le(e),u(e.target.value)},placeholder:"Введите пароль ...",maxLength:"40"}),(0,D.jsx)("div",{id:"validationServerUsernameFeedback",className:"invalid-feedback",children:"Ошибка!"}),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"})]})]}),(0,D.jsx)("button",{className:b()(ie.btn),type:"submit",onClick:function(e){e.preventDefault();var n=(0,re.v0)();(0,re.e5)(n,r,d).then((function(e){var n=e.user;y(ue({email:n.email,id:n.uid,token:n.accessToken})),S("/")})).catch((function(e){console.error(e),oe(x,k)}))},children:"Войти"}),(0,D.jsx)(s.rU,{to:"/register",style:{textAlign:"center"},children:"Еще нет акаунта? Зарегистрируйтесь!"})]})})})]})},pe={container:"q60iecxYm8_rQlEw0snZ",wrapper:"ZEvv9Ana565dJOAETKR3",btn:"XztcWZZWiSOiXJ4thU12",passwordShow:"eRhayuUkmgNjpBXtW9Xt"},xe=function(){var e=(0,a.useState)(""),n=(0,o.Z)(e,2),r=n[0],t=n[1],l=(0,a.useState)(""),d=(0,o.Z)(l,2),u=d[0],m=d[1],v=(0,a.useState)(!1),p=(0,o.Z)(v,2),x=p[0],f=p[1],h=(0,a.useState)(!0),j=(0,o.Z)(h,2),g=j[0],y=j[1],S=(0,N.I0)(),k=(0,i.s0)(),w=(0,a.useRef)(),Z=(0,a.useRef)(),_=(0,a.useRef)(),O=function(){y((function(e){return!e})),"password"==Z.current.getAttribute("type")||"password"==_.current.getAttribute("type")?(Z.current.setAttribute("type","text"),_.current.setAttribute("type","text")):(Z.current.setAttribute("type","password"),_.current.setAttribute("type","password"))},I=function(){var e,n;_.current.value!=Z.current.value?(null===(e=_.current)||void 0===e||e.classList.remove("is-valid"),null===(n=_.current)||void 0===n||n.classList.add("is-invalid")):(null==_||_.current.classList.remove("is-invalid"),null==_||_.current.classList.add("is-valid"))};return(0,D.jsxs)(D.Fragment,{children:[x?(0,D.jsx)(ae.Z,{severity:"error",sx:{zIndex:10},className:"animate__animated animate__bounce",ref:w,children:"Ошибка! Проверьте правильность заполнения полей!"}):null,(0,D.jsx)("div",{className:b()(pe.wrapper),children:(0,D.jsx)("div",{className:b()(pe.container),children:(0,D.jsxs)("form",{className:"row g-3",children:[(0,D.jsx)("strong",{children:"Регистрация учетной записи"}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServer01",className:"form-label",children:"Имя*"}),(0,D.jsx)("input",(0,c.Z)({type:"text",className:"form-control",id:"validationServer01",defaultValue:"",required:!0,placeholder:"Введите имя ...",onChange:le},"required",!0)),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"}),(0,D.jsx)("div",{id:"validationServerUsernameFeedback",className:"invalid-feedback",children:"Некорректное имя"})]}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServer03",className:"form-label",children:"Почта*"}),(0,D.jsx)("input",{type:"text",className:"".concat(b()(pe.input)," form-control"),id:"validationServer03","aria-describedby":"validationServer03Feedback",required:!0,placeholder:"Введите email ...",value:r,onChange:function(e){ce(e),t(e.target.value)}}),(0,D.jsx)("div",{id:"validationServer03Feedback",className:"invalid-feedback",children:"Ошибка!"}),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"})]}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServerUsername",className:"form-label",children:"Пароль*"}),(0,D.jsxs)("div",{className:"input-group has-validation",children:[(0,D.jsx)("span",{className:"".concat(b()(pe.passwordShow)," input-group-text"),id:"inputGroupPrepend3",onClick:O,children:g?(0,D.jsx)(se.Z,{}):(0,D.jsx)(te.Z,{})}),(0,D.jsx)("input",{ref:Z,type:"password",className:"".concat(b()(pe.input)," form-control"),id:"validationServerUsername","aria-describedby":"inputGroupPrepend3 validationServerUsernameFeedback",required:!0,onChange:function(e){le(e),I(),m(e.target.value)},placeholder:"Введите пароль ...",maxLength:"40"}),(0,D.jsx)("div",{id:"validationServerUsernameFeedback",className:"invalid-feedback",children:"Ошибка!"}),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"})]})]}),(0,D.jsxs)("div",{className:"col-md-12 p-0",children:[(0,D.jsx)("label",{htmlFor:"validationServerUsername",className:"form-label",children:"Подтвердите пароль*"}),(0,D.jsxs)("div",{className:"input-group has-validation",children:[(0,D.jsx)("span",{className:"".concat(b()(pe.passwordShow)," input-group-text"),id:"inputGroupPrepend3",onClick:O,children:g?(0,D.jsx)(se.Z,{}):(0,D.jsx)(te.Z,{})}),(0,D.jsx)("input",{type:"password",className:"".concat(b()(pe.input)," form-control"),id:"validationServerUsername","aria-describedby":"inputGroupPrepend3 validationServerUsernameFeedback",required:!0,ref:_,onChange:I,placeholder:"Введите пароль ...",maxLength:"40"}),(0,D.jsx)("div",{id:"validationServerUsernameFeedback",className:"invalid-feedback",children:"Пароли не совпадают!"}),(0,D.jsx)("div",{className:"valid-feedback",children:"Все хорошо!"})]})]}),(0,D.jsx)("button",{className:b()(pe.btn),type:"submit",onClick:function(e){e.preventDefault();var n=(0,re.v0)();(0,re.Xb)(n,r,u).then((function(e){var n=e.user;S(ue({email:n.email,id:n.uid,token:n.accessToken})),k("/")})).catch((function(e){console.error(e),oe(f,w)}))},children:"Зарегистрироваться"}),(0,D.jsx)(s.rU,{to:"/login",style:{textAlign:"center"},children:"Уже есть аккаунт? Войдите!"})]})})})]})},fe=r(1457),he={btn_back:"iMxG0rX9W1FRe56FYfZS"},je=function(){var e=(0,i.s0)();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("h1",{className:b()(he.h1),children:"Упс, что-то пошло не так!"}),(0,D.jsx)("div",{className:b()(he.btn_back),children:(0,D.jsx)(m.Z,{variant:"outlined",color:"secondary",sx:{borderRadius:100,padding:2,fontSize:16},startIcon:(0,D.jsx)(fe.Z,{}),onClick:function(){return e("/")},children:"Вернуться на главную"})})]})},be=function(){return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(i.Z5,{children:[(0,D.jsx)(i.AW,{path:"/",element:(0,D.jsx)(B,{})}),(0,D.jsx)(i.AW,{path:"/:id",element:(0,D.jsx)(ne,{})}),(0,D.jsx)(i.AW,{path:"/login",element:(0,D.jsx)(ve,{})}),(0,D.jsx)(i.AW,{path:"/register",element:(0,D.jsx)(xe,{})}),(0,D.jsx)(i.AW,{path:"*",element:(0,D.jsx)(je,{})})]})})},ge=(0,y.xC)({reducer:{storage:I,userInfo:me}});(0,r(2671).ZF)({apiKey:"AIzaSyBlEaDUxTMrRE2lgH358-r1YWETwe7ok2I",authDomain:"userprojectisauth.firebaseapp.com",projectId:"userprojectisauth",storageBucket:"userprojectisauth.appspot.com",messagingSenderId:"5306382535",appId:"1:5306382535:web:ab94e9be4445f01f2366e2"});t.render((0,D.jsx)(s.UT,{children:(0,D.jsx)(N.zt,{store:ge,children:(0,D.jsx)(be,{})})}),document.getElementById("root"))}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.m=a,e=[],s.O=function(n,r,a,t){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],t=e[d][2];for(var c=!0,l=0;l<r.length;l++)(!1&t||i>=t)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(c=!1,t<i&&(i=t));if(c){e.splice(d--,1);var o=a();void 0!==o&&(n=o)}}return n}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[r,a,t]},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,{a:n}),n},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);s.r(t);var i={};n=n||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~n.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(n){i[n]=function(){return e[n]}}));return i.default=function(){return e},s.d(t,i),t},s.d=function(e,n){for(var r in n)s.o(n,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};s.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,t,i=r[0],c=r[1],l=r[2],o=0;if(i.some((function(n){return 0!==e[n]}))){for(a in c)s.o(c,a)&&(s.m[a]=c[a]);if(l)var d=l(s)}for(n&&n(r);o<i.length;o++)t=i[o],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var i=s.O(void 0,[471],(function(){return s(6827)}));i=s.O(i)}();