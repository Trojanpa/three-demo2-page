"use strict";(self["webpackChunkthree_demo2"]=self["webpackChunkthree_demo2"]||[]).push([[465,578],{7578:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu"},[n("a-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),n("a-menu",{attrs:{"default-selected-keys":["/demo1"],"default-open-keys":["detail-menu"],mode:"inline","inline-collapsed":e.collapsed}},[n("a-sub-menu",{key:"demo-menu"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"mail"}}),n("span",[e._v("学习示例")])],1),e._l(e.studyRoutes,(function(t,a){return n("a-menu-item",{key:t.path,on:{click:function(n){return e.chooseMenu(t.path)}}},[e._v(" "+e._s(a+1)+". "+e._s(t.meta.title)+" ")])}))],2),n("a-sub-menu",{key:"detail-menu"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"appstore"}}),n("span",[e._v("详细示例")])],1),e._l(e.demoRoutes,(function(t,a){return n("a-menu-item",{key:t.path,on:{click:function(n){return e.chooseMenu(t.path)}}},[e._v(" "+e._s(a+1)+". "+e._s(t.meta.title)+" ")])}))],2)],1)],1)},s=[],l=n(17),u={name:"NavMenu",data(){return{studyRoutes:l.y,demoRoutes:l.P,collapsed:!0}},methods:{toggleCollapsed(){this.collapsed=!this.collapsed},chooseMenu(e){this.$route.path!==e&&this.$router.push(e)}}},o=u,i=n(1001),r=(0,i.Z)(o,a,s,!1,null,"6074ae59",null),c=r.exports},6465:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("div",{staticClass:"layout-menu"},[n("nav-menu")],1),n("div",{staticClass:"layout-content"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)])},s=[],l=n(7578),u={name:"Layout",components:{NavMenu:l["default"]}},o=u,i=n(1001),r=(0,i.Z)(o,a,s,!1,null,"0ed0ac96",null),c=r.exports}}]);