"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[8875],{78875:(e,i,r)=>{r.r(i),r.d(i,{default:()=>ti});var t=r(65043),n=r(73216),s=r(35475),a=r(26240),l=r(96446),o=r(68903),d=r(36591),c=r(85865),x=r(42518),h=r(29013),m=r(24056),p=r(17392),j=r(39336),A=r(88446),u=r(67784),y=r(69889),g=r(81673),v=r(30344),k=r(75429),f=r(72437),b=r(32143),w=r(88911),z=r(30279),C=r(80899),S=r(80111),I=r.n(S),L=r(24858),R=r(18403),M=r(17595),O=r(63683),F=r(12110),W=r(51787),$=r(1062),E=r(13383),P=r(54978),q=r(3144),T=r(77342),D=r(70579);const B=r(40630),_=e=>{let{commentId:i,handleReplayLikes:r,onReply:n,postId:s,reply:d}=e;const h=(0,a.A)(),{id:m}=d,[p,j]=(0,t.useState)(null),A=()=>{j(null)},u=d;return(0,D.jsx)(D.Fragment,{children:Object.keys(u).length>0&&(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(l.A,{sx:{pl:6.25},children:(0,D.jsx)(F.A,{sx:{background:"dark"===h.palette.mode?h.palette.dark.main:h.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,D.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)($.A,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:u.profile&&u.profile.avatar&&B(`./${u.profile.avatar}`)})}),(0,D.jsx)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{align:"left",variant:"h5",component:"div",children:u.profile.name})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsxs)(c.A,{align:"left",variant:"caption",children:[(0,D.jsx)(E.A,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",u.profile.time]})})]})}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(k.A,{sx:{borderRadius:"12px"},onClick:e=>{j(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,D.jsx)($.A,{variant:"rounded",sx:{...h.typography.commonAvatar,...h.typography.smallAvatar,background:"dark"===h.palette.mode?h.palette.dark.main:h.palette.secondary.light,color:"dark"===h.palette.mode?h.palette.dark.light:h.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:h.palette.secondary.main,color:h.palette.secondary.light}},"aria-controls":"menu-comment-reply","aria-haspopup":"true",children:(0,D.jsx)(P.A,{fontSize:"inherit"})})}),(0,D.jsxs)(f.A,{id:"menu-comment-reply",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:A,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,D.jsx)(b.A,{onClick:A,children:"Edit"}),(0,D.jsx)(b.A,{onClick:A,children:"Delete"})]})]})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(c.A,{align:"left",variant:"body2",children:u.data.comment})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(w.A,{direction:"row",spacing:2,sx:{color:"dark"===h.palette.mode?"grey.700":"grey.800"},children:[(0,D.jsxs)(x.A,{onClick:()=>r(s,i,m),variant:"text",color:"inherit",size:"small",startIcon:(0,D.jsx)(q.A,{color:u.data.likes&&u.data.likes.like?"secondary":"inherit"}),children:[u.data.likes&&u.data.likes.value?u.data.likes.value:0," likes"]}),(0,D.jsx)(x.A,{variant:"text",onClick:n,size:"small",color:"inherit",startIcon:(0,D.jsx)(T.A,{color:"primary"}),children:"reply"})]})})]})})})})})};var U=r(60);const N=r(40630),G=C.Ik().shape({name:C.Yj().required("Reply Field is Required")}),Y=e=>{let{bug:i,label:r,name:t,required:n,...s}=e;const{control:a}=(0,L.xW)();let l=!1,d="";return i&&Object.prototype.hasOwnProperty.call(i,t)&&(l=!0,d=i[t].message),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L.xI,{name:t,control:a,defaultValue:"",render:e=>{let{field:i}=e;return(0,D.jsx)(u.A,{fullWidth:!0,label:r,InputLabelProps:{className:n?"required-label":"",required:n||!1},error:l,...i})},...s}),d&&(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(g.A,{error:!0,children:d})})]})},K=e=>{var i,r,n,s,d,h,m,p,j,A;let{comment:u,handleCommentLikes:g,handleReplayLikes:C,postId:S,replyAdd:M,user:O}=e;const B=(0,a.A)(),K=(0,v.A)(B.breakpoints.down("md")),[V,H]=(0,t.useState)(null),Q=()=>{H(null)},[X,Z]=(0,t.useState)(!1),J=()=>{Z((e=>!e))};let ee=(0,D.jsx)(D.Fragment,{});var ie;Object.keys(u).length>0&&null!==(i=u.data)&&void 0!==i&&i.replies&&null!==(r=u.data)&&void 0!==r&&r.replies.length&&(ee=null===(ie=u.data)||void 0===ie?void 0:ie.replies.map(((e,i)=>(0,D.jsx)(_,{postId:S,commentId:u.id,onReply:J,reply:e,handleReplayLikes:C},i))));const re=(0,L.mN)({resolver:(0,R.t)(G)}),{handleSubmit:te,formState:{errors:ne},reset:se}=re;return(0,D.jsxs)(D.Fragment,{children:[Object.keys(u).length>0&&(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(F.A,{sx:{background:"dark"===B.palette.mode?B.palette.dark.main:B.palette.grey[50],padding:"16px 16px 8px",mt:1.25},children:(0,D.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)($.A,{sx:{width:24,height:24},size:"sm",alt:"User 1",src:u.profile&&u.profile.avatar&&N(`./${u.profile.avatar}`)})}),(0,D.jsx)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{align:"left",variant:"h5",component:"div",children:u.profile.name})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsxs)(c.A,{align:"left",variant:"caption",children:[(0,D.jsx)(E.A,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",u.profile.time]})})]})}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(k.A,{sx:{borderRadius:"12px"},"aria-label":"more options",children:(0,D.jsx)($.A,{variant:"rounded",sx:{...B.typography.commonAvatar,...B.typography.smallAvatar,background:"dark"===B.palette.mode?B.palette.dark.main:B.palette.secondary.light,color:"dark"===B.palette.mode?B.palette.dark.light:B.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:B.palette.secondary.main,color:B.palette.secondary.light}},"aria-controls":"menu-comment","aria-haspopup":"true",onClick:e=>{H(e.currentTarget)},children:(0,D.jsx)(P.A,{fontSize:"inherit"})})}),(0,D.jsxs)(f.A,{id:"menu-comment",anchorEl:V,keepMounted:!0,open:Boolean(V),onClose:Q,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,D.jsx)(b.A,{onClick:Q,children:"Edit"}),(0,D.jsx)(b.A,{onClick:Q,children:"Delete"})]})]})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:1.5}},children:(0,D.jsx)(c.A,{align:"left",variant:"body2",children:null===(n=u.data)||void 0===n?void 0:n.comment})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(w.A,{direction:"row",spacing:2,sx:{color:"dark"===B.palette.mode?"grey.700":"grey.800"},children:[(0,D.jsxs)(x.A,{onClick:()=>g(S,u.id),variant:"text",color:"inherit",size:"small",startIcon:(0,D.jsx)(q.A,{color:null!==(s=u.data)&&void 0!==s&&s.likes&&null!==(d=u.data)&&void 0!==d&&d.likes.like?"secondary":"inherit"}),children:[null!==(h=u.data)&&void 0!==h&&h.likes&&null!==(m=u.data)&&void 0!==m&&m.likes.value?null===(p=u.data)||void 0===p?void 0:p.likes.value:0," likes"]}),(0,D.jsxs)(x.A,{variant:"text",onClick:J,color:"inherit",size:"small",startIcon:(0,D.jsx)(T.A,{color:"primary"}),children:[null!==(j=u.data)&&void 0!==j&&j.replies?null===(A=u.data)||void 0===A?void 0:A.replies.length:0," reply"]})]})})]})})}),ee,(0,D.jsx)(z.A,{in:X,sx:{width:"100%"},children:X&&(0,D.jsx)(o.Ay,{item:!0,xs:12,sx:{pl:{xs:1,sm:3},pt:3},children:(0,D.jsx)(l.A,{sx:{ml:4.25,[B.breakpoints.down("md")]:{ml:0}},children:(0,D.jsx)("form",{onSubmit:te((async e=>{J();const i={id:I()("#REPLY_"),profile:O,data:{comment:e.name,likes:{like:!1,value:0},replies:[]}};M(S,u.id,i),se({name:""})})),children:(0,D.jsxs)(o.Ay,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,D.jsx)(o.Ay,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,D.jsx)($.A,{sx:{mt:1.5},alt:"User 1",src:u.profile&&u.profile.avatar&&N(`./${u.profile.avatar}`)})}),(0,D.jsx)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,sx:{mt:1},children:(0,D.jsx)(L.Op,{...re,children:(0,D.jsx)(Y,{fullWidth:!0,name:"name",label:"Write a reply...",size:K?"small":"medium",bug:ne,InputProps:{label:"Write a reply...",startAdornment:(0,D.jsx)(W.A,{position:"start",children:(0,D.jsx)(U.A,{fontSize:"small"})})}})})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(y.A,{children:(0,D.jsx)(x.A,{type:"submit",variant:"contained",color:"secondary",size:K?"small":"large",sx:{mt:1.5},children:"Reply"})})})]})})})})})]})};var V=r(82330),H=r(30342),Q=r(38669),X=r(99228),Z=r(14161),J=r(87874);function ee(e,i,r){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return`${e}?w=${i*n}&h=${r*t}&fit=crop&auto=format 1x,\n  ${e}?w=${i*n}&h=${r*t}&fit=crop&auto=format&dpr=2 2x`}const ie=e=>{let{itemData:i}=e;const{borderRadius:r}=(0,J.A)();return(0,D.jsx)(Z.A,{sx:{transform:"translateZ(0)",overflowY:"visible",mb:0},gap:8,children:i.map((e=>{const i=e.featured?2:1,t=e.featured?2:1;return(0,D.jsxs)(Q.A,{cols:i,rows:t,sx:{overflow:"hidden",borderRadius:`${r}px`},children:[(0,D.jsx)("img",{srcSet:ee(`assets/images/profile/${e.img}`,250,200,t,i),alt:e.title,loading:"lazy"}),(0,D.jsx)(X.A,{sx:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},title:e.title,position:"top",actionPosition:"left"})]},e.img)}))})};var re=r(24551),te=r(46748),ne=r(90150),se=r(45394),ae=r(56880);const le=r(40630),oe=C.Ik().shape({name:C.Yj().required("Comment Field is Required")}),de=e=>{let{bug:i,label:r,size:t,fullWidth:n=!0,name:s,required:a,...l}=e,d=!1,c="";return i&&Object.prototype.hasOwnProperty.call(i,s)&&(d=!0,c=i[s].message),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L.xI,{name:s,defaultValue:"",render:e=>{let{field:i}=e;return(0,D.jsx)(u.A,{fullWidth:n,size:t,label:r,InputLabelProps:{className:a?"required-label":"",required:a||!1},error:d,...i})},...l}),c&&(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(g.A,{error:!0,children:c})})]})},ce=e=>{let{commentAdd:i,handleCommentLikes:r,handlePostLikes:n,handleReplayLikes:s,post:l,replyAdd:h}=e;const m=(0,a.A)(),{user:j}=(0,H.A)(),{id:A,data:u}=l;let{profile:g}=l;g={...g,name:(null===j||void 0===j?void 0:j.name)||g.name};const{borderRadius:C}=(0,J.A)(),S=(0,v.A)(m.breakpoints.down("md")),[F,W]=t.useState(null),T=()=>{W(null)},[B,_]=t.useState(null),U=()=>{_(null)},[N,G]=t.useState(!(u.comments&&u.comments.length>0)),Y=()=>{G((e=>!e))};let Q=(0,D.jsx)(D.Fragment,{});u&&u.comments&&(Q=u.comments.map((e=>(0,D.jsx)(K,{postId:A,comment:e,user:g,replyAdd:h,handleCommentLikes:r,handleReplayLikes:s},e.id))));const X=(0,L.mN)({resolver:(0,R.t)(oe)}),{handleSubmit:Z,formState:{errors:ee},reset:ce}=X;return(0,D.jsx)(V.A,{children:(0,D.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,wrap:"nowrap",alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)($.A,{alt:"User 1",src:g.avatar&&le(`./${g.avatar}`)})}),(0,D.jsx)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{align:"left",variant:"h5",component:"div",children:g.name})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsxs)(c.A,{align:"left",variant:"caption",children:[(0,D.jsx)(E.A,{sx:{width:"10px",height:"10px",opacity:.5,m:"0 5px"}})," ",g.time]})})]})}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(k.A,{sx:{borderRadius:"12px"},onClick:e=>{W(e.currentTarget)},"aria-label":"more options",children:(0,D.jsx)($.A,{variant:"rounded",sx:{...m.typography.commonAvatar,...m.typography.smallAvatar,background:"dark"===m.palette.mode?m.palette.dark.main:m.palette.secondary.light,color:"dark"===m.palette.mode?m.palette.dark.light:m.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:m.palette.secondary.main,color:m.palette.secondary.light}},"aria-controls":"menu-post","aria-haspopup":"true",children:(0,D.jsx)(P.A,{fontSize:"inherit"})})}),(0,D.jsxs)(f.A,{id:"menu-post",anchorEl:F,keepMounted:!0,open:Boolean(F),onClose:T,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,D.jsx)(b.A,{onClick:T,children:"Edit"}),(0,D.jsx)(b.A,{onClick:T,children:"Delete"})]})]})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,sx:{"& > p":{...m.typography.body1,mb:0}},children:(0,D.jsx)(M.$,{remarkPlugins:[O.A],children:u.content})}),u&&u.images&&u.images.length>0&&(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(ie,{itemData:u.images})}),u.video&&(0,D.jsx)(o.Ay,{item:!0,xs:12,sx:{"&.MuiGrid-root":{pt:2}},children:(0,D.jsx)(d.A,{sx:{borderRadius:`${C}px`,height:330,[m.breakpoints.down("xl")]:{height:220}},component:"iframe",src:`https://www.youtube.com/embed/${u.video}`,"aria-label":"theme related video"})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,sx:{mt:0,color:"dark"===m.palette.mode?"grey.700":"grey.800"},children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsxs)(w.A,{direction:"row",spacing:2,children:[(0,D.jsxs)(x.A,{variant:"text",onClick:()=>n(A),color:"inherit",size:"small",startIcon:(0,D.jsx)(q.A,{color:u&&u.likes&&u.likes.like?"primary":"inherit"}),children:[u&&u.likes&&u.likes.value?u.likes.value:0,(0,D.jsx)(c.A,{color:"inherit",sx:{fontWeight:500,ml:.5,display:{xs:"none",sm:"block"}},children:"likes"})]}),(0,D.jsxs)(x.A,{onClick:Y,size:"small",variant:"text",color:"inherit",startIcon:(0,D.jsx)(ae.A,{color:"secondary"}),children:[u.comments?u.comments.length:0," comments"]})]})}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(p.A,{onClick:e=>{_(e.currentTarget)},size:"large","aria-label":"share options",children:(0,D.jsx)(re.A,{sx:{width:"16px",height:"16px"}})}),(0,D.jsxs)(f.A,{id:"menu-post",anchorEl:B,keepMounted:!0,open:Boolean(B),onClose:U,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiSvgIcon-root":{marginRight:"14px",fontSize:"1.25rem"}},children:[(0,D.jsxs)(b.A,{onClick:U,children:[(0,D.jsx)(re.A,{fontSize:"inherit"})," Share Now"]}),(0,D.jsxs)(b.A,{onClick:U,children:[(0,D.jsx)(te.A,{fontSize:"inherit"})," Share to Friends"]}),(0,D.jsxs)(b.A,{onClick:U,children:[(0,D.jsx)(ne.A,{fontSize:"inherit"})," Send in Messanger"]}),(0,D.jsxs)(b.A,{onClick:U,children:[(0,D.jsx)(se.A,{fontSize:"inherit"})," Copy Link"]})]})]})]})}),(0,D.jsx)(z.A,{in:N,sx:{width:"100%"},children:N&&(0,D.jsx)(o.Ay,{item:!0,xs:12,sx:{pt:2},children:(0,D.jsx)("form",{onSubmit:Z((async e=>{Y();const r={id:I()("#COMMENT_"),profile:g,data:{comment:e.name,likes:{like:!1,value:0},replies:[]}};i(A,r),ce({name:""})})),children:(0,D.jsxs)(o.Ay,{container:!0,spacing:2,alignItems:"flex-start",children:[(0,D.jsx)(o.Ay,{item:!0,sx:{display:{xs:"none",sm:"block"}},children:(0,D.jsx)($.A,{sx:{mt:.75},alt:"User 1",src:g.avatar&&le(`./${g.avatar}`),size:"xs"})}),(0,D.jsx)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,D.jsx)(L.Op,{...X,children:(0,D.jsx)(de,{fullWidth:!0,name:"name",label:"Write a comment...",size:S?"small":"medium",bug:ee})})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(y.A,{children:(0,D.jsx)(x.A,{type:"submit",variant:"contained",color:"secondary",size:S?"small":"large",sx:{mt:.5},children:"Comment"})})})]})})})}),Q]})})};var xe=r(13440),he=r(83482),me=r(69201),pe=r(89651),je=r(60348),Ae=r(47734),ue=r(70942),ye=r(88010),ge=r(44713),ve=r(53971),ke=r(96315);const fe=()=>{const e=(0,a.A)(),i=(0,he.wA)(),[r,n]=t.useState([]),s=(0,he.d4)((e=>e.user)),d=async()=>{i((0,me.K5)())};t.useEffect((()=>{n(s.posts)}),[s]),t.useEffect((()=>{d()}),[]);const h=async(e,r)=>{i((0,me.QA)(e,r))},m=async(e,r)=>{i((0,me.BC)(e,r))},g=async(e,r,t)=>{i((0,me.Oe)(e,r,t))},v=async e=>{i((0,me.kL)(e))},k=async(e,r)=>{i((0,me.tT)(e,r))},f=async(e,r,t)=>{i((0,me.cI)(e,r,t))},b={borderRadius:"8px",width:48,height:48,fontSize:"1.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"dark"===e.palette.mode?"1px solid":"none","&>svg":{width:24,height:24}};return(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:4,children:(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(V.A,{children:[(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(l.A,{sx:{...b,bgcolor:"dark"===e.palette.mode?e.palette.primary.main+20:"primary.light",border:"dark"===e.palette.mode?"1px solid":"none",borderColor:"primary.main",color:"primary.dark"},children:(0,D.jsx)(te.A,{})})}),(0,D.jsxs)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,D.jsx)(c.A,{variant:"h3",color:"primary",component:"div",sx:{mb:.625},children:"239k"}),(0,D.jsx)(c.A,{variant:"body2",children:"Friends"})]}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(p.A,{size:"large","aria-label":"navigation icon",children:(0,D.jsx)(ge.A,{})})})]}),(0,D.jsx)(j.A,{sx:{margin:"16px 0"}}),(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(l.A,{sx:{...b,bgcolor:"dark"===e.palette.mode?e.palette.secondary.main+20:"secondary.light",borderColor:"secondary.main",color:"secondary.dark"},children:(0,D.jsx)(ke.A,{})})}),(0,D.jsxs)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,D.jsx)(c.A,{variant:"h3",sx:{mb:.625,color:"dark"===e.palette.mode?e.palette.text.secondary:"secondary.main"},children:"234k"}),(0,D.jsx)(c.A,{variant:"body2",children:"Followers"})]}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(p.A,{size:"large","aria-label":"navigation icon",children:(0,D.jsx)(ge.A,{})})})]})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(V.A,{children:[(0,D.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(c.A,{variant:"h4",children:"About"})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(c.A,{variant:"body2",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."})})]}),(0,D.jsx)(j.A,{sx:{margin:"16px 0"}}),(0,D.jsxs)(o.Ay,{container:!0,spacing:2,sx:{"& >div":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",width:"100%"},"& a":{color:e.palette.grey[700],"& svg":{mr:1,verticalAlign:"bottom"},"&:hover":{color:e.palette.primary.main,textDecoration:"none"}}},children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(A.A,{href:"https://codedthemes.com/",target:"_blank",underline:"hover",children:[(0,D.jsx)(ve.A,{color:"secondary"})," https://codedthemes.com/"]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(A.A,{href:"https://www.instagram.com/codedthemes",target:"_blank",underline:"hover",children:[(0,D.jsx)(Ae.A,{sx:{color:e.palette.orange.dark}})," https://www.instagram.com/codedthemes"]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(A.A,{href:"https://www.facebook.com/codedthemes",target:"_blank",underline:"hover",children:[(0,D.jsx)(je.A,{color:"primary"})," https://www.facebook.com/codedthemes"]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(A.A,{href:"https://in.linkedin.com/company/codedthemes",target:"_blank",underline:"hover",children:[(0,D.jsx)(ye.A,{sx:{color:e.palette.grey[900]}})," https://in.linkedin.com/company/codedthemes"]})})]})]})})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:12,md:8,children:(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(V.A,{children:(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(u.A,{id:"outlined-textarea",placeholder:"What\u2019s on your mind, Larry?",rows:4,fullWidth:!0,multiline:!0})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,justifyContent:"space-between",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(x.A,{variant:"text",color:"secondary",startIcon:(0,D.jsx)(pe.A,{}),children:"Gallery"})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(y.A,{children:(0,D.jsx)(x.A,{variant:"contained",color:"secondary",startIcon:(0,D.jsx)(ue.A,{}),children:"Post"})})})]})})]})})}),r&&r.map((e=>(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsx)(ce,{post:e,editPost:h,renderPost:d,setPosts:n,commentAdd:m,replyAdd:g,handlePostLikes:v,handleCommentLikes:k,handleReplayLikes:f},e.id)},e.id)))]})})]})};var be=r(74050),we=r(19513),ze=r(28302);const Ce=()=>{const e=(0,he.wA)(),[i,r]=t.useState([]),n=(0,he.d4)((e=>e.user));t.useEffect((()=>{r(n.followers)}),[n]),t.useEffect((()=>{e((0,me.SR)())}),[]);const[s,a]=t.useState("");let l=(0,D.jsx)(D.Fragment,{});return i&&(l=i.map(((e,i)=>(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,D.jsx)(we.A,{...e})},i)))),(0,D.jsx)(V.A,{title:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{variant:"h3",children:"Followers"})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(be.A,{size:"small",id:"input-search-user-profile",placeholder:"Search Followers",value:s,onChange:async i=>{const r=null===i||void 0===i?void 0:i.target.value;a(r),e(r?(0,me.Kh)(r):(0,me.SR)())},startAdornment:(0,D.jsx)(W.A,{position:"start",children:(0,D.jsx)(ze.A,{stroke:1.5,size:"16px"})})})})]}),children:(0,D.jsx)(o.Ay,{container:!0,direction:"row",spacing:xe.iL,children:l})})};var Se=r(44246);const Ie=()=>{const e=(0,a.A)(),i=(0,he.wA)(),[r,n]=t.useState([]),s=(0,he.d4)((e=>e.user));t.useEffect((()=>{n(s.friends)}),[s]),t.useEffect((()=>{i((0,me.M7)())}),[]);let l=(0,D.jsx)(D.Fragment,{});r&&(l=r.map(((e,i)=>(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,D.jsx)(Se.A,{...e})},i))));const[d,x]=t.useState("");return(0,D.jsx)(V.A,{title:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsxs)(c.A,{variant:"h3",children:["Friends"," ",(0,D.jsx)(c.A,{variant:"h3",component:"span",sx:{color:e.palette.grey[300],fontWeight:500},children:"(463)"})]})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(be.A,{size:"small",id:"input-search-user-profile",placeholder:"Search",value:d,onChange:async e=>{const r=null===e||void 0===e?void 0:e.target.value;x(r),i(r?(0,me.g7)(r):(0,me.M7)())},startAdornment:(0,D.jsx)(W.A,{position:"start",children:(0,D.jsx)(ze.A,{stroke:1.5,size:"16px"})})})})]}),children:(0,D.jsx)(o.Ay,{container:!0,direction:"row",spacing:xe.iL,children:l})})};var Le=r(26494),Re=r(36650);const Me=r(43229),Oe=e=>{let{dateTime:i,image:r,title:n}=e;const s=(0,a.A)(),l=r&&Me(`./${r}`),[x,h]=(0,t.useState)(null),m=()=>{h(null)};return(0,D.jsxs)(F.A,{sx:{background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"dark"===s.palette.mode?"none":"1px solid",borderColor:s.palette.grey[100]},children:[(0,D.jsx)(d.A,{component:"img",image:l,title:"Slider5 image"}),(0,D.jsx)(Le.A,{sx:{p:2,pb:"16px !important"},children:(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsxs)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,D.jsx)(c.A,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",mb:.5},children:n}),(0,D.jsxs)(c.A,{variant:"caption",sx:{mt:1,fontSize:"12px"},children:[(0,D.jsx)(Re.A,{sx:{mr:.5,fontSize:"0.875rem",verticalAlign:"text-top"}}),i]})]}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(k.A,{sx:{borderRadius:"12px"},onClick:e=>{h(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,D.jsx)($.A,{variant:"rounded",sx:{...s.typography.commonAvatar,...s.typography.mediumAvatar,background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.secondary.light,color:"dark"===s.palette.mode?s.palette.dark.light:s.palette.secondary.dark,zIndex:1,transition:"all .2s ease-in-out",'&[aria-controls="menu-list-grow"],&:hover':{background:s.palette.secondary.main,color:s.palette.secondary.light}},"aria-haspopup":"true",children:(0,D.jsx)(P.A,{fontSize:"inherit"})})}),(0,D.jsxs)(f.A,{id:"menu-gallery-card",anchorEl:x,keepMounted:!0,open:Boolean(x),onClose:m,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,D.jsx)(b.A,{onClick:m,children:" Remove Tag"}),(0,D.jsx)(b.A,{onClick:m,children:" Download"}),(0,D.jsx)(b.A,{onClick:m,children:" Make Profile Picture "}),(0,D.jsx)(b.A,{onClick:m,children:" Make Cover Photo "}),(0,D.jsx)(b.A,{onClick:m,children:" Find Support or Report Photo "})]})]})]})})]})},Fe=()=>{const e=(0,he.wA)(),[i,r]=t.useState([]),n=(0,he.d4)((e=>e.user));t.useEffect((()=>{r(n.gallery)}),[n]),t.useEffect((()=>{e((0,me.x3)())}),[]);let s=(0,D.jsx)(D.Fragment,{});return i&&(s=i.map(((e,i)=>(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,D.jsx)(Oe,{...e})},i)))),(0,D.jsx)(V.A,{title:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{variant:"h3",children:"Gallery"})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(x.A,{variant:"contained",color:"secondary",children:"Add Photos"})})]}),children:(0,D.jsx)(o.Ay,{container:!0,direction:"row",spacing:xe.iL,children:s})})};var We=r(60587),$e=r(2050),Ee=r(2865),Pe=r(92516),qe=r(60677),Te=r(73559);const De=r(40630),Be=e=>{let{avatar:i,name:r,mutual:n}=e;const s=(0,a.A)(),l=i&&De(`./${i}`),d={borderColor:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[200],background:"dark"===s.palette.mode?s.palette.dark.dark:s.palette.background.paper},[h,m]=(0,t.useState)(null),j=()=>{m(null)};return(0,D.jsx)(F.A,{sx:{p:2,background:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[50],border:"1px solid",borderColor:"dark"===s.palette.mode?s.palette.dark.main:s.palette.grey[100],"&:hover":{border:`1px solid${s.palette.primary.main}`}},children:(0,D.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(We.A,{alt:"User 1",src:l})}),(0,D.jsxs)(o.Ay,{item:!0,xs:!0,zeroMinWidth:!0,children:[(0,D.jsx)(c.A,{variant:"h5",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:r}),(0,D.jsxs)(c.A,{variant:"subtitle2",sx:{mt:.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:[n," mutual friends"]})]}),(0,D.jsxs)(o.Ay,{item:!0,children:[(0,D.jsx)(p.A,{size:"small",sx:{mt:-.75,mr:-.75},onClick:e=>{m(null===e||void 0===e?void 0:e.currentTarget)},"aria-label":"more options",children:(0,D.jsx)(Ee.A,{fontSize:"small",color:"primary","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),(0,D.jsxs)(f.A,{id:"menu-friend-card",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:j,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,D.jsxs)(b.A,{onClick:j,children:[(0,D.jsx)($e.A,{children:(0,D.jsx)(Pe.A,{fontSize:"small"})}),"Favorites"]}),(0,D.jsxs)(b.A,{onClick:j,children:[(0,D.jsx)($e.A,{children:(0,D.jsx)(Te.A,{fontSize:"small"})}),"Edit Friend List"]}),(0,D.jsxs)(b.A,{onClick:j,children:[(0,D.jsx)($e.A,{children:(0,D.jsx)(qe.A,{fontSize:"small"})}),"Unfriend"]})]})]})]})}),(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(o.Ay,{container:!0,spacing:1,children:[(0,D.jsx)(o.Ay,{item:!0,xs:6,children:(0,D.jsx)(x.A,{variant:"outlined",fullWidth:!0,sx:d,children:"Confirm"})}),(0,D.jsx)(o.Ay,{item:!0,xs:6,children:(0,D.jsx)(x.A,{variant:"outlined",fullWidth:!0,color:"error",sx:d,children:"Delete"})})]})})]})})},_e=()=>{const e=(0,he.wA)(),[i,r]=t.useState([]),n=(0,he.d4)((e=>e.user)),[s,a]=t.useState("");t.useEffect((()=>{r(n.friendRequests)}),[n]),t.useEffect((()=>{e((0,me.Ro)())}),[]);let l=(0,D.jsx)(D.Fragment,{});return i&&(l=i.map(((e,i)=>(0,D.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,D.jsx)(Be,{...e})},i)))),(0,D.jsx)(V.A,{title:(0,D.jsxs)(o.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(c.A,{variant:"h3",children:"Friend Request"})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(be.A,{size:"small",id:"input-search-user-profile",placeholder:"Search Friends",value:s,onChange:async i=>{const r=null===i||void 0===i?void 0:i.target.value;a(r),e(r?(0,me.r1)(r):(0,me.Ro)())},startAdornment:(0,D.jsx)(W.A,{position:"start",children:(0,D.jsx)(ze.A,{stroke:1.5,size:"16px"})})})})]}),children:(0,D.jsx)(o.Ay,{container:!0,direction:"row",spacing:xe.iL,children:l})})};var Ue=r(3009),Ne=r(78185);const Ge=e=>{let{...i}=e;return(0,D.jsx)(Ne.A,{variant:"rectangular",...i,animation:"wave"})};var Ye=r(31932),Ke=r(37300),Ve=r(24457),He=r(87812),Qe=r(54077),Xe=r(11678),Ze=r(30987),Je=r(39754);function ei(e){let{children:i,value:r,index:t,...n}=e;return(0,D.jsx)("div",{role:"tabpanel",hidden:r!==t,id:`simple-tabpanel-${t}`,"aria-labelledby":`simple-tab-${t}`,...n,children:r===t&&(0,D.jsx)(l.A,{sx:{p:0},children:i})})}function ii(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const ri=[{to:"/apps/user/social-profile/posts",icon:(0,D.jsx)(Ye.A,{stroke:1.5,size:"17px"}),label:"Profile"},{to:"/apps/user/social-profile/follower",icon:(0,D.jsx)(Ke.A,{stroke:1.5,size:"17px"}),label:"Followers"},{to:"/apps/user/social-profile/friends",icon:(0,D.jsx)(Ve.A,{stroke:1.5,size:"17px"}),label:(0,D.jsxs)(D.Fragment,{children:["friends ",(0,D.jsx)(Ue.A,{label:"100",size:"small",chipcolor:"secondary",sx:{ml:1.5}})]})},{to:"/apps/user/social-profile/gallery",icon:(0,D.jsx)(He.A,{stroke:1.5,size:"17px"}),label:"Gallery"},{to:"/apps/user/social-profile/friend-request",icon:(0,D.jsx)(Qe.A,{stroke:1.5,size:"17px"}),label:"Friend Request"}],ti=()=>{const e=(0,a.A)(),{user:i}=(0,H.A)(),{borderRadius:r}=(0,J.A)(),{tab:l}=(0,n.g)();let p=0;switch(l){case"follower":p=1;break;case"friends":p=2;break;case"gallery":p=3;break;case"friend-request":p=4;break;default:p=0}const[j,A]=t.useState(p),[u,y]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{y(!1)}),[]),(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,children:(0,D.jsxs)(V.A,{contentSX:{p:1.5,paddingBottom:"0px !important",[e.breakpoints.down("lg")]:{textAlign:"center"}},children:[u?(0,D.jsx)(Ge,{sx:{borderRadius:`${r}px`,overflow:"hidden",mb:3,height:{xs:85,sm:150,md:260}}}):(0,D.jsx)(d.A,{component:"img",image:Je,sx:{borderRadius:`${r}px`,overflow:"hidden",mb:3},alt:"pro images"}),(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsx)(o.Ay,{item:!0,xs:12,md:3,children:u?(0,D.jsx)(Ge,{sx:{margin:"-70px 0 0 auto",borderRadius:"16px",[e.breakpoints.down("lg")]:{margin:"-70px auto 0"},[e.breakpoints.down("md")]:{margin:"-60px auto 0"},width:{xs:72,sm:100,md:140},height:{xs:72,sm:100,md:140}}}):(0,D.jsx)($.A,{alt:"User 1",src:Ze,sx:{margin:"-70px 0 0 auto",borderRadius:"16px",[e.breakpoints.down("lg")]:{margin:"-70px auto 0"},[e.breakpoints.down("md")]:{margin:"-60px auto 0"},width:{xs:72,sm:100,md:140},height:{xs:72,sm:100,md:140}}})}),(0,D.jsxs)(o.Ay,{item:!0,xs:12,md:9,children:[(0,D.jsxs)(o.Ay,{container:!0,spacing:xe.iL,children:[(0,D.jsxs)(o.Ay,{item:!0,xs:12,md:4,children:[(0,D.jsx)(c.A,{variant:"h5",children:null===i||void 0===i?void 0:i.name}),(0,D.jsx)(c.A,{variant:"subtitle2",children:"Android Developer"})]}),(0,D.jsx)(o.Ay,{item:!0,xs:12,md:8,children:(0,D.jsxs)(o.Ay,{container:!0,spacing:1,sx:{justifyContent:"flex-end",[e.breakpoints.down("lg")]:{justifyContent:"center"}},children:[(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(x.A,{variant:"outlined",children:"Message"})}),(0,D.jsx)(o.Ay,{item:!0,children:(0,D.jsx)(x.A,{variant:"contained",startIcon:(0,D.jsx)(Xe.A,{}),children:"Send Request"})})]})})]}),(0,D.jsx)(o.Ay,{container:!0,justifyContent:"flex-end",children:(0,D.jsx)(h.A,{value:j,variant:"scrollable",onChange:(e,i)=>{A(i)},sx:{marginTop:2.5,"& .MuiTabs-flexContainer":{border:"none"},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:"dark"===e.palette.mode?"grey.600":"grey.900",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},"& a.Mui-selected":{color:"primary.main"},"& a > svg":{marginBottom:"4px !important",mr:1.25}},children:ri.map(((e,i)=>(0,D.jsx)(m.A,{component:s.N_,to:e.to,icon:e.icon,label:e.label,...ii(i)},i)))})})]})]})]})}),(0,D.jsxs)(o.Ay,{item:!0,xs:12,children:[(0,D.jsx)(ei,{value:j,index:0,children:(0,D.jsx)(fe,{})}),(0,D.jsx)(ei,{value:j,index:1,children:(0,D.jsx)(Ce,{})}),(0,D.jsx)(ei,{value:j,index:2,children:(0,D.jsx)(Ie,{})}),(0,D.jsx)(ei,{value:j,index:3,children:(0,D.jsx)(Fe,{})}),(0,D.jsx)(ei,{value:j,index:4,children:(0,D.jsx)(_e,{})})]})]})}}}]);
//# sourceMappingURL=8875.cc99dea0.chunk.js.map