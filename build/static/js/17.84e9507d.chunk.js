(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1336:function(e,a,t){"use strict";var o=t(0),n=o.createContext();a.a=n},1346:function(e,a,t){"use strict";var o=t(0),n=o.createContext();a.a=n},1355:function(e,a,t){"use strict";var o=t(6),n=t(1),c=t(0),l=(t(3),t(7)),i=t(9),r=t(1346),s=c.forwardRef(function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,m=void 0===p?"default":p,u=e.size,v=void 0===u?"medium":u,b=e.stickyHeader,f=void 0!==b&&b,g=Object(o.a)(e,["classes","className","component","padding","size","stickyHeader"]),x=c.useMemo(function(){return{padding:m,size:v,stickyHeader:f}},[m,v,f]);return c.createElement(r.a.Provider,{value:x},c.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(l.a)(t.root,i,f&&t.stickyHeader)},g)))});a.a=Object(i.a)(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(s)},1356:function(e,a,t){"use strict";var o=t(1),n=t(6),c=t(0),l=(t(3),t(7)),i=t(9),r=t(1336),s={variant:"head"},d=c.forwardRef(function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"thead":d,m=Object(n.a)(e,["classes","className","component"]);return c.createElement(r.a.Provider,{value:s},c.createElement(p,Object(o.a)({className:Object(l.a)(t.root,i),ref:a,role:"thead"===p?null:"rowgroup"},m)))});a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1357:function(e,a,t){"use strict";var o=t(1),n=t(6),c=t(0),l=(t(3),t(7)),i=t(9),r=t(1336),s=t(14),d=c.forwardRef(function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,m=void 0!==p&&p,u=e.selected,v=void 0!==u&&u,b=Object(n.a)(e,["classes","className","component","hover","selected"]),f=c.useContext(r.a);return c.createElement(d,Object(o.a)({ref:a,className:Object(l.a)(t.root,i,f&&{head:t.head,footer:t.footer}[f.variant],m&&t.hover,v&&t.selected),role:"tr"===d?null:"row"},b))});a.a=Object(i.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(d)},1358:function(e,a,t){"use strict";var o=t(6),n=t(1),c=t(0),l=(t(3),t(7)),i=t(9),r=t(11),s=t(14),d=t(1346),p=t(1336),m=c.forwardRef(function(e,a){var t,i,s=e.align,m=void 0===s?"inherit":s,u=e.classes,v=e.className,b=e.component,f=e.padding,g=e.scope,x=e.size,h=e.sortDirection,y=e.variant,N=Object(o.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=c.useContext(d.a),_=c.useContext(p.a),j=_&&"head"===_.variant;b?(i=b,t=j?"columnheader":"cell"):i=j?"th":"td";var O=g;!O&&j&&(O="col");var w=f||(E&&E.padding?E.padding:"default"),z=x||(E&&E.size?E.size:"medium"),k=y||_&&_.variant,C=null;return h&&(C="asc"===h?"ascending":"descending"),c.createElement(i,Object(n.a)({ref:a,className:Object(l.a)(u.root,u[k],v,"inherit"!==m&&u["align".concat(Object(r.a)(m))],"default"!==w&&u["padding".concat(Object(r.a)(w))],"medium"!==z&&u["size".concat(Object(r.a)(z))],"head"===k&&E&&E.stickyHeader&&u.stickyHeader),"aria-sort":C,role:t,scope:O},N))});a.a=Object(i.a)(function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}},{name:"MuiTableCell"})(m)},1359:function(e,a,t){"use strict";var o=t(1),n=t(6),c=t(0),l=(t(3),t(7)),i=t(9),r=t(1336),s={variant:"body"},d=c.forwardRef(function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"tbody":d,m=Object(n.a)(e,["classes","className","component"]);return c.createElement(r.a.Provider,{value:s},c.createElement(p,Object(o.a)({className:Object(l.a)(t.root,i),ref:a,role:"tbody"===p?null:"rowgroup"},m)))});a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2141:function(e,a,t){"use strict";t.r(a);var o=t(147),n=t.n(o),c=t(196),l=t(109),i=t(0),r=t.n(i),s=t(1355),d=t(1356),p=t(1357),m=t(1358),u=t(1359),v=t(338),b=t(148);a.default=(()=>{const e=Object(i.useState)([]),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(i.useEffect)(()=>{function e(){return(e=Object(c.a)(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("getMovimentacoesAluno");case 2:a=e.sent,o(a.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(v.a,{routeSegments:[{name:"Dashboard",path:"/dashboard/home"},{name:"Movimenta\xe7\xf5es - Aluno"}]})),r.a.createElement("div",{className:"w-full overflow-auto"},r.a.createElement(s.a,{className:"whitespace-pre"},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{className:"px-0"},"Exercicio"),r.a.createElement(m.a,{className:"px-0"},"Usu\xe1rio"),r.a.createElement(m.a,{className:"px-0"},"Plano de contas Pai"),r.a.createElement(m.a,{className:"px-0"},"Plano de contas Usuario"),r.a.createElement(m.a,{className:"px-0"},"Saldo Inicial"),r.a.createElement(m.a,{className:"px-0"},"Mov Debito"),r.a.createElement(m.a,{className:"px-0"},"Mov Credito"),r.a.createElement(m.a,{className:"px-0"},"Saldo Final"),r.a.createElement(m.a,{className:"px-0"},"Valor unitario"),r.a.createElement(m.a,{className:"px-0"},"Debito Quant."),r.a.createElement(m.a,{className:"px-0"},"Credito Quant."),r.a.createElement(m.a,{className:"px-0"},"Quantidade Total"))),r.a.createElement(u.a,null,t.map((e,a)=>r.a.createElement(p.a,{key:a},r.a.createElement(m.a,{className:"px-0 capitalize",align:"left"},e.nome_exercicio?e.nome_exercicio:"-"),r.a.createElement(m.a,{className:"px-0 capitalize",align:"left"},e.nmusuario?e.nmusuario:"-"),r.a.createElement(m.a,{className:"px-0 capitalize",align:"left"},e.plano_contas_pai_nome?e.plano_contas_pai_nome:"-"),r.a.createElement(m.a,{className:"px-0 capitalize",align:"left"},e.nome?e.nome:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},e.saldo_inicial_valor?e.saldo_inicial_valor:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},e.mov_debito_valor?e.mov_debito_valor:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},e.mov_credito_valor?e.mov_credito_valor:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},e.saldo_final_valor?e.saldo_final_valor:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},e.valor_unitario?e.valor_unitario:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},"financeiro"==e.atributo?"-":e.mov_debito_quant?e.mov_debito_quant:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},"financeiro"==e.atributo?"-":e.mov_credito_quant?e.mov_credito_quant:"-"),r.a.createElement(m.a,{className:"px-0 capitalize"},"financeiro"==e.atributo?"-":e.saldo_final_quant?e.saldo_final_quant:"-")))))))})}}]);
//# sourceMappingURL=17.84e9507d.chunk.js.map