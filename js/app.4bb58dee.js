(function(){"use strict";var t={3834:function(t,e,a){var s=a(9242),i=a(3396);const n={class:"container"},o={class:"logo"},r=["src"];function c(t,e,a,s,c,l){const d=(0,i.up)("router-link"),u=(0,i.up)("router-view"),m=(0,i.up)("basket-comp"),p=(0,i.up)("footer-comp");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("nav",null,[(0,i.Wm)(d,{to:"/"},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("img",{src:c.logo,alt:"logo"},null,8,r)])])),_:1})]),(0,i.Wm)(u),(0,i.Wm)(m),(0,i.Wm)(p)])}var l=a(7139);const d=t=>((0,i.dD)("data-v-89d2fe10"),t=t(),(0,i.Cn)(),t),u={class:"basket-link"},m={key:0,class:"bi bi-cart4 animate__animated animate__flipInX"},p={key:1,class:"bi bi-cart-dash-fill animate__animated animate__flipInX"},g=d((()=>(0,i._)("span",null,"Basket",-1))),h={key:0,class:"basket-sum"};function k(t,e,a,s,n,o){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(r,{class:(0,l.C_)({active:o.thisIsBasketPage}),to:"/basket"},{default:(0,i.w5)((()=>[o.basketEmpty?((0,i.wg)(),(0,i.iD)("i",p)):((0,i.wg)(),(0,i.iD)("i",m)),g])),_:1},8,["class"]),o.thisIsBasketPage?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",h,"$"+(0,l.zw)(o.sumInBasket),1))])}var v={data(){return{}},computed:{thisIsBasketPage(){return"/basket"==this.$route.path},basketEmpty(){return this.$store.state.basketAll.length>0},sumInBasket(){return this.$store.getters.priceInCart}}},_=a(89);const b=(0,_.Z)(v,[["render",k],["__scopeId","data-v-89d2fe10"]]);var f=b;const w={class:"footer"},y=(0,i._)("div",{class:"content has-text-centered"},[(0,i._)("p",null,[(0,i.Uk)(" Pet projectby "),(0,i._)("a",{href:"https://t.me/crumb789"},[(0,i._)("strong",null,"crumb798")]),(0,i.Uk)(". Website content does not have a license "),(0,i._)("a",{href:"https://bulma.io/"},"2023"),(0,i.Uk)(". ")])],-1),I=[y];function C(t,e){return(0,i.wg)(),(0,i.iD)("footer",w,I)}const D={},$=(0,_.Z)(D,[["render",C]]);var A=$,F=a.p+"img/logo.081c2b44.png",T={components:{basketComp:f,FooterComp:A},data(){return{logo:F}}};const q=(0,_.Z)(T,[["render",c]]);var B=q,M=a(2483);const S={class:"home container"},L={class:"home-wrapper"},P={key:0,class:"items"},j={class:"items-wrapper"},Z={class:"items-quantity mt-3"};function z(t,e,a,s,n,o){const r=(0,i.up)("menu-comp"),c=(0,i.up)("items-sort"),d=(0,i.up)("item-card"),u=(0,i.up)("items-placeholder");return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",L,[(0,i.Wm)(r,{onFetchNewTag:o.newFetch},null,8,["onFetchNewTag"]),o.itemsFake?((0,i.wg)(),(0,i.iD)("div",P,[(0,i.Wm)(c),(0,i._)("div",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.itemsFake,(t=>((0,i.wg)(),(0,i.j4)(d,{key:t.id,item:t},null,8,["item"])))),128))]),(0,i._)("div",Z,[(0,i._)("span",null,(0,l.zw)(o.itemsFake.length),1),(0,i.Uk)(" products out of "),(0,i._)("span",null,(0,l.zw)(o.howInCategoryAll),1),(0,i.Uk)(" are shown")]),n.howLoad<=o.itemsFake.length?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>o.loadMore&&o.loadMore(...t)),class:"button is-success mt-4"},"Load More")):(0,i.kq)("",!0)])):((0,i.wg)(),(0,i.j4)(u,{key:1}))])])}var O=a(4870);const W={class:"card animate__animated animate__fadeIn"},x={class:"product-descr"},U=["title"],E={class:"product-descr_price is-bold pl-2"},Q={class:"mr-2"},H={key:1,class:"bi bi-bag-check animate__animated animate__flipInX"},Y={class:"product-descr_rating"},K={class:"product-descr stars pl-2"},V={class:"one"},X={key:0,class:"bi bi-star-fill rate-fill"},N={key:1,class:"bi bi-star"},J={class:"two"},R={key:0,class:"bi bi-star-fill rate-fill"},G={key:1,class:"bi bi-star"},tt={class:"three"},et={key:0,class:"bi bi-star-fill rate-fill"},at={key:1,class:"bi bi-star"},st={class:"four"},it={key:0,class:"bi bi-star-fill rate-fill"},nt={key:1,class:"bi bi-star"},ot={class:"five"},rt={key:0,class:"bi bi-star-fill rate-fill"},ct={key:1,class:"bi bi-star"},lt={class:"ml-2"},dt={class:"card-img"},ut=["src"];function mt(t,e,a,s,n,o){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("div",x,[(0,i._)("div",{class:"card-title subtitle is-6",title:a.item.title},[(0,i.Wm)(r,{to:`/product/${a.item.id}`},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(a.item.title),1)])),_:1},8,["to"])],8,U),(0,i._)("div",E,[(0,i._)("strong",null,"$"+(0,l.zw)(a.item.price),1),(0,i._)("span",Q,[a.item.quantity?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("i",{key:0,onClick:e[0]||(e[0]=t=>o.addToBasket(a.item)),class:"bi bi-bag-plus"})),a.item.quantity?((0,i.wg)(),(0,i.iD)("i",H)):(0,i.kq)("",!0)])]),(0,i._)("div",Y,[(0,i._)("div",K,[(0,i._)("div",V,[o.ratingStars>=1?((0,i.wg)(),(0,i.iD)("i",X)):((0,i.wg)(),(0,i.iD)("i",N))]),(0,i._)("div",J,[o.ratingStars>=2?((0,i.wg)(),(0,i.iD)("i",R)):((0,i.wg)(),(0,i.iD)("i",G))]),(0,i._)("div",tt,[o.ratingStars>=3?((0,i.wg)(),(0,i.iD)("i",et)):((0,i.wg)(),(0,i.iD)("i",at))]),(0,i._)("div",st,[o.ratingStars>=4?((0,i.wg)(),(0,i.iD)("i",it)):((0,i.wg)(),(0,i.iD)("i",nt))]),(0,i._)("div",ot,[5==o.ratingStars?((0,i.wg)(),(0,i.iD)("i",rt)):((0,i.wg)(),(0,i.iD)("i",ct))]),(0,i._)("p",lt,(0,l.zw)(a.item.rating.count),1)])])]),(0,i._)("div",dt,[(0,i._)("img",{src:a.item.image,alt:""},null,8,ut)])])}var pt={name:"item-card",props:{item:{Boolean:!0}},data(){return{}},methods:{addToBasket(t){this.$store.commit("pushToBasket",t)}},computed:{ratingStars(){return Math.round(this.item.rating.rate)},titleCard(){}}};const gt=(0,_.Z)(pt,[["render",mt],["__scopeId","data-v-1232c504"]]);var ht=gt;const kt=t=>((0,i.dD)("data-v-41b35031"),t=t(),(0,i.Cn)(),t),vt={class:"menu"},_t=["onClick"],bt=kt((()=>(0,i._)("i",{class:"bi bi-chevron-compact-down"},null,-1))),ft=[bt];function wt(t,e,a,s,n,o){return(0,i.wg)(),(0,i.iD)("aside",vt,[(0,i._)("ul",{class:(0,l.C_)(["menu-list box mr-2 animate__animated animate__backInLeft",{open:n.menuCategory}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.list,(t=>((0,i.wg)(),(0,i.iD)("li",{onClick:e=>o.changeCategory(t),key:t.id,class:(0,l.C_)(["menu-list_item box p-3",{active:o.activeTag.id==t.id}])},(0,l.zw)(t.tag),11,_t)))),128)),(0,i._)("div",{onClick:e[0]||(e[0]=(...t)=>o.openCategoryMenu&&o.openCategoryMenu(...t)),class:"divider"},ft)],2)])}var yt={data(){return{menuCategory:!1}},methods:{changeCategory(t){this.$store.commit("changeActiveTag",t),this.$emit("fetch-new-tag",t.link)},openCategoryMenu(){this.menuCategory=!this.menuCategory}},computed:{activeTag(){return this.$store.state.activeTag},list(){return this.$store.state.menuList}}};const It=(0,_.Z)(yt,[["render",wt],["__scopeId","data-v-41b35031"]]);var Ct=It;const Dt=t=>((0,i.dD)("data-v-254d8f3a"),t=t(),(0,i.Cn)(),t),$t={class:"items-placeholder placeholder m-4"},At=Dt((()=>(0,i._)("i",{class:"bi bi-arrow-clockwise load"},null,-1)));function Ft(t,e){return(0,i.wg)(),(0,i.iD)("div",$t,[(0,i.Uk)(" Loading... "),At])}const Tt={},qt=(0,_.Z)(Tt,[["render",Ft],["__scopeId","data-v-254d8f3a"]]);var Bt=qt;const Mt=t=>((0,i.dD)("data-v-97a4a2a0"),t=t(),(0,i.Cn)(),t),St={class:"items-sort"},Lt={class:"dropdown-trigger"},Pt={class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},jt={key:0},Zt={key:1},zt=Mt((()=>(0,i._)("span",{class:"icon is-small"},[(0,i._)("i",{class:"fas fa-angle-down","aria-hidden":"true"})],-1))),Ot={class:"dropdown-menu",id:"dropdown-menu ",role:"menu"},Wt={class:"dropdown-content"},xt=["onClick"];function Ut(t,e,a,s,n,o){return(0,i.wg)(),(0,i.iD)("div",St,[(0,i._)("div",{onMouseover:e[0]||(e[0]=(...t)=>o.sortMenuOpen&&o.sortMenuOpen(...t)),onMouseleave:e[1]||(e[1]=(...t)=>o.sortMenuClose&&o.sortMenuClose(...t)),class:(0,l.C_)(["dropdown",[n.activeClass]])},[(0,i._)("div",Lt,[(0,i._)("button",Pt,[o.activeSorting.tag?((0,i.wg)(),(0,i.iD)("span",Zt,(0,l.zw)(o.activeSorting.tag),1)):((0,i.wg)(),(0,i.iD)("span",jt,"Default sorting")),zt])]),(0,i._)("div",Ot,[(0,i._)("ul",Wt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.sortList,(t=>((0,i.wg)(),(0,i.iD)("li",{onClick:e=>o.newSort(t),class:(0,l.C_)(["dropdown-item",{activeTag:t.id==o.activeSorting.id}]),key:t.id},(0,l.zw)(t.tag),11,xt)))),128))])])],34)])}var Et={data(){return{activeClass:" "}},methods:{sortMenuOpen(){this.activeClass="is-active"},sortMenuClose(){this.activeClass=" "},newSort(t){this.$store.commit("changeSort",t)}},computed:{sortList(){return this.$store.state.sortItem},activeSorting(){return this.$store.state.activeSort}}};const Qt=(0,_.Z)(Et,[["render",Ut],["__scopeId","data-v-97a4a2a0"]]);var Ht=Qt,Yt={name:"HomeView",components:{ItemCard:ht,MenuComp:Ct,ItemsPlaceholder:Bt,ItemsSort:Ht},data(){return{items:(0,O.qj)([]),howLoad:5}},computed:{itemsFake(){return this.$store.state.itemsFake},howInCategoryAll(){return this.$store.getters.howInCategory},sotring(){return this.$store.state.activeSort}},methods:{async getItems(){this.items=(0,O.IU)(this.items),this.$store.dispatch("getAllItemsFake"),this.$store.commit("howLoading")},async newFetch(t){this.$store.dispatch("getAllItemsFake",t),this.$store.commit("howLoading"),this.$store.dispatch("getAllItemsFakeInCategory",t)},loadMore(){let t=this.$store.state.activeTag.link;this.howLoad=this.howLoad+5,this.$store.dispatch("getAllItemsFake",t),this.$store.commit("howLoading")}},mounted(){this.$store.dispatch("getAllItemsFake"),this.$store.dispatch("getAllItemsFakeInCategory")}};const Kt=(0,_.Z)(Yt,[["render",z],["__scopeId","data-v-1e076c5d"]]);var Vt=Kt,Xt=a(7381),Nt=a(8567),Jt=a(3922);const Rt=[{path:"/",name:"home",component:Vt,AboutView:Xt["default"],BasketView:Nt["default"],ProductPageView:Jt["default"]},{path:"/about",name:"about",component:()=>Promise.resolve().then(a.bind(a,7381))},{path:"/basket",name:"basket",component:()=>Promise.resolve().then(a.bind(a,8567))},{path:"/product/:id",name:"product",component:()=>Promise.resolve().then(a.bind(a,3922))}],Gt=(0,M.p7)({history:(0,M.PO)("/shop/"),routes:Rt});var te=Gt,ee=(a(7658),a(65)),ae=(0,ee.MT)({state:{basketAll:0},getters:{},mutations:{pushToBasket(t,e){t.basketAll.push(e)}},actions:{},modules:{}}),se=(0,ee.MT)({state:{itemsFake:[],howLoad:5,itemsFakeAllInCategory:[],basketAll:[],activeSort:[],sortItem:[{id:"0",tag:"Default sorting",link:""},{id:"1",tag:"Price: lowest first",link:""},{id:"2",tag:"Price: highest first",link:""}],menuList:[{id:"0",tag:"All",link:""},{id:"1",tag:"Men's clothing",link:"/category/men's clothing"},{id:"2",tag:"Women's clothing",link:"/category/women's clothing"},{id:"3",tag:"Jewelery",link:"/category/jewelery"},{id:"4",tag:"Electronics",link:"/category/electronics"}],activeTag:0},getters:{howInCategory(t){return t.itemsFakeAllInCategory.length},priceInCart(t){let e=t.basketAll.reduce(((t,e)=>t+e.price*e.quantity),0);return e=Math.round(10*e)/10,e},quantityInCart(t){let e=t.basketAll.reduce(((t,e)=>t+e.quantity),0);return e}},mutations:{getAllItemsFake(t,e){t.itemsFake=e},howLoading(t){t.howLoad=t.howLoad+5},getAllItemsFakeInCategory(t,e){t.itemsFakeAllInCategory=e},changeActiveTag(t,e){t.activeTag=e},pushToBasket(t,e){t.basketAll.find((t=>t.id==e.id))?t.basketAll.forEach((t=>{t.id==e.id&&t.quantity++})):(t.basketAll.push(e),t.basketAll.map((t=>t.quantity=1)))},deleteFromBasket(t,e){t.basketAll=t.basketAll.filter((t=>t.id!=e.id))},addMoreToQuantity(t,e){t.basketAll.forEach((t=>{t.id==e.id&&t.quantity++}))},removeToQuantity(t,e){t.basketAll.forEach((t=>{t.id==e.id&&t.quantity--}))},changeSort(t,e){t.activeSort=e,console.log(e)}},actions:{async getAllItemsFake({commit:t,state:e},a){let s=[];a&&(await fetch(`https://fakestoreapi.com/products${a}?limit=${e.howLoad}`).then((t=>t.json())).then((t=>s=t)),console.log(s),t("getAllItemsFake",s)),a||(await fetch(`https://fakestoreapi.com/products?limit=${e.howLoad}`).then((t=>t.json())).then((t=>s=t)),console.log(s),t("getAllItemsFake",s))},async getAllItemsFakeInCategory({commit:t,state:e},a){let s=[];a&&(await fetch(`https://fakestoreapi.com/products${a}`).then((t=>t.json())).then((t=>s=t)),console.log(s),t("getAllItemsFakeInCategory",s)),a||(await fetch("https://fakestoreapi.com/products").then((t=>t.json())).then((t=>s=t)),console.log(s),t("getAllItemsFakeInCategory",s))}},modules:{basket:ae}});(0,s.ri)(B).use(se).use(te).mount("#app")},5774:function(t,e,a){a.d(e,{Z:function(){return l}});var s=a(3396);const i={class:"btn_wrapper"};function n(t,e){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("button",{onClick:e[0]||(e[0]=t=>this.$router.go(-1)),class:"button is-warning is-light"},"Back")])}var o=a(89);const r={},c=(0,o.Z)(r,[["render",n],["__scopeId","data-v-464264d7"]]);var l=c},7381:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=a(3396);const i={class:"about"},n=(0,s._)("h1",null,"This is an about page",-1),o=[n];function r(t,e){return(0,s.wg)(),(0,s.iD)("div",i,o)}var c=a(89);const l={},d=(0,c.Z)(l,[["render",r]]);var u=d},8567:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var s=a(3396);const i={key:0,class:"empty title is-4 animate__animated animate__slideInDown"},n={class:"basket"},o={class:"basket-box_wrapper"},r={key:0,class:"progress is-primary mt-4",value:"15",max:"100"};function c(t,e,a,c,l,d){const u=(0,s.up)("button-back"),m=(0,s.up)("basket-item"),p=((0,s.up)("address-comp"),(0,s.up)("basket-continue"));return(0,s.wg)(),(0,s.iD)(s.HY,null,[d.basketEmpty?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("h4",i,"Cart is empty")),(0,s._)("div",n,[(0,s.Wm)(u,{class:"basket-back animate__animated animate__backInLeft mb-4"}),(0,s._)("div",o,[(0,s.Wm)(m),(0,s.kq)("",!0)]),d.basketEmpty?((0,s.wg)(),(0,s.j4)(p,{key:0},{default:(0,s.w5)((()=>[d.basketEmpty?((0,s.wg)(),(0,s.iD)("progress",r,"15%")):(0,s.kq)("",!0)])),_:1})):(0,s.kq)("",!0)])],64)}var l=a(7139);const d={class:"cart-wrapper"},u={class:"cart-img"},m=["src"],p={class:"cart-descr"},g={class:"mt-2 price"},h=["onClick"],k={class:"cart-quantity"},v=["onClick","disabled"],_=["onClick","disabled"];function b(t,e,a,i,n,o){const r=(0,s.up)("router-link");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.cartUser,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"box animate__animated animate__flipInX",key:t.id},[(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("img",{src:t.image,alt:""},null,8,m)]),(0,s._)("div",p,[(0,s.Wm)(r,{class:"has-text-dark",to:`/product/${t.id}`},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,l.zw)(t.title),1)])),_:2},1032,["to"]),(0,s._)("p",g,[(0,s._)("strong",null,"$"+(0,l.zw)(t.price),1)])]),(0,s._)("button",{onClick:e=>o.deleteItem(t),class:"button is-warning"}," Delete",8,h),(0,s._)("div",k,[(0,s._)("button",{onClick:e=>o.removeQuantity(t),disabled:t.quantity<=1,class:"button is-small is-responsive"}," - ",8,v),(0,s._)("span",null,(0,l.zw)(t.quantity),1),(0,s._)("button",{onClick:e=>o.addQuantity(t),disabled:t.quantity>=9,class:"button is-small is-responsive"}," + ",8,_)])])])))),128)}var f={data(){return{}},methods:{deleteItem(t){this.$store.commit("deleteFromBasket",t)},addQuantity(t){this.$store.commit("addMoreToQuantity",t)},removeQuantity(t){this.$store.commit("removeToQuantity",t)}},computed:{cartUser(){return this.$store.state.basketAll}}},w=a(89);const y=(0,w.Z)(f,[["render",b],["__scopeId","data-v-8dd9b1ee"]]);var I=y;const C=t=>((0,s.dD)("data-v-2b8f8754"),t=t(),(0,s.Cn)(),t),D={class:"basket-continue animate__animated animate__backInRight"},$=C((()=>(0,s._)("button",{class:"button is-success is-light"},"Сontinue shopping",-1)));function A(t,e,a,i,n,o){return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("p",null,"You have "+(0,l.zw)(o.howProducts)+" purchases",1),(0,s._)("p",null,[(0,s.Uk)("To be paid: "),(0,s._)("strong",null,"$"+(0,l.zw)(o.sumInBasket),1)]),$,(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var F={data(){return{}},computed:{howProducts(){return this.$store.getters.quantityInCart},sumInBasket(){return this.$store.getters.priceInCart}}};const T=(0,w.Z)(F,[["render",A],["__scopeId","data-v-2b8f8754"]]);var q=T,B=a(5774);function M(t,e){return(0,s.wg)(),(0,s.iD)("div",null," gfdgfd ")}const S={},L=(0,w.Z)(S,[["render",M]]);var P=L,j={components:{BasketItem:I,BasketContinue:q,ButtonBack:B.Z,AddressComp:P},data(){return{}},computed:{basketEmpty(){return this.$store.state.basketAll.length>0}}};const Z=(0,w.Z)(j,[["render",c],["__scopeId","data-v-6947a022"]]);var z=Z},3922:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var s=a(3396);const i={class:"products"};function n(t,e,a,n,o,r){const c=(0,s.up)("product-item");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c)])}var o=a(7139);const r=t=>((0,s.dD)("data-v-49004f6c"),t=t(),(0,s.Cn)(),t),c={class:"product-item animate__animated animate__slideInUp"},l={class:"box product card"},d=["src"],u={class:"product-wrapper"},m={class:"product-title title is-4"},p=r((()=>(0,s._)("div",null,null,-1))),g={class:"product-descr subtitle is-5"},h={class:"product-price"},k={class:"has-text-primary-dark"},v=["disabled"];function _(t,e,a,i,n,r){const _=(0,s.up)("button-back");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",l,[(0,s._)("img",{class:"product-image card-image",src:n.card.image,alt:""},null,8,d),(0,s._)("div",u,[(0,s._)("h4",m,(0,o.zw)(n.card.title),1),p,(0,s._)("div",g,[(0,s._)("p",null,(0,o.zw)(n.card.description),1),(0,s._)("div",h,[(0,s._)("i",{class:(0,o.C_)([{activeBag:n.card.quantity},"bi bi-bag bag animate_animated animate__fadeInDown"])},[(0,s._)("span",null,(0,o.zw)(n.card.quantity),1)],2),(0,s._)("strong",k,"$"+(0,o.zw)(n.card.price),1)])]),(0,s._)("button",{onClick:e[0]||(e[0]=t=>r.addToCart(n.card)),disabled:n.card.quantity>=9,class:"button is-danger"},"Add to cart",8,v)])]),(0,s.Wm)(_,{class:"animate__animated animate__slideInLeft mt-4"})])}var b=a(5774),f={name:"product-item",components:{ButtonBack:b.Z},data(){return{card:[]}},methods:{addToCart(t){this.$store.commit("pushToBasket",t)}},mounted(){fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`).then((t=>t.json())).then((t=>this.card=t))}},w=a(89);const y=(0,w.Z)(f,[["render",_],["__scopeId","data-v-49004f6c"]]);var I=y,C={components:{ProductItem:I},name:"product-page",data(){return{}}};const D=(0,w.Z)(C,[["render",n],["__scopeId","data-v-f5e2e776"]]);var $=D}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/shop/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],r=s[1],c=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a)}for(e&&e(s);l<o.length;l++)n=o[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkfake_shop"]=self["webpackChunkfake_shop"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3834)}));s=a.O(s)})();
//# sourceMappingURL=app.4bb58dee.js.map