(this.webpackJsonpburger_king=this.webpackJsonpburger_king||[]).push([[0],{48:function(e,t,r){e.exports=r(88)},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},61:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){},84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){},88:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(22),o=r.n(c),l=r(16),i=r(21),u=r(40),s=(r(57),r(11)),m=r(12),d=r(14),p=r(13),E=r(19);r(58),r(59),r(60),r(61);var f=function(e){return a.a.createElement("li",{className:"NavItem"},a.a.createElement(E.c,{to:e.to,exact:!0},e.children))};var b=function(){return a.a.createElement("ul",{className:"NavItems"},a.a.createElement(f,{to:"/burgers"},"Burgers"),a.a.createElement(f,{to:"/drinks"},"Drinks"),a.a.createElement(f,{to:"/snacks"},"Snacks"))},g=(r(63),function(e){return e.href?a.a.createElement("a",{href:e.href,className:"Button Button-".concat(e.action||"default"),style:e.style},e.children):e.to?a.a.createElement(E.b,{to:e.to,exact:e.exact,className:"Button Button-".concat(e.action||"default"),style:e.style},e.children):a.a.createElement("button",{className:"Button Button-".concat(e.action||"default"," ").concat(e.d&&"f"),type:e.type,style:e.style,onClick:e.onClick,disabled:e.disabled},e.children)}),h=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement(g,{to:"/burger",style:{padding:"0"},action:"HeaderBTN"},a.a.createElement("h1",null,"KING")),a.a.createElement(b,null),a.a.createElement(g,{action:"toCart",style:{color:"white"},to:"/cart"}," total: ",this.props.totalPrice.toFixed(2),"$"))}}]),r}(n.Component),O=Object(l.b)((function(e,t){return{totalPrice:e.cart.totalPrice}}))(h),j=r(4),v=(r(64),r(65),r(41)),y=r.n(v).a.create({baseURL:"https://selfcheckout-5c223.firebaseio.com/"}),C=function(e){return{type:"ERROR",error:e}},N=function(e){return{type:"SELECTED_BURGER",burger:e}},k=function(e){return function(t){y.post("/orders.json",e).then((function(e){y.get("/orders.json").then((function(e){var r;t((r=e.data,{type:"CHECK_OUT",order:Object.keys(r).map((function(e){return e})).length}))})).catch((function(e){console.log(e),t(C(e.message))}))})).catch((function(e){console.log(e),t(C(e.message))}))}};r(82);var B=function(e){return a.a.createElement("div",{className:"Card ".concat(e.className),onAnimationEnd:e.onAnimationEnd},e.children)},M=(r(83),r(84),function(e){return e.show?a.a.createElement("div",{className:"Backdrop",onClick:e.onClick}," "):null});var x=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{show:e.show,onClick:e.closeModal}),a.a.createElement("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)"},className:"Modal"},a.a.createElement("span",{className:"c",onClick:e.closeModal},a.a.createElement("span",{className:"close"}," X ")),e.children))};r(85);var A=function(){return a.a.createElement("div",{className:"loader"},"Loading...")},P=r(20),S=r(7),_=r(2),R=r(47),T=(r(86),function(e){return a.a.createElement("div",{className:"Ingredient"},a.a.createElement("div",{className:"Label"},e.name," : ",e.amount),a.a.createElement("p",null,"price: ",e.ingredientPrice,"$"),a.a.createElement("div",null,a.a.createElement(g,{onClick:e.remove,disabled:e.amount<=0,className:"Less"},"remove"),a.a.createElement(g,{onClick:e.add,className:"More"},"add")))}),w=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={meal:!1,extraMealPrice:0,0:null,1:null},e.mealHandler=function(){e.state.meal?(e.props.removeMeal(3+e.state.extraMealPrice," "),e.carousel.slidePrev()):(e.props.addMeal(3),e.carousel.slideNext()),e.setState((function(e){return{meal:!e.meal}}))},e.cartHandler=function(){e.props.selectedBurger.note=e.state[0]&&e.state[1]?e.state[0]+" and "+e.state[1]:"",e.props.addToCart(e.props.selectedBurger),e.props.closeModal()},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this,t=Object(_.a)({},this.props.selectedBurger),r=Object(S.a)(this.props.ateria),n=Object.keys(t.ingredients).map((function(r){return a.a.createElement(T,{key:r,ingredientPrice:e.props.ingredientPrices[r],name:r,price:t.price,amount:t.ingredients[r]+t.extra[r],add:function(){return e.props.addIng(r)},remove:function(){return e.props.removeIng(r)}})})),c=r.map((function(t,r){return a.a.createElement("div",{key:t,style:{width:"100%"}},t.map((function(t){return a.a.createElement(g,{style:e.state[r]===t?{color:"red"}:null,key:t,onClick:function(){e.setState(Object(P.a)({},r,t))}},t)})))}));return a.a.createElement("div",{className:"BurgerConfig"},a.a.createElement(R.a,{ref:function(t){return e.carousel=t},enableSwipe:!1,enableMouseSwipe:!1,pagination:!1,showArrows:!1},a.a.createElement("div",{className:"Confing"},a.a.createElement("img",{src:t.img,alt:t.name}),a.a.createElement("div",{className:"IngredientsList"},n),a.a.createElement("p",{style:{margin:"2rem"}},"Price of Burger :",a.a.createElement("b",null," ",t.price.toFixed(2))),a.a.createElement(g,{onClick:this.cartHandler},"Add to Cart"),a.a.createElement(g,{onClick:this.mealHandler},"Get Meal")),a.a.createElement("div",{className:"Confing",style:{display:"".concat(this.state.meal?"block":"none")}},a.a.createElement("div",{className:"Ateria"},c),a.a.createElement("div",{className:"o"},a.a.createElement("p",{style:{margin:"2rem"}},"Price of Meal : ",a.a.createElement("b",null,t.price.toFixed(2))),a.a.createElement(g,{onClick:this.mealHandler},"Remove Meal"),a.a.createElement(g,{disabled:!(this.state[0]&&this.state[1]),onClick:this.cartHandler},"Add to Cart")))))}}]),r}(n.Component),D=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={modal:!1,added:null},e.cartHandler=function(t){e.props.addToCart(t)},e.animationHandler=function(t){e.setState((function(e){return{animate:!e.animate,added:t}}))},e.modalHandler=function(){e.setState((function(e){return{modal:!e.modal}}))},e.configBurger=function(t){e.setState({modal:!0}),e.props.selectBurger(t)},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.props.setMenu(this.props.match.path)}},{key:"componentDidUpdate",value:function(e){e.match.path!==this.props.match.path&&this.props.setMenu(this.props.match.path)}},{key:"render",value:function(){var e,t=this,r=this.props.errorMSG?a.a.createElement("p",{style:{textAlign:"center"}},this.props.errorMSG):a.a.createElement(A,null);return null!==this.props.menu&&(r=a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"MenuList"},this.props.menu.map((function(e){return a.a.createElement(B,{key:e.name,className:"MenuItem ".concat(e.id===t.state.added&&"g"),onAnimationEnd:function(){return t.setState({added:null})}},a.a.createElement("h2",null,e.name),a.a.createElement("img",{className:"burger"===e.type&&"brgr",src:e.img,alt:e.name}),a.a.createElement("br",null),"burger"===e.type?a.a.createElement(g,{onClick:function(){return t.configBurger(e)}},"Select"):a.a.createElement(g,{disabled:t.state.added,onClick:function(){t.props.addToCart(e),t.animationHandler(e.id)}},"Buy for ",e.price,"$"))}))))),this.state.modal&&(e=a.a.createElement(w,Object.assign({},this.props,{closeModal:this.modalHandler}))),a.a.createElement(a.a.Fragment,null,this.state.modal&&a.a.createElement(x,{show:this.state.modal,closeModal:this.modalHandler},e),r)}}]),r}(n.Component),G=Object(l.b)((function(e,t){return{menu:e.menu.menu,selectedBurger:e.order.selectedBurger,ingredientPrices:e.order.ingredientPrices,ateria:e.order.ateria,cart:e.cart.cart,totalPrice:e.cart.totalPrice,errorMSG:e.menu.errorMSG}}),(function(e,t){return{setMenu:function(t){return e((r=t,function(e){y.get("".concat(r,".json")).then((function(t){e({type:"SHOW_MENU",menu:t.data})})).catch((function(t){console.log(t),e(C(t.message))}))}));var r},selectBurger:function(t){return e(N(t))},addIng:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ingredientName:e}}(t))},removeIng:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ingredientName:e}}(t))},addMeal:function(t,r){return e(function(e,t){return{type:"GET_MEAL",price:e}}(t))},removeMeal:function(t,r,n){return e(function(e,t,r){return{type:"REMOVE_MEAL",price:e,note:t,resetPrice:r}}(t,r,n))},addToCart:function(t){return e(function(e){return{type:"ADD_TO_CART",item:e}}(t))}}}))(D),H=(r(87),function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={process:!1,modal:!1},e.modalHandler=function(){e.setState((function(e){return{modal:!e.modal}})),e.props.closeCheckOut()},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this,t=Object(S.a)(this.props.cart).map((function(e){var t="burger"===e.type&&Object.keys(e.extra).reduce((function(t,r){return 0!==e.extra[r]&&(t[r]=e.extra[r]),t}),{});return{name:e.name,type:e.type,note:e.note||"",extra:"burger"===e.type?Object(_.a)({},t):{},amount:e.amount}})),r=this.props.cart.map((function(t,r){return a.a.createElement(B,{className:"CartCard",key:t.name+r},a.a.createElement("div",null,a.a.createElement("h3",null,t.name),a.a.createElement("p",null,t.note),a.a.createElement("img",{src:t.img,alt:t.name})),a.a.createElement("div",{className:"OrderConfig"},a.a.createElement("div",null,a.a.createElement("p",null,"Price: ",a.a.createElement("b",null,t.price.toFixed(2),"$")),a.a.createElement("p",null,"Amount : ",a.a.createElement("b",null,t.amount)),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"}},a.a.createElement(g,{onClick:function(){return e.props.reduceAmount(t,r)}},"Remove"),a.a.createElement(g,{onClick:function(){return e.props.increaseAmount(t,r)}},"Add")),a.a.createElement("p",null,"total price : ",a.a.createElement("b",null,(t.amount*t.price).toFixed(2),"$")),a.a.createElement("ul",{style:{marginBottom:"0.5rem"}},t.extra&&Object.keys(t.extra).map((function(e){return 0!==t.extra[e]?a.a.createElement("li",{key:e},e+" : "+t.extra[e]):null})))),a.a.createElement(g,{onClick:function(){return e.props.deleteFromCart(t,r)}},"Delete")))}));return 0===this.props.cart.length?a.a.createElement("h3",null,"Your cart is empty!"):a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{disabled:this.state.process&&!this.props.error,onClick:function(){e.props.checkOut(t),e.setState({process:!0,modal:!0})}},"Check Out"),(this.state.modal&&this.props.order||this.props.error)&&a.a.createElement(x,{show:this.state.modal,closeModal:this.modalHandler},this.props.error?a.a.createElement("p",null,this.props.error):a.a.createElement("p",null,"Your queue number is ",this.props.order," ")),a.a.createElement("div",{className:"CartList"},r))}}]),r}(n.Component)),I=Object(l.b)((function(e,t){return{cart:e.cart.cart,selectedBurger:e.order.selectedBurger,order:e.cart.order,error:e.menu.errorMSG}}),(function(e,t){return{selectBurger:function(t){return e(N(t))},reduceAmount:function(t,r){return e({type:"REDUCE_AMOUNT",item:t,index:r})},increaseAmount:function(t,r){return e({type:"INCREASE_AMOUNT",item:t,index:r})},deleteFromCart:function(t,r){return e(function(e,t){return{type:"DELETE_FROM_CART",burger:e,index:t}}(t,r))},checkOut:function(t){return e(k(t))},closeCheckOut:function(){return e({type:"CLOSE_CHECK_OUT"})}}}))(H);var L=function(){return a.a.createElement("main",{className:"MainMenu"},a.a.createElement(j.d,null,a.a.createElement(j.b,{path:["/burgers"],component:G}),a.a.createElement(j.b,{path:"/drinks",component:G}),a.a.createElement(j.b,{path:"/snacks",component:G}),a.a.createElement(j.b,{path:"/cart",component:I}),a.a.createElement(j.a,{to:"/burgers"})))},U=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return a.a.createElement(E.a,null,a.a.createElement(O,null),a.a.createElement(L,null))}}]),r}(n.Component),F={menu:null,errorMSG:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return Object(_.a)(Object(_.a)({},e),{},{errorMSG:t.error});case"SHOW_MENU":var r=Object(S.a)(t.menu);return r.map((function(e){return e.amount=1})),Object(_.a)(Object(_.a)({},e),{},{menu:r,errorMSG:null});default:return e}},K={selectedBurger:null,ingredientPrices:{salad:.4,bacon:.9,cheese:.7,meat:1,onions:1},ateria:[["Coca-Cola","Fanta","Sprite"],["French fries","Sweet potato"]]},V={meat:0,bacon:0,cheese:0,onions:0,salad:0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_BURGER":return Object(_.a)(Object(_.a)({},e),{},{selectedBurger:Object(_.a)(Object(_.a)({},t.burger),{},{note:null,extra:Object(_.a)({},V)})});case"ADD_INGREDIENT":return Object(_.a)(Object(_.a)({},e),{},{selectedBurger:Object(_.a)(Object(_.a)({},e.selectedBurger),{},{extra:Object(_.a)(Object(_.a)({},e.selectedBurger.extra),{},Object(P.a)({},t.ingredientName,e.selectedBurger.extra[t.ingredientName]+1)),price:e.selectedBurger.extra[t.ingredientName]>=0?e.selectedBurger.price+e.ingredientPrices[t.ingredientName]:e.selectedBurger.price})});case"REMOVE_INGREDIENT":return Object(_.a)(Object(_.a)({},e),{},{selectedBurger:Object(_.a)(Object(_.a)({},e.selectedBurger),{},{extra:Object(_.a)(Object(_.a)({},e.selectedBurger.extra),{},Object(P.a)({},t.ingredientName,e.selectedBurger.extra[t.ingredientName]-1)),price:e.selectedBurger.extra[t.ingredientName]>0?e.selectedBurger.price-e.ingredientPrices[t.ingredientName]:e.selectedBurger.price})});case"GET_MEAL":return Object(_.a)(Object(_.a)({},e),{},{selectedBurger:Object(_.a)(Object(_.a)({},e.selectedBurger),{},{name:e.selectedBurger.name+" Meal",price:e.selectedBurger.price+t.price})});case"REMOVE_MEAL":return Object(_.a)(Object(_.a)({},e),{},{selectedBurger:Object(_.a)(Object(_.a)({},e.selectedBurger),{},{name:e.selectedBurger.name.replace(" Meal",""),price:t.resetPrice||e.selectedBurger.price-t.price,note:""})});default:return e}},Y={cart:[],totalPrice:0,order:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REDUCE_AMOUNT":var r=Object(S.a)(e.cart);return r[t.index].amount=r[t.index].amount-1>0?r[t.index].amount-1:r.splice(t.index,1),Object(_.a)(Object(_.a)({},e),{},{cart:Object(S.a)(r),totalPrice:e.totalPrice>=0&&e.totalPrice-t.item.price});case"INCREASE_AMOUNT":var n=Object(S.a)(e.cart);return n[t.index].amount=n[t.index].amount+1,Object(_.a)(Object(_.a)({},e),{},{cart:Object(S.a)(n),totalPrice:e.totalPrice+t.item.price});case"ADD_TO_CART":var a=Object(S.a)(e.cart),c=a.find((function(e){return"burger"!==e.type&&e.id===t.item.id}));return void 0===c?a.push(t.item):a.map((function(e){return e.id===c.id?e.amount=e.amount+1:e.amount})),Object(_.a)(Object(_.a)({},e),{},{cart:Object(S.a)(a),totalPrice:e.totalPrice+t.item.price});case"DELETE_FROM_CART":return Object(_.a)(Object(_.a)({},e),{},{cart:e.cart.filter((function(e,r){return t.index!==r})),totalPrice:e.totalPrice>=0&&e.totalPrice-t.burger.price*t.burger.amount});case"CHECK_OUT":return Object(_.a)(Object(_.a)({},e),{},{order:t.order,errorMSG:null});case"CLOSE_CHECK_OUT":if(!e.errorMSG)return Object(_.a)(Object(_.a)({},e),{},{cart:[],totalPrice:0,selectedBurger:null,order:null,errorMSG:null});break;default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=Object(i.c)({order:W,menu:$,cart:J}),X=Object(i.d)(q,Object(i.a)(u.a));o.a.render(a.a.createElement(l.a,{store:X},a.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.607d7c39.chunk.js.map