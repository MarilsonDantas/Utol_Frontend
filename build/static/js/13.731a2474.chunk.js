(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1336:function(e,a,t){"use strict";var n=t(0),c=n.createContext();a.a=c},1346:function(e,a,t){"use strict";var n=t(0),c=n.createContext();a.a=c},1355:function(e,a,t){"use strict";var n=t(6),c=t(1),l=t(0),r=(t(3),t(7)),i=t(9),o=t(1346),s=l.forwardRef(function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,m=void 0===p?"default":p,u=e.size,g=void 0===u?"medium":u,b=e.stickyHeader,h=void 0!==b&&b,f=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=l.useMemo(function(){return{padding:m,size:g,stickyHeader:h}},[m,g,h]);return l.createElement(o.a.Provider,{value:v},l.createElement(d,Object(c.a)({role:"table"===d?null:"table",ref:a,className:Object(r.a)(t.root,i,h&&t.stickyHeader)},f)))});a.a=Object(i.a)(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(s)},1356:function(e,a,t){"use strict";var n=t(1),c=t(6),l=t(0),r=(t(3),t(7)),i=t(9),o=t(1336),s={variant:"head"},d=l.forwardRef(function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"thead":d,m=Object(c.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:s},l.createElement(p,Object(n.a)({className:Object(r.a)(t.root,i),ref:a,role:"thead"===p?null:"rowgroup"},m)))});a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1357:function(e,a,t){"use strict";var n=t(1),c=t(6),l=t(0),r=(t(3),t(7)),i=t(9),o=t(1336),s=t(14),d=l.forwardRef(function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,m=void 0!==p&&p,u=e.selected,g=void 0!==u&&u,b=Object(c.a)(e,["classes","className","component","hover","selected"]),h=l.useContext(o.a);return l.createElement(d,Object(n.a)({ref:a,className:Object(r.a)(t.root,i,h&&{head:t.head,footer:t.footer}[h.variant],m&&t.hover,g&&t.selected),role:"tr"===d?null:"row"},b))});a.a=Object(i.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(d)},1358:function(e,a,t){"use strict";var n=t(6),c=t(1),l=t(0),r=(t(3),t(7)),i=t(9),o=t(11),s=t(14),d=t(1346),p=t(1336),m=l.forwardRef(function(e,a){var t,i,s=e.align,m=void 0===s?"inherit":s,u=e.classes,g=e.className,b=e.component,h=e.padding,f=e.scope,v=e.size,y=e.sortDirection,x=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=l.useContext(d.a),E=l.useContext(p.a),N=E&&"head"===E.variant;b?(i=b,t=N?"columnheader":"cell"):i=N?"th":"td";var w=f;!w&&N&&(w="col");var k=h||(O&&O.padding?O.padding:"default"),z=v||(O&&O.size?O.size:"medium"),C=x||E&&E.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),l.createElement(i,Object(c.a)({ref:a,className:Object(r.a)(u.root,u[C],g,"inherit"!==m&&u["align".concat(Object(o.a)(m))],"default"!==k&&u["padding".concat(Object(o.a)(k))],"medium"!==z&&u["size".concat(Object(o.a)(z))],"head"===C&&O&&O.stickyHeader&&u.stickyHeader),"aria-sort":R,role:t,scope:w},j))});a.a=Object(i.a)(function(e){return{root:Object(c.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}},{name:"MuiTableCell"})(m)},1359:function(e,a,t){"use strict";var n=t(1),c=t(6),l=t(0),r=(t(3),t(7)),i=t(9),o=t(1336),s={variant:"body"},d=l.forwardRef(function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"tbody":d,m=Object(c.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:s},l.createElement(p,Object(n.a)({className:Object(r.a)(t.root,i),ref:a,role:"tbody"===p?null:"rowgroup"},m)))});a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2151:function(e,a,t){"use strict";t.r(a);var n=t(147),c=t.n(n),l=t(196),r=t(109),i=t(0),o=t.n(i),s=t(1355),d=t(1356),p=t(1357),m=t(1358),u=t(1359),g=t(338),b=t(1263),h=t(32),f=t(37),v=t(148);a.default=Object(b.a)({},{withTheme:!0})(Object(h.g)(Object(f.b)(e=>({user:e.user}),{})(e=>{const a=Object(i.useState)([]),t=Object(r.a)(a,2),n=t[0],b=t[1],h=e.match.params.id_class,f=e.match.params.id_exercise;return Object(i.useEffect)(()=>{function e(){return(e=Object(l.a)(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("getReleasesAndAmountByClassExercise/".concat(h,"/").concat(f));case 2:a=e.sent,b(a.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(g.a,{routeSegments:[{name:"Meus Cursos",path:"/dashboard/analytics"},{name:"Detalhes de curso",path:"/dashboard/detalhesCurso"},{name:"Detalhes de aula",path:"/dashboard/detalhesAula"},{name:"Detalhes de exerc\xedcio",path:"/exercicio/detalhesAula"},{name:"Balancete Quantitativo"}]})),o.a.createElement(g.h,{title:"Balancete Quantitativo"},o.a.createElement(s.a,null,o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(m.a,{className:"px-0",align:"left"},"Conta"),o.a.createElement(m.a,{className:"px-0",align:"center"},"Quantidade Inicial"),o.a.createElement(m.a,{className:"px-0",align:"center"},"Saldo Anterior"),o.a.createElement(m.a,{className:"px-0",align:"center"},"Quantidade"),o.a.createElement(m.a,{className:"px-0",align:"center"},"Saldo Final"))),o.a.createElement(u.a,null,n.length>0?o.a.createElement(i.Fragment,null,n.map((e,a)=>o.a.createElement(i.Fragment,null,"quantitativo"==e.attribute?o.a.createElement(p.a,null,o.a.createElement(m.a,{className:"px-0 capitalize",align:"left"},e.category),e.initial_amount_default>0?o.a.createElement(m.a,{className:"px-0 capitalize",align:"center"},o.a.createElement("span",{style:{color:"#1b832d"}},e.initial_amount_default)):o.a.createElement(m.a,{className:"px-0 capitalize",align:"center",style:{color:"#555"}},o.a.createElement("span",{style:{color:"#F44336"}},e.initial_amount_default)),o.a.createElement(m.a,{className:"px-0 capitalize",align:"center"},e.initial_amount),e.isSum?o.a.createElement(m.a,{className:"px-0 capitalize",align:"center"},o.a.createElement("span",{style:{color:"#1b832d"}},"+ ",e.amount)):o.a.createElement(m.a,{className:"px-0 capitalize",align:"center",style:{color:"#555"}},o.a.createElement("span",{style:{color:"#F44336"}},"- ",e.amount)),o.a.createElement(m.a,{className:"px-0 capitalize",align:"center"},e.final_amount)):""))):""))))})))}}]);
//# sourceMappingURL=13.731a2474.chunk.js.map