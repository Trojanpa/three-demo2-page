"use strict";(self["webpackChunkthree_demo2"]=self["webpackChunkthree_demo2"]||[]).push([[666],{77666:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo1"},[n("div",{attrs:{id:"demo1Id"}})])}],s=n(84543),o=n(53343),c={name:"Demo1",data:function(){return{scene:null,camera:null,renderer:null,geometry:null,material:null,cube:null,controls:null}},mounted:function(){console.log("当前使用的three.js的版本号：",window.__THREE__),console.log("当前使用的three.js的版本号：",o.UZH),console.log("当前使用的three.js的版本号：",o.UZH),this.init()},methods:{init:function(){this.scene=new o.xsS,this.camera=new o.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=100,this.scene.add(this.camera),this.renderer=new o.CP7({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.getElementById("demo1Id").appendChild(this.renderer.domElement),this.geometry=new o.DvJ(8,8,8),this.material=new o.vBJ({color:"#ff2288"}),this.cube=new o.Kj0(this.geometry,this.material),this.cube.rotation.x+=.8,this.cube.rotation.y+=.8,this.scene.add(this.cube),this.createControls(),this.renderScene(),console.log(this.scene.children)},createControls:function(){this.controls=new s.z(this.camera,this.renderer.domElement),this.controls.target=new o.Pa4(0,0,0),this.controls.autoRotate=!1;var e=new o.SUY,t=e.getDelta();this.controls.update(t)},renderScene:function(){requestAnimationFrame(this.renderScene),this.renderer.render(this.scene,this.camera)}}},l=c,a=n(1001),h=(0,a.Z)(l,r,i,!1,null,"301ee30f",null),d=h.exports}}]);