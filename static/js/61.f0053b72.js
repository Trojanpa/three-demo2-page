"use strict";(self["webpackChunkthree_demo2"]=self["webpackChunkthree_demo2"]||[]).push([[61],{7061:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo5"},[i("div",{attrs:{id:"demo5Id"}}),i("div",{attrs:{id:"stats5Id"}})])}],o=(i(8675),i(3462),i(4543)),r=i(1114),a=i(2606),h=i.n(a),l=i(5461);let d;var c={name:"Demo5",data(){return{scene:null,camera:null,renderer:null,axes:null,planeGeometry:null,planeMaterial:null,plane:null,ambientLight:null,spotLight:null,stats:null,ctrl:null,ctrl2:null,torusgeo:null,torusgeoMaterial:null,torus:null,cylindergeo:null,cylindergeoMaterial:null,cylinder:null,defineGeometry:null,vertices:null,attribue:null,defineMaterial:null,define:null,refGeo:null,refMaterial:null,redCube:null,showGeo:null,showMaterial:null,showCube:null,ctrlObj:{scaleX:1,scaleY:1,scaleZ:1,positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,visible:!0,translateX:0,translateY:0,translateZ:0},controls:null}},mounted(){d=this,this.init(),window.addEventListener("resize",this.onWindowResize.bind(this))},methods:{init(){this.scene=new r.xsS,this.camera=new r.cPb(75,window.innerWidth/window.innerHeight/2,.1,1e3),this.renderer=new r.CP7,this.renderer.setClearColor(new r.Ilk(0)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("demo5Id").appendChild(this.renderer.domElement),this.axes=new r.y8_(50),this.scene.add(this.axes),this.refGeo=new r.DvJ(8,8,8),this.refMaterial=new r.YBo({color:"#ff2288"}),this.redCube=new r.Kj0(this.refGeo,this.refMaterial),this.redCube.castShadow=!0,this.redCube.position.x=0,this.redCube.position.y=30,this.redCube.position.z=0,this.scene.add(this.redCube),this.showGeo=new r.DvJ(8,8,8),this.showMaterial=new r.YBo({color:"#00ff00"}),this.showCube=new r.Kj0(this.showGeo,this.showMaterial),this.showCube.castShadow=!0,this.showCube.position.x=0,this.showCube.position.y=10,this.showCube.position.z=0,this.scene.add(this.showCube),this.ctrl=new l.ZP.GUI,this.ctrl.add(this.ctrlObj,"scaleX",0,5),this.ctrl.add(this.ctrlObj,"scaleY",0,5),this.ctrl.add(this.ctrlObj,"scaleZ",0,5),this.ctrl.add(this.ctrlObj,"positionX",-30,30),this.ctrl.add(this.ctrlObj,"positionY",-30,30),this.ctrl.add(this.ctrlObj,"positionZ",-30,30),this.ctrl.add(this.ctrlObj,"rotationX",-5,5),this.ctrl.add(this.ctrlObj,"rotationY",-5,5),this.ctrl.add(this.ctrlObj,"rotationZ",-5,5),this.ctrl.add(this.ctrlObj,"visible"),this.ctrl.add(this.ctrlObj,"translateX",-25,25),this.ctrl.add(this.ctrlObj,"translateY",-25,25),this.ctrl.add(this.ctrlObj,"translateZ",-25,25),this.torusgeo=new r.XvJ(10,2,10,10,2*Math.PI),this.torusgeoMaterial=new r.YBo({color:16720520}),this.torus=new r.Kj0(this.torusgeo,this.torusgeoMaterial),this.torus.castShadow=!0,this.torus.position.x=30,this.torus.position.y=10,this.torus.position.z=0,this.scene.add(this.torus),this.cylindergeo=new r.fHI(4,4,14),this.cylindergeoMaterial=new r.YBo({color:16720520}),this.cylinder=new r.Kj0(this.cylindergeo,this.cylindergeoMaterial),this.cylinder.castShadow=!0,this.cylinder.position.x=-20,this.cylinder.position.y=10,this.cylinder.position.z=-10,this.scene.add(this.cylinder),this.defineGeometry=new r.u9r,this.vertices=new Float32Array([0,0,0,10,0,0,0,10,0,10,0,0,0,10,0,10,10,0,0,0,0,0,10,0,0,10,10,0,10,10,0,0,0,0,0,10,10,0,0,10,10,0,10,10,10,10,0,0,10,0,10,10,10,10,0,0,0,0,0,10,10,0,0,10,0,0,10,0,10,0,0,10,0,10,0,0,10,10,10,10,0,10,10,0,10,10,10,0,10,10,0,0,10,10,0,10,0,10,10,10,0,10,0,10,10,10,10,10,10,10,0,0,10,0,2,20,5,0,10,0,0,10,10,2,20,5,0,10,10,10,10,10,2,20,5,10,10,10,10,10,0,2,20,5]),this.attribue=new r.TlE(this.vertices,3),this.defineGeometry.attributes.position=this.attribue,this.defineMaterial=new r.vBJ({color:255,side:r.ehD}),this.define=new r.Kj0(this.defineGeometry,this.defineMaterial),this.define.position.x=0,this.define.position.y=0,this.define.position.z=20,this.scene.add(this.define);const t=new r.Uk6(this.defineGeometry),e=new r.ejS(t);e.material.depthTest=!0,e.material.transparent=!0,e.material.opacity=.5,e.position.x=0,e.position.y=0,e.position.z=20,this.scene.add(e),this.ctrl2=new l.ZP.GUI,this.ctrl2.add(new function(){this.clone=function(){const t=d.define.geometry.clone(),e=new r.vBJ({color:16711680,side:r.ehD}),i=new r.Kj0(t,e);i.translateZ(40),i.name="copy",d.scene.remove(d.scene.getObjectByName("copy")),d.scene.add(i);const s=new r.Uk6(t),n=new r.ejS(s);n.material.depthTest=!0,n.translateZ(40),d.scene.add(n)}},"clone"),this.planeGeometry=new r._12(100,100),this.planeMaterial=new r.YBo({color:13421772}),this.plane=new r.Kj0(this.planeGeometry,this.planeMaterial),this.plane.rotation.x=-.5*Math.PI,this.plane.position.set(15,0,0),this.plane.receiveShadow=!0,this.scene.add(this.plane),this.camera.position.x=-30,this.camera.position.y=140,this.camera.position.z=30,this.camera.lookAt(this.scene.position),this.scene.add(this.camera),this.spotLight=new r.PMe(16777215),this.spotLight.position.set(-60,30,-65),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize=new r.FM8(1024,1024),this.spotLight.shadow.camera.far=130,this.spotLight.shadow.camera.near=40,this.scene.add(this.spotLight),this.ambientLight=new r.Mig(11184810,2),this.scene.add(this.ambientLight),this.addStats(),this.createControls(),this.renderScene(),console.log(this.scene.children)},renderScene(){this.stats.update(),this.showCube.scale.set(this.ctrlObj.scaleX,this.ctrlObj.scaleY,this.ctrlObj.scaleZ),this.showCube.position.set(this.ctrlObj.positionX,this.ctrlObj.positionY,this.ctrlObj.positionZ),this.showCube.rotation.set(this.ctrlObj.rotationX,this.ctrlObj.rotationY,this.ctrlObj.rotationZ),this.showCube.visible=this.ctrlObj.visible,this.showCube.translateX(this.ctrlObj.translateX),this.showCube.translateY(this.ctrlObj.translateY),this.showCube.translateZ(this.ctrlObj.translateZ),requestAnimationFrame(this.renderScene),this.renderer.render(this.scene,this.camera)},addStats(){this.stats=new(h()),this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",this.stats.setMode(0),document.getElementById("stats5Id").appendChild(this.stats.domElement)},onWindowResize(t){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},createControls(){this.controls=new o.z(this.camera,this.renderer.domElement),this.controls.target=new r.Pa4(0,0,0),this.controls.autoRotate=!1;const t=new r.SUY,e=t.getDelta();this.controls.update(e)}}},u=c,w=i(1001),p=(0,w.Z)(u,s,n,!1,null,"75dca60b",null),b=p.exports}}]);