"use strict";(self["webpackChunkthree_demo2"]=self["webpackChunkthree_demo2"]||[]).push([[900],{900:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demo19"},[s("div",{attrs:{id:"demo19Id"}}),s("div",{attrs:{id:"stats19Id"}})])}],d=s(9365),a=s(9477),r=s(3466),o=s.n(r),h=s(4376);let l;var c={name:"Demo19",data(){return{scene:null,camera:null,renderer:null,axes:null,stats:null,controls:null,ctrlObj:{visible:!0,transparent:!1,opacity:1,side:"FrontSide",depthTest:!0,depthWrite:!0,alphaTest:1},ctrl:null}},mounted(){l=this,this.init(),window.addEventListener("resize",this.onWindowResize.bind(this))},methods:{init(){this.scene=new a.xsS,this.scene.background=new a.Ilk(3355443),this.camera=new a.cPb(75,window.innerWidth/window.innerHeight/2,.1,1e3),this.renderer=new a.CP7,this.renderer.setClearColor(new a.Ilk(0)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("demo19Id").appendChild(this.renderer.domElement),this.axes=new a.y8_(50),this.scene.add(this.axes);const e=new a.Ox3(16777215,1.25);e.position.set(0,100,-90),this.scene.add(e);const t=new a.Ox3(16777215,1.5);t.position.set(0,100,90),this.scene.add(t),this.camera.position.x=0,this.camera.position.y=10,this.camera.position.z=20,this.camera.lookAt(this.scene.position),this.scene.add(this.camera),this.addStats(),this.createControls();const s=new a._12(200,200,4,4),n=new a.vBJ({color:7829367}),i=new a.Kj0(s,n);i.rotation.x=-Math.PI/2,this.scene.add(i);const d=new a.DvJ(15,15,15),r=new a.vBJ({color:7829503}),o=new a.Kj0(d,r);this.scene.add(o),this.ctrl=new h.ZP.GUI;const l=this.ctrl.addFolder("基础属性");l.add(this.ctrlObj,"visible").onChange((e=>{r.visible=e})),l.add(this.ctrlObj,"transparent").onChange((e=>{r.transparent=e})),l.add(this.ctrlObj,"opacity",0,1).onChange((e=>{r.opacity=e,r.needsUpdate=!0})),l.add(this.ctrlObj,"side",["FrontSide","BackSide","DoubleSide"]).onChange((e=>{switch(e){case"FrontSide":r.side=a.Wl3;break;case"BackSide":r.side=a._Li;break;case"DoubleSide":r.side=a.ehD;break;default:break}r.needsUpdate=!0})),l.add(this.ctrlObj,"depthTest").onChange((e=>{r.depthTest=e})),l.add(this.ctrlObj,"depthWrite").onChange((e=>{r.depthWrite=e})),l.add(this.ctrlObj,"alphaTest",0,1).onChange((e=>{r.alphaTest=e}));const c=new a.dpR,p=c.load("static/textures/灰色外墙砖.jpg");r.map=p,this.renderScene()},renderScene(){this.stats.update(),this.controls.update(),requestAnimationFrame(this.renderScene),this.renderer.render(this.scene,this.camera)},addStats(){this.stats=new(o()),this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",this.stats.setMode(0),document.getElementById("stats19Id").appendChild(this.stats.domElement)},onWindowResize(e){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},createControls(){this.controls=new d.z(this.camera,this.renderer.domElement),this.controls.update()}}},p=c,m=s(1001),w=(0,m.Z)(p,n,i,!1,null,"0374956e",null),u=w.exports}}]);