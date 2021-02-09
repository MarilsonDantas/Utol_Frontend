(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[22],{1406:function(e,a,t){"use strict";var l=t(0),n=l.createContext();a.a=n},1408:function(e,a,t){"use strict";var l=t(0),n=l.createContext();a.a=n},1435:function(e,a,t){"use strict";var l=t(6),n=t(1),c=t(0),r=(t(3),t(7)),s=t(9),i=t(1408),o=c.forwardRef((function(e,a){var t=e.classes,s=e.className,o=e.component,d=void 0===o?"table":o,m=e.padding,p=void 0===m?"default":m,g=e.size,u=void 0===g?"medium":g,x=e.stickyHeader,b=void 0!==x&&x,f=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=c.useMemo((function(){return{padding:p,size:u,stickyHeader:b}}),[p,u,b]);return c.createElement(i.a.Provider,{value:h},c.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(r.a)(t.root,s,b&&t.stickyHeader)},f)))}));a.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1436:function(e,a,t){"use strict";var l=t(1),n=t(6),c=t(0),r=(t(3),t(7)),s=t(9),i=t(1406),o={variant:"head"},d=c.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(n.a)(e,["classes","className","component"]);return c.createElement(i.a.Provider,{value:o},c.createElement(m,Object(l.a)({className:Object(r.a)(t.root,s),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1437:function(e,a,t){"use strict";var l=t(1),n=t(6),c=t(0),r=(t(3),t(7)),s=t(9),i=t(1406),o=t(14),d=c.forwardRef((function(e,a){var t=e.classes,s=e.className,o=e.component,d=void 0===o?"tr":o,m=e.hover,p=void 0!==m&&m,g=e.selected,u=void 0!==g&&g,x=Object(n.a)(e,["classes","className","component","hover","selected"]),b=c.useContext(i.a);return c.createElement(d,Object(l.a)({ref:a,className:Object(r.a)(t.root,s,b&&{head:t.head,footer:t.footer}[b.variant],p&&t.hover,u&&t.selected),role:"tr"===d?null:"row"},x))}));a.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1438:function(e,a,t){"use strict";var l=t(6),n=t(1),c=t(0),r=(t(3),t(7)),s=t(9),i=t(11),o=t(14),d=t(1408),m=t(1406),p=c.forwardRef((function(e,a){var t,s,o=e.align,p=void 0===o?"inherit":o,g=e.classes,u=e.className,x=e.component,b=e.padding,f=e.scope,h=e.size,E=e.sortDirection,v=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=c.useContext(d.a),z=c.useContext(m.a),j=z&&"head"===z.variant;x?(s=x,t=j?"columnheader":"cell"):s=j?"th":"td";var O=f;!O&&j&&(O="col");var w=b||(N&&N.padding?N.padding:"default"),k=h||(N&&N.size?N.size:"medium"),C=v||z&&z.variant,R=null;return E&&(R="asc"===E?"ascending":"descending"),c.createElement(s,Object(n.a)({ref:a,className:Object(r.a)(g.root,g[C],u,"inherit"!==p&&g["align".concat(Object(i.a)(p))],"default"!==w&&g["padding".concat(Object(i.a)(w))],"medium"!==k&&g["size".concat(Object(i.a)(k))],"head"===C&&N&&N.stickyHeader&&g.stickyHeader),"aria-sort":R,role:t,scope:O},y))}));a.a=Object(s.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1439:function(e,a,t){"use strict";var l=t(1),n=t(6),c=t(0),r=(t(3),t(7)),s=t(9),i=t(1406),o={variant:"body"},d=c.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(n.a)(e,["classes","className","component"]);return c.createElement(i.a.Provider,{value:o},c.createElement(m,Object(l.a)({className:Object(r.a)(t.root,s),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2112:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(1435),r=t(1436),s=t(1437),i=t(1438),o=t(1439),d=t(351),m=t(1455),p=t.n(m);a.default=()=>n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(d.a,{routeSegments:[{name:"Utilities",path:"/utilities"},{name:"Spacing"}]})),n.a.createElement(d.i,{title:"Spacing"},n.a.createElement("p",{className:"m-0"},"The classes are named using the format-",n.a.createElement("code",null,"(property)(sides)-(size)")),n.a.createElement("p",null,"Where ",n.a.createElement("em",null,"property")," is one of:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"m")," - for classes that set ",n.a.createElement("code",null,"margin")),n.a.createElement("li",null,n.a.createElement("code",null,"p")," - for classes that set ",n.a.createElement("code",null,"padding"))),n.a.createElement("p",null,"Where ",n.a.createElement("em",null,"sides")," is one of:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"t")," - for classes that set ",n.a.createElement("code",null,"margin-top")," or"," ",n.a.createElement("code",null,"padding-top")),n.a.createElement("li",null,n.a.createElement("code",null,"b")," - for classes that set ",n.a.createElement("code",null,"margin-bottom")," or"," ",n.a.createElement("code",null,"padding-bottom")),n.a.createElement("li",null,n.a.createElement("code",null,"l")," - for classes that set ",n.a.createElement("code",null,"margin-left")," or"," ",n.a.createElement("code",null,"padding-left")),n.a.createElement("li",null,n.a.createElement("code",null,"r")," - for classes that set ",n.a.createElement("code",null,"margin-right")," or"," ",n.a.createElement("code",null,"padding-right")),n.a.createElement("li",null,n.a.createElement("code",null,"x")," - for classes that set both ",n.a.createElement("code",null,"*-left")," and"," ",n.a.createElement("code",null,"*-right")),n.a.createElement("li",null,n.a.createElement("code",null,"y")," - for classes that set both ",n.a.createElement("code",null,"*-top")," and"," ",n.a.createElement("code",null,"*-bottom")),n.a.createElement("li",null,"blank - for classes that set a ",n.a.createElement("code",null,"margin")," or"," ",n.a.createElement("code",null,"padding")," on all 4 sides of the element")),n.a.createElement(c.a,{className:"whitespace-pre"},n.a.createElement(r.a,null,n.a.createElement(s.a,{className:"bg-default"},n.a.createElement(i.a,{className:"px-0"},"Name"),n.a.createElement(i.a,{className:"px-0"},"Size"),n.a.createElement(i.a,{className:"px-0"},"Pixels"),n.a.createElement(i.a,{className:"px-0"},"Space"))),n.a.createElement(o.a,null,[...Array(26).keys()].map((e,a)=>n.a.createElement(s.a,{key:a},n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},e),n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},.25*e,"rem"),n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},.25*e*16,"px"),n.a.createElement(i.a,{className:"px-0 capitalize"},n.a.createElement("span",{className:"py-2 bg-light-gray pr-".concat(e)})))),[...Array(17).keys()].slice(1).map((e,a)=>n.a.createElement(s.a,{key:a},n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},e,"px"),n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},e/16,"rem"),n.a.createElement(i.a,{className:"px-0 capitalize",align:"left"},e,"px"),n.a.createElement(i.a,{className:"px-0 capitalize"},n.a.createElement("span",{className:"py-2 bg-light-gray pr-".concat(e,"px")})))))),n.a.createElement("h6",{className:"mb-4 py-6"},"Example"),[{className:".m-0",description:"margin 0px"},{className:".mx-4",description:"margin right 1rem & margin left 1rem"},{className:".p-0",description:"padding 0px"},{className:".py-2",description:"padding top 0.5rem & padding bottom 0.5rem"},{className:".py-2px",description:"padding top 2px & padding bottom 2px"},{className:".m-auto",description:"margin: auto"},{className:".mx-auto",description:"margin-right: auto; margin-left: auto"},{className:".m-sm-30",description:"\n      screen size below 768px:: margin is 16px \n      screen size over 768px:: margin is 30px\n      "},{className:".mb-sm-30",description:"\n      screen size below 768px:: margin-bottom is 16px \n      screen size over 768px:: margin-bottom is 30px\n      "},{className:".px-sm-30",description:"\n      screen size below 768px:: padding right and left is 16px \n      screen size over 768px:: padding right and left is 30px\n      "},{className:".p-sm-30",description:"\n      screen size below 768px:: padding is 16px \n      screen size over 768px:: padding is 24px\n      "},{className:".px-sm-24",description:"\n      screen size below 768px:: padding right and left is 16px\n      screen size over 768px:: padding right and left is 24px\n       "},{className:".pt-sm-24",description:"\n      screen size below 768px:: padding top is 16px\n      screen size over 768px:: padding top is 24px\n       "},{className:".pl-sm-24",description:"\n      screen size below 768px:: padding left is 16px\n      screen size over 768px:: padding left is 24px\n       "}].map((e,a)=>n.a.createElement("div",{key:a,className:"flex items-center justify-between px-4"},n.a.createElement("code",{className:"min-w-88"},e.className),n.a.createElement("div",{className:"highlight-js"},n.a.createElement(p.a,{className:"html"},'<div className="'.concat(e.className.replace(".",""),'">').concat(e.description,"</div>")))))))}}]);
//# sourceMappingURL=22.da772455.chunk.js.map