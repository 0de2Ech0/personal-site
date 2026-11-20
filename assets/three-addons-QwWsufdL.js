import{E as at,V as p,M as I,T as F,S as Re,Q as Ae,a as d,R as nt,P as rt,b as lt,c as v,O as ct,B as ut,F as De,d as k,U as ee,W as J,H as $,N as ht,C as ft,e as te,A as dt,f as Fe,g as pt,h as mt,i as gt,L as bt,j as Tt,k as Mt,l as xt,m as vt,n as yt,o as wt,p as Oe,q as Ct,r as Et}from"./three-CDe5QGKf.js";const Le={type:"change"},ce={type:"start"},Ne={type:"end"},q=new nt,Ue=new rt,St=Math.cos(70*lt.DEG2RAD);class It extends at{constructor(s,o){super(),this.object=s,this.domElement=o,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new p,this.cursor=new p,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:I.ROTATE,MIDDLE:I.DOLLY,RIGHT:I.PAN},this.touches={ONE:F.ROTATE,TWO:F.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",re),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Le),e.update(),i=a.NONE},this.update=function(){const t=new p,n=new Ae().setFromUnitVectors(s.up,new p(0,1,0)),l=n.clone().invert(),h=new p,T=new Ae,L=new p,w=2*Math.PI;return function(ot=null){const _e=e.object.position;t.copy(_e).sub(e.target),t.applyQuaternion(n),r.setFromVector3(t),e.autoRotate&&i===a.NONE&&B(ke(ot)),e.enableDamping?(r.theta+=u.theta*e.dampingFactor,r.phi+=u.phi*e.dampingFactor):(r.theta+=u.theta,r.phi+=u.phi);let A=e.minAzimuthAngle,D=e.maxAzimuthAngle;isFinite(A)&&isFinite(D)&&(A<-Math.PI?A+=w:A>Math.PI&&(A-=w),D<-Math.PI?D+=w:D>Math.PI&&(D-=w),A<=D?r.theta=Math.max(A,Math.min(D,r.theta)):r.theta=r.theta>(A+D)/2?Math.max(A,r.theta):Math.min(D,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&Q||e.object.isOrthographicCamera?r.radius=ae(r.radius):r.radius=ae(r.radius*M),t.setFromSpherical(r),t.applyQuaternion(l),_e.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(u.theta*=1-e.dampingFactor,u.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(u.set(0,0,0),g.set(0,0,0));let le=!1;if(e.zoomToCursor&&Q){let Y=null;if(e.object.isPerspectiveCamera){const K=t.length();Y=ae(K*M);const W=K-Y;e.object.position.addScaledVector(he,W),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const K=new p(O.x,O.y,0);K.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/M)),e.object.updateProjectionMatrix(),le=!0;const W=new p(O.x,O.y,0);W.unproject(e.object),e.object.position.sub(W).add(K),e.object.updateMatrixWorld(),Y=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Y!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Y).add(e.object.position):(q.origin.copy(e.object.position),q.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(q.direction))<St?s.lookAt(e.target):(Ue.setFromNormalAndCoplanarPoint(e.object.up,e.target),q.intersectPlane(Ue,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/M)),e.object.updateProjectionMatrix(),le=!0);return M=1,Q=!1,le||h.distanceToSquared(e.object.position)>c||8*(1-T.dot(e.object.quaternion))>c||L.distanceToSquared(e.target)>0?(e.dispatchEvent(Le),h.copy(e.object.position),T.copy(e.object.quaternion),L.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Se),e.domElement.removeEventListener("pointerdown",we),e.domElement.removeEventListener("pointercancel",H),e.domElement.removeEventListener("wheel",Ce),e.domElement.removeEventListener("pointermove",ne),e.domElement.removeEventListener("pointerup",H),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",re),e._domElementKeyEvents=null)};const e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=a.NONE;const c=1e-6,r=new Re,u=new Re;let M=1;const g=new p,f=new d,m=new d,b=new d,C=new d,E=new d,P=new d,_=new d,R=new d,S=new d,he=new p,O=new d;let Q=!1;const x=[],G={};let se=!1;function ke(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function X(t){const n=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*n)}function B(t){u.theta-=t}function Z(t){u.phi-=t}const fe=function(){const t=new p;return function(l,h){t.setFromMatrixColumn(h,0),t.multiplyScalar(-l),g.add(t)}}(),de=function(){const t=new p;return function(l,h){e.screenSpacePanning===!0?t.setFromMatrixColumn(h,1):(t.setFromMatrixColumn(h,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(l),g.add(t)}}(),N=function(){const t=new p;return function(l,h){const T=e.domElement;if(e.object.isPerspectiveCamera){const L=e.object.position;t.copy(L).sub(e.target);let w=t.length();w*=Math.tan(e.object.fov/2*Math.PI/180),fe(2*l*w/T.clientHeight,e.object.matrix),de(2*h*w/T.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(fe(l*(e.object.right-e.object.left)/e.object.zoom/T.clientWidth,e.object.matrix),de(h*(e.object.top-e.object.bottom)/e.object.zoom/T.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function ie(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?M/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function pe(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?M*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function oe(t,n){if(!e.zoomToCursor)return;Q=!0;const l=e.domElement.getBoundingClientRect(),h=t-l.left,T=n-l.top,L=l.width,w=l.height;O.x=h/L*2-1,O.y=-(T/w)*2+1,he.set(O.x,O.y,1).unproject(e.object).sub(e.object.position).normalize()}function ae(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function me(t){f.set(t.clientX,t.clientY)}function ze(t){oe(t.clientX,t.clientX),_.set(t.clientX,t.clientY)}function ge(t){C.set(t.clientX,t.clientY)}function Be(t){m.set(t.clientX,t.clientY),b.subVectors(m,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;B(2*Math.PI*b.x/n.clientHeight),Z(2*Math.PI*b.y/n.clientHeight),f.copy(m),e.update()}function He(t){R.set(t.clientX,t.clientY),S.subVectors(R,_),S.y>0?ie(X(S.y)):S.y<0&&pe(X(S.y)),_.copy(R),e.update()}function Ye(t){E.set(t.clientX,t.clientY),P.subVectors(E,C).multiplyScalar(e.panSpeed),N(P.x,P.y),C.copy(E),e.update()}function Ke(t){oe(t.clientX,t.clientY),t.deltaY<0?pe(X(t.deltaY)):t.deltaY>0&&ie(X(t.deltaY)),e.update()}function Ve(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?B(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?B(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):N(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function be(t){if(x.length===1)f.set(t.pageX,t.pageY);else{const n=U(t),l=.5*(t.pageX+n.x),h=.5*(t.pageY+n.y);f.set(l,h)}}function Te(t){if(x.length===1)C.set(t.pageX,t.pageY);else{const n=U(t),l=.5*(t.pageX+n.x),h=.5*(t.pageY+n.y);C.set(l,h)}}function Me(t){const n=U(t),l=t.pageX-n.x,h=t.pageY-n.y,T=Math.sqrt(l*l+h*h);_.set(0,T)}function Qe(t){e.enableZoom&&Me(t),e.enablePan&&Te(t)}function Ge(t){e.enableZoom&&Me(t),e.enableRotate&&be(t)}function xe(t){if(x.length==1)m.set(t.pageX,t.pageY);else{const l=U(t),h=.5*(t.pageX+l.x),T=.5*(t.pageY+l.y);m.set(h,T)}b.subVectors(m,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;B(2*Math.PI*b.x/n.clientHeight),Z(2*Math.PI*b.y/n.clientHeight),f.copy(m)}function ve(t){if(x.length===1)E.set(t.pageX,t.pageY);else{const n=U(t),l=.5*(t.pageX+n.x),h=.5*(t.pageY+n.y);E.set(l,h)}P.subVectors(E,C).multiplyScalar(e.panSpeed),N(P.x,P.y),C.copy(E)}function ye(t){const n=U(t),l=t.pageX-n.x,h=t.pageY-n.y,T=Math.sqrt(l*l+h*h);R.set(0,T),S.set(0,Math.pow(R.y/_.y,e.zoomSpeed)),ie(S.y),_.copy(R);const L=(t.pageX+n.x)*.5,w=(t.pageY+n.y)*.5;oe(L,w)}function Xe(t){e.enableZoom&&ye(t),e.enablePan&&ve(t)}function Ze(t){e.enableZoom&&ye(t),e.enableRotate&&xe(t)}function we(t){e.enabled!==!1&&(x.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",ne),e.domElement.addEventListener("pointerup",H)),st(t),t.pointerType==="touch"?et(t):We(t))}function ne(t){e.enabled!==!1&&(t.pointerType==="touch"?tt(t):qe(t))}function H(t){it(t),x.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",ne),e.domElement.removeEventListener("pointerup",H)),e.dispatchEvent(Ne),i=a.NONE}function We(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case I.DOLLY:if(e.enableZoom===!1)return;ze(t),i=a.DOLLY;break;case I.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ge(t),i=a.PAN}else{if(e.enableRotate===!1)return;me(t),i=a.ROTATE}break;case I.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;me(t),i=a.ROTATE}else{if(e.enablePan===!1)return;ge(t),i=a.PAN}break;default:i=a.NONE}i!==a.NONE&&e.dispatchEvent(ce)}function qe(t){switch(i){case a.ROTATE:if(e.enableRotate===!1)return;Be(t);break;case a.DOLLY:if(e.enableZoom===!1)return;He(t);break;case a.PAN:if(e.enablePan===!1)return;Ye(t);break}}function Ce(t){e.enabled===!1||e.enableZoom===!1||i!==a.NONE||(t.preventDefault(),e.dispatchEvent(ce),Ke(Je(t)),e.dispatchEvent(Ne))}function Je(t){const n=t.deltaMode,l={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:l.deltaY*=16;break;case 2:l.deltaY*=100;break}return t.ctrlKey&&!se&&(l.deltaY*=10),l}function $e(t){t.key==="Control"&&(se=!0,document.addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(t){t.key==="Control"&&(se=!1,document.removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function re(t){e.enabled===!1||e.enablePan===!1||Ve(t)}function et(t){switch(Pe(t),x.length){case 1:switch(e.touches.ONE){case F.ROTATE:if(e.enableRotate===!1)return;be(t),i=a.TOUCH_ROTATE;break;case F.PAN:if(e.enablePan===!1)return;Te(t),i=a.TOUCH_PAN;break;default:i=a.NONE}break;case 2:switch(e.touches.TWO){case F.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(t),i=a.TOUCH_DOLLY_PAN;break;case F.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ge(t),i=a.TOUCH_DOLLY_ROTATE;break;default:i=a.NONE}break;default:i=a.NONE}i!==a.NONE&&e.dispatchEvent(ce)}function tt(t){switch(Pe(t),i){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;xe(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;ve(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Xe(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ze(t),e.update();break;default:i=a.NONE}}function Se(t){e.enabled!==!1&&t.preventDefault()}function st(t){x.push(t.pointerId)}function it(t){delete G[t.pointerId];for(let n=0;n<x.length;n++)if(x[n]==t.pointerId){x.splice(n,1);return}}function Pe(t){let n=G[t.pointerId];n===void 0&&(n=new d,G[t.pointerId]=n),n.set(t.pageX,t.pageY)}function U(t){const n=t.pointerId===x[0]?x[1]:x[0];return G[n]}e.domElement.addEventListener("contextmenu",Se),e.domElement.addEventListener("pointerdown",we),e.domElement.addEventListener("pointercancel",H),e.domElement.addEventListener("wheel",Ce,{passive:!1}),document.addEventListener("keydown",$e,{passive:!0,capture:!0}),this.update()}}const je={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pt=new ct(-1,1,1,-1,0,1);class _t extends ut{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}}const Rt=new _t;class ue{constructor(s){this._mesh=new v(Rt,s)}dispose(){this._mesh.geometry.dispose()}render(s){s.render(this._mesh,Pt)}get material(){return this._mesh.material}set material(s){this._mesh.material=s}}class At extends z{constructor(s,o){super(),this.textureID=o!==void 0?o:"tDiffuse",s instanceof k?(this.uniforms=s.uniforms,this.material=s):s&&(this.uniforms=ee.clone(s.uniforms),this.material=new k({name:s.name!==void 0?s.name:"unspecified",defines:Object.assign({},s.defines),uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader})),this.fsQuad=new ue(this.material)}render(s,o,e){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=e.texture),this.fsQuad.material=this.material,this.renderToScreen?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(o),this.clear&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),this.fsQuad.render(s))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ie extends z{constructor(s,o){super(),this.scene=s,this.camera=o,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(s,o,e){const a=s.getContext(),i=s.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let c,r;this.inverse?(c=0,r=1):(c=1,r=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),i.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),i.buffers.stencil.setClear(r),i.buffers.stencil.setLocked(!0),s.setRenderTarget(e),this.clear&&s.clear(),s.render(this.scene,this.camera),s.setRenderTarget(o),this.clear&&s.clear(),s.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(a.EQUAL,1,4294967295),i.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),i.buffers.stencil.setLocked(!0)}}class Dt extends z{constructor(){super(),this.needsSwap=!1}render(s){s.state.buffers.stencil.setLocked(!1),s.state.buffers.stencil.setTest(!1)}}class Ft{constructor(s,o){if(this.renderer=s,this._pixelRatio=s.getPixelRatio(),o===void 0){const e=s.getSize(new d);this._width=e.width,this._height=e.height,o=new J(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$}),o.texture.name="EffectComposer.rt1"}else this._width=o.width,this._height=o.height;this.renderTarget1=o,this.renderTarget2=o.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new At(je),this.copyPass.material.blending=ht,this.clock=new ft}swapBuffers(){const s=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=s}addPass(s){this.passes.push(s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(s,o){this.passes.splice(o,0,s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(s){const o=this.passes.indexOf(s);o!==-1&&this.passes.splice(o,1)}isLastEnabledPass(s){for(let o=s+1;o<this.passes.length;o++)if(this.passes[o].enabled)return!1;return!0}render(s){s===void 0&&(s=this.clock.getDelta());const o=this.renderer.getRenderTarget();let e=!1;for(let a=0,i=this.passes.length;a<i;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,s,e),c.needsSwap){if(e){const r=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,s),u.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Ie!==void 0&&(c instanceof Ie?e=!0:c instanceof Dt&&(e=!1))}}this.renderer.setRenderTarget(o)}reset(s){if(s===void 0){const o=this.renderer.getSize(new d);this._pixelRatio=this.renderer.getPixelRatio(),this._width=o.width,this._height=o.height,s=this.renderTarget1.clone(),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=s,this.renderTarget2=s.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(s,o){this._width=s,this._height=o;const e=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(e,a),this.renderTarget2.setSize(e,a);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(e,a)}setPixelRatio(s){this._pixelRatio=s,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jt extends z{constructor(s,o,e=null,a=null,i=null){super(),this.scene=s,this.camera=o,this.overrideMaterial=e,this.clearColor=a,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(s,o,e){const a=s.autoClear;s.autoClear=!1;let i,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(s.getClearColor(this._oldClearColor),s.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=s.getClearAlpha(),s.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&s.clearDepth(),s.setRenderTarget(this.renderToScreen?null:e),this.clear===!0&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),s.render(this.scene,this.camera),this.clearColor!==null&&s.setClearColor(this._oldClearColor),this.clearAlpha!==null&&s.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),s.autoClear=a}}const Ot={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class V extends z{constructor(s,o,e,a){super(),this.strength=o!==void 0?o:1,this.radius=e,this.threshold=a,this.resolution=s!==void 0?new d(s.x,s.y):new d(256,256),this.clearColor=new te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new J(i,c,{type:$}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const m=new J(i,c,{type:$});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const b=new J(i,c,{type:$});b.texture.name="UnrealBloomPass.v"+f,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),i=Math.round(i/2),c=Math.round(c/2)}const r=Ot;this.highPassUniforms=ee.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new k({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const u=[3,5,7,9,11];i=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new d(1/i,1/c),i=Math.round(i/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=o,this.compositeMaterial.uniforms.bloomRadius.value=.1;const M=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=M,this.bloomTintColors=[new p(1,1,1),new p(1,1,1),new p(1,1,1),new p(1,1,1),new p(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=je;this.copyUniforms=ee.clone(g.uniforms),this.blendMaterial=new k({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:dt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new te,this.oldClearAlpha=1,this.basic=new Fe,this.fsQuad=new ue(null)}dispose(){for(let s=0;s<this.renderTargetsHorizontal.length;s++)this.renderTargetsHorizontal[s].dispose();for(let s=0;s<this.renderTargetsVertical.length;s++)this.renderTargetsVertical[s].dispose();this.renderTargetBright.dispose();for(let s=0;s<this.separableBlurMaterials.length;s++)this.separableBlurMaterials[s].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(s,o){let e=Math.round(s/2),a=Math.round(o/2);this.renderTargetBright.setSize(e,a);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(e,a),this.renderTargetsVertical[i].setSize(e,a),this.separableBlurMaterials[i].uniforms.invSize.value=new d(1/e,1/a),e=Math.round(e/2),a=Math.round(a/2)}render(s,o,e,a,i){s.getClearColor(this._oldClearColor),this.oldClearAlpha=s.getClearAlpha();const c=s.autoClear;s.autoClear=!1,s.setClearColor(this.clearColor,0),i&&s.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=e.texture,s.setRenderTarget(null),s.clear(),this.fsQuad.render(s)),this.highPassUniforms.tDiffuse.value=e.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,s.setRenderTarget(this.renderTargetBright),s.clear(),this.fsQuad.render(s);let r=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this.fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[u].uniforms.direction.value=V.BlurDirectionX,s.setRenderTarget(this.renderTargetsHorizontal[u]),s.clear(),this.fsQuad.render(s),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=V.BlurDirectionY,s.setRenderTarget(this.renderTargetsVertical[u]),s.clear(),this.fsQuad.render(s),r=this.renderTargetsVertical[u];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,s.setRenderTarget(this.renderTargetsHorizontal[0]),s.clear(),this.fsQuad.render(s),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&s.state.buffers.stencil.setTest(!0),this.renderToScreen?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(e),this.fsQuad.render(s)),s.setClearColor(this._oldClearColor,this.oldClearAlpha),s.autoClear=c}getSeperableBlurMaterial(s){const o=[];for(let e=0;e<s;e++)o.push(.39894*Math.exp(-.5*e*e/(s*s))/s);return new k({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new d(.5,.5)},direction:{value:new d(.5,.5)},gaussianCoefficients:{value:o}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(s){return new k({defines:{NUM_MIPS:s},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}V.BlurDirectionX=new d(1,0);V.BlurDirectionY=new d(0,1);const Lt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kt extends z{constructor(){super();const s=Lt;this.uniforms=ee.clone(s.uniforms),this.material=new pt({name:s.name,uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.fsQuad=new ue(this.material),this._outputColorSpace=null,this._toneMapping=null}render(s,o,e){this.uniforms.tDiffuse.value=e.texture,this.uniforms.toneMappingExposure.value=s.toneMappingExposure,(this._outputColorSpace!==s.outputColorSpace||this._toneMapping!==s.toneMapping)&&(this._outputColorSpace=s.outputColorSpace,this._toneMapping=s.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vt&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(o),this.clear&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),this.fsQuad.render(s))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zt extends yt{constructor(s=null){super();const o=new wt;o.deleteAttribute("uv");const e=new Oe({side:Ct}),a=new Oe;let i=5;s!==null&&s._useLegacyLights===!1&&(i=900);const c=new Et(16777215,i,28,2);c.position.set(.418,16.199,.3),this.add(c);const r=new v(o,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const u=new v(o,a);u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),this.add(u);const M=new v(o,a);M.position.set(-5.607,-.754,-.758),M.rotation.set(0,.994,0),M.scale.set(1.97,1.534,3.955),this.add(M);const g=new v(o,a);g.position.set(6.167,.857,7.803),g.rotation.set(0,.561,0),g.scale.set(3.927,6.285,3.687),this.add(g);const f=new v(o,a);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const m=new v(o,a);m.position.set(2.291,-.756,-2.621),m.rotation.set(0,-.286,0),m.scale.set(1.546,1.552,1.496),this.add(m);const b=new v(o,a);b.position.set(-2.193,-.369,-5.547),b.rotation.set(0,.516,0),b.scale.set(3.875,3.487,2.986),this.add(b);const C=new v(o,j(50));C.position.set(-16.116,14.37,8.208),C.scale.set(.1,2.428,2.739),this.add(C);const E=new v(o,j(50));E.position.set(-16.109,18.021,-8.207),E.scale.set(.1,2.425,2.751),this.add(E);const P=new v(o,j(17));P.position.set(14.904,12.198,-1.832),P.scale.set(.15,4.265,6.331),this.add(P);const _=new v(o,j(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const R=new v(o,j(20));R.position.set(3.235,11.486,-12.541),R.scale.set(2.5,2,.1),this.add(R);const S=new v(o,j(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const s=new Set;this.traverse(o=>{o.isMesh&&(s.add(o.geometry),s.add(o.material))});for(const o of s)o.dispose()}}function j(y){const s=new Fe;return s.color.setScalar(y),s}export{Ft as E,kt as O,jt as R,At as S,V as U,It as a,zt as b};
