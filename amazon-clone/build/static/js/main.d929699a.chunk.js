(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(25),i=c.n(n),r=(c(50),c(39)),o=c(12),l=(c(51),c(41)),j=c.n(l),d=c(43),m=c.n(d),u=c(17),h=c(2),b=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(h.jsx)(b.Provider,{value:Object(a.useReducer)(t,c),children:s})},g=function(){return Object(a.useContext)(b)},p=c(32),x=(p.a.initializeApp({apiKey:"AIzaSyCQM4v6asF7OgoBcp4yImqw8TognQgvJpo",authDomain:"clone-9d860.firebaseapp.com",projectId:"clone-9d860",storageBucket:"clone-9d860.appspot.com",messagingSenderId:"763016027230",appId:"1:763016027230:web:f89ff883e0466e5f8128cf",measurementId:"G-1MV439DE6D"}).firestore(),p.a.auth());var _=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{className:"header_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"Amazon"})}),Object(h.jsxs)("div",{className:"header_search",children:[Object(h.jsx)("input",{className:"header_search_input",type:"text"}),Object(h.jsx)(j.a,{className:"header_searchIcon"})]}),Object(h.jsxs)("div",{className:"header_nav",children:[Object(h.jsx)(u.b,{to:!s&&"/login",children:Object(h.jsxs)("div",{className:"header_option",onClick:function(){s&&x.signOut()},children:[Object(h.jsxs)("span",{className:"header_option1",children:[" Hello ",s?s.email:"Guest"," "]}),Object(h.jsx)("span",{className:"header_option2",children:s?"Sign-out":"Sign-in"})]})}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_option1",children:" Return "}),Object(h.jsx)("span",{className:"header_option2",children:"Orders"})]}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_option1",children:"Your"}),Object(h.jsx)("span",{className:"header_option2",children:"Prime"})]}),Object(h.jsx)(u.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header_basket",children:[Object(h.jsx)(m.a,{}),Object(h.jsx)("span",{className:"header_option2 header_basket_count",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(67),c(68);var v=function(e){var t=e.title,c=e.image,a=e.price,s=e.rating,n=g(),i=Object(o.a)(n,2),r=(i[0].basket,i[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product_info",children:[Object(h.jsx)("p",{className:"product_title",children:t}),Object(h.jsxs)("p",{className:"product_price",children:[Object(h.jsx)("small",{children:"\u20b9"}),Object(h.jsxs)("strong",{children:[" ",a]})]}),Object(h.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{alt:"",src:c}),Object(h.jsx)("button",{onClick:function(){r({type:"ADD_TO_CART",item:{title:t,image:c,price:a,rating:s}})},children:"Add to Cart"})]})};var f=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)("img",{className:"home_image",src:"https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._CB663481141_._CR575,0,865,675_AC_.jpg",alt:"Home"}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{title:"Asus ROG Rapture GT-AC5300 Tri-Band WiFi Gaming Router (Black) for VR and 4K Streaming, with Quad core Processor, Gaming Port, WTFast, Adaptive QoS",price:22460,image:"https://images-na.ssl-images-amazon.com/images/I/51RzyXD3j1L._SL1000_.jpg",rating:5}),Object(h.jsx)(v,{title:"OneOdio Adapter-Free Closed Back Over-Ear DJ Stereo Monitor Headphones",price:1999,image:"https://images-na.ssl-images-amazon.com/images/I/71jKSNdUJKL._SL1200_.jpg",rating:3})]}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{title:'HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/NVIDIA GTX 1650',price:80999,image:"https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg",rating:4}),Object(h.jsx)(v,{title:"ASUS TUF Gaming F15,15.6-inch FHD 60Hz, Intel Core i5-10300H 10th Gen, NVIDIA GeForce GTX 1650 4GB Graphics",price:6e4,image:"https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg",rating:5}),Object(h.jsx)(v,{title:"Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",price:399,image:"https://images-na.ssl-images-amazon.com/images/I/61l3aUqHRVL._SL1000_.jpg",rating:5})]}),Object(h.jsx)("div",{className:"home_row",children:Object(h.jsx)(v,{title:"Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor ",price:16e4,image:"https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg",rating:5})})]})})},N=(c(69),c(70),c(44)),k=c.n(N),C=c(33),S=c(20),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},I=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(S.a)(Object(S.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_CART":var c=e.basket.findIndex((function(e){return e.name===t.name})),a=Object(C.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product ".concat(t.name," not in cart")),Object(S.a)(Object(S.a)({},e),{},{basket:a});case"SET_USER":return Object(S.a)(Object(S.a)({},e),{},{user:t.user});default:return e}};var P=function(){var e=g(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal_gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:A(c),thousandSeparator:!0,displayType:"text",prefix:"\u20b9"}),Object(h.jsx)("button",{children:"Proceed To Checkout"})]})};c(72);var T=function(e){var t=e.image,c=e.title,a=e.price,s=e.rating,n=g(),i=Object(o.a)(n,2),r=(i[0].basket,i[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct_image",alt:"",src:t}),Object(h.jsxs)("div",{className:"checkoutProduct_info",children:[Object(h.jsx)("p",{className:"checkoutProduct_title",children:c}),Object(h.jsxs)("p",{className:"checkoutProduct_price",children:[Object(h.jsx)("small",{children:"\u20b9 "}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"checkoutProduct_rating",children:Array(s).fill().map((function(){return Object(h.jsx)("p",{children:"\u2b50"})}))}),Object(h.jsx)("button",{onClick:function(){r({type:"REMOVE_FROM_CART",item:{title:c,image:t,price:a,rating:s}})},children:"Remove From Cart"})]})]})};var y=function(){var e=g(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout_left",children:[Object(h.jsx)("img",{class:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"checkout_title",children:"Your Shopping Basket"}),c.map((function(e){return Object(h.jsx)(T,{title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout_right",children:Object(h.jsx)(P,{})})]})},G=(c(73),c(9));var z=function(){var e=Object(G.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"Amazon"})}),Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"Email"}),Object(h.jsx)("input",{type:"email",value:s,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",vaue:l,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("button",{className:"login_signbtn",type:"submit",onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(s,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(s,l).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)})),x&&e.push("/")},className:"login_registerbtn",children:"Create your Amazon Account"})]})]})};c(74);var R=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){console.log("USER is>>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(G.c,{children:[Object(h.jsx)(G.a,{path:"/login",children:Object(h.jsx)(z,{})}),Object(h.jsxs)(G.a,{path:"/checkout",children:[Object(h.jsx)(_,{}),Object(h.jsx)(y,{})]}),Object(h.jsxs)(G.a,{path:"/",children:[Object(h.jsx)(_,{}),Object(h.jsx)(f,{})]})]})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:I,children:Object(h.jsx)(R,{})})}),document.getElementById("root")),E()}},[[76,1,2]]]);
//# sourceMappingURL=main.d929699a.chunk.js.map