"use strict";(self["webpackChunkthree_demo2"]=self["webpackChunkthree_demo2"]||[]).push([[144],{7144:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo18"},[n("div",{attrs:{id:"demo18Id"}}),n("div",{attrs:{id:"stats18Id"}})])}],r=n(9365),a=n(6428),d=n(1711),o=n(9477),h=n(3466),l=n.n(h),c=n(4376);let m;var b={name:"Demo18",data(){return{scene:null,camera:null,renderer:null,axes:null,stats:null,controls:null,ctrlObj:{size:80,height:20,curveSegments:4,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:4},textMesh:null,textFont:null}},mounted(){m=this,this.init(),window.addEventListener("resize",this.onWindowResize.bind(this))},methods:{init(){this.scene=new o.xsS,this.scene.background=new o.Ilk(3355443),this.camera=new o.cPb(75,window.innerWidth/window.innerHeight/2,.1,1e3),this.renderer=new o.CP7,this.renderer.setClearColor(new o.Ilk(0)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("demo18Id").appendChild(this.renderer.domElement),this.axes=new o.y8_(50),this.scene.add(this.axes);const e=new o.Ox3(16777215,1.25);e.position.set(0,100,-90),this.scene.add(e);const t=new o.Ox3(16777215,1.5);t.position.set(0,100,90),this.scene.add(t),this.camera.position.x=0,this.camera.position.y=200,this.camera.position.z=700,this.camera.lookAt(this.scene.position),this.scene.add(this.camera),this.addStats(),this.createControls();const n=new a.J;n.load("/static/fonts/KaiTi_Regular.json",(function(e){m.textFont=e;const t=new d.M("学习three.js",{font:m.textFont,size:80,height:20,curveSegments:4,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:4}),n=[new o.xoR({color:16777215,flatShading:!0}),new o.xoR({color:16777215})];m.textMesh=new o.Kj0(t,n),m.textMesh.position.set(-270,0,0),m.scene.add(m.textMesh)}));const s=new c.ZP.GUI;s.add(m.ctrlObj,"size",1,100).onChange((e=>{this.createText()})),s.add(m.ctrlObj,"height",0,100).onChange((e=>{this.createText()})),s.add(m.ctrlObj,"curveSegments",1,3).step(1).onChange((e=>{this.createText()})),s.add(m.ctrlObj,"bevelEnabled").onChange((e=>{this.createText()})),s.add(m.ctrlObj,"bevelThickness",0,100).onChange((e=>{this.createText()})),s.add(m.ctrlObj,"bevelSize",0,100).onChange((e=>{this.createText()})),s.add(m.ctrlObj,"bevelSegments",0,100).step(1).onChange((e=>{this.createText()})),this.renderScene()},createText(){this.scene.remove(m.textMesh);const e=new d.M("学习three.js",{font:m.textFont,size:m.ctrlObj.size,height:m.ctrlObj.height,curveSegments:m.ctrlObj.curveSegments,bevelEnabled:m.ctrlObj.bevelEnabled,bevelThickness:m.ctrlObj.bevelThickness,bevelSize:m.ctrlObj.bevelSize,bevelSegments:m.ctrlObj.bevelSegments}),t=[new o.xoR({color:16777215,flatShading:!0}),new o.xoR({color:16777215})];m.textMesh=new o.Kj0(e,t),m.textMesh.position.set(-270,0,0),m.scene.add(m.textMesh)},renderScene(){this.stats.update(),this.controls.update(),requestAnimationFrame(this.renderScene),this.renderer.render(this.scene,this.camera)},addStats(){this.stats=new(l()),this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",this.stats.setMode(0),document.getElementById("stats18Id").appendChild(this.stats.domElement)},onWindowResize(e){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},createControls(){this.controls=new r.z(this.camera,this.renderer.domElement),this.controls.update()}}},w=b,u=n(1001),x=(0,u.Z)(w,s,i,!1,null,"3dbdea31",null),v=x.exports}}]);