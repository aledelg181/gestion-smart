"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[1189],{91189:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(65043),i=n(26240),s=n(84882),o=n(28076),a=n(39652),c=n(51962),l=n(58093),d=n(96446),h=n(55263),x=n(85865),A=n(69392),u=n(17392),m=n(26494),p=n(68903),v=n(67784),j=n(51787),g=n(79650),f=n(71806),S=n(73460),z=n(79266),b=n(50524),y=n(3009),C=n(82330),w=n(83482),M=n(686),k=n(63471),H=n(46162),L=n(31191),T=n(6361),P=n(66360),V=n(67368),I=n(26688),D=n(70579);function R(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}const N=(e,t)=>"desc"===e?(e,n)=>R(e,n,t):(e,n)=>-R(e,n,t);function $(e,t){const n=e.map(((e,t)=>[e,t]));return n.sort(((e,n)=>{const r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((e=>e[0]))}const E=[{id:"name",numeric:!1,label:"Customer Name",align:"left"},{id:"location",numeric:!0,label:"Location",align:"left"},{id:"orders",numeric:!0,label:"Orders",align:"right"},{id:"date",numeric:!0,label:"Registered",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function O(e){let{onSelectAllClick:t,order:n,orderBy:r,numSelected:i,rowCount:h,onRequestSort:x,selected:A}=e;return(0,D.jsx)(s.A,{children:(0,D.jsxs)(o.A,{children:[(0,D.jsx)(a.A,{padding:"checkbox",sx:{pl:3},children:(0,D.jsx)(c.A,{color:"primary",indeterminate:i>0&&i<h,checked:h>0&&i===h,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),i>0&&(0,D.jsx)(a.A,{padding:"none",colSpan:6,children:(0,D.jsx)(F,{numSelected:A.length})}),i<=0&&E.map((e=>{return(0,D.jsx)(a.A,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&n,children:(0,D.jsxs)(l.A,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,e=>{x(e,t)}),children:[e.label,r===e.id?(0,D.jsx)(d.A,{component:"span",sx:b.A,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),i<=0&&(0,D.jsx)(a.A,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}const F=e=>{let{numSelected:t}=e;return(0,D.jsxs)(h.A,{sx:{p:0,pl:1,pr:1,...t>0&&{color:e=>e.palette.secondary.main}},children:[t>0?(0,D.jsxs)(x.A,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,D.jsx)(x.A,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,D.jsx)(d.A,{sx:{flexGrow:1}}),t>0&&(0,D.jsx)(A.A,{title:"Delete",children:(0,D.jsx)(u.A,{size:"large",children:(0,D.jsx)(k.A,{fontSize:"small"})})})]})},q=()=>{const e=(0,i.A)(),t=(0,w.wA)(),[n,s]=r.useState("asc"),[l,d]=r.useState("calories"),[h,b]=r.useState([]),[k,R]=r.useState(0),[E,F]=r.useState(5),[q,B]=r.useState(""),[_,G]=r.useState([]),{customers:W}=(0,w.d4)((e=>e.customer));r.useEffect((()=>{t((0,M.od)())}),[t]),r.useEffect((()=>{G(W)}),[W]);const J=(e,t)=>{const n=h.indexOf(t);let r=[];-1===n?r=r.concat(h,t):0===n?r=r.concat(h.slice(1)):n===h.length-1?r=r.concat(h.slice(0,-1)):n>0&&(r=r.concat(h.slice(0,n),h.slice(n+1))),b(r)},K=k>0?Math.max(0,(1+k)*E-_.length):0;return(0,D.jsxs)(C.A,{title:"Customer List",content:!1,children:[(0,D.jsx)(m.A,{children:(0,D.jsxs)(p.Ay,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,D.jsx)(p.Ay,{item:!0,xs:12,sm:6,children:(0,D.jsx)(v.A,{InputProps:{startAdornment:(0,D.jsx)(j.A,{position:"start",children:(0,D.jsx)(P.A,{fontSize:"small"})})},onChange:e=>{const t=null===e||void 0===e?void 0:e.target.value;if(B(t||""),t){const e=_.filter((e=>{let n=!0;let r=!1;return["name","email","location","orders"].forEach((n=>{e[n].toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));G(e)}else G(W)},placeholder:"Search Customer",value:q,size:"small"})}),(0,D.jsxs)(p.Ay,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,D.jsx)(A.A,{title:"Copy",children:(0,D.jsx)(u.A,{size:"large",children:(0,D.jsx)(T.A,{})})}),(0,D.jsx)(A.A,{title:"Print",children:(0,D.jsx)(u.A,{size:"large",children:(0,D.jsx)(L.A,{})})}),(0,D.jsx)(A.A,{title:"Filter",children:(0,D.jsx)(u.A,{size:"large",children:(0,D.jsx)(H.A,{})})})]})]})}),(0,D.jsx)(g.A,{children:(0,D.jsxs)(f.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,D.jsx)(O,{theme:e,numSelected:h.length,order:n,orderBy:l,onSelectAllClick:e=>{if(e.target.checked)if(h.length>0)b([]);else{const e=_.map((e=>e.name));b(e)}else b([])},onRequestSort:(e,t)=>{s(l===t&&"asc"===n?"desc":"asc"),d(t)},rowCount:_.length,selected:h}),(0,D.jsxs)(S.A,{children:[$(_,N(n,l)).slice(k*E,k*E+E).map(((t,n)=>{if("number"===typeof t)return null;const r=(i=t.name,-1!==h.indexOf(i));var i;const s=`enhanced-table-checkbox-${n}`;return(0,D.jsxs)(o.A,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,D.jsx)(a.A,{padding:"checkbox",sx:{pl:3},onClick:e=>J(0,t.name),children:(0,D.jsx)(c.A,{color:"primary",checked:r,inputProps:{"aria-labelledby":s}})}),(0,D.jsxs)(a.A,{component:"th",id:s,scope:"row",onClick:e=>J(0,t.name),sx:{cursor:"pointer"},children:[(0,D.jsxs)(x.A,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]}),(0,D.jsxs)(x.A,{variant:"caption",children:[" ",t.email," "]})]}),(0,D.jsx)(a.A,{children:t.location}),(0,D.jsx)(a.A,{align:"right",children:t.orders}),(0,D.jsx)(a.A,{align:"center",children:t.date}),(0,D.jsxs)(a.A,{align:"center",children:[1===t.status&&(0,D.jsx)(y.A,{label:"Complete",size:"small",chipcolor:"success"}),2===t.status&&(0,D.jsx)(y.A,{label:"Processing",size:"small",chipcolor:"orange"}),3===t.status&&(0,D.jsx)(y.A,{label:"Confirm",size:"small",chipcolor:"primary"})]}),(0,D.jsxs)(a.A,{align:"center",sx:{pr:3},children:[(0,D.jsx)(u.A,{color:"primary",size:"large","aria-label":"view",children:(0,D.jsx)(V.A,{sx:{fontSize:"1.3rem"}})}),(0,D.jsx)(u.A,{color:"secondary",size:"large","aria-label":"edit",children:(0,D.jsx)(I.A,{sx:{fontSize:"1.3rem"}})})]})]},n)})),K>0&&(0,D.jsx)(o.A,{style:{height:53*K},children:(0,D.jsx)(a.A,{colSpan:6})})]})]})}),(0,D.jsx)(z.A,{rowsPerPageOptions:[5,10,25],component:"div",count:_.length,rowsPerPage:E,page:k,onPageChange:(e,t)=>{R(t)},onRowsPerPageChange:e=>{F(parseInt(null===e||void 0===e?void 0:e.target.value,10)),R(0)}})]})}},63471:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.A=o},26688:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)([(0,s.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.A=o},6361:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)([(0,s.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.A=o},46162:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)((0,s.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.A=o},31191:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)([(0,s.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,s.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,s.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,s.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.A=o},66360:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.A=o},67368:(e,t,n)=>{var r=n(24994);t.A=void 0;var i=r(n(40039)),s=n(70579),o=(0,i.default)([(0,s.jsx)("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"},"1")],"VisibilityTwoTone");t.A=o},58093:(e,t,n)=>{n.d(t,{A:()=>z});var r=n(98587),i=n(58168),s=n(98610),o=n(69292),a=n(65043),c=n(75429),l=n(66734),d=n(70579);const h=(0,l.A)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");var x=n(34535),A=n(98206),u=n(6803),m=n(92532),p=n(72372);function v(e){return(0,p.Ay)("MuiTableSortLabel",e)}const j=(0,m.A)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],f=(0,x.Ay)(c.A,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})((e=>{let{theme:t}=e;return{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${j.icon}`]:{opacity:.5}},[`&.${j.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${j.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}}})),S=(0,x.Ay)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${(0,u.A)(n.direction)}`]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,i.A)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),z=a.forwardRef((function(e,t){const n=(0,A.b)({props:e,name:"MuiTableSortLabel"}),{active:a=!1,children:c,className:l,direction:x="asc",hideSortIcon:m=!1,IconComponent:p=h}=n,j=(0,r.A)(n,g),z=(0,i.A)({},n,{active:a,direction:x,hideSortIcon:m,IconComponent:p}),b=(e=>{const{classes:t,direction:n,active:r}=e,i={root:["root",r&&"active"],icon:["icon",`iconDirection${(0,u.A)(n)}`]};return(0,s.A)(i,v,t)})(z);return(0,d.jsxs)(f,(0,i.A)({className:(0,o.A)(b.root,l),component:"span",disableRipple:!0,ownerState:z,ref:t},j,{children:[c,m&&!a?null:(0,d.jsx)(S,{as:p,className:(0,o.A)(b.icon),ownerState:z})]}))}))}}]);
//# sourceMappingURL=1189.f9eac514.chunk.js.map