(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2157:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(37),r=a(3),c=a.n(r),m=a(110),o=a(1310),i=a(9),d=a(1476),u=a.n(d),p=a(74),b=a(537),g=a(4),E=a(32),h=a(1268),y=a(1323),f=a(2161),v=a(104),N=a(338),S=a(109),x=a(2153),k=a(2160),C=a(1315),j=a(1319),O=a(59),w=a(194);var _=Object(i.a)({},{withTheme:!0})(Object(s.b)(e=>({getNotification:c.a.func.isRequired,deleteNotification:c.a.func.isRequired,deleteAllNotification:c.a.func.isRequired,notification:e.notification,settings:e.layout.settings}),{getNotification:w.g,deleteNotification:w.f,deleteAllNotification:w.e})(e=>{const t=e.container,a=e.theme,l=e.settings,s=e.notification,r=void 0===s?[]:s,c=e.getNotification,m=e.deleteAllNotification,i=e.deleteNotification,d=n.a.useState(!1),u=Object(S.a)(d,2),b=u[0],g=u[1];function E(){b||c(),g(!b)}const f=a.palette;return n.a.createElement(o.a,{theme:l.themes[l.activeTheme]},n.a.createElement(h.a,{onClick:E,style:{color:"light"===f.type?f.text.secondary:f.text.primary}},n.a.createElement(x.a,{color:"secondary",badgeContent:5},n.a.createElement(y.a,null,"notifications"))),n.a.createElement(k.a,{width:"100px",container:t,variant:"temporary",anchor:"right",open:b,onClose:E,ModalProps:{keepMounted:!0}},n.a.createElement("div",{className:"notification"},n.a.createElement("div",{className:"notification__topbar flex items-center p-4 mb-4"},n.a.createElement(y.a,{color:"primary"},"notifications"),n.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Notifications")),r.map(e=>n.a.createElement("div",{key:e.id,className:"notification__card position-relative"},n.a.createElement(h.a,{size:"small",className:"delete-button bg-light-gray mr-6",onClick:()=>i(e.id)},n.a.createElement(y.a,{className:"text-muted",fontSize:"small"},"clear")),n.a.createElement(O.a,{to:"/".concat(e.path),onClick:E},n.a.createElement(C.a,{className:"mx-4 mb-6",elevation:3},n.a.createElement("div",{className:"card__topbar flex items-center justify-between p-2 bg-light-gray"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement("div",{className:"card__topbar__button"},n.a.createElement(y.a,{className:"card__topbar__icon",fontSize:"small",color:e.icon.color},e.icon.name)),n.a.createElement("span",{className:"ml-4 font-medium text-muted"},e.heading)),n.a.createElement("small",{className:"card__topbar__time text-muted"},Object(p.b)(new Date(e.timestamp))," ago")),n.a.createElement("div",{className:"px-4 pt-2 pb-4"},n.a.createElement("p",{className:"m-0"},e.title),n.a.createElement("small",{className:"text-muted"},e.subtitle)))))),n.a.createElement("div",{className:"text-center"},n.a.createElement(j.a,{onClick:m},"Clear Notifications")))))})),L=a(107);let D=!1;var T=Object(i.a)({},{withTheme:!0})(Object(s.b)(e=>({settings:e.layout.settings,getCartList:c.a.func.isRequired,deleteProductFromCart:c.a.func.isRequired,updateCartAmount:c.a.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}),{getCartList:L.j,deleteProductFromCart:L.i,updateCartAmount:L.k})(function(e){const t=e.container,a=e.theme,l=e.settings,s=e.cartList,r=void 0===s?[]:s,c=e.getCartList,m=e.deleteProductFromCart,i=e.updateCartAmount,d=e.user,u=n.a.useState(!1),p=Object(S.a)(u,2),b=p[0],g=p[1];function E(){g(!b)}D||(c(d.userId),D=!0);const f=a.palette;return n.a.createElement(o.a,{theme:l.themes[l.activeTheme]},n.a.createElement(h.a,{onClick:E,style:{color:"light"===f.type?f.text.secondary:f.text.primary}},n.a.createElement(x.a,{color:"secondary",badgeContent:r.length},n.a.createElement(y.a,null,"shopping_cart"))),n.a.createElement(k.a,{container:t,variant:"temporary",anchor:"right",open:b,onClose:E,ModalProps:{keepMounted:!0}},n.a.createElement("div",{className:"mini-cart"},n.a.createElement("div",{className:"cart__topbar flex items-center p-1 mb-2 pl-4"},n.a.createElement(y.a,{color:"primary"},"shopping_cart"),n.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Cart")),r.map(e=>n.a.createElement("div",{key:e.id,className:"mini-cart__item flex items-center justify-between py-2 px-2"},n.a.createElement("div",{className:"flex flex-column mr-2"},n.a.createElement(h.a,{size:"small",onClick:()=>i(d.userId,e.id,e.amount+1)},n.a.createElement(y.a,{className:"cursor-pointer"},"keyboard_arrow_up")),n.a.createElement(h.a,{disabled:!(e.amount-1),size:"small",onClick:()=>i(d.userId,e.id,e.amount-1)},n.a.createElement(y.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),n.a.createElement("div",{className:"mr-2"},n.a.createElement("img",{src:e.imgUrl,alt:e.title})),n.a.createElement("div",{className:"mr-2 text-center"},n.a.createElement("h6",{className:"m-0 mb-1"},e.title),n.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),n.a.createElement(h.a,{size:"small",onClick:()=>m(d.userId,e.id)},n.a.createElement(y.a,{fontSize:"small"},"clear")))))))}));var z=Object(i.a)(e=>({topbar:{"& .topbar-hold":{backgroundColor:e.palette.primary.main,height:"80px","&.fixed":{boxShadow:e.shadows[8],height:"64px"}}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}),{withTheme:!0})(Object(E.g)(Object(s.b)(e=>({setLayoutSettings:c.a.func.isRequired,logoutUser:c.a.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:m.d,logoutUser:v.d})(class extends l.Component{constructor(...e){super(...e),this.state={},this.updateSidebarMode=(e=>{let t=this.props,a=t.settings;(0,t.setLayoutSettings)(Object(g.a)(Object(g.a)({},a),{},{layout1Settings:Object(g.a)(Object(g.a)({},a.layout1Settings),{},{leftSidebar:Object(g.a)(Object(g.a)({},a.layout1Settings.leftSidebar),e)})}))}),this.handleSidebarToggle=(()=>{let e,t=this.props.settings.layout1Settings;e=Object(p.c)()?"close"===t.leftSidebar.mode?"mobile":"close":"full"===t.leftSidebar.mode?"close":"full",this.updateSidebarMode({mode:e})}),this.handleSignOut=(()=>{this.props.logoutUser()})}render(){let e=this.props,t=e.classes,a=e.fixed;return n.a.createElement("div",{className:"topbar ".concat(t.topbar)},n.a.createElement("div",{className:Object(p.a)({"topbar-hold":!0,fixed:a})},n.a.createElement("div",{className:"flex justify-between items-center h-full"},n.a.createElement("div",{className:"flex"},n.a.createElement(h.a,{onClick:this.handleSidebarToggle,className:"hide-on-pc"},n.a.createElement(y.a,null,"menu")),n.a.createElement("div",{className:"hide-on-mobile"},n.a.createElement(h.a,null,n.a.createElement(y.a,null,"mail_outline")),n.a.createElement(h.a,null,n.a.createElement(y.a,null,"web_asset")),n.a.createElement(h.a,null,n.a.createElement(y.a,null,"star_outline")))),n.a.createElement("div",{className:"flex items-center"},n.a.createElement(N.e,null),n.a.createElement(_,null),n.a.createElement(T,null),n.a.createElement(N.d,{menuButton:n.a.createElement("img",{className:"mx-2 align-middle circular-image-small cursor-pointer",src:"/assets/images/face-6.jpg",alt:"user"})},n.a.createElement(f.a,null,n.a.createElement(O.a,{className:t.menuItem,to:"/"},n.a.createElement(y.a,null," home "),n.a.createElement("span",{className:"pl-4"}," Home "))),n.a.createElement(f.a,null,n.a.createElement(y.a,null," person "),n.a.createElement("span",{className:"pl-4"}," Profile ")),n.a.createElement(f.a,{className:t.menuItem},n.a.createElement(y.a,null," settings "),n.a.createElement("span",{className:"pl-4"}," Settings ")),n.a.createElement(f.a,{onClick:this.handleSignOut,className:t.menuItem},n.a.createElement(y.a,null," power_settings_new "),n.a.createElement("span",{className:"pl-4"}," Logout ")))))))}}))),R=a(2154),q=a(2155),I=a(429);var F=Object(E.g)(Object(s.b)(e=>({setLayoutSettings:c.a.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:m.d})(e=>{return n.a.createElement(l.Fragment,null,n.a.createElement(u.a,{options:{suppressScrollX:!0},className:"scrollable position-relative"},e.children,n.a.createElement(N.g,{navigation:I.a})),n.a.createElement("div",{onClick:()=>(t=>{let a=e.settings,l=e.setLayoutSettings,n=a.activeLayout+"Settings",s=a[n];l(Object(g.a)(Object(g.a)({},a),{},{[n]:Object(g.a)(Object(g.a)({},s),{},{leftSidebar:Object(g.a)(Object(g.a)({},s.leftSidebar),t)})}))})({mode:"close"}),className:"sidenav__overlay"}))}));var U=({children:e})=>n.a.createElement("div",{className:"flex items-center justify-between brand-area"},n.a.createElement("div",{className:"flex items-center brand"},n.a.createElement("img",{src:"/assets/images/logo.png",alt:"company-logo"}),n.a.createElement("span",{className:"brand__text"},"Utol")),e);var P=Object(i.a)(e=>({root:{backgroundColor:e.palette.background.default,color:e.palette.text.primary,"& .sidenav":{"& .sidenav__hold":{opacity:"1 !important","&::after":{background:e.palette.primary.main,opacity:.96},"& .nav-item:not(.badge)":{color:e.palette.text.primary},"& .nav-item":{"&.active, &.active:hover":{background:e.palette.secondary.main},"& .icon-text::after":{background:e.palette.text.primary}}}}}}),{withTheme:!0})(({children:e,classes:t})=>n.a.createElement("div",{className:t.root},e));var M=({theme:e,settings:t,children:a})=>n.a.createElement(o.a,{theme:e},n.a.createElement(P,{theme:e,settings:t},a)),A=a(57);const B=Object(i.a)(e=>({root:{backgroundColor:"transparent",padding:"5px"}}))(h.a),H=Object(i.a)(()=>({root:{fontSize:"1rem"}}))(y.a);var J=Object(i.a)(e=>({}),{withTheme:!0})(Object(E.g)(Object(s.b)(e=>({setDefaultSettings:c.a.func.isRequired,setLayoutSettings:c.a.func.isRequired,logoutUser:c.a.func.isRequired,user:e.user,settings:e.layout.settings}),{setLayoutSettings:m.d,setDefaultSettings:m.c,logoutUser:v.d})(class extends l.Component{constructor(...e){super(...e),this.state={hidden:!0},this.updateSidebarMode=(e=>{let t=this.props,a=t.settings,l=t.setLayoutSettings,n=t.setDefaultSettings;const s=Object(A.merge)({},a,{layout1Settings:{leftSidebar:Object(g.a)({},e)}});l(s),n(s)}),this.handleSidenavToggle=(()=>{let e=this.props.settings.layout1Settings.leftSidebar.mode;console.log(e),this.updateSidebarMode({mode:"compact"===e?"full":"compact"})}),this.handleSignOut=(()=>{this.props.logoutUser()}),this.renderLogoSwitch=(()=>n.a.createElement(U,null,n.a.createElement(R.a,{className:"sidenav__toggle show-on-pc",onChange:this.handleSidenavToggle,checked:!("full"===this.props.settings.layout1Settings.leftSidebar.mode),color:"secondary"}))),this.renderUser=(()=>{let e=this.props.user;return n.a.createElement("div",{className:"sidenav__user"},n.a.createElement("div",{className:"ml-4"},n.a.createElement("span",{className:"username"},e.nmusuario),n.a.createElement("div",{className:"user__menu"},n.a.createElement(N.d,{menuButton:n.a.createElement(q.a,{title:"Settings"},n.a.createElement(B,{"aria-label":"Delete",className:"",size:"small"},n.a.createElement(H,null," settings ")))},n.a.createElement(f.a,{className:"flex items-center"},n.a.createElement(y.a,null," home "),n.a.createElement("span",{className:"pl-4"}," Home ")),n.a.createElement(f.a,{className:"flex items-center"},n.a.createElement(y.a,null," settings "),n.a.createElement("span",{className:"pl-4"}," Account Setting "))),n.a.createElement(q.a,{title:"Profile"},n.a.createElement(B,{"aria-label":"Delete",className:"",size:"small"},n.a.createElement(H,null,"person"))),n.a.createElement(q.a,{title:"Sign out"},n.a.createElement(B,{"aria-label":"Delete",className:"",size:"small",onClick:this.handleSignOut},n.a.createElement(H,null,"exit_to_app"))))))})}componentDidMount(){this.unlistenRouteChange=this.props.history.listen((e,t)=>{Object(p.c)()&&this.updateSidebarMode({mode:"close"})}),setTimeout(()=>{this.setState({hidden:!1})},400)}componentWillUnmount(){this.unlistenRouteChange()}render(){let e=this.props,t=e.theme,a=e.settings;const s=a.themes[a.layout1Settings.leftSidebar.theme]||t;return n.a.createElement(M,{theme:s,settings:a},n.a.createElement("div",{className:"sidenav"},n.a.createElement("div",{className:"sidenav__hold",style:{backgroundImage:"url(".concat(a.layout1Settings.leftSidebar.bgImgURL,")")}},!this.state.hidden&&n.a.createElement(l.Fragment,null,this.renderLogoSwitch(),n.a.createElement(F,null,this.renderUser())))))}})));const W=({theme:e,settings:t})=>{t.themes[t.footer.theme];return n.a.createElement(n.a.Fragment,null)};W.propTypes={settings:c.a.object.isRequired};var X=Object(i.a)({},{withTheme:!0})(Object(s.b)(e=>({settings:e.layout.settings}),{})(W)),$=a(1322),G=a(1422);var K=Object(i.a)(e=>({toggle:{position:"fixed",right:"-30px",bottom:"20px",zIndex:9999,transition:"all 0.15s ease","&.open":{right:"10px"}}}),{withTheme:!0})(Object(s.b)(e=>({settings:e.layout.settings,setLayoutSettings:c.a.func.isRequired}),{setLayoutSettings:m.d})(({classes:e,settings:t,setLayoutSettings:a})=>{let s=Object($.a)("(max-width:767px)");const r=()=>{a(Object(A.merge)({},t,{secondarySidebar:{open:!t.secondarySidebar.open}}))};return Object(l.useEffect)(()=>{a(Object(A.merge)({},t,{secondarySidebar:{open:!s}}))},[s,a]),n.a.createElement("div",{className:e.toggle+" "+Object(p.a)({open:t.secondarySidebar.open})},t.secondarySidebar.open&&n.a.createElement(h.a,{onClick:r,size:"small","aria-label":"toggle"},n.a.createElement(y.a,null,"arrow_right")),!t.secondarySidebar.open&&n.a.createElement(G.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:"pr-9",onClick:r},n.a.createElement(y.a,null,"arrow_left")))})),Q=a(336),V=a(1312),Y=a(1313),Z=a(1266),ee=a(1318),te=a(1317),ae=a(1328),le=a(1316),ne=a(345);var se=Object(i.a)(e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}}))(x.a);const re=["purple1","purple2","blue","purpleDark1","purpleDark2","blueDark"],ce=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],me=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],oe=["/assets/images/sidebar/sidebar-bg-dark.jpg","/assets/images/sidebar/sidebar-bg-light.jpg"];var ie=({settings:e,handleChange:t,handleControlChange:a})=>n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Sidebar theme"),n.a.createElement("div",{className:"colors"},ce.map((a,l)=>n.a.createElement(q.a,{key:l,title:a,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>t("layout1Settings.leftSidebar.theme",a),style:{backgroundColor:ne.a[a].palette.primary.main}},e.layout1Settings.leftSidebar.theme===a&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:e.themes[a].palette.type})))))),n.a.createElement("div",{className:"mb-8 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),n.a.createElement("div",{className:"colors"},me.map((a,l)=>n.a.createElement(q.a,{key:l,title:a,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>t("layout1Settings.topbar.theme",a),style:{backgroundColor:ne.a[a].palette.primary.main}},e.layout1Settings.topbar.theme===a&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:e.themes[a].palette.type})))))),n.a.createElement("div",{className:"mx-3 mb-6"},n.a.createElement(V.a,{component:"fieldset"},n.a.createElement(Y.a,{component:"legend"},"Sidebar mode"),n.a.createElement(te.a,{"aria-label":"Sidebar",name:"leftSidebar",value:e.layout1Settings.leftSidebar.mode,onChange:a("layout1Settings.leftSidebar.mode")},n.a.createElement(ee.a,{value:"full",control:n.a.createElement(ae.a,null),label:"Full"}),n.a.createElement(ee.a,{value:"close",control:n.a.createElement(ae.a,null),label:"Close"}),n.a.createElement(ee.a,{value:"compact",control:n.a.createElement(ae.a,null),label:"Compact"})))),n.a.createElement("div",{className:"mb-8 mx-3"},n.a.createElement("div",{className:"text-muted mb-8"},"Sidebar background image"),n.a.createElement("div",{className:"layout-boxes sidebar-bg"},n.a.createElement(le.a,{container:!0,spacing:3},oe.map((a,l)=>n.a.createElement(le.a,{item:!0,lg:4,key:l},n.a.createElement(se,{color:"primary",className:"layout-box mr-4",badgeContent:n.a.createElement(y.a,null,"done"),invisible:e.layout1Settings.leftSidebar.bgImgURL!==a},n.a.createElement(Q.a,{onClick:()=>t("layout1Settings.leftSidebar.bgImgURL",a),className:"h-160"},n.a.createElement("img",{src:a,alt:""})))))))),n.a.createElement("div",{className:"mx-3 mb-6"},n.a.createElement(V.a,{component:"fieldset"},n.a.createElement(Y.a,{component:"legend"},"Topbar"),n.a.createElement(Z.a,null,n.a.createElement(ee.a,{control:n.a.createElement(R.a,{checked:Object(A.get)(e.layout1Settings.topbar,"show"),onChange:a("layout1Settings.topbar.show")}),label:"Show"}),n.a.createElement(ee.a,{control:n.a.createElement(R.a,{checked:Object(A.get)(e.layout1Settings.topbar,"fixed"),onChange:a("layout1Settings.topbar.fixed")}),label:"Fixed"})))));var de=({settings:e,handleChange:t,handleControlChange:a})=>n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),n.a.createElement("div",{className:"colors"},Object.keys(ne.a).map((a,l)=>n.a.createElement(q.a,{key:l,title:a,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>t("layout2Settings.topbar.theme",a),style:{backgroundColor:ne.a[a].palette.primary.main}},e.layout2Settings.topbar.theme===a&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:e.themes[a].palette.type})))))),n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Navbar theme"),n.a.createElement("div",{className:"colors"},Object.keys(ne.a).map((a,l)=>n.a.createElement(q.a,{key:l,title:a,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>t("layout2Settings.navbar.theme",a),style:{backgroundColor:ne.a[a].palette.primary.main}},e.layout2Settings.navbar.theme===a&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:e.themes[a].palette.type})))))),n.a.createElement("div",{className:"mx-3 mb-6"},n.a.createElement(V.a,{component:"fieldset"},n.a.createElement(Y.a,{component:"legend"},"Layout mode"),n.a.createElement(te.a,{"aria-label":"layout-mode",name:"layoutMode",value:e.layout2Settings.mode,onChange:a("layout2Settings.mode")},n.a.createElement(ee.a,{value:"full",control:n.a.createElement(ae.a,null),label:"Full"}),n.a.createElement(ee.a,{value:"contained",control:n.a.createElement(ae.a,null),label:"Contained"}),n.a.createElement(ee.a,{value:"boxed",control:n.a.createElement(ae.a,null),label:"Boxed"})))));var ue=Object(i.a)(e=>({root:{}}),{withTheme:!0})(Object(s.b)(e=>({settings:e.layout.settings,setLayoutSettings:c.a.func.isRequired,setDefaultSettings:c.a.func.isRequired}),{setLayoutSettings:m.d,setDefaultSettings:m.c})(e=>{const t=Object(l.useState)(!1),a=Object(S.a)(t,2),s=a[0],r=a[1];let c=e.settings,m=e.classes,i=e.setLayoutSettings,d=e.setDefaultSettings;const p=e=>{let t=Object(A.merge)({},c,e);i(t),d(t)},b=(t,a)=>{let l=e.settings,n=Object(A.set)(l,t,a);p(n)},E=e=>t=>{let a="checkbox"===t.target.type?t.target.checked:t.target.value;b(e,a)},f=()=>{r(!s)};let v=Object(g.a)({},c.themes[c.activeTheme]);return n.a.createElement(l.Fragment,null,n.a.createElement(q.a,{title:"Theme Settings",placement:"left"},n.a.createElement(h.a,{size:"small","aria-label":"delete",className:"my-3",onClick:f},n.a.createElement(y.a,{className:"spin"},"settings"))),s&&n.a.createElement(o.a,{theme:v},n.a.createElement("div",{className:"matx-customizer pb-8 ".concat(m.root),style:{backgroundColor:v.palette.background.default}},n.a.createElement("div",{className:"flex felx-row items-center p-4 mb-4 min-h-64 elevation-z6"},n.a.createElement(y.a,{color:"primary"},"settings"),n.a.createElement("h5",{className:"mb-0 ml-2"},"Theme Settings"),n.a.createElement(h.a,{onClick:f,className:"customizer-close"},n.a.createElement(y.a,null,"close"))),n.a.createElement(u.a,{options:{suppressScrollX:!0},className:"px-4"},n.a.createElement("div",{className:"mt-2 mb-8 mx-3"},n.a.createElement("div",{className:"text-muted"},"Layouts"),n.a.createElement("div",{className:"layout-boxes"},[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purple1",layout1Settings:{leftSidebar:{theme:"white",bgOpacity:.98},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout2-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purple1",layout1Settings:{leftSidebar:{theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!1}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!1}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}].map(e=>n.a.createElement(se,{color:"secondary",className:"layout-box",badgeContent:"Pro",invisible:!e.isPro,key:e.name},n.a.createElement(Q.a,{onClick:()=>p(e.options),elevation:4},n.a.createElement("span",{className:"layout-name"},n.a.createElement(j.a,{variant:"contained",color:"secondary"},e.name)),n.a.createElement("img",{src:e.thumbnail,alt:e.name})))))),n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Main theme"),n.a.createElement("div",{className:"colors"},re.map((e,t)=>n.a.createElement(q.a,{key:t,title:e,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>p({activeTheme:e}),style:{backgroundColor:ne.a[e].palette.primary.main}},c.activeTheme===e&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:c.themes[e].palette.type})))))),"layout1"===c.activeLayout&&n.a.createElement(ie,{settings:c,handleChange:b,handleControlChange:E}),"layout2"===c.activeLayout&&n.a.createElement(de,{settings:c,handleChange:b,handleControlChange:E}),n.a.createElement("div",{className:"mx-3 mb-6"},n.a.createElement(V.a,{component:"fieldset"},n.a.createElement(Y.a,{component:"legend"},"Footer"),n.a.createElement(Z.a,null,n.a.createElement(ee.a,{control:n.a.createElement(R.a,{checked:Object(A.get)(c.footer,"show"),onChange:E("footer.show")}),label:"Show"}),n.a.createElement(ee.a,{control:n.a.createElement(R.a,{checked:Object(A.get)(c.layout1Settings.footer,"fixed"),onChange:E("footer.fixed")}),label:"Fixed"})))),n.a.createElement("div",{className:"mx-3 mb-6"},n.a.createElement(V.a,{component:"fieldset"},n.a.createElement(Y.a,{component:"legend"},"Secondary sidebar"),n.a.createElement(Z.a,null,n.a.createElement(ee.a,{control:n.a.createElement(R.a,{checked:Object(A.get)(c.secondarySidebar,"show"),onChange:E("secondarySidebar.show")}),label:"Show"})))),n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Secondary sidebar theme"),n.a.createElement("div",{className:"colors"},me.map((e,t)=>n.a.createElement(q.a,{key:t,title:e,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>b("secondarySidebar.theme",e),style:{backgroundColor:ne.a[e].palette.primary.main}},c.secondarySidebar.theme===e&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:c.themes[e].palette.type})))))),n.a.createElement("div",{className:"mb-4 mx-3"},n.a.createElement("div",{className:"text-muted mb-4"},"Footer theme"),n.a.createElement("div",{className:"colors"},me.map((e,t)=>n.a.createElement(q.a,{key:t,title:e,placement:"top"},n.a.createElement("div",{className:"color",onClick:()=>b("footer.theme",e),style:{backgroundColor:ne.a[e].palette.primary.main}},c.footer.theme===e&&n.a.createElement(y.a,null,"done"),n.a.createElement("div",{className:c.themes[e].palette.type}))))))))))}));var pe=Object(i.a)(e=>({root:{position:"fixed",height:"100vh",width:"50px",right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:e.shadows[8],backgroundColor:e.palette.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:"50px"},".matx-customizer":{right:"50px"}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:"calc(100% - ".concat("50px",")")}}}}),{withTheme:!0})(Object(E.g)(Object(s.b)(e=>({settings:e.layout.settings}),{})(class extends l.Component{render(){let e=this.props.classes;return n.a.createElement("div",{className:e.root+" "+Object(p.a)({"secondary-sidebar":!0})},n.a.createElement("span",{className:"m-auto"}),n.a.createElement(ue,null),n.a.createElement(T,null),n.a.createElement(O.a,{to:"/chat"},n.a.createElement(h.a,{size:"small","aria-label":"delete",className:"my-3"},n.a.createElement(y.a,null,"comments"))),n.a.createElement("span",{className:"m-auto"}))}})));var be=({theme:e,classes:t,children:a,open:l})=>n.a.createElement(o.a,{theme:e},a);var ge=Object(s.b)(e=>({settings:e.layout.settings}),{})(({settings:e})=>{const t=e.themes[e.secondarySidebar.theme];return n.a.createElement(be,{theme:t},e.secondarySidebar.open&&n.a.createElement(pe,null),n.a.createElement(K,null))}),Ee=a(166);t.default=Object(i.a)(e=>({layout:{backgroundColor:e.palette.background.default}}),{withTheme:!0})(Object(s.b)(e=>({setLayoutSettings:c.a.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:m.d})(e=>{const t=Object(l.useContext)(Ee.a).routes;let a=e.settings,s=e.classes,r=e.theme,c=a.layout1Settings;const m=a.themes[c.topbar.theme];let i={[s.layout]:!0,["".concat(a.activeLayout," sidenav-").concat(c.leftSidebar.mode," theme-").concat(r.palette.type," flex")]:!0,"topbar-fixed":c.topbar.fixed};return n.a.createElement("div",{className:Object(p.a)(i)},c.leftSidebar.show&&n.a.createElement(J,null),n.a.createElement("div",{className:"content-wrap position-relative"},c.topbar.show&&c.topbar.fixed&&n.a.createElement(o.a,{theme:m},n.a.createElement(z,{fixed:!0,className:"elevation-z8"})),a.perfectScrollbar&&n.a.createElement(u.a,{className:"scrollable-content"},c.topbar.show&&!c.topbar.fixed&&n.a.createElement(o.a,{theme:m},n.a.createElement(z,null)),n.a.createElement("div",{className:"content"},n.a.createElement(N.f,null,Object(b.b)(t))),n.a.createElement("div",{className:"my-auto"}),a.footer.show&&!a.footer.fixed&&n.a.createElement(X,null)),!a.perfectScrollbar&&n.a.createElement("div",{className:"scrollable-content"},c.topbar.show&&!c.topbar.fixed&&n.a.createElement(z,null),n.a.createElement("div",{className:"content"},n.a.createElement(N.f,null,Object(b.b)(t))),n.a.createElement("div",{className:"my-auto"}),a.footer.show&&!a.footer.fixed&&n.a.createElement(X,null)),a.footer.show&&a.footer.fixed&&n.a.createElement(X,null)),a.secondarySidebar.show&&n.a.createElement(ge,null))}))}}]);
//# sourceMappingURL=19.7b2da6c8.chunk.js.map