"use strict";(self["webpackChunkken_cirweb"]=self["webpackChunkken_cirweb"]||[]).push([[444],{3727:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(6570),i=n(266),l=n(2118),s=n(4324),r=n(1713),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"about"}},[e(l.Z,{staticClass:"text-center"},[e("h1",{staticClass:"pa-10"},[t._v("About Me")]),e("h3",{staticClass:"mt-5"},[t._v("Name: Ken_Cir(けんちる)")]),e("h3",{staticClass:"mt-16"},[t._v(" 趣味: プログラミング・イラスト・東方・STG・音ゲー・Vtuberなど ")]),e("h4",{staticClass:"mt-16"},[t._v(" プログラミングを趣味としている謎の人です"),e("br"),t._v("色んなものを気まぐれで作っています"),e("br"),t._v("PocketMine-MP Plugin Developer"),e("br"),t._v("DiscordBot Developer ")]),e(r.Z,{staticClass:"mt-5"},[e(i.Z,[e(a.Z,{attrs:{text:"",href:"https://github.com/KenCir",target:"_blank"}},[e(s.Z,{attrs:{left:"",color:"#211F1F"}},[t._v("mdi-github")]),e("span",[t._v("Github")])],1)],1),e(i.Z,[e(a.Z,{attrs:{text:"",href:"https://Twitter.com/Ken_Cir",target:"_blank"}},[e(s.Z,{attrs:{left:"",color:"#1DA1F2"}},[t._v("mdi-twitter")]),e("span",[t._v("Twitter")])],1)],1),e(i.Z,[e(s.Z,{attrs:{left:"",color:"#1DA1F2"}},[t._v("icon-discord")]),e("span",[t._v("Ken_Cir#0514")])],1)],1)],1)],1)},u=[],c={name:"About"},d=c,f=n(1001),g=(0,f.Z)(d,o,u,!1,null,"1fb40370",null),p=g.exports},1713:function(t,e,n){n(6699),n(1884);var a=n(144),i=n(1767),l=n(5352);const s=["sm","md","lg","xl"],r=["start","end","center"];function o(t,e){return s.reduce(((n,a)=>(n[t+(0,l.jC)(a)]=e(),n)),{})}const u=t=>[...r,"baseline","stretch"].includes(t),c=o("align",(()=>({type:String,default:null,validator:u}))),d=t=>[...r,"space-between","space-around"].includes(t),f=o("justify",(()=>({type:String,default:null,validator:d}))),g=t=>[...r,"space-between","space-around","stretch"].includes(t),p=o("alignContent",(()=>({type:String,default:null,validator:g}))),v={align:Object.keys(c),justify:Object.keys(f),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){let a=b[t];if(null!=n){if(e){const n=e.replace(t,"");a+=`-${n}`}return a+=`-${n}`,a.toLowerCase()}}const h=new Map;e["Z"]=a.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:a}){let l="";for(const i in e)l+=String(e[i]);let s=h.get(l);if(!s){let t;for(t in s=[],v)v[t].forEach((n=>{const a=e[n],i=_(t,n,a);i&&s.push(i)}));s.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),h.set(l,s)}return t(e.tag,(0,i.ZP)(n,{staticClass:"row",class:s}),a)}})}}]);
//# sourceMappingURL=444.1576b77e.js.map