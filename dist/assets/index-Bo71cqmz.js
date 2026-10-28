(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Wo="186",mh=0,xl=1,gh=2,Pr=1,vh=2,Ps=3,gi=0,en=1,sn=2,Zn=0,Ds=1,bn=2,Sl=3,Ml=4,yh=5,ns=100,_h=101,xh=102,Sh=103,Mh=104,bh=200,wh=201,Eh=202,Th=203,Kc=204,Jc=205,Ah=206,Ch=207,Rh=208,Ph=209,Lh=210,Ih=211,Dh=212,Uh=213,Nh=214,Za=0,Ka=1,Ja=2,ks=3,Qa=4,ja=5,eo=6,to=7,Qc=0,Fh=1,kh=2,On=0,jc=1,ed=2,td=3,$o=4,nd=5,id=6,sd=7,rd=300,Ti=301,ls=302,ca=303,da=304,ea=306,no=1e3,Yn=1001,io=1002,Bt=1003,Bh=1004,js=1005,$t=1006,ha=1007,wi=1008,dn=1009,ad=1010,od=1011,Bs=1012,Xo=1013,zn=1014,An=1015,Hn=1016,qo=1017,Yo=1018,Os=1020,ld=35902,cd=35899,dd=1021,hd=1022,Cn=1023,jn=1026,Ei=1027,Zo=1028,Ko=1029,Ai=1030,Jo=1031,Qo=1033,Lr=33776,Ir=33777,Dr=33778,Ur=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37488,fo=37489,Or=37490,po=37491,mo=37808,go=37809,vo=37810,yo=37811,_o=37812,xo=37813,So=37814,Mo=37815,bo=37816,wo=37817,Eo=37818,To=37819,Ao=37820,Co=37821,Ro=36492,Po=36494,Lo=36495,Io=36283,Do=36284,zr=36285,Uo=36286,Oh=3200,No=0,zh=1,hi="",jt="srgb",Hr="srgb-linear",Gr="linear",at="srgb",ua=7680,Hh=519,Gh=512,Vh=513,Wh=514,jo=515,$h=516,Xh=517,el=518,qh=519,ud=35044,bl="300 es",Bn=2e3,zs=2001;function Yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=Vr("canvas");return i.style.display="block",i}const wl={};function Wr(...i){const e="THREE."+i.shift();console.log(e,...i)}function fd(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=fd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=fd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function as(...i){const e=i.join(" ");e in wl||(wl[e]=!0,Ue(...i))}function Kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jh={[Za]:Ka,[Ja]:eo,[Qa]:to,[ks]:ja,[Ka]:Za,[eo]:Ja,[to]:Qa,[ja]:ks};class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const Us=Math.PI/180,Hs=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function tl(i,e){return(i%e+e)%e}function Qh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ns(i,e,t){return(1-t)*i+t*e}function eu(i,e,t,n){return Ns(i,e,1-Math.exp(-t*n))}function tu(i,e=1){return e-Math.abs(tl(i,e*2)-e)}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ru(i,e){return i+Math.random()*(e-i)}function au(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(El=i);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(i){return i*Us}function cu(i){return i*Hs}function du(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tl={DEG2RAD:Us,RAD2DEG:Hs,generateUUID:Kn,clamp:Ze,euclideanModulo:tl,mapLinear:Qh,inverseLerp:jh,lerp:Ns,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:du,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:fu,normalize:ot,denormalize:En};class Ne{static{Ne.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(h!==_||l!==u||c!==f||d!==g){let m=l*u+c*f+d*g+h*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),R=Math.sin(M);p=Math.sin(p*M)/R,o=Math.sin(o*M)/R,l=l*p+u*o,c=c*p+f*o,d=d*p+g*o,h=h*p+_*o}else{l=l*p+u*o,c=c*p+f*o,d=d*p+g*o,h=h*p+_*o;const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-o*f,e[t+2]=c*g+d*f+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new P,Al=new fs;class ke{static{ke.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],R=s[4],S=s[7],w=s[2],E=s[5],A=s[8];return r[0]=a*_+o*M+l*w,r[3]=a*m+o*R+l*E,r[6]=a*p+o*S+l*A,r[1]=c*_+d*M+h*w,r[4]=c*m+d*R+h*E,r[7]=c*p+d*S+h*A,r[2]=u*_+f*M+g*w,r[5]=u*m+f*R+g*E,r[8]=u*p+f*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,f=c*r-a*l,g=t*h+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pa.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new ke,Cl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){const i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const Ke=pu();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class mu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gu=0;class nl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let vu=0;const ga=new P;class Xt extends Li{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Yn,s=Yn,r=$t,a=wi,o=Cn,l=dn,c=Xt.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Kn(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=rd;Xt.DEFAULT_ANISOTROPY=1;class Et{static{Et.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(f+1)/2,w=(p+1)/2,E=(d+u)/4,A=(h+_)/4,y=(g+m)/4;return R>S&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=A/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(u-d)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends Li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Xt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pd extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ht{static{ht.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,h,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,u,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,d,h,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,Su)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),er.crossVectors(rn,ii),s[0]=ii.x,s[4]=er.x,s[8]=rn.x,s[1]=ii.y,s[5]=er.y,s[9]=rn.y,s[2]=ii.z,s[6]=er.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],R=n[7],S=n[11],w=n[15],E=s[0],A=s[4],y=s[8],b=s[12],C=s[1],L=s[5],N=s[9],B=s[13],F=s[2],H=s[6],Z=s[10],W=s[14],ne=s[3],X=s[7],j=s[11],te=s[15];return r[0]=a*E+o*C+l*F+c*ne,r[4]=a*A+o*L+l*H+c*X,r[8]=a*y+o*N+l*Z+c*j,r[12]=a*b+o*B+l*W+c*te,r[1]=d*E+h*C+u*F+f*ne,r[5]=d*A+h*L+u*H+f*X,r[9]=d*y+h*N+u*Z+f*j,r[13]=d*b+h*B+u*W+f*te,r[2]=g*E+_*C+m*F+p*ne,r[6]=g*A+_*L+m*H+p*X,r[10]=g*y+_*N+m*Z+p*j,r[14]=g*b+_*B+m*W+p*te,r[3]=M*E+R*C+S*F+w*ne,r[7]=M*A+R*L+S*H+w*X,r[11]=M*y+R*N+S*Z+w*j,r[15]=M*b+R*B+S*W+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*f-c*u,R=o*f-c*h,S=o*u-l*h,w=a*f-c*d,E=a*u-l*d,A=a*h-o*d;return t*(_*M-m*R+p*S)-n*(g*M-m*w+p*E)+s*(g*R-_*w+p*A)-r*(g*S-_*E+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-n*a,R=t*l-s*a,S=t*c-r*a,w=n*l-s*o,E=n*c-r*o,A=s*c-r*l,y=d*_-h*g,b=d*m-u*g,C=d*p-f*g,L=h*m-u*_,N=h*p-f*_,B=u*p-f*m,F=M*B-R*N+S*L+w*C-E*b+A*y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/F;return e[0]=(o*B-l*N+c*L)*H,e[1]=(s*N-n*B-r*L)*H,e[2]=(_*A-m*E+p*w)*H,e[3]=(u*E-h*A-f*w)*H,e[4]=(l*C-a*B-c*b)*H,e[5]=(t*B-s*C+r*b)*H,e[6]=(m*S-g*A-p*R)*H,e[7]=(d*A-u*S+f*R)*H,e[8]=(a*N-o*C+c*y)*H,e[9]=(n*C-t*N-r*y)*H,e[10]=(g*E-_*S+p*M)*H,e[11]=(h*S-d*E-f*M)*H,e[12]=(o*b-a*L-l*y)*H,e[13]=(t*L-n*b+s*y)*H,e[14]=(_*R-g*w-m*M)*H,e[15]=(d*w-h*R+u*M)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,f=r*d,g=r*h,_=a*d,m=a*h,p=o*h,M=l*c,R=l*d,S=l*h,w=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+S)*w,s[2]=(g-R)*w,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+R)*A,s[9]=(m-M)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),l=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);const c=1/a,d=1/o,h=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=d,xn.elements[5]*=d,xn.elements[6]*=d,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Bn,l=!1){const c=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Bn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===zs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new P,xn=new ht,xu=new P(0,0,0),Su=new P(1,1,1),ii=new P,er=new P,rn=new P,Pl=new ht,Ll=new fs;class vi{constructor(e=0,t=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mu=0;const Il=new P,Bi=new fs,Gn=new ht,tr=new P,vs=new P,bu=new P,wu=new fs,Dl=new P(1,0,0),Ul=new P(0,1,0),Nl=new P(0,0,1),Fl={type:"added"},Eu={type:"removed"},Oi={type:"childadded",child:null},va={type:"childremoved",child:null};class It extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new P,t=new vi,n=new fs,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(vs,tr,this.up):Gn.lookAt(tr,vs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new P(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ge extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tu={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},nr={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=tl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_a(a,r,e+1/3),this.g=_a(a,r,e),this.b=_a(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ke.workingToColorSpace(Vt.copy(this),e),Math.round(Ze(Vt.r*255,0,255))*65536+Math.round(Ze(Vt.g*255,0,255))*256+Math.round(Ze(Vt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=jt){Ke.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(nr);const n=Ns(si.h,nr.h,t),s=Ns(si.s,nr.s,t),r=Ns(si.l,nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new De;De.NAMES=gd;class ta{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vd extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new P,Vn=new P,xa=new P,Wn=new P,zi=new P,Hi=new P,kl=new P,Sa=new P,Ma=new P,ba=new P,wa=new Et,Ea=new Et,Ta=new Et;class mn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Vn.subVectors(n,t),xa.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Vn),l=Sn.dot(xa),c=Vn.dot(Vn),d=Vn.dot(xa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return wa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wa,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Hi.subVectors(r,n),Sa.subVectors(e,n);const l=zi.dot(Sa),c=Hi.dot(Sa);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,s);const d=zi.dot(Ma),h=Hi.dot(Ma);if(d>=0&&h<=d)return t.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(zi,a);ba.subVectors(e,r);const f=zi.dot(ba),g=Hi.dot(ba);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hi,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return kl.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(kl,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ii{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),sr.subVectors(this.max,ys),Gi.subVectors(e.a,ys),Vi.subVectors(e.b,ys),Wi.subVectors(e.c,ys),ri.subVectors(Vi,Gi),ai.subVectors(Wi,Vi),_i.subVectors(Gi,Wi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-_i.z,_i.y,ri.z,0,-ri.x,ai.z,0,-ai.x,_i.z,0,-_i.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-_i.y,_i.x,0];return!Aa(t,Gi,Vi,Wi,sr)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Gi,Vi,Wi,sr))?!1:(rr.crossVectors(ri,ai),t=[rr.x,rr.y,rr.z],Aa(t,Gi,Vi,Wi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,ir=new Ii,Gi=new P,Vi=new P,Wi=new P,ri=new P,ai=new P,_i=new P,ys=new P,sr=new P,rr=new P,xi=new P;function Aa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),d=n.dot(xi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new P,ar=new Ne;let Au=0;class Ot extends Li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ud,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yd extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _d extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Cu=new Ii,_s=new P,Ca=new P;class ps{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(Ca)),this.expandByPoint(_s.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ru=0;const un=new ht,Ra=new It,$i=new P,an=new Ii,xs=new Ii,kt=new P;class xt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?_d:yd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(an.min,xs.min),an.expandByPoint(kt),kt.addVectors(an.max,xs.max),an.expandByPoint(kt)):(an.expandByPoint(xs.min),an.expandByPoint(xs.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),kt.add($i)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;const c=new P,d=new P,h=new P,u=new Ne,f=new Ne,g=new Ne,_=new P,m=new P;function p(y,b,C){c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(L),o[y].add(_),o[b].add(_),o[C].add(_),l[y].add(m),l[b].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,b=M.length;y<b;++y){const C=M[y],L=C.start,N=C.count;for(let B=L,F=L+N;B<F;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const R=new P,S=new P,w=new P,E=new P;function A(y){w.fromBufferAttribute(s,y),E.copy(w);const b=o[y];R.copy(b),R.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(E,b);const L=S.dot(l[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,L)}for(let y=0,b=M.length;y<b;++y){const C=M[y],L=C.start,N=C.count;for(let B=L,F=L+N;B<F;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new Ot(u,d,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Zt=new P;class $r{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pa=new P,Lu=new P,Iu=new ke;class di{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Pa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Du=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Ds,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Jc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class il extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const Ss=new P,qi=new P,Yi=new P,Zi=new Ne,Ms=new Ne,xd=new ht,or=new P,bs=new P,lr=new P,Bl=new Ne,La=new Ne,Ol=new Ne;class Sd extends It{constructor(e=new il){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pu(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new $r(n,3,0,!1)),Xi.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),xd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cr(or.set(-.5,-.5,0),Yi,a,qi,s,r),cr(bs.set(.5,-.5,0),Yi,a,qi,s,r),cr(lr.set(.5,.5,0),Yi,a,qi,s,r),Bl.set(0,0),La.set(1,0),Ol.set(1,1);let o=e.ray.intersectTriangle(or,bs,lr,!1,Ss);if(o===null&&(cr(bs.set(-.5,.5,0),Yi,a,qi,s,r),La.set(0,1),o=e.ray.intersectTriangle(or,lr,bs,!1,Ss),o===null))return;const l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:mn.getInterpolation(Ss,or,bs,lr,Bl,La,Ol,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cr(i,e,t,n,s,r){Zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Zi.x-s*Zi.y,Ms.y=s*Zi.x+r*Zi.y):Ms.copy(Zi),i.copy(e),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(xd)}const Xn=new P,Ia=new P,dr=new P,hr=new P;class Md{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ia.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(Ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=hr.dot(this.direction),l=-hr.dot(dr),c=hr.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ia).addScaledVector(dr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,R=n.z-a.z,S=Math.abs(l),w=Math.abs(c),E=Math.abs(d);let A,y,b,C,L,N,B,F,H,Z,W,ne;if(S>=w&&S>=E?(b=l,N=h,H=g,ne=p,l>=0?(A=c,y=d,C=u,L=f,B=_,F=m,Z=M,W=R):(A=d,y=c,C=f,L=u,B=m,F=_,Z=R,W=M)):w>=E?(b=c,N=u,H=_,ne=M,c>=0?(A=d,y=l,C=f,L=h,B=m,F=g,Z=R,W=p):(A=l,y=d,C=h,L=f,B=g,F=m,Z=p,W=R)):(b=d,N=f,H=m,ne=R,d>=0?(A=l,y=c,C=h,L=u,B=g,F=_,Z=p,W=M):(A=c,y=l,C=u,L=h,B=_,F=g,Z=M,W=p)),b===0)return null;const X=A/b,j=y/b,te=1/b,Le=C-X*N,Re=L-j*N,pt=B-X*H,Je=F-j*H,nt=Z-X*ne,q=W-j*ne,Q=nt*Je-q*pt,_e=Le*q-Re*nt,Fe=pt*Re-Je*Le;if(s){if(Q<0||_e<0||Fe<0)return null}else if((Q<0||_e<0||Fe<0)&&(Q>0||_e>0||Fe>0))return null;const ge=Q+_e+Fe;if(ge===0)return null;const We=te*(Q*N+_e*H+Fe*ne);return(ge>0?We<0:We>0)?null:this.at(We/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wn extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zl=new ht,Si=new Md,ur=new ps,Hl=new P,fr=new P,pr=new P,mr=new P,Da=new P,gr=new P,Gl=new P,vr=new P;class be extends It{constructor(e=new xt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Da.fromBufferAttribute(h,e),a?gr.addScaledVector(Da,d):gr.addScaledVector(Da.sub(t),d))}t.add(gr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(ur.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ur,Hl)===null||Si.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(zl.copy(r).invert(),Si.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,w=R;S<w;S+=3){const E=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);s=yr(this,p,e,n,c,d,h,E,A,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);s=yr(this,a,e,n,c,d,h,M,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,w=R;S<w;S+=3){const E=S,A=S+1,y=S+2;s=yr(this,p,e,n,c,d,h,E,A,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,R=m+1,S=m+2;s=yr(this,a,e,n,c,d,h,M,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Uu(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function yr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const d=Uu(i,e,t,n,fr,pr,mr,Gl);if(d){const h=new P;mn.getBarycoord(Gl,fr,pr,mr,h),s&&(d.uv=mn.getInterpolatedAttribute(s,o,l,c,h,new Ne)),r&&(d.uv1=mn.getInterpolatedAttribute(r,o,l,c,h,new Ne)),a&&(d.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};mn.getNormal(fr,pr,mr,u.normal),d.face=u,d.barycoord=h}return d}class bd extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Bt,d=Bt,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new ht,Wl=new ht,_r=[],$l=new Ii,Nu=new ht,ws=new be,Es=new ps;class Fu extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),$l.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union($l)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Es.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Wl.multiplyMatrices(n,Ki),ws.matrixWorld=Wl,ws.raycast(e,_r);for(let a=0,o=_r.length;a<o;a++){const l=_r[a];l.instanceId=r,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bd(new Float32Array(s*this.count),s,this.count,Zo,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mi=new ps,ku=new Ne(.5,.5),xr=new P;class sl{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,a=new di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],R=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-d,p-g,w-M).normalize(),s[1].setComponents(c+a,f+d,p+g,w+M).normalize(),s[2].setComponents(c+o,f+h,p+_,w+R).normalize(),s[3].setComponents(c-o,f-h,p-_,w-R).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,w-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-S).normalize(),t===Bn)s[5].setComponents(c+l,f+u,p+m,w+S).normalize();else if(t===zs)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=ku.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xr.x=s.normal.x>0?e.max.x:e.min.x,xr.y=s.normal.y>0?e.max.y:e.min.y,xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cs extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xl=new ht,Fo=new Md,Sr=new ps,Mr=new P;class Gs extends It{constructor(e=new xt,t=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;Xl.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Mr.fromBufferAttribute(h,m),ql(Mr,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Mr.fromBufferAttribute(h,g),ql(Mr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ql(i,e,t,n,s,r,a){const o=Fo.distanceSqToPoint(i);if(o<t){const l=new P;Fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wd extends Xt{constructor(e=[],t=Ti,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ed extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends Xt{constructor(e,t,n=zn,s,r,a,o=Bt,l=Bt,c,d=jn,h=1){if(d!==jn&&d!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Bu extends Vs{constructor(e,t=zn,n=Ti,s,r,a=Bt,o=Bt,l,c=jn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Td extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dt extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(h,2));function g(_,m,p,M,R,S,w,E,A,y,b){const C=S/A,L=w/y,N=S/2,B=w/2,F=E/2,H=A+1,Z=y+1;let W=0,ne=0;const X=new P;for(let j=0;j<Z;j++){const te=j*L-B;for(let Le=0;Le<H;Le++){const Re=Le*C-N;X[_]=Re*M,X[m]=te*R,X[p]=F,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=E>0?1:-1,d.push(X.x,X.y,X.z),h.push(Le/A),h.push(1-j/y),W+=1}}for(let j=0;j<y;j++)for(let te=0;te<A;te++){const Le=u+te+H*j,Re=u+te+H*(j+1),pt=u+(te+1)+H*(j+1),Je=u+(te+1)+H*j;l.push(Le,Re,Je),l.push(Re,pt,Je),ne+=6}o.addGroup(f,ne,b),f+=ne,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class na extends xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=t/2,h=Math.PI/2*e,u=t,f=2*h+u,g=n*2+r,_=s+1,m=new P,p=new P;for(let M=0;M<=g;M++){let R=0,S=0,w=0,E=0;if(M<=n){const b=M/n,C=b*Math.PI/2;S=-d-e*Math.cos(C),w=e*Math.sin(C),E=-e*Math.cos(C),R=b*h}else if(M<=n+r){const b=(M-n)/r;S=-d+b*t,w=e,E=0,R=h+b*u}else{const b=(M-n-r)/n,C=b*Math.PI/2;S=d+e*Math.sin(C),w=e*Math.cos(C),E=e*Math.sin(C),R=h+u+b*h}const A=Math.max(0,Math.min(1,R/f));let y=0;M===0?y=.5/s:M===g&&(y=-.5/s);for(let b=0;b<=s;b++){const C=b/s,L=C*Math.PI*2,N=Math.sin(L),B=Math.cos(L);p.x=-w*B,p.y=S,p.z=w*N,o.push(p.x,p.y,p.z),m.set(-w*B,E,w*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+y,A)}if(M>0){const b=(M-1)*_;for(let C=0;C<s;C++){const L=b+C,N=b+C+1,B=M*_+C,F=M*_+C+1;a.push(L,N,B),a.push(N,F,B)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Qn extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,d=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ve extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function M(){const S=new P,w=new P;let E=0;const A=(t-e)/n;for(let y=0;y<=r;y++){const b=[],C=y/r,L=C*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,F=B*l+o,H=Math.sin(F),Z=Math.cos(F);w.x=L*H,w.y=-C*n+m,w.z=L*Z,h.push(w.x,w.y,w.z),S.set(H,A,Z).normalize(),u.push(S.x,S.y,S.z),f.push(B,1-C),b.push(g++)}_.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){const C=_[b][y],L=_[b+1][y],N=_[b+1][y+1],B=_[b][y+1];(e>0||b!==0)&&(d.push(C,L,B),E+=3),(t>0||b!==r-1)&&(d.push(L,N,B),E+=3)}c.addGroup(p,E,0),p+=E}function R(S){const w=g,E=new Ne,A=new P;let y=0;const b=S===!0?e:t,C=S===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const F=N/s*l+o,H=Math.cos(F),Z=Math.sin(F);A.x=b*Z,A.y=m*C,A.z=b*H,h.push(A.x,A.y,A.z),u.push(0,C,0),E.x=H*.5+.5,E.y=Z*.5*C+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const B=w+N,F=L+N;S===!0?d.push(F,F+1,B):d.push(F+1,F,B),y+=3}c.addGroup(p,y,S===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ft extends Ve{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ft(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const R=new P,S=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],R),f(t[E+1],S),f(t[E+2],w),l(R,S,w,M)}function l(M,R,S,w){const E=w+1,A=[];for(let y=0;y<=E;y++){A[y]=[];const b=M.clone().lerp(S,y/E),C=R.clone().lerp(S,y/E),L=E-y;for(let N=0;N<=L;N++)N===0&&y===E?A[y][N]=b:A[y][N]=b.clone().lerp(C,N/L)}for(let y=0;y<E;y++)for(let b=0;b<2*(E-y)-1;b++){const C=Math.floor(b/2);b%2===0?(u(A[y][C+1]),u(A[y+1][C]),u(A[y][C])):(u(A[y][C+1]),u(A[y+1][C+1]),u(A[y+1][C]))}}function c(M){const R=new P;for(let S=0;S<r.length;S+=3)R.x=r[S+0],R.y=r[S+1],R.z=r[S+2],R.normalize().multiplyScalar(M),r[S+0]=R.x,r[S+1]=R.y,r[S+2]=R.z}function d(){const M=new P;for(let R=0;R<r.length;R+=3){M.x=r[R+0],M.y=r[R+1],M.z=r[R+2];const S=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(S,1-w)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const R=a[M+0],S=a[M+2],w=a[M+4],E=Math.max(R,S,w),A=Math.min(R,S,w);E>.9&&A<.1&&(R<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,R){const S=M*3;R.x=e[S+0],R.y=e[S+1],R.z=e[S+2]}function g(){const M=new P,R=new P,S=new P,w=new P,E=new Ne,A=new Ne,y=new Ne;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),R.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),w.copy(M).add(R).add(S).divideScalar(3);const L=m(w);_(E,C+0,M,L),_(A,C+2,R,L),_(y,C+4,S,L)}}function _(M,R,S,w){w<0&&M.x===1&&(a[R]=M.x-1),S.x===0&&S.z===0&&(a[R]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.vertices,e.indices,e.radius,e.detail)}}class mi extends ia{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mi(e.radius,e.detail)}}class Qt extends ia{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qt(e.radius,e.detail)}}class ds extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const M=p*u-a;for(let R=0;R<c;R++){const S=R*h-r;g.push(S,-M,0),_.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const R=M+c*p,S=M+c*(p+1),w=M+1+c*(p+1),E=M+1+c*p;f.push(R,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ws extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/s,f=new P,g=new Ne;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,R=M,S=M+n+1,w=M+n+2,E=M+1;o.push(R,S,E),o.push(S,w,E)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wt extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new P,u=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],R=p/n,S=a+R*o,w=e*Math.cos(S),E=Math.sqrt(e*e-w*w);let A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){const b=y/t,C=s+b*r;h.x=-E*Math.cos(C),h.y=w,h.z=E*Math.sin(C),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(b+A,1-R),M.push(c++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const R=d[p][M+1],S=d[p][M],w=d[p+1][M],E=d[p+1][M+1];(p!==0||a>0)&&f.push(R,S,E),(p!==n-1||l<Math.PI)&&f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tn extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],u=new P,f=new P,g=new P;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),d.push(g.x,g.y,g.z),h.push(p/s),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,S=(s+1)*_+m;l.push(p,M,S),l.push(M,R,S)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Yl(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Yl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const s in n)e[s]=n[s]}return e}function Yl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const zu={clone:hs,merge:Jt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vu extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pn extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wu extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $u extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sa extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Cd extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ua=new ht,Zl=new P,Kl=new P;class Rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const br=new P,wr=new fs,Dn=new P;class Pd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,Jl=new Ne,Ql=new Ne;class cn extends Pd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xu extends Rd{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class is extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rl extends Pd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qu extends Rd{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xr extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ld extends sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ji=-90,Qi=1;class Yu extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const r=new cn(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const a=new cn(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const o=new cn(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const l=new cn(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new cn(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zu extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Id{static{Id.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function jl(i,e,t,n){const s=Ju(n);switch(t){case dd:return i*e;case Zo:return i*e/s.components*s.byteLength;case Ko:return i*e/s.components*s.byteLength;case Ai:return i*e*2/s.components*s.byteLength;case Jo:return i*e*2/s.components*s.byteLength;case hd:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case Qo:return i*e*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(e,8)/4;case so:case ao:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case Or:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Io:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zr:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ju(i){switch(i){case dn:case ad:return{byteLength:1,components:1};case Bs:case od:case Hn:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case zn:case Xo:case An:return{byteLength:4,components:1};case ld:case cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function Dd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qu(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:ju,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:nf,alphatest_fragment:sf,alphatest_pars_fragment:rf,aomap_fragment:af,aomap_pars_fragment:of,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:df,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:yf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:Sf,color_vertex:Mf,common:bf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Cf,emissivemap_pars_fragment:Rf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Ff,fog_vertex:kf,fog_pars_vertex:Bf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:$f,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:jf,lights_fragment_maps:ep,lights_fragment_end:tp,lightprobes_pars_fragment:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:dp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:Sp,normal_vertex:Mp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Cp,packing:Rp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:kp,shadowmap_vertex:Bp,shadowmask_pars_fragment:Op,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:$p,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:Zp,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:jp,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distance_vert:lm,distance_frag:cm,equirect_vert:dm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:Sm,meshphong_vert:Mm,meshphong_frag:bm,meshphysical_vert:wm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Cm,points_frag:Rm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Im,sprite_frag:Dm},he={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},kn={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};kn.physical={uniforms:Jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Er={r:0,b:0,g:0},Um=new ht,Ud=new ke;Ud.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e,t,n,s,r){const a=new De(0);let o=s===!0?0:1,l,c,d=null,h=0,u=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){const S=M.backgroundBlurriness>0;R=e.get(R,S)}return R}function g(M){let R=!1;const S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,R){const S=f(R);S&&(S.isCubeTexture||S.mapping===ea)?(c===void 0&&(c=new be(new dt(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:hs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ud),c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==at,(d!==S||h!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new be(new ds(2,2),new Pn({name:"BackgroundMaterial",uniforms:hs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(Er,Ad(i)),t.buffers.color.setClear(Er.r,Er.g,Er.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(L,N,B,F,H){let Z=!1;const W=h(L,F,B,N);r!==W&&(r=W,c(r.object)),Z=f(L,F,B,H),Z&&g(L,F,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(L,N,B,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function h(L,N,B,F){const H=F.wireframe===!0;let Z=n[N.id];Z===void 0&&(Z={},n[N.id]=Z);const W=L.isInstancedMesh===!0?L.id:0;let ne=Z[W];ne===void 0&&(ne={},Z[W]=ne);let X=ne[B.id];X===void 0&&(X={},ne[B.id]=X);let j=X[H];return j===void 0&&(j=u(l()),X[H]=j),j}function u(L){const N=[],B=[],F=[];for(let H=0;H<t;H++)N[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:F,object:L,attributes:{},index:null}}function f(L,N,B,F){const H=r.attributes,Z=N.attributes;let W=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){const te=H[X];let Le=Z[X];if(Le===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Le=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Le=L.instanceColor)),te===void 0||te.attribute!==Le||Le&&te.data!==Le.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(L,N,B,F){const H={},Z=N.attributes;let W=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){let te=Z[X];te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Le={};Le.attribute=te,te&&te.data&&(Le.data=te.data),H[X]=Le,W++}r.attributes=H,r.attributesNum=W,r.index=F}function _(){const L=r.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),H[L]!==N&&(i.vertexAttribDivisor(L,N),H[L]=N)}function M(){const L=r.newAttributes,N=r.enabledAttributes;for(let B=0,F=N.length;B<F;B++)N[B]!==L[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function R(L,N,B,F,H,Z,W){W===!0?i.vertexAttribIPointer(L,N,B,H,Z):i.vertexAttribPointer(L,N,B,F,H,Z)}function S(L,N,B,F){_();const H=F.attributes,Z=B.getAttributes(),W=N.defaultAttributeValues;for(const ne in Z){const X=Z[ne];if(X.location>=0){let j=H[ne];if(j===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const te=j.normalized,Le=j.itemSize,Re=e.get(j);if(Re===void 0)continue;const pt=Re.buffer,Je=Re.type,nt=Re.bytesPerElement,q=Je===i.INT||Je===i.UNSIGNED_INT||j.gpuType===Xo;if(j.isInterleavedBufferAttribute){const Q=j.data,_e=Q.stride,Fe=j.offset;if(Q.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,Q.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ge=0;ge<X.locationSize;ge++)R(X.location+ge,Le/X.locationSize,Je,te,_e*nt,(Fe+Le/X.locationSize*ge)*nt,q)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,j.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Q=0;Q<X.locationSize;Q++)R(X.location+Q,Le/X.locationSize,Je,te,Le*nt,Le/X.locationSize*Q*nt,q)}}else if(W!==void 0){const te=W[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}M()}function w(){b();for(const L in n){const N=n[L];for(const B in N){const F=N[B];for(const H in F){const Z=F[H];for(const W in Z)d(Z[W].object),delete Z[W];delete F[H]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const B in N){const F=N[B];for(const H in F){const Z=F[H];for(const W in Z)d(Z[W].object),delete Z[W];delete F[H]}}delete n[L.id]}function A(L){for(const N in n){const B=n[N];for(const F in B){const H=B[F];if(H[L.id]===void 0)continue;const Z=H[L.id];for(const W in Z)d(Z[W].object),delete Z[W];delete H[L.id]}}}function y(L){for(const N in n){const B=n[N],F=L.isInstancedMesh===!0?L.id:0,H=B[F];if(H!==void 0){for(const Z in H){const W=H[Z];for(const ne in W)d(W[ne].object),delete W[ne];delete H[Z]}delete B[F],Object.keys(B).length===0&&delete n[N]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function km(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==dn&&A!==An&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ue("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:w,samples:E}}function Om(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new di,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const M=r?0:n,R=M*4;let S=p.clippingState||null;l.value=S,S=d(g,u,R,f);for(let w=0;w!==R;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=f;R!==_;++R,S+=4)a.copy(h[R]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const rs=4,zm=6,Hm=20,Gm=256,Ts=new rl,ec=new De;let Na=null,Fa=0,ka=0,Ba=!1;const Vm=new P,bi=new P;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Vm}=r;Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,ka),this._renderer.xr.enabled=Ba,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Hn,format:Cn,colorSpace:Hr,depthBuffer:!1},s=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wm(r)),this._blurMaterial=Xm(r,e,t),this._ggxMaterial=$m(r,e,t)}return s}_compileMaterial(e){const t=new be(new xt,e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,s,r){const l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ec),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new dt,new wn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(ec),p=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));const w=this._cubeSize;ji(s,S*w,R>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ti||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-rs?n-g+rs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ji(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ts),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ji(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Ts)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],h=3*d*(s>this._lodMax-rs?s-this._lodMax+rs:0),u=4*(this._cubeSize-d);ji(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,Ts)}}function Wm(i){const e=[],t=[];let n=i;const s=i-rs+1+zm;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,g=new Float32Array(f*u*h),_=new Float32Array(f*u*h);for(let p=0;p<h;p++){const M=p%3*2/3-1,R=p>2?0:-1,S=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(S,f*u*p);for(let w=0;w<u;w++){const E=d[w*2]*2-1,A=d[w*2+1]*2-1;p===0?bi.set(1,A,E):p===1?bi.set(-E,1,-A):p===2?bi.set(-E,A,1):p===3?bi.set(-1,A,-E):p===4?bi.set(-E,-1,A):bi.set(E,A,-1),bi.toArray(_,(p*u+w)*f)}}const m=new xt;m.setAttribute("position",new Ot(g,f)),m.setAttribute("outputDirection",new Ot(_,f)),t.push(new be(m,null)),n>rs&&n--}return{lodMeshes:t,sizeLods:e}}function nc(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $m(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xm(i,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ic(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function sc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nd extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dt(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Zn});r.uniforms.tEquirect.value=t;const a=new be(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=$t),new Yu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function qm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ca||f===da)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new Nd(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===ca||f===da,_=f===Ti||f===ls;if(g||_){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new tc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new tc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===ca?u.mapping=Ti:f===da&&(u.mapping=ls),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ym(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let R=0,S=M.length;R<S;R+=3){const w=M[R+0],E=M[R+1],A=M[R+2];u.push(w,E,E,A,A,w)}}else{const M=g.array;_=g.version;for(let R=0,S=M.length/3-1;R<S;R+=3){const w=R+0,E=R+1,A=R+2;u.push(w,E,E,A,A,w)}}const m=new(g.count>=65535?_d:yd)(u,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Km(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Jm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,e,t){const n=new WeakMap,s=new Et;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let C=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*E*4*h),y=new pd(A,w,E,h);y.type=An,y.needsUpdate=!0;const b=S*4;for(let L=0;L<h;L++){const N=p[L],B=M[L],F=R[L],H=w*E*4*L;for(let Z=0;Z<N.count;Z++){const W=Z*b;g===!0&&(s.fromBufferAttribute(N,Z),A[H+W+0]=s.x,A[H+W+1]=s.y,A[H+W+2]=s.z,A[H+W+3]=0),_===!0&&(s.fromBufferAttribute(B,Z),A[H+W+4]=s.x,A[H+W+5]=s.y,A[H+W+6]=s.z,A[H+W+7]=0),m===!0&&(s.fromBufferAttribute(F,Z),A[H+W+8]=s.x,A[H+W+9]=s.y,A[H+W+10]=s.z,A[H+W+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:y,size:new Ne(w,E)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jm(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const e0={[jc]:"LINEAR_TONE_MAPPING",[ed]:"REINHARD_TONE_MAPPING",[td]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[sd]:"NEUTRAL_TONE_MAPPING",[nd]:"CUSTOM_TONE_MAPPING"};function t0(i,e,t,n,s,r){const a=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new xt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));const d=new Vu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new be(c,d),u=new rl(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,M=[],R=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let E=0;E<M.length;E++){const A=M[E];A.setSize&&A.setSize(S,w)}},this.setEffects=function(S){M=S,R=M.length>0&&M[0].isRenderPass===!0;const w=a.width,E=a.height;M.length>0&&o===null&&(o=new Rn(w,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(w,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const y=M[A];y.setSize&&y.setSize(w,E)}},this.begin=function(S,w){if(_||S.toneMapping===On&&M.length===0)return!1;if(p=w,w!==null){const E=w.width,A=w.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return R===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=On,!0},this.hasRenderPass=function(){return R},this.end=function(S,w){S.toneMapping=m,_=!0;let E=a,A=o;for(let y=0;y<M.length;y++){const b=M[y];b.enabled!==!1&&(b.render(S,A,E,w),b.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,d.defines={},Ke.getTransfer(f)===at&&(d.defines.SRGB_TRANSFER="");const y=e0[g];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(h,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Fd=new Xt,ko=new Vs(1,1),kd=new pd,Bd=new _u,Od=new wd,rc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),Nt(t,n)}}function o0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;lc.set(n),i.uniformMatrix3fv(this.addr,!1,lc),Nt(t,n)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),Nt(t,n)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ko.compareFunction=t.isReversedDepthBuffer()?el:jo,r=ko):r=Fd,t.setTexture2D(e||r,s)}function y0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bd,s)}function _0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Od,s)}function x0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kd,s)}function S0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return d0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function M0(i,e){i.uniform1fv(this.addr,e)}function b0(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function w0(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function E0(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function T0(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A0(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R0(i,e){i.uniform1iv(this.addr,e)}function P0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function I0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function N0(i,e){i.uniform3uiv(this.addr,e)}function F0(i,e){i.uniform4uiv(this.addr,e)}function k0(i,e,t){const n=this.cache,s=e.length,r=aa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ko:a=Fd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function B0(i,e,t){const n=this.cache,s=e.length,r=aa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bd,r[a])}function O0(i,e,t){const n=this.cache,s=e.length,r=aa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Od,r[a])}function z0(i,e,t){const n=this.cache,s=e.length,r=aa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kd,r[a])}function H0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return z0}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function dc(i,e){i.seq.push(e),i.map[e.id]=e}function $0(i,e,t){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dc(t,c===void 0?new G0(o,i,e):new V0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new W0(o),dc(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function hc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X0=37297;let q0=0;function Y0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uc=new ke;function Z0(i){Ke._getMatrix(uc,Ke.workingColorSpace,i);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(e),o)}else return r}function K0(i,e){const t=Z0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J0={[jc]:"Linear",[ed]:"Reinhard",[td]:"Cineon",[$o]:"ACESFilmic",[id]:"AgX",[sd]:"Neutral",[nd]:"Custom"};function Q0(i,e){const t=J0[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new P;function j0(){Ke.getLuminanceCoefficients(Tr);const i=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(ig,rg)}const sg=new Map;function rg(i,e){let t=ze[e];if(t===void 0){const n=sg.get(e);if(n!==void 0)t=ze[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bo(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(ag,og)}function og(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lg={[Pr]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function cg(i){return lg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dg={[Ti]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function hg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ug={[ls]:"ENVMAP_MODE_REFRACTION"};function fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pg={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Fh]:"ENVMAP_BLENDING_MIX",[kh]:"ENVMAP_BLENDING_ADD"};function mg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pg[i.combine]||"ENVMAP_BLENDING_NONE"}function gg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cg(t),c=hg(t),d=fg(t),h=mg(t),u=gg(t),f=eg(t),g=tg(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ze.tonemapping_pars_fragment:"",t.toneMapping!==On?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,K0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Bo(a),a=pc(a,t),a=mc(a,t),o=Bo(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=M+m+a,S=M+p+o,w=hc(s,s.VERTEX_SHADER,R),E=hc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,w),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(E)||"",H=N.trim(),Z=B.trim(),W=F.trim();let ne=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const j=fc(s,w,"vertex"),te=fc(s,E,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+te)}else H!==""?Ue("WebGLProgram: Program Info Log:",H):(Z===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(E),y=new Nr(s,_),b=ng(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,X0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let yg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xg(e),t.set(e,n)),n}}class xg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Sg(i){return i===Ai||i===Or||i===zr}function Mg(i,e,t,n,s,r){const a=new md,o=new _g,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,C,L,N,B){const F=L.fog,H=N.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||Z,W),X=ne&&ne.mapping===ea?ne.image.height:null,j=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ue("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=te!==void 0?te.length:0;let Re=0;H.morphAttributes.position!==void 0&&(Re=1),H.morphAttributes.normal!==void 0&&(Re=2),H.morphAttributes.color!==void 0&&(Re=3);let pt,Je,nt,q;if(j){const gt=kn[j];pt=gt.vertexShader,Je=gt.fragmentShader}else{pt=y.vertexShader,Je=y.fragmentShader;const gt=o.getVertexShaderStage(y),it=o.getFragmentShaderStage(y);o.update(y,gt,it),nt=gt.id,q=it.id}const Q=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,We=!!y.map,Dt=!!y.matcap,$e=!!ne,tt=!!y.aoMap,mt=!!y.lightMap,Ye=!!y.bumpMap&&y.wireframe===!1,St=!!y.normalMap,Ft=!!y.displacementMap,nn=!!y.emissiveMap,bt=!!y.metalnessMap,Ct=!!y.roughnessMap,U=y.anisotropy>0,zt=y.clearcoat>0,rt=y.dispersion>0,T=y.retroreflectivity>0,v=y.iridescence>0,k=y.sheen>0,G=y.transmission>0,$=U&&!!y.anisotropyMap,ie=zt&&!!y.clearcoatMap,re=zt&&!!y.clearcoatNormalMap,Y=zt&&!!y.clearcoatRoughnessMap,J=v&&!!y.iridescenceMap,ae=v&&!!y.iridescenceThicknessMap,Ae=k&&!!y.sheenColorMap,de=k&&!!y.sheenRoughnessMap,oe=!!y.specularMap,Ce=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Be=G&&!!y.transmissionMap,D=G&&!!y.thicknessMap,le=!!y.gradientMap,K=!!y.alphaMap,ce=y.alphaTest>0,pe=!!y.alphaHash,ee=!!y.extensions;let Pe=On;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const we={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:Je,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:Dt,envMap:$e,envMapMode:$e&&ne.mapping,envMapCubeUVHeight:X,aoMap:tt,lightMap:mt,bumpMap:Ye,normalMap:St,displacementMap:Ft,emissiveMap:nn,normalMapObjectSpace:St&&y.normalMapType===zh,normalMapTangentSpace:St&&y.normalMapType===No,packedNormalMap:St&&y.normalMapType===No&&Sg(y.normalMap.format),metalnessMap:bt,roughnessMap:Ct,anisotropy:U,anisotropyMap:$,clearcoat:zt,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:rt,retroreflection:T,iridescence:v,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:oe,specularColorMap:Ce,specularIntensityMap:Ie,transmission:G,transmissionMap:Be,thicknessMap:D,gradientMap:le,opaque:y.transparent===!1&&y.blending===Ds&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:pe,combine:y.combine,mapUv:We&&g(y.map.channel),aoMapUv:tt&&g(y.aoMap.channel),lightMapUv:mt&&g(y.lightMap.channel),bumpMapUv:Ye&&g(y.bumpMap.channel),normalMapUv:St&&g(y.normalMap.channel),displacementMapUv:Ft&&g(y.displacementMap.channel),emissiveMapUv:nn&&g(y.emissiveMap.channel),metalnessMapUv:bt&&g(y.metalnessMap.channel),roughnessMapUv:Ct&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:ie&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(y.sheenRoughnessMap.channel),specularMapUv:oe&&g(y.specularMap.channel),specularColorMapUv:Ce&&g(y.specularColorMap.channel),specularIntensityMapUv:Ie&&g(y.specularIntensityMap.channel),transmissionMapUv:Be&&g(y.transmissionMap.channel),thicknessMapUv:D&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(St||U),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(We||K),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&St===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Re,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:nn&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){const b=f[y.type];let C;if(b){const L=kn[b];C=zu.clone(L.uniforms)}else C=y.uniforms;return C}function S(y,b){let C=d.get(b);return C!==void 0?++C.usedTimes:(C=new vg(i,b,y,s),c.push(C),d.set(b,C)),C}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:A}}function bg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _c(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);const R=o(u,f,g,_,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(u,f,g,_,m,p){const M=o(u,f,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function d(u,f){t.length>1&&t.sort(u||wg),n.length>1&&n.sort(f||yc),s.length>1&&s.sort(f||yc)}function h(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function Eg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new _c,i.set(n,[a])):s>=r.length?(a=new _c,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cg=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pg(i){const e=new Tg,t=Ag(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ht,a=new ht;function o(c){let d=0,h=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,R=0,S=0,w=0,E=0,A=0,y=0,b=0,C=0;c.sort(Rg);for(let N=0,B=c.length;N<B;N++){const F=c[N],H=F.color,Z=F.intensity,W=F.distance;let ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ai?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=H.r*Z,h+=H.g*Z,u+=H.b*Z;else if(F.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(F.sh.coefficients[X],Z);C++}else if(F.isSunLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,te=t.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;const Le=j.getViewportCount();for(let Re=0;Re<Le;Re++)n.sunShadowMatrix[_+Re]=j.getMatrix(Re),n.sunShadowCascade[_+Re]=j._cascadeData[Re];_+=Le,g++}n.sun[f]=X,f++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,te=t.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=F.shadow.matrix,w++}n.directional[m]=X,m++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=W,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,n.spot[M]=X;const j=F.shadow;if(F.map&&(n.spotLightMap[y]=F.map,y++,j.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[M]=j.matrix,F.castShadow){const te=t.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ne,A++}M++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=X,R++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const j=F.shadow,te=t.get(F);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=F.shadow.matrix,E++}n.point[p]=X,p++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(Z),X.groundColor.copy(F.groundColor).multiplyScalar(Z),n.hemi[S]=X,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==R||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==y||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=R,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=y,L.numLightProbes=C,n.version=Cg++)}function l(c,d){let h=0,u=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){const S=c[M];if(S.isSunLight){const w=n.sun[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function xc(i){const e=new Pg(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new xc(i),e.set(s,[o])):r>=a.length?(o=new xc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ug=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ng=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Sc=new ht,As=new P,za=new P;function Fg(i,e,t){let n=new sl;const s=new Ne,r=new Ne,a=new Et,o=new Wu,l=new $u,c={},d=t.maxTextureSize,h={[gi]:en,[en]:gi,[sn]:sn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Ig,fragmentShader:Dg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let p=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===vh&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=E.length;F<H;F++){const Z=E[F],W=Z.shadow;if(W===void 0){Ue("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ne=W.getFrameExtents();s.multiply(ne),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,W.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ps){if(Z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Rn(s.x,s.y,{format:Ai,type:Hn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Vs(s.x,s.y,An),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=jn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Bt,W.map.depthTexture.magFilter=Bt}else Z.isPointLight?(W.map=new Nd(s.x),W.map.depthTexture=new Bu(s.x,zn)):(W.map=new Rn(s.x,s.y),W.map.depthTexture=new Vs(s.x,s.y,zn)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=jn,this.type===Pr?(W.map.depthTexture.compareFunction=X?el:jo,W.map.depthTexture.minFilter=$t,W.map.depthTexture.magFilter=$t):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Bt,W.map.depthTexture.magFilter=Bt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,y);for(let te=0;te<j;te++){const Le=W.getCamera(te);if(Z.isPointLight){const Re=W.camera,pt=W.matrix,Je=Z.distance||Re.far;Je!==Re.far&&(Re.far=Je,Re.updateProjectionMatrix()),As.setFromMatrixPosition(Z.matrixWorld),Re.position.copy(As),za.copy(Re.position),za.add(Ug[te]),Re.up.copy(Ng[te]),Re.lookAt(za),Re.updateMatrixWorld(),pt.makeTranslation(-As.x,-As.y,-As.z),Sc.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Sc,Re.coordinateSystem,Re.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,te),i.clear();else{te===0&&(i.setRenderTarget(W.map),i.clear());const Re=W.getViewport(te);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),N.viewport(a)}n=W.getFrustum(te),S(A,y,Le,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Ps&&M(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,L)};function M(E,A){const y=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:Ai,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,y,f,_,null)}function R(E,A,y,b){let C=null;const L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=C.uuid,B=A.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let H=F[B];H===void 0&&(H=C.clone(),F[B]=H,A.addEventListener("dispose",w)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Ps?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=y}return C}function S(E,A,y,b,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ps)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const B=e.update(E),F=E.material;if(Array.isArray(F)){const H=B.groups;for(let Z=0,W=H.length;Z<W;Z++){const ne=H[Z],X=F[ne.materialIndex];if(X&&X.visible){const j=R(E,X,b,C);E.onBeforeShadow(i,E,A,y,B,j,ne),i.renderBufferDirect(y,null,B,j,E,ne),E.onAfterShadow(i,E,A,y,B,j,ne)}}}else if(F.visible){const H=R(E,F,b,C);E.onBeforeShadow(i,E,A,y,B,H,null),i.renderBufferDirect(y,null,B,H,E,null),E.onAfterShadow(i,E,A,y,B,H,null)}}const N=E.children;for(let B=0,F=N.length;B<F;B++)S(N[B],A,y,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const y in c){const b=c[y],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function kg(i,e){function t(){let D=!1;const le=new Et;let K=null;const ce=new Et(0,0,0,0);return{setMask:function(pe){K!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ee,Pe,we,gt){gt===!0&&(pe*=we,ee*=we,Pe*=we),le.set(pe,ee,Pe,we),ce.equals(le)===!1&&(i.clearColor(pe,ee,Pe,we),ce.copy(le))},reset:function(){D=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,K=null,ce=null,pe=null;return{setReversed:function(ee){if(le!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const we=pe;pe=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ee){ee?Q(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ee){K!==ee&&!D&&(i.depthMask(ee),K=ee)},setFunc:function(ee){if(le&&(ee=Jh[ee]),ce!==ee){switch(ee){case Za:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ee}},setLocked:function(ee){D=ee},setClear:function(ee){pe!==ee&&(pe=ee,le&&(ee=1-ee),i.clearDepth(ee))},reset:function(){D=!1,K=null,ce=null,pe=null,le=!1}}}function s(){let D=!1,le=null,K=null,ce=null,pe=null,ee=null,Pe=null,we=null,gt=null;return{setTest:function(it){D||(it?Q(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(it){le!==it&&!D&&(i.stencilMask(it),le=it)},setFunc:function(it,_n,Ln){(K!==it||ce!==_n||pe!==Ln)&&(i.stencilFunc(it,_n,Ln),K=it,ce=_n,pe=Ln)},setOp:function(it,_n,Ln){(ee!==it||Pe!==_n||we!==Ln)&&(i.stencilOp(it,_n,Ln),ee=it,Pe=_n,we=Ln)},setLocked:function(it){D=it},setClear:function(it){gt!==it&&(i.clearStencil(it),gt=it)},reset:function(){D=!1,le=null,K=null,ce=null,pe=null,ee=null,Pe=null,we=null,gt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,R=null,S=null,w=null,E=null,A=null,y=new De(0,0,0),b=0,C=!1,L=null,N=null,B=null,F=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ne>=2);let j=null,te={};const Le=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),pt=new Et().fromArray(Le),Je=new Et().fromArray(Re);function nt(D,le,K,ce){const pe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<K;Pe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(le+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ee}const q={};q[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ks),Ye(!1),St(xl),Q(i.CULL_FACE),tt(Zn);function Q(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function _e(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Fe(D,le){return u[D]!==le?(i.bindFramebuffer(D,le),u[D]=le,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(D,le){let K=g,ce=!1;if(D){K=f.get(le),K===void 0&&(K=[],f.set(le,K));const pe=D.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Pe=pe.length;ee<Pe;ee++)K[ee]=i.COLOR_ATTACHMENT0+ee;K.length=pe.length,ce=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ce=!0);ce&&i.drawBuffers(K)}function We(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Dt={[ns]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};Dt[Sh]=i.MIN,Dt[Mh]=i.MAX;const $e={[bh]:i.ZERO,[wh]:i.ONE,[Eh]:i.SRC_COLOR,[Kc]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(D,le,K,ce,pe,ee,Pe,we,gt,it){if(D===Zn){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),D!==yh){if(D!==p||it!==C){if((M!==ns||w!==ns)&&(i.blendEquation(i.FUNC_ADD),M=ns,w=ns),it)switch(D){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",D);break}R=null,S=null,E=null,A=null,y.set(0,0,0),b=0,p=D,C=it}return}pe=pe||le,ee=ee||K,Pe=Pe||ce,(le!==M||pe!==w)&&(i.blendEquationSeparate(Dt[le],Dt[pe]),M=le,w=pe),(K!==R||ce!==S||ee!==E||Pe!==A)&&(i.blendFuncSeparate($e[K],$e[ce],$e[ee],$e[Pe]),R=K,S=ce,E=ee,A=Pe),(we.equals(y)===!1||gt!==b)&&(i.blendColor(we.r,we.g,we.b,gt),y.copy(we),b=gt),p=D,C=!1}function mt(D,le){D.side===sn?_e(i.CULL_FACE):Q(i.CULL_FACE);let K=D.side===en;le&&(K=!K),Ye(K),D.blending===Ds&&D.transparent===!1?tt(Zn):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function St(D){D!==mh?(Q(i.CULL_FACE),D!==N&&(D===xl?i.cullFace(i.BACK):D===gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),N=D}function Ft(D){D!==B&&(W&&i.lineWidth(D),B=D)}function nn(D,le,K){D?(Q(i.POLYGON_OFFSET_FILL),(F!==le||H!==K)&&(F=le,H=K,a.getReversed()&&(le=-le),i.polygonOffset(le,K))):_e(i.POLYGON_OFFSET_FILL)}function bt(D){D?Q(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ct(D){D===void 0&&(D=i.TEXTURE0+Z-1),j!==D&&(i.activeTexture(D),j=D)}function U(D,le,K){K===void 0&&(j===null?K=i.TEXTURE0+Z-1:K=j);let ce=te[K];ce===void 0&&(ce={type:void 0,texture:void 0},te[K]=ce),(ce.type!==D||ce.texture!==le)&&(j!==K&&(i.activeTexture(K),j=K),i.bindTexture(D,le||q[D]),ce.type=D,ce.texture=le)}function zt(){const D=te[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function k(){try{i.texSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){je("WebGLState:",D)}}function re(){try{i.texStorage3D(...arguments)}catch(D){je("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function ae(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function Ae(D,le){h[D]!==le&&(i.pixelStorei(D,le),h[D]=le)}function de(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function oe(D){Je.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Ce(D,le){let K=c.get(le);K===void 0&&(K=new WeakMap,c.set(le,K));let ce=K.get(D);ce===void 0&&(ce=i.getUniformBlockIndex(le,D.name),K.set(D,ce))}function Ie(D,le){const ce=c.get(le).get(D);l.get(le)!==ce&&(i.uniformBlockBinding(le,ce,D.__bindingPointIndex),l.set(le,ce))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},j=null,te={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,R=null,S=null,w=null,E=null,A=null,y=new De(0,0,0),b=0,C=!1,L=null,N=null,B=null,F=null,H=null,pt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:Fe,drawBuffers:ge,useProgram:We,setBlending:tt,setMaterial:mt,setFlipSided:Ye,setCullFace:St,setLineWidth:Ft,setPolygonOffset:nn,setScissorTest:bt,activeTexture:Ct,bindTexture:U,unbindTexture:zt,compressedTexImage2D:rt,compressedTexImage3D:T,texImage2D:Y,texImage3D:J,pixelStorei:Ae,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:ie,texStorage3D:re,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:de,viewport:oe,reset:Be}}function Bg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return g?new OffscreenCanvas(T,v):Vr("canvas")}function m(T,v,k){let G=1;const $=rt(T);if(($.width>k||$.height>k)&&(G=k/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ie=Math.floor(G*$.width),re=Math.floor(G*$.height);u===void 0&&(u=_(ie,re));const Y=v?_(ie,re):u;return Y.width=ie,Y.height=re,Y.getContext("2d").drawImage(T,0,0,ie,re),Ue("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ie+"x"+re+")."),Y}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,v,k,G,$,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;G&&(re=e.get("EXT_texture_norm16"),re||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),k===i.SHORT&&re&&(Y=re.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),k===i.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),k===i.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const J=ie?Gr:Ke.getTransfer($);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=J===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),k===i.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(T,v){let k;return T?v===null||v===zn||v===Os?k=i.DEPTH24_STENCIL8:v===An?k=i.DEPTH32F_STENCIL8:v===Bs&&(k=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===Os?k=i.DEPTH_COMPONENT24:v===An?k=i.DEPTH_COMPONENT32F:v===Bs&&(k=i.DEPTH_COMPONENT16),k}function E(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&h.delete(v)}function y(T){const v=T.target;v.removeEventListener("dispose",y),L(v)}function b(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,G=f.get(k);if(G){const $=G[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(T),Object.keys(G).length===0&&f.delete(k)}n.remove(T)}function C(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const k=T.source,G=f.get(k);delete G[v.__cacheKey],a.memory.textures--}function L(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let $=0;$<v.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[G][$]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let G=0,$=k.length;G<$;G++){const ie=n.get(k[G]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(k[G])}n.remove(T)}let N=0;function B(){N=0}function F(){return N}function H(T){N=T}function Z(){const T=N;return T>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ne(T,v){const k=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const G=T.image;if(G===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,T,v);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function X(T,v){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){_e(k,T,v);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function j(T,v){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){_e(k,T,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function te(T,v){const k=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){Fe(k,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Le={[no]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},Re={[Bt]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},pt={[Gh]:i.NEVER,[qh]:i.ALWAYS,[Vh]:i.LESS,[jo]:i.LEQUAL,[Wh]:i.EQUAL,[el]:i.GEQUAL,[$h]:i.GREATER,[Xh]:i.NOTEQUAL};function Je(T,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===ha||v.magFilter===js||v.magFilter===wi||v.minFilter===$t||v.minFilter===ha||v.minFilter===js||v.minFilter===wi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Le[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Le[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Le[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Re[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Re[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==js&&v.minFilter!==wi||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const G=v.source;let $=f.get(G);$===void 0&&($={},f.set(G,$));const ie=W(v);if(ie!==T.__cacheKey){$[ie]===void 0&&($[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ie].usedTimes++;const re=$[T.__cacheKey];re!==void 0&&($[T.__cacheKey].usedTimes--,re.usedTimes===0&&C(v)),T.__cacheKey=ie,T.__webglTexture=$[ie].texture}return k}function q(T,v,k){return Math.floor(Math.floor(T/k)/v)}function Q(T,v,k,G){const ie=T.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,G,v.data);else{ie.sort((Ae,de)=>Ae.start-de.start);let re=0;for(let Ae=1;Ae<ie.length;Ae++){const de=ie[re],oe=ie[Ae],Ce=de.start+de.count,Ie=q(oe.start,v.width,4),Be=q(de.start,v.width,4);oe.start<=Ce+1&&Ie===Be&&q(oe.start+oe.count-1,v.width,4)===Ie?de.count=Math.max(de.count,oe.start+oe.count-de.start):(++re,ie[re]=oe)}ie.length=re+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,de=ie.length;Ae<de;Ae++){const oe=ie[Ae],Ce=Math.floor(oe.start/4),Ie=Math.ceil(oe.count/4),Be=Ce%v.width,D=Math.floor(Ce/v.width),le=Ie,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Be,D,le,K,k,G,v.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function _e(T,v,k){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);const $=nt(T,v),ie=v.source;t.bindTexture(G,T.__webglTexture,i.TEXTURE0+k);const re=n.get(ie);if(ie.version!==re.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const K=Ke.getPrimaries(Ke.workingColorSpace),ce=v.colorSpace===hi?null:Ke.getPrimaries(v.colorSpace),pe=v.colorSpace===hi||K===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,s.maxTextureSize);J=zt(v,J);const ae=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type);let de=S(v.internalFormat,ae,Ae,v.normalized,v.colorSpace,v.isVideoTexture);Je(G,v);let oe;const Ce=v.mipmaps,Ie=v.isVideoTexture!==!0,Be=re.__version===void 0||$===!0,D=ie.dataReady,le=E(v,J);if(v.isDepthTexture)de=w(v.format===Ei,v.type),Be&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,ae,Ae,null));else if(v.isDataTexture)if(Ce.length>0){Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,le,de,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ae,oe.data):t.texImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,ae,Ae,oe.data);v.generateMipmaps=!1}else Ie?(Be&&t.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height),D&&Q(v,J,ae,Ae)):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,ae,Ae,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,Ce[0].width,Ce[0].height,J.depth);for(let K=0,ce=Ce.length;K<ce;K++)if(oe=Ce[K],v.format!==Cn)if(ae!==null)if(Ie){if(D)if(v.layerUpdates.size>0){const pe=jl(oe.width,oe.height,v.format,v.type);for(const ee of v.layerUpdates){const Pe=oe.data.subarray(ee*pe/oe.data.BYTES_PER_ELEMENT,(ee+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ee,oe.width,oe.height,1,ae,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,de,oe.width,oe.height,J.depth,0,oe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,ae,Ae,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,de,oe.width,oe.height,J.depth,0,ae,Ae,oe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,le,de,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],v.format!==Cn?ae!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,oe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ae,oe.data):t.texImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,ae,Ae,oe.data)}else if(v.isDataArrayTexture)if(Ie){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,J.width,J.height,J.depth),D)if(v.layerUpdates.size>0){const K=jl(J.width,J.height,v.format,v.type);for(const ce of v.layerUpdates){const pe=J.data.subarray(ce*K/J.data.BYTES_PER_ELEMENT,(ce+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,J.width,J.height,1,ae,Ae,pe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,Ae,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,ae,Ae,J.data);else if(v.isData3DTexture)Ie?(Be&&t.texStorage3D(i.TEXTURE_3D,le,de,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,Ae,J.data)):t.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,ae,Ae,J.data);else if(v.isFramebufferTexture){if(Be)if(Ie)t.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height);else{let K=J.width,ce=J.height;for(let pe=0;pe<le;pe++)t.texImage2D(i.TEXTURE_2D,pe,de,K,ce,0,ae,Ae,null),K>>=1,ce>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),h.add(v),K.onpaint=ce=>{const pe=ce.changedElements;for(const ee of h)pe.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const pe=i.RGBA,ee=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ee,Pe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&Be){const K=rt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,le,de,K.width,K.height)}for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae,Ae,oe):t.texImage2D(i.TEXTURE_2D,K,de,ae,Ae,oe);v.generateMipmaps=!1}else if(Ie){if(Be){const K=rt(J);t.texStorage2D(i.TEXTURE_2D,le,de,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Ae,J)}else t.texImage2D(i.TEXTURE_2D,0,de,ae,Ae,J);p(v)&&M(G),re.__version=ie.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Fe(T,v,k){if(v.image.length!==6)return;const G=nt(T,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const ie=n.get($);if($.version!==ie.__version||G===!0){t.activeTexture(i.TEXTURE0+k);const re=Ke.getPrimaries(Ke.workingColorSpace),Y=v.colorSpace===hi?null:Ke.getPrimaries(v.colorSpace),J=v.colorSpace===hi||re===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!ae&&!Ae?de[ee]=m(v.image[ee],!0,s.maxCubemapSize):de[ee]=Ae?v.image[ee].image:v.image[ee],de[ee]=zt(v,de[ee]);const oe=de[0],Ce=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),Be=S(v.internalFormat,Ce,Ie,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,le=ie.__version===void 0||G===!0,K=$.dataReady;let ce=E(v,oe);Je(i.TEXTURE_CUBE_MAP,v);let pe;if(ae){D&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,oe.width,oe.height);for(let ee=0;ee<6;ee++){pe=de[ee].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){const we=pe[Pe];v.format!==Cn?Ce!==null?D?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Be,we.width,we.height,0,we.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,we.width,we.height,Ce,Ie,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Be,we.width,we.height,0,Ce,Ie,we.data)}}}else{if(pe=v.mipmaps,D&&le){pe.length>0&&ce++;const ee=rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ae){D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ce,Ie,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,de[ee].width,de[ee].height,0,Ce,Ie,de[ee].data);for(let Pe=0;Pe<pe.length;Pe++){const gt=pe[Pe].image[ee].image;D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,gt.width,gt.height,Ce,Ie,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Be,gt.width,gt.height,0,Ce,Ie,gt.data)}}else{D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Ie,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Ce,Ie,de[ee]);for(let Pe=0;Pe<pe.length;Pe++){const we=pe[Pe];D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,Ce,Ie,we.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Be,Ce,Ie,we.image[ee])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),ie.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ge(T,v,k,G,$,ie){const re=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),J=S(k.internalFormat,re,Y,k.normalized,k.colorSpace),ae=n.get(v),Ae=n.get(k);if(Ae.__renderTarget=v,!ae.__hasExternalTextures){const de=Math.max(1,v.width>>ie),oe=Math.max(1,v.height>>ie);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ie,J,de,oe,v.depth,0,re,Y,null):t.texImage2D($,ie,J,de,oe,0,re,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,Ae.__webglTexture,0,bt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,Ae.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(T,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const G=v.depthTexture,$=G&&G.isDepthTexture?G.type:null,ie=w(v.stencilBuffer,$),re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),ie,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,T)}else{const G=v.textures;for(let $=0;$<G.length;$++){const ie=G[$],re=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),J=S(ie.internalFormat,re,Y,ie.normalized,ie.colorSpace);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),J,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(T,v,k){const G=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v.depthTexture);const ae=r.convert(v.depthTexture.format),Ae=r.convert(v.depthTexture.type);let de;v.depthTexture.format===jn?de=i.DEPTH_COMPONENT24:v.depthTexture.format===Ei&&(de=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,de,v.width,v.height,0,ae,Ae,null)}}else ne(v.depthTexture,0);const ie=$.__webglTexture,re=bt(v),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,J=v.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else if(v.depthTexture.format===Ei)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=G}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)Dt(v.__webglFramebuffer[G],T,G);else{const G=T.texture.mipmaps;G&&G.length>0?Dt(v.__webglFramebuffer[0],T,0):Dt(v.__webglFramebuffer,T,0)}else if(k){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),We(v.__webglDepthbuffer[G],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,v,k){const G=n.get(T);v!==void 0&&ge(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&$e(T)}function mt(T){const v=T.texture,k=n.get(T),G=n.get(v);T.addEventListener("dispose",y);const $=T.textures,ie=T.isWebGLCubeRenderTarget===!0,re=$.length>1;if(re||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),ie){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(re)for(let Y=0,J=$.length;Y<J;Y++){const ae=n.get($[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ct(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const J=$[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ae=r.convert(J.format,J.colorSpace),Ae=r.convert(J.type),de=S(J.internalFormat,ae,Ae,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),oe=bt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),We(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ge(k.__webglFramebuffer[Y][J],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else ge(k.__webglFramebuffer[Y],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,J=$.length;Y<J;Y++){const ae=$[Y],Ae=n.get(ae);let de=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),Je(de,ae),ge(k.__webglFramebuffer,T,ae,i.COLOR_ATTACHMENT0+Y,de,0),p(ae)&&M(de)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),Je(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ge(k.__webglFramebuffer[J],T,v,i.COLOR_ATTACHMENT0,Y,J);else ge(k.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,Y,0);p(v)&&M(Y),t.unbindTexture()}T.depthBuffer&&$e(T)}function Ye(T){const v=T.textures;for(let k=0,G=v.length;k<G;k++){const $=v[k];if(p($)){const ie=R(T),re=n.get($).__webglTexture;t.bindTexture(ie,re),M(ie),t.unbindTexture()}}}const St=[],Ft=[];function nn(T){if(T.samples>0){if(Ct(T)===!1){const v=T.textures,k=T.width,G=T.height;let $=i.COLOR_BUFFER_BIT;const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),Y=v.length>1;if(Y)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const Ae=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,k,G,0,0,k,G,$,i.NEAREST),l===!0&&(St.length=0,Ft.length=0,St.push(i.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(St.push(ie),Ft.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const Ae=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function bt(T){return Math.min(s.maxSamples,T.samples)}function Ct(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(T){const v=a.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function zt(T,v){const k=T.colorSpace,G=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Hr&&k!==hi&&(Ke.getTransfer(k)===at?(G!==Cn||$!==dn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),v}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Og(i,e){function t(n,s=hi){let r;const a=Ke.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ad)return i.BYTE;if(n===od)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===hd)return i.RGB;if(n===Cn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===Jo)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===Lr||n===Ir||n===Dr||n===Ur)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho||n===uo||n===fo||n===Or||n===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uo)return r.COMPRESSED_R11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===vo||n===yo||n===_o||n===xo||n===So||n===Mo||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Po||n===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Do||n===zr||n===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Td(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:zg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vg extends Li{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Gg,p={},M=t.getContextAttributes();let R=null,S=null;const w=[],E=[],A=new Ne;let y=null,b=null;const C=new cn;C.viewport=new Et;const L=new cn;L.viewport=new Et;const N=[C,L],B=new Zu;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=w[q];return Q===void 0&&(Q=new ya,w[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=w[q];return Q===void 0&&(Q=new ya,w[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=w[q];return Q===void 0&&(Q=new ya,w[q]=Q),Q.getHandSpace()};function Z(q){const Q=E.indexOf(q.inputSource);if(Q===-1)return;const _e=w[Q];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<w.length;q++){const Q=E[q];Q!==null&&(E[q]=null,w[q].disconnect(Q))}F=null,H=null,m.reset();for(const q in p)delete p[q];if(e.setRenderTarget(R),f=null,u=null,h=null,s=null,S=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),b!==null){const q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Ei:jn,Fe=M.stencil?Os:zn);const We={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Rn(u.textureWidth,u.textureHeight,{format:Cn,type:dn,depthTexture:new Vs(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let Q=0;Q<q.removed.length;Q++){const _e=q.removed[Q],Fe=E.indexOf(_e);Fe>=0&&(E[Fe]=null,w[Fe].disconnect(_e))}for(let Q=0;Q<q.added.length;Q++){const _e=q.added[Q];let Fe=E.indexOf(_e);if(Fe===-1){for(let We=0;We<w.length;We++)if(We>=E.length){E.push(_e),Fe=We;break}else if(E[We]===null){E[We]=_e,Fe=We;break}if(Fe===-1)break}const ge=w[Fe];ge&&ge.connect(_e)}}const X=new P,j=new P;function te(q,Q,_e){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const Fe=X.distanceTo(j),ge=Q.projectionMatrix.elements,We=_e.projectionMatrix.elements,Dt=ge[14]/(ge[10]-1),$e=ge[14]/(ge[10]+1),tt=(ge[9]+1)/ge[5],mt=(ge[9]-1)/ge[5],Ye=(ge[8]-1)/ge[0],St=(We[8]+1)/We[0],Ft=Dt*Ye,nn=Dt*St,bt=Fe/(-Ye+St),Ct=bt*-Ye;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const U=Dt+bt,zt=$e+bt,rt=Ft-Ct,T=nn+(Fe-Ct),v=tt*$e/zt*U,k=mt*$e/zt*U;q.projectionMatrix.makePerspective(rt,T,v,k,U,zt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Le(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,_e=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=L.near=C.near=Q,B.far=L.far=C.far=_e,(F!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,H=B.far),B.layers.mask=q.layers.mask|6,C.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Fe=q.parent,ge=B.cameras;Le(B,Fe);for(let We=0;We<ge.length;We++)Le(ge[We],Fe);ge.length===2?te(B,C,L):B.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Re(q,B,Fe)};function Re(q,Q,_e){_e===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return p[q]};let pt=null;function Je(q,Q){if(d=Q.getViewerPose(c||a),g=Q,d!==null){const _e=d.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Fe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let $e=0;$e<_e.length;$e++){const tt=_e[$e];let mt=null;if(f!==null)mt=f.getViewport(tt);else{const St=h.getViewSubImage(u,tt);mt=St.viewport,$e===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let Ye=N[$e];Ye===void 0&&(Ye=new cn,Ye.layers.enable($e),Ye.viewport=new Et,N[$e]=Ye),Ye.matrix.fromArray(tt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(tt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(mt.x,mt.y,mt.width,mt.height),$e===0&&(B.matrix.copy(Ye.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(Ye)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const $e=h.getDepthInformation(_e[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<_e.length;$e++){const tt=_e[$e].camera;if(tt){let mt=p[tt];mt||(mt=new Td,p[tt]=mt);const Ye=h.getCameraImage(tt);mt.sourceTexture=Ye}}}}for(let _e=0;_e<w.length;_e++){const Fe=E[_e],ge=w[_e];Fe!==null&&ge!==void 0&&ge.update(Fe,Q,c||a)}pt&&pt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const nt=new Dd;nt.setAnimationLoop(Je),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}}const Wg=new ht,zd=new ke;zd.set(-1,0,0,0,1,0,0,0,1);function $g(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ad(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),R=M.envMap,S=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const E=w.program;n.uniformBlockBinding(S,E)}function c(S,w){let E=s[S.id];E===void 0&&(m(S),E=d(S),s[S.id]=E,S.addEventListener("dispose",M));const A=w.program;n.updateUBOMapping(S,A);const y=e.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function d(S){const w=h();S.__bindingPointIndex=w;const E=i.createBuffer(),A=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=s[S.id],E=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,b=E.length;y<b;y++){const C=E[y];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)f(C[L],y,L,A);else f(C,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,E,A){if(_(S,w,E,A)===!0){const y=S.__offset,b=S.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const N=b[L],B=p(N);g(N,S.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function g(S,w,E){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,E)}function _(S,w,E,A){const y=S.value,b=w+"_"+E;if(A[b]===void 0)return typeof y=="number"||typeof y=="boolean"?A[b]=y:ArrayBuffer.isView(y)?A[b]=y.slice():A[b]=y.clone(),!0;{const C=A[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(S){const w=S.uniforms;let E=0;const A=16;for(let b=0,C=w.length;b<C;b++){const L=Array.isArray(w[b])?w[b]:[w[b]];for(let N=0,B=L.length;N<B;N++){const F=L[N],H=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,W=H.length;Z<W;Z++){const ne=H[Z],X=p(ne),j=E%A,te=j%X.boundary,Le=j+te;E+=te,Le!==0&&A-Le<X.storage&&(E+=A-Le),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=X.storage}}}const y=E%A;return y>0&&(E+=A-y),S.__size=E,S.__cache={},this}function p(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",S),w}function M(S){const w=S.target;w.removeEventListener("dispose",M);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}const qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Yg(){return Un===null&&(Un=new bd(qg,16,16,Ai,Hn),Un.name="DFG_LUT",Un.minFilter=$t,Un.magFilter=$t,Un.wrapS=Yn,Un.wrapT=Yn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Zg{constructor(e={}){const{canvas:t=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Qo,Jo,Ko]),p=new Set([dn,zn,Bs,Os,qo,Yo]),M=new Uint32Array(4),R=new Int32Array(4),S=new P;let w=null,E=null;const A=[],y=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,B=null,F=null,H=null;this._outputColorSpace=jt;let Z=0,W=0,ne=null,X=-1,j=null;const te=new Et,Le=new Et;let Re=null;const pt=new De(0);let Je=0,nt=t.width,q=t.height,Q=1,_e=null,Fe=null;const ge=new Et(0,0,nt,q),We=new Et(0,0,nt,q);let Dt=!1;const $e=new sl;let tt=!1,mt=!1;const Ye=new ht,St=new P,Ft=new Et,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Ct(){return ne===null?Q:1}let U=n;function zt(x,I){return t.getContext(x,I)}let rt,T,v,k,G,$,ie,re,Y,J,ae,Ae,de,oe,Ce,Ie,Be,D,le,K,ce,pe,ee;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",_n,!1),U===null){const I="webgl2";if(U=zt(I,x),U===null)throw zt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(x){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),je("WebGLRenderer: "+x.message),x}function Pe(){rt=new Ym(U),rt.init(),ce=new Og(U,rt),T=new Bm(U,rt,e,ce),v=new kg(U,rt),T.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),B=U.createFramebuffer(),F=U.createFramebuffer(),H=U.createFramebuffer(),k=new Jm(U),G=new bg,$=new Bg(U,rt,v,G,T,ce,k),ie=new qm(C),re=new Qu(U),pe=new Fm(U,re),Y=new Zm(U,re,k,pe),J=new jm(U,Y,re,pe,k),D=new Qm(U,T,$),Ce=new Om(G),ae=new Mg(C,ie,rt,T,pe,Ce),Ae=new $g(C,G),de=new Eg,oe=new Lg(rt),Be=new Nm(C,ie,v,J,g,l),Ie=new Fg(C,J,T),ee=new Xg(U,k,T,v),le=new km(U,rt,k),K=new Km(U,rt,k),k.programs=ae.programs,C.capabilities=T,C.extensions=rt,C.properties=G,C.renderLists=de,C.shadowMap=Ie,C.state=v,C.info=k}_!==dn&&(b=new t0(_,t.width,t.height,o,s,r));const we=new Vg(C,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=rt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=rt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(nt,q,!1))},this.getSize=function(x){return x.set(nt,q)},this.setSize=function(x,I,V=!0){if(we.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=x,q=I,t.width=Math.floor(x*Q),t.height=Math.floor(I*Q),V===!0&&(t.style.width=x+"px",t.style.height=I+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(nt*Q,q*Q).floor()},this.setDrawingBufferSize=function(x,I,V){nt=x,q=I,Q=V,t.width=Math.floor(x*V),t.height=Math.floor(I*V),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(_===dn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,I,V,O){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,I,V,O),v.viewport(te.copy(ge).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(We)},this.setScissor=function(x,I,V,O){x.isVector4?We.set(x.x,x.y,x.z,x.w):We.set(x,I,V,O),v.scissor(Le.copy(We).multiplyScalar(Q).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){v.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){_e=x},this.setTransparentSort=function(x){Fe=x},this.getClearColor=function(x){return x.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,V=!0){let O=0;if(x){let z=!1;if(ne!==null){const fe=ne.texture.format;z=m.has(fe)}if(z){const fe=ne.texture.type,ve=p.has(fe),ue=Be.getClearColor(),xe=Be.getClearAlpha(),Ee=ue.r,Oe=ue.g,Xe=ue.b;ve?(M[0]=Ee,M[1]=Oe,M[2]=Xe,M[3]=xe,U.clearBufferuiv(U.COLOR,0,M)):(R[0]=Ee,R[1]=Oe,R[2]=Xe,R[3]=xe,U.clearBufferiv(U.COLOR,0,R))}else O|=U.COLOR_BUFFER_BIT}I&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Be.dispose(),de.dispose(),oe.dispose(),G.dispose(),ie.dispose(),J.dispose(),pe.dispose(),ee.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",hl),we.removeEventListener("sessionend",ul),yi.stop()};function gt(x){x.preventDefault(),Wr("WebGLRenderer: Context Lost."),L=!0}function it(){Wr("WebGLRenderer: Context Restored."),L=!1;const x=k.autoReset,I=Ie.enabled,V=Ie.autoUpdate,O=Ie.needsUpdate,z=Ie.type;Pe(),k.autoReset=x,Ie.enabled=I,Ie.autoUpdate=V,Ie.needsUpdate=O,Ie.type=z}function _n(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ln(x){const I=x.target;I.removeEventListener("dispose",Ln),lh(I)}function lh(x){ch(x),G.remove(x)}function ch(x){const I=G.get(x).programs;I!==void 0&&(I.forEach(function(V){ae.releaseProgram(V)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,V,O,z,fe){I===null&&(I=nn);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,ue=uh(x,I,V,O,z);v.setMaterial(O,ve);let xe=V.index,Ee=1;if(O.wireframe===!0){if(xe=Y.getWireframeAttribute(V),xe===void 0)return;Ee=2}const Oe=V.drawRange,Xe=V.attributes.position;let Se=Oe.start*Ee,st=(Oe.start+Oe.count)*Ee;fe!==null&&(Se=Math.max(Se,fe.start*Ee),st=Math.min(st,(fe.start+fe.count)*Ee)),xe!==null?(Se=Math.max(Se,0),st=Math.min(st,xe.count)):Xe!=null&&(Se=Math.max(Se,0),st=Math.min(st,Xe.count));const Rt=st-Se;if(Rt<0||Rt===1/0)return;pe.setup(z,O,ue,V,xe);let yt,ut=le;if(xe!==null&&(yt=re.get(xe),ut=K,ut.setIndex(yt)),z.isMesh)O.wireframe===!0?(v.setLineWidth(O.wireframeLinewidth*Ct()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(z.isLine){let Ht=O.linewidth;Ht===void 0&&(Ht=1),v.setLineWidth(Ht*Ct()),z.isLineSegments?ut.setMode(U.LINES):z.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else z.isPoints?ut.setMode(U.POINTS):z.isSprite&&ut.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ht=z._multiDrawStarts,me=z._multiDrawCounts,Yt=z._multiDrawCount,Qe=xe?re.get(xe).bytesPerElement:1,hn=G.get(O).currentProgram.getUniforms();for(let In=0;In<Yt;In++)hn.setValue(U,"_gl_DrawID",In),ut.render(Ht[In]/Qe,me[In])}else if(z.isInstancedMesh)ut.renderInstances(Se,Rt,z.count);else if(V.isInstancedBufferGeometry){const Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Ht);ut.renderInstances(Se,Rt,me)}else ut.render(Se,Rt)};function dl(x,I,V,O){N!==null&&x.isNodeMaterial&&N.setObject(O,x),tt===!0&&Ce.setState(x,V,!1),x.transparent===!0&&x.side===sn&&x.forceSinglePass===!1?(x.side=en,x.needsUpdate=!0,Qs(x,I,O),x.side=gi,x.needsUpdate=!0,Qs(x,I,O),x.side=sn):Qs(x,I,O)}this.compile=function(x,I,V=null){V===null&&(V=x),N!==null&&N.renderStart(x,I,V),E=oe.get(V),E.init(I),y.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),x!==V&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,tt=Ce.init(this.clippingPlanes,mt),tt===!0&&Ce.setGlobalState(this.clippingPlanes,I),N!==null&&Ie.render(E.state.shadowsArray,V,I);const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const ue=fe[ve];dl(ue,V,I,z),O.add(ue)}else dl(fe,V,I,z),O.add(fe)}),E=y.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(x,I,V=null){const O=this.compile(x,I,V);return new Promise(z=>{function fe(){if(O.forEach(function(ve){const xe=G.get(ve).currentProgram;(xe===void 0||xe.isReady())&&O.delete(ve)}),O.size===0){z(x);return}setTimeout(fe,10)}rt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let oa=null;function dh(x){oa&&oa(x)}function hl(){yi.stop()}function ul(){yi.start()}const yi=new Dd;yi.setAnimationLoop(dh),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(x){oa=x,we.setAnimationLoop(x),x===null?yi.stop():yi.start()},we.addEventListener("sessionstart",hl),we.addEventListener("sessionend",ul),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(x,I);const V=we.enabled===!0&&we.isPresenting===!0,O=b!==null&&(ne===null||V)&&b.begin(C,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(I),I=we.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,I,ne),E=oe.get(x,y.length),E.init(I),E.state.textureUnits=$.getTextureUnits(),y.push(E),Ye.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$e.setFromProjectionMatrix(Ye,Bn,I.reversedDepth),mt=this.localClippingEnabled,tt=Ce.init(this.clippingPlanes,mt),w=de.get(x,A.length),w.init(),A.push(w),we.enabled===!0&&we.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&la(ve,I,-1/0,C.sortObjects)}la(x,I,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(_e,Fe),bt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,bt&&Be.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Ce.beginShadows();const z=E.state.shadowsArray;if(Ie.render(z,x,I),tt===!0&&Ce.endShadows(),(O&&b.hasRenderPass())===!1){const ve=w.opaque,ue=w.transmissive;if(E.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let Ee=0,Oe=xe.length;Ee<Oe;Ee++){const Xe=xe[Ee];pl(ve,ue,x,Xe)}bt&&Be.render(x);for(let Ee=0,Oe=xe.length;Ee<Oe;Ee++){const Xe=xe[Ee];fl(w,x,Xe,Xe.viewport)}}else ue.length>0&&pl(ve,ue,x,I),bt&&Be.render(x),fl(w,x,I)}ne!==null&&W===0&&($.updateMultisampleRenderTarget(ne),$.updateRenderTargetMipmap(ne)),O&&b.end(C),x.isScene===!0&&x.onAfterRender(C,x,I),pe.resetDefaultState(),X=-1,j=null,y.pop(),y.length>0?(E=y[y.length-1],$.setTextureUnits(E.state.textureUnits),tt===!0&&Ce.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,N!==null&&N.renderEnd()};function la(x,I,V,O){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum($e)){O&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ye);const ve=J.update(x),ue=x.material;ue.visible&&w.push(x,ve,ue,V,Ft.z,null,I)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum($e))){const ve=J.update(x),ue=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ft.copy(ve.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(Ye)),Array.isArray(ue)){const xe=ve.groups;for(let Ee=0,Oe=xe.length;Ee<Oe;Ee++){const Xe=xe[Ee],Se=ue[Xe.materialIndex];Se&&Se.visible&&w.push(x,ve,Se,V,Ft.z,Xe,I)}}else ue.visible&&w.push(x,ve,ue,V,Ft.z,null,I)}}const fe=x.children;for(let ve=0,ue=fe.length;ve<ue;ve++)la(fe[ve],I,V,O)}function fl(x,I,V,O){const{opaque:z,transmissive:fe,transparent:ve}=x;E.setupLightsView(V),tt===!0&&Ce.setGlobalState(C.clippingPlanes,V),O&&v.viewport(te.copy(O)),z.length>0&&Js(z,I,V),fe.length>0&&Js(fe,I,V),ve.length>0&&Js(ve,I,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pl(x,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Se=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new Rn(1,1,{generateMipmaps:!0,type:Se?Hn:dn,minFilter:wi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const fe=E.state.transmissionRenderTarget[O.id],ve=O.viewport||te;fe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(pt),Je=C.getClearAlpha(),Je<1&&C.setClearColor(16777215,.5),C.clear(),bt&&Be.render(V);const Oe=C.toneMapping;C.toneMapping=On;const Xe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),tt===!0&&Ce.setGlobalState(C.clippingPlanes,O),Js(x,V,O),$.updateMultisampleRenderTarget(fe),$.updateRenderTargetMipmap(fe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let st=0,Rt=I.length;st<Rt;st++){const yt=I[st],{object:ut,geometry:Ht,material:me,group:Yt}=yt;if(me.side===sn&&ut.layers.test(O.layers)){const Qe=me.side;me.side=en,me.needsUpdate=!0,ml(ut,V,O,Ht,me,Yt),me.side=Qe,me.needsUpdate=!0,Se=!0}}Se===!0&&($.updateMultisampleRenderTarget(fe),$.updateRenderTargetMipmap(fe))}C.setRenderTarget(ue,xe,Ee),C.setClearColor(pt,Je),Xe!==void 0&&(O.viewport=Xe),C.toneMapping=Oe}function Js(x,I,V){const O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,fe=x.length;z<fe;z++){const ve=x[z],{object:ue,geometry:xe,group:Ee}=ve;let Oe=ve.material;Oe.allowOverride===!0&&O!==null&&(Oe=O),ue.layers.test(V.layers)&&ml(ue,I,V,xe,Oe,Ee)}}function ml(x,I,V,O,z,fe){N!==null&&z.isNodeMaterial&&N.setObject(x,z),x.onBeforeRender(C,I,V,O,z,fe),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,I,V,O,x,fe),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,C.renderBufferDirect(V,I,O,z,x,fe),z.side=gi,z.needsUpdate=!0,C.renderBufferDirect(V,I,O,z,x,fe),z.side=sn):C.renderBufferDirect(V,I,O,z,x,fe),x.onAfterRender(C,I,V,O,z,fe)}function Qs(x,I,V){I.isScene!==!0&&(I=nn);const O=G.get(x),z=E.state.lights,fe=E.state.shadowsArray,ve=z.state.version,ue=ae.getParameters(x,z.state,fe,I,V,E.state.lightProbeGridArray),xe=ae.getProgramCacheKey(ue);let Ee=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=ie.get(x.envMap||O.environment,Oe),O.envMapRotation=O.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",Ln),Ee=new Map,O.programs=Ee);let Xe=Ee.get(xe);if(Xe!==void 0){if(O.currentProgram===Xe&&O.lightsStateVersion===ve)return vl(x,ue),Xe}else ue.uniforms=ae.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,V,ue),x.onBeforeCompile(ue,C),Xe=ae.acquireProgram(ue,xe),Ee.set(xe,Xe),O.uniforms=ue.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),vl(x,ue),O.needsLights=ph(x),O.lightsStateVersion=ve,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=E.state.lightProbeGridArray.length>0,O.currentProgram=Xe,O.uniformsList=null,Xe}function gl(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Nr.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function vl(x,I){const V=G.get(x);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function hh(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let V=0,O=x.length;V<O;V++){const z=x[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function uh(x,I,V,O,z){I.isScene!==!0&&(I=nn),$.resetTextureUnits();const fe=I.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ue=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=ie.get(O.envMap||ve,xe),Oe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,Rt=!!V.morphAttributes.color;let yt=On;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=C.toneMapping);const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ht=ut!==void 0?ut.length:0,me=G.get(O),Yt=E.state.lights;if(tt===!0&&(mt===!0||x!==j)){const vt=x===j&&O.id===X;Ce.setState(O,x,vt)}let Qe=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Yt.state.version||me.outputColorSpace!==ue||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Ee||O.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ce.numPlanes||me.numIntersection!==Ce.numIntersection)||me.vertexAlphas!==Oe||me.vertexTangents!==Xe||me.morphTargets!==Se||me.morphNormals!==st||me.morphColors!==Rt||me.toneMapping!==yt||me.morphTargetsCount!==Ht||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,me.__version=O.version);let hn=me.currentProgram;Qe===!0&&(hn=Qs(O,I,z),N&&O.isNodeMaterial&&N.onUpdateProgram(O,hn,me));let In=!1,ei=!1,Ui=!1;const ct=hn.getUniforms(),Tt=me.uniforms;if(v.useProgram(hn.program)&&(In=!0,ei=!0,Ui=!0),O.id!==X&&(X=O.id,ei=!0),me.needsLights){const vt=hh(E.state.lightProbeGridArray,z);me.lightProbeGrid!==vt&&(me.lightProbeGrid=vt,ei=!0)}if(In||j!==x){v.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(U,"projectionMatrix",x.projectionMatrix),ct.setValue(U,"viewMatrix",x.matrixWorldInverse);const ni=ct.map.cameraPosition;ni!==void 0&&ni.setValue(U,St.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,ei=!0,Ui=!0)}if(me.needsLights&&(Yt.state.sunShadowMap.length>0&&ct.setValue(U,"sunShadowMap",Yt.state.sunShadowMap,$),Yt.state.directionalShadowMap.length>0&&ct.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,$),Yt.state.spotShadowMap.length>0&&ct.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,$),Yt.state.pointShadowMap.length>0&&ct.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,$)),z.isSkinnedMesh){ct.setOptional(U,z,"bindMatrix"),ct.setOptional(U,z,"bindMatrixInverse");const vt=z.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ct.setValue(U,"boneTexture",vt.boneTexture,$))}z.isBatchedMesh&&(ct.setOptional(U,z,"batchingTexture"),ct.setValue(U,"batchingTexture",z._matricesTexture,$),ct.setOptional(U,z,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",z._indirectTexture,$),ct.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",z._colorsTexture,$));const ti=V.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&D.update(z,V,hn),(ei||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,ct.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Yg()),ei){if(ct.setValue(U,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&fh(Tt,Ui),fe&&O.fog===!0&&Ae.refreshFogUniforms(Tt,fe),Ae.refreshMaterialUniforms(Tt,O,Q,q,E.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const vt=me.lightProbeGrid;Tt.probesSH.value=vt.texture,Tt.probesMin.value.copy(vt.boundingBox.min),Tt.probesMax.value.copy(vt.boundingBox.max),Tt.probesResolution.value.copy(vt.resolution)}Nr.upload(U,gl(me),Tt,$)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Nr.upload(U,gl(me),Tt,$),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(U,"center",z.center),ct.setValue(U,"modelViewMatrix",z.modelViewMatrix),ct.setValue(U,"normalMatrix",z.normalMatrix),ct.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const vt=O.uniformsGroups;for(let ni=0,Ni=vt.length;ni<Ni;ni++){const _l=vt[ni];ee.update(_l,hn),ee.bind(_l,hn)}}return hn}function fh(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function ph(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,I,V){const O=G.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=I,G.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const V=G.get(x);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,V=0){ne=x,Z=I,W=V;let O=null,z=!1,fe=!1;if(x){const ue=G.get(x);if(ue.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(x.viewport),Le.copy(x.scissor),Re=x.scissorTest,v.viewport(te),v.scissor(Le),v.setScissorTest(Re),X=-1;return}else if(ue.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(ue.__hasExternalTextures)$.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&G.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Ee=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?O=Ee[I][V]:O=Ee[I],z=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?O=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[V]:O=Ee,te.copy(x.viewport),Le.copy(x.scissor),Re=x.scissorTest}else te.copy(ge).multiplyScalar(Q).floor(),Le.copy(We).multiplyScalar(Q).floor(),Re=Dt;if(V!==0&&(O=B),v.bindFramebuffer(U.FRAMEBUFFER,O)&&v.drawBuffers(x,O),v.viewport(te),v.scissor(Le),v.setScissorTest(Re),z){const ue=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,V)}else if(fe){const ue=I;for(let xe=0;xe<x.textures.length;xe++){const Ee=G.get(x.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,V,ue)}}else if(x!==null&&V!==0){const ue=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,V)}X=-1};function yl(x){const I=G.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=T.textureFormatReadable(x.format),I.__typeReadable=T.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,V,O,z,fe,ve,ue=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){v.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Ee=x.textures[ue],Oe=Ee.format,Xe=Ee.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const Se=yl(Ee);if(Se.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-O&&V>=0&&V<=x.height-z&&U.readPixels(I,V,O,z,ce.convert(Oe),ce.convert(Xe),fe)}finally{const Ee=ne!==null?G.get(ne).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,I,V,O,z,fe,ve,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe)if(I>=0&&I<=x.width-O&&V>=0&&V<=x.height-z){v.bindFramebuffer(U.FRAMEBUFFER,xe);const Ee=x.textures[ue],Oe=Ee.format,Xe=Ee.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const Se=yl(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(I,V,O,z,ce.convert(Oe),ce.convert(Xe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Rt=ne!==null?G.get(ne).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Rt);const yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kh(U,yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(st),U.deleteSync(yt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,V=0){const O=Math.pow(2,-V),z=Math.floor(x.image.width*O),fe=Math.floor(x.image.height*O),ve=I!==null?I.x:0,ue=I!==null?I.y:0;$.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ve,ue,z,fe),v.unbindTexture()},this.copyTextureToTexture=function(x,I,V=null,O=null,z=0,fe=0){let ve,ue,xe,Ee,Oe,Xe,Se,st,Rt;const yt=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(V!==null)ve=V.max.x-V.min.x,ue=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Oe=V.min.y,Xe=V.isBox3?V.min.z:0;else{const Tt=Math.pow(2,-z);ve=Math.floor(yt.width*Tt),ue=Math.floor(yt.height*Tt),x.isDataArrayTexture?xe=yt.depth:x.isData3DTexture?xe=Math.floor(yt.depth*Tt):xe=1,Ee=0,Oe=0,Xe=0}O!==null?(Se=O.x,st=O.y,Rt=O.z):(Se=0,st=0,Rt=0);const ut=ce.convert(I.format),Ht=ce.convert(I.type);let me;I.isData3DTexture?($.setTexture3D(I,0),me=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),me=U.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),me=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Yt=v.getParameter(U.UNPACK_ROW_LENGTH),Qe=v.getParameter(U.UNPACK_IMAGE_HEIGHT),hn=v.getParameter(U.UNPACK_SKIP_PIXELS),In=v.getParameter(U.UNPACK_SKIP_ROWS),ei=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),v.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe);const Ui=x.isDataArrayTexture||x.isData3DTexture,ct=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Tt=G.get(x),ti=G.get(I),vt=G.get(Tt.__renderTarget),ni=G.get(ti.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Ni=0;Ni<xe;Ni++)Ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,Xe+Ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(I).__webglTexture,fe,Rt+Ni)),U.blitFramebuffer(Ee,Oe,ve,ue,Se,st,ve,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const Tt=G.get(x),ti=G.get(I);v.bindFramebuffer(U.READ_FRAMEBUFFER,F),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let vt=0;vt<xe;vt++)Ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,z,Xe+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tt.__webglTexture,z),ct?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ti.__webglTexture,fe,Rt+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ti.__webglTexture,fe),z!==0?U.blitFramebuffer(Ee,Oe,ve,ue,Se,st,ve,ue,U.COLOR_BUFFER_BIT,U.NEAREST):ct?U.copyTexSubImage3D(me,fe,Se,st,Rt+vt,Ee,Oe,ve,ue):U.copyTexSubImage2D(me,fe,Se,st,Ee,Oe,ve,ue);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(me,fe,Se,st,Rt,ve,ue,xe,ut,Ht,yt.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(me,fe,Se,st,Rt,ve,ue,xe,ut,yt.data):U.texSubImage3D(me,fe,Se,st,Rt,ve,ue,xe,ut,Ht,yt):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Se,st,ve,ue,ut,Ht,yt.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Se,st,yt.width,yt.height,ut,yt.data):U.texSubImage2D(U.TEXTURE_2D,fe,Se,st,ve,ue,ut,Ht,yt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),v.pixelStorei(U.UNPACK_SKIP_PIXELS,hn),v.pixelStorei(U.UNPACK_SKIP_ROWS,In),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ei),fe===0&&I.generateMipmaps&&U.generateMipmap(me),v.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),v.unbindTexture()},this.resetState=function(){Z=0,W=0,ne=null,v.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Kg{constructor(e){this.canvas=e,this.renderer=new Zg({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),this.renderer.setSize(globalThis.innerWidth,globalThis.innerHeight,!1),this.renderer.outputColorSpace=jt,this.renderer.toneMapping=$o,this.renderer.toneMappingExposure=1.08,this.scene=new vd,this.scene.fog=new ta(1317420,.0052),this.camera=new cn(55,globalThis.innerWidth/globalThis.innerHeight,.1,400),this.camera.position.set(0,9,16),this.clock=new Ku,this.listeners=new Set,this.addBaseLighting(this.scene),this.addSky(this.scene),globalThis.addEventListener("resize",()=>this.resize()),this.resize()}addBaseLighting(e){const t=new Cd(11061247,2827293,1.35);e.add(t);const n=new Xr(16769461,2.2);n.position.set(38,62,26),e.add(n);const s=new Xr(9164031,1.05);s.position.set(-42,25,-38),e.add(s);const r=new Ld(4147824,.55);e.add(r)}addSky(e){const t={topColor:{value:new De(1711686)},midColor:{value:new De(4865912)},bottomColor:{value:new De(15769706)},offset:{value:18},exponent:{value:.72}},n=new be(new Wt(260,32,18),new Pn({side:en,depthWrite:!1,uniforms:t,vertexShader:`
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 topColor;
          uniform vec3 midColor;
          uniform vec3 bottomColor;
          uniform float offset;
          uniform float exponent;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
            float upper = smoothstep(0.0, 0.85, h);
            float lower = smoothstep(-0.35, 0.18, h);
            vec3 color = mix(bottomColor, midColor, lower);
            color = mix(color, topColor, upper * exponent);
            gl_FragColor = vec4(color, 1.0);
          }
        `}));e.add(n),this.sky=n;const s=new xt,r=700,a=new Float32Array(r*3);for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,d=Math.acos(Math.random()*.75+.15),h=220;a[l*3]=h*Math.sin(d)*Math.cos(c),a[l*3+1]=h*Math.cos(d)+20,a[l*3+2]=h*Math.sin(d)*Math.sin(c)}s.setAttribute("position",new Ot(a,3));const o=new Gs(s,new cs({color:14543103,size:.72,transparent:!0,opacity:.82,depthWrite:!1}));e.add(o),this.stars=o}resize(){const e=globalThis.innerWidth,t=globalThis.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}setQuality(e){this.renderer.setPixelRatio(e==="low"?1:Math.min(globalThis.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!1,this.resize()}onFrame(e){return this.listeners.add(e),()=>this.listeners.delete(e)}render(e=this.scene){this.renderer.render(e,this.camera)}start(e){const t=()=>{const n=Math.min(.05,this.clock.getDelta());e(n,this.clock.elapsedTime)};this.renderer.setAnimationLoop(t)}}class Jg{constructor(e){this.canvas=e,this.keys=new Set,this.justPressed=new Set,this.look={dx:0,dy:0},this.wheel=0,this.dragging=!1,this.enabled=!0,this.touchMove={x:0,y:0},this.pointerId=null,this.lastPointer={x:0,y:0},this.sensitivity=1,this.invertY=!1,this.actionHandlers=new Map,this.bind()}bind(){globalThis.addEventListener("keydown",t=>{if(!this.enabled)return;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code);const n=this.actionHandlers.get(t.code);n&&!t.repeat&&n(t)}),globalThis.addEventListener("keyup",t=>{this.keys.delete(t.code)}),globalThis.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("pointerdown",t=>{this.enabled&&(t.button!==0&&t.button!==2||(this.dragging=!0,this.pointerId=t.pointerId,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,this.canvas.setPointerCapture?.(t.pointerId)))}),this.canvas.addEventListener("pointermove",t=>{if(!this.enabled||!this.dragging||t.pointerId!==this.pointerId)return;const n=t.clientX-this.lastPointer.x,s=t.clientY-this.lastPointer.y;this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,this.look.dx+=n,this.look.dy+=s});const e=t=>{t.pointerId===this.pointerId&&(this.dragging=!1,this.pointerId=null)};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("wheel",t=>{this.enabled&&(this.wheel+=Math.sign(t.deltaY))},{passive:!0})}onAction(e,t){this.actionHandlers.set(e,t)}isDown(e){return this.keys.has(e)}consumePressed(e){return this.justPressed.has(e)?(this.justPressed.delete(e),!0):!1}consumeLook(){const e={dx:this.look.dx*this.sensitivity,dy:this.look.dy*this.sensitivity*(this.invertY?-1:1)};return this.look.dx=0,this.look.dy=0,e}consumeWheel(){const e=this.wheel;return this.wheel=0,e}getMoveVector(){let e=0,t=0;(this.isDown("KeyW")||this.isDown("ArrowUp"))&&(t+=1),(this.isDown("KeyS")||this.isDown("ArrowDown"))&&(t-=1),(this.isDown("KeyD")||this.isDown("ArrowRight"))&&(e+=1),(this.isDown("KeyA")||this.isDown("ArrowLeft"))&&(e-=1),(this.touchMove.x||this.touchMove.y)&&(e+=this.touchMove.x,t+=this.touchMove.y);const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,y:t}}setTouchMove(e,t){this.touchMove.x=e,this.touchMove.y=t}clearFrame(){this.justPressed.clear()}setEnabled(e){this.enabled=e,e||(this.keys.clear(),this.touchMove.x=0,this.touchMove.y=0,this.dragging=!1)}}const ln={Nature:{id:"Nature",color:"#63c96b",dark:"#1d4d2b",icon:"leaf",blurb:"Patient, restorative, and impossible to uproot."},Fire:{id:"Fire",color:"#ff7a45",dark:"#5a1c0d",icon:"flame",blurb:"Bright, hungry, and always moving forward."},Frost:{id:"Frost",color:"#7ad9ff",dark:"#123b52",icon:"snow",blurb:"Quiet power that slows the world to a crawl."},Water:{id:"Water",color:"#3f9bff",dark:"#102f5e",icon:"drop",blurb:"Adaptable, flowing, and relentless over time."},Stone:{id:"Stone",color:"#c8a26a",dark:"#443222",icon:"stone",blurb:"Enduring forms that outlast every storm."},Storm:{id:"Storm",color:"#ffe066",dark:"#4a3a08",icon:"bolt",blurb:"Fast, crackling, and impossible to pin down."},Astral:{id:"Astral",color:"#c08bff",dark:"#2c1650",icon:"star",blurb:"Drawn from starlight, rifts, and impossible distances."},Spirit:{id:"Spirit",color:"#ff8fc7",dark:"#4c1832",icon:"spirit",blurb:"Present in the space between memory and dream."}},Qg=["Nature","Fire","Frost","Water","Stone","Storm","Astral","Spirit"],es=Qg;function jg(i,e=[]){if(!ln[i]||!Array.isArray(e)||e.length===0)return 1;let t=1;const n=es.indexOf(i);for(const s of e){const r=es.indexOf(s);if(r===-1)continue;const a=(r-n+es.length)%es.length;a===1||a===2?t*=2:(a===es.length-1||a===es.length-2)&&(t*=.5)}return t}const $s={common:{id:"common",label:"Common",color:"#a9b8b0",weight:52,statBonus:0},uncommon:{id:"uncommon",label:"Uncommon",color:"#66d38f",weight:27,statBonus:4},rare:{id:"rare",label:"Rare",color:"#65b8ff",weight:14,statBonus:9},epic:{id:"epic",label:"Epic",color:"#c58cff",weight:5.4,statBonus:15},legendary:{id:"legendary",label:"Legendary",color:"#ffd166",weight:1.5,statBonus:26},ultra:{id:"ultra",label:"Ultra Rare",color:"#ffffff",weight:.1,statBonus:44}},ev={tiny:{label:"Tiny",scale:.62,radius:.45},small:{label:"Small",scale:.82,radius:.62},medium:{label:"Medium",scale:1,radius:.8},large:{label:"Large",scale:1.3,radius:1.05},colossal:{label:"Colossal",scale:1.75,radius:1.5}},lt={hub:{id:"hub",name:"Hearthlight Haven",short:"Haven",color:"#f3c987",ground:"#c8aa7a",accent:"#ffd166",description:"A warm, protected waystation built around a fallen star.",center:[0,0],radius:22,levelRange:[1,1]},verdant:{id:"verdant",name:"Verdant Hollow",short:"Verdant",color:"#63c96b",ground:"#4d9a52",accent:"#c7ff8a",description:"A layered green basin of singing leaves, old roots, and clear streams.",center:[0,-72],radius:40,levelRange:[3,11]},ember:{id:"ember",name:"Ember Reach",short:"Ember",color:"#ff7a45",ground:"#4a302c",accent:"#ffb35c",description:"A black-glass caldera where rivers of light carve safe channels.",center:[80,-16],radius:38,levelRange:[8,18]},tide:{id:"tide",name:"Tidefall Coast",short:"Tide",color:"#3f9bff",ground:"#7fb9c9",accent:"#9be8ff",description:"Shell-white beaches, breathing tide pools, and coral towers full of sound.",center:[-80,-12],radius:39,levelRange:[6,16]},frost:{id:"frost",name:"Frostveil Peaks",short:"Frost",color:"#7ad9ff",ground:"#b7d7e6",accent:"#e8fbff",description:"Snowbound shelves and blue ice cathedrals under a pale aurora.",center:[48,80],radius:37,levelRange:[12,22]},astral:{id:"astral",name:"Astral Scar",short:"Astral",color:"#c08bff",ground:"#514268",accent:"#f5c8ff",description:"A luminous wound in the world where crystals remember the sky.",center:[-54,78],radius:41,levelRange:[18,30]}},Ci=["verdant","ember","tide","frost","astral"];function al(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function gs(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ui(i){return gs(al(String(i)))}function Hd(i,e){return e[Math.floor(i()*e.length)]}function tv(i,e,t=n=>n.weight??1){const n=e.reduce((r,a)=>r+Math.max(0,t(a)),0);if(n<=0)return e[0];let s=i()*n;for(const r of e)if(s-=Math.max(0,t(r)),s<=0)return r;return e[e.length-1]}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function qr(i="crt"){const e=globalThis.crypto;return e?.randomUUID?`${i}_${e.randomUUID().slice(0,8)}`:`${i}_${Math.random().toString(36).slice(2,10)}`}const Oo=122,Mc=112,nv={verdant:{trees:20,rocks:10,special:8,grass:420,flowers:110},ember:{spires:14,rocks:12,pools:4,grass:0,flowers:0},tide:{corals:16,rocks:8,pools:3,grass:120,flowers:40},frost:{pines:16,rocks:9,spikes:12,grass:90,flowers:0},astral:{crystals:18,rocks:8,floaters:7,grass:60,flowers:30}},iv={"root-shrine":{id:"root-shrine",biome:"verdant",name:"Root Shrine",position:[12,-66],color:"#9cff8a",radius:7},"warm-gate":{id:"warm-gate",biome:"ember",name:"Warm Gate",position:[68,-8],color:"#ffb35c",radius:7},"shell-spire":{id:"shell-spire",biome:"tide",name:"Shell Spire",position:[-70,-4],color:"#9be8ff",radius:7},"ice-obelisk":{id:"ice-obelisk",biome:"frost",name:"Ice Obelisk",position:[42,86],color:"#e8fbff",radius:7},"crystal-ring":{id:"crystal-ring",biome:"astral",name:"Crystal Ring",position:[-48,88],color:"#f5c8ff",radius:8}},Gd=Ci.map(i=>({biome:i,center:lt[i].center}));function Fr(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function He(i,e){const t=Math.hypot(i,e);let n=Math.sin(i*.047)*Math.cos(e*.041)*1.1;n+=Math.sin(i*.11+e*.07)*.45,n+=Math.cos(e*.09-i*.03)*.42,n+=Math.sin(i*.021-e*.019)*.9;const s=Fr(18,36,t);n*=s;for(const r of Ci){const[a,o]=lt[r].center,l=Math.hypot(i-a,e-o),c=lt[r].radius,d=1-Fr(c*.28,c*1.02,l);d>0&&(n=n*(1-d*.82)+Math.sin(l*.14)*.18*d)}return n+=Fr(98,Oo,t)*11,n}function bc(i,e){let t=1/0;for(const n of Gd){const[s,r]=n.center,a=s,o=r,l=Math.hypot(a,o),c=Math.max(0,Math.min(1,(i*a+e*o)/(l*l))),d=a*c,h=o*c;t=Math.min(t,Math.hypot(i-d,e-h))}return t}function Vd(i,e){if(Math.hypot(i,e)<24)return"hub";let n="verdant",s=1/0;for(const r of Ci){const[a,o]=lt[r].center,l=Math.hypot(i-a,e-o)/lt[r].radius;l<s&&(s=l,n=r)}return n}function sv(i,e){return Vd(i,e)}function rv(i,e){const t=Vd(i,e),n=lt[t],s=new De(n.ground),r=Math.hypot(i,e),a=1-Fr(20,34,r);t!=="hub"&&a>0&&s.lerp(new De(lt.hub.ground),a*.65);const o=Math.sin(i*.31+e*.17)*.03+Math.cos(e*.23-i*.13)*.025;return s.offsetHSL(o*.18,0,o),s}function se(i,e={}){return new pn({color:i,flatShading:!0,roughness:e.roughness??.86,metalness:e.metalness??.02,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity||0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side||gi,depthWrite:e.depthWrite??!0})}function ye(i,e,t,n,s=[1,1,1],r=[0,0,0]){const a=new be(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}function Nn(i,e="#ffe9b8"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="rgba(11,15,24,0.72)",n.beginPath(),n.roundRect(8,20,496,88,24),n.fill(),n.strokeStyle=e,n.lineWidth=4,n.stroke(),n.font='bold 44px "Trebuchet MS", sans-serif',n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,66);const s=new Ed(t);s.colorSpace=jt;const r=new Sd(new il({map:s,transparent:!0,depthWrite:!1}));return r.scale.set(2.45,.6125,1),r}class av{constructor(e,t="high"){this.scene=e,this.quality=t,this.root=new Ge,e.add(this.root),this.obstacles=[],this.hazards=[],this.interactables=[],this.landmarks=Object.values(iv),this.animated=[],this.particles=[],this.floating=[],this.materials={},this.buildTerrain(),this.buildPaths(),this.buildHub(),this.buildBiomes(),this.buildLandmarks(),this.buildOuterRim()}buildTerrain(){const e=new ds(260,260,112,112);e.rotateX(-Math.PI/2);const t=e.attributes.position,n=new Float32Array(t.count*3),s=new De;for(let l=0;l<t.count;l++){const c=t.getX(l),d=t.getZ(l);t.setY(l,He(c,d)),s.copy(rv(c,d)),n[l*3]=s.r,n[l*3+1]=s.g,n[l*3+2]=s.b}e.setAttribute("color",new Ot(n,3)),e.computeVertexNormals();const r=new be(e,new pn({vertexColors:!0,flatShading:!0,roughness:.95,metalness:.02}));this.root.add(r),this.terrain=r;const a=new be(new Qn(330,64),se("#163b52",{roughness:.22,metalness:.35,transparent:!0,opacity:.92}));a.rotation.x=-Math.PI/2,a.position.y=-2.6,this.root.add(a),this.ocean=a;const o=new be(new Ws(Oo-2,230,64),se("#2a7c93",{transparent:!0,opacity:.28,roughness:.3,metalness:.1}));o.rotation.x=-Math.PI/2,o.position.y=-.8,this.root.add(o)}buildPaths(){for(const{biome:e,center:t}of Gd){const[n,s]=t,r=3.8,a=[],o=34;for(let _=0;_<=o;_++){const m=_/o,p=n*m+Math.sin(m*8+n)*r*m*(1-m),M=s*m+Math.cos(m*7+s)*r*m*(1-m);a.push([p,M])}const l=3.4,c=[],d=[],h=[],u=new De(lt[e].accent);for(let _=0;_<a.length;_++){const[m,p]=a[_],M=a[Math.max(0,_-1)],R=a[Math.min(a.length-1,_+1)],S=R[0]-M[0],w=R[1]-M[1],E=Math.hypot(S,w)||1,A=-w/E,y=S/E;for(const b of[-1,1]){const C=m+A*l*b,L=p+y*l*b,N=He(C,L)+.09;c.push(C,N,L);const B=.55+_%3*.04;h.push(B,B*.88,B*.64)}if(_<a.length-1){const b=_*2;d.push(b,b+1,b+2,b+1,b+3,b+2)}}const f=new xt;f.setAttribute("position",new et(c,3)),f.setAttribute("color",new et(h,3)),f.setIndex(d),f.computeVertexNormals();const g=new be(f,new pn({vertexColors:!0,flatShading:!0,roughness:.9,metalness:.04}));this.root.add(g);for(let _=6;_<a.length-2;_+=7){const[m,p]=a[_];this.addPathLantern(m,p,u)}}}addPathLantern(e,t,n){const s=He(e,t),r=ye(this.root,new Ve(.08,.11,1.7,5),se("#4b4042"),[e,s+.85,t]);r.castShadow=!1;const a=new be(new Wt(.18,8,6),se(n,{emissive:n,emissiveIntensity:1.2,roughness:.4}));a.position.set(e,s+1.74,t),this.root.add(a);const o=new is(n,.9,7,2);o.position.set(e,s+1.9,t),this.root.add(o)}buildHub(){const e=new Ge;this.root.add(e);const t=new be(new Ve(23,24,.5,48),se("#b9a27c",{roughness:.9}));t.position.y=0,e.add(t);const n=new be(new Ve(12.5,13,.54,40),se("#d8c29b",{roughness:.82}));n.position.y=.03,e.add(n);const s=new be(new Ve(5.2,5.4,.58,8),se("#f3d79f",{roughness:.6,metalness:.15}));s.position.y=.06,e.add(s);for(let r=0;r<16;r++){const a=r/16*Math.PI*2;ye(e,new dt(3.4,.5,.75),se(r%2?"#8e7b63":"#9d896e"),[Math.cos(a)*16.5,.38,Math.sin(a)*16.5],[1,1,1],[0,-a,0])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2+.4,o=Math.cos(a)*12,l=Math.sin(a)*12,c=ye(e,new Ve(1.2,1.4,.65,8),se("#6d5847"),[o,.34,l]);c.rotation.y=a;for(let d=0;d<5;d++){const h=o+Math.cos(d*2.1)*.55,u=l+Math.sin(d*2.1)*.55;ye(e,new Qt(.22,0),se("#7fd86c",{emissive:"#3f8f4a",emissiveIntensity:.08}),[h,.85,u])}}this.buildFountain(e,-6.5,-2.5),this.buildShop(e,9.5,5.5),this.buildTreadmillStation(e,9.5,-8.5),this.buildQuestBoard(e,-9.5,6.5),this.buildGuide(e,0,8.5),this.buildPracticeRing(e,-3.5,-13),this.buildArch(e,0,-20,"verdant"),this.buildArch(e,20,-4,"ember"),this.buildArch(e,-20,-3,"tide"),this.buildArch(e,13,18,"frost"),this.buildArch(e,-14,17,"astral"),this.interactables.push({id:"guide",type:"guide",label:"Talk to Guide Wren",position:new P(0,He(0,8.5),8.5),radius:3.4}),this.interactables.push({id:"shop",type:"shop",label:"Browse Ember & Elm Supplies",position:new P(9.5,He(9.5,5.5),5.5),radius:3.6}),this.interactables.push({id:"treadmill",type:"training",label:"Use the Treadmills",position:new P(9.5,He(9.5,-8.5),-8.5),radius:4}),this.interactables.push({id:"questboard",type:"quests",label:"Read the Quest Board",position:new P(-9.5,He(-9.5,6.5),6.5),radius:3.4}),this.interactables.push({id:"fountain",type:"heal",label:"Rest at the Starwell",position:new P(-6.5,He(-6.5,-2.5),-2.5),radius:3.8}),this.interactables.push({id:"practice",type:"practice",label:"Enter the Practice Ring",position:new P(-3.5,He(-3.5,-13),-13),radius:3.6})}buildFountain(e,t,n){ye(e,new Ve(2.6,2.9,.9,12),se("#8f8069"),[t,.45,n]);const s=new be(new Ve(2.15,2.15,.12,24),se("#58d8ff",{emissive:"#39b7e8",emissiveIntensity:.35,transparent:!0,opacity:.8,roughness:.16}));s.position.set(t,.94,n),e.add(s),this.animated.push({type:"spin",mesh:s,speed:.16}),ye(e,new Ve(.34,.46,2.6,8),se("#b6a88b"),[t,1.9,n]);const r=new be(new Qt(.58,1),se("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:1.1,transparent:!0,opacity:.92}));r.position.set(t,3.35,n),e.add(r),this.animated.push({type:"bob",mesh:r,baseY:3.35,amplitude:.16,speed:1.7});const a=new is(6277375,2.2,14,2);a.position.set(t,3.4,n),e.add(a);const o=[];for(let l=0;l<3;l++){const c=new be(new Tn(2.4+l*.25,.02,6,40),se("#a9edff",{emissive:"#5fc8ff",emissiveIntensity:.5,transparent:!0,opacity:.35-l*.07}));c.rotation.x=Math.PI/2,c.position.set(t,1+l*.05,n),e.add(c),o.push(c)}this.animated.push({type:"rings",meshes:o,center:[t,n]}),this.obstacles.push({x:t,z:n,r:2.9})}buildShop(e,t,n){const s=He(t,n),r=new Ge;r.position.set(t,s,n),r.rotation.y=-.4,e.add(r),ye(r,new dt(4.6,.35,3.2),se("#7b5a40"),[0,1,0]),ye(r,new dt(4.4,2,.2),se("#5c4433"),[0,2,-1.4]);for(const l of[-1,1])ye(r,new Ve(.1,.12,2.4,5),se("#6b4a35"),[l*2.05,2.1,1.4]);for(let l=0;l<5;l++)ye(r,new dt(.9,.12,3.5),se(l%2?"#d4814f":"#f0c07b"),[-1.8+l*.9,3.2,0],[1,1,1],[0,0,0]);for(let l=0;l<4;l++)ye(r,new Ve(.22,.22,.1,8),se(["#9fe7ff","#c08bff","#63c96b","#ffd166"][l],{emissive:["#9fe7ff","#c08bff","#63c96b","#ffd166"][l],emissiveIntensity:.12}),[-1.4+l*.85,1.27,.4]);const a=this.makeNpc("#d18b5f","#48556c","shopkeeper");a.position.set(t+1.4,s,n-.4),a.rotation.y=2.5,e.add(a),this.animated.push({type:"npc",group:a,baseY:s});const o=Nn("EMBER & ELM","#ffd166");o.position.set(t,s+4.4,n),e.add(o),this.obstacles.push({x:t,z:n,r:2.8})}buildTreadmillStation(e,t,n){const s=He(t,n),r=new Ge;r.position.set(t,s,n),e.add(r),ye(r,new Ve(5.4,5.8,.4,10),se("#85705b"),[0,.2,0]),ye(r,new dt(8,.3,4.6),se("#5c4a3d"),[0,.45,-.5]);for(const[l,c]of[-1.8,1.8].entries()){const d=new Ge;d.position.set(c,.65,-.5),ye(d,new dt(2.8,.28,1.6),se("#3d4652"),[0,0,0]);for(let u=0;u<4;u++){const f=ye(d,new Ve(.18,.18,2.4,8),se("#aeb7bd",{metalness:.45,roughness:.45}),[0,.18,-.6+u*.4],[1,1,1],[0,0,Math.PI/2]);f.rotation.z=Math.PI/2}ye(d,new dt(.18,1.1,.18),se("#d4814f"),[-1.2,.8,-.6]),ye(d,new dt(.18,1.1,.18),se("#d4814f"),[1.2,.8,-.6]);const h=ye(d,new dt(2.2,.08,.6),se("#ffd166",{emissive:"#ffd166",emissiveIntensity:.2}),[0,.5,.55]);h.rotation.x=-.35,r.add(d),this.animated.push({type:"treadmill",group:d,offset:l})}const a=this.makeNpc("#8bbf74","#d9b56c","attendant");a.position.set(t+3.4,s,n+2),a.rotation.y=-2.3,e.add(a),this.animated.push({type:"npc",group:a,baseY:s});const o=Nn("TRAINING YARD","#9be8ff");o.position.set(t,s+4,n),e.add(o),this.obstacles.push({x:t,z:n,r:4.1})}buildQuestBoard(e,t,n){const s=He(t,n),r=new Ge;r.position.set(t,s,n),r.rotation.y=.4,e.add(r),ye(r,new dt(3.6,2.4,.26),se("#6d5038"),[0,1.9,0]),ye(r,new dt(3.2,2,.1),se("#8c6a49"),[0,1.9,.17]);for(const o of[-1,1])ye(r,new Ve(.14,.18,3.4,5),se("#513a28"),[o*1.5,1.4,0]);for(let o=0;o<3;o++)ye(r,new dt(.7,.48,.05),se("#e8d7ae"),[-.9+o*.9,2.2-o%2*.4,.25],[1,1,1],[0,0,(o-1)*.05]);const a=Nn("BOUNTIES","#ffd166");a.position.set(t,s+3.9,n),e.add(a),this.obstacles.push({x:t,z:n,r:2.2})}buildGuide(e,t,n){const s=He(t,n),r=new Ge;r.position.set(t,s,n),e.add(r),ye(r,new ft(.62,1.8,7),se("#6b7bd8"),[0,.9,0]),ye(r,new Qt(.4,1),se("#f1c9a5"),[0,1.95,0]),ye(r,new ft(.48,1,5),se("#4853a3"),[0,2.3,-.05],[1,1,1],[0,0,0]),ye(r,new Ve(.045,.06,2.2,5),se("#a88c60"),[.55,1.15,.1],[1,1,1],[0,0,-.12]);const a=ye(r,new Qt(.22,1),se("#a9edff",{emissive:"#5fc8ff",emissiveIntensity:1}),[.68,2.25,.15]);this.animated.push({type:"bob",mesh:a,baseY:s+2.25,amplitude:.12,speed:2}),this.animated.push({type:"npc",group:r,baseY:s});const o=Nn("GUIDE WREN","#9be8ff");o.position.set(t,s+3.2,n),e.add(o),this.obstacles.push({x:t,z:n,r:1})}buildPracticeRing(e,t,n){const s=He(t,n),r=new be(new Tn(4.2,.16,8,48),se("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:.6,roughness:.4}));r.rotation.x=Math.PI/2,r.position.set(t,s+.25,n),e.add(r),this.animated.push({type:"spin",mesh:r,speed:.18});const a=Nn("PRACTICE RING","#9be8ff");a.position.set(t,s+2.7,n),e.add(a)}buildArch(e,t,n,s){const r=He(t,n),a=lt[s].accent,o=new Ge;o.position.set(t,r,n),o.rotation.y=Math.atan2(-t,-n)+Math.PI,e.add(o);for(const c of[-1,1])ye(o,new Ve(.38,.58,6.8,5),se("#75675a"),[c*3.1,3.4,0]),ye(o,new ft(.72,1.2,4),se(a,{emissive:a,emissiveIntensity:.22}),[c*3.1,7.2,0]);ye(o,new dt(7,.5,.6),se("#75675a"),[0,6.7,0]);const l=ye(o,new dt(3.6,1,.12),se(a,{emissive:a,emissiveIntensity:.15}),[0,5.7,.35]);l.rotation.z=.02,this.obstacles.push({x:t-3.1*Math.cos(o.rotation.y),z:n+3.1*Math.sin(o.rotation.y),r:.8}),this.obstacles.push({x:t+3.1*Math.cos(o.rotation.y),z:n-3.1*Math.sin(o.rotation.y),r:.8})}makeNpc(e,t,n){const s=new Ge;return ye(s,new ft(.46,1.5,7),se(e),[0,.75,0]),ye(s,new Qt(.34,1),se("#f1c9a5"),[0,1.55,0]),ye(s,new ft(.4,.55,5),se(t),[0,1.79,-.05]),ye(s,new Ve(.07,.09,1,4),se(t),[-.36,1,0],[1,1,1],[0,0,.18]),ye(s,new Ve(.07,.09,1,4),se(t),[.36,1,0],[1,1,1],[0,0,-.18]),s.userData.role=n,s}buildBiomes(){for(const t of Ci){const n=ui(`biome-${t}-v3`),s=lt[t].center,r=lt[t].radius,a=nv[t],o=(c,d,h=5)=>this.isBlocked(c,d,h),l=(c=0)=>{const d=n()*Math.PI*2,h=r*(.32+n()*.62);return[s[0]+Math.cos(d)*h,s[1]+Math.sin(d)*h]};if(t==="verdant"){for(let c=0;c<a.trees;c++){const[d,h]=l();o(d,h,6)||this.addTree(d,h,n,"verdant")}for(let c=0;c<a.rocks;c++){const[d,h]=l();o(d,h,4)||this.addRock(d,h,n,"#6e8060",.6+n()*.7)}for(let c=0;c<a.special;c++){const[d,h]=l();o(d,h,3)||this.addMushroom(d,h,n)}this.addGrassInstances(s,r,a.grass,"#5cc45f",n),this.addFlowerInstances(s,r,a.flowers,n),this.addPond(s[0]-14,s[1]+10,6.5,"#3f9bff"),this.addStream()}else if(t==="ember"){for(let c=0;c<a.spires;c++){const[d,h]=l();o(d,h,5)||this.addBasaltSpire(d,h,n)}for(let c=0;c<a.rocks;c++){const[d,h]=l();o(d,h,4)||this.addRock(d,h,n,"#463c3a",.7+n()*.8)}for(let c=0;c<a.pools;c++){const[d,h]=l(7);this.addLavaPool(d,h,3.2+n()*2.4)}this.addEmberParticles(n)}else if(t==="tide"){for(let c=0;c<a.corals;c++){const[d,h]=l();o(d,h,4)||this.addCoral(d,h,n)}for(let c=0;c<a.rocks;c++){const[d,h]=l();o(d,h,4)||this.addRock(d,h,n,"#8b9b9c",.55+n()*.55)}for(let c=0;c<a.pools;c++){const[d,h]=l(8);this.addPond(d,h,5+n()*3,"#49c7e8")}this.addGrassInstances(s,r,a.grass,"#5b9f8a",n),this.addFlowerInstances(s,r,a.flowers,n,!0),this.addShellProps(s,r,n)}else if(t==="frost"){for(let c=0;c<a.pines;c++){const[d,h]=l();o(d,h,5)||this.addPine(d,h,n)}for(let c=0;c<a.rocks;c++){const[d,h]=l();o(d,h,4)||this.addRock(d,h,n,"#9fbdc9",.6+n()*.8)}for(let c=0;c<a.spikes;c++){const[d,h]=l();o(d,h,4)||this.addIceSpike(d,h,n)}this.addPond(s[0]-13,s[1]-8,6,"#9be8ff",!0),this.addGrassInstances(s,r,a.grass,"#e8fbff",n),this.addSnowParticles(n)}else if(t==="astral"){for(let c=0;c<a.crystals;c++){const[d,h]=l();o(d,h,4)||this.addCrystal(d,h,n)}for(let c=0;c<a.rocks;c++){const[d,h]=l();o(d,h,4)||this.addRock(d,h,n,"#62517a",.6+n()*.7)}for(let c=0;c<a.floaters;c++){const[d,h]=l();o(d,h,4)||this.addFloatingRock(d,h,n)}this.addGrassInstances(s,r,a.grass,"#b98bff",n),this.addFlowerInstances(s,r,a.flowers,n,!1,!0)}}const e=ui("outer-filler-v2");for(let t=0;t<28;t++){const n=e()*Math.PI*2,s=52+e()*55,r=Math.cos(n)*s,a=Math.sin(n)*s;this.isBlocked(r,a,6)||bc(r,a)<7||(e()>.55?this.addRock(r,a,e,"#66715f",.8+e()):this.addTree(r,a,e,"verdant"))}}buildLandmarks(){for(const e of this.landmarks){const[t,n]=e.position,s=He(t,n);e.id==="root-shrine"&&this.buildRootShrine(t,s,n),e.id==="warm-gate"&&this.buildWarmGate(t,s,n),e.id==="shell-spire"&&this.buildShellSpire(t,s,n),e.id==="ice-obelisk"&&this.buildIceObelisk(t,s,n),e.id==="crystal-ring"&&this.buildCrystalRing(t,s,n),this.interactables.push({id:`landmark-${e.id}`,type:"landmark",label:`Inspect ${e.name}`,landmark:e.id,biome:e.biome,position:new P(t,s,n),radius:e.radius})}}buildRootShrine(e,t,n){const s=new Ge;s.position.set(e,t,n),this.root.add(s);for(let o=0;o<5;o++){const l=o/5*Math.PI*2,c=ye(s,new Ve(.36,.7,3.5,5),se("#5f4a33"),[Math.cos(l)*2.2,1.7,Math.sin(l)*2.2],[1,1,1],[Math.cos(l)*.3,0,Math.sin(l)*.3]);c.rotation.z=Math.sin(l)*.2}ye(s,new Ve(2.2,2.6,.7,8),se("#7c8f66"),[0,.35,0]);const r=ye(s,new Qt(.8,1),se("#a7ff8f",{emissive:"#63c96b",emissiveIntensity:1,transparent:!0,opacity:.9}),[0,2.7,0]);this.animated.push({type:"bob",mesh:r,baseY:t+2.7,amplitude:.18,speed:1.2}),this.animated.push({type:"spin",mesh:r,speed:.22}),this.obstacles.push({x:e,z:n,r:2.4});const a=Nn("ROOT SHRINE","#9cff8a");a.position.set(e,t+5.2,n),this.root.add(a)}buildWarmGate(e,t,n){const s=new Ge;s.position.set(e,t,n),this.root.add(s);for(let l=0;l<2;l++){const c=l?.8:-.8;ye(s,new dt(1.3,5.8,1.3),se("#44312f"),[Math.sin(c)*3.2,2.9,Math.cos(c)*.2],[1,1,1],[0,c,0])}ye(s,new dt(7,.9,1.2),se("#4f3732"),[0,5.6,0]);const r=ye(s,new ds(4.2,4.2),se("#ff8a4c",{emissive:"#ff5e2c",emissiveIntensity:1.2,transparent:!0,opacity:.55,side:sn}),[0,3.1,0]);this.animated.push({type:"flicker",mesh:r,base:.55});const a=new is(16742981,2.4,12,2);a.position.set(e,t+3.2,n),this.root.add(a),this.obstacles.push({x:e-2.6,z:n,r:1}),this.obstacles.push({x:e+2.6,z:n,r:1});const o=Nn("WARM GATE","#ffb35c");o.position.set(e,t+6.7,n),this.root.add(o)}buildShellSpire(e,t,n){const s=new Ge;s.position.set(e,t,n),this.root.add(s);let r=0;for(let l=0;l<6;l++){const c=2.7-l*.34,d=1.2,h=ye(s,new Ve(c*.8,c,d,12),se(l%2?"#f1d9c2":"#e7bea6"),[0,r+d/2,0]);h.rotation.y=l*.3,r+=d}const a=ye(s,new Tn(2.5,.16,6,36),se("#9be8ff",{emissive:"#4fcfff",emissiveIntensity:.6}),[0,2.4,0],[1,1,1],[Math.PI/2,0,0]);this.animated.push({type:"spin",mesh:a,speed:.3}),this.obstacles.push({x:e,z:n,r:3});const o=Nn("SHELL SPIRE","#9be8ff");o.position.set(e,t+10.2,n),this.root.add(o)}buildIceObelisk(e,t,n){const s=new Ge;s.position.set(e,t,n),this.root.add(s);for(const o of[-2.1,0,2.1]){const l=o===0?9.5:5.4;ye(s,new ft(o===0?1.25:.8,l,5),se("#bff3ff",{emissive:"#67cfff",emissiveIntensity:.24,transparent:!0,opacity:.85,roughness:.18}),[o,l/2,0])}ye(s,new Ve(3.5,3.9,.65,9),se("#d8eef5"),[0,.32,0]);const r=new is(8051199,2.4,16,2);r.position.set(e,t+7,n),this.root.add(r),this.obstacles.push({x:e,z:n,r:3.4});const a=Nn("ICE OBELISK","#e8fbff");a.position.set(e,t+11.4,n),this.root.add(a)}buildCrystalRing(e,t,n){const s=new Ge;s.position.set(e,t,n),this.root.add(s);for(let l=0;l<9;l++){const c=l/9*Math.PI*2,d=4+l%3*1.8;ye(s,new ft(.7,d,5),se("#e2bdff",{emissive:"#c08bff",emissiveIntensity:.5,transparent:!0,opacity:.88,roughness:.2}),[Math.cos(c)*6.5,d/2,Math.sin(c)*6.5],[1,1,1],[Math.cos(c)*.12,0,Math.sin(c)*.12]),this.obstacles.push({x:e+Math.cos(c)*6.5,z:n+Math.sin(c)*6.5,r:.8})}const r=new be(new Ve(1.7,2.4,16,12,1,!0),se("#d5a8ff",{emissive:"#b46bff",emissiveIntensity:.8,transparent:!0,opacity:.18,side:sn}));r.position.y=8,s.add(r),this.animated.push({type:"flicker",mesh:r,base:.18});const a=new is(12618751,3.2,22,2);a.position.set(e,t+6,n),this.root.add(a);const o=Nn("CRYSTAL RING","#f5c8ff");o.position.set(e,t+15,n),this.root.add(o)}buildOuterRim(){const e=ui("outer-rim-v2");for(let t=0;t<64;t++){const n=t/64*Math.PI*2,s=Oo+e()*8,r=Math.cos(n)*s,a=Math.sin(n)*s,o=4+e()*9;ye(this.root,new mi(o*.55,0),se("#5c5b63"),[r,He(r,a)+o*.3,a],[1,1+e()*.5,1],[0,e()*Math.PI,0]),this.obstacles.push({x:r,z:a,r:o*.45})}}addTree(e,t,n,s){const r=He(e,t),a=.85+n()*.8,o=new Ge;o.position.set(e,r,t),o.rotation.y=n()*Math.PI*2,this.root.add(o),ye(o,new Ve(.22*a,.42*a,2.7*a,5),se("#6b5138"),[0,1.35*a,0]);const l=s==="verdant"?["#4b9e4d","#63c96b","#88e07d"]:["#557a58","#6b9b66","#8cb879"];for(let c=0;c<4;c++)ye(o,new Qt((1.1-c*.16)*a,0),se(l[c%l.length]),[Math.cos(c*2.3)*.5*a,(2.8+c*.66)*a,Math.sin(c*2.3)*.5*a],[1.2,.9,1.2],[n(),n(),n()]);n()>.55&&ye(o,new Qt(.18*a,0),se("#ffd166",{emissive:"#ffd166",emissiveIntensity:.6}),[.7*a,2.5*a,.4*a]),this.obstacles.push({x:e,z:t,r:.75*a})}addPine(e,t,n){const s=He(e,t),r=.8+n()*.7,a=new Ge;a.position.set(e,s,t),this.root.add(a),ye(a,new Ve(.16*r,.3*r,2.2*r,5),se("#5c4a3d"),[0,1.1*r,0]);for(let o=0;o<4;o++)ye(a,new ft((1.5-o*.28)*r,2.1*r,6),se(o%2?"#d9f4fb":"#a6d7e2"),[0,(1.7+o*1)*r,0]);this.obstacles.push({x:e,z:t,r:.8*r})}addRock(e,t,n,s,r=1){const a=He(e,t);ye(this.root,new mi(r,0),se(s),[e,a+r*.55,t],[1.2,.9,1],[n(),n(),n()]),this.obstacles.push({x:e,z:t,r:r*.9})}addMushroom(e,t,n){const s=He(e,t),r=.5+n()*.8,a=new Ge;a.position.set(e,s,t),this.root.add(a),ye(a,new Ve(.1*r,.16*r,.8*r,5),se("#d9c7a8"),[0,.4*r,0]),ye(a,new Wt(.55*r,8,5,0,Math.PI*2,0,Math.PI/2),se(n()>.5?"#c77dff":"#ff8fc7",{emissive:"#c77dff",emissiveIntensity:.2}),[0,.82*r,0],[1.2,.65,1.2])}addCoral(e,t,n){const s=He(e,t),r=.7+n()*.9,a=new Ge;a.position.set(e,s,t),this.root.add(a);const o=["#ff8fc7","#ffb35c","#9be8ff","#c08bff"];for(let l=0;l<4;l++){const c=n()*Math.PI*2;ye(a,new Ve(.1*r,.24*r,(1.8+n()*2)*r,5),se(o[l%o.length],{emissive:o[l%o.length],emissiveIntensity:.08}),[Math.cos(c)*.4*r,1*r,Math.sin(c)*.4*r],[1,1,1],[Math.cos(c)*.2,0,Math.sin(c)*.2])}this.obstacles.push({x:e,z:t,r:.7*r})}addBasaltSpire(e,t,n){const s=He(e,t),r=2.5+n()*5,a=new Ge;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<3;o++)ye(a,new Ve(.35+n()*.2,.7+n()*.4,r*(.5+n()*.5),5),se(o%2?"#2f2a2f":"#413536"),[Math.cos(o*2.1)*.6,r*.35,Math.sin(o*2.1)*.6],[1,1,1],[Math.cos(o)*.12,0,Math.sin(o)*.12]);ye(a,new dt(.08,r*.7,.08),se("#ff5e2c",{emissive:"#ff5e2c",emissiveIntensity:1.4}),[0,r*.42,.4]),this.obstacles.push({x:e,z:t,r:1})}addIceSpike(e,t,n){const s=He(e,t),r=2+n()*4,a=new Ge;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<3;o++)ye(a,new ft(.5+n()*.3,r*(.6+n()*.4),5),se("#bff3ff",{emissive:"#67cfff",emissiveIntensity:.16,transparent:!0,opacity:.85,roughness:.2}),[Math.cos(o*2.2)*.5,r*.32,Math.sin(o*2.2)*.5],[1,1,1],[Math.cos(o)*.16,0,Math.sin(o)*.16]);this.obstacles.push({x:e,z:t,r:.9})}addCrystal(e,t,n){const s=He(e,t),r=2.5+n()*5,a=new Ge;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<4;o++){const l=r*(.45+n()*.55);ye(a,new ft(.35+n()*.35,l,5),se(o%2?"#d5a8ff":"#b98bff",{emissive:"#b98bff",emissiveIntensity:.4,transparent:!0,opacity:.9,roughness:.2}),[Math.cos(o*1.8)*.5,l*.4,Math.sin(o*1.8)*.5],[1,1,1],[Math.cos(o)*.18,0,Math.sin(o)*.18])}this.obstacles.push({x:e,z:t,r:.85})}addFloatingRock(e,t,n){const s=He(e,t)+4+n()*4,r=new Ge;r.position.set(e,s,t),this.root.add(r),ye(r,new mi(1.1+n()*.7,0),se("#6b5a7d"),[0,0,0],[1.2,1,1],[n(),n(),n()]),ye(r,new ft(.5,1.2,4),se("#b98bff",{emissive:"#b98bff",emissiveIntensity:.4,transparent:!0,opacity:.75}),[0,-1.1,0],[1,1,1],[Math.PI,0,0]),this.floating.push({group:r,baseY:s,phase:n()*Math.PI*2,speed:.5+n()*.5})}addPond(e,t,n,s,r=!1){const a=He(e,t)+.28,o=new be(new Qn(n,28),se(s,{transparent:!0,opacity:r?.78:.72,roughness:.16,metalness:.08,emissive:s,emissiveIntensity:r?.12:.06}));o.rotation.x=-Math.PI/2,o.position.set(e,a,t),this.root.add(o);const l=new be(new Tn(n+.2,.22,5,32),se(r?"#d9f8ff":"#b7a477",{roughness:.9}));l.rotation.x=Math.PI/2,l.position.set(e,a+.02,t),this.root.add(l),this.animated.push({type:"water",mesh:o,phase:ui(`pond-${e}-${t}`)()*10})}addStream(){const e=[];for(let a=0;a<=18;a++){const o=a/18,l=-12+Math.sin(o*5)*4+o*14,c=-27-o*40;e.push([l,c])}const t=new xt,n=[];for(let a=0;a<e.length;a++){const[o,l]=e[a],c=e[Math.min(e.length-1,a+1)],d=e[Math.max(0,a-1)],h=c[0]-d[0],u=c[1]-d[1],f=Math.hypot(h,u)||1;for(const g of[-1,1])n.push(o-u/f*1.5*g,He(o,l)+.2,l+h/f*1.5*g);a<e.length-1&&t.index?.array.push()}const s=[];for(let a=0;a<e.length-1;a++){const o=a*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}t.setAttribute("position",new et(n,3)),t.setIndex(s),t.computeVertexNormals();const r=new be(t,se("#4fb7e8",{transparent:!0,opacity:.72,roughness:.18,emissive:"#2d8fc4",emissiveIntensity:.12}));this.root.add(r),this.animated.push({type:"water",mesh:r,phase:2})}addLavaPool(e,t,n){const s=He(e,t)+.18,r=new be(new Qn(n,24),se("#ff5e2c",{emissive:"#ff4a1a",emissiveIntensity:1.5,roughness:.35}));r.rotation.x=-Math.PI/2,r.position.set(e,s,t),this.root.add(r);const a=new be(new Tn(n-.2,.32,5,28),se("#2f2525"));a.rotation.x=Math.PI/2,a.position.set(e,s+.05,t),this.root.add(a),this.animated.push({type:"lava",mesh:r,phase:Math.random()*5}),this.hazards.push({x:e,z:t,r:n-.4,label:"Scalding lava"})}addGrassInstances(e,t,n,s,r){if(n<=0)return;const a=new ft(.09,.65,3),o=se(s,{roughness:.95}),l=new Fu(a,o,n),c=new It;let d=0;for(let h=0;h<n;h++){const u=r()*Math.PI*2,f=Math.sqrt(r())*t*.92,g=e[0]+Math.cos(u)*f,_=e[1]+Math.sin(u)*f;if(this.isBlocked(g,_,1.2))continue;const m=He(g,_);c.position.set(g,m+.3,_),c.rotation.set((r()-.5)*.2,r()*Math.PI,(r()-.5)*.25),c.scale.setScalar(.6+r()*.9),c.updateMatrix(),l.setMatrixAt(d++,c.matrix)}l.count=d,this.root.add(l)}addFlowerInstances(e,t,n,s,r=!1,a=!1){if(n<=0)return;const o=r?["#ff8fc7","#ffd166","#9be8ff"]:a?["#c08bff","#ff8fc7","#9be8ff"]:["#ffd166","#ff8fc7","#f7fbff"];for(let l=0;l<n;l++){const c=s()*Math.PI*2,d=Math.sqrt(s())*t*.88,h=e[0]+Math.cos(c)*d,u=e[1]+Math.sin(c)*d;if(this.isBlocked(h,u,.8))continue;const f=He(h,u),g=Hd(s,o);ye(this.root,new Wt(.16+s()*.12,6,4),se(g,{emissive:g,emissiveIntensity:a?.5:.08}),[h,f+.35,u],[1,.7,1]),ye(this.root,new Ve(.02,.03,.4,3),se("#4f7d48"),[h,f+.18,u])}}addShellProps(e,t,n){for(let s=0;s<10;s++){const r=n()*Math.PI*2,a=Math.sqrt(n())*t*.8,o=e[0]+Math.cos(r)*a,l=e[1]+Math.sin(r)*a;if(this.isBlocked(o,l,1))continue;const c=He(o,l);ye(this.root,new Wt(.4+n()*.3,8,4,0,Math.PI*2,0,Math.PI/2),se("#f5dfc8"),[o,c+.1,l],[1.2,.5,1],[0,n()*Math.PI,0])}}addEmberParticles(e){const t=this.quality==="low"?70:150,n=new xt,s=new Float32Array(t*3);for(let a=0;a<t;a++)s[a*3]=-80+e()*180,s[a*3+1]=e()*10,s[a*3+2]=-40+e()*130;n.setAttribute("position",new Ot(s,3));const r=new Gs(n,new cs({color:16751180,size:.16,transparent:!0,opacity:.8,blending:bn,depthWrite:!1}));this.root.add(r),this.particles.push({points:r,type:"ember",speed:1.2,bounds:{x:[-80,100],z:[-40,90]}})}addSnowParticles(e){const t=this.quality==="low"?120:260,n=new xt,s=new Float32Array(t*3);for(let a=0;a<t;a++)s[a*3]=10+e()*80,s[a*3+1]=e()*14,s[a*3+2]=42+e()*80;n.setAttribute("position",new Ot(s,3));const r=new Gs(n,new cs({color:16121855,size:.12,transparent:!0,opacity:.85,depthWrite:!1}));this.root.add(r),this.particles.push({points:r,type:"snow",speed:1.5,bounds:{x:[10,90],z:[42,122]}})}isBlocked(e,t,n=4){if(Math.hypot(e,t)<23||bc(e,t)<3.4)return!0;for(const s of this.landmarks){const[r,a]=s.position;if(Math.hypot(e-r,t-a)<(s.radius||6)+1)return!0}for(const s of this.obstacles)if(Math.hypot(e-s.x,t-s.z)<Math.max(n,s.r+1.2))return!0;return!1}resolveCollision(e,t=.6){const n=Math.hypot(e.x,e.z);if(n>Mc){const s=Mc/n;e.x*=s,e.z*=s}for(const s of this.obstacles){const r=e.x-s.x,a=e.z-s.z,o=s.r+t,l=Math.hypot(r,a);if(l<o&&l>1e-4){const c=(o-l)/l;e.x+=r*c,e.z+=a*c}}return e}hazardAt(e){return this.hazards.find(t=>Math.hypot(e.x-t.x,e.z-t.z)<t.r)||null}nearestInteractable(e,t=3.8){let n=null,s=t;for(const r of this.interactables){const a=Math.hypot(e.x-r.position.x,e.z-r.position.z);a<s&&(n=r,s=a)}return n?{...n,distance:s}:null}update(e,t){for(const n of this.animated)if(n.type==="bob")n.mesh.position.y=n.baseY+Math.sin(t*(n.speed||1)+(n.mesh.id||0))*(n.amplitude||.1);else if(n.type==="spin")n.mesh.rotation.z+=e*(n.speed||.2),n.mesh.rotation.y+=e*(n.speed||.2)*.35;else if(n.type==="water")n.mesh.material.opacity=.66+Math.sin(t*1.2+(n.phase||0))*.05;else if(n.type==="lava")n.mesh.material.emissiveIntensity=1.35+Math.sin(t*2.3+(n.phase||0))*.2;else if(n.type==="flicker")n.mesh.material.opacity=(n.base||.4)+Math.sin(t*3.2)*.07;else if(n.type==="rings")for(const[s,r]of n.meshes.entries()){const a=(t*.18+s*.33)%1;r.scale.setScalar(1+a*.18),r.material.opacity=(.35-s*.07)*(1-a*.5)}else if(n.type==="npc")n.group.position.y=n.baseY+Math.sin(t*1.4+n.group.id)*.04;else if(n.type==="treadmill"){const s=n.group.children.filter(r=>r.geometry?.type==="CylinderGeometry");for(const r of s)r.rotation.x+=e*(n.offset%2?1.4:1)}for(const n of this.floating)n.group.position.y=n.baseY+Math.sin(t*n.speed+n.phase)*.7,n.group.rotation.y+=e*.08;for(const n of this.particles){const s=n.points.geometry.attributes.position.array;if(n.type==="ember")for(let r=0;r<s.length;r+=3)s[r+1]+=e*n.speed*(.5+r%7*.08),s[r+1]>12&&(s[r+1]=0);else if(n.type==="snow")for(let r=0;r<s.length;r+=3)s[r+1]-=e*n.speed*(.5+r%5*.1),s[r]+=Math.sin(t+r)*e*.12,s[r+1]<0&&(s[r+1]=14);n.points.geometry.attributes.position.needsUpdate=!0}return this.ocean&&(this.ocean.material.opacity=.9+Math.sin(t*.55)*.025),t}setQuality(e){this.quality=e}}const ov=7.2,lv=11.2,cv=22,dv=7.4;function Fn(i,e={}){return new pn({color:i,flatShading:!0,roughness:e.roughness??.7,metalness:e.metalness??.04,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity||0})}function on(i,e,t,n,s=[1,1,1],r=[0,0,0]){const a=new be(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}class hv{constructor(e,t=[0,0,10]){this.group=new Ge,this.group.position.set(t[0],He(t[0],t[2]),t[2]),e.add(this.group),this.velocity=new P,this.position=this.group.position,this.facing=0,this.cameraYaw=Math.PI,this.cameraPitch=.24,this.cameraDistance=9.4,this.cameraTarget=new P,this.cameraPosition=new P,this.onGround=!0,this.radius=.55,this.speed=0,this.parts={},this.build(),this.cameraPosition.set(0,9,18),this.moving=!1,this.sprinting=!1}build(){const e=Fn("#e8b48f"),t=Fn("#2f7f82"),n=Fn("#1e575c"),s=Fn("#ffcc66"),r=Fn("#352a2a"),a=Fn("#6b4c36"),o=Fn("#cfd6d9",{metalness:.55,roughness:.38}),l=Fn("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:.8}),c=on(this.group,new na(.34,.62,4,8),t,[0,1.06,0],[1,1,.9]);this.parts.body=c,on(this.group,new Ve(.36,.4,.35,8),n,[0,.68,0]),on(this.group,new Wt(.31,10,7),e,[0,1.72,.01]);const d=on(this.group,new Qt(.335,1),r,[0,1.81,-.03],[1,.8,1]);this.parts.hair=d,on(this.group,new Wt(.075,6,5),Fn("#1b1d24"),[-.11,1.74,.27]),on(this.group,new Wt(.075,6,5),Fn("#1b1d24"),[.11,1.74,.27]),on(this.group,new Wt(.09,6,5),e,[0,1.66,.29],[1.2,.6,.55]),on(this.group,new dt(.76,.16,.42),s,[0,1.42,.02],[1,1,1],[0,0,-.03]),on(this.group,new dt(.22,.68,.12),s,[-.28,1.14,-.28],[1,1,1],[.18,0,.24]),on(this.group,new dt(.5,.68,.26),a,[0,1.1,-.38]),on(this.group,new dt(.38,.38,.18),a,[0,.82,-.54]),on(this.group,new Ve(.045,.05,1.35,5),o,[.46,.6,.05],[1,1,1],[.05,0,.04]),on(this.group,new Wt(.08,6,5),l,[.46,1.29,.05]),this.parts.legs=[this.makeLimb(e,a,[-.18,.6,0],.12,.54),this.makeLimb(e,a,[.18,.6,0],.12,.54)],this.parts.arms=[this.makeLimb(e,t,[-.4,1.28,0],.105,.58),this.makeLimb(e,t,[.4,1.28,0],.105,.58)];const h=new be(new Qn(.58,18),new wn({color:724758,transparent:!0,opacity:.3,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.04,this.group.add(h),this.shadow=h}makeLimb(e,t,n,s,r){const a=new Ge;a.position.set(...n);const o=new be(new Ve(s,s*.9,r,5),t);o.position.y=-r/2,a.add(o);const l=new be(new Wt(s*1.2,6,4),e);return l.position.y=-r-s*.3,a.add(l),this.group.add(a),a}update(e,t,n,s=!0){const r=t.consumeLook();if(s){this.cameraYaw-=r.dx*.0045,this.cameraPitch=Tl.clamp(this.cameraPitch+r.dy*.0032,-.03,.88);const p=t.consumeWheel();p&&(this.cameraDistance=Tl.clamp(this.cameraDistance+p*.8,5.5,15))}const a=s?t.getMoveVector():{x:0,y:0},o=s&&(t.isDown("ShiftLeft")||t.isDown("ShiftRight"));this.sprinting=o&&(a.x!==0||a.y!==0);const l=o?lv:ov,c=-Math.sin(this.cameraYaw),d=-Math.cos(this.cameraYaw),h=Math.cos(this.cameraYaw),u=-Math.sin(this.cameraYaw);let f=(c*a.y+h*a.x)*l,g=(d*a.y+u*a.x)*l;s||(f=0,g=0);const _=1-Math.exp(-18*e);this.velocity.x+=(f-this.velocity.x)*_,this.velocity.z+=(g-this.velocity.z)*_,this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.moving=this.speed>.35,s&&t.consumePressed("Space")&&this.onGround&&(this.velocity.y=dv,this.onGround=!1),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,n.resolveCollision(this.position,this.radius);const m=He(this.position.x,this.position.z);if(this.velocity.y-=cv*e,this.position.y+=this.velocity.y*e,this.position.y<=m&&(this.position.y=m,this.velocity.y=0,this.onGround=!0),this.moving){let M=Math.atan2(this.velocity.x,this.velocity.z)-this.facing;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;this.facing+=M*Math.min(1,e*12)}this.group.rotation.y=this.facing,this.animate(e,t),this.updateCamera(e,n)}animate(e,t){const n=performance.now()/1e3,s=this.moving?this.sprinting?1.8:1.1:0;for(const[r,a]of this.parts.legs.entries())a.rotation.x=Math.sin(n*9*Math.max(.4,s)+r*Math.PI)*(this.moving?.62:.02);for(const[r,a]of this.parts.arms.entries())a.rotation.x=Math.sin(n*9*Math.max(.4,s)+r*Math.PI+Math.PI)*(this.moving?.5:.04);this.parts.body&&(this.parts.body.position.y=1.06+Math.abs(Math.sin(n*9*Math.max(.4,s)))*(this.moving?.035:.012)),this.parts.hair&&(this.parts.hair.rotation.z=Math.sin(n*3.2)*.02),this.shadow.position.y=.04+Math.max(0,He(this.position.x,this.position.z)-this.position.y)*.4,this.shadow.scale.setScalar(this.onGround?1:.75)}updateCamera(e,t){const n=new P(this.position.x,this.position.y+1.55,this.position.z),s=Math.cos(this.cameraPitch)*this.cameraDistance,r=new P(Math.sin(this.cameraYaw)*s,Math.sin(this.cameraPitch)*this.cameraDistance+.7,Math.cos(this.cameraYaw)*s);this.cameraTarget.lerp(n,1-Math.exp(-12*e));const a=n.clone().add(r),o=He(a.x,a.z)+1.2;a.y<o&&(a.y=o),this.cameraPosition.lerp(a,1-Math.exp(-9*e))}applyCamera(e){e.position.copy(this.cameraPosition),e.lookAt(this.cameraTarget)}getPosition(){return this.position}teleport(e,t){this.position.set(e,He(e,t),t),this.velocity.set(0,0,0)}setCameraYaw(e){this.cameraYaw=e}}const Te=(i,e,t,n,s,r,a,o,l,c={})=>({id:i,name:e,type:t,power:n,cooldown:s,range:r,shape:a,effect:o,description:l,radius:c.radius??4.2,cone:c.cone??Math.PI/3,knockback:c.knockback??0,icon:c.icon??t.toLowerCase()}),Yr={tackle:Te("tackle","Tackle","Stone",34,1.1,2.6,"single",{kind:"damage"},"A dependable body check.",{icon:"stone"}),focus:Te("focus","Focus","Spirit",0,8,0,"self",{kind:"buff",stat:"attack",amount:.25,duration:7},"Sharpens the next few strikes.",{icon:"spirit"}),rest:Te("rest","Rest","Nature",0,12,0,"self",{kind:"heal",amount:.24},"Recovers a portion of health.",{icon:"leaf"}),screech:Te("screech","Screech","Spirit",0,9,5,"aoe",{kind:"debuff",stat:"defence",amount:.22,duration:6},"A piercing cry that weakens nearby foes.",{icon:"spirit"}),leafLash:Te("leafLash","Leaf Lash","Nature",40,1.5,3.4,"single",{kind:"damage"},"A whip of serrated leaves."),rootSnare:Te("rootSnare","Root Snare","Nature",22,8,4.2,"aoe",{kind:"damage",status:{id:"snare",chance:.7,duration:4}},"Roots burst up and pin movement."),bloomBurst:Te("bloomBurst","Bloom Burst","Nature",0,11,0,"self",{kind:"heal",amount:.3},"A rush of pollen closes wounds."),thornVolley:Te("thornVolley","Thorn Volley","Nature",30,3.8,6.5,"cone",{kind:"damage"},"A fan of hardened thorns."),groveGuard:Te("groveGuard","Grove Guard","Nature",0,13,0,"self",{kind:"shield",amount:.28,duration:8},"Bark and moss form a living barrier."),seedSling:Te("seedSling","Seed Sling","Nature",26,1.9,7,"single",{kind:"damage"},"A hard seed fired with surprising force."),verdantPulse:Te("verdantPulse","Verdant Pulse","Nature",34,7,4.6,"aoe",{kind:"damage",status:{id:"regen",chance:1,duration:5,self:!0}},"Life energy erupts and lingers around the caster."),emberJab:Te("emberJab","Ember Jab","Fire",42,1.6,2.9,"single",{kind:"damage",status:{id:"burn",chance:.25,duration:4}},"A quick strike wrapped in sparks."),flameWave:Te("flameWave","Flame Wave","Fire",32,4.4,5.5,"cone",{kind:"damage",status:{id:"burn",chance:.4,duration:4}},"A rolling sheet of fire."),cinderNova:Te("cinderNova","Cinder Nova","Fire",46,9,5.4,"aoe",{kind:"damage"},"An explosive ring of cinders.",{knockback:2}),heatVeil:Te("heatVeil","Heat Veil","Fire",0,11,0,"self",{kind:"buff",stat:"speed",amount:.3,duration:7},"Shimmering heat makes the body hard to track."),scorchMark:Te("scorchMark","Scorch Mark","Fire",20,6,6.5,"aoe",{kind:"damage",status:{id:"burn",chance:1,duration:6}},"Marks an area with persistent embers."),blazeCharge:Te("blazeCharge","Blaze Charge","Fire",50,7,4.4,"single",{kind:"damage"},"A reckless, blazing rush.",{knockback:3}),hearthGlow:Te("hearthGlow","Hearth Glow","Fire",0,12,0,"self",{kind:"heal",amount:.2},"A controlled inner flame restores strength."),iceShard:Te("iceShard","Ice Shard","Frost",38,1.5,7.5,"single",{kind:"damage",status:{id:"chill",chance:.3,duration:4}},"A clean splinter of glacial ice."),frostNova:Te("frostNova","Frost Nova","Frost",30,7,4.8,"aoe",{kind:"damage",status:{id:"chill",chance:.8,duration:5}},"A wave of cold that slows everything it touches."),snowGuard:Te("snowGuard","Snow Guard","Frost",0,12,0,"self",{kind:"shield",amount:.3,duration:9},"Packed snow hardens into armor."),glacialSpike:Te("glacialSpike","Glacial Spike","Frost",55,9,6,"single",{kind:"damage",status:{id:"stun",chance:.25,duration:1.2}},"A spear of ice erupts from below."),auroraMist:Te("auroraMist","Aurora Mist","Frost",16,8,5.2,"aoe",{kind:"damage",status:{id:"weaken",chance:.6,duration:6}},"Cold light settles over the arena."),rimeShell:Te("rimeShell","Rime Shell","Frost",0,14,0,"self",{kind:"shield",amount:.24,duration:6},"A shell of hoarfrost absorbs punishment."),bubbleBolt:Te("bubbleBolt","Bubble Bolt","Water",36,1.4,7.5,"single",{kind:"damage"},"A compressed bubble fired like a stone."),tidalSweep:Te("tidalSweep","Tidal Sweep","Water",30,4.8,5.2,"cone",{kind:"damage"},"A broad, shoving arc of water.",{knockback:2}),healingSpring:Te("healingSpring","Healing Spring","Water",0,13,0,"self",{kind:"heal",amount:.32},"Cool, clean water mends the body."),torrentRing:Te("torrentRing","Torrent Ring","Water",40,8,5.4,"aoe",{kind:"damage"},"A spiraling ring of current."),mistStep:Te("mistStep","Mist Step","Water",0,9,0,"self",{kind:"buff",stat:"speed",amount:.22,duration:6},"Dissolves into cool mist and reforms elsewhere."),abyssLash:Te("abyssLash","Abyss Lash","Water",48,6.5,3.2,"single",{kind:"damage"},"A dark tendril of deep water."),soothingRain:Te("soothingRain","Soothing Rain","Water",0,15,0,"self",{kind:"heal",amount:.2,status:{id:"regen",chance:1,duration:6}},"A private rain shower that keeps healing."),pebbleShot:Te("pebbleShot","Pebble Shot","Stone",34,1.5,7,"single",{kind:"damage"},"A fistful of stones, aimed precisely."),quakeStomp:Te("quakeStomp","Quake Stomp","Stone",44,7.5,5,"aoe",{kind:"damage",status:{id:"snare",chance:.5,duration:3}},"The ground buckles around the impact.",{knockback:1}),stoneSkin:Te("stoneSkin","Stone Skin","Stone",0,13,0,"self",{kind:"shield",amount:.34,duration:9},"A second skin of layered slate."),rockSlide:Te("rockSlide","Rock Slide","Stone",38,6,5.6,"cone",{kind:"damage"},"A tumbling wall of rubble.",{knockback:2}),gritGuard:Te("gritGuard","Grit Guard","Stone",0,10,0,"self",{kind:"buff",stat:"defence",amount:.3,duration:7},"Digs in and refuses to move."),fossilJab:Te("fossilJab","Fossil Jab","Stone",40,2.2,2.8,"single",{kind:"damage"},"A heavy strike with an ancient edge."),terraPulse:Te("terraPulse","Terra Pulse","Stone",34,8.5,4.8,"aoe",{kind:"damage",status:{id:"weaken",chance:.35,duration:4}},"A low pulse rattles bones and armor."),sparkShot:Te("sparkShot","Spark Shot","Storm",37,1.3,8,"single",{kind:"damage",status:{id:"shock",chance:.2,duration:3}},"A focused arc of static."),chainArc:Te("chainArc","Chain Arc","Storm",30,5,6.2,"cone",{kind:"damage",status:{id:"shock",chance:.45,duration:3}},"Lightning skips across everything in front."),windStep:Te("windStep","Wind Step","Storm",0,8,0,"self",{kind:"buff",stat:"speed",amount:.35,duration:6},"Rides a gust to impossible speed."),thunderFall:Te("thunderFall","Thunder Fall","Storm",58,10,6.5,"aoe",{kind:"damage"},"A delayed pillar of thunder.",{radius:3.2}),staticField:Te("staticField","Static Field","Storm",18,7,4.6,"aoe",{kind:"damage",status:{id:"shock",chance:.7,duration:4}},"A crackling field that clings to foes."),galeCut:Te("galeCut","Gale Cut","Storm",42,2.4,3.4,"single",{kind:"damage"},"A blade of compressed wind."),starBolt:Te("starBolt","Star Bolt","Astral",41,1.5,8,"single",{kind:"damage"},"A precise shard of falling starlight."),gravityWell:Te("gravityWell","Gravity Well","Astral",28,8,4.8,"aoe",{kind:"damage",status:{id:"snare",chance:.9,duration:4}},"Space folds and holds the enemy in place."),prismWard:Te("prismWard","Prism Ward","Astral",0,12,0,"self",{kind:"shield",amount:.32,duration:8},"A shifting prism scatters incoming force."),novaPulse:Te("novaPulse","Nova Pulse","Astral",46,8.5,5.2,"aoe",{kind:"damage"},"A silent, expanding ring of starfire."),cometTrail:Te("cometTrail","Comet Trail","Astral",36,4.2,7,"cone",{kind:"damage",status:{id:"burn",chance:.3,duration:4}},"A burning comet trail sweeps the field."),starlightMend:Te("starlightMend","Starlight Mend","Astral",0,13,0,"self",{kind:"heal",amount:.28},"Starlight knits wounds closed."),phaseShift:Te("phaseShift","Phase Shift","Astral",0,11,0,"self",{kind:"buff",stat:"speed",amount:.28,duration:5},"Slips partly out of phase with the world."),shadowNip:Te("shadowNip","Shadow Nip","Spirit",39,1.5,3.2,"single",{kind:"damage",status:{id:"weaken",chance:.25,duration:4}},"A bite from a patch of living shadow."),soulDrain:Te("soulDrain","Soul Drain","Spirit",30,6,4.2,"single",{kind:"damage",drain:.45},"Steals vitality and gives it to the caster."),haunt:Te("haunt","Haunt","Spirit",18,7.5,5,"aoe",{kind:"damage",status:{id:"weaken",chance:.8,duration:6}},"A chorus of whispers saps resolve."),spiritVeil:Te("spiritVeil","Spirit Veil","Spirit",0,12,0,"self",{kind:"shield",amount:.22,duration:7},"A veil of memory softens harm."),wispFlare:Te("wispFlare","Wisp Flare","Spirit",43,6,5.8,"cone",{kind:"damage",status:{id:"burn",chance:.3,duration:3}},"Cold flames that burn without heat."),echoStep:Te("echoStep","Echo Step","Spirit",0,9,0,"self",{kind:"buff",stat:"speed",amount:.25,duration:6},"Leaves an afterimage to confuse enemies."),dreamSnare:Te("dreamSnare","Dream Snare","Spirit",26,8,4.4,"aoe",{kind:"damage",status:{id:"stun",chance:.4,duration:1.5}},"Pulls foes into a brief waking dream.")},Ha={Nature:["leafLash","rootSnare","bloomBurst","thornVolley","groveGuard","seedSling","verdantPulse"],Fire:["emberJab","flameWave","cinderNova","heatVeil","scorchMark","blazeCharge","hearthGlow"],Frost:["iceShard","frostNova","snowGuard","glacialSpike","auroraMist","rimeShell"],Water:["bubbleBolt","tidalSweep","healingSpring","torrentRing","mistStep","abyssLash","soothingRain"],Stone:["pebbleShot","quakeStomp","stoneSkin","rockSlide","gritGuard","fossilJab","terraPulse"],Storm:["sparkShot","chainArc","windStep","thunderFall","staticField","galeCut"],Astral:["starBolt","gravityWell","prismWard","novaPulse","cometTrail","starlightMend","phaseShift"],Spirit:["shadowNip","soulDrain","haunt","spiritVeil","wispFlare","echoStep","dreamSnare"]};function fi(i){return Yr[i]||Yr.tackle}const uv=[["Spriglow","Nature","Support","common","verdant","biped",2,16],["Verdantle","Nature","Guardian","uncommon","verdant","quadruped",3,32],["Sylvanox","Nature/Spirit","Guardian","epic","verdant","quadruped",0,0],["Cindrake","Fire","Striker","common","ember","wyvern",5,16],["Pyrolisk","Fire","Bruiser","uncommon","ember","quadruped",6,32],["Volcarion","Fire/Stone","Bruiser","epic","ember","wyvern",0,0],["Tidewisp","Water","Support","common","tide","aquatic",8,16],["Brookfin","Water","Skirmisher","uncommon","tide","aquatic",9,32],["Maeloris","Water/Storm","Controller","epic","tide","serpent",0,0],["Mossling","Nature","Tank","common","verdant","blob",11,18],["Mosswarden","Nature/Stone","Guardian","rare","verdant","golem",0,0],["Fernix","Nature","Assassin","common","verdant","quadruped",0,0],["Bloomble","Nature","Support","common","verdant","blob",0,0],["Petalcub","Nature","Support","common","verdant","quadruped",15,20],["Petalarch","Nature/Astral","Healer","rare","verdant","biped",0,0],["Thistlethorn","Nature","Controller","uncommon","verdant","quadruped",0,0],["Glimmeroot","Nature/Astral","Trickster","rare","verdant","biped",0,0],["Barkling","Nature","Tank","common","verdant","quadruped",19,18],["Timberox","Nature/Stone","Tank","rare","verdant","quadruped",0,0],["Dewdrop","Water/Nature","Support","common","tide","blob",0,0],["Sunpetal","Nature/Fire","Striker","uncommon","verdant","biped",0,0],["Vinecoil","Nature","Controller","uncommon","verdant","serpent",0,0],["Fungalo","Nature","Support","common","verdant","blob",0,0],["Sporelle","Nature","Trickster","common","verdant","flyer",0,0],["Meadowry","Nature","Skirmisher","common","verdant","flyer",0,0],["Briarhide","Nature","Tank","uncommon","verdant","quadruped",0,0],["Acornaut","Nature/Stone","Tank","common","verdant","biped",0,0],["Willowisp","Nature/Astral","Controller","rare","verdant","spirit",0,0],["Clovercub","Nature","Support","common","verdant","quadruped",0,0],["Canopix","Nature","Assassin","rare","verdant","flyer",0,0],["Emberpup","Fire","Striker","common","ember","quadruped",32,16],["Blazemane","Fire","Bruiser","uncommon","ember","quadruped",33,32],["Pyrewolf","Fire/Astral","Assassin","epic","ember","quadruped",0,0],["Magmite","Fire/Stone","Tank","common","ember","golem",0,0],["Ashenwing","Fire","Skirmisher","rare","ember","flyer",0,0],["Coalback","Fire","Tank","common","ember","quadruped",0,0],["Scorchtail","Fire","Striker","uncommon","ember","serpent",0,0],["Flickerfin","Fire/Water","Trickster","rare","ember","aquatic",0,0],["Cinderling","Fire","Support","common","ember","blob",0,0],["Obsidrake","Fire/Stone","Bruiser","epic","ember","wyvern",0,0],["Flamewisp","Fire/Astral","Controller","rare","ember","spirit",0,0],["Smolderox","Fire/Stone","Tank","uncommon","ember","quadruped",0,0],["Emberfly","Fire","Skirmisher","common","ember","flyer",0,0],["Charhound","Fire","Assassin","uncommon","ember","quadruped",0,0],["Lavalux","Fire/Astral","Controller","epic","ember","spirit",0,0],["Pyreling","Fire","Striker","common","ember","biped",0,0],["Sootbeak","Fire","Skirmisher","common","ember","flyer",0,0],["Blazetail","Fire","Skirmisher","uncommon","ember","quadruped",0,0],["Infernalope","Fire/Storm","Striker","rare","ember","quadruped",0,0],["Cinderbean","Fire","Support","common","ember","blob",0,0],["Puddlepaw","Water","Support","common","tide","quadruped",52,16],["Riverfang","Water","Assassin","uncommon","tide","quadruped",0,0],["Coralisk","Water/Stone","Tank","uncommon","tide","golem",0,0],["Kelpkit","Water","Controller","common","tide","serpent",0,0],["Bubblefin","Water","Support","common","tide","aquatic",0,0],["Wavemoth","Water/Astral","Trickster","rare","tide","flyer",0,0],["Shelldrake","Water/Stone","Tank","rare","tide","quadruped",0,0],["Ripplet","Water","Skirmisher","common","tide","aquatic",0,0],["Abyssfang","Water/Spirit","Assassin","epic","tide","serpent",0,0],["Mistray","Water/Astral","Controller","rare","tide","flyer",0,0],["Tidehoof","Water","Striker","uncommon","tide","quadruped",0,0],["Splashcub","Water","Support","common","tide","quadruped",0,0],["Reefwing","Water","Skirmisher","uncommon","tide","flyer",0,0],["Deepcoil","Water/Spirit","Controller","rare","tide","serpent",0,0],["Abyssalune","Water/Astral","Support","legendary","tide","serpent",0,0],["Brineling","Water","Healer","common","tide","blob",0,0],["Aquarune","Water/Astral","Support","rare","tide","spirit",0,0],["Pearlback","Water/Stone","Tank","rare","tide","golem",0,0],["Currentail","Water","Skirmisher","common","tide","aquatic",0,0],["Hydrowl","Water/Storm","Controller","uncommon","tide","flyer",0,0],["Snowkit","Frost","Striker","common","frost","quadruped",72,16],["Frostfang","Frost/Stone","Bruiser","uncommon","frost","quadruped",0,0],["Glaciern","Frost","Tank","rare","frost","golem",0,0],["Icicleaf","Frost/Nature","Support","uncommon","frost","biped",0,0],["Chillwing","Frost/Astral","Skirmisher","rare","frost","flyer",0,0],["Frostbeak","Frost","Assassin","common","frost","flyer",0,0],["Hailstone","Frost/Stone","Tank","common","frost","golem",0,0],["Borealing","Frost/Astral","Controller","rare","frost","serpent",0,0],["Snowmoth","Frost","Support","common","frost","flyer",0,0],["Glaciarch","Frost/Stone","Guardian","legendary","frost","golem",0,0],["Icetooth","Frost","Assassin","uncommon","frost","quadruped",0,0],["Rimecoil","Frost","Controller","uncommon","frost","serpent",0,0],["Blizzardine","Frost/Storm","Striker","epic","frost","quadruped",0,0],["Glacierox","Frost/Stone","Tank","epic","frost","quadruped",0,0],["Permafin","Frost/Water","Skirmisher","common","frost","aquatic",0,0],["Silverfrost","Frost/Astral","Trickster","rare","frost","spirit",0,0],["Coldspike","Frost/Stone","Striker","common","frost","golem",0,0],["Aurorael","Frost/Astral","Healer","epic","frost","spirit",0,0],["Snowdrift","Frost","Support","common","frost","blob",0,0],["Frostmaw","Frost/Spirit","Bruiser","rare","frost","quadruped",0,0],["Stardustling","Astral","Support","common","astral","spirit",92,18],["Nebulynx","Astral/Spirit","Assassin","rare","astral","quadruped",0,0],["Cosmoth","Astral/Frost","Skirmisher","rare","astral","flyer",0,0],["Voidpup","Astral/Spirit","Striker","uncommon","astral","quadruped",0,0],["Lunafin","Astral/Water","Support","uncommon","astral","aquatic",0,0],["Quasaro","Astral/Storm","Striker","epic","astral","flyer",0,0],["Galaxkit","Astral","Trickster","common","astral","quadruped",0,0],["Eclipsil","Astral/Spirit","Controller","rare","astral","serpent",0,0],["Starcaller","Astral","Support","uncommon","astral","biped",0,0],["Aetherion","Astral/Storm","Guardian","legendary","astral","flyer",0,0],["Meteorling","Astral/Stone","Striker","common","astral","golem",0,0],["Chronowisp","Astral/Spirit","Controller","rare","astral","spirit",0,0],["Celestail","Astral/Frost","Skirmisher","uncommon","astral","flyer",0,0],["Riftling","Astral/Spirit","Trickster","rare","astral","blob",0,0],["Orbitox","Astral/Stone","Tank","epic","astral","golem",0,0],["Solstice","Fire/Astral","Striker","legendary","astral","biped",0,0],["Nightbloom","Spirit/Nature","Support","rare","astral","blob",0,0],["Sablemoth","Spirit/Astral","Trickster","uncommon","astral","flyer",0,0],["Prismara","Astral/Water","Healer","epic","astral","serpent",0,0],["Astrafin","Astral/Water","Skirmisher","rare","astral","aquatic",0,0],["Pebblit","Stone","Tank","common","verdant","golem",112,16],["Boulderox","Stone","Tank","uncommon","verdant","golem",0,0],["Granitlet","Stone","Striker","common","ember","quadruped",0,0],["Slatewing","Stone/Storm","Skirmisher","uncommon","astral","flyer",0,0],["Cragmaw","Stone","Bruiser","uncommon","ember","quadruped",0,0],["Geodite","Stone/Astral","Controller","rare","astral","golem",0,0],["Basaltine","Stone/Fire","Tank","rare","ember","golem",0,0],["Terracub","Stone","Support","common","verdant","quadruped",0,0],["Flintbeak","Stone","Skirmisher","common","ember","flyer",0,0],["Quarrymane","Stone","Striker","uncommon","ember","quadruped",0,0],["Sandclaw","Stone","Assassin","common","tide","quadruped",0,0],["Shalewing","Stone/Astral","Skirmisher","rare","frost","flyer",0,0],["Glintstone","Stone/Astral","Support","rare","astral","golem",0,0],["Rubblet","Stone","Trickster","common","ember","blob",0,0],["Cliffcoil","Stone/Storm","Controller","uncommon","frost","serpent",0,0],["Cairnox","Stone/Spirit","Guardian","legendary","astral","golem",0,0],["Sparkit","Storm","Striker","common","astral","quadruped",128,16],["Voltmane","Storm/Spirit","Bruiser","uncommon","astral","quadruped",0,0],["Staticub","Storm","Trickster","common","tide","blob",0,0],["Galewing","Storm/Frost","Skirmisher","uncommon","frost","flyer",0,0],["Thunderhoof","Storm","Striker","rare","verdant","quadruped",0,0],["Zapfin","Storm/Water","Skirmisher","common","tide","aquatic",0,0],["Squallix","Storm/Astral","Controller","rare","astral","flyer",0,0],["Cyclonette","Storm","Controller","uncommon","astral","spirit",0,0],["Breezebeak","Storm","Skirmisher","common","tide","flyer",0,0],["Voltrix","Storm/Astral","Striker","epic","astral","quadruped",0,0],["Tempestail","Storm/Astral","Controller","rare","astral","serpent",0,0],["Windshear","Storm","Assassin","uncommon","frost","flyer",0,0],["Emberstorm","Fire/Storm","Striker","rare","ember","wyvern",0,0],["Tempestrix","Storm/Frost","Guardian","legendary","astral","flyer",0,0],["Shadepup","Spirit","Assassin","common","astral","quadruped",142,16],["Umbrawl","Spirit/Astral","Bruiser","rare","astral","quadruped",0,0],["Wispling","Spirit","Support","common","astral","spirit",0,0],["Ghastelle","Spirit/Astral","Controller","rare","astral","spirit",0,0],["Soulmoth","Spirit","Support","uncommon","astral","flyer",0,0],["Phantomane","Spirit/Astral","Striker","epic","astral","quadruped",0,0],["Gravecoil","Spirit/Stone","Controller","uncommon","astral","serpent",0,0],["Hexkit","Spirit","Trickster","common","astral","quadruped",0,0],["Wraitheling","Spirit/Astral","Assassin","rare","astral","spirit",0,0],["Luminarch","Astral/Spirit","Support","ultra","astral","spirit",0,0]],wc={Nature:[["#71cf6f","#2f7a45","#d7ff8f","#17351f"],["#8bdc72","#3f8f4a","#ffe28a","#18351f"],["#54b96a","#226044","#b9ffa8","#102a1b"],["#a7d85f","#4e7f2e","#ffca7a","#23310e"]],Fire:[["#ff8a4c","#b8331a","#ffd166","#3b130a"],["#ffb347","#d8481f","#fff0a6","#431609"],["#ff6b4a","#8c2418","#ffd08a","#2c0b08"],["#f9a03f","#a63d1a","#ffe066","#321106"]],Frost:[["#b4ecff","#5aa9d6","#ffffff","#173c52"],["#d9f8ff","#7ac6e8","#a4d8ff","#1a3b55"],["#9fe2f5","#4386b8","#f5ffff","#102c42"],["#c8f4ff","#6fb3d6","#ffffff","#203b54"]],Water:[["#65b8ff","#2868b8","#a9f2ff","#0c2246"],["#4fb2d8","#1d6692","#b9ffe8","#0a263a"],["#7cc6f2","#2e5fae","#d8f6ff","#0d1e42"],["#56c8d8","#1e6f8f","#b3ffe2","#082a32"]],Stone:[["#d0aa77","#78573b","#ffe0a3","#332417"],["#b6a58e","#665b4d","#e8d7b7","#2a241d"],["#c5a076","#6d4f36","#ffcf8a","#2d1f14"],["#a58d70","#5c4936","#e0c59a","#241b12"]],Storm:[["#ffe066","#d3a11a","#fffbd1","#3b2b07"],["#f7d94c","#b98a12","#ffffff","#302405"],["#ffef8a","#c59a23","#d6f7ff","#3c2d08"],["#f2e05c","#a97e14","#fff7c2","#2d2205"]],Astral:[["#c08bff","#6139a8","#ffd6ff","#24103f"],["#b8a1ff","#5340a4","#a7f6ff","#1c143f"],["#d3a6ff","#6f42b8","#fff0b8","#2c1250"],["#a98bff","#4a2e8f","#f2b8ff","#1c0d3a"]],Spirit:[["#ff9fd0","#a03a72","#ffe3f2","#3b1128"],["#d7a2ff","#7540a8","#ffd7eb","#28113f"],["#f59ac2","#913963","#e8e0ff","#35101f"],["#c6a4ff","#6c46a6","#ffd0f0","#24123b"]]},Ec={Nature:["Verdant","Rooted","Blooming","Mossy","Sunlit","Thorned","Canopy","Meadow","Evergreen","Dewy"],Fire:["Ember","Blazing","Scorched","Smoldering","Ashen","Cinder","Furnace","Kindled","Molten","Flare"],Frost:["Glacial","Rimed","Snowbound","Frozen","Auroral","Icicle","Winter","Permafrost","Silver","Hail"],Water:["Tidal","Briny","Rippling","Deepwater","Coral","Mist","Current","Lagoon","Undertow","Rain"],Stone:["Granite","Basalt","Craggy","Fossil","Quarry","Layered","Ironstone","Pebbled","Steadfast","Bedrock"],Storm:["Charged","Crackling","Gale","Thunder","Static","Cyclone","Tempest","Voltaic","Squall","Brightbolt"],Astral:["Starlit","Nebular","Riftborn","Comet","Orbital","Lunar","Quasar","Eclipsed","Celestial","Void"],Spirit:["Haunted","Whispering","Phantom","Dreaming","Umbral","Echoing","Spectral","Memory","Twilight","Wandering"]},Ga=["Instinct","Pulse","Bond","Guard","Step","Sense","Veil","Surge","Mark","Song","Shell","Ward","Trace","Bloom","Spark"],Tc=[{kind:"regen",name:"regeneration",value:.012,text:"Slowly restores health during battle."},{kind:"thorns",name:"retaliation",value:.16,text:"Reflects a portion of contact damage."},{kind:"guard",name:"damage reduction",value:.1,text:"Reduces incoming damage by 10%."},{kind:"swift",name:"speed",value:.12,text:"Moves 12% faster in battle."},{kind:"fierce",name:"attack",value:.12,text:"Deals 12% more move damage."},{kind:"sturdy",name:"defence",value:.12,text:"Takes 12% less damage from heavy hits."},{kind:"lucky",name:"capture fortune",value:.08,text:"Improves capture success when this creature is active."},{kind:"mentor",name:"experience gain",value:.15,text:"Earns 15% bonus experience from victories."},{kind:"intimidate",name:"enemy weakening",value:.08,text:"Wild enemies deal 8% less damage."},{kind:"lastStand",name:"last stand",value:.2,text:"Gains 20% attack while below one third health."},{kind:"vampiric",name:"lifesteal",value:.08,text:"Heals for a portion of damage dealt."},{kind:"static",name:"static shock",value:.18,text:"Contact attacks may shock the attacker."},{kind:"sureFooted",name:"footing",value:1,text:"Cannot be snared or rooted."},{kind:"keenEye",name:"precision",value:.08,text:"Improves critical strike chance."},{kind:"shieldOnLow",name:"emergency shield",value:.18,text:"Creates a shield once when health falls below half."}],Ac={verdant:["Grows where old roots remember rain","Nests in the warm hollows beneath the canopy","Follows the stream-song through the undergrowth","Sleeps in moss beds and wakes with the dawn chorus"],ember:["Basks on black-glass ridges above the caldera","Feeds on heat shimmer and cooled cinders","Builds nests from pumice and warm stone","Travels the safe channels between lava rivers"],tide:["Rides the breathing tide along the shell coast","Hides in bright coral mazes at low water","Leaves spiral tracks across wet sand","Listens for storms through the deep current"],frost:["Crosses the blue ice under pale auroras","Shelters in snow caves carved by old winds","Collects frozen starlight in its fur","Follows the ridge line above the silent pines"],astral:["Appears where crystal spires catch the night sky","Drifts through the scar on currents of starlight","Leaves faint constellations in its wake","Hums in harmony with the floating stones"]},Wd={Striker:"Closes distance quickly and looks for a clean opening.",Bruiser:"Applies steady pressure and refuses to give ground.",Tank:"Holds a line, drawing attention away from smaller creatures.",Assassin:"Circles at the edge of a fight, waiting for a mistake.",Controller:"Shapes the battlefield with slows, roots, and forced movement.",Support:"Stays near allies, reinforcing them with steady encouragement.",Healer:"Seeks wounded creatures and restores them before returning to cover.",Guardian:"Patrols a fixed territory and warns intruders before striking.",Skirmisher:"Darts in and out, never staying in one place for long.",Trickster:"Mimics, feints, and steals attention at the worst possible moment."},fv={biped:"trail edges and open clearings",quadruped:"soft ground near well-worn paths",wyvern:"high ledges and thermal updrafts",aquatic:"shallow pools and slow water",serpent:"tangled roots and narrow crevices",blob:"damp hollows and shaded stones",flyer:"wind-bent branches and open sky",golem:"rock shelves and old foundations",spirit:"thin places where light behaves strangely"},pv={biped:"Two-legged idle bob, arm swing, hop, flinch, and two attack poses.",quadruped:"Four-leg walk cycle, tail sway, ear flick, lunge, flinch, and rest pose.",wyvern:"Wing flap, tail counterbalance, hover, dive, and recharge pose.",aquatic:"Tail undulation, fin flutter, burst swim, and floating idle.",serpent:"Slither loop, coil, rear-up, strike, and coil-rest.",blob:"Squash-and-stretch idle, bounce, wobble, and compress attack.",flyer:"Hover bob, wing beat, glide, dive, and perch.",golem:"Heavy step, shoulder roll, brace, slam, and dormant state.",spirit:"Float drift, flicker, phase-out, swirl, and reform."},mv={biped:"Light footfalls, a bright chirp, and a soft wooden click.",quadruped:"Padding steps, a low purr, and a short rising call.",wyvern:"Leathery wingbeats, a smoky hiss, and a resonant cry.",aquatic:"Bubbles, a watery trill, and a splashy tail slap.",serpent:"Dry scales, a papery hiss, and a low whistle.",blob:"Wet pops, a rubbery bounce, and a cheerful gurgle.",flyer:"Quick wingbeats, a thin whistle, and a sharp chirp.",golem:"Grinding stone, a deep thump, and a resonant hum.",spirit:"A breathy choir, glassy chimes, and a fading echo."},gv={Striker:{health:70,attack:74,defence:46,speed:68},Bruiser:{health:86,attack:78,defence:62,speed:44},Tank:{health:98,attack:52,defence:84,speed:34},Assassin:{health:62,attack:86,defence:40,speed:82},Controller:{health:74,attack:60,defence:58,speed:56},Support:{health:76,attack:54,defence:62,speed:52},Healer:{health:80,attack:48,defence:60,speed:50},Guardian:{health:104,attack:66,defence:82,speed:38},Skirmisher:{health:68,attack:68,defence:48,speed:76},Trickster:{health:66,attack:64,defence:44,speed:80}},vv={golem:"large",wyvern:"large",quadruped:"medium",serpent:"medium",biped:"small",flyer:"small",aquatic:"small",blob:"small",spirit:"tiny"};function yv(i,e,t){const n=gs(t),s=Ha[i[0]]||Ha.Stone,r=i[1]?Ha[i[1]]||[]:[],a=["focus","rest","screech","tackle"],o=[],l=(h,u)=>{const f=[...h];for(let g=0;g<u&&f.length;g++){const _=Math.floor(n()*f.length),m=f.splice(_,1)[0];o.includes(m)||o.push(m)}};l(s,3),r.length&&l(r,1),l(a,2),o.length<4&&l(s,2);const c=[1,4,8,14,21,30];return(e==="Support"||e==="Healer"?o.sort((h,u)=>(Yr[u].power||0)-(Yr[h].power||0)):o).slice(0,6).map((h,u)=>({level:c[u],moveId:h}))}function _v(i,e,t,n,s){const r=gs(n^2654435769),a=Tc[Math.floor(r()*Tc.length)],o=Ec[e[0]]||Ec.Astral;let l=0,c="";do{const d=o[(Math.floor(r()*o.length)+l)%o.length],h=Ga[(Math.floor(r()*Ga.length)+l*3)%Ga.length];c=`${d} ${h}`,l++}while(s.has(c)&&l<60);return s.add(c),{id:`abil-${al(c).toString(16)}`,name:c,trigger:a.kind==="static"||a.kind==="thorns"?"When struck at close range":a.kind==="lastStand"?"While below one third health":"Passive",effect:a.kind,value:a.value,description:a.text,role:t,types:e}}function xv(i,e,t,n,s){const r=gs(s^10855845),a=Ac[n][Math.floor(r()*Ac[n].length)],o=e.map(c=>ln[c].id.toLowerCase()).join(" and ");return[`${a}. ${i} is a ${t.toLowerCase()}-minded ${o} creature with a distinct, curious temperament.`,`Field notes describe ${i} as ${Wd[t].toLowerCase()} Its ${e[0].toLowerCase()} affinity is visible in the way it moves, not just in battle.`,`Local naturalists say ${i} remembers individual travellers and will approach those who move calmly and keep a respectful distance.`].join(" ")}function Sv(){const i=[],e=new Set,t=new Set;uv.forEach((n,s)=>{const[r,a,o,l,c,d,h,u]=n,f=`AST-${String(s+1).padStart(3,"0")}`;if(t.has(r))throw new Error(`Duplicate species name ${r}`);t.add(r);const g=a.split("/"),_=al(`${f}:${r}`),m=gs(_),p=gv[o],M=$s[l],R=M.statBonus,S=B=>Math.round((m()-.5)*B),w=l==="legendary"||l==="ultra"?d==="golem"||d==="wyvern"?"colossal":"large":vv[d]||"small",E=wc[g[0]]||wc.Astral,A=E[s%E.length],y=_v(r,g,o,_,e),b=yv(g,o,_),C=lt[c].levelRange,L=l==="legendary"||l==="ultra",N=L?0:Math.max(1,Math.round(M.weight/3));i.push({id:f,name:r,types:g,role:o,rarity:l,biome:c,archetype:d,sizeClass:w,stats:{health:Math.round(p.health+R*2+S(10)),attack:Math.round(p.attack+R+S(12)),defence:Math.round(p.defence+R+S(12)),speed:Math.round(p.speed+Math.round(R*.8)+S(14))},growth:l==="common"?"steady":l==="ultra"||l==="legendary"?"late":"early",ability:y,learnset:b,evolution:h?{to:`AST-${String(h).padStart(3,"0")}`,level:u}:null,evolvesFrom:null,height:(.5+Mv(w)*.8).toFixed(1),habitat:`${lt[c].name} — ${fv[d]}`,behavior:Wd[o],encounter:{biome:c,minLevel:L?Math.max(20,C[0]+8):C[0],maxLevel:L?Math.max(30,C[1]+4):C[1],weight:N,time:"any",weather:"any",eventOnly:L,ultraChance:l==="ultra"?1e-7:0},visual:{archetype:d,size:ev[w].scale,primary:A[0],secondary:A[1],accent:A[2],eye:A[3],glow:l==="legendary"||l==="ultra",markings:s%4,horns:d==="wyvern"||s%5===0,wings:d==="flyer"||d==="wyvern",tail:d!=="blob"||s%3===0,crown:l==="legendary"||l==="ultra",aura:L},visualBrief:`${w} ${d} silhouette in ${A[0]} with ${A[1]} undersides and ${A[2]} highlights. Unique hook: ${bv(d,s)}.`,audioBrief:mv[d],animation:pv[d],lore:xv(r,g,o,c,_),acquisition:h||s<9?["starter-or-wild","evolution"]:["wild"],isStarter:[1,4,7].includes(s+1)})});for(const n of i){if(!n.evolution)continue;const s=i.find(r=>r.id===n.evolution.to);if(!s)throw new Error(`${n.id} has invalid evolution target ${n.evolution.to}`);if(s.evolvesFrom&&s.evolvesFrom!==n.id)throw new Error(`${s.id} has conflicting evolution sources`);s.evolvesFrom=n.id}return i}function Mv(i){return{tiny:.2,small:.4,medium:.7,large:1.1,colossal:1.6}[i]||.5}function bv(i,e){const t={biped:["a leaf-like crest that opens when it is excited","bright forearm frills used for signalling","a tail plume that trails sparks or pollen"],quadruped:["asymmetric horn growth that records age","a patterned mantle along the spine","oversized ears that move independently"],wyvern:["heat vents along the wing edges","a split tail fan with mirrored markings","a throat pouch that glows before a call"],aquatic:["translucent fin membranes with visible veins of light","a shell-like collar that clicks in currents","a trailing ribbon fin longer than its body"],serpent:["a hood of overlapping leaf or scale plates","rings that brighten in sequence when it moves","a tail tip shaped like a small lantern"],blob:["a floating core visible through its skin","bubbles that orbit the body in slow loops","a wobbling crown of soft spines"],flyer:["long ribbon feathers with eye-spots","a forked crest that splits the silhouette","wings that leave brief afterimages"],golem:["a seam of glowing mineral running through the chest","floating shoulder stones held by unseen force","carved markings that change when it speaks"],spirit:["a halo of slowly orbiting fragments","a lower body that dissolves into drifting motes","a face that flickers between calm and mischievous"]};return Hd(gs(e*977+13),t[i]||t.spirit)}const Ri=Sv(),wv=Object.fromEntries(Ri.map(i=>[i.id,i]));Object.fromEntries(Ri.map(i=>[i.name,i]));const zo=["AST-001","AST-004","AST-007"],Cc=Ri.filter(i=>i.rarity==="legendary").map(i=>i.id),Ev=Ri.filter(i=>i.rarity==="ultra").map(i=>i.id);function Mt(i){return wv[i]||null}function Tv(i){return Ri.filter(e=>e.biome===i&&!e.encounter.eventOnly)}function ol(i,e){return e.filter(n=>n.level<=i).map(n=>n.moveId).slice(0,4)}const Va=new Map,Wa=new Map;function qn(i,e={}){const t=`${i}|${e.emissive||""}|${e.emissiveIntensity||0}|${e.roughness||.7}|${e.transparent?"t":""}|${e.opacity??1}`;return Va.has(t)||Va.set(t,new pn({color:i,flatShading:!0,roughness:e.roughness??.72,metalness:e.metalness??.04,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??0,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!0})),Va.get(t)}function _t(i,e){return Wa.has(i)||Wa.set(i,e()),Wa.get(i)}function wt(i=1){return _t(`sphere-${i}`,()=>new Qt(1,(i>1,1)))}function qe(i,e,t,n=[0,0,0],s=[1,1,1],r=[0,0,0]){const a=new be(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}function Zr(i,e={}){const t=i.visual,n=new Ge,s=(e.scale??1)*t.size*.92;n.scale.setScalar(s);const r=qn(t.primary,{roughness:.68}),a=qn(t.secondary,{roughness:.8}),o=qn(t.accent,{emissive:t.accent,emissiveIntensity:t.glow?.32:.06,roughness:.5}),l=qn(Nv(t.secondary,-.25),{roughness:.82}),c=qn("#f7fbff",{roughness:.35,emissive:"#dff5ff",emissiveIntensity:.14}),d=qn(t.eye,{roughness:.3,emissive:t.eye,emissiveIntensity:.12}),h={legs:[],arms:[],wings:[],segments:[]},u={archetype:t.archetype,parts:h,seed:Math.random()*10,baseY:0};n.userData.animation=u;const f=new be(_t("shadow",()=>new Qn(.85,16)),new wn({color:724758,transparent:!0,opacity:.28,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.03,f.scale.setScalar(1.1),n.add(f);const g=t.markings%4;if(t.archetype==="quadruped"){const _=qe(n,wt(),r,[0,.78,0],[.58,.5,.92]);h.body=_;const m=qe(n,wt(),r,[0,.98,.62],[.4,.36,.38]);h.neck=m;const p=qe(n,wt(),r,[0,1.16,.94],[.42,.4,.42]);h.head=p,qe(n,wt(),a,[0,1,.82],[.35,.22,.3]),li(n,[0,1.22,1.22],.22,.12,c,d),Cs(n,p,r,o,t.horns),h.tail=Ar(n,[0,.9,-.78],a,o,.55),Cv(n,r,l,h),Cr(n,o,[0,1.1,0],.5,.9,g)}else if(t.archetype==="biped"){const _=qe(n,wt(),r,[0,.92,0],[.44,.58,.38]);h.body=_,qe(n,wt(),a,[0,.62,.02],[.36,.3,.32]);const m=qe(n,wt(),r,[0,1.48,.02],[.42,.4,.42]);h.head=m,li(n,[0,1.54,.34],.2,.11,c,d),Cs(n,m,r,o,t.horns),h.arms=[Kt(n,r,l,[-.42,1,0],.18,.58,[-.18,0,.22]),Kt(n,r,l,[.42,1,0],.18,.58,[-.18,0,-.22])],h.legs=[Kt(n,a,l,[-.22,.45,.02],.2,.48,[.03,0,.05]),Kt(n,a,l,[.22,.45,.02],.2,.48,[.03,0,-.05])],Av(n,m,o,g),h.tail=Ar(n,[0,.7,-.3],a,o,.4)}else if(t.archetype==="wyvern"||t.archetype==="flyer"){const _=qe(n,wt(),r,[0,1,0],t.archetype==="flyer"?[.38,.36,.62]:[.5,.46,.86]);h.body=_;const m=qe(n,wt(),r,[0,1.2,.86],[.36,.34,.42]);h.head=m,qe(n,wt(),a,[0,1.05,.52],[.32,.24,.3]),li(n,[0,1.26,1.24],.19,.1,c,d),Cs(n,m,r,o,t.horns),h.wings=[Rc(n,o,a,-1,t.archetype==="wyvern"?1.35:.95),Rc(n,o,a,1,t.archetype==="wyvern"?1.35:.95)],h.tail=Ar(n,[0,.95,-.78],a,o,t.archetype==="wyvern"?.9:.6),h.legs=[Kt(n,a,l,[-.22,.5,.25],.14,.42,[.25,0,.12]),Kt(n,a,l,[.22,.5,.25],.14,.42,[.25,0,-.12])],t.archetype==="wyvern"&&Cr(n,o,[0,1.32,0],.36,.8,g)}else if(t.archetype==="aquatic"){const _=qe(n,wt(),r,[0,.94,0],[.55,.5,.88]);h.body=_;const m=qe(n,wt(),r,[0,1,.82],[.4,.38,.42]);h.head=m,qe(n,wt(),a,[0,.84,.6],[.4,.2,.3]),li(n,[0,1.08,1.2],.2,.11,c,d),h.tail=Rv(n,[0,1,-.82],o),Lv(n,a,o,h),qe(n,_t("dorsal",()=>new ft(.36,.72,3)),o,[0,1.5,-.1],[1,1,.35],[.12,0,0])}else if(t.archetype==="serpent"){for(let p=0;p<7;p++){const M=p/6,R=.42*(1-M*.55),S=qe(n,wt(),p%2?a:r,[0,.66+Math.sin(M*Math.PI)*.42,.62-M*1.7],[R,R,R*1.25]);h.segments.push(S)}const m=qe(n,wt(),r,[0,.94,.95],[.4,.38,.44]);h.head=m,li(n,[0,1.02,1.36],.2,.11,c,d),Cs(n,m,r,o,t.horns),h.tail=Ar(n,[0,.6,-1.12],a,o,.45),Cr(n,o,[0,1.12,.2],.24,.7,g)}else if(t.archetype==="blob"){const _=qe(n,wt(),r,[0,.72,0],[.64,.62,.64]);h.body=_,qe(n,wt(),a,[0,.62,.02],[.54,.44,.54]);const m=qe(n,wt(),r,[0,.96,.08],[.5,.45,.48]);h.head=m,li(n,[0,1.02,.46],.22,.13,c,d),Iv(n,o,t),h.legs=[Kt(n,a,l,[-.3,.32,.05],.15,.3,[.04,0,.2]),Kt(n,a,l,[.3,.32,.05],.15,.3,[.04,0,-.2])]}else if(t.archetype==="golem"){const _=qe(n,_t("rock-body",()=>new mi(.8,0)),r,[0,.86,0],[.68,.7,.55]);h.body=_,qe(n,_t("rock-head",()=>new mi(.55,0)),r,[0,1.56,.08],[.62,.55,.55]),h.head=n.children[n.children.length-1],li(n,[0,1.62,.38],.18,.1,c,d),qe(n,_t("seam",()=>new dt(.16,.7,.04)),o,[0,.9,.55],[1,1,1],[0,0,.08]),h.arms=[Kt(n,a,l,[-.62,.92,0],.24,.66,[.1,0,.34]),Kt(n,a,l,[.62,.92,0],.24,.66,[.1,0,-.34])],h.legs=[Kt(n,a,l,[-.27,.36,0],.25,.4,[.02,0,.08]),Kt(n,a,l,[.27,.36,0],.25,.4,[.02,0,-.08])],Cr(n,o,[0,1.1,-.32],.28,.6,g)}else{const _=qe(n,wt(),r,[0,.92,0],[.52,.6,.46]);h.body=_,qe(n,wt(),a,[0,.58,0],[.3,.36,.28]);const m=qe(n,wt(),r,[0,1.44,.04],[.42,.4,.42]);h.head=m,li(n,[0,1.5,.36],.2,.11,c,d),Cs(n,m,r,o,t.horns),h.halo=Dv(n,o),h.tail=Pv(n,[0,.55,-.1],o),h.arms=[Kt(n,r,l,[-.4,.98,0],.13,.48,[.2,0,.25]),Kt(n,r,l,[.4,.98,0],.13,.48,[.2,0,-.25])]}if(t.aura){const _=new be(_t("aura-ring",()=>new Tn(1.15,.035,8,36)),new wn({color:t.accent,transparent:!0,opacity:.62,blending:bn,depthWrite:!1}));_.rotation.x=Math.PI/2,_.position.y=.34,n.add(_),h.aura=_;const m=new Gs(new xt().setAttribute("position",new Ot(Uv(14,1.8),3)),new cs({color:t.accent,size:.14,transparent:!0,opacity:.85,blending:bn,depthWrite:!1}));n.add(m),h.motes=m}if(t.crown){const _=new be(_t("crown",()=>new ft(.22,.48,4)),qn(t.accent,{emissive:t.accent,emissiveIntensity:.6}));_.position.set(0,1.9,0),_.rotation.y=Math.PI/4,n.add(_),h.crown=_}return n.userData.speciesId=i.id,n.userData.species=i,n}function li(i,e,t,n,s,r){for(const a of[-1,1])qe(i,wt(),s,[e[0]+a*t,e[1],e[2]],[n,n*1.1,n*.55]),qe(i,wt(),r,[e[0]+a*t,e[1]-.02,e[2]+n*.42],[n*.5,n*.62,n*.3])}function Cs(i,e,t,n,s){if(s)for(const r of[-1,1])qe(i,_t("horn",()=>new ft(.11,.52,4)),n,[r*.24,.34,-.02],[1,1,1],[.2,0,r*-.38]);else for(const r of[-1,1])qe(i,_t("ear",()=>new ft(.16,.36,4)),t,[r*.28,.3,-.06],[1,1,.55],[.1,0,r*-.35])}function Av(i,e,t,n){for(const s of[-1,1]){const r=qe(i,_t("antenna",()=>new Ve(.025,.04,.6,4)),t,[s*.16,.38,0],[1,1,1],[0,0,s*-.22]);qe(r,_t("antenna-tip",()=>new Wt(.08,6,4)),t,[0,.34,0])}n===1&&qe(i,_t("frill",()=>new ft(.18,.4,3)),t,[0,.34,-.3],[1.6,1,.3],[-.4,0,0])}function Kt(i,e,t,n,s,r,a=[0,0,0]){const o=new Ge;o.position.set(...n),o.rotation.set(...a);const l=new be(_t("limb",()=>new Ve(s*.8,s,r,5)),e);l.position.y=-r/2,o.add(l);const c=new be(_t("foot",()=>new Wt(s*1.08,6,4)),t);return c.position.y=-r,c.scale.z=1.3,o.add(c),i.add(o),o}function Cv(i,e,t,n){const s=[[-.36,.52,.46],[.36,.52,.46],[-.36,.52,-.46],[.36,.52,-.46]];for(const r of s)n.legs.push(Kt(i,e,t,r,.13,.5,[.03,0,r[0]>0?-.04:.04]))}function Ar(i,e,t,n,s){const r=new Ge;r.position.set(...e);let a=r;const o=3;for(let l=0;l<o;l++){const c=.14-l*.03,d=new be(_t("tail-seg",()=>new Wt(1,6,4)),l===o-1?n:t);d.position.z=-s*.42,d.scale.set(c*1.8,c*1.4,s*.6),a.add(d);const h=new Ge;h.position.z=-s*.64,d.add(h),a=h}return i.add(r),r}function Rv(i,e,t){const n=new Ge;n.position.set(...e);const s=new be(_t("fin-tail",()=>new ft(.42,.8,3)),t);return s.rotation.x=Math.PI/2,s.position.z=-.36,s.scale.set(1,1,.3),n.add(s),i.add(n),n}function Pv(i,e,t){const n=new Ge;n.position.set(...e);const s=new be(_t("wisp-tail",()=>new ft(.28,.9,5)),qn(t,{emissive:t,emissiveIntensity:.35,transparent:!0,opacity:.8}));return s.position.y=-.4,s.rotation.x=Math.PI,n.add(s),i.add(n),n}function Rc(i,e,t,n,s){const r=new Ge;r.position.set(n*.38,1.1,-.05),r.rotation.z=n*(n>0?-.4:.4);const a=new Ge;for(let o=0;o<3;o++){const l=new be(_t("wing-feather",()=>new ft(.22,1,3)),o===0?e:t);l.position.x=n*(.34+o*.22),l.position.y=.24+o*.06,l.rotation.z=n*(Math.PI/2-.26-o*.12),l.scale.set(1,s*(1-o*.14),.28),a.add(l)}return a.rotation.z=n*.2,r.add(a),r.userData.side=n,i.add(r),r}function Lv(i,e,t,n){for(const r of[-1,1])qe(i,_t("side-fin",()=>new ft(.28,.6,3)),e,[r*.5,.9,.16],[1,1,.3],[0,0,r*-1.1]);const s=qe(i,_t("rear-fin",()=>new ft(.34,.66,3)),t,[0,1,-.86],[1,1,.3],[Math.PI/2,0,0]);n.tailFin=s}function Cr(i,e,t,n,s,r){for(let a=0;a<3;a++)qe(i,_t("spine",()=>new ft(n*.34,s*(.4+a*.15),3)),e,[t[0],t[1]+a*.05,t[2]-a*s*.18],[1,1,.55],[.2,0,0]);r===2&&qe(i,_t("mark",()=>new Tn(.16,.035,5,10)),e,[0,t[1],t[2]+.2],[1,1,1],[Math.PI/2,0,0])}function Iv(i,e,t){const n=t.markings%2===0?5:3;for(let s=0;s<n;s++){const r=s/n*Math.PI*2;qe(i,_t("blob-crown",()=>new ft(.08,.3,4)),e,[Math.cos(r)*.32,1.3,Math.sin(r)*.32],[1,1,1],[0,0,Math.cos(r)*.3])}}function Dv(i,e){const t=new be(_t("halo",()=>new Tn(.42,.035,6,18)),qn(e,{emissive:e,emissiveIntensity:.65}));return t.position.y=1.98,t.rotation.x=Math.PI/2.2,i.add(t),t}function Xs(i,e,t="idle"){const n=i.userData.animation;if(!n)return;const s=n.parts,r=e+n.seed,a=t==="moving"?8:t==="battle"?2.2:1.7;s.body&&(s.body.position.y+=Math.sin(r*a)*.0035,s.body.scale.y=1+Math.sin(r*a)*.015),s.head&&(s.head.rotation.y=Math.sin(r*.8)*.08,s.head.position.y+=Math.sin(r*a+.4)*.002),s.tail&&(s.tail.rotation.y=Math.sin(r*1.4)*.28,s.tail.rotation.x=Math.sin(r*1.1+1)*.1);for(const[o,l]of s.legs.entries())l.rotation.x=Math.sin(r*a+o*Math.PI/2)*(t==="moving"?.5:.06);for(const[o,l]of s.arms.entries())l.rotation.x=Math.sin(r*a+o*Math.PI)*(t==="moving"?.35:.08);for(const o of s.wings){const l=o.userData.side||1;o.rotation.z=l*(l>0?-.4:.4)+Math.sin(r*3.4)*.45*l}if(s.segments.length)for(const[o,l]of s.segments.entries())l.position.x=Math.sin(r*1.5+o*.5)*.06*o,l.position.y=.66+Math.sin(o/(s.segments.length-1)*Math.PI)*.42+Math.sin(r*1.8+o*.4)*.03;s.halo&&(s.halo.rotation.z=r*.6,s.halo.position.y=1.98+Math.sin(r*1.3)*.05),s.aura&&(s.aura.rotation.z=r*.5,s.aura.scale.setScalar(1+Math.sin(r*1.4)*.06)),s.motes&&(s.motes.rotation.y=r*.35,s.motes.position.y=Math.sin(r*1.1)*.1)}function Uv(i,e){const t=new Float32Array(i*3);for(let n=0;n<i;n++){const s=n/i*Math.PI*2;t[n*3]=Math.cos(s)*e*(.7+Math.random()*.4),t[n*3+1]=.5+Math.random()*1.5,t[n*3+2]=Math.sin(s)*e*(.7+Math.random()*.4)}return t}function Nv(i,e){const t=new De(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+e))),`#${t.getHexString()}`}const ll="astra-creatures-save",$d=1,Pi=6,Xd=60,Kr=99,Fv={music:.5,sfx:.72,quality:"high",reduceMotion:!1,sensitivity:1,invertY:!1,hints:!0,highContrast:!1},kv={disc_basic:8,disc_fine:0,potion:2,potion_great:0,treat:1,lure:0};function Jr(i=Date.now()){return{version:$d,playerName:"Wanderer",createdAt:i,updatedAt:i,starterChosen:!1,starterId:null,currency:{shards:250,stardust:0},creatures:[],party:[],activeUid:null,inventory:{...kv},dex:{seen:[],caught:[]},training:{unlocked:1,slots:[]},quests:{active:[],completed:[],progress:{},claimed:[]},flags:{tutorialSeen:!1,landmarks:{},visitedBiomes:["hub"],totalTrainSeconds:0},stats:{battles:0,wins:0,captures:0,defeats:0,steps:0,playSeconds:0,legendariesSeen:0,evolved:0},legendary:{nextEventAt:i+9e4,active:null,history:[]},settings:{...Fv},lureCharges:0,playStartedAt:i}}function Qr(i){return Math.round(40+i*20+i*i*2)}function Zs(i,e){const t=i.stats;return{maxHp:Math.round(t.health*1.6+e*6+t.health*e*.09),attack:Math.round(t.attack*1.45+e*2.4),defence:Math.round(t.defence*1.4+e*2.2),speed:Math.round(t.speed*1.35+e*1.7)}}function $a(i,e=5,t={}){const n=Mt(i);if(!n)throw new Error(`Unknown species ${i}`);const s=qt(Math.round(e),1,60),r=Zs(n,s),a=t.moves||ol(s,n.learnset);return{uid:t.uid||qr("ast"),speciesId:i,nickname:t.nickname||"",level:s,xp:0,hp:t.hp??r.maxHp,stats:r,moves:a.length?a:["tackle"],abilityId:n.ability.id,nature:t.nature||Bv(qr("nature")),ivs:t.ivs||qd(i,s),caughtAt:t.caughtAt||Date.now(),provenance:t.provenance||"wild",assignment:t.assignment||"party",statuses:[],evolutionFlags:[]}}function Bv(i){const e=["Curious","Calm","Bold","Gentle","Fierce","Patient","Mischievous","Loyal","Watchful","Restless"];let t=0;for(let n=0;n<i.length;n++)t=t*31+i.charCodeAt(n)>>>0;return e[t%e.length]}function qd(i,e){let t=e*2654435761;for(let s=0;s<i.length;s++)t=Math.imul(t^i.charCodeAt(s),16777619);const n=()=>(t=Math.imul(t^t>>>15,2246822519),4+Math.abs(t)%15);return{health:n(),attack:n(),defence:n(),speed:n()}}function Ov(i){const e=Mt(i.speciesId);if(!e)return i;const t=i.stats?.maxHp||1,n=qt((i.hp||t)/t,.05,1);return i.stats=Zs(e,i.level),i.hp=Math.max(1,Math.round(i.stats.maxHp*n)),i}function Fs(i,e,t){const n=Math.max(0,Math.round(t));if(!e||n<=0)return{levels:0,evolved:[],xp:0};e.xp+=n;let s=0;const r=[];for(;e.level<60&&e.xp>=Qr(e.level);){e.xp-=Qr(e.level),e.level++,s++;const a=Mt(e.speciesId);if(a?.evolution&&e.level>=a.evolution.level){const o=Mt(a.evolution.to);o&&(e.speciesId=o.id,e.abilityId=o.ability.id,e.moves=ol(e.level,o.learnset),e.evolutionFlags.push({from:a.id,to:o.id,level:e.level,at:Date.now()}),r.push(o))}Ov(e),e.hp=e.stats.maxHp}return e.level>=60&&(e.xp=0),i.stats=i.stats||{},{levels:s,evolved:r,xp:n}}function zv(i){if(!i||typeof i!="object")return Jr();const e=Jr(),t={...e,...i,currency:{...e.currency,...i.currency||{}},inventory:{...e.inventory,...i.inventory||{}},dex:{seen:[],caught:[],...i.dex||{}},training:{...e.training,...i.training||{}},quests:{...e.quests,...i.quests||{}},flags:{...e.flags,...i.flags||{}},stats:{...e.stats,...i.stats||{}},legendary:{...e.legendary,...i.legendary||{}},settings:{...e.settings,...i.settings||{}}};t.version=$d,t.creatures=Hv(i.creatures);const n=new Set(t.creatures.map(s=>s.uid));t.party=Array.isArray(i.party)?i.party.filter((s,r,a)=>n.has(s)&&a.indexOf(s)===r).slice(0,Pi):[],!t.party.length&&t.creatures.length&&(t.party=t.creatures.slice(0,Pi).map(s=>s.uid));for(const s of t.creatures)!t.party.includes(s.uid)&&s.assignment==="party"&&(s.assignment="storage");!n.has(t.activeUid)&&t.party.length&&(t.activeUid=t.party[0]),t.dex.seen=Pc(t.dex.seen),t.dex.caught=Pc(t.dex.caught),t.training.slots=Gv(t.training.slots,n);for(const s of Object.keys(t.inventory))t.inventory[s]=qt(Math.floor(Number(t.inventory[s])||0),0,Kr);return t.currency.shards=qt(Math.floor(Number(t.currency.shards)||0),0,99999999),t.currency.stardust=qt(Math.floor(Number(t.currency.stardust)||0),0,99999999),t.settings.quality=["high","low"].includes(t.settings.quality)?t.settings.quality:"high",t}function Pc(i){if(!Array.isArray(i))return[];const e=[];for(const t of i)typeof t=="string"&&Mt(t)&&!e.includes(t)&&e.push(t);return e}function Hv(i){if(!Array.isArray(i))return[];const e=new Set,t=[];for(const n of i.slice(0,400)){if(!n||typeof n!="object"||typeof n.uid!="string"||e.has(n.uid))continue;const s=Mt(n.speciesId);if(!s)continue;e.add(n.uid);const r=qt(Math.floor(Number(n.level)||1),1,60),a=Zs(s,r),o=Array.isArray(n.moves)?n.moves.filter(l=>typeof l=="string").slice(0,4):[];t.push({uid:n.uid,speciesId:n.speciesId,nickname:typeof n.nickname=="string"?n.nickname.slice(0,24):"",level:r,xp:qt(Math.floor(Number(n.xp)||0),0,9999999),hp:qt(Math.floor(Number(n.hp)||a.maxHp),1,a.maxHp),stats:a,moves:o.length?o:ol(r,s.learnset),abilityId:typeof n.abilityId=="string"?n.abilityId:s.ability.id,nature:typeof n.nature=="string"?n.nature.slice(0,24):"Curious",ivs:n.ivs&&typeof n.ivs=="object"?n.ivs:qd(n.speciesId,r),caughtAt:Math.floor(Number(n.caughtAt)||Date.now()),provenance:typeof n.provenance=="string"?n.provenance.slice(0,32):"unknown",assignment:["party","storage","training"].includes(n.assignment)?n.assignment:"storage",statuses:[],evolutionFlags:Array.isArray(n.evolutionFlags)?n.evolutionFlags.slice(-20):[]})}return t}function Gv(i,e){if(!Array.isArray(i))return[];const t=new Set,n=[];for(const s of i.slice(0,2))!s||typeof s!="object"||!e.has(s.uid)||t.has(s.uid)||(t.add(s.uid),n.push({uid:s.uid,startedAt:Math.floor(Number(s.startedAt)||Date.now()),lastClaimAt:Math.floor(Number(s.lastClaimAt)||Date.now()),rate:qt(Number(s.rate)||3,1,10)}));return n}function Vv(i=globalThis.localStorage){try{const e=i?.getItem(ll);if(!e)return Jr();const t=JSON.parse(e);return zv(t)}catch(e){return console.warn("Astra save could not be read; starting a clean profile.",e),Jr()}}function Lc(i,e=globalThis.localStorage){if(!i)return!1;try{i.updatedAt=Date.now();const t=JSON.stringify(i);return e?.setItem(ll,t),!0}catch(t){return console.warn("Astra save could not be written.",t),!1}}function Wv(i=globalThis.localStorage){try{i?.removeItem(ll)}catch{}}function Ic(i,e){return e?(i.creatures.push(e),i.party.length<Pi?(i.party.push(e.uid),e.assignment="party",i.activeUid||(i.activeUid=e.uid)):e.assignment="storage",{ok:!0,inParty:e.assignment==="party"}):{ok:!1,reason:"Creature could not be created."}}function $v(i){return i.creatures.filter(e=>!i.party.includes(e.uid)).length}const Dc=18e3,Xv=36e3;class qv{constructor(e,t,n,s){this.scene=e,this.world=t,this.profile=n,this.getPlayerLevel=s,this.wilds=[],this.respawns=[],this.root=new Ge,e.add(this.root),this.legendaryWild=null,this.time=0,this.quality="high",this.populate()}populate(){for(const e of Ci){const t=e==="astral"?6:5;for(let n=0;n<t;n++)this.spawnWildForBiome(e)}}spawnWildForBiome(e,t=null,n={}){const s=Tv(e);if(!s.length)return null;let r=t?Mt(t):null;if(!r){const _=s.map(m=>{let p=m.encounter.weight;return this.profile.lureCharges>0&&["rare","epic","legendary"].includes(m.rarity)&&(p*=2.6),{species:m,weight:p}});r=tv(ui(`${e}-${Date.now()}-${Math.random()}`),_,m=>m.weight).species}const[a,o]=lt[e].center,l=lt[e].radius;let c=a,d=o;for(let _=0;_<30;_++){const m=Math.random()*Math.PI*2,p=l*(.35+Math.random()*.58);if(c=a+Math.cos(m)*p,d=o+Math.sin(m)*p,!this.world.isBlocked(c,d,2.2))break}const h=this.getPlayerLevel?.()||5,u=n.level||Math.round(r.encounter.minLevel+Math.random()*(r.encounter.maxLevel-r.encounter.minLevel)),f=qt(u+Math.round((h-5)*.08),1,60);let g=r;return e==="astral"&&Math.random()<1e-7&&(g=Mt(Ev[0])),this.createWild(g,f,c,d,{biome:e,...n})}createWild(e,t,n,s,r={}){const a=Zs(e,t),o=Zr(e,{scale:r.legendary?1.18:.92});o.position.set(n,He(n,s),s),o.rotation.y=Math.random()*Math.PI*2,this.root.add(o);const l={id:r.id||qr("wild"),species:e,speciesId:e.id,level:t,stats:a,hp:a.maxHp,x:n,z:s,home:{x:n,z:s,radius:r.homeRadius||14},target:{x:n,z:s},group:o,biome:r.biome||e.biome,wanderTimer:1+Math.random()*4,state:"idle",visible:!0,legendary:!!r.legendary,eventId:r.eventId||null,defeated:!1,captured:!1,spawnAt:Date.now()};return this.wilds.push(l),l.legendary&&(this.legendaryWild=l),l}spawnLegendary(e){if(!e||e.phase!=="active")return null;const t=this.wilds.find(o=>o.eventId===e.id);if(t)return t;const n=Mt(e.legendaryId);if(!n)return null;const[s,r]=[e.spawn.x,e.spawn.z],a=this.createWild(n,e.level,s,r,{biome:e.biome,legendary:!0,eventId:e.id,homeRadius:8});return a.group.scale.multiplyScalar(1.05),a}removeLegendary(e){const t=this.wilds.find(n=>n.eventId===e);t&&this.removeWild(t,{respawn:!1}),this.legendaryWild?.eventId===e&&(this.legendaryWild=null)}removeWild(e,t={}){!e||!e.group||(e.group.parent?.remove(e.group),this.wilds=this.wilds.filter(n=>n.id!==e.id),this.legendaryWild?.id===e.id&&(this.legendaryWild=null),t.respawn!==!1&&!e.legendary&&this.respawns.push({at:Date.now()+Dc+Math.random()*(Xv-Dc),biome:e.biome,level:e.level}))}hideWild(e){e&&(e.group.visible=!1,e.visible=!1)}showWild(e){e&&(e.group.visible=!0,e.visible=!0)}nearestWild(e,t=3.8){let n=null,s=t;for(const r of this.wilds){if(!r.visible||!r.group.visible)continue;const a=Math.hypot(e.x-r.x,e.z-r.z);a<s&&(n=r,s=a)}return n?{wild:n,distance:s}:null}update(e,t,n,s=null){this.time=t;const r=Date.now();for(let a=this.respawns.length-1;a>=0;a--)if(r>=this.respawns[a].at){const o=this.respawns.splice(a,1)[0];this.spawnWildForBiome(o.biome)}s?.phase==="active"&&this.spawnLegendary(s),s?.phase!=="active"&&this.legendaryWild&&this.removeLegendary(this.legendaryWild.eventId);for(const a of this.wilds){if(!a.visible)continue;const o=Math.hypot(n.x-a.x,n.z-a.z);if(a.group.visible=o<(a.legendary?140:82),!a.group.visible)continue;if(a.legendary&&s?.phase==="active"){a.group.position.y=He(a.x,a.z)+Math.sin(t*1.2)*.12,a.group.rotation.y+=e*.18,Xs(a.group,t,"battle");continue}if(a.wanderTimer-=e,a.wanderTimer<=0){a.wanderTimer=2.5+Math.random()*5;const u=Math.random()*Math.PI*2,f=3+Math.random()*a.home.radius;a.target.x=a.home.x+Math.cos(u)*f,a.target.z=a.home.z+Math.sin(u)*f}const l=a.target.x-a.x,c=a.target.z-a.z,d=Math.hypot(l,c);if(d>.6){const u=a.legendary?.4:1.2;a.x+=l/d*u*e,a.z+=c/d*u*e;let g=Math.atan2(l,c)-a.group.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;a.group.rotation.y+=g*Math.min(1,e*5),a.state="moving"}else a.state="idle";const h=this.world.resolveCollision({x:a.x,z:a.z},.45);if(a.x=h.x,a.z=h.z,a.group.position.set(a.x,He(a.x,a.z),a.z),o<2.4){const u=2.4-o,f=a.x-n.x,g=a.z-n.z,_=Math.hypot(f,g)||1;a.x+=f/_*u*.4,a.z+=g/_*u*.4}Xs(a.group,t,a.state)}}wildsForMinimap(){return this.wilds.filter(e=>e.visible).map(e=>({x:e.x,z:e.z,biome:e.biome,rarity:e.species.rarity,legendary:e.legendary}))}}const Yd=.82;function Yv(i,e,t,n={}){const s=Mt(t.speciesId),r=Mt(e.speciesId),a=e.stats||Zs(r,e.level),o=Uc(t,s,"player",t.hp),l=Uc({...e,stats:a},r,"enemy",Math.max(1,Math.round(a.maxHp*Yd))),c={id:qr("battle"),player:o,enemy:l,startedAt:Date.now(),over:!1,result:null,log:[],events:[],wild:{...e,hp:l.hp,stats:{...a,maxHp:l.maxHp}},legendary:n.legendary||null,fleeAttempts:0,lastTick:Date.now()};return tn(c,`A wild ${r.name} (Lv. ${e.level}) blocks the path!`),c}function Uc(i,e,t,n){return{uid:i.uid,side:t,name:i.nickname||e.name,species:e,level:i.level,hp:n,maxHp:t==="enemy"?Math.max(1,Math.round(i.stats.maxHp*Yd)):i.stats.maxHp,stats:{...i.stats},moves:(i.moves||["tackle"]).map(s=>({id:s,readyAt:0})),buffs:{attack:1,defence:1,speed:1},statuses:{},shield:0,shieldUntil:0,shieldOnLowUsed:!1,ability:e.ability,xp:i.xp||0,assignment:i.assignment}}function Zd(i,e,t,n=Date.now()){const s=e==="player"?i.player:i.enemy;if(i.over||s.hp<=0)return{ok:!1,reason:"Battle is over."};if(cl(s,n))return{ok:!1,reason:"Stunned."};const r=s.moves.find(a=>a.id===t);return r?r.readyAt>n?{ok:!1,reason:"Move is still cooling down.",remaining:r.readyAt-n}:{ok:!0,slot:r,move:fi(t)}:{ok:!1,reason:"That move is not equipped."}}function Xa(i,e,t,n={distance:0,angle:0},s=Date.now()){const r=Zd(i,e,t,s);if(!r.ok)return r;const a=e==="player"?i.player:i.enemy,o=e==="player"?i.enemy:i.player,l=r.move;r.slot.readyAt=s+l.cooldown*1e3;const c=[];if(l.shape==="self")return Zv(i,a,l,c,s),tn(i,`${a.name} uses ${l.name}.`),{ok:!0,move:l,events:c};const d=l.shape==="aoe"?n.distance<=(l.radius||l.range)+.5:n.distance<=l.range+.4,h=l.shape!=="cone"||Math.abs(n.angle||0)<=(l.cone||Math.PI/3)/2+.12;if(!d||!h)return r.slot.readyAt=s+550,tn(i,`${a.name}'s ${l.name} misses.`),{ok:!0,move:l,events:[{type:"miss",actor:e}]};if(tn(i,`${a.name} uses ${l.name}.`),l.power>0){const u=Kv(i,a,o,l,c,s);if(l.effect.drain){const f=Math.round(u.amount*l.effect.drain);qs(a,f),c.push({type:"heal",target:e,amount:f})}if(l.effect.status&&Math.random()<(l.effect.status.chance??1)&&(l.effect.status.self?kr(a,l.effect.status.id,l.effect.status.duration,s):l.effect.status.id==="snare"&&o.ability?.effect==="sureFooted"||(kr(o,l.effect.status.id,l.effect.status.duration,s),c.push({type:"status",target:o===i.player?"player":"enemy",status:l.effect.status.id}))),l.knockback&&c.push({type:"knockback",target:o===i.player?"player":"enemy",amount:l.knockback}),o.ability?.effect==="thorns"&&l.range<=3.2){const f=Math.max(1,Math.round(u.amount*o.ability.value));Kd(a,f,s,c,"thorns")}o.ability?.effect==="static"&&l.range<=3.2&&Math.random()<.3&&kr(a,"shock",3,s)}return l.effect.kind==="debuff"&&(Jv(o,l.effect,s),c.push({type:"debuff",target:o===i.player?"player":"enemy",stat:l.effect.stat})),l.effect.kind==="buff"&&(a.buffs[l.effect.stat]=1+l.effect.amount,c.push({type:"buff",target:e,stat:l.effect.stat})),Jd(i,c),i.events.push(...c),{ok:!0,move:l,events:c}}function Zv(i,e,t,n,s){if(t.effect.kind==="heal"){const r=Math.round(e.maxHp*t.effect.amount);qs(e,r),n.push({type:"heal",target:e.side,amount:r}),t.effect.status&&kr(e,t.effect.status.id,t.effect.status.duration,s)}t.effect.kind==="shield"&&(e.shield=Math.max(e.shield,Math.round(e.maxHp*t.effect.amount)),e.shieldUntil=s+(t.effect.duration||8)*1e3,n.push({type:"shield",target:e.side,amount:e.shield})),t.effect.kind==="buff"&&(e.buffs[t.effect.stat]=1+t.effect.amount,n.push({type:"buff",target:e.side,stat:t.effect.stat}))}function Kv(i,e,t,n,s=[],r=Date.now()){const a=jg(n.type,t.species.types);let o=e.stats.attack*(e.buffs?.attack||1),l=t.stats.defence*(t.buffs?.defence||1);e.ability?.effect==="fierce"&&(o*=1+e.ability.value),e.ability?.effect==="lastStand"&&e.hp<e.maxHp/3&&(o*=1+e.ability.value),t.ability?.effect==="intimidate"&&(o*=1-t.ability.value),t.statuses?.weaken&&(o*=.78),t.statuses?.shock&&(l*=.9);const c=.05+(e.ability?.effect==="keenEye"?e.ability.value:0),d=Math.random()<c,h=.92+Math.random()*.16;let u=n.power*(o/(l+80))*1.35*(1+e.level*.02)*a*h;d&&(u*=1.55),(t.ability?.effect==="guard"||t.ability?.effect==="sturdy")&&(u*=1-t.ability.value*.7),u=Math.max(1,Math.round(u));const f=Kd(t,u,r,s,"move");if(e.ability?.effect==="vampiric"&&f.amount>0){const g=Math.max(1,Math.round(f.amount*e.ability.value));qs(e,g),s.push({type:"heal",target:e.side,amount:g})}return s.push({type:"damage",target:t.side,amount:f.amount,absorbed:f.absorbed,crit:d,typeMult:a,moveType:n.type}),a>=2?tn(i,`It's super effective! ${f.amount} damage.`):a<=.5?tn(i,`It's not very effective. ${f.amount} damage.`):tn(i,`${t.name} takes ${f.amount} damage.`),f}function Kd(i,e,t=Date.now(),n=[],s="move"){if(i.hp<=0)return{amount:0,absorbed:0};let r=Math.max(0,Math.round(e)),a=0;return i.shield>0&&i.shieldUntil>t&&(a=Math.min(i.shield,r),i.shield-=a,r-=a),i.hp=Math.max(0,i.hp-r),i.hp>0&&i.ability?.effect==="shieldOnLow"&&!i.shieldOnLowUsed&&i.hp<i.maxHp/2&&(i.shieldOnLowUsed=!0,i.shield=Math.round(i.maxHp*i.ability.value),i.shieldUntil=t+7e3,n.push({type:"shield",target:i.side,amount:i.shield})),i.hp<=0&&n.push({type:"faint",target:i.side,source:s}),{amount:r,absorbed:a}}function qs(i,e){if(i.hp<=0)return 0;const t=i.hp;return i.hp=Math.min(i.maxHp,i.hp+Math.max(0,Math.round(e))),i.hp-t}function kr(i,e,t=4,n=Date.now()){e&&(i.statuses[e]={id:e,expiresAt:Math.max(i.statuses[e]?.expiresAt||0,n+t*1e3),tickAt:n+1e3})}function Jv(i,e,t=Date.now()){i.buffs[e.stat]=Math.max(.65,1-e.amount),i.statuses[`debuff_${e.stat}`]={id:`debuff_${e.stat}`,expiresAt:t+(e.duration||5)*1e3}}function cl(i,e=Date.now()){return!!(i.statuses?.stun&&i.statuses.stun.expiresAt>e)}function Nc(i,e=Date.now()){let t=1;return i.statuses?.chill&&i.statuses.chill.expiresAt>e&&(t*=.72),i.statuses?.snare&&i.statuses.snare.expiresAt>e&&(t*=.45),i.statuses?.shock&&i.statuses.shock.expiresAt>e&&(t*=.92),t*=i.buffs?.speed||1,i.ability?.effect==="swift"&&(t*=1+i.ability.value),t}function Qv(i,e=Date.now()){const t=[],n=Math.max(0,(e-i.lastTick)/1e3);i.lastTick=e;for(const s of[i.player,i.enemy])if(!(s.hp<=0)){for(const[r,a]of Object.entries(s.statuses)){if(a.expiresAt<=e){delete s.statuses[r];continue}if(r==="burn"&&e>=(a.tickAt||0)){a.tickAt=e+1e3;const o=Math.max(1,Math.round(s.maxHp*.014));s.hp=Math.max(0,s.hp-o),t.push({type:"statusDamage",target:s.side,status:"burn",amount:o})}if(r==="regen"&&e>=(a.tickAt||0)){a.tickAt=e+1e3;const o=Math.max(1,Math.round(s.maxHp*.018));qs(s,o),t.push({type:"heal",target:s.side,amount:o})}}s.shield>0&&s.shieldUntil<=e&&(s.shield=0),s.ability?.effect==="regen"&&n>0&&qs(s,s.maxHp*s.ability.value*n)}return Jd(i,t),i.events.push(...t),t}function Jd(i,e=[]){return i.over||(i.enemy.hp<=0?(i.over=!0,i.result="victory",tn(i,`${i.enemy.name} is calmed. Victory!`),e.push({type:"battleEnd",result:"victory"})):i.player.hp<=0&&(i.over=!0,i.result="defeat",tn(i,`${i.player.name} can no longer continue.`),e.push({type:"battleEnd",result:"defeat"}))),i.result}function Ho(i,e=null){const t=i.enemy;if(i.over)return 0;const n=1-t.hp/t.maxHp,s=t.species.rarity,r={common:0,uncommon:.03,rare:.08,epic:.15,legendary:.34,ultra:.5}[s]||0;let a=0;for(const d of Object.keys(t.statuses))["burn","chill","shock","snare","stun","weaken"].includes(d)&&(a+=.04);a=Math.min(.16,a);const o=e?.captureBonus||0,l=i.player.ability?.effect==="lucky"?i.player.ability.value:0,c=Math.max(0,(t.level-i.player.level)*.006);return qt(.07+n*.62+a+o+l-r-c,.04,.94)}function jv(i,e=null){const t=Ho(i,e),s=Math.random()<t;return s?(i.over=!0,i.result="captured",tn(i,`${i.enemy.name} accepts the capture field!`),i.events.push({type:"capture",success:!0,chance:t})):(tn(i,`The capture field breaks. ${Math.round(t*100)}% chance.`),i.events.push({type:"capture",success:!1,chance:t})),{success:s,chance:t}}function ey(i){if(!i||i.result!=="victory")return{xp:0,shards:0,item:null};const e=i.enemy,t={common:12,uncommon:26,rare:50,epic:95,legendary:240,ultra:600}[e.species.rarity]||0,n=Math.round(e.level*14+t),s=Math.round(e.level*4+t*1.4);let r=null;return Math.random()<.22&&(r=Math.random()<.72?"potion":"treat"),{xp:n,shards:s,item:r}}function ty(i){if(i.over)return{ok:!1,reason:"Battle is already over."};i.fleeAttempts++;const e=i.legendary?.2:qt(.55+i.fleeAttempts*.15,.55,.95);return Math.random()<e?(i.over=!0,i.result="fled",tn(i,"You retreat safely."),{ok:!0,fled:!0}):(tn(i,"You failed to get away!"),{ok:!0,fled:!1})}function Fc(i,e){const t=i.enemy.moves.filter(a=>a.readyAt<=Date.now()&&!cl(i.enemy));if(!t.length)return null;const n=t.map(a=>({...a,move:fi(a.id)})),s=n.filter(a=>a.move.shape==="self"||a.move.range>=e-.6||a.move.shape==="aoe"),r=s.length?s:n;return r.sort((a,o)=>o.move.power-a.move.power),r[0]?.move.power===0&&Math.random()<.5&&r.length>1?r[1]:r[0]||null}function tn(i,e){i.log.push(e),i.log.length>8&&i.log.shift()}class ny{constructor(e,t,n,s={}){this.engine=e,this.battle=t,this.wild=n,this.options=s,this.onHud=s.onHud||(()=>{}),this.onEnd=s.onEnd||(()=>{}),this.onLog=s.onLog||(()=>{}),this.scene=new vd,this.scene.background=new De(1119530),this.scene.fog=new ta(1119530,.022),this.root=new Ge,this.scene.add(this.root),this.effects=[],this.texts=[],this.telegraphs=[],this.cameraYaw=.55,this.cameraPitch=.42,this.cameraDistance=14,this.cameraTarget=new P,this.cameraPosition=new P,this.playerPos=new P(-2.7,0,1.6),this.enemyPos=new P(2.7,0,-1.4),this.playerFacing=Math.atan2(this.enemyPos.x-this.playerPos.x,this.enemyPos.z-this.playerPos.z),this.enemyFacing=this.playerFacing+Math.PI,this.playerVelocity=new P,this.enemyVelocity=new P,this.dodge={readyAt:0,until:0,invulnUntil:0,direction:new P},this.enemyCastAt=0,this.enemyMoveCooldownAt=0,this.endTimer=0,this.ended=!1,this.lastHud=0,this.time=0,this.biome=lt[n.biome]||lt.astral,this.buildArena(),this.buildCombatants(),this.buildStars(),this.updateCamera(.016,!0),this.scene.userData.battle=!0}buildArena(){const e=new De(this.biome.ground),t=new De(this.biome.accent),n=new be(new Ve(10.5,11.5,1.1,14),new pn({color:e.clone().multiplyScalar(.9),flatShading:!0,roughness:.88,metalness:.04}));n.position.y=-.56,this.root.add(n);const s=new be(new Qn(8.4,40),new pn({color:e.clone().lerp(new De("#1b2234"),.26),flatShading:!0,roughness:.9}));s.rotation.x=-Math.PI/2,s.position.y=.01,this.root.add(s);const r=new be(new Tn(8.5,.1,6,64),new wn({color:t,transparent:!0,opacity:.82,blending:bn}));r.rotation.x=Math.PI/2,r.position.y=.08,this.root.add(r),this.ring=r;for(let d=0;d<12;d++){const h=d/12*Math.PI*2,u=new be(new Ws(.25,.36,5),new wn({color:t,transparent:!0,opacity:.35,side:sn,blending:bn}));u.rotation.x=-Math.PI/2,u.position.set(Math.cos(h)*6.4,.06,Math.sin(h)*6.4),this.root.add(u)}const a=new pn({color:"#3f4050",flatShading:!0,roughness:.9});for(let d=0;d<18;d++){const h=d/18*Math.PI*2+.2,u=11+Math.random()*5,f=.6+Math.random()*2.2,g=new be(new mi(f,0),a);g.position.set(Math.cos(h)*u,-2-Math.random()*4,Math.sin(h)*u),g.rotation.set(Math.random(),Math.random(),Math.random()),this.root.add(g)}for(let d=0;d<6;d++){const h=d/6*Math.PI*2,u=new be(new ft(.45,3+Math.random()*2,5),new pn({color:t,emissive:t,emissiveIntensity:.55,transparent:!0,opacity:.9,flatShading:!0}));u.position.set(Math.cos(h)*9.6,1.4,Math.sin(h)*9.6),u.rotation.z=Math.cos(h)*.25,this.root.add(u)}this.ambient=new Cd(12110079,2103331,1.5),this.scene.add(this.ambient);const o=new Xr(16769208,2.5);o.position.set(-6,14,8),this.scene.add(o);const l=new Xr(10190335,1.6);l.position.set(6,8,-10),this.scene.add(l),this.scene.add(new Ld(3949672,.8));const c=this.makeTrainer();c.position.set(-.5,0,5.4),c.rotation.y=Math.PI,this.root.add(c),this.trainer=c}makeTrainer(){const e=new Ge,t=new pn({color:"#2f7f82",flatShading:!0,roughness:.75}),n=new pn({color:"#e8b48f",flatShading:!0,roughness:.7}),s=new pn({color:"#ffcc66",flatShading:!0,roughness:.6}),r=new be(new na(.3,.55,4,8),t);r.position.y=1,e.add(r);const a=new be(new Qt(.28,1),n);a.position.y=1.7,e.add(a);const o=new be(new dt(.68,.14,.38),s);o.position.y=1.38,e.add(o);for(const l of[-1,1]){const c=new be(new Ve(.1,.11,.5,4),t);c.position.set(l*.16,.45,0),e.add(c);const d=new be(new Ve(.08,.09,.5,4),t);d.position.set(l*.38,1,.04),d.rotation.z=l*.2,e.add(d)}return e}buildStars(){const t=new Float32Array(660);for(let r=0;r<220;r++)t[r*3]=(Math.random()-.5)*120,t[r*3+1]=8+Math.random()*50,t[r*3+2]=(Math.random()-.5)*120;const n=new xt;n.setAttribute("position",new Ot(t,3));const s=new Gs(n,new cs({color:14543103,size:.18,transparent:!0,opacity:.75,depthWrite:!1}));this.scene.add(s),this.stars=s}buildCombatants(){const e=this.battle.player.species,t=this.battle.enemy.species;if(this.playerMesh=Zr(e,{scale:1.05}),this.playerMesh.position.copy(this.playerPos),this.playerMesh.rotation.y=this.playerFacing,this.root.add(this.playerMesh),this.enemyMesh=Zr(t,{scale:this.wild.legendary?1.25:1}),this.enemyMesh.position.copy(this.enemyPos),this.enemyMesh.rotation.y=this.enemyFacing,this.root.add(this.enemyMesh),this.wild.legendary){const n=new is(ln[t.types[0]]?.color||"#c08bff",4,22,2);n.position.set(this.enemyPos.x,2,this.enemyPos.z),this.root.add(n),this.enemyAura=n}this.updateCombatantPositions()}updateCombatantPositions(){this.playerMesh&&(this.playerMesh.position.set(this.playerPos.x,this.playerPos.y,this.playerPos.z),this.playerMesh.rotation.y=this.playerFacing),this.enemyMesh&&(this.enemyMesh.position.set(this.enemyPos.x,this.enemyPos.y,this.enemyPos.z),this.enemyMesh.rotation.y=this.enemyFacing)}update(e,t,n=Date.now()){this.time+=e;const s=t.consumeLook();this.cameraYaw-=s.dx*.005,this.cameraPitch=qt(this.cameraPitch+s.dy*.0035,.12,.9);const r=t.consumeWheel();r&&(this.cameraDistance=qt(this.cameraDistance+r*.9,9,22)),this.battle.over||(this.updatePlayer(e,t,n),this.updateEnemy(e,n),this.updateTelegraphs(n),this.dodge.invulnUntil>0&&this.dodge.invulnUntil<n&&(this.dodge.invulnUntil=0)),Qv(this.battle,n),this.updateEffects(e),this.updateCamera(e),this.animateCombatants(),this.battle.over&&!this.ended&&(this.endTimer||(this.endTimer=n+1100),n>=this.endTimer&&(this.ended=!0,this.onEnd(this.battle.result,this.battle))),n-this.lastHud>80&&(this.lastHud=n,this.onHud(this.hudState(n)))}updatePlayer(e,t,n){const s=t.getMoveVector(),r=-Math.sin(this.cameraYaw),a=-Math.cos(this.cameraYaw),o=Math.cos(this.cameraYaw),l=-Math.sin(this.cameraYaw);let c=r*s.y+o*s.x,d=a*s.y+l*s.x;const h=Math.hypot(c,d);if(h>1&&(c/=h,d/=h),(t.consumePressed("KeyQ")||t.consumePressed("Space"))&&n>=this.dodge.readyAt){this.dodge.readyAt=n+3800,this.dodge.until=n+220,this.dodge.invulnUntil=n+430;const _=h>.1?new P(c,0,d):new P(Math.sin(this.playerFacing),0,Math.cos(this.playerFacing));this.dodge.direction.copy(_),this.spawnBurst(this.playerPos.clone().add(new P(0,.3,0)),"#9be8ff",12,.7)}const u=Nc(this.battle.player,n)*(n<this.dodge.until?16:5.4);let f=c*u,g=d*u;n<this.dodge.until&&(f=this.dodge.direction.x*u,g=this.dodge.direction.z*u),this.playerVelocity.x+=(f-this.playerVelocity.x)*Math.min(1,e*16),this.playerVelocity.z+=(g-this.playerVelocity.z)*Math.min(1,e*16),this.battle.over||(this.playerPos.x+=this.playerVelocity.x*e,this.playerPos.z+=this.playerVelocity.z*e),this.clampToArena(this.playerPos,7.9),Math.hypot(this.playerVelocity.x,this.playerVelocity.z)>.3&&(this.playerFacing=Math.atan2(this.playerVelocity.x,this.playerVelocity.z))}clampToArena(e,t){const n=Math.hypot(e.x,e.z);if(n>t){const s=t/n;e.x*=s,e.z*=s}}updateEnemy(e,t){const n=this.battle;if(n.enemy.hp<=0)return;const s=this.playerPos.x-this.enemyPos.x,r=this.playerPos.z-this.enemyPos.z,a=Math.hypot(s,r)||.001,o=Fc(n,a),l=o?.move?.range?Math.max(2.2,o.move.range*.62):2.8;let c=0,d=0;a>l+.4?(c=s/a,d=r/a):a<l-.8?(c=-s/a,d=-r/a):(c=-r/a*.4,d=s/a*.4);const h=Nc(n.enemy,t)*2.4;if(this.enemyPos.x+=c*h*e,this.enemyPos.z+=d*h*e,this.clampToArena(this.enemyPos,7.9),this.enemyFacing=Math.atan2(this.playerPos.x-this.enemyPos.x,this.playerPos.z-this.enemyPos.z),cl(n.enemy,t)||t<this.enemyCastAt||t<this.enemyMoveCooldownAt)return;const u=Fc(n,a);if(!u)return;if(this.enemyMoveCooldownAt=t+1200+Math.random()*900,u.move.shape==="self"){this.castEnemyMove(u,t);return}if(a>u.move.range+1.2&&u.move.shape!=="aoe")return;const f={moveId:u.id,center:this.playerPos.clone(),radius:u.move.shape==="aoe"?u.move.radius:u.move.shape==="cone"?2.8:1.7,resolveAt:t+(u.move.power>45?1150:800),mesh:this.makeTelegraph(u.move,this.playerPos)};this.telegraphs.push(f),this.onLog(`Incoming ${u.move.name}!`)}makeTelegraph(e,t){const n=ln[e.type]?.color||"#ff8a4c",s=new be(new Ws(.35,1,40),new wn({color:n,transparent:!0,opacity:.7,side:sn,blending:bn,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(t.x,.06,t.z),s.scale.setScalar(e.shape==="aoe"?e.radius:1.75);const r=new be(new Qn(1,32),new wn({color:n,transparent:!0,opacity:.16,side:sn,blending:bn,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.005,s.add(r),this.root.add(s),s}updateTelegraphs(e){for(let t=this.telegraphs.length-1;t>=0;t--){const n=this.telegraphs[t],s=n.resolveAt-e;if(s>0){n.mesh.scale.setScalar(n.mesh.scale.x+(s<400?.001:0));continue}const r=fi(n.moveId),o=Math.hypot(this.playerPos.x-n.center.x,this.playerPos.z-n.center.z)<=n.radius,l=e<this.dodge.invulnUntil;if(this.root.remove(n.mesh),this.telegraphs.splice(t,1),!o||l){tn(this.battle,`${this.battle.enemy.name}'s ${r.name} misses.`),this.onLog(l?"Perfect dodge!":"You escaped the strike zone."),this.spawnFloat("MISS",this.playerPos.clone().add(new P(0,2.2,0)),"#9be8ff");continue}const c=this.castEnemyMoveRaw(n.moveId,e);c?.events&&this.handleEvents(c.events,"enemy")}}castEnemyMove(e,t){const n=Xa(this.battle,"enemy",e.id,{distance:0,angle:0},t);return n.ok&&n.events&&this.handleEvents(n.events,"enemy"),this.spawnFloat(e.move.name,this.enemyPos.clone().add(new P(0,2.2,0)),"#ffb35c"),n}castEnemyMoveRaw(e,t){const n=Xa(this.battle,"enemy",e,{distance:0,angle:0},t);return n.ok&&n.events&&this.handleEvents(n.events,"enemy"),this.spawnBurst(this.playerPos.clone().add(new P(0,.4,0)),ln[fi(e).type]?.color||"#ffb35c",14,1.2),n}castPlayerMove(e,t=Date.now()){if(this.battle.over)return{ok:!1,reason:"Battle is over."};const n=this.battle.player.moves[e];if(!n)return{ok:!1,reason:"No move in that slot."};const s=fi(n.id),r=Zd(this.battle,"player",n.id,t);if(!r.ok)return r;this.playerFacing=Math.atan2(this.enemyPos.x-this.playerPos.x,this.enemyPos.z-this.playerPos.z);const a=this.enemyPos.x-this.playerPos.x,o=this.enemyPos.z-this.playerPos.z,l=Math.hypot(a,o),c=Math.atan2(a,o)-this.playerFacing,d=Xa(this.battle,"player",n.id,{distance:l,angle:c},t);return this.onLog(`${this.battle.player.name} uses ${s.name}.`),this.spawnFloat(s.name,this.playerPos.clone().add(new P(0,2.3,0)),ln[s.type]?.color||"#9be8ff"),s.shape==="self"?this.spawnBurst(this.playerPos.clone().add(new P(0,.6,0)),ln[s.type]?.color||"#63c96b",14,1.1):s.range>4?this.spawnProjectile(s.type,this.playerPos.clone().add(new P(0,1,0)),this.enemyPos.clone().add(new P(0,.8,0))):this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),ln[s.type]?.color||"#ff8a4c",16,1.3),d.events&&this.handleEvents(d.events,"player"),d}handleEvents(e,t){for(const n of e){if(n.type==="damage"){const s=n.target==="player"?this.playerPos:this.enemyPos,r=n.crit?"!":"";this.spawnFloat(`-${n.amount}${r}`,s.clone().add(new P(0,2,0)),n.crit?"#ffd166":"#ffffff"),this.spawnBurst(s.clone().add(new P(0,.7,0)),n.typeMult>=2?"#ffe066":"#ff9f7a",n.crit?22:12,.9)}if(n.type==="heal"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat(`+${n.amount}`,s.clone().add(new P(0,2,0)),"#8ef0a0"),this.spawnBurst(s.clone().add(new P(0,.6,0)),"#63c96b",12,1)}if(n.type==="shield"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat("SHIELD",s.clone().add(new P(0,2.3,0)),"#9be8ff"),this.spawnBurst(s.clone().add(new P(0,.7,0)),"#9be8ff",16,1.1)}if(n.type==="status"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat(n.status.toUpperCase(),s.clone().add(new P(0,2.5,0)),"#c08bff")}}}spawnProjectile(e,t,n){const s=ln[e]?.color||"#ffe066",r=new be(new Qt(.24,0),new wn({color:s,transparent:!0,opacity:.95,blending:bn}));r.position.copy(t),this.root.add(r),this.effects.push({mesh:r,life:0,maxLife:.24,update:(o,l)=>{o.life+=l;const c=Math.min(1,o.life/o.maxLife);r.position.lerpVectors(t,n,c),c>=1&&(this.spawnBurst(n,s,18,1),o.dead=!0)}})}spawnBurst(e,t,n=12,s=1){const r=new Ge;r.position.copy(e),this.root.add(r);const a=[];for(let o=0;o<n;o++){const l=new be(new Qt(.08+Math.random()*.09,0),new wn({color:t,transparent:!0,opacity:.95,blending:bn})),c=new P(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar((2+Math.random()*3)*s);l.userData.velocity=c,r.add(l),a.push(l)}this.effects.push({mesh:r,life:0,maxLife:.65,update:(o,l)=>{o.life+=l;for(const c of a)c.position.addScaledVector(c.userData.velocity,l),c.userData.velocity.y-=5*l,c.material.opacity=Math.max(0,1-o.life/o.maxLife),c.scale.setScalar(Math.max(.01,1-o.life/o.maxLife));o.life>=o.maxLife&&(o.dead=!0)}})}spawnFloat(e,t,n="#ffffff"){const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.font='bold 52px "Trebuchet MS", sans-serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="rgba(10,14,23,0.9)",r.strokeText(e,128,48),r.fillStyle=n,r.fillText(e,128,48);const a=new Ed(s);a.colorSpace=jt;const o=new Sd(new il({map:a,transparent:!0,depthWrite:!1}));o.position.copy(t),o.scale.set(2.8,1.05,1),this.root.add(o),this.effects.push({mesh:o,life:0,maxLife:1.1,update:(l,c)=>{l.life+=c,o.position.y+=c*.9,o.material.opacity=Math.max(0,1-l.life/l.maxLife),l.life>=l.maxLife&&(l.dead=!0)}})}updateEffects(e){for(let t=this.effects.length-1;t>=0;t--){const n=this.effects[t];n.update(n,e),n.dead&&(this.root.remove(n.mesh),this.effects.splice(t,1))}}animateCombatants(){this.playerMesh&&Xs(this.playerMesh,this.time,Math.hypot(this.playerVelocity.x,this.playerVelocity.z)>.3?"moving":"battle"),this.enemyMesh&&Xs(this.enemyMesh,this.time+1.4,"battle"),this.updateCombatantPositions()}attemptCapture(e,t=Date.now()){if(this.battle.over)return{ok:!1,reason:"Battle is over."};const n=Ho(this.battle,e),s=jv(this.battle,e);return this.onLog(s.success?"Capture field holds!":`Capture failed (${Math.round(s.chance*100)}% chance).`),s.success?(this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),"#ffe066",28,1.6),this.spawnFloat("CAPTURED!",this.enemyPos.clone().add(new P(0,2.4,0)),"#ffe066")):(this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),"#ff8a4c",10,.8),this.enemyMoveCooldownAt=Math.min(this.enemyMoveCooldownAt,t+350)),{...s,chance:n}}attemptFlee(e=Date.now()){const t=ty(this.battle);return this.onLog(t.fled?"You retreat from the encounter.":"You could not escape!"),t}hudState(e=Date.now()){return{battle:this.battle,cooldowns:this.battle.player.moves.map(t=>Math.max(0,t.readyAt-e)),maxCooldowns:this.battle.player.moves.map(t=>fi(t.id).cooldown*1e3),dodgeRemaining:Math.max(0,this.dodge.readyAt-e),captureChance:Ho(this.battle,null),inRange:Math.hypot(this.playerPos.x-this.enemyPos.x,this.playerPos.z-this.enemyPos.z),playerPos:this.playerPos,enemyPos:this.enemyPos,invulnerable:e<this.dodge.invulnUntil}}updateCamera(e,t=!1){const n=new P((this.playerPos.x+this.enemyPos.x)*.5,1.25,(this.playerPos.z+this.enemyPos.z)*.5),s=Math.cos(this.cameraPitch)*this.cameraDistance,r=new P(n.x+Math.sin(this.cameraYaw)*s,n.y+Math.sin(this.cameraPitch)*this.cameraDistance+2.2,n.z+Math.cos(this.cameraYaw)*s);t?(this.cameraTarget.copy(n),this.cameraPosition.copy(r)):(this.cameraTarget.lerp(n,1-Math.exp(-6*e)),this.cameraPosition.lerp(r,1-Math.exp(-5*e)));const a=this.engine.camera;a.position.copy(this.cameraPosition),a.lookAt(this.cameraTarget),this.glowingRing&&(this.glowingRing.rotation.z+=e),this.ring.material.opacity=.62+Math.sin(this.time*2)*.12}dispose(){this.root.removeFromParent();for(const e of this.effects)e.mesh.removeFromParent();this.effects.length=0,this.scene.clear()}}const gn={disc_basic:{id:"disc_basic",name:"Field Disc",category:"disc",price:25,currency:"shards",captureBonus:0,color:"#9fe7ff",icon:"disc",description:"A dependable capture disc. Free with every expedition kit and cheap to replace."},disc_fine:{id:"disc_fine",name:"Prism Disc",category:"disc",price:80,currency:"shards",captureBonus:.18,color:"#c08bff",icon:"disc",description:"A tuned disc with a brighter containment field. Adds 18% to capture chance."},potion:{id:"potion",name:"Sap Salve",category:"heal",price:30,currency:"shards",healPercent:.4,color:"#63c96b",icon:"potion",description:"Restores 40% of one creature's maximum health outside battle."},potion_great:{id:"potion_great",name:"Greater Salve",category:"heal",price:75,currency:"shards",healPercent:.8,color:"#8ef0a0",icon:"potion",description:"Restores 80% of one creature's maximum health outside battle."},treat:{id:"treat",name:"Starlight Treat",category:"xp",price:20,currency:"shards",xp:45,color:"#ffd166",icon:"treat",description:"A small training snack. Grants 45 experience to one creature."},lure:{id:"lure",name:"Scent Lure",category:"lure",price:60,currency:"shards",color:"#ff8fc7",icon:"lure",description:"Slightly raises the chance of rare creatures for the next three encounters."},training_slot:{id:"training_slot",name:"Second Treadmill",category:"upgrade",price:320,currency:"shards",stardust:2,color:"#ffb35c",icon:"treadmill",description:"Unlocks a permanent second treadmill slot. Both slots train independently."}},iy=["disc_basic","disc_fine","potion","potion_great","treat","lure","training_slot"],Qd=[{id:"q_first_steps",name:"First Steps in the Hollow",giver:"Guide Wren",description:"Meet your starter, then find one wild creature and bring it home safely.",autoStart:!0,objectives:[{id:"starter",label:"Choose a starter",type:"starter",count:1},{id:"capture",label:"Capture any wild creature",type:"capture",count:1}],rewards:{shards:120,stardust:1,items:{disc_basic:5,potion:2}}},{id:"q_verdant",name:"Whispers Under Green",giver:"Botanist Sable",description:"The Verdant Hollow is restless. Calm three creatures and inspect the old root shrine.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 3 Verdant creatures",type:"defeat",biome:"verdant",count:3},{id:"visit",label:"Visit the Root Shrine",type:"visit",landmark:"root-shrine",count:1}],rewards:{shards:180,stardust:1,items:{potion:3,treat:2}}},{id:"q_ember",name:"Safe Passage Through Ember",giver:"Warden Cato",description:"Learn the caldera channels. Defeat two Ember Reach creatures and touch the Warm Gate.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 2 Ember Reach creatures",type:"defeat",biome:"ember",count:2},{id:"visit",label:"Visit the Warm Gate",type:"visit",landmark:"warm-gate",count:1}],rewards:{shards:220,stardust:2,items:{disc_fine:2,potion_great:2}}},{id:"q_tide",name:"What the Tide Carries",giver:"Tidekeeper Maru",description:"The coast has been unusually loud. Capture a Water creature and visit the Shell Spire.",autoStart:!1,objectives:[{id:"capture_water",label:"Capture a Water creature",type:"capture",captureType:"Water",count:1},{id:"visit",label:"Visit the Shell Spire",type:"visit",landmark:"shell-spire",count:1}],rewards:{shards:240,stardust:2,items:{disc_fine:2,lure:1}}},{id:"q_frost",name:"A Quiet Above the Pines",giver:"Scout Ilya",description:"The Frostveil is beautiful and unforgiving. Defeat three Frost creatures and reach the Ice Obelisk.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 3 Frost creatures",type:"defeat",biome:"frost",count:3},{id:"visit",label:"Visit the Ice Obelisk",type:"visit",landmark:"ice-obelisk",count:1}],rewards:{shards:300,stardust:3,items:{potion_great:3,treat:3}}},{id:"q_astral",name:"The Scar Answers",giver:"Astronomer Vey",description:"Something in the Astral Scar is listening. Visit the Crystal Ring and witness a legendary event.",autoStart:!1,objectives:[{id:"visit",label:"Visit the Crystal Ring",type:"visit",landmark:"crystal-ring",count:1},{id:"legendary",label:"Witness a legendary event",type:"legendary",count:1}],rewards:{shards:450,stardust:4,items:{disc_fine:3,lure:2}}},{id:"q_trainer",name:"The Long Road",giver:"Treadmill Attendant Bo",description:"Strength is built in quiet moments. Train a creature for two minutes and raise one to level 10.",autoStart:!1,objectives:[{id:"train",label:"Train for 120 seconds total",type:"train",count:120},{id:"level10",label:"Raise a creature to level 10",type:"level",level:10,count:1}],rewards:{shards:260,stardust:2,items:{treat:5,potion:3}}},{id:"q_collector",name:"A Living Atlas",giver:"Archivist Nim",description:"Discovery is its own reward, but the archive pays well. Record 8 species in the AstraDex.",autoStart:!1,objectives:[{id:"discover8",label:"Discover 8 species",type:"discover",count:8}],rewards:{shards:320,stardust:3,items:{disc_fine:2,lure:1}}}],Ks=Object.fromEntries(Qd.map(i=>[i.id,i]));function At(i,e){return i?.creatures?.find(t=>t.uid===e)||null}function fn(i){return At(i,i?.activeUid)||i?.creatures?.[0]||null}function sy(i){return(i?.party||[]).map(e=>At(i,e)).filter(Boolean)}function ry(i){return(i?.creatures||[]).filter(e=>!i.party.includes(e.uid))}function ay(i,e){const t=At(i,e);return t?i.party.includes(e)?t.assignment==="training"?{ok:!1,reason:"This creature is training. Remove it from the treadmill first."}:(i.activeUid=e,{ok:!0}):{ok:!1,reason:"Move this creature into your party first."}:{ok:!1,reason:"Creature not found."}}function oy(i,e,t){const n=i.party.indexOf(e);if(n===-1)return{ok:!1,reason:"Creature is not in the party."};const s=n+t;if(s<0||s>=i.party.length)return{ok:!1,reason:"That slot is already at the edge."};const[r]=i.party.splice(n,1);return i.party.splice(s,0,r),{ok:!0}}function ly(i,e){const t=At(i,e);return t?i.party.includes(e)?{ok:!0}:i.party.length>=Pi?{ok:!1,reason:`Your party is full (${Pi}). Move another creature to storage first.`}:t.assignment==="training"?{ok:!1,reason:"Remove this creature from the treadmill first."}:(i.party.push(e),t.assignment="party",{ok:!0}):{ok:!1,reason:"Creature not found."}}function cy(i,e){const t=i.party.indexOf(e);if(t===-1)return{ok:!1,reason:"Creature is already in storage."};if(i.party.length<=1)return{ok:!1,reason:"You need at least one creature in your party."};const n=At(i,e);return n?.assignment==="training"?{ok:!1,reason:"Remove this creature from the treadmill first."}:(i.party.splice(t,1),n&&(n.assignment="storage"),i.activeUid===e&&(i.activeUid=i.party[0]||null),{ok:!0})}function dy(i,e){return At(i,e)?i.creatures.length<=1?{ok:!1,reason:"You cannot release your last creature."}:i.activeUid===e?{ok:!1,reason:"Set another creature as active before releasing this one."}:(i.creatures=i.creatures.filter(n=>n.uid!==e),i.party=i.party.filter(n=>n!==e),i.training.slots=i.training.slots.filter(n=>n.uid!==e),i.activeUid===e&&(i.activeUid=i.party[0]||i.creatures[0]?.uid||null),{ok:!0}):{ok:!1,reason:"Creature not found."}}function hy(i,e=1){if(!i)return 0;const t=i.hp;return i.hp=Math.min(i.stats.maxHp,i.hp+Math.round(i.stats.maxHp*e)),i.hp-t}function qa(i){let e=0;for(const t of i.creatures){const n=t.stats.maxHp-t.hp;t.hp=t.stats.maxHp,e+=n}return e}function uy(i){return Mt(i?.speciesId)?.name||"Unknown"}function Lt(i){return i?.nickname||uy(i)}function fy(i){return{used:i.creatures.filter(t=>!i.party.includes(t.uid)).length,limit:Xd}}function py(i){if(!i)return 0;const e=i.stats||{};return Math.round((e.maxHp||0)*.28+(e.attack||0)*1.4+(e.defence||0)*1.1+(e.speed||0)*.9+i.level*3)}function pi(i){return(Number(i)||0).toLocaleString("en-US")}function Rs(i){const e=Math.max(0,Math.floor(i)),t=Math.floor(e/60),n=e%60;return t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}:${String(n).padStart(2,"0")}`}function Br(i,e=0,t=0){i.currency.shards=qt((i.currency.shards||0)+Math.max(0,Math.round(e)),0,99999999),i.currency.stardust=qt((i.currency.stardust||0)+Math.max(0,Math.round(t)),0,99999999)}function jd(i,e=0,t=0){return(i.currency.shards||0)>=e&&(i.currency.stardust||0)>=t}function my(i,e=0,t=0){return jd(i,e,t)?(i.currency.shards-=Math.max(0,Math.round(e)),i.currency.stardust-=Math.max(0,Math.round(t)),{ok:!0}):{ok:!1,reason:"Not enough currency."}}function jr(i,e,t=1){if(!gn[e]&&e!=="training_slot")return{ok:!1,reason:"Unknown item."};if(e==="training_slot")return(i.training.unlocked||1)>=2?{ok:!1,reason:"The second treadmill is already unlocked."}:(i.training.unlocked=2,{ok:!0});const n=i.inventory[e]||0,s=Math.min(Kr,n+Math.max(0,Math.round(t)));return i.inventory[e]=s,{ok:!0,granted:s-n,overflow:n+t>Kr}}function kc(i,e){const t=gn[e];if(!t)return{ok:!1,reason:"Unknown item."};if(e==="training_slot"){if((i.training.unlocked||1)>=2)return{ok:!1,reason:"You already own both treadmill slots."}}else if((i.inventory[e]||0)>=Kr)return{ok:!1,reason:`${t.name} is already at the inventory cap.`};const n=my(i,t.price,t.stardust||0);if(!n.ok)return n;const s=jr(i,e,1);return s.ok?{ok:!0,item:t}:(i.currency.shards+=t.price,i.currency.stardust+=t.stardust||0,s)}function gy(i,e,t="potion"){const n=gn[t];if(!n||n.category!=="heal")return{ok:!1,reason:"That is not a healing item."};if((i.inventory[t]||0)<1)return{ok:!1,reason:`No ${n.name} left.`};const s=At(i,e);if(!s)return{ok:!1,reason:"Creature not found."};if(s.hp>=s.stats.maxHp)return{ok:!1,reason:"That creature is already at full health."};const r=hy(s,n.healPercent);return i.inventory[t]-=1,{ok:!0,healed:r,item:n}}function vy(i,e,t="treat"){const n=gn[t];if(!n||n.category!=="xp")return{ok:!1,reason:"That is not a training treat."};if((i.inventory[t]||0)<1)return{ok:!1,reason:`No ${n.name} left.`};const s=At(i,e);return s?(i.inventory[t]-=1,{ok:!0,result:Fs(i,s,n.xp),item:n}):{ok:!1,reason:"Creature not found."}}function yy(i){return(i.inventory.lure||0)<1?{ok:!1,reason:"No Scent Lure left."}:(i.inventory.lure-=1,i.lureCharges=3,{ok:!0})}function _y(i,e){const t=gn[e],n=e==="training_slot"?(i.training.unlocked||1)>=2:i.inventory[e]||0;return{item:t,owned:n,affordable:jd(i,t.price,t.stardust||0),lockedReason:e==="training_slot"&&n?"Already unlocked":null}}function xy(i){return iy.map(e=>_y(i,e))}function eh(i,e){const t=Ks[e];if(!t||i.quests.completed.includes(e)||i.quests.active.some(n=>n.id===e))return null;i.quests.active.push({id:e,startedAt:Date.now()}),i.quests.progress[e]=i.quests.progress[e]||{};for(const n of t.objectives)typeof i.quests.progress[e][n.id]!="number"&&(i.quests.progress[e][n.id]=0);return t}function Sy(i,e){const t=Ks[e];return t?i.quests.completed.includes(e)?{ok:!1,reason:"Quest already completed."}:i.quests.active.some(n=>n.id===e)?{ok:!1,reason:"Quest already active."}:(eh(i,e),{ok:!0,quest:t}):{ok:!1,reason:"Unknown quest."}}function Ys(i){return i.quests.active.map(e=>{const t=Ks[e.id];if(!t)return null;const n=i.quests.progress[e.id]||{},s=t.objectives.map(r=>({...r,progress:Math.min(r.count,n[r.id]||0),complete:(n[r.id]||0)>=r.count}));return{...t,startedAt:e.startedAt,objectives:s,complete:s.every(r=>r.complete)}}).filter(Boolean)}function My(i){return Qd.filter(e=>!i.quests.completed.includes(e.id)&&!i.quests.active.some(t=>t.id===e.id))}function ts(i,e){const t=[];for(const n of Ys(i)){if(n.complete)continue;let s=!1;for(const r of n.objectives){if(r.complete||!by(r,e))continue;const a=i.quests.progress[n.id],o=a[r.id]||0;let l=o;r.type==="discover"?l=Math.max(o,e.count||0):r.type==="level"?l=Math.max(o,e.level||0):r.type==="train"?l=Math.min(r.count,o+(e.seconds||0)):l=Math.min(r.count,o+1),l!==o&&(a[r.id]=l,s=!0)}if(s){const r=Ys(i).find(a=>a.id===n.id);t.push({quest:r,justCompleted:!!r?.complete})}}return t}function by(i,e){if(i.type!==e.type&&!(i.type==="capture"&&e.type==="capture"))return!1;switch(i.type){case"capture":return!(i.captureType&&!e.types?.includes(i.captureType));case"defeat":return!(i.biome&&e.biome!==i.biome);case"visit":return!!e.landmark&&e.landmark===i.landmark;case"train":return e.type==="train"&&(e.seconds||0)>0;case"level":return e.type==="level"&&(e.level||0)>=i.level;case"discover":return e.type==="discover";case"starter":return e.type==="starter";case"legendary":return e.type==="legendary";default:return!1}}function wy(i,e){const t=Ys(i).find(r=>r.id===e);if(!t)return{ok:!1,reason:"Quest is not active."};if(!t.complete)return{ok:!1,reason:"Quest objectives are not complete yet."};const n=Ks[e];Br(i,n.rewards.shards||0,n.rewards.stardust||0);const s=[];for(const[r,a]of Object.entries(n.rewards.items||{}))jr(i,r,a).ok&&s.push({itemId:r,amount:a});return i.quests.active=i.quests.active.filter(r=>r.id!==e),i.quests.completed.includes(e)||i.quests.completed.push(e),i.quests.claimed.includes(e)||i.quests.claimed.push(e),{ok:!0,quest:n,items:s}}function Ey(i){return{active:Ys(i),available:My(i),completed:i.quests.completed.map(e=>Ks[e]).filter(Boolean)}}function Bc(i){return i.quests.completed.includes("q_first_steps")?null:eh(i,"q_first_steps")}const Ty=3,th=480*60;function us(i){return i.training?.slots||[]}function nh(i){return Math.max(1,Math.min(2,i.training?.unlocked||1))}function Ay(i,e,t=Date.now()){const n=At(i,e);return n?i.activeUid===e?{ok:!1,reason:"Set another creature as active before training this one."}:n.assignment==="battle"?{ok:!1,reason:"That creature is currently in battle."}:us(i).some(s=>s.uid===e)?{ok:!1,reason:"That creature is already on a treadmill."}:us(i).length>=nh(i)?{ok:!1,reason:"All treadmill slots are occupied. Remove a creature first."}:(n.assignment="training",i.training.slots.push({uid:e,startedAt:t,lastClaimAt:t,rate:Ty}),{ok:!0}):{ok:!1,reason:"That creature is not in your collection."}}function Cy(i,e,t=Date.now()){const n=us(i).findIndex(a=>a.uid===e);if(n===-1)return{ok:!1,reason:"That creature is not on a treadmill."};const s=ih(i,t,e);i.training.slots.splice(n,1);const r=At(i,e);return r&&(r.assignment=i.party.includes(e)?"party":"storage"),{ok:!0,collected:s}}function Ry(i,e,t=Date.now()){const n=us(i).find(r=>r.uid===e);if(!n)return null;const s=Math.max(0,Math.min(th,(t-n.lastClaimAt)/1e3));return{xp:Math.floor(s*n.rate),elapsed:s,rate:n.rate,startedAt:n.startedAt}}function ih(i,e=Date.now(),t=null){let n=0;const s=[],r=[];for(const a of us(i)){if(t&&a.uid!==t)continue;const o=At(i,a.uid);if(!o){a.lastClaimAt=e;continue}const l=Math.max(0,Math.min(th,(e-a.lastClaimAt)/1e3)),c=Math.floor(l*a.rate);if(a.lastClaimAt=e,c>0){const d=Fs(i,o,c);n+=c,d.levels&&r.push({uid:o.uid,name:Lt(o),levels:d.levels}),s.push(...d.evolved.map(h=>({uid:o.uid,species:h}))),i.flags.totalTrainSeconds=(i.flags.totalTrainSeconds||0)+Math.min(l,60)}}return{xp:n,levels:r,evolutions:s}}function Oc(i,e=Date.now()){return us(i).map(t=>{const n=At(i,t.uid),s=Ry(i,t.uid,e),r=n?Qr(n.level):1;return{slot:t,creature:n,preview:s,progress:n?Math.min(1,(n.xp+(s?.xp||0))/r):0,nextLevelXp:n?Math.max(1,r-n.xp):0}})}let Py=0;function zc(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function vn(i,e){const t=String(i||"#7fe7d4").replace("#",""),n=t.length===3?t.split("").map(c=>c+c).join(""):t.padEnd(6,"0").slice(0,6),s=Number.parseInt(n,16),r=c=>Math.max(0,Math.min(255,Math.round(c+255*e))),a=r(s>>16&255),o=r(s>>8&255),l=r(s&255);return`#${[a,o,l].map(c=>c.toString(16).padStart(2,"0")).join("")}`}function yn(i,e,t,n,s=1){return`
    <ellipse cx="${i}" cy="${e}" rx="${t*1.12}" ry="${t*1.24}" fill="#f8ffff" opacity="0.94"/>
    <ellipse cx="${i+t*.16*s}" cy="${e+t*.02}" rx="${t*.58}" ry="${t*.84}" fill="${n}"/>
    <circle cx="${i+t*.38*s}" cy="${e-t*.38}" r="${Math.max(1,t*.25)}" fill="#ffffff" opacity="0.92"/>`}function Ly(i,e,t,n){return`<path d="M${i-5*t} ${e} L${i+1*t} ${e-18*t} L${i+6*t} ${e+1*t} Z" fill="${vn(n,-.12)}" stroke="${vn(n,-.3)}" stroke-width="1"/>`}function Iy(i,e,t){return`
    <ellipse cx="101" cy="133" rx="48" ry="31" fill="${t}" opacity="0.92"/>
    <ellipse cx="98" cy="126" rx="40" ry="25" fill="${i.primary}"/>
    <path d="M135 124 C162 110 169 94 163 82" fill="none" stroke="${t}" stroke-width="10" stroke-linecap="round"/>
    <path d="M163 82 C172 92 174 106 168 116" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <g fill="${t}">
      <rect x="66" y="148" width="11" height="27" rx="5"/>
      <rect x="91" y="152" width="11" height="24" rx="5"/>
      <rect x="117" y="151" width="11" height="25" rx="5"/>
      <rect x="137" y="145" width="11" height="29" rx="5"/>
    </g>
    <circle cx="68" cy="107" r="32" fill="${i.primary}"/>
    <path d="M43 91 C29 72 35 61 51 68 L55 86 Z" fill="${i.secondary}"/>
    <path d="M84 88 C94 65 110 64 112 82 L101 94 Z" fill="${i.secondary}"/>
    <path d="M45 111 C34 124 37 136 52 138 C58 130 56 119 52 111 Z" fill="${i.primary}"/>
    <ellipse cx="62" cy="122" rx="22" ry="14" fill="${e}" opacity="0.5"/>
    <ellipse cx="66" cy="107" rx="6.4" ry="7.2" fill="#fff"/>
    <ellipse cx="68" cy="108" rx="3.5" ry="5" fill="${i.eye}"/>
    <circle cx="69" cy="105" r="1.5" fill="#fff"/>
    <circle cx="54" cy="124" r="3" fill="${vn(i.eye,.18)}"/>
    ${i.horns?Ly(84,85,.95,e):""}
    <path d="M76 101 C84 97 93 99 98 105" fill="none" stroke="${e}" stroke-width="2" opacity="0.8"/>
    <path d="M104 113 C122 108 140 109 151 116" fill="none" stroke="${e}" stroke-width="3" opacity="0.38"/>`}function Dy(i,e,t){return`
    <ellipse cx="100" cy="149" rx="38" ry="12" fill="#050912" opacity="0.4"/>
    <path d="M78 136 C66 163 68 177 79 179 L87 178 L84 144 Z" fill="${t}"/>
    <path d="M121 136 C133 163 131 177 121 179 L113 178 L116 144 Z" fill="${t}"/>
    <rect x="52" y="119" width="10" height="47" rx="5" fill="${i.secondary}" transform="rotate(-13 57 140)"/>
    <rect x="139" y="119" width="10" height="47" rx="5" fill="${i.secondary}" transform="rotate(13 144 140)"/>
    <path d="M72 81 C66 103 70 136 85 141 L115 141 C131 134 135 103 127 81 Z" fill="${i.primary}"/>
    <path d="M83 85 C88 110 85 127 80 137 L100 137 L100 85 Z" fill="${t}" opacity="0.55"/>
    <ellipse cx="100" cy="106" rx="21" ry="25" fill="${e}" opacity="0.28"/>
    <path d="M102 126 C119 132 138 128 146 114" fill="none" stroke="${t}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="100" cy="57" r="30" fill="${i.primary}"/>
    <path d="M71 48 C66 26 84 22 100 30 C116 19 135 28 128 49 C118 38 107 38 99 41 C90 36 78 40 71 48 Z" fill="${i.secondary}"/>
    <path d="M91 32 C92 17 108 16 111 32 C105 27 97 27 91 32 Z" fill="${e}"/>
    ${i.horns?`<path d="M77 37 L64 15 L87 27 Z" fill="${e}"/>`:""}
    ${yn(89,58,5,i.eye,1)}
    ${yn(112,58,5,i.eye,-1)}
    <path d="M95 72 Q100 76 106 72" fill="none" stroke="${vn(i.eye,.1)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M77 114 C87 122 99 124 112 117" fill="none" stroke="${e}" stroke-width="3" opacity="0.6"/>
    <circle cx="100" cy="116" r="5" fill="${e}" opacity="0.75"/>`}function Uy(i,e,t){return`
    <path d="M78 102 C50 77 24 78 14 98 C29 104 35 120 53 127 C64 131 73 121 82 116 Z" fill="${t}" opacity="0.95"/>
    <path d="M122 102 C150 77 176 78 186 98 C171 104 165 120 147 127 C136 131 127 121 118 116 Z" fill="${t}" opacity="0.95"/>
    <path d="M79 102 C56 91 38 94 25 105 C44 109 57 120 71 121 Z" fill="${e}" opacity="0.72"/>
    <path d="M121 102 C144 91 162 94 175 105 C156 109 143 120 129 121 Z" fill="${e}" opacity="0.72"/>
    <path d="M86 86 C83 70 92 57 100 54 C108 57 117 70 114 86 L126 133 C112 146 88 146 74 133 Z" fill="${i.primary}"/>
    <circle cx="100" cy="63" r="27" fill="${i.primary}"/>
    <path d="M73 66 C65 45 79 36 100 42 C121 36 135 45 127 66 C116 55 108 53 100 57 C92 53 84 55 73 66 Z" fill="${i.secondary}"/>
    <path d="M89 42 L84 24 L99 37 Z" fill="${e}"/>
    <path d="M111 42 L117 24 L101 37 Z" fill="${e}"/>
    ${yn(89,63,5.4,i.eye,1)}
    ${yn(111,63,5.4,i.eye,-1)}
    <path d="M94 77 L100 85 L107 77 Z" fill="${vn(i.eye,-.1)}"/>
    <path d="M97 133 C102 151 113 158 128 156" fill="none" stroke="${t}" stroke-width="8" stroke-linecap="round"/>
    <path d="M128 156 L142 147 L134 160 L146 162 L126 168 Z" fill="${e}"/>
    <path d="M84 110 C94 117 108 117 117 109" fill="none" stroke="${e}" stroke-width="3" opacity="0.7"/>`}function Ny(i,e,t){return`
    <path d="M120 121 C148 103 165 79 157 59 C171 74 176 105 152 127 Z" fill="${t}" opacity="0.72"/>
    <ellipse cx="97" cy="119" rx="47" ry="30" fill="${i.primary}"/>
    <path d="M87 91 C92 72 112 67 126 84 C138 98 135 124 124 139 C112 153 83 151 73 134 C67 123 72 103 87 91 Z" fill="${i.primary}"/>
    <path d="M94 89 C82 72 92 55 105 61 C111 70 108 80 103 90 Z" fill="${e}"/>
    <path d="M107 86 C118 65 136 69 138 84 C133 94 122 98 112 95 Z" fill="${t}"/>
    <path d="M74 127 C51 127 37 140 41 153 C55 149 67 151 79 144 Z" fill="${e}" opacity="0.84"/>
    <path d="M119 101 C132 96 143 100 149 110 C139 113 129 119 119 116 Z" fill="${t}"/>
    ${yn(101,98,6,i.eye,1)}
    <path d="M92 118 C102 124 115 121 121 114" fill="none" stroke="${vn(i.eye,.5)}" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="82" cy="110" r="3.4" fill="${e}" opacity="0.8"/>
    <circle cx="91" cy="87" r="2" fill="${e}" opacity="0.7"/>
    <path d="M57 104 C50 95 52 87 60 85 C67 91 64 99 62 104 Z" fill="${t}" opacity="0.8"/>
    <path d="M143 83 C152 74 161 78 160 88 C153 92 147 89 143 83 Z" fill="${e}" opacity="0.7"/>`}function Fy(i,e,t){return`
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${t}" stroke-width="25" stroke-linecap="round" opacity="0.72"/>
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${i.primary}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="130" cy="66" r="27" fill="${i.primary}"/>
    <path d="M106 58 C94 40 108 25 130 31 C150 36 157 53 150 67 C143 55 131 51 117 60 Z" fill="${i.secondary}"/>
    <path d="M111 47 C98 38 96 23 110 20 C122 24 126 36 121 47 Z" fill="${e}"/>
    <path d="M145 48 C158 37 170 43 168 57 C160 63 151 59 145 48 Z" fill="${e}"/>
    ${yn(131,68,5.4,i.eye,1)}
    <path d="M129 86 C137 91 144 88 147 82" fill="none" stroke="${vn(i.eye,.3)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M118 107 C110 109 103 108 97 104 M111 116 C102 119 94 118 87 114" fill="none" stroke="${e}" stroke-width="3" opacity="0.55"/>
    <circle cx="152" cy="58" r="3" fill="${i.eye}" opacity="0.9"/>`}function ky(i,e,t){return`
    <ellipse cx="100" cy="132" rx="51" ry="36" fill="${t}" opacity="0.42"/>
    <path d="M55 122 C51 94 70 70 101 69 C135 68 154 93 148 123 C143 152 118 164 97 161 C74 158 59 146 55 122 Z" fill="${i.primary}" opacity="0.92"/>
    <path d="M67 116 C71 96 88 83 106 84 C126 85 139 99 137 117 C135 134 120 145 103 144 C84 143 71 133 67 116 Z" fill="${t}" opacity="0.55"/>
    <ellipse cx="103" cy="116" rx="18" ry="20" fill="${e}" opacity="0.75"/>
    <ellipse cx="103" cy="114" rx="9" ry="11" fill="${vn(e,.35)}"/>
    ${yn(89,105,5.1,i.eye,1)}
    ${yn(117,105,5.1,i.eye,-1)}
    <path d="M95 126 Q102 133 110 125" fill="none" stroke="${vn(i.eye,.45)}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="75" cy="89" r="6" fill="${e}" opacity="0.55"/>
    <circle cx="127" cy="83" r="4" fill="${e}" opacity="0.5"/>
    <circle cx="137" cy="103" r="2.5" fill="${e}" opacity="0.55"/>
    <path d="M81 70 C84 57 91 51 100 52 C110 53 118 60 120 71" fill="none" stroke="${e}" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`}function By(i,e,t){return`
    <ellipse cx="100" cy="158" rx="48" ry="11" fill="#050912" opacity="0.42"/>
    <path d="M72 91 L57 121 L64 147 L81 144 L84 110 Z" fill="${t}"/>
    <path d="M129 91 L145 120 L138 148 L120 144 L117 110 Z" fill="${t}"/>
    <path d="M79 86 L87 64 L115 63 L123 86 L131 139 L117 159 L85 158 L71 137 Z" fill="${i.primary}"/>
    <path d="M87 91 L99 86 L112 93 L117 131 L103 146 L89 130 Z" fill="${t}" opacity="0.64"/>
    <path d="M101 93 L96 108 L106 112 L99 127" fill="none" stroke="${e}" stroke-width="4" stroke-linecap="round" opacity="0.92"/>
    <path d="M77 63 L82 38 L101 48 L120 37 L124 64 Z" fill="${i.primary}"/>
    <path d="M84 55 L91 47 L98 56 M104 56 L112 47 L118 56" fill="none" stroke="${e}" stroke-width="4" stroke-linecap="round"/>
    ${yn(89,62,4.6,i.eye,1)}
    ${yn(111,62,4.6,i.eye,-1)}
    <path d="M97 74 L104 74" stroke="${vn(i.eye,.3)}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="78" cy="100" r="4" fill="${e}" opacity="0.7"/>
    <circle cx="124" cy="112" r="3" fill="${e}" opacity="0.65"/>
    <path d="M74 90 L68 83 M126 90 L133 82" stroke="${e}" stroke-width="3" opacity="0.5"/>`}function Oy(i,e,t){return`
    <circle cx="100" cy="94" r="58" fill="none" stroke="${e}" stroke-width="1.5" opacity="0.45" stroke-dasharray="3 7"/>
    <path d="M77 84 C79 62 95 48 112 53 C132 59 139 81 127 98 C120 108 123 121 130 129 C113 137 100 127 96 117 C91 132 78 143 64 138 C75 125 70 112 66 103 C61 95 66 85 77 84 Z" fill="${i.primary}" opacity="0.9"/>
    <path d="M77 86 C83 68 100 58 115 63 C128 69 132 84 123 96 C117 105 117 114 122 121 C109 126 102 118 99 109 C95 121 85 130 74 126 C81 114 77 103 72 98 C68 91 70 86 77 86 Z" fill="${t}" opacity="0.42"/>
    <circle cx="100" cy="88" r="21" fill="${i.secondary}" opacity="0.72"/>
    ${yn(93,85,5.2,i.eye,1)}
    ${yn(108,85,5.2,i.eye,-1)}
    <path d="M95 100 Q100 105 106 99" fill="none" stroke="${vn(i.eye,.4)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M64 69 C52 58 59 45 70 52 C77 56 72 65 64 69 Z" fill="${e}" opacity="0.7"/>
    <path d="M136 72 C148 60 157 68 151 79 C146 87 140 81 136 72 Z" fill="${e}" opacity="0.62"/>
    <circle cx="65" cy="116" r="4" fill="${e}" opacity="0.55"/>
    <circle cx="137" cy="113" r="3" fill="${e}" opacity="0.6"/>
    <circle cx="120" cy="129" r="2" fill="${e}" opacity="0.5"/>
    ${i.horns?`<path d="M81 58 L75 39 L90 50 Z" fill="${e}"/><path d="M119 58 L125 39 L110 50 Z" fill="${e}"/>`:""}`}function ci(i,e={}){if(!i)return"";const t=i.visual||{},n={archetype:t.archetype||"quadruped",primary:t.primary||"#7fe7d4",secondary:t.secondary||"#2f7f82",accent:t.accent||"#ffd166",eye:t.eye||"#17351f",horns:!!t.horns,wings:!!t.wings,tail:!!t.tail,crown:!!t.crown,aura:!!t.aura},s=n.accent,r=n.secondary,a=`p${++Py}`;let o;switch(n.archetype){case"biped":o=Dy(n,s,r);break;case"flyer":case"wyvern":o=Uy(n,s,r);break;case"aquatic":o=Ny(n,s,r);break;case"serpent":o=Fy(n,s,r);break;case"blob":o=ky(n,s,r);break;case"golem":o=By(n,s,r);break;case"spirit":o=Oy(n,s,r);break;default:o=Iy(n,s,r)}const l=n.crown?`
    <g transform="translate(100 28)">
      <path d="M-16 8 L-20 -8 L-9 -2 L0 -14 L9 -2 L20 -8 L16 8 Z" fill="${s}" stroke="${vn(s,-.2)}" stroke-width="1.5"/>
      <circle cx="0" cy="-12" r="3" fill="#fff"/>
    </g>`:"",c=Array.from({length:5},(h,u)=>{const f=u/5*Math.PI*2+.6,g=100+Math.cos(f)*(58+u%2*7),_=100+Math.sin(f)*(54+u%2*4);return`<circle cx="${g.toFixed(1)}" cy="${_.toFixed(1)}" r="${(1.5+u%2).toFixed(1)}" fill="${s}" opacity="${.32+u*.04}"/>`}).join(""),d=e.className||"portrait-svg";return`
<svg class="${zc(d)}" viewBox="0 0 200 200" role="img" aria-label="${zc(i.name)} portrait" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${a}-halo" cx="50%" cy="48%" r="55%">
      <stop offset="0%" stop-color="${s}" stop-opacity="${n.aura?.34:.22}"/>
      <stop offset="62%" stop-color="${n.primary}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#070b14" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${a}-sheen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="${a}-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="101" r="92" fill="url(#${a}-halo)"/>
  <circle cx="100" cy="101" r="78" fill="none" stroke="${s}" stroke-opacity="0.19" stroke-width="1"/>
  <circle cx="100" cy="101" r="92" fill="none" stroke="${s}" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="2 9"/>
  ${c}
  <g ${n.aura?`filter="url(#${a}-glow)"`:""}>${o}</g>
  <rect x="4" y="4" width="192" height="192" rx="34" fill="url(#${a}-sheen)" opacity="0.5"/>
  ${l}
</svg>`}const zy={burn:"Burn",chill:"Chill",shock:"Shock",snare:"Snare",stun:"Stun",weaken:"Weaken",regen:"Regen",buff_attack:"Atk+",buff_defence:"Def+",debuff_attack:"Atk-",debuff_defence:"Def-"},Hy={Nature:"✦",Fire:"▲",Frost:"❉",Water:"●",Stone:"◆",Storm:"ϟ",Astral:"✧",Spirit:"◐"},sh={common:"",uncommon:"",rare:"rare",epic:"epic",legendary:"legendary",ultra:"ultra"};function Me(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Is(i,e){return e?Math.max(0,Math.min(100,i/e*100)):0}function Go(i=[]){return i.map(e=>`<span class="type-chip" style="--type-color:${ln[e]?.color||"#9fb0c9"}">${Hy[e]||"•"} ${Me(e)}</span>`).join("")}function rh(i){const e=$s[i]||$s.common;return`<span class="rarity-chip ${sh[i]||""}">${Me(e.label)}</span>`}function Hc(i,e=!1){return i?[["HP",i.maxHp||i.health||0,240],["ATK",i.attack||0,160],["DEF",i.defence||0,160],["SPD",i.speed||0,160]].map(([n,s,r])=>`
    <div class="stat-row"><span>${n}</span><div class="stat-bar"><div style="width:${Math.min(100,s/r*100)}%"></div></div><strong>${s}</strong></div>
  `).join(""):""}function Gy(i,e,t=""){const n=Is(i,e),s=n<=28?" low":"";return`<div class="hp-bar ${t}${s}"><div class="hp-fill" style="width:${n}%"></div><span>${Math.max(0,Math.round(i))} / ${Math.round(e)}</span></div>`}function Gc(i){return i?i.category==="heal"?"✚":i.category==="xp"?"★":i.category==="lure"?"❋":i.category==="upgrade"?"▤":"◉":"?"}function ss(i){return Mt(i?.speciesId)}function Vy(i){const e=ss(i);return e?`<div class="cc-badges">${Go(e.types)}${rh(e.rarity)}</div>`:""}function Wy(i){return`<div class="quest-objective-line ${i.complete?"done":""}">
    <span class="qmark">${i.complete?"✓":"○"}</span>
    <span>${Me(i.label)}</span>
    <span class="qcount">${Math.min(i.progress,i.count)} / ${i.count}</span>
  </div>`}class $y{constructor(e,t={}){this.profile=e,this.callbacks=t,this.activeScreen=null,this.selectedDexId=null,this.dexStatus="all",this.dexType="all",this.questTab="active",this.inventoryFilter="all",this.selectedStarter=null,this.battleId=null,this.moveButtons=[],this.lastMoveSignature="",this.toastTimer=0,this.lastMinimapAt=0,this.lastTrainingAt=0,this.legendaryStatus=null,this.pendingConfirm=null,this.root=document.getElementById("modal-root"),this.title=document.getElementById("title-screen"),this.loading=document.getElementById("loading-screen"),this.enterButton=document.getElementById("enter-button"),this.tracker=document.getElementById("quest-tracker"),this.currency=document.getElementById("currency-bar"),this.partyDock=document.getElementById("party-dock"),this.minimap=document.getElementById("minimap"),this.minimapBiome=document.getElementById("minimap-biome"),this.location=document.getElementById("location-label"),this.prompt=document.getElementById("interaction-prompt"),this.promptText=document.getElementById("interaction-text"),this.hint=document.getElementById("hint-line"),this.toastStack=document.getElementById("toast-stack"),this.legendaryBanner=document.getElementById("legendary-banner"),this.legendaryTitle=document.getElementById("legendary-title"),this.legendaryDetail=document.getElementById("legendary-detail"),this.legendaryTimer=document.getElementById("legendary-timer"),this.battleHud=document.getElementById("battle-hud"),this.battleElements={enemyName:document.getElementById("enemy-name"),enemyLevel:document.getElementById("enemy-level"),enemyRarity:document.getElementById("enemy-rarity"),enemyHpFill:document.getElementById("enemy-hp-fill"),enemyHpText:document.getElementById("enemy-hp-text"),enemyHpBar:document.getElementById("enemy-hp-fill")?.parentElement,enemyStatuses:document.getElementById("enemy-statuses"),playerName:document.getElementById("battle-player-name"),playerLevel:document.getElementById("battle-player-level"),playerHpFill:document.getElementById("player-hp-fill"),playerHpText:document.getElementById("player-hp-text"),playerHpBar:document.getElementById("player-hp-fill")?.parentElement,playerStatus:document.getElementById("battle-active-status"),shield:document.getElementById("player-shield"),roundLabel:document.getElementById("battle-round-label"),log:document.getElementById("battle-log-line"),moveBar:document.getElementById("move-bar"),dodge:document.getElementById("battle-dodge"),dodgeCd:document.getElementById("dodge-cd"),capture:document.getElementById("battle-capture"),captureChance:document.getElementById("capture-chance"),potion:document.getElementById("battle-potion"),pot:document.getElementById("battle-pot"),flee:document.getElementById("battle-flee")},this.bindStatic(),this.applySettings(),document.body.classList.add("title-active"),this.refresh(),this.drawMinimap({player:{x:0,z:10},wilds:[],landmarks:[]})}setProfile(e){this.profile=e,this.applySettings(),this.refresh(),this.activeScreen&&this.activeScreen!=="starter"&&this.renderScreen(this.activeScreen)}bindStatic(){document.querySelectorAll("[data-screen]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.screen;this.callbacks.onScreenRequest?this.callbacks.onScreenRequest(t):this.openScreen(t)})}),this.enterButton?.addEventListener("click",()=>{this.enterButton.disabled||this.callbacks.onEnter?.()}),document.getElementById("how-to-button")?.addEventListener("click",()=>this.openHowTo()),this.partyDock.addEventListener("click",e=>{const t=e.target.closest(".party-slot");t&&(t.classList.contains("empty")||(this.callbacks.onScreenRequest?this.callbacks.onScreenRequest("party"):this.openScreen("party")))}),this.root.addEventListener("click",e=>{e.target.closest("[data-close]")&&this.closeModal(),e.target===this.root&&this.activeScreen&&this.activeScreen!=="starter"&&this.closeModal()}),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.activeScreen&&this.activeScreen!=="starter"&&(e.preventDefault(),this.closeModal())}),this.battleElements.moveBar.addEventListener("click",e=>{const t=e.target.closest("[data-move-index]");t&&this.callbacks.onBattleMove?.(Number(t.dataset.moveIndex))}),this.battleElements.dodge.addEventListener("click",()=>this.callbacks.onBattleDodge?.()),this.battleElements.capture.addEventListener("click",()=>this.callbacks.onBattleCapture?.()),this.battleElements.potion.addEventListener("click",()=>this.callbacks.onBattlePotion?.()),this.battleElements.flee.addEventListener("click",()=>this.callbacks.onBattleFlee?.())}applySettings(){const e=this.profile?.settings||{};document.body.classList.toggle("reduce-motion",!!e.reduceMotion),document.body.classList.toggle("high-contrast",!!e.highContrast),document.body.classList.toggle("touch",matchMedia("(pointer: coarse)").matches)}refresh(){this.renderCurrency(),this.renderTracker(),this.renderPartyDock(),this.renderLegendary()}renderCurrency(){const e=this.profile.currency||{};this.currency.innerHTML=`
      <div class="currency-pill"><span class="coin"></span><span>${pi(e.shards)}</span></div>
      <div class="currency-pill stardust"><span class="coin"></span><span>${pi(e.stardust)}</span></div>
    `}renderTracker(){const e=Ys(this.profile);if(!e.length){this.tracker.innerHTML=`
        <div class="eyebrow">ACTIVE BOUNTY</div>
        <h3>No bounty pinned</h3>
        <p>Visit the quest board in Hearthlight Haven, or talk to Guide Wren for a lead.</p>
      `;return}const t=e.find(r=>!r.complete)||e[0],n=t.objectives.find(r=>!r.complete)||t.objectives[0],s=n.complete;this.tracker.innerHTML=`
      <div class="spread"><span class="eyebrow">ACTIVE BOUNTY</span><span class="quest-progress">${t.objectives.filter(r=>r.complete).length}/${t.objectives.length}</span></div>
      <h3>${Me(t.name)}</h3>
      <p>${Me(t.giver)} · ${Me(lt[t.objectives[0]?.biome]?.short||"Haven")}</p>
      <div class="quest-objective ${s?"done":""}">
        <span class="dot"></span><span>${Me(n.label)}</span>
        <span class="quest-progress">${n.progress} / ${n.count}</span>
      </div>
    `}renderPartyDock(){const e=this.profile.activeUid,t=new Set((this.profile.training?.slots||[]).map(s=>s.uid)),n=[];for(let s=0;s<Pi;s++){const r=this.profile.party[s],a=r?At(this.profile,r):null;if(!a){n.push(`<div class="party-slot empty">${s===this.profile.party.length?"+ Slot":"Empty"}</div>`);continue}const o=ss(a),l=Is(a.hp,a.stats.maxHp);n.push(`
        <div class="party-slot ${r===e?"active":""} ${t.has(r)?"training":""}" title="${Me(Lt(a))} · Lv. ${a.level}">
          <div class="slot-hp"><div style="width:${l}%"></div></div>
          <span class="active-dot"></span>
          <div class="portrait">${ci(o)}</div>
          <div class="slot-label"><span>${Me(Lt(a))}</span><span class="slot-level">${a.level}</span></div>
        </div>
      `)}this.partyDock.innerHTML=n.join("")}renderLegendary(){const e=this.legendaryStatus;e&&(this.legendaryBanner.classList.toggle("hidden",!1),this.legendaryBanner.dataset.state=e.state,this.legendaryBanner.classList.toggle("warning",e.state==="warning"),this.legendaryTitle.textContent=e.label,this.legendaryDetail.textContent=e.detail,this.legendaryTimer.textContent=Rs(e.nextIn||0))}setLegendary(e){this.legendaryStatus=e,this.renderLegendary()}setLocation(e){const t=lt[e]||lt.hub;this.location.textContent=t.name,this.minimapBiome.textContent=t.short||t.name,this.legendaryDetail?.setAttribute("data-biome",t.short)}setLoading(e,t){const n=document.getElementById("loading-fill"),s=document.getElementById("loading-text");n&&(n.style.width=`${Math.max(4,Math.min(100,e))}%`),s&&t&&(s.textContent=t)}hideLoading(){this.loading?.classList.add("leaving"),setTimeout(()=>this.loading?.classList.add("hidden"),600)}revealTitle(e=!0){this.hideLoading(),this.enterButton.disabled=!e,this.enterButton.innerHTML=e?"<span>Enter the Wilds</span>":'<span class="button-spinner"></span><span>Preparing the wilds…</span>'}enterWorld(){document.body.classList.remove("title-active"),this.title?.classList.add("leaving"),setTimeout(()=>this.title?.classList.add("hidden"),700)}showTitle(){document.body.classList.add("title-active"),this.title?.classList.remove("hidden","leaving"),this.hideLoading(),this.enterButton.disabled=!1,this.enterButton.innerHTML="<span>Enter the Wilds</span>"}setHint(e){this.hint&&(this.hint.textContent=e||"")}setInteraction(e){if(this.prompt){if(!e){this.prompt.classList.add("hidden");return}this.promptText.textContent=e,this.prompt.classList.remove("hidden")}}setBattleVisible(e){this.battleHud.classList.toggle("hidden",!e),document.body.classList.toggle("battle-active",e);const t=document.getElementById("mobile-controls");t&&t.classList.toggle("hidden",!matchMedia("(pointer: coarse)").matches);const n=[document.querySelector(".hud-left"),this.partyDock,document.getElementById("minimap-panel"),document.querySelector(".hud-right"),this.prompt,this.hint];for(const s of n)s?.classList.toggle("hidden",e);e||(this.moveButtons=[],this.lastMoveSignature="")}showToast(e,t="",n=""){const s=document.createElement("div");for(s.className=`toast ${t}`,s.innerHTML=`<span class="toast-icon">${n||(t==="success"?"✓":t==="error"?"!":t==="gold"?"✦":"•")}</span><span>${Me(e)}</span>`,this.toastStack.append(s);this.toastStack.children.length>4;)this.toastStack.firstElementChild.remove();setTimeout(()=>{s.classList.add("leaving"),setTimeout(()=>s.remove(),280)},3400)}refreshTrainingLive(e=Date.now()){if(this.activeScreen!=="training"||e-this.lastTrainingAt<1e3)return;this.lastTrainingAt=e;const t=Oc(this.profile,e);for(const{creature:n,preview:s,progress:r}of t){if(!n||!s)continue;const a=this.root.querySelector(`[data-train-card="${n.uid}"]`);if(!a)continue;const o=a.querySelector("[data-train-session]"),l=a.querySelector("[data-train-ready]"),c=a.querySelector("[data-train-bar]"),d=a.querySelector('[data-train-action="collect"]');o&&(o.textContent=`+${s.rate} XP/sec · ${Rs(s.elapsed)} this session`),l&&(l.textContent=`${s.xp} XP ready`),c&&(c.style.width=`${Math.round(r*100)}%`),d&&(d.textContent=`Collect ${s.xp} XP`)}}updateBattle(e){if(!e?.battle)return;const t=e.battle,n=this.battleElements,s=t.enemy,r=t.player,a=Is(s.hp,s.maxHp),o=Is(r.hp,r.maxHp);this.setBattleVisible(!0),n.enemyName.textContent=s.name,n.enemyLevel.textContent=`Lv. ${s.level}`,n.enemyRarity.textContent=$s[s.species.rarity]?.label||"Wild",n.enemyRarity.className=`rarity-chip ${sh[s.species.rarity]||""}`,n.enemyHpFill.style.width=`${a}%`,n.enemyHpText.textContent=`${Math.max(0,Math.round(s.hp))} / ${Math.round(s.maxHp)}`,n.enemyHpBar.classList.toggle("low",a<=28),n.playerName.textContent=r.name,n.playerLevel.textContent=`Lv. ${r.level}`,n.playerHpFill.style.width=`${o}%`,n.playerHpText.textContent=`${Math.max(0,Math.round(r.hp))} / ${Math.round(r.maxHp)}`,n.playerHpBar.classList.toggle("low",o<=28),n.enemyStatuses.innerHTML=this.statusChips(s),n.playerStatus.innerHTML=this.statusChips(r),n.shield.classList.toggle("hidden",!(r.shield>0)),n.shield.textContent=`Shield ${Math.round(r.shield)}`;const l=e.inRange||0;n.roundLabel.textContent=t.over?t.result==="victory"?"Creature calmed":t.result==="captured"?"Capture complete":t.result==="defeat"?"Retreat required":"Encounter ended":`Distance ${l.toFixed(1)}m · ${t.legendary?"Legendary event":"Real-time encounter"}`,n.log.textContent=t.log[t.log.length-1]||"Stay mobile. Dodge telegraphed attacks.",this.updateMoveBar(t,e);const c=e.dodgeRemaining<=0;n.dodge.disabled=!c||t.over,n.dodgeCd.textContent=c?"Ready":`${(e.dodgeRemaining/1e3).toFixed(1)}s`,n.capture.disabled=t.over,n.captureChance.textContent=`${Math.round((e.captureChance||0)*100)}%`,n.potion.disabled=t.over,n.pot.textContent=String(this.profile.inventory.potion||0),n.flee.disabled=t.over}statusChips(e){return Object.keys(e.statuses||{}).filter(t=>!t.startsWith("debuff_")).map(t=>`<span class="status-chip ${t}">${zy[t]||t}</span>`).join("")}updateMoveBar(e,t){const n=e.player.moves.map(s=>s.id).join("-");n!==this.lastMoveSignature&&(this.lastMoveSignature=n,this.battleElements.moveBar.innerHTML=e.player.moves.map((s,r)=>{const a=fi(s.id);return`<button class="move-button" data-move-index="${r}" style="--type-color:${ln[a.type]?.color||"#7fe7d4"}">
          <span class="move-type-dot"></span><span class="move-key">${r+1}</span>
          <strong>${Me(a.name)}</strong><small>${Me(a.type)} · ${a.power>0?`${a.power} pow`:"utility"}</small>
          <span class="cooldown-sweep" style="width:0%"></span><span class="cd-text"></span>
        </button>`}).join(""),this.moveButtons=[...this.battleElements.moveBar.querySelectorAll(".move-button")]),this.moveButtons.forEach((s,r)=>{const a=t.cooldowns[r]||0,o=t.maxCooldowns[r]||1,l=s.querySelector(".cooldown-sweep"),c=s.querySelector(".cd-text");s.disabled=e.over||a>0,s.classList.toggle("cooling",a>0),l&&(l.style.width=a>0?`${Math.min(100,a/o*100)}%`:"0%"),c&&(c.textContent=a>0?`${(a/1e3).toFixed(1)}s`:"")})}openScreen(e){["dex","party","training","quests","inventory","shop","settings"].includes(e)&&(this.activeScreen=e,this.root.classList.remove("hidden"),this.renderScreen(e))}closeModal(){this.activeScreen!=="starter"&&(this.activeScreen=null,this.root.classList.add("hidden"),this.root.innerHTML="")}renderScreen(e){const t={dex:()=>this.renderDex(),party:()=>this.renderParty(),training:()=>this.renderTraining(),quests:()=>this.renderQuests(),inventory:()=>this.renderInventory(),shop:()=>this.renderShop(),settings:()=>this.renderSettings()};this.root.classList.remove("hidden"),this.root.innerHTML=t[e]?.()||"",this.bindScreen(e)}screenShell(e,t,n,s,r=""){return`<div class="modal-card ${e==="AstraDex"?"wide":""}">
      <div class="modal-header">
        <div class="modal-title"><span class="eyebrow">${Me(t)}</span><h2>${Me(e)}</h2><p>${n}</p></div>
        <button class="modal-close" data-close aria-label="Close">×</button>
      </div>
      <div class="modal-body">${s}</div>
      ${r?`<div class="modal-footer">${r}</div>`:""}
    </div>`}renderDex(){const e=new Set(this.profile.dex.seen),t=new Set(this.profile.dex.caught),n=Ri.filter(d=>!(this.dexStatus==="caught"&&!t.has(d.id)||this.dexStatus==="seen"&&!e.has(d.id)||this.dexStatus==="missing"&&(e.has(d.id)||t.has(d.id))||this.dexType!=="all"&&!d.types.includes(this.dexType)));(!this.selectedDexId||!n.some(d=>d.id===this.selectedDexId))&&(this.selectedDexId=n[0]?.id||Ri[0].id);const s=n.map(d=>{const h=e.has(d.id);return`<div class="dex-card ${h?"":"undiscovered"} ${d.id===this.selectedDexId?"selected":""}" data-dex-id="${d.id}">
        <span class="dex-id">${d.id}</span>
        ${t.has(d.id)?'<span class="caught-check">✓</span>':""}
        <div class="portrait">${ci(d)}</div>
        <div class="dex-meta"><strong>${h?Me(d.name):"???"}</strong><span>${h?Me(d.types.join(" / ")):"Unrecorded"}</span></div>
      </div>`}).join(""),r=Mt(this.selectedDexId),a=r&&e.has(r.id),o=r&&t.has(r.id),l=a?this.dexDetail(r,o,e,t):`
      <div class="detail-portrait" style="filter:grayscale(1) brightness(.32)">${r?ci(r):""}</div>
      <h3>???</h3><p class="lore">This species has not been recorded yet. Find it in the wild, or hear about it from a traveller.</p>`,c=`
      <div class="toolbar">
        <div class="tabs" style="margin:0">
          ${["all","seen","caught","missing"].map(d=>`<button class="tab ${this.dexStatus===d?"active":""}" data-dex-status="${d}">${d==="all"?"All 150":d[0].toUpperCase()+d.slice(1)}</button>`).join("")}
        </div>
        <span class="spacer"></span>
        <span class="pill gold">${t.size} caught</span><span class="pill">${e.size} seen</span>
        <select class="field" data-dex-type>
          <option value="all">All types</option>
          ${Object.keys(ln).filter(d=>d!=="None").map(d=>`<option value="${d}" ${this.dexType===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div class="dex-layout">
        <div>
          <div class="dex-grid">${s||'<div class="empty-state">No species match this filter.</div>'}</div>
        </div>
        <div class="dex-detail">${l}</div>
      </div>`;return this.screenShell("AstraDex","ARCHIVE OF THE SCAR","Every confirmed species is recorded here. Seen entries reveal field notes; captured entries unlock full stat and move data.",c)}dexDetail(e,t,n,s){const r=e.learnset.slice(0,t?6:4);return`
      <div class="detail-portrait">${ci(e)}</div>
      <h3>${Me(e.name)}</h3>
      <div class="spread"><div class="type-row">${Go(e.types)} ${rh(e.rarity)}</div><span class="small muted">${e.id}</span></div>
      <p class="lore">${Me(e.lore)}</p>
      <div class="detail-stats">${Hc(e.stats)}</div>
      <div class="detail-section"><h4>Field notes</h4><p>${Me(e.habitat)}<br>${Me(e.behavior)}</p></div>
      <div class="detail-section"><h4>Ability</h4><p><strong style="color:var(--gold-soft)">${Me(e.ability.name)}</strong> — ${Me(e.ability.description||"A signature adaptation recorded by the archive.")}</p></div>
      <div class="detail-section"><h4>${t?"Learned moves":"Field moves"}</h4>
        <div class="move-list">${r.map(a=>{const o=fi(a.moveId);return`<div class="move-row"><span>${Me(o.name)}</span><small>${Me(o.type)} · Lv. ${a.level}</small></div>`}).join("")}</div>
      </div>
      ${e.evolution?`<div class="detail-section"><h4>Evolution</h4><p>Evolves into <strong style="color:var(--gold-soft)">${Me(Mt(e.evolution.to)?.name||"???")}</strong> at level ${e.evolution.level}.</p></div>`:""}
    `}renderParty(){const e=sy(this.profile),t=ry(this.profile),n=fy(this.profile),s=a=>{const o=ss(a);if(!o)return"";const l=a.uid===this.profile.activeUid,c=this.profile.party.includes(a.uid),d=a.assignment==="training",h=Qr(a.level),u=Is(a.hp,a.stats.maxHp);return`<div class="creature-card ${l?"active":""}">
        <div class="cc-top">
          <div class="cc-portrait">${ci(o)}</div>
          <div class="cc-name">
            <strong>${Me(Lt(a))}</strong>
            <span>${Me(o.name)} · Lv. ${a.level} · ${Me(a.nature)}</span>
            ${Vy(a)}
          </div>
        </div>
        <div class="cc-hp">${Gy(a.hp,a.stats.maxHp)}</div>
        <div class="cc-meta"><span>XP ${a.xp} / ${h}</span><span>Power ${py(a)}</span>${d?'<span class="pill teal" style="margin-left:auto">Training</span>':""}${l?'<span class="pill gold" style="margin-left:auto">Active</span>':""}</div>
        <div class="cc-actions">
          ${c&&!l&&!d?`<button class="small-button" data-party-action="active" data-uid="${a.uid}">Set active</button>`:""}
          ${!c&&!d?`<button class="small-button" data-party-action="toParty" data-uid="${a.uid}">To party</button>`:""}
          ${c&&!l?`<button class="small-button" data-party-action="up" data-uid="${a.uid}">↑</button><button class="small-button" data-party-action="down" data-uid="${a.uid}">↓</button>`:""}
          ${c&&!l&&!d?`<button class="small-button training-tag" data-party-action="train" data-uid="${a.uid}">Train</button>`:""}
          ${c&&!l&&!d?`<button class="small-button" data-party-action="toStorage" data-uid="${a.uid}">Storage</button>`:""}
          ${d?`<button class="small-button training-tag" data-party-action="stopTrain" data-uid="${a.uid}">Stop training</button>`:""}
          ${l?"":`<button class="small-button" data-party-action="release" data-uid="${a.uid}" style="color:var(--danger)">Release</button>`}
        </div>
        <div class="cc-meta" style="padding-top:0"><span style="color:${u<=28?"var(--danger)":"var(--muted)"}">${Math.round(u)}% HP</span><span>${Me(o.role)}</span></div>
      </div>`},r=`
      <div class="notice">Your active creature leads encounters. Party members gain experience from battle; storage creatures wait safely at Haven. Training continues while you explore.</div>
      <div class="subhead"><h3>Party · ${e.length} / ${Pi}</h3><span>Click a card action to manage</span></div>
      <div class="party-grid">${e.map(s).join("")}</div>
      <div class="subhead"><h3>Storage · ${n.used} / ${n.limit}</h3><span>${t.length} waiting</span></div>
      <div class="party-grid">${t.length?t.map(s).join(""):'<div class="empty-state">No creatures in storage yet. Captures beyond a full party are sent here automatically.</div>'}</div>
    `;return this.screenShell("Party & Storage","YOUR COMPANIONS","Set a lead, reorder your party, move creatures to storage, or start a training session. Your active creature cannot train.",r)}renderTraining(){const e=Oc(this.profile),t=nh(this.profile),n=this.profile.party.map(l=>At(this.profile,l)).filter(l=>l&&l.uid!==this.profile.activeUid&&l.assignment!=="training"),s=e.map(({creature:l,preview:c,progress:d,nextLevelXp:h})=>{const u=ss(l);return`<div class="treadmill-card" data-train-card="${l.uid}">
        <div class="tm-portrait">${ci(u)}</div>
        <div class="tm-info">
          <strong>${Me(Lt(l))} <span class="small muted">Lv. ${l.level}</span></strong>
          <span data-train-session>+${c?.rate||3} XP/sec · ${Rs(c?.elapsed||0)} this session</span>
          <div class="tm-progress"><div data-train-bar style="width:${Math.round(d*100)}%"></div></div>
          <span class="small muted"><span data-train-ready>${c?.xp||0} XP ready</span> · ${h} XP to next level</span>
        </div>
        <div class="tm-actions">
          <button class="small-button" data-train-action="collect" data-uid="${l.uid}">Collect ${c?.xp||0} XP</button>
          <button class="small-button" data-train-action="remove" data-uid="${l.uid}">Remove</button>
        </div>
      </div>`}).join(""),r=[];for(let l=e.length;l<t;l++){const c=n.map(d=>`<option value="${d.uid}">${Me(Lt(d))} · Lv. ${d.level}</option>`).join("");r.push(`<div class="treadmill-card empty">
        <strong>Open treadmill ${l+1}</strong>
        <span>${n.length?"Assign a party creature to earn XP every second, even offline.":"Your active creature cannot train, and every other party member is already busy."}</span>
        ${n.length?`<div class="spread" style="gap:7px"><select class="field" data-training-select="${l}"><option value="">Choose creature…</option>${c}</select><button class="small-button" data-train-action="assign" data-slot="${l}">Assign</button></div>`:""}
      </div>`)}const a=t<2?`<div class="treadmill-card locked">
      <div class="tm-portrait" style="display:grid;place-items:center;font-size:28px;color:var(--gold)">▤</div>
      <div class="tm-info"><strong>Second treadmill</strong><span>Train two creatures at once. Permanent account upgrade.</span><span class="small muted">Cost: 320 Shards + 2 Stardust</span></div>
      <div class="tm-actions"><button class="small-button" data-train-action="unlock">Unlock slot</button></div>
    </div>`:"",o=`
      <div class="notice">Training is a set-and-forget treadmill. Assigned creatures accrue XP every second, including while the game is closed, up to an 8-hour offline cap. They cannot battle or be your active lead.</div>
      <div class="spread" style="margin:16px 0 10px"><h3 style="font-family:var(--font-display)">Treadmill Yard · ${e.length}/${t} active</h3><button class="small-button" data-train-action="collectAll">Collect all</button></div>
      <div class="training-layout">${s}${r.join("")}${a}</div>
      <div class="divider"></div>
      <div class="spread"><div><strong>Total training time</strong><br><span class="small muted">${Rs(this.profile.flags.totalTrainSeconds||0)} recorded</span></div><div class="pill violet">${n.length} eligible</div></div>
    `;return this.screenShell("Training Yard","PATIENCE IS POWER","Leave creatures on a treadmill while you explore. XP keeps accruing offline, up to eight hours per claim.",o)}renderQuests(){const e=Ey(this.profile),n=(this.questTab==="active"?e.active:this.questTab==="available"?e.available:e.completed).map(r=>this.questTab==="available"?`<div class="quest-card">
          <span class="quest-giver">${Me(r.giver)}</span><h3>${Me(r.name)}</h3><p>${Me(r.description)}</p>
          <div class="reward-row">${r.rewards.shards?`<span class="reward-pill gold">${r.rewards.shards} Shards</span>`:""}${r.rewards.stardust?`<span class="reward-pill violet">${r.rewards.stardust} Stardust</span>`:""}${Object.entries(r.rewards.items||{}).map(([a,o])=>`<span class="reward-pill">${o}× ${Me(gn[a]?.name||a)}</span>`).join("")}</div>
          <div class="quest-actions"><button class="small-button" data-quest-action="start" data-quest-id="${r.id}">Accept bounty</button></div>
        </div>`:this.questTab==="completed"?`<div class="quest-card complete"><span class="quest-giver">${Me(r.giver)}</span><h3>${Me(r.name)}</h3><p>${Me(r.description)}</p><div class="reward-row"><span class="reward-pill gold">Completed</span></div></div>`:`<div class="quest-card ${r.complete?"complete":""}">
        <span class="quest-giver">${Me(r.giver)}</span><h3>${Me(r.name)}</h3><p>${Me(r.description)}</p>
        <div class="quest-objectives">${r.objectives.map(Wy).join("")}</div>
        <div class="reward-row">${r.rewards.shards?`<span class="reward-pill gold">${r.rewards.shards} Shards</span>`:""}${r.rewards.stardust?`<span class="reward-pill violet">${r.rewards.stardust} Stardust</span>`:""}${Object.entries(r.rewards.items||{}).map(([a,o])=>`<span class="reward-pill">${o}× ${Me(gn[a]?.name||a)}</span>`).join("")}</div>
        <div class="quest-actions">${r.complete?`<button class="small-button" data-quest-action="claim" data-quest-id="${r.id}" style="border-color:rgba(255,209,102,.5);color:var(--gold)">Claim rewards</button>`:'<span class="pill">In progress</span>'}</div>
      </div>`).join(""),s=`
      <div class="tabs">
        <button class="tab ${this.questTab==="active"?"active":""}" data-quest-tab="active">Active · ${e.active.length}</button>
        <button class="tab ${this.questTab==="available"?"active":""}" data-quest-tab="available">Available · ${e.available.length}</button>
        <button class="tab ${this.questTab==="completed"?"active":""}" data-quest-tab="completed">Completed · ${e.completed.length}</button>
      </div>
      <div class="quest-grid">${n||'<div class="empty-state">Nothing here yet. Explore, talk to residents, and return to the board.</div>'}</div>
      <div class="divider"></div>
      <div class="notice">Bounties are optional. Active bounties appear in your HUD tracker; rewards can be claimed here once every objective is complete.</div>
    `;return this.screenShell("Bounty Board","WORK WORTH DOING","Haven residents pay in Shards and Stardust for help across the five biomes.",s)}renderShop(){const n=`
      <div class="notice">Ember & Elm stocks field supplies. Every price is earned in-game; Astra Creatures has no real-money currency.</div>
      <div class="shop-grid" style="margin-top:14px">${xy(this.profile).map(({item:s,owned:r,affordable:a,lockedReason:o})=>{const l=s.id==="training_slot";return`<div class="shop-card">
        <div class="shop-icon">${Gc(s)}</div>
        <h3>${Me(s.name)}</h3>
        <p>${Me(s.description)}</p>
        <div class="spread"><span class="price">${pi(s.price)} Shards${s.stardust?` + ${s.stardust} Stardust`:""}</span>
        <button class="small-button" data-shop-buy="${s.id}" ${r&&l?"disabled":""}>${r&&l?"Unlocked":"Buy"}</button></div>
        <span class="owned">${l?r?"Permanent upgrade owned":"One-time unlock":`Owned: ${r}`}${!a&&!(r&&l)?" · Not enough currency":""}${o?` · ${Me(o)}`:""}</span>
      </div>`}).join("")}</div>
      <div class="divider"></div>
      <div class="spread"><span class="small muted">Haggling is not supported. The shopkeeper has heard every offer.</span><span class="pill gold">${pi(this.profile.currency.shards)} Shards</span></div>
    `;return this.screenShell("Ember & Elm","FIELD SUPPLIES","Discs, salves, treats, lures, and permanent conveniences. Purchases are saved immediately.",n)}renderInventory(){const e=fn(this.profile),n=["disc_basic","disc_fine","potion","potion_great","treat","lure"].map(r=>{const a=gn[r],o=this.profile.inventory[r]||0,l=["potion","potion_great","treat","lure"].includes(r);return`<div class="inv-card">
        <div class="inv-icon" style="color:${a.color}">${Gc(a)}</div>
        <div style="min-width:0"><strong>${Me(a.name)}</strong><span>${Me(a.description)}</span></div>
        <span class="inv-count">${o}</span>
        ${l?`<button class="small-button" data-use-item="${r}" ${o<=0?"disabled":""}>Use</button>`:""}
      </div>`}).join(""),s=`
      <div class="notice">${e?`Using a salve or treat targets your active creature: <strong style="color:var(--gold-soft)">${Me(Lt(e))}</strong> (Lv. ${e.level}, ${Math.round(e.hp)}/${e.stats.maxHp} HP).`:"Choose a starter to use field items."}</div>
      <div class="inv-grid" style="margin-top:14px">${n}</div>
      <div class="divider"></div>
      <div class="spread"><span class="small muted">Discs are consumed automatically when you attempt a capture.</span><button class="small-button" data-screen-open="shop">Visit shop</button></div>
    `;return this.screenShell("Field Bag","PACK LIGHT","Everything you carry into the wilds. Salves and treats apply to the active creature.",s)}renderSettings(){const e=this.profile.settings,t=this.profile.stats,n=`
      <div class="settings-grid">
        <div class="settings-section">
          <h3>Audio & camera</h3>
          <div class="setting-row"><div>Music volume<small>Ambient score placeholder</small></div><input type="range" min="0" max="1" step="0.05" value="${e.music}" data-setting="music"></div>
          <div class="setting-row"><div>Effects volume<small>Capture and battle cues</small></div><input type="range" min="0" max="1" step="0.05" value="${e.sfx}" data-setting="sfx"></div>
          <div class="setting-row"><div>Look sensitivity<small>Drag or right-stick speed</small></div><input type="range" min="0.4" max="1.8" step="0.05" value="${e.sensitivity}" data-setting="sensitivity"></div>
          <div class="setting-row"><div>Invert vertical look</div><button class="toggle ${e.invertY?"on":""}" data-toggle="invertY"></button></div>
        </div>
        <div class="settings-section">
          <h3>Accessibility</h3>
          <div class="setting-row"><div>Reduce motion<small>Disables ambient animation and transitions</small></div><button class="toggle ${e.reduceMotion?"on":""}" data-toggle="reduceMotion"></button></div>
          <div class="setting-row"><div>High contrast<small>Stronger borders and text contrast</small></div><button class="toggle ${e.highContrast?"on":""}" data-toggle="highContrast"></button></div>
          <div class="setting-row"><div>Context hints<small>Show control reminders while exploring</small></div><button class="toggle ${e.hints?"on":""}" data-toggle="hints"></button></div>
          <div class="setting-row"><div>Render quality<small>Low reduces particles and pixel density</small></div><select class="field" data-setting-select="quality"><option value="high" ${e.quality==="high"?"selected":""}>High</option><option value="low" ${e.quality==="low"?"selected":""}>Low</option></select></div>
        </div>
        <div class="settings-section">
          <h3>Expedition record</h3>
          <div class="setting-row"><span>Battles</span><strong>${t.battles}</strong></div>
          <div class="setting-row"><span>Wins</span><strong>${t.wins}</strong></div>
          <div class="setting-row"><span>Captures</span><strong>${t.captures}</strong></div>
          <div class="setting-row"><span>Species recorded</span><strong>${this.profile.dex.caught.length} / 150</strong></div>
          <div class="setting-row"><span>Play time</span><strong>${Rs((t.playSeconds||0)+Math.max(0,(Date.now()-(this.profile.playStartedAt||Date.now()))/1e3))}</strong></div>
          <div class="setting-row"><span>Save</span><span class="pill teal">Autosave on</span></div>
        </div>
        <div class="settings-section danger-zone">
          <h3>Danger zone</h3>
          <p class="small muted" style="line-height:1.5;margin-bottom:10px">Reset deletes your local expedition: creatures, party, inventory, quests, and legendary history. This cannot be undone.</p>
          <button class="danger-button" data-reset-save>Reset expedition</button>
        </div>
      </div>
      <div class="divider"></div>
      <p class="small muted">Keyboard: WASD move · Shift sprint · Space jump · E interact · C Dex · P party · T training · J quests · I bag · O settings · Esc close. Battle: 1–4 moves · Q dodge · F capture · R salve.</p>
    `;return this.screenShell("Settings","MAKE IT YOURS","Audio, accessibility, quality, and local save controls. Changes apply immediately and persist.",n)}openHowTo(){this.activeScreen="howto",this.root.classList.remove("hidden"),this.root.innerHTML=`<div class="modal-card narrow">
      <div class="modal-header"><div class="modal-title"><span class="eyebrow">FIELD MANUAL</span><h2>How to survive the wilds</h2><p>You are a field researcher, not an army. Observe, weaken, capture, and train.</p></div><button class="modal-close" data-close>×</button></div>
      <div class="modal-body">
        <div class="detail-section" style="border-top:none;margin-top:0;padding-top:0"><h4>Explore</h4><p>WASD moves, Shift sprints, Space jumps, and drag the world to look around. Follow the paths from Hearthlight Haven into five biomes. Wild creatures wander visibly; press E near one to begin a real-time encounter.</p></div>
        <div class="detail-section"><h4>Battle</h4><p>You control the trainer and your active creature auto-follows. Move with WASD while casting moves with 1–4. Enemy attacks are telegraphed as rings; step out or press Q to dodge at the right moment. Range matters: melee moves need proximity, projectiles do not.</p></div>
        <div class="detail-section"><h4>Capture</h4><p>Weaken a creature, then press F to throw a Field Disc. Lower HP, status conditions, better discs, and level advantage all improve the chance. A failed capture gives the creature a brief opening — not a free win.</p></div>
        <div class="detail-section"><h4>Grow</h4><p>Battles grant XP and Shards. Evolutions happen automatically at their level thresholds. The Training Yard accrues XP offline for creatures not in your active slot. Spend Shards at Ember & Elm; Stardust comes from bounties and buys permanent conveniences.</p></div>
        <div class="detail-section"><h4>The Scar</h4><p>Every so often the Astral Scar announces a legendary event. A warning phase gives you time to reach the biome; the active window lasts four minutes. Legendaries are difficult captures and can flee. One capture attempt per event.</p></div>
        <div class="notice warn">Progress autosaves to this browser. Use Settings → Reset expedition to start over.</div>
      </div>
      <div class="modal-footer"><button class="primary-button" data-close>Back to the wilds</button></div>
    </div>`,this.bindScreen("howto")}openStarterSelection(e){this.activeScreen="starter",this.selectedStarter=null,this.starterCallback=e;const t=zo.map(n=>Mt(n)).filter(Boolean);this.root.classList.remove("hidden"),this.root.innerHTML=`<div class="modal-card starter-card">
      <div class="starter-body">
        <div class="starter-intro">
          <span class="eyebrow" style="color:var(--gold)">FIELD RESEARCH BEGINS</span>
          <h2>Choose your first companion</h2>
          <p>Guide Wren has three young creatures ready for a field assignment. Each one grows into a different role. You can find the others later, but this choice shapes your first hours.</p>
        </div>
        <div class="starter-grid">
          ${t.map(n=>`
            <div class="starter-card-item" data-starter-id="${n.id}" style="--type-color:${ln[n.types[0]]?.color||"#7fe7d4"}">
              <div class="starter-halo"></div>
              <div class="starter-portrait">${ci(n)}</div>
              <h3>${Me(n.name)}</h3>
              <div class="starter-role">${Me(n.role)} · ${Me(n.rarity)}</div>
              <div class="type-row">${Go(n.types)}</div>
              <p class="starter-desc">${Me(n.lore)}</p>
              <div class="starter-stats">${Hc(n.stats,!0)}</div>
              <div class="starter-ability"><strong>${Me(n.ability.name)}</strong>${Me(n.ability.description||"A signature adaptation.")}</div>
            </div>`).join("")}
        </div>
        <div class="starter-actions">
          <button class="primary-button large" data-confirm-starter disabled>Begin expedition</button>
          <button class="ghost-button" data-how-to>Field manual</button>
        </div>
        <p class="starter-warning">Your starter is saved immediately. All 150 species are original to Astra Creatures.</p>
      </div>
    </div>`,this.root.querySelectorAll("[data-starter-id]").forEach(n=>{n.addEventListener("click",()=>{this.selectedStarter=n.dataset.starterId,this.root.querySelectorAll("[data-starter-id]").forEach(r=>r.classList.toggle("selected",r===n));const s=this.root.querySelector("[data-confirm-starter]");s&&(s.disabled=!1)})}),this.root.querySelector("[data-confirm-starter]")?.addEventListener("click",()=>{this.selectedStarter&&this.starterCallback?.(this.selectedStarter)}),this.root.querySelector("[data-how-to]")?.addEventListener("click",()=>this.openHowTo())}bindScreen(e){this.root.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>this.closeModal())),e==="dex"&&(this.root.querySelectorAll("[data-dex-id]").forEach(t=>t.addEventListener("click",()=>{this.selectedDexId=t.dataset.dexId,this.renderScreen("dex")})),this.root.querySelectorAll("[data-dex-status]").forEach(t=>t.addEventListener("click",()=>{this.dexStatus=t.dataset.dexStatus,this.renderScreen("dex")})),this.root.querySelector("[data-dex-type]")?.addEventListener("change",t=>{this.dexType=t.target.value,this.renderScreen("dex")})),e==="party"&&this.root.querySelectorAll("[data-party-action]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.uid,s=t.dataset.partyAction,r=this.callbacks;if(s==="active"&&r.onSetActive?.(n),s==="toParty"&&r.onMoveToParty?.(n),s==="toStorage"&&r.onMoveToStorage?.(n),s==="train"&&r.onAssignTraining?.(n),s==="stopTrain"&&r.onRemoveTraining?.(n),s==="up"&&r.onSwapParty?.(n,-1),s==="down"&&r.onSwapParty?.(n,1),s==="release"){const a=At(this.profile,n);this.confirm({title:`Release ${Lt(a)}?`,message:"This removes the creature and its training progress from your expedition permanently.",confirmLabel:"Release creature",danger:!0}).then(o=>{o&&r.onRelease?.(n)})}})),e==="training"&&this.root.querySelectorAll("[data-train-action]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.trainAction,s=t.dataset.uid,r=this.callbacks;if(n==="assign"){const a=this.root.querySelector(`[data-training-select="${t.dataset.slot}"]`);if(!a?.value)return this.showToast("Choose a creature first.","error");r.onAssignTraining?.(a.value)}n==="collect"&&r.onCollectTraining?.(s),n==="collectAll"&&r.onCollectTraining?.(),n==="remove"&&r.onRemoveTraining?.(s),n==="unlock"&&r.onUnlockTraining?.()})),e==="quests"&&(this.root.querySelectorAll("[data-quest-tab]").forEach(t=>t.addEventListener("click",()=>{this.questTab=t.dataset.questTab,this.renderScreen("quests")})),this.root.querySelectorAll("[data-quest-action]").forEach(t=>t.addEventListener("click",()=>{t.dataset.questAction==="start"&&this.callbacks.onStartQuest?.(t.dataset.questId),t.dataset.questAction==="claim"&&this.callbacks.onClaimQuest?.(t.dataset.questId)}))),e==="inventory"&&(this.root.querySelectorAll("[data-use-item]").forEach(t=>t.addEventListener("click",()=>{this.callbacks.onUseItem?.(t.dataset.useItem)})),this.root.querySelector("[data-screen-open]")?.addEventListener("click",()=>this.openScreen(this.root.querySelector("[data-screen-open]").dataset.screenOpen))),e==="shop"&&this.root.querySelectorAll("[data-shop-buy]").forEach(t=>t.addEventListener("click",()=>{this.callbacks.onBuyItem?.(t.dataset.shopBuy)})),e==="settings"&&(this.root.querySelectorAll("[data-setting]").forEach(t=>{t.addEventListener("input",()=>{const n=t.dataset.setting;this.profile.settings[n]=Number(t.value),this.callbacks.onSettingChange?.(n,Number(t.value))})}),this.root.querySelectorAll("[data-setting-select]").forEach(t=>{t.addEventListener("change",()=>{const n=t.dataset.settingSelect;this.profile.settings[n]=t.value,this.callbacks.onSettingChange?.(n,t.value)})}),this.root.querySelectorAll("[data-toggle]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.toggle,s=!this.profile.settings[n];this.profile.settings[n]=s,t.classList.toggle("on",s),this.applySettings(),this.callbacks.onSettingChange?.(n,s),this.renderScreen("settings")})),this.root.querySelector("[data-reset-save]")?.addEventListener("click",()=>{this.confirm({title:"Reset the expedition?",message:"All creatures, progress, inventory, bounties, and legendary history will be erased. This cannot be undone.",confirmLabel:"Reset everything",danger:!0}).then(t=>{t&&this.callbacks.onResetSave?.()})}))}drawMinimap(e){const t=performance.now();if(t-this.lastMinimapAt<130)return;this.lastMinimapAt=t;const n=this.minimap,s=n?.getContext("2d");if(!s)return;const r=n.width,a=n.height,o=r/2,l=a/2,c=r/280;s.clearRect(0,0,r,a),s.fillStyle="#0a1120",s.fillRect(0,0,r,a);const d=(u,f)=>({x:o+u*c,y:l+f*c});for(const u of Ci){const f=lt[u],g=d(f.center[0],f.center[1]),_=f.radius*c,m=s.createRadialGradient(g.x,g.y,2,g.x,g.y,_);m.addColorStop(0,`${f.color}3f`),m.addColorStop(1,`${f.color}05`),s.fillStyle=m,s.beginPath(),s.arc(g.x,g.y,_,0,Math.PI*2),s.fill(),s.strokeStyle=`${f.color}40`,s.lineWidth=1,s.stroke(),s.fillStyle=`${f.color}b8`,s.font='bold 7px "Trebuchet MS", sans-serif',s.textAlign="center",s.fillText(f.short.toUpperCase(),g.x,g.y+2)}s.strokeStyle="rgba(255,209,102,0.18)",s.lineWidth=2;for(const u of Ci){const f=lt[u],g=d(0,0),_=d(f.center[0],f.center[1]);s.beginPath(),s.moveTo(g.x,g.y),s.lineTo(_.x,_.y),s.stroke()}const h=d(0,0);s.fillStyle="rgba(255,209,102,0.16)",s.beginPath(),s.arc(h.x,h.y,22*c,0,Math.PI*2),s.fill(),s.fillStyle="#ffd166",s.beginPath(),s.arc(h.x,h.y,2.2,0,Math.PI*2),s.fill();for(const u of e.landmarks||[]){const f=Array.isArray(u.position)?u.position:[u.x,u.z],g=d(f[0],f[1]);s.fillStyle="rgba(192,139,255,0.75)",s.fillRect(g.x-1.5,g.y-1.5,3,3)}for(const u of e.wilds||[]){if(!u.visible)continue;const f=d(u.x,u.z),g=u.legendary?"#ffd166":$s[u.rarity]?.color||"#9fb0c9";s.fillStyle=g,s.beginPath(),s.arc(f.x,f.y,u.legendary?2.8:1.6,0,Math.PI*2),s.fill(),u.legendary&&(s.strokeStyle="rgba(255,209,102,0.45)",s.beginPath(),s.arc(f.x,f.y,5.5+Math.sin(t/300)*1.5,0,Math.PI*2),s.stroke())}if(e.player){const u=d(e.player.x,e.player.z);s.save(),s.translate(u.x,u.y);const f=e.player.facing||0;s.rotate(f+Math.PI),s.fillStyle="#ffffff",s.shadowColor="#7fe7d4",s.shadowBlur=8,s.beginPath(),s.moveTo(0,-6),s.lineTo(4.2,4.5),s.lineTo(0,2.6),s.lineTo(-4.2,4.5),s.closePath(),s.fill(),s.restore()}s.strokeStyle="rgba(151,196,255,0.16)",s.lineWidth=1,s.strokeRect(.5,.5,r-1,a-1)}showBattleResult({result:e,battle:t,rewards:n,captured:s,onContinue:r,onOpenParty:a}){const o={victory:"Creature calmed",captured:"Capture successful",defeat:"Your lead needs rest",fled:"You slipped away"},l={victory:"The encounter ends without a capture. The creature retreats into the biome.",captured:`${s?Lt(s):"The creature"} is now part of your expedition.`,defeat:"Your active creature fainted. You return to Haven with the party patched up, but lose some Shards.",fled:"You leave the encounter. The wild creature remains in its territory."},c=n?.item?`<span class="reward-pill">${Me(gn[n.item]?.name||n.item)}</span>`:"",d=`<div style="text-align:center;padding:6px 0 4px">
      ${s&&ss(s)?`<div style="width:180px;height:180px;margin:0 auto">${ci(ss(s))}</div>`:""}
      <span class="eyebrow" style="color:var(--gold)">ENCOUNTER RESULT</span>
      <h2 style="font-family:var(--font-display);font-size:28px;margin:7px 0">${Me(o[e]||"Encounter complete")}</h2>
      <p class="small muted" style="max-width:430px;margin:0 auto;line-height:1.55">${Me(l[e]||"")}</p>
      <div class="reward-row" style="justify-content:center;margin-top:16px">
        ${n?.xp?`<span class="reward-pill violet">+${n.xp} XP</span>`:""}
        ${n?.shards?`<span class="reward-pill gold">+${n.shards} Shards</span>`:""}
        ${c}
        ${s?'<span class="reward-pill teal">Added to collection</span>':""}
      </div>
      ${t?.enemy?`<p class="small muted" style="margin-top:13px">${Me(t.enemy.name)} · Lv. ${t.enemy.level} · ${Me(lt[t.enemy.species.biome]?.name||"Wilds")}</p>`:""}
    </div>`;this.activeScreen="result",this.root.classList.remove("hidden"),this.root.innerHTML=`<div class="modal-card narrow">
      <div class="modal-body">${d}</div>
      <div class="modal-footer" style="justify-content:center">
        ${a?'<button class="ghost-button" data-result-party>View party</button>':""}
        <button class="primary-button" data-close>Continue exploring</button>
      </div>
    </div>`,this.root.querySelector("[data-close]")?.addEventListener("click",()=>{this.closeModal(),r?.()}),this.root.querySelector("[data-result-party]")?.addEventListener("click",()=>{this.closeModal(),r?.(),a()})}confirm({title:e,message:t,confirmLabel:n="Confirm",danger:s=!1}){return new Promise(r=>{const a=document.createElement("div");a.style.cssText="position:absolute;inset:0;z-index:45;display:flex;align-items:center;justify-content:center;background:rgba(3,6,13,.7);backdrop-filter:blur(7px);padding:20px",a.innerHTML=`<div class="modal-card narrow" style="animation:modalIn .2s ease both">
        <div class="modal-header"><div class="modal-title"><span class="eyebrow" style="color:${s?"var(--danger)":"var(--gold)"}">PLEASE CONFIRM</span><h2>${Me(e)}</h2><p>${Me(t)}</p></div></div>
        <div class="modal-footer"><button class="ghost-button" data-cancel>Cancel</button><button class="${s?"danger-button":"primary-button"}" data-confirm>${Me(n)}</button></div>
      </div>`,document.getElementById("game-shell").append(a);const o=l=>{a.remove(),r(l)};a.querySelector("[data-cancel]").addEventListener("click",()=>o(!1)),a.querySelector("[data-confirm]").addEventListener("click",()=>o(!0)),a.addEventListener("click",l=>{l.target===a&&o(!1)})})}}const Vc=15,ah=240,Wc=360*1e3,Xy=600*1e3,$c={astral:[[-54,78],[-44,88],[-64,70]],tide:[[-80,-12],[-90,-24],[-68,-4]],frost:[[48,80],[40,68],[60,90]],ember:[[80,-16],[90,-26],[68,-6]],verdant:[[0,-72],[-12,-82],[14,-62]]};function qy(i,e=Date.now()){const t=i.legendary;if(!t)return i.legendary={nextEventAt:e+9e4,active:null,history:[]},{changed:!1,event:null};if(t.active){const n=t.active;return n.phase==="warning"&&e>=n.startsAt?(n.phase="active",t.active=n,{changed:!0,event:n,spawned:!0}):n.phase==="active"&&e>=n.endsAt?(t.history.push({...n,outcome:n.captured?"captured":"expired"}),t.history=t.history.slice(-20),t.active=null,t.nextEventAt=e+oh(e),{changed:!0,event:null,expired:n}):{changed:!1,event:n}}if(e>=(t.nextEventAt||0)){const n=Yy(i,e);return t.active=n,{changed:!0,event:n,warning:!0}}return{changed:!1,event:null}}function oh(i){const e=ui(`legendary-${i}`);return Wc+e()*(Xy-Wc)}function Yy(i,e=Date.now()){const t=Cc.filter(d=>!i.legendary.history.slice(-6).some(h=>h.legendaryId===d)),n=t.length?t:Cc,s=n[Math.floor(ui(`legendary-pick-${e}-${i.stats.legendariesSeen||0}`)()*n.length)],a=Mt(s)?.biome||"astral",o=$c[a]||$c.astral,l=o[Math.floor(ui(`legendary-spawn-${e}`)()*o.length)],c=Math.max(24,(lt[a]?.levelRange?.[1]||25)+2);return{id:`legend-${e}`,legendaryId:s,biome:a,phase:"warning",spawnedAt:e,startsAt:e+Vc*1e3,endsAt:e+(Vc+ah)*1e3,spawn:{x:l[0],z:l[1]},level:c,captured:!1}}function Zy(i,e=Date.now()){const t=i.legendary?.active;return t?t.phase==="warning"?Math.max(0,t.startsAt-e)/1e3:Math.max(0,t.endsAt-e)/1e3:Math.max(0,(i.legendary?.nextEventAt||e)-e)/1e3}function Rr(i,e=Date.now()){const t=i.legendary?.active;if(!t)return{state:"idle",nextIn:Zy(i,e),label:"The Scar is quiet",detail:"Legendary events are server-simulated and announced before they begin."};const n=Mt(t.legendaryId);return t.phase==="warning"?{state:"warning",event:t,species:n,nextIn:Math.max(0,t.startsAt-e)/1e3,label:`${n?.name||"A legendary creature"} is approaching`,detail:`A rift is opening in ${lt[t.biome]?.name||"the wilds"}. Arrive within ${ah/60} minutes.`}:{state:"active",event:t,species:n,nextIn:Math.max(0,t.endsAt-e)/1e3,label:`${n?.name||"A legendary creature"} is present`,detail:`Seen in ${lt[t.biome]?.name||"the wilds"}. One capture per event.`}}function Ky(i,e,t=Date.now()){const n=i.legendary?.active;return!n||n.id!==e.id||n.captured?{ok:!1,reason:"That legendary event is no longer available."}:(n.captured=!0,n.capturedAt=t,i.legendary.history.push({...n,outcome:"captured"}),i.legendary.history=i.legendary.history.slice(-20),i.legendary.active=null,i.legendary.nextEventAt=t+oh(t),{ok:!0})}function Jy(i){i.stats.legendariesSeen=(i.stats.legendariesSeen||0)+1}const Vo=[0,0,14],Qy=2e4,jy=13;function Xc(){return new Promise(i=>requestAnimationFrame(()=>i()))}class e_{constructor({engine:e,profile:t,world:n,player:s,wilds:r}){this.engine=e,this.profile=t,this.world=n,this.player=s,this.wilds=r,this.input=new Jg(e.canvas),this.mode="title",this.battle=null,this.battleScene=null,this.pendingWild=null,this.focus=null,this.legendaryEvent=null,this.hazardCooldownAt=0,this.lastBiomeCheck=0,this.lastSeenScan=0,this.lastPromptAt=0,this.lastLegendaryUi=0,this.lastHint="",this.lastPrompt=null,this.lastBiome=null,this.autosaveAt=performance.now(),this.dirty=!1,this.time=0,this.sessionStartedAt=Date.now(),this.companion=null,this.companionSpecies=null,this.profile.settings=this.profile.settings||{},this.input.sensitivity=this.profile.settings.sensitivity||1,this.input.invertY=!!this.profile.settings.invertY,this.input.setEnabled(!1),this.ui=new $y(t,this.makeCallbacks()),this.bindInput(),this.bindTouch(),this.syncCollectionDex(),this.player.cameraYaw=0,this.player.facing=Math.PI,this.player.setCameraYaw(0),this.player.applyCamera(this.engine.camera),this.ui.setLocation("hub"),this.ui.setHint("Drag to look · WASD to move · Shift to sprint · E to interact"),this.ui.setLegendary(Rr(t)),this.lastBiome="hub",this.syncCompanion()}makeCallbacks(){return{onEnter:()=>this.enter(),onChooseStarter:e=>this.chooseStarter(e),onScreenRequest:e=>this.openScreen(e),onSetActive:e=>this.handleSetActive(e),onSwapParty:(e,t)=>this.handleSwapParty(e,t),onMoveToParty:e=>this.handleMoveToParty(e),onMoveToStorage:e=>this.handleMoveToStorage(e),onRelease:e=>this.handleRelease(e),onAssignTraining:e=>this.handleAssignTraining(e),onRemoveTraining:e=>this.handleRemoveTraining(e),onCollectTraining:e=>this.handleCollectTraining(e),onUnlockTraining:()=>this.handleUnlockTraining(),onStartQuest:e=>this.handleStartQuest(e),onClaimQuest:e=>this.handleClaimQuest(e),onBuyItem:e=>this.handleBuyItem(e),onUseItem:e=>this.handleUseItem(e),onSettingChange:(e,t)=>this.handleSettingChange(e,t),onResetSave:()=>this.resetSave(),onBattleMove:e=>this.handleBattleMove(e),onBattleDodge:()=>this.handleBattleDodge(),onBattleCapture:()=>this.handleBattleCapture(),onBattlePotion:()=>this.handleBattlePotion(),onBattleFlee:()=>this.handleBattleFlee()}}bindInput(){const e={KeyC:"dex",KeyP:"party",KeyT:"training",KeyJ:"quests",KeyI:"inventory",KeyO:"settings"};this.input.onAction("KeyE",()=>this.interact());for(const[n,s]of Object.entries(e))this.input.onAction(n,()=>this.openScreen(s));const t=["Digit1","Digit2","Digit3","Digit4"];for(const[n,s]of t.entries())this.input.onAction(s,()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleMove(n)}),this.input.onAction(`Numpad${n+1}`,()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleMove(n)});this.input.onAction("KeyF",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleCapture()}),this.input.onAction("KeyR",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattlePotion()}),this.input.onAction("Escape",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleFlee()})}bindTouch(){const e=document.getElementById("joystick"),t=document.getElementById("joystick-knob"),n=document.getElementById("mobile-interact"),s=document.getElementById("mobile-sprint"),r=matchMedia("(pointer: coarse)").matches;if(document.getElementById("mobile-controls")?.classList.toggle("hidden",!r),e&&t){let a=null;const o=(c,d)=>{const u=Math.hypot(c,d),f=u>42?42/u:1,g=c*f,_=d*f;t.style.transform=`translate(${g}px, ${_}px)`,this.input.setTouchMove(g/42,-_/42)};e.addEventListener("pointerdown",c=>{if(this.ui.activeScreen||this.mode!=="explore"&&this.mode!=="battle")return;a=c.pointerId,e.setPointerCapture?.(c.pointerId);const d=e.getBoundingClientRect();o(c.clientX-d.left-d.width/2,c.clientY-d.top-d.height/2)}),e.addEventListener("pointermove",c=>{if(c.pointerId!==a)return;const d=e.getBoundingClientRect();o(c.clientX-d.left-d.width/2,c.clientY-d.top-d.height/2)});const l=()=>{a=null,t.style.transform="translate(0px, 0px)",this.input.setTouchMove(0,0)};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}if(n?.addEventListener("pointerdown",()=>this.interact()),s){s.addEventListener("pointerdown",o=>{o.preventDefault(),this.input.keys.add("ShiftLeft")});const a=()=>this.input.keys.delete("ShiftLeft");s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}}start(){this.ui.revealTitle(!0),this.engine.start((e,t)=>this.tick(e,t))}enter(){if(this.mode==="starter"||this.mode==="explore"||this.mode==="battle")return;this.ui.enterWorld();const e=fn(this.profile);if(!this.profile.starterChosen||!e){this.mode="starter",this.ui.openStarterSelection(t=>this.chooseStarter(t));return}this.beginExplore()}chooseStarter(e){if(!zo.includes(e))return;if(fn(this.profile)){this.finishStarter();return}const n=$a(e,5,{provenance:"starter"});Ic(this.profile,n),this.profile.starterChosen=!0,this.profile.starterId=e,this.profile.activeUid=n.uid,this.profile.party=[n.uid],n.assignment="party",this.markDex(e,!0),Bc(this.profile),ts(this.profile,{type:"starter"}),this.ui.showToast(`${Lt(n)} joined your expedition.`,"gold","✦"),this.finishStarter(),this.save(!0),this.ui.refresh(),this.syncCompanion(),this.beginExplore()}finishStarter(){this.ui.activeScreen=null,this.ui.root.classList.add("hidden"),this.ui.root.innerHTML=""}beginExplore(){this.mode="explore",this.input.setEnabled(!0),Bc(this.profile),this.syncCollectionDex(),this.syncCompanion(),this.ui.refresh(),this.ui.setBattleVisible(!1),this.ui.setLocation("hub"),this.ui.showToast("Hearthlight Haven is safe. Follow the paths into the wilds.","","✦"),this.ui.setLegendary(Rr(this.profile)),this.save()}syncCollectionDex(){for(const e of this.profile.creatures)this.markDex(e.speciesId,!0,!1)}syncCompanion(){const e=fn(this.profile);if(!e){this.companion&&(this.companion.visible=!1);return}if(this.companionSpecies!==e.speciesId){this.companion&&this.companion.parent?.remove(this.companion);const t=Mt(e.speciesId);this.companion=Zr(t,{scale:.42}),this.companion.position.copy(this.player.position).add({x:1.5,y:0,z:1}),this.engine.scene.add(this.companion),this.companionSpecies=e.speciesId}this.companion.visible=!0}updateCompanion(e,t,n){if(!this.companion)return;const s=fn(this.profile);if(!s){this.companion.visible=!1;return}s.speciesId!==this.companionSpecies&&this.syncCompanion();const r=this.player.position,a=Math.sin(this.player.facing)*-1,o=Math.cos(this.player.facing)*-1,l=Math.cos(this.player.facing)*1.15,c=-Math.sin(this.player.facing)*1.15,d={x:r.x+a+l,z:r.z+o+c},h=d.x-this.companion.position.x,u=d.z-this.companion.position.z,f=Math.hypot(h,u);if(f>9)this.companion.position.set(d.x,this.player.position.y,d.z);else if(f>.15){const _=1-Math.exp(-(n?7.5:3.5)*e);this.companion.position.x+=h*_,this.companion.position.z+=u*_;let p=Math.atan2(h,u)-this.companion.rotation.y;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.companion.rotation.y+=p*Math.min(1,e*7)}const g=this.player.position.y;this.companion.position.y+=(g-this.companion.position.y)*Math.min(1,e*8),Xs(this.companion,t,f>.5?"moving":"idle")}markDex(e,t=!1,n=!0){const s=Mt(e);if(!s)return!1;let r=!1;return this.profile.dex.seen.includes(e)||(this.profile.dex.seen.push(e),r=!0,n&&(this.ui.showToast(`New species recorded: ${s.name}.`,"gold","◈"),ts(this.profile,{type:"discover",count:this.profile.dex.seen.length}),this.dirty=!0)),t&&!this.profile.dex.caught.includes(e)&&(this.profile.dex.caught.push(e),this.dirty=!0),r}tick(e,t){if(this.time=t,this.mode==="battle"&&this.battleScene){const r=this.battleScene;this.world.update(e,t),this.wilds.update(e,t,this.player.position,this.legendaryEvent),r.update(e,this.input),this.engine.render(this.mode==="battle"&&this.battleScene===r?r.scene:this.engine.scene),this.input.clearFrame(),this.autosave(e);return}const n=!!this.ui.activeScreen,s=this.mode==="explore"&&!n;this.player.update(e,this.input,this.world,s),this.player.applyCamera(this.engine.camera),this.updateCompanion(e,t,s),this.world.update(e,t),this.wilds.update(e,t,this.player.position,this.legendaryEvent),this.ui.refreshTrainingLive(Ya()),this.mode==="explore"?(this.profile.stats.playSeconds=(this.profile.stats.playSeconds||0)+e,this.updateLegendary(Ya()),s?this.updateExploration(Ya()):(this.ui.setInteraction(null),this.setHint(""))):(this.ui.setInteraction(null),this.setHint("")),this.engine.render(this.engine.scene),this.input.clearFrame(),this.autosave(e)}updateExploration(e){const t=this.player.position;if(e>=this.lastBiomeCheck){this.lastBiomeCheck=e+350;const n=sv(t.x,t.z);n!==this.lastBiome&&(this.lastBiome=n,this.ui.setLocation(n),this.profile.flags.visitedBiomes.includes(n)?n!=="hub"&&this.ui.showToast(`Entered ${lt[n]?.name||n}.`,"","•"):(this.profile.flags.visitedBiomes.push(n),this.ui.showToast(`Discovered ${lt[n]?.name||n}.`,"gold","✦"),this.dirty=!0))}e>=this.lastSeenScan&&(this.lastSeenScan=e+600,this.scanWilds()),this.checkHazard(e),this.updateFocus(e)}scanWilds(){const e=this.player.position;for(const t of this.wilds.wilds)t.visible&&(Math.hypot(e.x-t.x,e.z-t.z)>jy||this.profile.dex.seen.includes(t.species.id)||this.markDex(t.species.id,!1))}checkHazard(e){if(e<this.hazardCooldownAt)return;const t=this.world.hazardAt(this.player.position);if(!t)return;this.hazardCooldownAt=e+1700;const n=fn(this.profile);if(!n)return;const s=Math.max(2,Math.round(n.stats.maxHp*.055));n.hp=Math.max(0,n.hp-s),this.flash(),this.ui.showToast(`${t.label}: ${Lt(n)} loses ${s} HP.`,"error","!"),this.ui.refresh(),n.hp<=0&&(qa(this.profile),this.teleportToHub(),this.ui.showToast("Your lead collapsed. You wake at the Starwell, party restored.","error","!")),this.save(!0)}updateLegendary(e){const t=qy(this.profile,e);if(t.changed){const n=t.event;if(t.warning&&n){const s=Mt(n.legendaryId);this.ui.showToast(`Astral event: ${s?.name||"a legendary creature"} is approaching ${lt[n.biome]?.name||"the wilds"}.`,"gold","✦"),this.markLegendaryWitnessed(n),this.dirty=!0}else t.spawned&&n?this.ui.showToast(`The rift is open. ${Mt(n.legendaryId)?.name||"A legendary"} is present for four minutes.`,"gold","✦"):t.expired&&(this.ui.showToast("The astral rift closes. The legendary presence fades.","","•"),this.dirty=!0);this.save()}this.legendaryEvent=this.profile.legendary.active,this.legendaryEvent&&!this.profile.flags.legendaryWitnessed?.includes(this.legendaryEvent.id)&&this.markLegendaryWitnessed(this.legendaryEvent),e>=this.lastLegendaryUi&&(this.lastLegendaryUi=e+500,this.ui.setLegendary(Rr(this.profile,e)))}markLegendaryWitnessed(e){this.profile.flags.legendaryWitnessed=this.profile.flags.legendaryWitnessed||[],!this.profile.flags.legendaryWitnessed.includes(e.id)&&(this.profile.flags.legendaryWitnessed.push(e.id),this.profile.flags.legendaryWitnessed=this.profile.flags.legendaryWitnessed.slice(-20),Jy(this.profile),ts(this.profile,{type:"legendary"}),this.markDex(e.legendaryId,!1),this.dirty=!0)}updateFocus(e){if(e<this.lastPromptAt)return;this.lastPromptAt=e+130;const t=this.player.position,n=this.wilds.nearestWild(t,4.4),s=this.world.nearestInteractable(t,3.9);let r=null;n&&(!s||n.distance<=s.distance+.2)?r={type:"wild",wild:n.wild,distance:n.distance}:s&&(r={type:"interactable",data:s,distance:s.distance}),this.focus=r;let a="";if(r?.type==="wild"?a=`Encounter ${r.wild.species.name} · Lv. ${r.wild.level}`:r?.type==="interactable"&&(a=r.data.label),a!==this.lastPrompt&&(this.lastPrompt=a,this.ui.setInteraction(a||null)),!this.profile.settings.hints){this.setHint("");return}let o="Drag to look · WASD move · Shift sprint · Space jump · E interact";r?.type==="wild"?o="Press E near a wild creature to begin a real-time encounter.":this.world.hazardAt(t)?o="Scalding ground. Move to safety.":r?.type==="interactable"&&(o=`${r.data.label}. Press E.`),this.setHint(o)}setHint(e){e!==this.lastHint&&(this.lastHint=e,this.ui.setHint(e))}interact(){if(this.mode!=="explore"||this.ui.activeScreen)return;const e=this.focus;if(!e)return;if(e.type==="wild"){this.startBattle(e.wild);return}const t=e.data;if(t)switch(t.type){case"shop":this.ui.openScreen("shop");break;case"training":this.ui.openScreen("training");break;case"quests":this.ui.openScreen("quests");break;case"guide":this.profile.flags.tutorialSeen=!0,this.ui.openHowTo(),this.save();break;case"heal":{const n=qa(this.profile);this.ui.showToast(n>0?`The Starwell restores ${pi(n)} total HP.`:"Your party is already at full health.","success","✚"),this.ui.refresh(),this.save(!0);break}case"practice":this.startPractice();break;case"landmark":this.inspectLandmark(t);break}}inspectLandmark(e){const t=this.world.landmarks.find(r=>r.id===e.landmark);if(!t)return;const n=!this.profile.flags.landmarks[t.id];this.profile.flags.landmarks[t.id]=Date.now();const s=ts(this.profile,{type:"visit",landmark:t.id});n?(Br(this.profile,25,0),this.markDexFromLandmark(t),this.ui.showToast(`${t.name} recorded. +25 Shards.`,"gold","✦")):this.ui.showToast(`${t.name}: ${t.description}`,"","◈"),this.handleQuestUpdates(s),this.ui.refresh(),this.save(!0)}markDexFromLandmark(e){this.profile.flags.landmarks[e.id]=Date.now()}startPractice(){if(this.mode!=="explore"||this.ui.activeScreen)return;const e=fn(this.profile);if(!e)return this.ui.showToast("You need an active creature first.","error");if(e.hp<=0)return this.ui.showToast("Your lead needs healing before practice.","error");const t=Mt("AST-012")||Mt(zo[0]),n=Math.max(3,e.level-1),s=$a(t.id,n,{provenance:"practice"}),r={id:`practice-${Date.now()}`,species:t,speciesId:t.id,level:n,x:this.player.position.x,z:this.player.position.z,stats:s.stats,hp:s.stats.maxHp,biome:"verdant",legendary:!1,visible:!0,practice:!0};this.beginBattle(r)}startBattle(e){if(this.mode!=="explore"||this.ui.activeScreen)return;const t=fn(this.profile);if(!t){this.ui.showToast("Choose an active creature before entering the wilds.","error");return}if(t.hp<=0){this.ui.showToast(`${Lt(t)} needs a salve or the Starwell before battling.`,"error");return}this.markDex(e.species.id,!1),this.wilds.hideWild(e),this.beginBattle(e)}beginBattle(e){this.pendingWild=e;const t=fn(this.profile);this.battle=Yv(this.profile,e,t,{legendary:e.legendary?this.legendaryEvent:null}),this.profile.stats.battles=(this.profile.stats.battles||0)+1,this.mode="battle",this.input.keys.clear(),this.input.justPressed.clear(),this.input.setTouchMove(0,0),this.ui.setInteraction(null),this.ui.setHint(""),this.ui.setBattleVisible(!0),this.battleScene=new ny(this.engine,this.battle,e,{onHud:n=>this.ui.updateBattle(n),onEnd:(n,s)=>this.finishBattle(n,s)}),this.ui.setBattleVisible(!0),this.save()}finishBattle(e,t){if(this.mode!=="battle"||this.battle!==t)return;const n=this.pendingWild,s=At(this.profile,t.player.uid)||fn(this.profile);s&&(s.hp=Math.max(0,Math.round(t.player.hp)),s.statuses=[]);let r=null,a={xp:0,shards:0,item:null},o=[],l=[];if(e==="victory"&&n){if(a=ey(t),s&&a.xp){const c=Fs(this.profile,s,a.xp);o.push({creature:s,levels:c.levels,levelsText:c.levels}),l.push(...c.evolved.map(d=>({creature:s,species:d})));for(const d of this.profile.party){if(d===s.uid)continue;const h=At(this.profile,d);if(!h||h.assignment==="training")continue;const u=Fs(this.profile,h,Math.round(a.xp*.3));u.levels&&o.push({creature:h,levels:u.levels}),l.push(...u.evolved.map(f=>({creature:h,species:f})))}}Br(this.profile,a.shards,0),a.item&&jr(this.profile,a.item,1),this.profile.stats.wins=(this.profile.stats.wins||0)+1,this.recordQuestEvent({type:"defeat",biome:n.biome}),this.ui.showToast(`Victory. +${a.xp} XP, +${a.shards} Shards.`,"success","✓")}if(e==="captured"&&n){this.profile.stats.captures=(this.profile.stats.captures||0)+1,r=$a(n.speciesId,n.level,{provenance:n.legendary?"legendary":"wild"});const c=Ic(this.profile,r);this.markDex(n.speciesId,!0);const d=Math.round(n.level*10+(n.legendary?180:0));if(a={xp:d,shards:Math.round(n.level*3+(n.legendary?120:0)),item:Math.random()<.18?"treat":null},s){const h=Fs(this.profile,s,d);o.push({creature:s,levels:h.levels}),l.push(...h.evolved.map(u=>({creature:s,species:u})))}Br(this.profile,a.shards,n.legendary?2:0),a.item&&jr(this.profile,a.item,1),this.recordQuestEvent({type:"capture",types:n.species.types,biome:n.biome}),n.legendary&&this.legendaryEvent&&Ky(this.profile,this.legendaryEvent).ok&&this.ui.showToast(`${n.species.name} accepted the capture. Legendary event complete.`,"gold","✦"),this.ui.showToast(c.inParty?`${Lt(r)} joined your party.`:`${Lt(r)} was sent to storage.`,"success","◉")}if(e==="defeat"){this.profile.stats.defeats=(this.profile.stats.defeats||0)+1;const c=Math.round((this.profile.currency.shards||0)*.1);this.profile.currency.shards=Math.max(0,(this.profile.currency.shards||0)-c),qa(this.profile),this.teleportToHub(),this.ui.showToast(`You retreat to Haven. The party is restored; ${pi(c)} Shards were lost.`,"error","!")}n?.legendary&&e==="victory"&&(this.profile.legendary.history.push({...this.legendaryEvent,outcome:"escaped"}),this.profile.legendary.history=this.profile.legendary.history.slice(-20),this.profile.legendary.active=null,this.profile.legendary.nextEventAt=Date.now()+360*1e3),n&&(n.practice||((e==="fled"||e==="defeat")&&!n.legendary?this.wilds.showWild(n):this.wilds.removeWild(n,{respawn:!n.legendary}))),this.processProgression(o,l),this.battleScene?.dispose(),this.battleScene=null,this.battle=null,this.pendingWild=null,this.legendaryEvent=this.profile.legendary.active,this.mode="explore",this.input.setEnabled(!0),this.input.keys.clear(),this.input.justPressed.clear(),this.input.setTouchMove(0,0),this.ui.setBattleVisible(!1),this.ui.setLegendary(Rr(this.profile)),this.ui.refresh(),this.save(!0),this.ui.showBattleResult({result:e,battle:t,rewards:a,captured:r,onContinue:()=>{this.focus=null,this.lastPrompt="",this.ui.setInteraction(null)},onOpenParty:()=>this.ui.openScreen("party")})}processProgression(e,t){const n=new Set;for(const s of e){if(!s.levels)continue;const r=`${s.creature.uid}-${s.creature.level}`;n.has(r)||(n.add(r),this.ui.showToast(`${Lt(s.creature)} reached level ${s.creature.level}.`,"gold","↑"),ts(this.profile,{type:"level",level:s.creature.level}))}for(const s of t)this.profile.stats.evolved=(this.profile.stats.evolved||0)+1,this.ui.showToast(`${Lt(s.creature)} evolved into ${s.species.name}.`,"gold","✦")}recordQuestEvent(e){const t=ts(this.profile,e);return this.handleQuestUpdates(t),t}handleQuestUpdates(e=[]){let t=!1;for(const n of e)t=!0,n.justCompleted&&this.ui.showToast(`Bounty complete: ${n.quest.name}. Claim it at the board.`,"gold","✧");t&&(this.ui.refresh(),this.dirty=!0)}handleSetActive(e){const t=ay(this.profile,e);this.reportResult(t,"Creature is now your active lead."),t.ok&&(this.syncCompanion(),this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleSwapParty(e,t){const n=oy(this.profile,e,t);this.reportResult(n),n.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleMoveToParty(e){const t=ly(this.profile,e);this.reportResult(t,"Moved to the party."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleMoveToStorage(e){const t=cy(this.profile,e);this.reportResult(t,"Moved to storage."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleRelease(e){const t=At(this.profile,e),n=dy(this.profile,e);this.reportResult(n,`${Lt(t)} was released.`),n.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleAssignTraining(e){const t=Ay(this.profile,e);this.reportResult(t,`${Lt(At(this.profile,e))} started training.`),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleRemoveTraining(e){const t=this.profile.flags.totalTrainSeconds||0,n=Cy(this.profile,e);if(this.reportResult(n,"Training stopped and XP collected."),n.ok){const s=(this.profile.flags.totalTrainSeconds||0)-t;s>0&&this.recordQuestEvent({type:"train",seconds:s}),this.processTrainingProgression(n.collected),this.ui.refresh(),this.rerenderScreen(),this.save(!0)}}handleCollectTraining(e){const t=this.profile.flags.totalTrainSeconds||0,n=ih(this.profile,Date.now(),e||null);if(!n.xp){this.ui.showToast("No training XP ready yet.","","•");return}const s=(this.profile.flags.totalTrainSeconds||0)-t;s>0&&this.recordQuestEvent({type:"train",seconds:s}),this.ui.showToast(`Collected ${pi(n.xp)} training XP.`,"success","↑"),this.processTrainingProgression(n),this.ui.refresh(),this.rerenderScreen(),this.save(!0)}processTrainingProgression(e={}){const t=(e.levels||[]).map(s=>({creature:At(this.profile,s.uid),levels:s.levels})).filter(s=>s.creature),n=(e.evolutions||[]).map(s=>({creature:At(this.profile,s.uid),species:s.species})).filter(s=>s.creature&&s.species);this.processProgression(t,n)}handleUnlockTraining(){const e=kc(this.profile,"training_slot");this.reportResult(e,"Second treadmill unlocked."),e.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleStartQuest(e){const t=Sy(this.profile,e);this.reportResult(t,"Bounty accepted."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleClaimQuest(e){const t=wy(this.profile,e);this.reportResult(t,"Rewards claimed."),t.ok&&(this.ui.showToast("Bounty rewards added to your expedition.","gold","✧"),this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleBuyItem(e){const t=kc(this.profile,e);this.reportResult(t,`${gn[e]?.name||"Item"} purchased.`),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleUseItem(e){const t=fn(this.profile);if(!t)return this.ui.showToast("You need an active creature.","error");const n=gn[e];let s;n?.category==="heal"?s=gy(this.profile,t.uid,e):n?.category==="xp"?s=vy(this.profile,t.uid,e):n?.category==="lure"?s=yy(this.profile):s={ok:!1,reason:"That item cannot be used here."},s.ok?(e==="lure"?this.ui.showToast("Scent Lure active for the next three encounters.","success","❋"):n?.category==="xp"?(s.result?.levels&&this.processProgression([{creature:t,levels:s.result.levels}],(s.result.evolved||[]).map(r=>({creature:t,species:r}))),this.ui.showToast(`${Lt(t)} gained ${n.xp} XP.`,"success","★")):this.ui.showToast(`${Lt(t)} restored ${pi(s.healed)} HP.`,"success","✚"),this.ui.refresh(),this.rerenderScreen(),this.save(!0)):this.ui.showToast(s.reason,"error")}handleSettingChange(e,t){e==="quality"&&(this.engine.setQuality(t),this.world.setQuality(t)),e==="sensitivity"&&(this.input.sensitivity=t),e==="invertY"&&(this.input.invertY=!!t),this.ui.applySettings(),this.save(!0)}handleBattleMove(e){if(!this.battleScene||this.battle?.over)return;const t=this.battleScene.castPlayerMove(e);t?.ok||this.ui.showToast(t?.reason||"That move is not ready.","","•")}handleBattleDodge(){!this.battleScene||this.battle?.over||this.input.justPressed.add("KeyQ")}handleBattleCapture(){if(!this.battleScene||!this.battle||this.battle.over)return;if(this.profile.party.length>=6&&$v(this.profile)>=Xd){this.ui.showToast("Party and storage are full. Make room before capturing.","error","!");return}const e=(this.profile.inventory.disc_fine||0)>0?"disc_fine":"disc_basic",t=gn[e];if(!t||(this.profile.inventory[e]||0)<=0){this.ui.showToast("No capture discs left. Visit Ember & Elm.","error","!");return}this.profile.inventory[e]-=1;const n=this.battleScene.attemptCapture(t);n.success?this.ui.showToast("Capture field holds.","gold","◉"):this.ui.showToast(`Capture failed (${Math.round(n.chance*100)}% chance).`,"error","◉"),this.ui.refresh(),this.save(!0)}handleBattlePotion(){if(!this.battleScene||!this.battle||this.battle.over)return;if((this.profile.inventory.potion||0)<=0){this.ui.showToast("No Sap Salve left.","error","!");return}const e=this.battle.player;if(e.hp>=e.maxHp){this.ui.showToast("Your creature is already at full health.","","•");return}const t=Math.min(e.maxHp-e.hp,Math.round(e.maxHp*.4));e.hp+=t,this.profile.inventory.potion-=1,tn(this.battle,`${e.name} recovers ${t} HP from a Sap Salve.`),this.battleScene.spawnFloat(`+${t}`,this.battleScene.playerPos.clone().add({x:0,y:2.2,z:0}),"#8ef0a0"),this.battleScene.spawnBurst(this.battleScene.playerPos.clone().add({x:0,y:.7,z:0}),"#63c96b",14,1),this.ui.showToast(`Sap Salve restored ${t} HP.`,"success","✚"),this.ui.refresh(),this.save(!0)}handleBattleFlee(){if(!this.battleScene||!this.battle||this.battle.over)return;const e=this.battleScene.attemptFlee();e.ok?e.fled||this.ui.showToast("You could not escape. Keep moving.","error","!"):this.ui.showToast(e.reason,"error")}openScreen(e){if(this.mode==="battle"){this.ui.showToast("Finish the encounter before opening menus.","","•");return}if(this.mode!=="starter"){if(this.ui.activeScreen===e){this.ui.closeModal();return}this.ui.openScreen(e)}}rerenderScreen(){this.ui.activeScreen&&this.ui.activeScreen!=="starter"&&this.ui.renderScreen(this.ui.activeScreen)}reportResult(e,t){if(!e?.ok){this.ui.showToast(e?.reason||"That action is not available.","error");return}t&&this.ui.showToast(t,"success")}teleportToHub(){this.player.teleport(Vo[0],Vo[2]),this.player.cameraYaw=0,this.player.setCameraYaw(0),this.player.applyCamera(this.engine.camera),this.lastBiome="hub",this.ui.setLocation("hub")}flash(){const e=document.getElementById("flash");e&&(e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),80))}resetSave(){this.resetting=!0,Wv(),location.reload()}autosave(e){const t=performance.now();t-this.autosaveAt<Qy||(this.autosaveAt=t,this.save())}save(e=!1){if(this.resetting)return!1;this.mode==="title"&&!e||(this.profile.updatedAt=Date.now(),Lc(this.profile),this.dirty=!1)}destroy(){this.resetting||Lc(this.profile),this.engine.renderer.setAnimationLoop(null),this.battleScene?.dispose(),this.input.setEnabled(!1)}}async function t_(i,e=()=>{}){e(8,"Charting the Astral Scar…");const t=new Kg(i);e(18,"Reading the expedition archive…");const n=Vv();e(30,"Raising the five biomes…");const s=new av(t.scene,n.settings.quality);e(62,"Waking the wild creatures…"),await Xc();const r=new hv(t.scene,Vo),a=new qv(t.scene,s,n,()=>fn(n)?.level||5);e(84,"Tuning real-time encounters…"),await Xc();const o=new e_({engine:t,profile:n,world:s,player:r,wilds:a});return e(100,"Ready."),o}function Ya(){return Date.now()}const n_=document.getElementById("scene"),qc=document.getElementById("loading-fill"),Yc=document.getElementById("loading-text");function Zc(i,e){qc&&(qc.style.width=`${i}%`),Yc&&e&&(Yc.textContent=e)}async function i_(){try{const i=await t_(n_,Zc);window.__ASTRA_GAME__=i,i.start(),window.addEventListener("beforeunload",()=>i.save(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&i.save(!0)})}catch(i){console.error(i),Zc(100,"The Astral Scar could not be reached.");const e=document.getElementById("loading-screen");e&&(e.innerHTML=`
        <div style="max-width:520px;text-align:center;padding:24px">
          <div class="loading-mark" style="color:var(--danger)">!</div>
          <h1 style="font-family:var(--font-display);font-size:24px;margin:14px 0 8px">The expedition could not start</h1>
          <p style="font-size:12px;line-height:1.6;color:var(--muted)">${String(i?.message||i).replace(/</g,"&lt;")}</p>
          <button class="primary-button" style="margin-top:18px" onclick="location.reload()">Try again</button>
        </div>`)}}i_();
