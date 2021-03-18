(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[20],{1406:function(e,a,t){"use strict";var o=t(0),n=o.createContext();a.a=n},1407:function(e,a,t){"use strict";var o=t(0),n=o.createContext();a.a=n},1425:function(e,a,t){"use strict";var o=t(6),n=t(1),i=t(0),l=(t(3),t(7)),r=t(9),c=t(1407),s=i.forwardRef((function(e,a){var t=e.classes,r=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,p=void 0===m?"default":m,u=e.size,b=void 0===u?"medium":u,h=e.stickyHeader,g=void 0!==h&&h,v=Object(o.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=i.useMemo((function(){return{padding:p,size:b,stickyHeader:g}}),[p,b,g]);return i.createElement(c.a.Provider,{value:f},i.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(l.a)(t.root,r,g&&t.stickyHeader)},v)))}));a.a=Object(r.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1426:function(e,a,t){"use strict";var o=t(1),n=t(6),i=t(0),l=(t(3),t(7)),r=t(9),c=t(1406),s={variant:"head"},d=i.forwardRef((function(e,a){var t=e.classes,r=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(n.a)(e,["classes","className","component"]);return i.createElement(c.a.Provider,{value:s},i.createElement(m,Object(o.a)({className:Object(l.a)(t.root,r),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(r.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1427:function(e,a,t){"use strict";var o=t(1),n=t(6),i=t(0),l=(t(3),t(7)),r=t(9),c=t(1406),s=t(14),d=i.forwardRef((function(e,a){var t=e.classes,r=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,p=void 0!==m&&m,u=e.selected,b=void 0!==u&&u,h=Object(n.a)(e,["classes","className","component","hover","selected"]),g=i.useContext(c.a);return i.createElement(d,Object(o.a)({ref:a,className:Object(l.a)(t.root,r,g&&{head:t.head,footer:t.footer}[g.variant],p&&t.hover,b&&t.selected),role:"tr"===d?null:"row"},h))}));a.a=Object(r.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1428:function(e,a,t){"use strict";var o=t(6),n=t(1),i=t(0),l=(t(3),t(7)),r=t(9),c=t(11),s=t(14),d=t(1407),m=t(1406),p=i.forwardRef((function(e,a){var t,r,s=e.align,p=void 0===s?"inherit":s,u=e.classes,b=e.className,h=e.component,g=e.padding,v=e.scope,f=e.size,E=e.sortDirection,x=e.variant,y=Object(o.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),C=i.useContext(d.a),N=i.useContext(m.a),D=N&&"head"===N.variant;h?(r=h,t=D?"columnheader":"cell"):r=D?"th":"td";var j=v;!j&&D&&(j="col");var O=g||(C&&C.padding?C.padding:"default"),S=f||(C&&C.size?C.size:"medium"),w=x||N&&N.variant,q=null;return E&&(q="asc"===E?"ascending":"descending"),i.createElement(r,Object(n.a)({ref:a,className:Object(l.a)(u.root,u[w],b,"inherit"!==p&&u["align".concat(Object(c.a)(p))],"default"!==O&&u["padding".concat(Object(c.a)(O))],"medium"!==S&&u["size".concat(Object(c.a)(S))],"head"===w&&C&&C.stickyHeader&&u.stickyHeader),"aria-sort":q,role:t,scope:j},y))}));a.a=Object(r.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1429:function(e,a,t){"use strict";var o=t(1),n=t(6),i=t(0),l=(t(3),t(7)),r=t(9),c=t(1406),s={variant:"body"},d=i.forwardRef((function(e,a){var t=e.classes,r=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(n.a)(e,["classes","className","component"]);return i.createElement(c.a.Provider,{value:s},i.createElement(m,Object(o.a)({className:Object(l.a)(t.root,r),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(r.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2110:function(e,a,t){"use strict";t.r(a);var o=t(148),n=t.n(o),i=t(201),l=t(0),r=t.n(l),c=t(30),s=t(35),d=t(1322),m=t(351),p=t(52),u=t(1388),b=t(445),h=t(1425),g=t(1426),v=t(1427),f=t(1428),E=t(1429),x=t(1334),y=t(1396),C=t(1391),N=t(1400),D=t(149);class j extends l.Component{constructor(...e){var a;super(...e),a=this,this.state={idaula:this.props.location.state.aula.idaula,contasDebito:[],contasCredito:[],movimentacaoDebito:[],movimentacaoCredito:[],totalDebito:0,totalCredito:0,historico:""},this.handleSubmit=function(){var e=Object(i.a)(n.a.mark((function e(t){var o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(o=a.state).id_usuario=a.props.user.idusuario,o.id_exercicio=a.props.location.state.exercicio.idexercicio,delete o.contasCredito,delete o.contasDebito,e.next=8,D.a.post("storeExercicioAluno",o);case 8:e.sent,a.props.history.push("/dashboard/detalhesAula",{aula:a.props.location.state.aula});case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.handleChange=e=>{if(["nomeContaDebito","valorDebito","quantidadeDebito"].includes(e.target.className)){let o=[...this.state.movimentacaoDebito];o[e.target.dataset.id][e.target.className]=e.target.value,this.setState({movimentacaoDebito:o},()=>console.log("Debito",this.state.movimentacaoCredito));var a=0,t=[];this.state.movimentacaoDebito.forEach(e=>{e.quantidadeDebito||(e.quantidadeDebito=1),e.valorDebito&&e.quantidadeDebito&&(t=[...t,e.valorDebito*e.quantidadeDebito]),e.isDebito=!0}),0!=(a=t.reduce((e,a)=>e+a,0))&&this.setState({totalDebito:a})}else if(["nomeContaCredito","valorCredito","quantidadeCredito"].includes(e.target.className)){let o=[...this.state.movimentacaoCredito];o[e.target.dataset.id][e.target.className]=e.target.value,this.setState({movimentacaoCredito:o},()=>console.log("Credito",this.state.movimentacaoCredito));a=0,t=[];this.state.movimentacaoCredito.forEach(e=>{e.quantidadeCredito||(e.quantidadeCredito=1),e.valorCredito&&e.quantidadeCredito&&(t=[...t,e.valorCredito*e.quantidadeCredito]),e.isDebito=!1}),0!=(a=t.reduce((e,a)=>e+a,0))&&this.setState({totalCredito:a})}else this.setState({[e.target.name]:e.target.value})},this.onDebitoChange=(e,a)=>{this.setState({movimentacaoDebito:[...this.state.movimentacaoDebito,a]})},this.onCreditoChange=(e,a)=>{this.setState({movimentacaoCredito:[...this.state.movimentacaoCredito,a]})}}componentDidMount(){var e=this;return Object(i.a)(n.a.mark((function a(){var t,o,i,l,r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.get("getPlanoDeContasAula/".concat(e.props.location.state.aula.idaula));case 2:t=a.sent,o=[],i=[],t.data.forEach(e=>{"D"==e.tipo?o.push(e):i.push(e)}),l=[...t.data],r=[...t.data],e.setState({contasDebito:l}),e.setState({contasCredito:r});case 10:case"end":return a.stop()}}),a)})))()}render(){let e=this.state,a=e.contasDebito,t=e.contasCredito,o=e.movimentacaoCredito,n=e.movimentacaoDebito,i=e.totalDebito,l=e.totalCredito,c=e.historico;const s=this.props.location.state.exercicio;return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(m.a,{routeSegments:[{name:"Meus Cursos",path:"/dashboard/analytics"},{name:"Detalhes de curso",path:"/dashboard/detalhesCurso"},{name:"Detalhes de aula",path:"/dashboard/detalhesAula"},{name:"Exerc\xedcio"}]})),r.a.createElement(m.i,{title:"Exerc\xedcio"},r.a.createElement("div",null,r.a.createElement(p.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onChange:this.handleChange,onError:e=>null},r.a.createElement(u.a,{container:!0,spacing:6},r.a.createElement(u.a,{style:{paddingBottom:30},item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement("h4",null,s.nome),r.a.createElement("span",null,s.descricao))),r.a.createElement(u.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(p.TextValidator,{className:"mb-4 w-full",label:"Hist\xf3rico",type:"text",name:"historico",value:c})),r.a.createElement(u.a,{container:!0,style:{flexDirection:"row",justifyContent:"space-between"},item:!0,lg:12,md:12,sm:12,xs:12,spacing:6},r.a.createElement(u.a,{item:!0,item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(u.a,{container:!0,style:{flexDirection:"row",justifyContent:"space-between"},spacing:1,item:!0},r.a.createElement(u.a,{item:!0,lg:8,md:8,sm:8,xs:8},r.a.createElement(N.a,{className:"mb-6 w-full",options:a,onChange:this.onDebitoChange,name:"tipo",getOptionLabel:e=>e.nome,renderInput:e=>r.a.createElement(b.a,Object.assign({},e,{label:"Conta(s) D\xe9bito",variant:"outlined",placeholder:"Adicione uma conta d\xe9bito.",fullWidth:!0}))})),r.a.createElement(u.a,{item:!0,lg:4,md:4,sm:4,xs:4},r.a.createElement(b.a,{value:i,label:"Total D\xe9bito",variant:"outlined",fullWidth:!0}))),n.length>0?r.a.createElement("div",{style:{border:"1px solid #cecece",marginBottom:20,borderRadius:3},className:"overflow-auto"},r.a.createElement(h.a,{className:"product-table"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{className:"px-6",colSpan:4},"Conta"),r.a.createElement(f.a,{className:"px-0",colSpan:2},"Valor Unit\xe1rio"),r.a.createElement(f.a,{className:"px-0",colSpan:2},"Atributo"),r.a.createElement(f.a,{className:"px-0",colSpan:1},"A\xe7\xe3o"))),r.a.createElement(E.a,null,n.map((e,a)=>{let t="valorDebito-".concat(a),o="quantidadeDebito-".concat(a);return r.a.createElement(v.a,{key:a},r.a.createElement(f.a,{className:"px-0 capitalize",colSpan:4,align:"left"},e.nome),r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{style:S,type:"text","data-id":a,name:t,id:t,value:n[a].name,placeholder:"Digite valor",className:"valorDebito"})),"quantitativo"==e.atributo?r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{style:S,"data-id":a,name:o,id:o,value:n[a].name,placeholder:"Digite quantidade",className:"quantidadeDebito"})):r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{disabled:!0,style:S,"data-id":a,name:o,id:o,value:n[a].name,placeholder:"N\xe3o quantitativo",className:"quantidadeDebito"})),r.a.createElement(f.a,{className:"px-0",colSpan:1},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"primary"},"edit"))))})))):r.a.createElement("div",null)),r.a.createElement(u.a,{item:!0,item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(u.a,{container:!0,style:{flexDirection:"row",justifyContent:"space-between"},spacing:1,item:!0},r.a.createElement(u.a,{item:!0,lg:8,md:8,sm:8,xs:8},r.a.createElement(N.a,{className:"mb-6 w-full",options:t,onChange:this.onCreditoChange,name:"tipo",getOptionLabel:e=>e.nome,renderInput:e=>r.a.createElement(b.a,Object.assign({},e,{label:"Conta(s) Cr\xe9dito",variant:"outlined",placeholder:"Adicione uma conta cr\xe9dito.",fullWidth:!0}))})),r.a.createElement(u.a,{item:!0,lg:4,md:4,sm:4,xs:4},r.a.createElement(b.a,{value:l,label:"Total Cr\xe9dito",variant:"outlined",fullWidth:!0}))),o.length>0?r.a.createElement("div",{style:{border:"1px solid #cecece",marginBottom:20,borderRadius:3},className:"overflow-auto"},r.a.createElement(h.a,{className:"product-table"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{className:"px-6",colSpan:4},"Conta"),r.a.createElement(f.a,{className:"px-0",colSpan:2},"Valor Unit\xe1rio"),r.a.createElement(f.a,{className:"px-0",colSpan:2},"Atributo"),r.a.createElement(f.a,{className:"px-0",colSpan:1},"A\xe7\xe3o"))),r.a.createElement(E.a,null,o.map((e,a)=>{let t="valorCredito-".concat(a),n="quantidadeCredito-".concat(a);return r.a.createElement(v.a,{key:a},r.a.createElement(f.a,{className:"px-0 capitalize",colSpan:4,align:"left"},e.nome),r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{style:S,type:"text","data-id":a,name:t,id:t,value:o[a].name,className:"valorCredito"})),"quantitativo"==e.atributo?r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{style:S,"data-id":a,name:n,id:n,value:o[a].name,className:"quantidadeCredito",placeholder:"Digite a quantidade"})):r.a.createElement(f.a,{style:O,className:"px-0",align:"left",colSpan:2},r.a.createElement("input",{disabled:!0,style:S,"data-id":a,name:n,id:n,value:o[a].name,className:"quantidadeCredito",placeholder:"N\xe3o quantitativo"})),r.a.createElement(f.a,{className:"px-0",colSpan:1},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"primary"},"edit"))))})))):r.a.createElement("div",null))),r.a.createElement(C.a,{color:"primary",variant:"contained",type:"submit"},r.a.createElement(y.a,null,"send"),r.a.createElement("span",{className:"pl-2 capitalize"},"Criar"))))))}}const O={},S={border:"1px solid #cecece",borderRadius:3,padding:5,width:"80%"};a.default=Object(d.a)({},{withTheme:!0})(Object(c.g)(Object(s.b)(e=>({user:e.user}),{})(j)))}}]);
//# sourceMappingURL=20.e6c2e8ec.chunk.js.map