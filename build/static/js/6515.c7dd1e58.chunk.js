"use strict";(self.webpackChunkgestion_smart=self.webpackChunkgestion_smart||[]).push([[6515],{90266:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(65043);const o=()=>{const e=(0,n.useRef)(!0);return(0,n.useEffect)((()=>()=>{e.current=!1}),[]),e}},65100:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(88911),o=r(85865),s=r(88446),i=r(70579);const a=()=>(0,i.jsxs)(n.A,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(o.A,{variant:"subtitle2",component:s.A,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,i.jsx)(o.A,{variant:"subtitle2",component:s.A,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},55912:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96446),o=r(82330),s=r(70579);const i=e=>{let{children:t,...r}=e;return(0,s.jsx)(o.A,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,s.jsx)(n.A,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},83699:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(34535).Ay)("div")((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.grey[100],minHeight:"100vh"}}))},61375:(e,t,r)=>{r.d(t,{A:()=>z});var n=r(65043),o=r(73216),s=r(35475),i=r(26240),a=r(53193),l=r(18356),c=r(74050),d=r(81673),m=r(51787),h=r(17392),x=r(68903),u=r(74605),p=r(51962),A=r(85865),j=r(96446),g=r(42518),v=r(80899),b=r(63516),y=r(69889),f=r(90266),w=r(47260),k=r(72819),C=r(70579);const z=e=>{let{loginProp:t,...r}=e;const z=(0,i.A)(),S=(0,f.A)(),I=(0,o.Zp)(),[M,B]=n.useState(!0),[$,H]=n.useState(!1),E=()=>{H(!$)},P=e=>{e.preventDefault()},V="poseidon@poseidon.com",L="123456";return(0,C.jsx)(b.l1,{initialValues:{email:"",password:""},validationSchema:v.Ik().shape({email:v.Yj().email("Debe ser un email v\xe1lido").max(255).required("El Email / Usuario es obligatorio"),password:v.Yj().max(255).required("La contrase\xf1a es obligatoria")}),onSubmit:async(e,t)=>{let{setErrors:r,setStatus:n,setSubmitting:o}=t;try{e.email===V&&e.password===L?(console.log("Login exitoso, redirigiendo al dashboard"),I("/dashboard/default")):(console.log("Credenciales incorrectas"),r({submit:"Usuario o contrase\xf1a incorrectos"})),S.current&&(n({success:!0}),o(!1))}catch(s){console.error("Error en el login:",s),S.current&&(n({success:!1}),r({submit:s.message}),o(!1))}},children:e=>{let{errors:n,handleBlur:o,handleChange:i,handleSubmit:v,isSubmitting:b,touched:f,values:S}=e;return(0,C.jsxs)("form",{noValidate:!0,onSubmit:v,...r,children:[(0,C.jsxs)(a.A,{fullWidth:!0,error:Boolean(f.email&&n.email),sx:{...z.typography.customInput,color:"#000"},children:[(0,C.jsx)(l.A,{htmlFor:"outlined-adornment-email-login",children:"Correo / Usuario"}),(0,C.jsx)(c.A,{id:"outlined-adornment-email-login",type:"email",value:S.email,name:"email",onBlur:o,onChange:i,inputProps:{},sx:{color:"#000"}}),f.email&&n.email&&(0,C.jsx)(d.A,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]}),(0,C.jsxs)(a.A,{fullWidth:!0,error:Boolean(f.password&&n.password),sx:{...z.typography.customInput,marginTop:"10px",color:"#000"},children:[(0,C.jsx)(l.A,{htmlFor:"outlined-adornment-password-login",children:"Contrase\xf1a"}),(0,C.jsx)(c.A,{sx:{color:"#000"},id:"outlined-adornment-password-login",type:$?"text":"password",value:S.password,name:"password",onBlur:o,onChange:i,endAdornment:(0,C.jsx)(m.A,{position:"end",children:(0,C.jsx)(h.A,{"aria-label":"toggle password visibility",onClick:E,onMouseDown:P,edge:"end",size:"large",children:$?(0,C.jsx)(w.A,{}):(0,C.jsx)(k.A,{})})}),label:"Password"}),f.password&&n.password&&(0,C.jsx)(d.A,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]}),(0,C.jsxs)(x.Ay,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,C.jsx)(x.Ay,{item:!0,children:(0,C.jsx)(u.A,{control:(0,C.jsx)(p.A,{checked:M,onChange:e=>B(e.target.checked),name:"checked",color:"primary"}),label:"Mantenerme Logueado"})}),(0,C.jsx)(x.Ay,{item:!0,children:(0,C.jsx)(A.A,{variant:"subtitle1",component:s.N_,to:t?`/pages/forgot-password/forgot-password${t}`:"/pages/forgot-password/forgot-password3",color:"secondary",sx:{textDecoration:"none"},children:"\xbfOlvidaste tu contrase\xf1a?"})})]}),n.submit&&(0,C.jsx)(j.A,{sx:{mt:3},children:(0,C.jsx)(d.A,{error:!0,children:n.submit})}),(0,C.jsx)(j.A,{sx:{mt:2},children:(0,C.jsx)(y.A,{children:(0,C.jsx)(g.A,{color:"secondary",disabled:b,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Iniciar Sesi\xf3n"})})})]})}})}},56515:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(35475),o=r(26240),s=r(30344),i=r(68903),a=r(88911),l=r(85865),c=r(39336),d=r(83699),m=r(55912),h=r(61375),x=r(55434),u=r(65100),p=r(30342),A=r(70579);const j=()=>{const e=(0,o.A)(),{isLoggedIn:t}=(0,p.A)(),r=(0,s.A)(e.breakpoints.down("md"));return(0,A.jsx)(d.A,{children:(0,A.jsxs)(i.Ay,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,A.jsx)(i.Ay,{item:!0,xs:12,children:(0,A.jsx)(i.Ay,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,A.jsx)(i.Ay,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,A.jsx)(m.A,{children:(0,A.jsxs)(i.Ay,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,A.jsx)(i.Ay,{item:!0,sx:{mb:3},children:(0,A.jsx)(n.N_,{to:"#","aria-label":"theme-logo",children:(0,A.jsx)(x.A,{})})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,children:(0,A.jsx)(i.Ay,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,A.jsx)(i.Ay,{item:!0,children:(0,A.jsxs)(a.A,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,A.jsx)(l.A,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Hi, Welcome Back"}),(0,A.jsx)(l.A,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,children:(0,A.jsx)(h.A,{})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,children:(0,A.jsx)(c.A,{})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,children:(0,A.jsx)(i.Ay,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,A.jsx)(l.A,{component:n.N_,to:t?"/pages/register/register3":"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,A.jsx)(i.Ay,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,A.jsx)(u.A,{})})]})})}},47260:(e,t,r)=>{var n=r(24994);t.A=void 0;var o=n(r(40039)),s=r(70579),i=(0,o.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.A=i},72819:(e,t,r)=>{var n=r(24994);t.A=void 0;var o=n(r(40039)),s=r(70579),i=(0,o.default)((0,s.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.A=i},51962:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(98587),o=r(58168),s=r(65043),i=r(69292),a=r(98610),l=r(67266),c=r(33064),d=r(66734),m=r(70579);const h=(0,d.A)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,d.A)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=(0,d.A)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var p=r(6803),A=r(98206),j=r(34535),g=r(61475),v=r(92532),b=r(72372);function y(e){return(0,b.Ay)("MuiCheckbox",e)}const f=(0,v.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],k=(0,j.Ay)(c.A,{shouldForwardProp:e=>(0,g.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,t[`size${(0,p.A)(r.size)}`],"default"!==r.color&&t[`color${(0,p.A)(r.color)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.A)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,l.X4)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${f.checked}, &.${f.indeterminate}`]:{color:(t.vars||t).palette[r.color].main},[`&.${f.disabled}`]:{color:(t.vars||t).palette.action.disabled}})})),C=(0,m.jsx)(x,{}),z=(0,m.jsx)(h,{}),S=(0,m.jsx)(u,{}),I=s.forwardRef((function(e,t){var r,l;const c=(0,A.b)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=C,color:h="primary",icon:x=z,indeterminate:u=!1,indeterminateIcon:j=S,inputProps:g,size:v="medium",className:b}=c,f=(0,n.A)(c,w),I=u?j:x,M=u?j:d,B=(0,o.A)({},c,{color:h,indeterminate:u,size:v}),$=(e=>{const{classes:t,indeterminate:r,color:n,size:s}=e,i={root:["root",r&&"indeterminate",`color${(0,p.A)(n)}`,`size${(0,p.A)(s)}`]},l=(0,a.A)(i,y,t);return(0,o.A)({},t,l)})(B);return(0,m.jsx)(k,(0,o.A)({type:"checkbox",inputProps:(0,o.A)({"data-indeterminate":u},g),icon:s.cloneElement(I,{fontSize:null!=(r=I.props.fontSize)?r:v}),checkedIcon:s.cloneElement(M,{fontSize:null!=(l=M.props.fontSize)?l:v}),ownerState:B,ref:t,className:(0,i.A)($.root,b)},f,{classes:$}))}))}}]);
//# sourceMappingURL=6515.c7dd1e58.chunk.js.map