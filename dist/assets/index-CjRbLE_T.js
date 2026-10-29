(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ll="186",jd=0,Hl=1,eu=2,Gr=1,tu=2,Ds=3,mi=0,Qt=1,en=2,Jn=0,Os=1,bn=2,Gl=3,Vl=4,nu=5,ns=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,Eh=204,Th=205,du=206,uu=207,fu=208,pu=209,mu=210,gu=211,vu=212,yu=213,xu=214,ho=0,uo=1,fo=2,Ws=3,po=4,mo=5,go=6,vo=7,Ah=0,_u=1,Su=2,Bn=0,Ch=1,Rh=2,Ph=3,cl=4,Lh=5,Ih=6,Dh=7,Nh=300,Ei=301,hs=302,Sa=303,Ma=304,ua=306,yo=1e3,Zn=1001,xo=1002,zt=1003,Mu=1004,hr=1005,$t=1006,ba=1007,bi=1008,ln=1009,Uh=1010,Fh=1011,$s=1012,hl=1013,Hn=1014,An=1015,Gn=1016,dl=1017,ul=1018,Xs=1020,kh=35902,Oh=35899,Bh=1021,zh=1022,Cn=1023,jn=1026,wi=1027,fl=1028,pl=1029,Ti=1030,ml=1031,gl=1033,Vr=33776,Wr=33777,$r=33778,Xr=33779,_o=35840,So=35841,Mo=35842,bo=35843,wo=36196,Eo=37492,To=37496,Ao=37488,Co=37489,Kr=37490,Ro=37491,Po=37808,Lo=37809,Io=37810,Do=37811,No=37812,Uo=37813,Fo=37814,ko=37815,Oo=37816,Bo=37817,zo=37818,Ho=37819,Go=37820,Vo=37821,Wo=36492,$o=36494,Xo=36495,qo=36283,Yo=36284,Qr=36285,Zo=36286,bu=3200,Jo=0,wu=1,di="",Kt="srgb",jr="srgb-linear",ea="linear",mt="srgb",wa=7680,Eu=519,Tu=512,Au=513,Cu=514,vl=515,Ru=516,Pu=517,yl=518,Lu=519,Hh=35044,Wl="300 es",On=2e3,qs=2001;function Iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=ta("canvas");return i.style.display="block",i}const $l={};function na(...i){const e="THREE."+i.shift();console.log(e,...i)}function Gh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Gh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Gh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function os(...i){const e=i.join(" ");e in $l||($l[e]=!0,Ge(...i))}function Nu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Uu={[ho]:uo,[fo]:go,[po]:vo,[Ws]:mo,[uo]:ho,[go]:fo,[vo]:po,[mo]:Ws};class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const Bs=Math.PI/180,Ys=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function xl(i,e){return(i%e+e)%e}function Fu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ku(i,e,t){return i!==e?(t-i)/(e-i):0}function zs(i,e,t){return(1-t)*i+t*e}function Ou(i,e,t,n){return zs(i,e,1-Math.exp(-t*n))}function Bu(i,e=1){return e-Math.abs(xl(i,e*2)-e)}function zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vu(i,e){return i+Math.random()*(e-i)}function Wu(i){return i*(.5-Math.random())}function $u(i){i!==void 0&&(Xl=i);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xu(i){return i*Bs}function qu(i){return i*Ys}function Yu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ku(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ql={DEG2RAD:Bs,RAD2DEG:Ys,generateUUID:zn,clamp:Qe,euclideanModulo:xl,mapLinear:Fu,inverseLerp:ku,lerp:zs,damp:Ou,pingpong:Bu,smoothstep:zu,smootherstep:Hu,randInt:Gu,randFloat:Vu,randFloatSpread:Wu,seededRandom:$u,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Yu,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Ku,normalize:gt,denormalize:En};class re{static{re.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new P,Yl=new vs;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],T=s[4],x=s[7],w=s[2],b=s[5],C=s[8];return r[0]=a*_+o*M+l*w,r[3]=a*m+o*T+l*b,r[6]=a*p+o*x+l*C,r[1]=c*_+h*M+d*w,r[4]=c*m+h*T+d*b,r[7]=c*p+h*x+d*C,r[2]=u*_+f*M+g*w,r[5]=u*m+f*T+g*b,r[8]=u*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new qe,Zl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const at=Qu();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=ta("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class _l{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let tf=0;const Ca=new P;class Xt extends Li{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Zn,s=Zn,r=$t,a=bi,o=Cn,l=ln,c=Xt.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=zn(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Nh;Xt.DEFAULT_ANISOTROPY=1;class Ct{static{Ct.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(f+1)/2,w=(p+1)/2,b=(h+u)/4,C=(d+_)/4,v=(g+m)/4;return T>x&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=C/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends Li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Xt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class yt{static{yt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,af)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ii.crossVectors(n,tn),ii.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ii.crossVectors(n,tn)),ii.normalize(),dr.crossVectors(tn,ii),s[0]=ii.x,s[4]=dr.x,s[8]=tn.x,s[1]=ii.y,s[5]=dr.y,s[9]=tn.y,s[2]=ii.z,s[6]=dr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],T=n[7],x=n[11],w=n[15],b=s[0],C=s[4],v=s[8],E=s[12],R=s[1],L=s[5],N=s[9],B=s[13],F=s[2],k=s[6],q=s[10],V=s[14],ie=s[3],$=s[7],Q=s[11],te=s[15];return r[0]=a*b+o*R+l*F+c*ie,r[4]=a*C+o*L+l*k+c*$,r[8]=a*v+o*N+l*q+c*Q,r[12]=a*E+o*B+l*V+c*te,r[1]=h*b+d*R+u*F+f*ie,r[5]=h*C+d*L+u*k+f*$,r[9]=h*v+d*N+u*q+f*Q,r[13]=h*E+d*B+u*V+f*te,r[2]=g*b+_*R+m*F+p*ie,r[6]=g*C+_*L+m*k+p*$,r[10]=g*v+_*N+m*q+p*Q,r[14]=g*E+_*B+m*V+p*te,r[3]=M*b+T*R+x*F+w*ie,r[7]=M*C+T*L+x*k+w*$,r[11]=M*v+T*N+x*q+w*Q,r[15]=M*E+T*B+x*V+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*f-c*u,T=o*f-c*d,x=o*u-l*d,w=a*f-c*h,b=a*u-l*h,C=a*d-o*h;return t*(_*M-m*T+p*x)-n*(g*M-m*w+p*b)+s*(g*T-_*w+p*C)-r*(g*x-_*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-n*a,T=t*l-s*a,x=t*c-r*a,w=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=h*_-d*g,E=h*m-u*g,R=h*p-f*g,L=d*m-u*_,N=d*p-f*_,B=u*p-f*m,F=M*B-T*N+x*L+w*R-b*E+C*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*B-l*N+c*L)*k,e[1]=(s*N-n*B-r*L)*k,e[2]=(_*C-m*b+p*w)*k,e[3]=(u*b-d*C-f*w)*k,e[4]=(l*R-a*B-c*E)*k,e[5]=(t*B-s*R+r*E)*k,e[6]=(m*x-g*C-p*T)*k,e[7]=(h*C-u*x+f*T)*k,e[8]=(a*N-o*R+c*v)*k,e[9]=(n*R-t*N-r*v)*k,e[10]=(g*b-_*x+p*M)*k,e[11]=(d*x-h*b-f*M)*k,e[12]=(o*E-a*L-l*v)*k,e[13]=(t*L-n*E+s*v)*k,e[14]=(_*T-g*w-m*M)*k,e[15]=(h*w-d*T+u*M)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,M=l*c,T=l*h,x=l*d,w=n.x,b=n.y,C=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+x)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+T)*C,s[9]=(m-M)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),l=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,h=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===qs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new P,_n=new yt,rf=new P(0,0,0),af=new P(1,1,1),ii=new P,dr=new P,tn=new P,Kl=new yt,Ql=new vs;class gi{constructor(e=0,t=0,n=0,s=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let of=0;const jl=new P,Oi=new vs,Wn=new yt,ur=new P,Ss=new P,lf=new P,cf=new vs,ec=new P(1,0,0),tc=new P(0,1,0),nc=new P(0,0,1),ic={type:"added"},hf={type:"removed"},Bi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Ut extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new P,t=new gi,n=new vs,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ss,ur,this.up):Wn.lookAt(ur,Ss,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class je extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},fr={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=xl(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=La(a,r,e+1/3),this.g=La(a,r,e),this.b=La(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return at.workingToColorSpace(Wt.copy(this),e),Math.round(Qe(Wt.r*255,0,255))*65536+Math.round(Qe(Wt.g*255,0,255))*256+Math.round(Qe(Wt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kt){at.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(fr);const n=zs(si.h,fr.h,t),s=zs(si.s,fr.s,t),r=zs(si.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ve;Ve.NAMES=$h;class fa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xh extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new P,$n=new P,Ia=new P,Xn=new P,zi=new P,Hi=new P,sc=new P,Da=new P,Na=new P,Ua=new P,Fa=new Ct,ka=new Ct,Oa=new Ct;class mn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),$n.subVectors(n,t),Ia.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot($n),l=Sn.dot(Ia),c=$n.dot($n),h=$n.dot(Ia),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fa.setScalar(0),ka.setScalar(0),Oa.setScalar(0),Fa.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Oa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(ka,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),$n.subVectors(e,t),Sn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Hi.subVectors(r,n),Da.subVectors(e,n);const l=zi.dot(Da),c=Hi.dot(Da);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,s);const h=zi.dot(Na),d=Hi.dot(Na);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(zi,a);Ua.subVectors(e,r);const f=zi.dot(Ua),g=Hi.dot(Ua);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return sc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(sc,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ii{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),mr.subVectors(this.max,Ms),Gi.subVectors(e.a,Ms),Vi.subVectors(e.b,Ms),Wi.subVectors(e.c,Ms),ri.subVectors(Vi,Gi),ai.subVectors(Wi,Vi),yi.subVectors(Gi,Wi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-yi.z,yi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,yi.z,0,-yi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-yi.y,yi.x,0];return!Ba(t,Gi,Vi,Wi,mr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Gi,Vi,Wi,mr))?!1:(gr.crossVectors(ri,ai),t=[gr.x,gr.y,gr.z],Ba(t,Gi,Vi,Wi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,pr=new Ii,Gi=new P,Vi=new P,Wi=new P,ri=new P,ai=new P,yi=new P,Ms=new P,mr=new P,gr=new P,xi=new P;function Ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dt=new P,vr=new re;let uf=0;class Ht extends Li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class qh extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yh extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ff=new Ii,bs=new P,za=new P;class ys{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(za)),this.expandByPoint(bs.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pf=0;const hn=new yt,Ha=new Ut,$i=new P,nn=new Ii,ws=new Ii,Ot=new P;class Mt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?Yh:qh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(nn.min,ws.min),nn.expandByPoint(Ot),Ot.addVectors(nn.max,ws.max),nn.expandByPoint(Ot)):(nn.expandByPoint(ws.min),nn.expandByPoint(ws.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Ot.add($i)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,h=new P,d=new P,u=new re,f=new re,g=new re,_=new P,m=new P;function p(v,E,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[v].add(_),o[E].add(_),o[R].add(_),l[v].add(m),l[E].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,E=M.length;v<E;++v){const R=M[v],L=R.start,N=R.count;for(let B=L,F=L+N;B<F;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new P,x=new P,w=new P,b=new P;function C(v){w.fromBufferAttribute(s,v),b.copy(w);const E=o[v];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(b,E);const L=x.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,E=M.length;v<E;++v){const R=M[v],L=R.start,N=R.count;for(let B=L,F=L+N;B<F;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ht(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Zt=new P;class ia{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ga=new P,gf=new P,vf=new qe;class hi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ga.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Ga),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yf=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Os,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sl extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const Es=new P,qi=new P,Yi=new P,Zi=new re,Ts=new re,Zh=new yt,yr=new P,As=new P,xr=new P,rc=new re,Va=new re,ac=new re;class Jh extends Ut{constructor(e=new Sl){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mf(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new ia(n,3,0,!1)),Xi.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),Zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;_r(yr.set(-.5,-.5,0),Yi,a,qi,s,r),_r(As.set(.5,-.5,0),Yi,a,qi,s,r),_r(xr.set(.5,.5,0),Yi,a,qi,s,r),rc.set(0,0),Va.set(1,0),ac.set(1,1);let o=e.ray.intersectTriangle(yr,As,xr,!1,Es);if(o===null&&(_r(As.set(-.5,.5,0),Yi,a,qi,s,r),Va.set(0,1),o=e.ray.intersectTriangle(yr,xr,As,!1,Es),o===null))return;const l=e.ray.origin.distanceTo(Es);l<e.near||l>e.far||t.push({distance:l,point:Es.clone(),uv:mn.getInterpolation(Es,yr,As,xr,rc,Va,ac,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _r(i,e,t,n,s,r){Zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Zi.x-s*Zi.y,Ts.y=s*Zi.x+r*Zi.y):Ts.copy(Zi),i.copy(e),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Zh)}const Yn=new P,Wa=new P,Sr=new P,Mr=new P;class Kh{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wa.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Wa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=Mr.dot(this.direction),l=-Mr.dot(Sr),c=Mr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wa).addScaledVector(Sr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,x=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let C,v,E,R,L,N,B,F,k,q,V,ie;if(x>=w&&x>=b?(E=l,N=d,k=g,ie=p,l>=0?(C=c,v=h,R=u,L=f,B=_,F=m,q=M,V=T):(C=h,v=c,R=f,L=u,B=m,F=_,q=T,V=M)):w>=b?(E=c,N=u,k=_,ie=M,c>=0?(C=h,v=l,R=f,L=d,B=m,F=g,q=T,V=p):(C=l,v=h,R=d,L=f,B=g,F=m,q=p,V=T)):(E=h,N=f,k=m,ie=T,h>=0?(C=l,v=c,R=d,L=u,B=g,F=_,q=p,V=M):(C=c,v=l,R=u,L=d,B=_,F=g,q=M,V=p)),E===0)return null;const $=C/E,Q=v/E,te=1/E,De=R-$*N,Te=L-Q*N,ht=B-$*k,tt=F-Q*k,lt=q-$*ie,Z=V-Q*ie,j=lt*tt-Z*ht,ye=De*Z-Te*lt,He=ht*Te-tt*De;if(s){if(j<0||ye<0||He<0)return null}else if((j<0||ye<0||He<0)&&(j>0||ye>0||He>0))return null;const Me=j+ye+He;if(Me===0)return null;const We=te*(j*N+ye*k+He*ie);return(Me>0?We<0:We>0)?null:this.at(We/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wn extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oc=new yt,_i=new Kh,br=new ys,lc=new P,wr=new P,Er=new P,Tr=new P,$a=new P,Ar=new P,cc=new P,Cr=new P;class Pe extends Ut{constructor(e=new Mt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&($a.fromBufferAttribute(d,e),a?Ar.addScaledVector($a,h):Ar.addScaledVector($a.sub(t),h))}t.add(Ar)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(br.containsPoint(_i.origin)===!1&&(_i.intersectSphere(br,lc)===null||_i.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=T;x<w;x+=3){const b=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Rr(this,p,e,n,c,h,d,b,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);s=Rr(this,a,e,n,c,h,d,M,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=T;x<w;x+=3){const b=x,C=x+1,v=x+2;s=Rr(this,p,e,n,c,h,d,b,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,T=m+1,x=m+2;s=Rr(this,a,e,n,c,h,d,M,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xf(i,e,t,n,s,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===mi,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Rr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,wr),i.getVertexPosition(l,Er),i.getVertexPosition(c,Tr);const h=xf(i,e,t,n,wr,Er,Tr,cc);if(h){const d=new P;mn.getBarycoord(cc,wr,Er,Tr,d),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,d,new re)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};mn.getNormal(wr,Er,Tr,u.normal),h.face=u,h.barycoord=d}return h}class Qh extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=zt,h=zt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new yt,dc=new yt,Pr=[],uc=new Ii,_f=new yt,Cs=new Pe,Rs=new ys;class Sf extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_f)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),uc.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Rs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),dc.multiplyMatrices(n,Ji),Cs.matrixWorld=dc,Cs.raycast(e,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,t.push(l)}Pr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(s*this.count),s,this.count,fl,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new ys,Mf=new re(.5,.5),Lr=new P;class Ml{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],T=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-M).normalize(),s[1].setComponents(c+a,f+h,p+g,w+M).normalize(),s[2].setComponents(c+o,f+d,p+_,w+T).normalize(),s[3].setComponents(c-o,f-d,p-_,w-T).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,w-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-x).normalize(),t===On)s[5].setComponents(c+l,f+u,p+m,w+x).normalize();else if(t===qs)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=Mf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Lr.x=s.normal.x>0?e.max.x:e.min.x,Lr.y=s.normal.y>0?e.max.y:e.min.y,Lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ds extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new yt,Ko=new Kh,Ir=new ys,Dr=new P;class Zs extends Ut{constructor(e=new Mt,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;fc.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(fc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Dr.fromBufferAttribute(d,m),pc(Dr,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Dr.fromBufferAttribute(d,g),pc(Dr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pc(i,e,t,n,s,r,a){const o=Ko.distanceSqToPoint(i);if(o<t){const l=new P;Ko.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class jh extends Xt{constructor(e=[],t=Ei,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Xt{constructor(e,t,n=Hn,s,r,a,o=zt,l=zt,c,h=jn,d=1){if(h!==jn&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bf extends Js{constructor(e,t=Hn,n=Ei,s,r,a=zt,o=zt,l,c=jn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class td extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _t extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function g(_,m,p,M,T,x,w,b,C,v,E){const R=x/C,L=w/v,N=x/2,B=w/2,F=b/2,k=C+1,q=v+1;let V=0,ie=0;const $=new P;for(let Q=0;Q<q;Q++){const te=Q*L-B;for(let De=0;De<k;De++){const Te=De*R-N;$[_]=Te*M,$[m]=te*T,$[p]=F,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),d.push(De/C),d.push(1-Q/v),V+=1}}for(let Q=0;Q<v;Q++)for(let te=0;te<C;te++){const De=u+te+k*Q,Te=u+te+k*(Q+1),ht=u+(te+1)+k*(Q+1),tt=u+(te+1)+k*Q;l.push(De,Te,tt),l.push(Te,ht,tt),ie+=6}o.addGroup(f,ie,E),f+=ie,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,_=s+1,m=new P,p=new P;for(let M=0;M<=g;M++){let T=0,x=0,w=0,b=0;if(M<=n){const E=M/n,R=E*Math.PI/2;x=-h-e*Math.cos(R),w=e*Math.sin(R),b=-e*Math.cos(R),T=E*d}else if(M<=n+r){const E=(M-n)/r;x=-h+E*t,w=e,b=0,T=d+E*u}else{const E=(M-n-r)/n,R=E*Math.PI/2;x=h+e*Math.sin(R),w=e*Math.cos(R),b=e*Math.sin(R),T=d+u+E*d}const C=Math.max(0,Math.min(1,T/f));let v=0;M===0?v=.5/s:M===g&&(v=-.5/s);for(let E=0;E<=s;E++){const R=E/s,L=R*Math.PI*2,N=Math.sin(L),B=Math.cos(L);p.x=-w*B,p.y=x,p.z=w*N,o.push(p.x,p.y,p.z),m.set(-w*B,b,w*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+v,C)}if(M>0){const E=(M-1)*_;for(let R=0;R<s;R++){const L=E+R,N=E+R+1,B=M*_+R,F=M*_+R+1;a.push(L,N,B),a.push(N,F,B)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Qn extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rt extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function M(){const x=new P,w=new P;let b=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const E=[],R=v/r,L=R*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,F=B*l+o,k=Math.sin(F),q=Math.cos(F);w.x=L*k,w.y=-R*n+m,w.z=L*q,d.push(w.x,w.y,w.z),x.set(k,C,q).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-R),E.push(g++)}_.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const R=_[E][v],L=_[E+1][v],N=_[E+1][v+1],B=_[E][v+1];(e>0||E!==0)&&(h.push(R,L,B),b+=3),(t>0||E!==r-1)&&(h.push(L,N,B),b+=3)}c.addGroup(p,b,0),p+=b}function T(x){const w=g,b=new re,C=new P;let v=0;const E=x===!0?e:t,R=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const F=N/s*l+o,k=Math.cos(F),q=Math.sin(F);C.x=E*q,C.y=m*R,C.z=E*k,d.push(C.x,C.y,C.z),u.push(0,R,0),b.x=k*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),g++}for(let N=0;N<s;N++){const B=w+N,F=L+N;x===!0?h.push(F,F+1,B):h.push(F+1,F,B),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rn extends rt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new rn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new P,x=new P,w=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],T),f(t[b+1],x),f(t[b+2],w),l(T,x,w,M)}function l(M,T,x,w){const b=w+1,C=[];for(let v=0;v<=b;v++){C[v]=[];const E=M.clone().lerp(x,v/b),R=T.clone().lerp(x,v/b),L=b-v;for(let N=0;N<=L;N++)N===0&&v===b?C[v][N]=E:C[v][N]=E.clone().lerp(R,N/L)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){const R=Math.floor(E/2);E%2===0?(u(C[v][R+1]),u(C[v+1][R]),u(C[v][R])):(u(C[v][R+1]),u(C[v+1][R+1]),u(C[v+1][R]))}}function c(M){const T=new P;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(M),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function h(){const M=new P;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];const x=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(x,1-w)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],x=a[M+2],w=a[M+4],b=Math.max(T,x,w),C=Math.min(T,x,w);b>.9&&C<.1&&(T<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,T){const x=M*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function g(){const M=new P,T=new P,x=new P,w=new P,b=new re,C=new re,v=new re;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),w.copy(M).add(T).add(x).divideScalar(3);const L=m(w);_(b,R+0,M,L),_(C,R+2,T,L),_(v,R+4,x,L)}}function _(M,T,x,w){w<0&&M.x===1&&(a[T]=M.x-1),x.x===0&&x.z===0&&(a[T]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.vertices,e.indices,e.radius,e.detail)}}class cs extends ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cs(e.radius,e.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new yt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bl extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wf extends bl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const mc=new P,gc=new P,Xa=new wl,qa=new wl,Ya=new wl;class Ef extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gc.subVectors(s[0],s[1]).add(s[0]),c=gc);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),qa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Ya.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),qa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ya.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Tf(i,e){const t=1-i;return t*t*e}function Af(i,e){return 2*(1-i)*i*e}function Cf(i,e){return i*i*e}function Hs(i,e,t,n){return Tf(i,e)+Af(i,t)+Cf(i,n)}function Rf(i,e){const t=1-i;return t*t*t*e}function Pf(i,e){const t=1-i;return 3*t*t*i*e}function Lf(i,e){return 3*(1-i)*i*i*e}function If(i,e){return i*i*i*e}function Gs(i,e,t,n,s){return Rf(i,e)+Pf(i,t)+Lf(i,n)+If(i,s)}class nd extends Vn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Df extends Vn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y),Gs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class id extends Vn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Vn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Vn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uf extends Vn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y),Hs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(vc(o,l.x,c.x,h.x,d.x),vc(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:wf,CatmullRomCurve3:Ef,CubicBezierCurve:nd,CubicBezierCurve3:Df,EllipseCurve:bl,LineCurve:id,LineCurve3:Nf,QuadraticBezierCurve:sd,QuadraticBezierCurve3:Uf,SplineCurve:rd});class Ff extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class yc extends Ff{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new id(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new sd(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new nd(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new bl(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ad extends yc{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new yc().fromJSON(s))}return this}}function kf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=od(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){const f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ks(r,a,t,o,l,c,0),a}function od(i,e,t,n,s){let r;if(s===jf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=xc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=xc(a/n|0,i[a],i[a+1],r);return r&&us(r,r.next)&&(js(r),r=r.next),r}function Ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(us(t,t.next)||Rt(t.prev,t,t.next)===0)){if(js(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ks(i,e,t,n,s,r,a){if(!i)return;!a&&r&&qf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Bf(i,n,s,r):Of(i)){e.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zf(Ai(i),e),Ks(i,e,t,n,s,r,2)):a===2&&Hf(i,e,t,n,s,r):Ks(Ai(i),e,t,n,s,r,1);break}}}function Of(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ns(s,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Rt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),p=jo(f,g,e,t,n),M=jo(_,m,e,t,n);let T=i.prevZ,x=i.nextZ;for(;T&&T.z>=p&&x&&x.z<=M;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ns(o,h,l,d,c,u,T.x,T.y)&&Rt(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ns(o,h,l,d,c,u,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ns(o,h,l,d,c,u,T.x,T.y)&&Rt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ns(o,h,l,d,c,u,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function zf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!us(n,s)&&cd(n,t,t.next,s)&&Qs(n,s)&&Qs(s,n)&&(e.push(n.i,t.i,s.i),js(t),js(t.next),t=i=s),t=t.next}while(t!==i);return Ai(t)}function Hf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jf(a,o)){let l=hd(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Ks(a,e,t,n,s,r,0),Ks(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gf(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=od(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zf(c))}s.sort(Vf);for(let r=0;r<s.length;r++)t=Wf(s[r],t);return t}function Vf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wf(i,e){const t=$f(i,e);if(!t)return e;const n=hd(t,i);return Ai(n,n.next),Ai(t,t.next)}function $f(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(us(i,t))return t;do{if(us(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ld(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Qs(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Xf(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Xf(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function qf(i,e,t,n){let s=i;do s.z===0&&(s.z=jo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yf(s)}function Yf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function jo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ld(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ns(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ld(i,e,t,n,s,r,a,o)}function Jf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kf(i,e)&&(Qs(i,e)&&Qs(e,i)&&Qf(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||us(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function us(i,e){return i.x===e.x&&i.y===e.y}function cd(i,e,t,n){const s=Ur(Rt(i,e,t)),r=Ur(Rt(i,e,n)),a=Ur(Rt(t,n,i)),o=Ur(Rt(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ur(i){return i>0?1:i<0?-1:0}function Kf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qs(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function Qf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){const t=el(i.i,i.x,i.y),n=el(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xc(i,e,t,n){const s=el(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ep{static triangulate(e,t,n=2){return kf(e,t,n)}}class rs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return rs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];_c(e),Sc(n,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Sc(n,t[l]);const o=ep.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function _c(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class El extends Mt{constructor(e=new ad([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:tp;let T,x=!1,w,b,C,v;if(p){T=p.getSpacedPoints(h),x=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ee),b=new P,C=new P,v=new P}u||(m=0,f=0,g=0,_=0);const E=o.extractPoints(c);let R=E.shape;const L=E.holes;if(!rs.isClockWise(R)){R=R.reverse();for(let ee=0,se=L.length;ee<se;ee++){const ae=L[ee];rs.isClockWise(ae)&&(L[ee]=ae.reverse())}}function B(ee){const ae=10000000000000001e-36;let oe=ee[0];for(let de=1;de<=ee.length;de++){const Be=de%ee.length,Oe=ee[Be],$e=Oe.x-oe.x,Xe=Oe.y-oe.y,I=$e*$e+Xe*Xe,dt=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(oe.x),Math.abs(oe.y)),nt=ae*dt*dt;if(I<=nt){ee.splice(Be,1),de--;continue}oe=Oe}}B(R),L.forEach(B);const F=L.length,k=R;for(let ee=0;ee<F;ee++){const se=L[ee];R=R.concat(se)}function q(ee,se,ae){return se||ot("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,ae)}const V=R.length;function ie(ee,se,ae){let oe,de,Be;const Oe=ee.x-se.x,$e=ee.y-se.y,Xe=ae.x-ee.x,I=ae.y-ee.y,dt=Oe*Oe+$e*$e,nt=Oe*I-$e*Xe;if(Math.abs(nt)>Number.EPSILON){const A=Math.sqrt(dt),y=Math.sqrt(Xe*Xe+I*I),O=se.x-$e/A,G=se.y+Oe/A,X=ae.x-I/y,le=ae.y+Xe/y,he=((X-O)*I-(le-G)*Xe)/(Oe*I-$e*Xe);oe=O+Oe*he-ee.x,de=G+$e*he-ee.y;const Y=oe*oe+de*de;if(Y<=2)return new re(oe,de);Be=Math.sqrt(Y/2)}else{let A=!1;Oe>Number.EPSILON?Xe>Number.EPSILON&&(A=!0):Oe<-Number.EPSILON?Xe<-Number.EPSILON&&(A=!0):Math.sign($e)===Math.sign(I)&&(A=!0),A?(oe=-$e,de=Oe,Be=Math.sqrt(dt)):(oe=Oe,de=$e,Be=Math.sqrt(dt/2))}return new re(oe/Be,de/Be)}const $=[];for(let ee=0,se=k.length,ae=se-1,oe=ee+1;ee<se;ee++,ae++,oe++)ae===se&&(ae=0),oe===se&&(oe=0),$[ee]=ie(k[ee],k[ae],k[oe]);const Q=[];let te,De=$.concat();for(let ee=0,se=F;ee<se;ee++){const ae=L[ee];te=[];for(let oe=0,de=ae.length,Be=de-1,Oe=oe+1;oe<de;oe++,Be++,Oe++)Be===de&&(Be=0),Oe===de&&(Oe=0),te[oe]=ie(ae[oe],ae[Be],ae[Oe]);Q.push(te),De=De.concat(te)}let Te;if(m===0)Te=rs.triangulateShape(k,L);else{const ee=[],se=[];for(let ae=0;ae<m;ae++){const oe=ae/m,de=f*Math.cos(oe*Math.PI/2),Be=g*Math.sin(oe*Math.PI/2)+_;for(let Oe=0,$e=k.length;Oe<$e;Oe++){const Xe=q(k[Oe],$[Oe],Be);ye(Xe.x,Xe.y,-de),oe===0&&ee.push(Xe)}for(let Oe=0,$e=F;Oe<$e;Oe++){const Xe=L[Oe];te=Q[Oe];const I=[];for(let dt=0,nt=Xe.length;dt<nt;dt++){const A=q(Xe[dt],te[dt],Be);ye(A.x,A.y,-de),oe===0&&I.push(A)}oe===0&&se.push(I)}}Te=rs.triangulateShape(ee,se)}const ht=Te.length,tt=g+_;for(let ee=0;ee<V;ee++){const se=u?q(R[ee],De[ee],tt):R[ee];x?(C.copy(w.normals[0]).multiplyScalar(se.x),b.copy(w.binormals[0]).multiplyScalar(se.y),v.copy(T[0]).add(C).add(b),ye(v.x,v.y,v.z)):ye(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<V;se++){const ae=u?q(R[se],De[se],tt):R[se];x?(C.copy(w.normals[ee]).multiplyScalar(ae.x),b.copy(w.binormals[ee]).multiplyScalar(ae.y),v.copy(T[ee]).add(C).add(b),ye(v.x,v.y,v.z)):ye(ae.x,ae.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const se=ee/m,ae=f*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+_;for(let de=0,Be=k.length;de<Be;de++){const Oe=q(k[de],$[de],oe);ye(Oe.x,Oe.y,d+ae)}for(let de=0,Be=L.length;de<Be;de++){const Oe=L[de];te=Q[de];for(let $e=0,Xe=Oe.length;$e<Xe;$e++){const I=q(Oe[$e],te[$e],oe);x?ye(I.x,I.y+T[h-1].y,T[h-1].x+ae):ye(I.x,I.y,d+ae)}}}lt(),Z();function lt(){const ee=s.length/3;if(u){let se=0,ae=V*se;for(let oe=0;oe<ht;oe++){const de=Te[oe];He(de[2]+ae,de[1]+ae,de[0]+ae)}se=h+m*2,ae=V*se;for(let oe=0;oe<ht;oe++){const de=Te[oe];He(de[0]+ae,de[1]+ae,de[2]+ae)}}else{for(let se=0;se<ht;se++){const ae=Te[se];He(ae[2],ae[1],ae[0])}for(let se=0;se<ht;se++){const ae=Te[se];He(ae[0]+V*h,ae[1]+V*h,ae[2]+V*h)}}n.addGroup(ee,s.length/3-ee,0)}function Z(){const ee=s.length/3;let se=0;j(k,se),se+=k.length;for(let ae=0,oe=L.length;ae<oe;ae++){const de=L[ae];j(de,se),se+=de.length}n.addGroup(ee,s.length/3-ee,1)}function j(ee,se){let ae=ee.length;for(;--ae>=0;){const oe=ae;let de=ae-1;de<0&&(de=ee.length-1);for(let Be=0,Oe=h+m*2;Be<Oe;Be++){const $e=V*Be,Xe=V*(Be+1),I=se+oe+$e,dt=se+de+$e,nt=se+de+Xe,A=se+oe+Xe;Me(I,dt,nt,A)}}}function ye(ee,se,ae){l.push(ee),l.push(se),l.push(ae)}function He(ee,se,ae){We(ee),We(se),We(ae);const oe=s.length/3,de=M.generateTopUV(n,s,oe-3,oe-2,oe-1);pt(de[0]),pt(de[1]),pt(de[2])}function Me(ee,se,ae,oe){We(ee),We(se),We(oe),We(se),We(ae),We(oe);const de=s.length/3,Be=M.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);pt(Be[0]),pt(Be[1]),pt(Be[3]),pt(Be[1]),pt(Be[2]),pt(Be[3])}function We(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function pt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return np(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qo[s.type]().fromJSON(s)),new El(n,e.options)}}const tp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-g),new re(_,1-p)]:[new re(o,1-l),new re(h,1-d),new re(f,1-g),new re(m,1-p)]}};function np(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pn extends ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pn(e.radius,e.detail)}}class rr extends Mt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,d=new P,u=new re,f=new P,g=new P,_=new P;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const T=n+M*h*s,x=Math.sin(T),w=Math.cos(T);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*x,d.y=e[b].y,d.z=e[b].x*w,a.push(d.x,d.y,d.z),u.x=M/t,u.y=b/(e.length-1),o.push(u.x,u.y);const C=l[3*b+0]*x,v=l[3*b+1],E=l[3*b+0]*w;c.push(C,v,E)}}for(let M=0;M<t;M++)for(let T=0;T<e.length-1;T++){const x=T+M*e.length,w=x,b=x+e.length,C=x+e.length+1,v=x+1;r.push(w,b,v),r.push(C,v,b)}this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.points,e.segments,e.phiStart,e.phiLength)}}class fs extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let T=0;T<c;T++){const x=T*d-r;g.push(x,-M,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),b=M+1+c*p;f.push(T,x,b),f.push(x,w,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class er extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new P,g=new re;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,T=M,x=M+n+1,w=M+n+2,b=M+1;o.push(T,x,b),o.push(x,w,b)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bt extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],T=p/n,x=a+T*o,w=e*Math.cos(x),b=Math.sqrt(e*e-w*w);let C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const E=v/t,R=s+E*r;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+C,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const T=h[p][M+1],x=h[p][M],w=h[p+1][M],b=h[p+1][M+1];(p!==0||a>0)&&f.push(T,x,b),(p!==n-1||l<Math.PI)&&f.push(x,w,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tn extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,x=(s+1)*_+m;l.push(p,M,x),l.push(M,T,x)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Mc(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ip(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const sp={clone:ps,merge:Jt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class op extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lp extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cp extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ga extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ud extends ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Za=new yt,bc=new P,wc=new P;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(bc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fr=new P,kr=new vs,Dn=new P;class pd extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fr,kr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,kr,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fr,kr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,kr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,Ec=new re,Tc=new re;class on extends pd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Tc),t.subVectors(Tc,Ec)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hp extends fd{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class is extends ga{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Tl extends pd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dp extends fd{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sa extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new dp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class md extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ki=-90,Qi=1;class up extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Ki,Qi,e,t);s.layers=this.layers,this.add(s);const r=new on(Ki,Qi,e,t);r.layers=this.layers,this.add(r);const a=new on(Ki,Qi,e,t);a.layers=this.layers,this.add(a);const o=new on(Ki,Qi,e,t);o.layers=this.layers,this.add(o);const l=new on(Ki,Qi,e,t);l.layers=this.layers,this.add(l);const c=new on(Ki,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fp extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class gd{static{gd.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function Ac(i,e,t,n){const s=mp(n);switch(t){case Bh:return i*e;case fl:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case Ti:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case zh:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case bo:return Math.max(i,16)*Math.max(e,8)/4;case _o:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case wo:case Eo:case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Kr:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case $o:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mp(i){switch(i){case ln:case Uh:return{byteLength:1,components:1};case $s:case Fh:case Gn:return{byteLength:2,components:1};case dl:case ul:return{byteLength:2,components:4};case Hn:case hl:case An:return{byteLength:4,components:1};case kh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);function vd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`uniform sampler2D dfgLUT;
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
}`,gm=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,U0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:vp,alphahash_pars_fragment:yp,alphamap_fragment:xp,alphamap_pars_fragment:_p,alphatest_fragment:Sp,alphatest_pars_fragment:Mp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Cp,bsdfs:Rp,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Up,color_fragment:Fp,color_pars_fragment:kp,color_pars_vertex:Op,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:$p,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Kp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:cm,envmap_vertex:jp,fog_vertex:em,fog_pars_vertex:tm,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:dm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:vm,lights_fragment_end:ym,lightprobes_pars_fragment:xm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:bm,map_fragment:wm,map_pars_fragment:Em,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Im,morphtarget_pars_vertex:Dm,morphtarget_vertex:Nm,normal_fragment_begin:Um,normal_fragment_maps:Fm,normal_pars_fragment:km,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:$m,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:d0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:v0,background_frag:y0,backgroundCube_vert:x0,backgroundCube_frag:_0,cube_vert:S0,cube_frag:M0,depth_vert:b0,depth_frag:w0,distance_vert:E0,distance_frag:T0,equirect_vert:A0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:N0,meshmatcap_vert:U0,meshmatcap_frag:F0,meshnormal_vert:k0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:$0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},ve={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},kn={basic:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Jt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Jt([ve.lights,ve.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};kn.physical={uniforms:Jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Or={r:0,b:0,g:0},K0=new yt,yd=new qe;yd.set(-1,0,0,0,1,0,0,0,1);function Q0(i,e,t,n,s,r){const a=new Ve(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const x=M.backgroundBlurriness>0;T=e.get(T,x)}return T}function g(M){let T=!1;const x=f(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===ua)?(c===void 0&&(c=new Pe(new _t(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=at.getTransfer(x.colorSpace)!==mt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pe(new fs(2,2),new Pn({name:"BackgroundMaterial",uniforms:ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Or,dd(i)),t.buffers.color.setClear(Or.r,Or.g,Or.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function j0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(L,N,B,F,k){let q=!1;const V=d(L,F,B,N);r!==V&&(r=V,c(r.object)),q=f(L,F,B,k),q&&g(L,F,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(L,N,B,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,N,B,F){const k=F.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const V=L.isInstancedMesh===!0?L.id:0;let ie=q[V];ie===void 0&&(ie={},q[V]=ie);let $=ie[B.id];$===void 0&&($={},ie[B.id]=$);let Q=$[k];return Q===void 0&&(Q=u(l()),$[k]=Q),Q}function u(L){const N=[],B=[],F=[];for(let k=0;k<t;k++)N[k]=0,B[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:F,object:L,attributes:{},index:null}}function f(L,N,B,F){const k=r.attributes,q=N.attributes;let V=0;const ie=B.getAttributes();for(const $ in ie)if(ie[$].location>=0){const te=k[$];let De=q[$];if(De===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(De=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(De=L.instanceColor)),te===void 0||te.attribute!==De||De&&te.data!==De.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(L,N,B,F){const k={},q=N.attributes;let V=0;const ie=B.getAttributes();for(const $ in ie)if(ie[$].location>=0){let te=q[$];te===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const De={};De.attribute=te,te&&te.data&&(De.data=te.data),k[$]=De,V++}r.attributes=k,r.attributesNum=V,r.index=F}function _(){const L=r.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const B=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;B[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),k[L]!==N&&(i.vertexAttribDivisor(L,N),k[L]=N)}function M(){const L=r.newAttributes,N=r.enabledAttributes;for(let B=0,F=N.length;B<F;B++)N[B]!==L[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function T(L,N,B,F,k,q,V){V===!0?i.vertexAttribIPointer(L,N,B,k,q):i.vertexAttribPointer(L,N,B,F,k,q)}function x(L,N,B,F){_();const k=F.attributes,q=B.getAttributes(),V=N.defaultAttributeValues;for(const ie in q){const $=q[ie];if($.location>=0){let Q=k[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,De=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const ht=Te.buffer,tt=Te.type,lt=Te.bytesPerElement,Z=tt===i.INT||tt===i.UNSIGNED_INT||Q.gpuType===hl;if(Q.isInterleavedBufferAttribute){const j=Q.data,ye=j.stride,He=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<$.locationSize;Me++)p($.location+Me,j.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<$.locationSize;Me++)m($.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Me=0;Me<$.locationSize;Me++)T($.location+Me,De/$.locationSize,tt,te,ye*lt,(He+De/$.locationSize*Me)*lt,Z)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,Q.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let j=0;j<$.locationSize;j++)T($.location+j,De/$.locationSize,tt,te,De*lt,De/$.locationSize*j*lt,Z)}}else if(V!==void 0){const te=V[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv($.location,te);break;case 3:i.vertexAttrib3fv($.location,te);break;case 4:i.vertexAttrib4fv($.location,te);break;default:i.vertexAttrib1fv($.location,te)}}}}M()}function w(){E();for(const L in n){const N=n[L];for(const B in N){const F=N[B];for(const k in F){const q=F[k];for(const V in q)h(q[V].object),delete q[V];delete F[k]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const B in N){const F=N[B];for(const k in F){const q=F[k];for(const V in q)h(q[V].object),delete q[V];delete F[k]}}delete n[L.id]}function C(L){for(const N in n){const B=n[N];for(const F in B){const k=B[F];if(k[L.id]===void 0)continue;const q=k[L.id];for(const V in q)h(q[V].object),delete q[V];delete k[L.id]}}}function v(L){for(const N in n){const B=n[N],F=L.isInstancedMesh===!0?L.id:0,k=B[F];if(k!==void 0){for(const q in k){const V=k[q];for(const ie in V)h(V[ie].object),delete V[ie];delete k[q]}delete B[F],Object.keys(B).length===0&&delete n[N]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function eg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&C!==An&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:w,samples:b}}function ng(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new hi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,T=M*4;let x=p.clippingState||null;l.value=x,x=h(g,u,T,f);for(let w=0;w!==T;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const as=4,ig=6,sg=20,rg=256,Ps=new Tl,Cc=new Ve;let Ja=null,Ka=0,Qa=0,ja=!1;const ag=new P,Mi=new P;class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ag}=r;Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Ka,Qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Gn,format:Cn,colorSpace:jr,depthBuffer:!1},s=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(r)),this._blurMaterial=cg(r,e,t),this._ggxMaterial=lg(r,e,t)}return s}_compileMaterial(e){const t=new Pe(new Mt,e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Cc),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new _t,new wn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Cc),p=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;ji(s,x*w,T>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ei||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-as?n-g+as:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ji(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ps),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ji(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Ps)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-as?s-this._lodMax+as:0),u=4*(this._cubeSize-h);ji(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ps)}}function og(i){const e=[],t=[];let n=i;const s=i-as+1+ig;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,T=p>2?0:-1,x=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(x,f*u*p);for(let w=0;w<u;w++){const b=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?Mi.set(1,C,b):p===1?Mi.set(-b,1,-C):p===2?Mi.set(-b,C,1):p===3?Mi.set(-1,C,-b):p===4?Mi.set(-b,-1,C):Mi.set(b,C,-1),Mi.toArray(_,(p*u+w)*f)}}const m=new Mt;m.setAttribute("position",new Ht(g,f)),m.setAttribute("outputDirection",new Ht(_,f)),t.push(new Pe(m,null)),n>as&&n--}return{lodMeshes:t,sizeLods:e}}function Pc(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lg(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cg(i,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Lc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ic(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xd extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _t(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;const a=new Pe(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=$t),new up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function hg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Sa||f===Ma)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new xd(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Sa||f===Ma,_=f===Ei||f===hs;if(g||_){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Rc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Rc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Sa?u.mapping=Ei:f===Ma&&(u.mapping=hs),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let T=0,x=M.length;T<x;T+=3){const w=M[T+0],b=M[T+1],C=M[T+2];u.push(w,b,b,C,C,w)}}else{const M=g.array;_=g.version;for(let T=0,x=M.length/3-1;T<x;T+=3){const w=T+0,b=T+1,C=T+2;u.push(w,b,b,C,C,w)}}const m=new(g.count>=65535?Yh:qh)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function fg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,e,t){const n=new WeakMap,s=new Ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*b*4*d),v=new Vh(C,w,b,d);v.type=An,v.needsUpdate=!0;const E=x*4;for(let L=0;L<d;L++){const N=p[L],B=M[L],F=T[L],k=w*b*4*L;for(let q=0;q<N.count;q++){const V=q*E;g===!0&&(s.fromBufferAttribute(N,q),C[k+V+0]=s.x,C[k+V+1]=s.y,C[k+V+2]=s.z,C[k+V+3]=0),_===!0&&(s.fromBufferAttribute(B,q),C[k+V+4]=s.x,C[k+V+5]=s.y,C[k+V+6]=s.z,C[k+V+7]=0),m===!0&&(s.fromBufferAttribute(F,q),C[k+V+8]=s.x,C[k+V+9]=s.y,C[k+V+10]=s.z,C[k+V+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new re(w,b)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function gg(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const vg={[Ch]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[cl]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function yg(i,e,t,n,s,r){const a=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Mt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));const h=new op({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(c,h),u=new Tl(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,M=[],T=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),l!==null&&l.setSize(x,w);for(let b=0;b<M.length;b++){const C=M[b];C.setSize&&C.setSize(x,w)}},this.setEffects=function(x){M=x,T=M.length>0&&M[0].isRenderPass===!0;const w=a.width,b=a.height;M.length>0&&o===null&&(o=new Rn(w,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(w,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const v=M[C];v.setSize&&v.setSize(w,b)}},this.begin=function(x,w){if(_||x.toneMapping===Bn&&M.length===0)return!1;if(p=w,w!==null){const b=w.width,C=w.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Bn,!0},this.hasRenderPass=function(){return T},this.end=function(x,w){x.toneMapping=m,_=!0;let b=a,C=o;for(let v=0;v<M.length;v++){const E=M[v];E.enabled!==!1&&(E.render(x,C,b,w),E.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},at.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");const v=vg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const _d=new Xt,tl=new Js(1,1),Sd=new Vh,Md=new sf,bd=new jh,Dc=[],Nc=[],Uc=new Float32Array(16),Fc=new Float32Array(9),kc=new Float32Array(4);function xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dc[s];if(r===void 0&&(r=new Float32Array(s),Dc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),kt(t,n)}}function wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),kt(t,n)}}function Eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),kt(t,n)}}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=t.isReversedDepthBuffer()?yl:vl,r=tl):r=_d,t.setTexture2D(e||r,s)}function Ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Md,s)}function Fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bd,s)}function kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sd,s)}function Og(i){switch(i){case 5126:return xg;case 35664:return _g;case 35665:return Sg;case 35666:return Mg;case 35674:return bg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Rg;case 5125:return Pg;case 36294:return Lg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return kg}}function Bg(i,e){i.uniform1fv(this.addr,e)}function zg(i,e){const t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Hg(i,e){const t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Gg(i,e){const t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Vg(i,e){const t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wg(i,e){const t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){const t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xg(i,e){i.uniform1iv(this.addr,e)}function qg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Jg(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function ev(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=tl:a=_d;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Md,r[a])}function nv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bd,r[a])}function iv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sd,r[a])}function sv(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return $g;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return Qg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Oc(i,e){i.seq.push(e),i.map[e.id]=e}function lv(i,e,t){const n=i.name,s=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oc(t,c===void 0?new rv(o,i,e):new av(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new ov(o),Oc(t,d)),t=d}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);lv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cv=37297;let hv=0;function dv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zc=new qe;function uv(i){at._getMatrix(zc,at.workingColorSpace,i);const e=`mat3( ${zc.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(e),o)}else return r}function fv(i,e){const t=uv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const pv={[Ch]:"Linear",[Rh]:"Reinhard",[Ph]:"Cineon",[cl]:"ACESFilmic",[Ih]:"AgX",[Dh]:"Neutral",[Lh]:"Custom"};function mv(i,e){const t=pv[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new P;function gv(){at.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function yv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Us(i){return i!==""}function Gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(_v,Mv)}const Sv=new Map;function Mv(i,e){let t=Je[e];if(t===void 0){const n=Sv.get(e);if(n!==void 0)t=Je[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nl(t)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(bv,wv)}function wv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Ev={[Gr]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Tv(i){return Ev[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Av={[Ei]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function Cv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rv={[hs]:"ENVMAP_MODE_REFRACTION"};function Pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lv={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[_u]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function Iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lv[i.combine]||"ENVMAP_BLENDING_NONE"}function Dv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tv(t),c=Cv(t),h=Pv(t),d=Iv(t),u=Dv(t),f=vv(t),g=yv(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=nl(a),a=Gc(a,t),a=Vc(a,t),o=nl(o),o=Gc(o,t),o=Vc(o,t),a=Wc(a),o=Wc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+a,x=M+p+o,w=Bc(s,s.VERTEX_SHADER,T),b=Bc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(b)||"",k=N.trim(),q=B.trim(),V=F.trim();let ie=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,b);else{const Q=Hc(s,w,"vertex"),te=Hc(s,b,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+te)}else k!==""?Ge("WebGLProgram: Program Info Log:",k):(q===""||V==="")&&($=!1);$&&(L.diagnostics={runnable:ie,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(w),s.deleteShader(b),v=new qr(s,_),E=xv(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,cv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let Uv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kv(e),t.set(e,n)),n}}class kv{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function Ov(i){return i===Ti||i===Kr||i===Qr}function Bv(i,e,t,n,s,r){const a=new Wh,o=new Fv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,R,L,N,B){const F=L.fog,k=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||q,V),$=ie&&ie.mapping===ua?ie.image.height:null,Q=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,De=te!==void 0?te.length:0;let Te=0;k.morphAttributes.position!==void 0&&(Te=1),k.morphAttributes.normal!==void 0&&(Te=2),k.morphAttributes.color!==void 0&&(Te=3);let ht,tt,lt,Z;if(Q){const bt=kn[Q];ht=bt.vertexShader,tt=bt.fragmentShader}else{ht=v.vertexShader,tt=v.fragmentShader;const bt=o.getVertexShaderStage(v),ut=o.getFragmentShaderStage(v);o.update(v,bt,ut),lt=bt.id,Z=ut.id}const j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,We=!!v.map,pt=!!v.matcap,ee=!!ie,se=!!v.aoMap,ae=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,Be=!!v.displacementMap,Oe=!!v.emissiveMap,$e=!!v.metalnessMap,Xe=!!v.roughnessMap,I=v.anisotropy>0,dt=v.clearcoat>0,nt=v.dispersion>0,A=v.retroreflectivity>0,y=v.iridescence>0,O=v.sheen>0,G=v.transmission>0,X=I&&!!v.anisotropyMap,le=dt&&!!v.clearcoatMap,he=dt&&!!v.clearcoatNormalMap,Y=dt&&!!v.clearcoatRoughnessMap,K=y&&!!v.iridescenceMap,ue=y&&!!v.iridescenceThicknessMap,Ue=O&&!!v.sheenColorMap,ge=O&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Fe=!!v.specularColorMap,ze=!!v.specularIntensityMap,Ye=G&&!!v.transmissionMap,U=G&&!!v.thicknessMap,pe=!!v.gradientMap,J=!!v.alphaMap,me=v.alphaTest>0,Se=!!v.alphaHash,ne=!!v.extensions;let ke=Bn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=i.toneMapping);const Le={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:tt,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:pt,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:$,aoMap:se,lightMap:ae,bumpMap:oe,normalMap:de,displacementMap:Be,emissiveMap:Oe,normalMapObjectSpace:de&&v.normalMapType===wu,normalMapTangentSpace:de&&v.normalMapType===Jo,packedNormalMap:de&&v.normalMapType===Jo&&Ov(v.normalMap.format),metalnessMap:$e,roughnessMap:Xe,anisotropy:I,anisotropyMap:X,clearcoat:dt,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:Y,dispersion:nt,retroreflection:A,iridescence:y,iridescenceMap:K,iridescenceThicknessMap:ue,sheen:O,sheenColorMap:Ue,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:Fe,specularIntensityMap:ze,transmission:G,transmissionMap:Ye,thicknessMap:U,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:Se,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:ae&&g(v.lightMap.channel),bumpMapUv:oe&&g(v.bumpMap.channel),normalMapUv:de&&g(v.normalMap.channel),displacementMapUv:Be&&g(v.displacementMap.channel),emissiveMapUv:Oe&&g(v.emissiveMap.channel),metalnessMapUv:$e&&g(v.metalnessMap.channel),roughnessMapUv:Xe&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:le&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(v.sheenRoughnessMap.channel),specularMapUv:fe&&g(v.specularMap.channel),specularColorMapUv:Fe&&g(v.specularColorMap.channel),specularIntensityMapUv:ze&&g(v.specularIntensityMap.channel),transmissionMapUv:Ye&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:J&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(de||I),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(We||J),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Te,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const E=f[v.type];let R;if(E){const L=kn[E];R=sp.clone(L.uniforms)}else R=v.uniforms;return R}function x(v,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new Nv(i,E,v,s),c.push(R),h.set(E,R)),R}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function zv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);const T=o(u,f,g,_,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(u,f,g,_,m,p){const M=o(u,f,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||Hv),n.length>1&&n.sort(f||Xc),s.length>1&&s.sort(f||Xc)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Gv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new qc,i.set(n,[a])):s>=r.length?(a=new qc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $v=0;function Xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qv(i){const e=new Vv,t=Wv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new yt,a=new yt;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,T=0,x=0,w=0,b=0,C=0,v=0,E=0,R=0;c.sort(Xv);for(let N=0,B=c.length;N<B;N++){const F=c[N],k=F.color,q=F.intensity,V=F.distance;let ie=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ti?ie=F.shadow.map.texture:ie=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],q);R++}else if(F.isSunLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,te=t.get(F);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ie;const De=Q.getViewportCount();for(let Te=0;Te<De;Te++)n.sunShadowMatrix[_+Te]=Q.getMatrix(Te),n.sunShadowCascade[_+Te]=Q._cascadeData[Te];_+=De,g++}n.sun[f]=$,f++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,te=t.get(F);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=F.shadow.matrix,w++}n.directional[m]=$,m++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(k).multiplyScalar(q),$.distance=V,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[M]=$;const Q=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,Q.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[M]=Q.matrix,F.castShadow){const te=t.get(F);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ie,C++}M++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(k).multiplyScalar(q),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[T]=$,T++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const Q=F.shadow,te=t.get(F);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=F.shadow.matrix,b++}n.point[p]=$,p++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(q),$.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[x]=$,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=v,L.numLightProbes=R,n.version=$v++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const x=c[M];if(x.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(x.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Yc(i){const e=new qv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Yv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yc(i),e.set(s,[o])):r>=a.length?(o=new Yc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`,Kv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Qv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Zc=new yt,Ls=new P,to=new P;function jv(i,e,t){let n=new Ml;const s=new re,r=new re,a=new Ct,o=new lp,l=new cp,c={},h=t.maxTextureSize,d={[mi]:Qt,[Qt]:mi,[en]:en},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Zv,fragmentShader:Jv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===tu&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const E=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=b.length;F<k;F++){const q=b[F],V=q.shadow;if(V===void 0){Ge("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ds){if(q.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Rn(s.x,s.y,{format:Ti,type:Gn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Js(s.x,s.y,An),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=jn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt}else q.isPointLight?(V.map=new xd(s.x),V.map.depthTexture=new bf(s.x,Hn)):(V.map=new Rn(s.x,s.y),V.map.depthTexture=new Js(s.x,s.y,Hn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=jn,this.type===Gr?(V.map.depthTexture.compareFunction=$?yl:vl,V.map.depthTexture.minFilter=$t,V.map.depthTexture.magFilter=$t):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,v);for(let te=0;te<Q;te++){const De=V.getCamera(te);if(q.isPointLight){const Te=V.camera,ht=V.matrix,tt=q.distance||Te.far;tt!==Te.far&&(Te.far=tt,Te.updateProjectionMatrix()),Ls.setFromMatrixPosition(q.matrixWorld),Te.position.copy(Ls),to.copy(Te.position),to.add(Kv[te]),Te.up.copy(Qv[te]),Te.lookAt(to),Te.updateMatrixWorld(),ht.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Zc.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Zc,Te.coordinateSystem,Te.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,te),i.clear();else{te===0&&(i.setRenderTarget(V.map),i.clear());const Te=V.getViewport(te);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),N.viewport(a)}n=V.getFrustum(te),x(C,v,De,q,this.type)}V.isPointLightShadow!==!0&&this.type===Ds&&M(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,L)};function M(b,C){const v=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Rn(s.x,s.y,{format:Ti,type:Gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,f,_,null)}function T(b,C,v,E){let R=null;const L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=R.uuid,B=C.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let k=F[B];k===void 0&&(k=R.clone(),F[B]=k,C.addEventListener("dispose",w)),R=k}if(R.visible=C.visible,R.wireframe=C.wireframe,E===Ds?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=v}return R}function x(b,C,v,E,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ds)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const B=e.update(b),F=b.material;if(Array.isArray(F)){const k=B.groups;for(let q=0,V=k.length;q<V;q++){const ie=k[q],$=F[ie.materialIndex];if($&&$.visible){const Q=T(b,$,E,R);b.onBeforeShadow(i,b,C,v,B,Q,ie),i.renderBufferDirect(v,null,B,Q,b,ie),b.onAfterShadow(i,b,C,v,B,Q,ie)}}}else if(F.visible){const k=T(b,F,E,R);b.onBeforeShadow(i,b,C,v,B,k,null),i.renderBufferDirect(v,null,B,k,b,null),b.onAfterShadow(i,b,C,v,B,k,null)}}const N=b.children;for(let B=0,F=N.length;B<F;B++)x(N[B],C,v,E,R)}function w(b){b.target.removeEventListener("dispose",w);for(const v in c){const E=c[v],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function ey(i,e){function t(){let U=!1;const pe=new Ct;let J=null;const me=new Ct(0,0,0,0);return{setMask:function(Se){J!==Se&&!U&&(i.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){U=Se},setClear:function(Se,ne,ke,Le,bt){bt===!0&&(Se*=Le,ne*=Le,ke*=Le),pe.set(Se,ne,ke,Le),me.equals(pe)===!1&&(i.clearColor(Se,ne,ke,Le),me.copy(pe))},reset:function(){U=!1,J=null,me.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,J=null,me=null,Se=null;return{setReversed:function(ne){if(pe!==ne){const ke=e.get("EXT_clip_control");ne?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),pe=ne;const Le=Se;Se=null,this.setClear(Le)}},getReversed:function(){return pe},setTest:function(ne){ne?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!U&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(pe&&(ne=Uu[ne]),me!==ne){switch(ne){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){U=ne},setClear:function(ne){Se!==ne&&(Se=ne,pe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){U=!1,J=null,me=null,Se=null,pe=!1}}}function s(){let U=!1,pe=null,J=null,me=null,Se=null,ne=null,ke=null,Le=null,bt=null;return{setTest:function(ut){U||(ut?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ut){pe!==ut&&!U&&(i.stencilMask(ut),pe=ut)},setFunc:function(ut,xn,Ln){(J!==ut||me!==xn||Se!==Ln)&&(i.stencilFunc(ut,xn,Ln),J=ut,me=xn,Se=Ln)},setOp:function(ut,xn,Ln){(ne!==ut||ke!==xn||Le!==Ln)&&(i.stencilOp(ut,xn,Ln),ne=ut,ke=xn,Le=Ln)},setLocked:function(ut){U=ut},setClear:function(ut){bt!==ut&&(i.clearStencil(ut),bt=ut)},reset:function(){U=!1,pe=null,J=null,me=null,Se=null,ne=null,ke=null,Le=null,bt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,T=null,x=null,w=null,b=null,C=null,v=new Ve(0,0,0),E=0,R=!1,L=null,N=null,B=null,F=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ie>=2);let Q=null,te={};const De=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),ht=new Ct().fromArray(De),tt=new Ct().fromArray(Te);function lt(U,pe,J,me){const Se=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<J;ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(pe+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ne}const Z={};Z[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ws),oe(!1),de(Hl),j(i.CULL_FACE),se(Jn);function j(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function He(U,pe){return u[U]!==pe?(i.bindFramebuffer(U,pe),u[U]=pe,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(U,pe){let J=g,me=!1;if(U){J=f.get(pe),J===void 0&&(J=[],f.set(pe,J));const Se=U.textures;if(J.length!==Se.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,ke=Se.length;ne<ke;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=Se.length,me=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,me=!0);me&&i.drawBuffers(J)}function We(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const pt={[ns]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};pt[ru]=i.MIN,pt[au]=i.MAX;const ee={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[du]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Th]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function se(U,pe,J,me,Se,ne,ke,Le,bt,ut){if(U===Jn){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),U!==nu){if(U!==p||ut!==R){if((M!==ns||w!==ns)&&(i.blendEquation(i.FUNC_ADD),M=ns,w=ns),ut)switch(U){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",U);break}else switch(U){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",U);break}T=null,x=null,b=null,C=null,v.set(0,0,0),E=0,p=U,R=ut}return}Se=Se||pe,ne=ne||J,ke=ke||me,(pe!==M||Se!==w)&&(i.blendEquationSeparate(pt[pe],pt[Se]),M=pe,w=Se),(J!==T||me!==x||ne!==b||ke!==C)&&(i.blendFuncSeparate(ee[J],ee[me],ee[ne],ee[ke]),T=J,x=me,b=ne,C=ke),(Le.equals(v)===!1||bt!==E)&&(i.blendColor(Le.r,Le.g,Le.b,bt),v.copy(Le),E=bt),p=U,R=!1}function ae(U,pe){U.side===en?ye(i.CULL_FACE):j(i.CULL_FACE);let J=U.side===Qt;pe&&(J=!J),oe(J),U.blending===Os&&U.transparent===!1?se(Jn):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function de(U){U!==jd?(j(i.CULL_FACE),U!==N&&(U===Hl?i.cullFace(i.BACK):U===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),N=U}function Be(U){U!==B&&(V&&i.lineWidth(U),B=U)}function Oe(U,pe,J){U?(j(i.POLYGON_OFFSET_FILL),(F!==pe||k!==J)&&(F=pe,k=J,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,J))):ye(i.POLYGON_OFFSET_FILL)}function $e(U){U?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Xe(U){U===void 0&&(U=i.TEXTURE0+q-1),Q!==U&&(i.activeTexture(U),Q=U)}function I(U,pe,J){J===void 0&&(Q===null?J=i.TEXTURE0+q-1:J=Q);let me=te[J];me===void 0&&(me={type:void 0,texture:void 0},te[J]=me),(me.type!==U||me.texture!==pe)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(U,pe||Z[U]),me.type=U,me.texture=pe)}function dt(){const U=te[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function le(){try{i.texStorage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function he(){try{i.texStorage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Y(){try{i.texImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function K(){try{i.texImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function ue(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Ue(U,pe){d[U]!==pe&&(i.pixelStorei(U,pe),d[U]=pe)}function ge(U){ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function fe(U){tt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function Fe(U,pe){let J=c.get(pe);J===void 0&&(J=new WeakMap,c.set(pe,J));let me=J.get(U);me===void 0&&(me=i.getUniformBlockIndex(pe,U.name),J.set(U,me))}function ze(U,pe){const me=c.get(pe).get(U);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,U.__bindingPointIndex),l.set(pe,me))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,te={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,T=null,x=null,w=null,b=null,C=null,v=new Ve(0,0,0),E=0,R=!1,L=null,N=null,B=null,F=null,k=null,ht.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ye,bindFramebuffer:He,drawBuffers:Me,useProgram:We,setBlending:se,setMaterial:ae,setFlipSided:oe,setCullFace:de,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:$e,activeTexture:Xe,bindTexture:I,unbindTexture:dt,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:Y,texImage3D:K,pixelStorei:Ue,getParameter:ue,updateUBOMapping:Fe,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:he,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ge,viewport:fe,reset:Ye}}function ty(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return g?new OffscreenCanvas(A,y):ta("canvas")}function m(A,y,O){let G=1;const X=nt(A);if((X.width>O||X.height>O)&&(G=O/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const le=Math.floor(G*X.width),he=Math.floor(G*X.height);u===void 0&&(u=_(le,he));const Y=y?_(le,he):u;return Y.width=le,Y.height=he,Y.getContext("2d").drawImage(A,0,0,le,he),Ge("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+le+"x"+he+")."),Y}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,y,O,G,X,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),O===i.SHORT&&he&&(Y=he.R16_SNORM_EXT)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),O===i.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),O===i.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){const K=le?ea:at.getTransfer(X);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=K===mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),O===i.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(A,y){let O;return A?y===null||y===Hn||y===Xs?O=i.DEPTH24_STENCIL8:y===An?O=i.DEPTH32F_STENCIL8:y===$s&&(O=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hn||y===Xs?O=i.DEPTH_COMPONENT24:y===An?O=i.DEPTH_COMPONENT32F:y===$s&&(O=i.DEPTH_COMPONENT16),O}function b(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==$t?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(A){const y=A.target;y.removeEventListener("dispose",v),L(y)}function E(A){const y=n.get(A);if(y.__webglInit===void 0)return;const O=A.source,G=f.get(O);if(G){const X=G[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(A),Object.keys(G).length===0&&f.delete(O)}n.remove(A)}function R(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const O=A.source,G=f.get(O);delete G[y.__cacheKey],a.memory.textures--}function L(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let X=0;X<y.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(y.__webglFramebuffer[G][X]);else i.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)i.deleteFramebuffer(y.__webglFramebuffer[G]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let G=0,X=O.length;G<X;G++){const le=n.get(O[G]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(A)}let N=0;function B(){N=0}function F(){return N}function k(A){N=A}function q(){const A=N;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ie(A,y){const O=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const G=A.image;if(G===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,A,y);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function $(A,y){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ye(O,A,y);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Q(A,y){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ye(O,A,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function te(A,y){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){He(O,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const De={[yo]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},Te={[zt]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},ht={[Tu]:i.NEVER,[Lu]:i.ALWAYS,[Au]:i.LESS,[vl]:i.LEQUAL,[Cu]:i.EQUAL,[yl]:i.GEQUAL,[Ru]:i.GREATER,[Pu]:i.NOTEQUAL};function tt(A,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$t||y.magFilter===ba||y.magFilter===hr||y.magFilter===bi||y.minFilter===$t||y.minFilter===ba||y.minFilter===hr||y.minFilter===bi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,De[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,De[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,De[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Te[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ht[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==hr&&y.minFilter!==bi||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function lt(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const G=y.source;let X=f.get(G);X===void 0&&(X={},f.set(G,X));const le=V(y);if(le!==A.__cacheKey){X[le]===void 0&&(X[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[le].usedTimes++;const he=X[A.__cacheKey];he!==void 0&&(X[A.__cacheKey].usedTimes--,he.usedTimes===0&&R(y)),A.__cacheKey=le,A.__webglTexture=X[le].texture}return O}function Z(A,y,O){return Math.floor(Math.floor(A/O)/y)}function j(A,y,O,G){const le=A.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,G,y.data);else{le.sort((Ue,ge)=>Ue.start-ge.start);let he=0;for(let Ue=1;Ue<le.length;Ue++){const ge=le[he],fe=le[Ue],Fe=ge.start+ge.count,ze=Z(fe.start,y.width,4),Ye=Z(ge.start,y.width,4);fe.start<=Fe+1&&ze===Ye&&Z(fe.start+fe.count-1,y.width,4)===ze?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++he,le[he]=fe)}le.length=he+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ue=0,ge=le.length;Ue<ge;Ue++){const fe=le[Ue],Fe=Math.floor(fe.start/4),ze=Math.ceil(fe.count/4),Ye=Fe%y.width,U=Math.floor(Fe/y.width),pe=ze,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ye,U,pe,J,O,G,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function ye(A,y,O){let G=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=i.TEXTURE_3D);const X=lt(A,y),le=y.source;t.bindTexture(G,A.__webglTexture,i.TEXTURE0+O);const he=n.get(le);if(le.version!==he.__version||X===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const J=at.getPrimaries(at.workingColorSpace),me=y.colorSpace===di?null:at.getPrimaries(y.colorSpace),Se=y.colorSpace===di||J===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let K=m(y.image,!1,s.maxTextureSize);K=dt(y,K);const ue=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let ge=x(y.internalFormat,ue,Ue,y.normalized,y.colorSpace,y.isVideoTexture);tt(G,y);let fe;const Fe=y.mipmaps,ze=y.isVideoTexture!==!0,Ye=he.__version===void 0||X===!0,U=le.dataReady,pe=b(y,K);if(y.isDepthTexture)ge=w(y.format===wi,y.type),Ye&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,ue,Ue,null));else if(y.isDataTexture)if(Fe.length>0){ze&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Fe[0].width,Fe[0].height);for(let J=0,me=Fe.length;J<me;J++)fe=Fe[J],ze?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,J,ge,fe.width,fe.height,0,ue,Ue,fe.data);y.generateMipmaps=!1}else ze?(Ye&&t.texStorage2D(i.TEXTURE_2D,pe,ge,K.width,K.height),U&&j(y,K,ue,Ue)):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,ue,Ue,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Fe[0].width,Fe[0].height,K.depth);for(let J=0,me=Fe.length;J<me;J++)if(fe=Fe[J],y.format!==Cn)if(ue!==null)if(ze){if(U)if(y.layerUpdates.size>0){const Se=Ac(fe.width,fe.height,y.format,y.type);for(const ne of y.layerUpdates){const ke=fe.data.subarray(ne*Se/fe.data.BYTES_PER_ELEMENT,(ne+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,fe.width,fe.height,1,ue,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,K.depth,ue,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,K.depth,0,fe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,K.depth,ue,Ue,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,K.depth,0,ue,Ue,fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ze&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Fe[0].width,Fe[0].height);for(let J=0,me=Fe.length;J<me;J++)fe=Fe[J],y.format!==Cn?ue!==null?ze?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ge,fe.width,fe.height,0,fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,ue,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,J,ge,fe.width,fe.height,0,ue,Ue,fe.data)}else if(y.isDataArrayTexture)if(ze){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,K.width,K.height,K.depth),U)if(y.layerUpdates.size>0){const J=Ac(K.width,K.height,y.format,y.type);for(const me of y.layerUpdates){const Se=K.data.subarray(me*J/K.data.BYTES_PER_ELEMENT,(me+1)*J/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,K.width,K.height,1,ue,Ue,Se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,Ue,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,ue,Ue,K.data);else if(y.isData3DTexture)ze?(Ye&&t.texStorage3D(i.TEXTURE_3D,pe,ge,K.width,K.height,K.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,Ue,K.data)):t.texImage3D(i.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,ue,Ue,K.data);else if(y.isFramebufferTexture){if(Ye)if(ze)t.texStorage2D(i.TEXTURE_2D,pe,ge,K.width,K.height);else{let J=K.width,me=K.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,ge,J,me,0,ue,Ue,null),J>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),d.add(y),J.onpaint=me=>{const Se=me.changedElements;for(const ne of d)Se.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Se=i.RGBA,ne=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ne,ke,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(ze&&Ye){const J=nt(Fe[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,J.width,J.height)}for(let J=0,me=Fe.length;J<me;J++)fe=Fe[J],ze?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue,Ue,fe):t.texImage2D(i.TEXTURE_2D,J,ge,ue,Ue,fe);y.generateMipmaps=!1}else if(ze){if(Ye){const J=nt(K);t.texStorage2D(i.TEXTURE_2D,pe,ge,J.width,J.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ue,K)}else t.texImage2D(i.TEXTURE_2D,0,ge,ue,Ue,K);p(y)&&M(G),he.__version=le.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function He(A,y,O){if(y.image.length!==6)return;const G=lt(A,y),X=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const le=n.get(X);if(X.version!==le.__version||G===!0){t.activeTexture(i.TEXTURE0+O);const he=at.getPrimaries(at.workingColorSpace),Y=y.colorSpace===di?null:at.getPrimaries(y.colorSpace),K=y.colorSpace===di||he===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Ue=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!ue&&!Ue?ge[ne]=m(y.image[ne],!0,s.maxCubemapSize):ge[ne]=Ue?y.image[ne].image:y.image[ne],ge[ne]=dt(y,ge[ne]);const fe=ge[0],Fe=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Ye=x(y.internalFormat,Fe,ze,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pe=le.__version===void 0||G===!0,J=X.dataReady;let me=b(y,fe);tt(i.TEXTURE_CUBE_MAP,y);let Se;if(ue){U&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ye,fe.width,fe.height);for(let ne=0;ne<6;ne++){Se=ge[ne].mipmaps;for(let ke=0;ke<Se.length;ke++){const Le=Se[ke];y.format!==Cn?Fe!==null?U?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke,Ye,Le.width,Le.height,0,Le.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke,0,0,Le.width,Le.height,Fe,ze,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke,Ye,Le.width,Le.height,0,Fe,ze,Le.data)}}}else{if(Se=y.mipmaps,U&&pe){Se.length>0&&me++;const ne=nt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ue){U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Fe,ze,ge[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,ge[ne].width,ge[ne].height,0,Fe,ze,ge[ne].data);for(let ke=0;ke<Se.length;ke++){const bt=Se[ke].image[ne].image;U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke+1,0,0,bt.width,bt.height,Fe,ze,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke+1,Ye,bt.width,bt.height,0,Fe,ze,bt.data)}}else{U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Fe,ze,ge[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Fe,ze,ge[ne]);for(let ke=0;ke<Se.length;ke++){const Le=Se[ke];U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke+1,0,0,Fe,ze,Le.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke+1,Ye,Fe,ze,Le.image[ne])}}}p(y)&&M(i.TEXTURE_CUBE_MAP),le.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Me(A,y,O,G,X,le){const he=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),K=x(O.internalFormat,he,Y,O.normalized,O.colorSpace),ue=n.get(y),Ue=n.get(O);if(Ue.__renderTarget=y,!ue.__hasExternalTextures){const ge=Math.max(1,y.width>>le),fe=Math.max(1,y.height>>le);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,le,K,ge,fe,y.depth,0,he,Y,null):t.texImage2D(X,le,K,ge,fe,0,he,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,Ue.__webglTexture,0,$e(y)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,Ue.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(A,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const G=y.depthTexture,X=G&&G.isDepthTexture?G.type:null,le=w(y.stencilBuffer,X),he=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(y),le,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(y),le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,A)}else{const G=y.textures;for(let X=0;X<G.length;X++){const le=G[X],he=r.convert(le.format,le.colorSpace),Y=r.convert(le.type),K=x(le.internalFormat,he,Y,le.normalized,le.colorSpace);Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(y),K,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(y),K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,y,O){const G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y.depthTexture);const ue=r.convert(y.depthTexture.format),Ue=r.convert(y.depthTexture.type);let ge;y.depthTexture.format===jn?ge=i.DEPTH_COMPONENT24:y.depthTexture.format===wi&&(ge=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,y.width,y.height,0,ue,Ue,null)}}else ie(y.depthTexture,0);const le=X.__webglTexture,he=$e(y),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,K=y.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===jn)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,le,0);else if(y.depthTexture.format===wi)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(A){const y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=G}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)pt(y.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?pt(y.__webglFramebuffer[0],A,0):pt(y.__webglFramebuffer,A,0)}else if(O){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=i.createRenderbuffer(),We(y.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,le)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),We(y.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,y,O){const G=n.get(A);y!==void 0&&Me(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ee(A)}function ae(A){const y=A.texture,O=n.get(A),G=n.get(y);A.addEventListener("dispose",v);const X=A.textures,le=A.isWebGLCubeRenderTarget===!0,he=X.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=y.version,a.memory.textures++),le){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[Y][K]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(he)for(let Y=0,K=X.length;Y<K;Y++){const ue=n.get(X[Y]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Xe(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){const K=X[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ue=r.convert(K.format,K.colorSpace),Ue=r.convert(K.type),ge=x(K.internalFormat,ue,Ue,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),fe=$e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),We(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)Me(O.__webglFramebuffer[Y][K],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Me(O.__webglFramebuffer[Y],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,K=X.length;Y<K;Y++){const ue=X[Y],Ue=n.get(ue);let ge=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ue.__webglTexture),tt(ge,ue),Me(O.__webglFramebuffer,A,ue,i.COLOR_ATTACHMENT0+Y,ge,0),p(ue)&&M(ge)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),tt(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)Me(O.__webglFramebuffer[K],A,y,i.COLOR_ATTACHMENT0,Y,K);else Me(O.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Y,0);p(y)&&M(Y),t.unbindTexture()}A.depthBuffer&&ee(A)}function oe(A){const y=A.textures;for(let O=0,G=y.length;O<G;O++){const X=y[O];if(p(X)){const le=T(A),he=n.get(X).__webglTexture;t.bindTexture(le,he),M(le),t.unbindTexture()}}}const de=[],Be=[];function Oe(A){if(A.samples>0){if(Xe(A)===!1){const y=A.textures,O=A.width,G=A.height;let X=i.COLOR_BUFFER_BIT;const le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(A),Y=y.length>1;if(Y)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const K=A.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Ue=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,X,i.NEAREST),l===!0&&(de.length=0,Be.length=0,de.push(i.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(de.push(le),Be.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Ue=n.get(y[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function $e(A){return Math.min(s.maxSamples,A.samples)}function Xe(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function dt(A,y){const O=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==jr&&O!==di&&(at.getTransfer(O)===mt?(G!==Cn||X!==ln)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",O)),y}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ny(i,e){function t(n,s=di){let r;const a=at.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===Cn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===$r||n===Xr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===So||n===Mo||n===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Eo||n===To||n===Ao||n===Co||n===Kr||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Eo)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===Go||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===$o||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Qr||n===Zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`;class ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new td(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends Li{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ry,p={},M=t.getContextAttributes();let T=null,x=null;const w=[],b=[],C=new re;let v=null,E=null;const R=new on;R.viewport=new Ct;const L=new on;L.viewport=new Ct;const N=[R,L],B=new fp;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new Pa,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new Pa,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new Pa,w[Z]=j),j.getHandSpace()};function q(Z){const j=b.indexOf(Z.inputSource);if(j===-1)return;const ye=w[j];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){const j=b[Z];j!==null&&(b[Z]=null,w[Z].disconnect(j))}F=null,k=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,x=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?wi:jn,He=M.stencil?Xs:Hn);const We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Rn(u.textureWidth,u.textureHeight,{format:Cn,type:ln,depthTexture:new Js(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const ye=Z.removed[j],He=b.indexOf(ye);He>=0&&(b[He]=null,w[He].disconnect(ye))}for(let j=0;j<Z.added.length;j++){const ye=Z.added[j];let He=b.indexOf(ye);if(He===-1){for(let We=0;We<w.length;We++)if(We>=b.length){b.push(ye),He=We;break}else if(b[We]===null){b[We]=ye,He=We;break}if(He===-1)break}const Me=w[He];Me&&Me.connect(ye)}}const $=new P,Q=new P;function te(Z,j,ye){$.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const He=$.distanceTo(Q),Me=j.projectionMatrix.elements,We=ye.projectionMatrix.elements,pt=Me[14]/(Me[10]-1),ee=Me[14]/(Me[10]+1),se=(Me[9]+1)/Me[5],ae=(Me[9]-1)/Me[5],oe=(Me[8]-1)/Me[0],de=(We[8]+1)/We[0],Be=pt*oe,Oe=pt*de,$e=He/(-oe+de),Xe=$e*-oe;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ($e),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=pt+$e,dt=ee+$e,nt=Be-Xe,A=Oe+(He-Xe),y=se*ee/dt*I,O=ae*ee/dt*I;Z.projectionMatrix.makePerspective(nt,A,y,O,I,dt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function De(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),B.near=L.near=R.near=j,B.far=L.far=R.far=ye,(F!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,k=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const He=Z.parent,Me=B.cameras;De(B,He);for(let We=0;We<Me.length;We++)De(Me[We],He);Me.length===2?te(B,R,L):B.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,B,He)};function Te(Z,j,ye){ye===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ys*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let ht=null;function tt(Z,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let He=!1;ye.length!==B.cameras.length&&(B.cameras.length=0,He=!0);for(let ee=0;ee<ye.length;ee++){const se=ye[ee];let ae=null;if(f!==null)ae=f.getViewport(se);else{const de=d.getViewSubImage(u,se);ae=de.viewport,ee===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let oe=N[ee];oe===void 0&&(oe=new on,oe.layers.enable(ee),oe.viewport=new Ct,N[ee]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ee===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),He===!0&&B.cameras.push(oe)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ee=d.getDepthInformation(ye[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<ye.length;ee++){const se=ye[ee].camera;if(se){let ae=p[se];ae||(ae=new td,p[se]=ae);const oe=d.getCameraImage(se);ae.sourceTexture=oe}}}}for(let ye=0;ye<w.length;ye++){const He=b[ye],Me=w[ye];He!==null&&Me!==void 0&&Me.update(He,j,c||a)}ht&&ht(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const lt=new vd;lt.setAnimationLoop(tt),this.setAnimationLoop=function(Z){ht=Z},this.dispose=function(){}}}const oy=new yt,wd=new qe;wd.set(-1,0,0,0,1,0,0,0,1);function ly(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,x=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const b=w.program;n.uniformBlockBinding(x,b)}function c(x,w){let b=s[x.id];b===void 0&&(m(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",M));const C=w.program;n.updateUBOMapping(x,C);const v=e.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const w=d();x.__bindingPointIndex=w;const b=i.createBuffer(),C=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=s[x.id],b=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,E=b.length;v<E;v++){const R=b[v];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)f(R[L],v,L,C);else f(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,b,C){if(_(x,w,b,C)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){const N=E[L],B=p(N);g(N,x.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,w,b){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,b)}function _(x,w,b,C){const v=x.value,E=w+"_"+b;if(C[E]===void 0)return typeof v=="number"||typeof v=="boolean"?C[E]=v:ArrayBuffer.isView(v)?C[E]=v.slice():C[E]=v.clone(),!0;{const R=C[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){const w=x.uniforms;let b=0;const C=16;for(let E=0,R=w.length;E<R;E++){const L=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,B=L.length;N<B;N++){const F=L[N],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,V=k.length;q<V;q++){const ie=k[q],$=p(ie),Q=b%C,te=Q%$.boundary,De=Q+te;b+=te,De!==0&&C-De<$.storage&&(b+=C-De),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=$.storage}}}const v=b%C;return v>0&&(b+=C-v),x.__size=b,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),w}function M(x){const w=x.target;w.removeEventListener("dispose",M);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function dy(){return Nn===null&&(Nn=new Qh(hy,16,16,Ti,Gn),Nn.name="DFG_LUT",Nn.minFilter=$t,Nn.magFilter=$t,Nn.wrapS=Zn,Nn.wrapT=Zn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class uy{constructor(e={}){const{canvas:t=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([gl,ml,pl]),p=new Set([ln,Hn,$s,Xs,dl,ul]),M=new Uint32Array(4),T=new Int32Array(4),x=new P;let w=null,b=null;const C=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,N=null,B=null,F=null,k=null;this._outputColorSpace=Kt;let q=0,V=0,ie=null,$=-1,Q=null;const te=new Ct,De=new Ct;let Te=null;const ht=new Ve(0);let tt=0,lt=t.width,Z=t.height,j=1,ye=null,He=null;const Me=new Ct(0,0,lt,Z),We=new Ct(0,0,lt,Z);let pt=!1;const ee=new Ml;let se=!1,ae=!1;const oe=new yt,de=new P,Be=new Ct,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Xe(){return ie===null?j:1}let I=n;function dt(S,D){return t.getContext(S,D)}let nt,A,y,O,G,X,le,he,Y,K,ue,Ue,ge,fe,Fe,ze,Ye,U,pe,J,me,Se,ne;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",xn,!1),I===null){const D="webgl2";if(I=dt(D,S),I===null)throw dt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(S){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),ot("WebGLRenderer: "+S.message),S}function ke(){nt=new dg(I),nt.init(),me=new ny(I,nt),A=new tg(I,nt,e,me),y=new ey(I,nt),A.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=I.createFramebuffer(),F=I.createFramebuffer(),k=I.createFramebuffer(),O=new pg(I),G=new zv,X=new ty(I,nt,y,G,A,me,O),le=new hg(R),he=new gp(I),Se=new j0(I,he),Y=new ug(I,he,O,Se),K=new gg(I,Y,he,Se,O),U=new mg(I,A,X),Fe=new ng(G),ue=new Bv(R,le,nt,A,Se,Fe),Ue=new ly(R,G),ge=new Gv,fe=new Yv(nt),Ye=new Q0(R,le,y,K,g,l),ze=new jv(R,K,A),ne=new cy(I,O,A,y),pe=new eg(I,nt,O),J=new fg(I,nt,O),O.programs=ue.programs,R.capabilities=A,R.extensions=nt,R.properties=G,R.renderLists=ge,R.shadowMap=ze,R.state=y,R.info=O}_!==ln&&(E=new yg(_,t.width,t.height,o,s,r));const Le=new ay(R,I);this.xr=Le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(lt,Z,!1))},this.getSize=function(S){return S.set(lt,Z)},this.setSize=function(S,D,W=!0){if(Le.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=S,Z=D,t.width=Math.floor(S*j),t.height=Math.floor(D*j),W===!0&&(t.style.width=S+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(lt*j,Z*j).floor()},this.setDrawingBufferSize=function(S,D,W){lt=S,Z=D,j=W,t.width=Math.floor(S*W),t.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(_===ln){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,D,W,z){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,D,W,z),y.viewport(te.copy(Me).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,D,W,z){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,D,W,z),y.scissor(De.copy(We).multiplyScalar(j).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){y.setScissorTest(pt=S)},this.setOpaqueSort=function(S){ye=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let z=0;if(S){let H=!1;if(ie!==null){const _e=ie.texture.format;H=m.has(_e)}if(H){const _e=ie.texture.type,we=p.has(_e),xe=Ye.getClearColor(),Ae=Ye.getClearAlpha(),Ie=xe.r,Ze=xe.g,it=xe.b;we?(M[0]=Ie,M[1]=Ze,M[2]=it,M[3]=Ae,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=Ie,T[1]=Ze,T[2]=it,T[3]=Ae,I.clearBufferiv(I.COLOR,0,T))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Ye.dispose(),ge.dispose(),fe.dispose(),G.dispose(),le.dispose(),K.dispose(),Se.dispose(),ne.dispose(),ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Il),Le.removeEventListener("sessionend",Dl),vi.stop()};function bt(S){S.preventDefault(),na("WebGLRenderer: Context Lost."),L=!0}function ut(){na("WebGLRenderer: Context Restored."),L=!1;const S=O.autoReset,D=ze.enabled,W=ze.autoUpdate,z=ze.needsUpdate,H=ze.type;ke(),O.autoReset=S,ze.enabled=D,ze.autoUpdate=W,ze.needsUpdate=z,ze.type=H}function xn(S){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){const D=S.target;D.removeEventListener("dispose",Ln),Xd(D)}function Xd(S){qd(S),G.remove(S)}function qd(S){const D=G.get(S).programs;D!==void 0&&(D.forEach(function(W){ue.releaseProgram(W)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,z,H,_e){D===null&&(D=Oe);const we=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=Jd(S,D,W,z,H);y.setMaterial(z,we);let Ae=W.index,Ie=1;if(z.wireframe===!0){if(Ae=Y.getWireframeAttribute(W),Ae===void 0)return;Ie=2}const Ze=W.drawRange,it=W.attributes.position;let Ce=Ze.start*Ie,ft=(Ze.start+Ze.count)*Ie;_e!==null&&(Ce=Math.max(Ce,_e.start*Ie),ft=Math.min(ft,(_e.start+_e.count)*Ie)),Ae!==null?(Ce=Math.max(Ce,0),ft=Math.min(ft,Ae.count)):it!=null&&(Ce=Math.max(Ce,0),ft=Math.min(ft,it.count));const It=ft-Ce;if(It<0||It===1/0)return;Se.setup(H,z,xe,W,Ae);let Et,St=pe;if(Ae!==null&&(Et=he.get(Ae),St=J,St.setIndex(Et)),H.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*Xe()),St.setMode(I.LINES)):St.setMode(I.TRIANGLES);else if(H.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),y.setLineWidth(Gt*Xe()),H.isLineSegments?St.setMode(I.LINES):H.isLineLoop?St.setMode(I.LINE_LOOP):St.setMode(I.LINE_STRIP)}else H.isPoints?St.setMode(I.POINTS):H.isSprite&&St.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,be=H._multiDrawCounts,Yt=H._multiDrawCount,ct=Ae?he.get(Ae).bytesPerElement:1,cn=G.get(z).currentProgram.getUniforms();for(let In=0;In<Yt;In++)cn.setValue(I,"_gl_DrawID",In),St.render(Gt[In]/ct,be[In])}else if(H.isInstancedMesh)St.renderInstances(Ce,It,H.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Gt);St.renderInstances(Ce,It,be)}else St.render(Ce,It)};function Ll(S,D,W,z){N!==null&&S.isNodeMaterial&&N.setObject(z,S),se===!0&&Fe.setState(S,W,!1),S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,cr(S,D,z),S.side=mi,S.needsUpdate=!0,cr(S,D,z),S.side=en):cr(S,D,z)}this.compile=function(S,D,W=null){W===null&&(W=S),N!==null&&N.renderStart(S,D,W),b=fe.get(W),b.init(D),v.push(b),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ae=this.localClippingEnabled,se=Fe.init(this.clippingPlanes,ae),se===!0&&Fe.setGlobalState(this.clippingPlanes,D),N!==null&&ze.render(b.state.shadowsArray,W,D);const z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const xe=_e[we];Ll(xe,W,D,H),z.add(xe)}else Ll(_e,W,D,H),z.add(_e)}),b=v.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(S,D,W=null){const z=this.compile(S,D,W);return new Promise(H=>{function _e(){if(z.forEach(function(we){const Ae=G.get(we).currentProgram;(Ae===void 0||Ae.isReady())&&z.delete(we)}),z.size===0){H(S);return}setTimeout(_e,10)}nt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let xa=null;function Yd(S){xa&&xa(S)}function Il(){vi.stop()}function Dl(){vi.start()}const vi=new vd;vi.setAnimationLoop(Yd),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(S){xa=S,Le.setAnimationLoop(S),S===null?vi.stop():vi.start()},Le.addEventListener("sessionstart",Il),Le.addEventListener("sessionend",Dl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(S,D);const W=Le.enabled===!0&&Le.isPresenting===!0,z=E!==null&&(ie===null||W)&&E.begin(R,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(D),D=Le.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,ie),b=fe.get(S,v.length),b.init(D),b.state.textureUnits=X.getTextureUnits(),v.push(b),oe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ee.setFromProjectionMatrix(oe,On,D.reversedDepth),ae=this.localClippingEnabled,se=Fe.init(this.clippingPlanes,ae),w=ge.get(S,C.length),w.init(),C.push(w),Le.enabled===!0&&Le.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&_a(we,D,-1/0,R.sortObjects)}_a(S,D,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(ye,He),$e=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,$e&&Ye.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Fe.beginShadows();const H=b.state.shadowsArray;if(ze.render(H,S,D),se===!0&&Fe.endShadows(),(z&&E.hasRenderPass())===!1){const we=w.opaque,xe=w.transmissive;if(b.setupLights(),D.isArrayCamera){const Ae=D.cameras;if(xe.length>0)for(let Ie=0,Ze=Ae.length;Ie<Ze;Ie++){const it=Ae[Ie];Ul(we,xe,S,it)}$e&&Ye.render(S);for(let Ie=0,Ze=Ae.length;Ie<Ze;Ie++){const it=Ae[Ie];Nl(w,S,it,it.viewport)}}else xe.length>0&&Ul(we,xe,S,D),$e&&Ye.render(S),Nl(w,S,D)}ie!==null&&V===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),z&&E.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),Se.resetDefaultState(),$=-1,Q=null,v.pop(),v.length>0?(b=v[v.length-1],X.setTextureUnits(b.state.textureUnits),se===!0&&Fe.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function _a(S,D,W,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){z&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const we=K.update(S),xe=S.material;xe.visible&&w.push(S,we,xe,W,Be.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){const we=K.update(S),xe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(xe)){const Ae=we.groups;for(let Ie=0,Ze=Ae.length;Ie<Ze;Ie++){const it=Ae[Ie],Ce=xe[it.materialIndex];Ce&&Ce.visible&&w.push(S,we,Ce,W,Be.z,it,D)}}else xe.visible&&w.push(S,we,xe,W,Be.z,null,D)}}const _e=S.children;for(let we=0,xe=_e.length;we<xe;we++)_a(_e[we],D,W,z)}function Nl(S,D,W,z){const{opaque:H,transmissive:_e,transparent:we}=S;b.setupLightsView(W),se===!0&&Fe.setGlobalState(R.clippingPlanes,W),z&&y.viewport(te.copy(z)),H.length>0&&lr(H,D,W),_e.length>0&&lr(_e,D,W),we.length>0&&lr(we,D,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ul(S,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Ce=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Rn(1,1,{generateMipmaps:!0,type:Ce?Gn:ln,minFilter:bi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const _e=b.state.transmissionRenderTarget[z.id],we=z.viewport||te;_e.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const xe=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(ht),tt=R.getClearAlpha(),tt<1&&R.setClearColor(16777215,.5),R.clear(),$e&&Ye.render(W);const Ze=R.toneMapping;R.toneMapping=Bn;const it=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),se===!0&&Fe.setGlobalState(R.clippingPlanes,z),lr(S,W,z),X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ft=0,It=D.length;ft<It;ft++){const Et=D[ft],{object:St,geometry:Gt,material:be,group:Yt}=Et;if(be.side===en&&St.layers.test(z.layers)){const ct=be.side;be.side=Qt,be.needsUpdate=!0,Fl(St,W,z,Gt,be,Yt),be.side=ct,be.needsUpdate=!0,Ce=!0}}Ce===!0&&(X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e))}R.setRenderTarget(xe,Ae,Ie),R.setClearColor(ht,tt),it!==void 0&&(z.viewport=it),R.toneMapping=Ze}function lr(S,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,_e=S.length;H<_e;H++){const we=S[H],{object:xe,geometry:Ae,group:Ie}=we;let Ze=we.material;Ze.allowOverride===!0&&z!==null&&(Ze=z),xe.layers.test(W.layers)&&Fl(xe,D,W,Ae,Ze,Ie)}}function Fl(S,D,W,z,H,_e){N!==null&&H.isNodeMaterial&&N.setObject(S,H),S.onBeforeRender(R,D,W,z,H,_e),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(R,D,W,z,S,_e),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,R.renderBufferDirect(W,D,z,H,S,_e),H.side=mi,H.needsUpdate=!0,R.renderBufferDirect(W,D,z,H,S,_e),H.side=en):R.renderBufferDirect(W,D,z,H,S,_e),S.onAfterRender(R,D,W,z,H,_e)}function cr(S,D,W){D.isScene!==!0&&(D=Oe);const z=G.get(S),H=b.state.lights,_e=b.state.shadowsArray,we=H.state.version,xe=ue.getParameters(S,H.state,_e,D,W,b.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(xe);let Ie=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=le.get(S.envMap||z.environment,Ze),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",Ln),Ie=new Map,z.programs=Ie);let it=Ie.get(Ae);if(it!==void 0){if(z.currentProgram===it&&z.lightsStateVersion===we)return Ol(S,xe),it}else xe.uniforms=ue.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,W,xe),S.onBeforeCompile(xe,R),it=ue.acquireProgram(xe,Ae),Ie.set(Ae,it),z.uniforms=xe.uniforms;const Ce=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Fe.uniform),Ol(S,xe),z.needsLights=Qd(S),z.lightsStateVersion=we,z.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.sunLights.value=H.state.sun,Ce.sunLightShadows.value=H.state.sunShadow,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.sunShadowMatrix.value=H.state.sunShadowMatrix,Ce.sunShadowCascade.value=H.state.sunShadowCascade,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=it,z.uniformsList=null,it}function kl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=qr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ol(S,D){const W=G.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Zd(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=S.length;W<z;W++){const H=S[W];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function Jd(S,D,W,z,H){D.isScene!==!0&&(D=Oe),X.resetTextureUnits();const _e=D.fog,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,xe=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ie=le.get(z.envMap||we,Ae),Ze=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,it=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,It=!!W.morphAttributes.color;let Et=Bn;z.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Et=R.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=St!==void 0?St.length:0,be=G.get(z),Yt=b.state.lights;if(se===!0&&(ae===!0||S!==Q)){const wt=S===Q&&z.id===$;Fe.setState(z,S,wt)}let ct=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Yt.state.version||be.outputColorSpace!==xe||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Ie||z.fog===!0&&be.fog!==_e||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Fe.numPlanes||be.numIntersection!==Fe.numIntersection)||be.vertexAlphas!==Ze||be.vertexTangents!==it||be.morphTargets!==Ce||be.morphNormals!==ft||be.morphColors!==It||be.toneMapping!==Et||be.morphTargetsCount!==Gt||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,be.__version=z.version);let cn=be.currentProgram;ct===!0&&(cn=cr(z,D,H),N&&z.isNodeMaterial&&N.onUpdateProgram(z,cn,be));let In=!1,ei=!1,Ni=!1;const xt=cn.getUniforms(),Pt=be.uniforms;if(y.useProgram(cn.program)&&(In=!0,ei=!0,Ni=!0),z.id!==$&&($=z.id,ei=!0),be.needsLights){const wt=Zd(b.state.lightProbeGridArray,H);be.lightProbeGrid!==wt&&(be.lightProbeGrid=wt,ei=!0)}if(In||Q!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xt.setValue(I,"projectionMatrix",S.projectionMatrix),xt.setValue(I,"viewMatrix",S.matrixWorldInverse);const ni=xt.map.cameraPosition;ni!==void 0&&ni.setValue(I,de.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,ei=!0,Ni=!0)}if(be.needsLights&&(Yt.state.sunShadowMap.length>0&&xt.setValue(I,"sunShadowMap",Yt.state.sunShadowMap,X),Yt.state.directionalShadowMap.length>0&&xt.setValue(I,"directionalShadowMap",Yt.state.directionalShadowMap,X),Yt.state.spotShadowMap.length>0&&xt.setValue(I,"spotShadowMap",Yt.state.spotShadowMap,X),Yt.state.pointShadowMap.length>0&&xt.setValue(I,"pointShadowMap",Yt.state.pointShadowMap,X)),H.isSkinnedMesh){xt.setOptional(I,H,"bindMatrix"),xt.setOptional(I,H,"bindMatrixInverse");const wt=H.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),xt.setValue(I,"boneTexture",wt.boneTexture,X))}H.isBatchedMesh&&(xt.setOptional(I,H,"batchingTexture"),xt.setValue(I,"batchingTexture",H._matricesTexture,X),xt.setOptional(I,H,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",H._indirectTexture,X),xt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",H._colorsTexture,X));const ti=W.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&U.update(H,W,cn),(ei||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,xt.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=dy()),ei){if(xt.setValue(I,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Kd(Pt,Ni),_e&&z.fog===!0&&Ue.refreshFogUniforms(Pt,_e),Ue.refreshMaterialUniforms(Pt,z,j,Z,b.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){const wt=be.lightProbeGrid;Pt.probesSH.value=wt.texture,Pt.probesMin.value.copy(wt.boundingBox.min),Pt.probesMax.value.copy(wt.boundingBox.max),Pt.probesResolution.value.copy(wt.resolution)}qr.upload(I,kl(be),Pt,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qr.upload(I,kl(be),Pt,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(I,"center",H.center),xt.setValue(I,"modelViewMatrix",H.modelViewMatrix),xt.setValue(I,"normalMatrix",H.normalMatrix),xt.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const wt=z.uniformsGroups;for(let ni=0,Ui=wt.length;ni<Ui;ni++){const zl=wt[ni];ne.update(zl,cn),ne.bind(zl,cn)}}return cn}function Kd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,D,W){const z=G.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=D,G.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const W=G.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){ie=S,q=D,V=W;let z=null,H=!1,_e=!1;if(S){const xe=G.get(S);if(xe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(S.viewport),De.copy(S.scissor),Te=S.scissorTest,y.viewport(te),y.scissor(De),y.setScissorTest(Te),$=-1;return}else if(xe.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(xe.__hasExternalTextures)X.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ze=S.depthTexture;if(xe.__boundDepthTexture!==Ze){if(Ze!==null&&G.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);const Ie=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?z=Ie[D][W]:z=Ie[D],H=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?z=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[W]:z=Ie,te.copy(S.viewport),De.copy(S.scissor),Te=S.scissorTest}else te.copy(Me).multiplyScalar(j).floor(),De.copy(We).multiplyScalar(j).floor(),Te=pt;if(W!==0&&(z=B),y.bindFramebuffer(I.FRAMEBUFFER,z)&&y.drawBuffers(S,z),y.viewport(te),y.scissor(De),y.setScissorTest(Te),H){const xe=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,W)}else if(_e){const xe=D;for(let Ae=0;Ae<S.textures.length;Ae++){const Ie=G.get(S.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Ie.__webglTexture,W,xe)}}else if(S!==null&&W!==0){const xe=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,W)}$=-1};function Bl(S){const D=G.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,z,H,_e,we,xe=0){if(!(S&&S.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){y.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Ie=S.textures[xe],Ze=Ie.format,it=Ie.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const Ce=Bl(Ie);if(Ce.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H&&I.readPixels(D,W,z,H,me.convert(Ze),me.convert(it),_e)}finally{const Ie=ie!==null?G.get(ie).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,z,H,_e,we,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H){y.bindFramebuffer(I.FRAMEBUFFER,Ae);const Ie=S.textures[xe],Ze=Ie.format,it=Ie.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const Ce=Bl(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(D,W,z,H,me.convert(Ze),me.convert(it),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const It=ie!==null?G.get(ie).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,It);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nu(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ft),I.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){const z=Math.pow(2,-W),H=Math.floor(S.image.width*z),_e=Math.floor(S.image.height*z),we=D!==null?D.x:0,xe=D!==null?D.y:0;X.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,we,xe,H,_e),y.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,z=null,H=0,_e=0){let we,xe,Ae,Ie,Ze,it,Ce,ft,It;const Et=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(W!==null)we=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Ze=W.min.y,it=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-H);we=Math.floor(Et.width*Pt),xe=Math.floor(Et.height*Pt),S.isDataArrayTexture?Ae=Et.depth:S.isData3DTexture?Ae=Math.floor(Et.depth*Pt):Ae=1,Ie=0,Ze=0,it=0}z!==null?(Ce=z.x,ft=z.y,It=z.z):(Ce=0,ft=0,It=0);const St=me.convert(D.format),Gt=me.convert(D.type);let be;D.isData3DTexture?(X.setTexture3D(D,0),be=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(X.setTexture2DArray(D,0),be=I.TEXTURE_2D_ARRAY):(X.setTexture2D(D,0),be=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=y.getParameter(I.UNPACK_ROW_LENGTH),ct=y.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=y.getParameter(I.UNPACK_SKIP_PIXELS),In=y.getParameter(I.UNPACK_SKIP_ROWS),ei=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),y.pixelStorei(I.UNPACK_SKIP_IMAGES,it);const Ni=S.isDataArrayTexture||S.isData3DTexture,xt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Pt=G.get(S),ti=G.get(D),wt=G.get(Pt.__renderTarget),ni=G.get(ti.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,wt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Ui=0;Ui<Ae;Ui++)Ni&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,it+Ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(D).__webglTexture,_e,It+Ui)),I.blitFramebuffer(Ie,Ze,we,xe,Ce,ft,we,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){const Pt=G.get(S),ti=G.get(D);y.bindFramebuffer(I.READ_FRAMEBUFFER,F),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let wt=0;wt<Ae;wt++)Ni?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,H,it+wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,H),xt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ti.__webglTexture,_e,It+wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ti.__webglTexture,_e),H!==0?I.blitFramebuffer(Ie,Ze,we,xe,Ce,ft,we,xe,I.COLOR_BUFFER_BIT,I.NEAREST):xt?I.copyTexSubImage3D(be,_e,Ce,ft,It+wt,Ie,Ze,we,xe):I.copyTexSubImage2D(be,_e,Ce,ft,Ie,Ze,we,xe);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,_e,Ce,ft,It,we,xe,Ae,St,Gt,Et.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(be,_e,Ce,ft,It,we,xe,Ae,St,Et.data):I.texSubImage3D(be,_e,Ce,ft,It,we,xe,Ae,St,Gt,Et):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Ce,ft,we,xe,St,Gt,Et.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Ce,ft,Et.width,Et.height,St,Et.data):I.texSubImage2D(I.TEXTURE_2D,_e,Ce,ft,we,xe,St,Gt,Et);y.pixelStorei(I.UNPACK_ROW_LENGTH,Yt),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),y.pixelStorei(I.UNPACK_SKIP_ROWS,In),y.pixelStorei(I.UNPACK_SKIP_IMAGES,ei),_e===0&&D.generateMipmaps&&I.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){q=0,V=0,ie=null,y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class fy{constructor(e){this.canvas=e,this.renderer=new uy({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),this.renderer.setSize(globalThis.innerWidth,globalThis.innerHeight,!1),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=cl,this.renderer.toneMappingExposure=1.08,this.scene=new Xh,this.scene.fog=new fa(1317420,.0052),this.camera=new on(55,globalThis.innerWidth/globalThis.innerHeight,.1,400),this.camera.position.set(0,9,16),this.clock=new pp,this.listeners=new Set,this.addBaseLighting(this.scene),this.addSky(this.scene),globalThis.addEventListener("resize",()=>this.resize()),this.resize()}addBaseLighting(e){const t=new ud(11061247,2827293,1.35);e.add(t);const n=new sa(16769461,2.2);n.position.set(38,62,26),e.add(n);const s=new sa(9164031,1.05);s.position.set(-42,25,-38),e.add(s);const r=new md(4147824,.55);e.add(r)}addSky(e){const t={topColor:{value:new Ve(1711686)},midColor:{value:new Ve(4865912)},bottomColor:{value:new Ve(15769706)},offset:{value:18},exponent:{value:.72}},n=new Pe(new Bt(260,32,18),new Pn({side:Qt,depthWrite:!1,uniforms:t,vertexShader:`
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
        `}));e.add(n),this.sky=n;const s=new Mt,r=700,a=new Float32Array(r*3);for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,h=Math.acos(Math.random()*.75+.15),d=220;a[l*3]=d*Math.sin(h)*Math.cos(c),a[l*3+1]=d*Math.cos(h)+20,a[l*3+2]=d*Math.sin(h)*Math.sin(c)}s.setAttribute("position",new Ht(a,3));const o=new Zs(s,new ds({color:14543103,size:.72,transparent:!0,opacity:.82,depthWrite:!1}));e.add(o),this.stars=o}resize(){const e=globalThis.innerWidth,t=globalThis.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}setQuality(e){this.renderer.setPixelRatio(e==="low"?1:Math.min(globalThis.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!1,this.resize()}onFrame(e){return this.listeners.add(e),()=>this.listeners.delete(e)}render(e=this.scene){this.renderer.render(e,this.camera)}start(e){const t=()=>{const n=Math.min(.05,this.clock.getDelta());e(n,this.clock.elapsedTime)};this.renderer.setAnimationLoop(t)}}class py{constructor(e){this.canvas=e,this.keys=new Set,this.justPressed=new Set,this.look={dx:0,dy:0},this.wheel=0,this.dragging=!1,this.enabled=!0,this.touchMove={x:0,y:0},this.pointerId=null,this.lastPointer={x:0,y:0},this.sensitivity=1,this.invertY=!1,this.actionHandlers=new Map,this.bind()}bind(){globalThis.addEventListener("keydown",t=>{if(!this.enabled)return;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code);const n=this.actionHandlers.get(t.code);n&&!t.repeat&&n(t)}),globalThis.addEventListener("keyup",t=>{this.keys.delete(t.code)}),globalThis.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("pointerdown",t=>{this.enabled&&(t.button!==0&&t.button!==2||(this.dragging=!0,this.pointerId=t.pointerId,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,this.canvas.setPointerCapture?.(t.pointerId)))}),this.canvas.addEventListener("pointermove",t=>{if(!this.enabled||!this.dragging||t.pointerId!==this.pointerId)return;const n=t.clientX-this.lastPointer.x,s=t.clientY-this.lastPointer.y;this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,this.look.dx+=n,this.look.dy+=s});const e=t=>{t.pointerId===this.pointerId&&(this.dragging=!1,this.pointerId=null)};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("wheel",t=>{this.enabled&&(this.wheel+=Math.sign(t.deltaY))},{passive:!0})}onAction(e,t){this.actionHandlers.set(e,t)}isDown(e){return this.keys.has(e)}consumePressed(e){return this.justPressed.has(e)?(this.justPressed.delete(e),!0):!1}consumeLook(){const e={dx:this.look.dx*this.sensitivity,dy:this.look.dy*this.sensitivity*(this.invertY?-1:1)};return this.look.dx=0,this.look.dy=0,e}consumeWheel(){const e=this.wheel;return this.wheel=0,e}getMoveVector(){let e=0,t=0;(this.isDown("KeyW")||this.isDown("ArrowUp"))&&(t+=1),(this.isDown("KeyS")||this.isDown("ArrowDown"))&&(t-=1),(this.isDown("KeyD")||this.isDown("ArrowRight"))&&(e+=1),(this.isDown("KeyA")||this.isDown("ArrowLeft"))&&(e-=1),(this.touchMove.x||this.touchMove.y)&&(e+=this.touchMove.x,t+=this.touchMove.y);const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,y:t}}setTouchMove(e,t){this.touchMove.x=e,this.touchMove.y=t}clearFrame(){this.justPressed.clear()}setEnabled(e){this.enabled=e,e||(this.keys.clear(),this.touchMove.x=0,this.touchMove.y=0,this.dragging=!1)}}const an={Nature:{id:"Nature",color:"#63c96b",dark:"#1d4d2b",icon:"leaf",blurb:"Patient, restorative, and impossible to uproot."},Fire:{id:"Fire",color:"#ff7a45",dark:"#5a1c0d",icon:"flame",blurb:"Bright, hungry, and always moving forward."},Frost:{id:"Frost",color:"#7ad9ff",dark:"#123b52",icon:"snow",blurb:"Quiet power that slows the world to a crawl."},Water:{id:"Water",color:"#3f9bff",dark:"#102f5e",icon:"drop",blurb:"Adaptable, flowing, and relentless over time."},Stone:{id:"Stone",color:"#c8a26a",dark:"#443222",icon:"stone",blurb:"Enduring forms that outlast every storm."},Storm:{id:"Storm",color:"#ffe066",dark:"#4a3a08",icon:"bolt",blurb:"Fast, crackling, and impossible to pin down."},Astral:{id:"Astral",color:"#c08bff",dark:"#2c1650",icon:"star",blurb:"Drawn from starlight, rifts, and impossible distances."},Spirit:{id:"Spirit",color:"#ff8fc7",dark:"#4c1832",icon:"spirit",blurb:"Present in the space between memory and dream."}},my=["Nature","Fire","Frost","Water","Stone","Storm","Astral","Spirit"],es=my;function gy(i,e=[]){if(!an[i]||!Array.isArray(e)||e.length===0)return 1;let t=1;const n=es.indexOf(i);for(const s of e){const r=es.indexOf(s);if(r===-1)continue;const a=(r-n+es.length)%es.length;a===1||a===2?t*=2:(a===es.length-1||a===es.length-2)&&(t*=.5)}return t}const tr={common:{id:"common",label:"Common",color:"#a9b8b0",weight:52,statBonus:0},uncommon:{id:"uncommon",label:"Uncommon",color:"#66d38f",weight:27,statBonus:4},rare:{id:"rare",label:"Rare",color:"#65b8ff",weight:14,statBonus:9},epic:{id:"epic",label:"Epic",color:"#c58cff",weight:5.4,statBonus:15},legendary:{id:"legendary",label:"Legendary",color:"#ffd166",weight:1.5,statBonus:26},ultra:{id:"ultra",label:"Ultra Rare",color:"#ffffff",weight:.1,statBonus:44}},vy={tiny:{label:"Tiny",scale:.62,radius:.45},small:{label:"Small",scale:.82,radius:.62},medium:{label:"Medium",scale:1,radius:.8},large:{label:"Large",scale:1.3,radius:1.05},colossal:{label:"Colossal",scale:1.75,radius:1.5}},vt={hub:{id:"hub",name:"Hearthlight Haven",short:"Haven",color:"#f3c987",ground:"#c8aa7a",accent:"#ffd166",description:"A warm, protected waystation built around a fallen star.",center:[0,0],radius:22,levelRange:[1,1]},verdant:{id:"verdant",name:"Verdant Hollow",short:"Verdant",color:"#63c96b",ground:"#4d9a52",accent:"#c7ff8a",description:"A layered green basin of singing leaves, old roots, and clear streams.",center:[0,-72],radius:40,levelRange:[3,11]},ember:{id:"ember",name:"Ember Reach",short:"Ember",color:"#ff7a45",ground:"#4a302c",accent:"#ffb35c",description:"A black-glass caldera where rivers of light carve safe channels.",center:[80,-16],radius:38,levelRange:[8,18]},tide:{id:"tide",name:"Tidefall Coast",short:"Tide",color:"#3f9bff",ground:"#7fb9c9",accent:"#9be8ff",description:"Shell-white beaches, breathing tide pools, and coral towers full of sound.",center:[-80,-12],radius:39,levelRange:[6,16]},frost:{id:"frost",name:"Frostveil Peaks",short:"Frost",color:"#7ad9ff",ground:"#b7d7e6",accent:"#e8fbff",description:"Snowbound shelves and blue ice cathedrals under a pale aurora.",center:[48,80],radius:37,levelRange:[12,22]},astral:{id:"astral",name:"Astral Scar",short:"Astral",color:"#c08bff",ground:"#514268",accent:"#f5c8ff",description:"A luminous wound in the world where crystals remember the sky.",center:[-54,78],radius:41,levelRange:[18,30]}},Ci=["verdant","ember","tide","frost","astral"];function Al(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function _s(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ui(i){return _s(Al(String(i)))}function Ed(i,e){return e[Math.floor(i()*e.length)]}function yy(i,e,t=n=>n.weight??1){const n=e.reduce((r,a)=>r+Math.max(0,t(a)),0);if(n<=0)return e[0];let s=i()*n;for(const r of e)if(s-=Math.max(0,t(r)),s<=0)return r;return e[e.length-1]}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function ra(i="crt"){const e=globalThis.crypto;return e?.randomUUID?`${i}_${e.randomUUID().slice(0,8)}`:`${i}_${Math.random().toString(36).slice(2,10)}`}const il=122,Jc=112,xy={verdant:{trees:20,rocks:10,special:8,grass:420,flowers:110},ember:{spires:14,rocks:12,pools:4,grass:0,flowers:0},tide:{corals:16,rocks:8,pools:3,grass:120,flowers:40},frost:{pines:16,rocks:9,spikes:12,grass:90,flowers:0},astral:{crystals:18,rocks:8,floaters:7,grass:60,flowers:30}},_y={"root-shrine":{id:"root-shrine",biome:"verdant",name:"Root Shrine",position:[12,-66],color:"#9cff8a",radius:7},"warm-gate":{id:"warm-gate",biome:"ember",name:"Warm Gate",position:[68,-8],color:"#ffb35c",radius:7},"shell-spire":{id:"shell-spire",biome:"tide",name:"Shell Spire",position:[-70,-4],color:"#9be8ff",radius:7},"ice-obelisk":{id:"ice-obelisk",biome:"frost",name:"Ice Obelisk",position:[42,86],color:"#e8fbff",radius:7},"crystal-ring":{id:"crystal-ring",biome:"astral",name:"Crystal Ring",position:[-48,88],color:"#f5c8ff",radius:8}},Td=Ci.map(i=>({biome:i,center:vt[i].center}));function Yr(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function Ke(i,e){const t=Math.hypot(i,e);let n=Math.sin(i*.047)*Math.cos(e*.041)*1.1;n+=Math.sin(i*.11+e*.07)*.45,n+=Math.cos(e*.09-i*.03)*.42,n+=Math.sin(i*.021-e*.019)*.9;const s=Yr(18,36,t);n*=s;for(const r of Ci){const[a,o]=vt[r].center,l=Math.hypot(i-a,e-o),c=vt[r].radius,h=1-Yr(c*.28,c*1.02,l);h>0&&(n=n*(1-h*.82)+Math.sin(l*.14)*.18*h)}return n+=Yr(98,il,t)*11,n}function Kc(i,e){let t=1/0;for(const n of Td){const[s,r]=n.center,a=s,o=r,l=Math.hypot(a,o),c=Math.max(0,Math.min(1,(i*a+e*o)/(l*l))),h=a*c,d=o*c;t=Math.min(t,Math.hypot(i-h,e-d))}return t}function Ad(i,e){if(Math.hypot(i,e)<24)return"hub";let n="verdant",s=1/0;for(const r of Ci){const[a,o]=vt[r].center,l=Math.hypot(i-a,e-o)/vt[r].radius;l<s&&(s=l,n=r)}return n}function Sy(i,e){return Ad(i,e)}function My(i,e){const t=Ad(i,e),n=vt[t],s=new Ve(n.ground),r=Math.hypot(i,e),a=1-Yr(20,34,r);t!=="hub"&&a>0&&s.lerp(new Ve(vt.hub.ground),a*.65);const o=Math.sin(i*.31+e*.17)*.03+Math.cos(e*.23-i*.13)*.025;return s.offsetHSL(o*.18,0,o),s}function Qc(i,e=16){return new rr(i.map(([t,n])=>new P(t,n,0)),e)}function jc(i,e,t){return new Bt(i,e,t)}function by(i,e,t=14){const n=e*.5,s=[[i,0],[i*.92,n*.18],[i*.78,n*.82],[0,n]];return new rr(s.map(([r,a])=>new P(r,a,0)),t)}function ce(i,e={}){return new fn({color:i,flatShading:!1,roughness:e.roughness??.78,metalness:e.metalness??.02,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity||0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side||mi,depthWrite:e.depthWrite??!0})}function Ee(i,e,t,n,s=[1,1,1],r=[0,0,0]){const a=new Pe(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}function Un(i,e="#ffe9b8"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="rgba(11,15,24,0.72)",n.beginPath(),n.roundRect(8,20,496,88,24),n.fill(),n.strokeStyle=e,n.lineWidth=4,n.stroke(),n.font='bold 44px "Trebuchet MS", sans-serif',n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,66);const s=new ed(t);s.colorSpace=Kt;const r=new Jh(new Sl({map:s,transparent:!0,depthWrite:!1}));return r.scale.set(2.45,.6125,1),r}class wy{constructor(e,t="high"){this.scene=e,this.quality=t,this.root=new je,e.add(this.root),this.obstacles=[],this.hazards=[],this.interactables=[],this.landmarks=Object.values(_y),this.animated=[],this.particles=[],this.floating=[],this.materials={},this.buildTerrain(),this.buildPaths(),this.buildHub(),this.buildBiomes(),this.buildLandmarks(),this.buildOuterRim()}buildTerrain(){const e=new fs(260,260,112,112);e.rotateX(-Math.PI/2);const t=e.attributes.position,n=new Float32Array(t.count*3),s=new Ve;for(let l=0;l<t.count;l++){const c=t.getX(l),h=t.getZ(l);t.setY(l,Ke(c,h)),s.copy(My(c,h)),n[l*3]=s.r,n[l*3+1]=s.g,n[l*3+2]=s.b}e.setAttribute("color",new Ht(n,3)),e.computeVertexNormals();const r=new Pe(e,new fn({vertexColors:!0,flatShading:!0,roughness:.95,metalness:.02}));this.root.add(r),this.terrain=r;const a=new Pe(new Qn(330,64),ce("#163b52",{roughness:.22,metalness:.35,transparent:!0,opacity:.92}));a.rotation.x=-Math.PI/2,a.position.y=-2.6,this.root.add(a),this.ocean=a;const o=new Pe(new er(il-2,230,64),ce("#2a7c93",{transparent:!0,opacity:.28,roughness:.3,metalness:.1}));o.rotation.x=-Math.PI/2,o.position.y=-.8,this.root.add(o)}buildPaths(){for(const{biome:e,center:t}of Td){const[n,s]=t,r=3.8,a=[],o=34;for(let _=0;_<=o;_++){const m=_/o,p=n*m+Math.sin(m*8+n)*r*m*(1-m),M=s*m+Math.cos(m*7+s)*r*m*(1-m);a.push([p,M])}const l=3.4,c=[],h=[],d=[],u=new Ve(vt[e].accent);for(let _=0;_<a.length;_++){const[m,p]=a[_],M=a[Math.max(0,_-1)],T=a[Math.min(a.length-1,_+1)],x=T[0]-M[0],w=T[1]-M[1],b=Math.hypot(x,w)||1,C=-w/b,v=x/b;for(const E of[-1,1]){const R=m+C*l*E,L=p+v*l*E,N=Ke(R,L)+.09;c.push(R,N,L);const B=.55+_%3*.04;d.push(B,B*.88,B*.64)}if(_<a.length-1){const E=_*2;h.push(E,E+1,E+2,E+1,E+3,E+2)}}const f=new Mt;f.setAttribute("position",new et(c,3)),f.setAttribute("color",new et(d,3)),f.setIndex(h),f.computeVertexNormals();const g=new Pe(f,new fn({vertexColors:!0,flatShading:!0,roughness:.9,metalness:.04}));this.root.add(g);for(let _=6;_<a.length-2;_+=7){const[m,p]=a[_];this.addPathLantern(m,p,u)}}}addPathLantern(e,t,n){const s=Ke(e,t),r=Ee(this.root,new rt(.08,.11,1.7,5),ce("#4b4042"),[e,s+.85,t]);r.castShadow=!1;const a=new Pe(new Bt(.18,8,6),ce(n,{emissive:n,emissiveIntensity:1.2,roughness:.4}));a.position.set(e,s+1.74,t),this.root.add(a);const o=new is(n,.9,7,2);o.position.set(e,s+1.9,t),this.root.add(o)}buildHub(){const e=new je;this.root.add(e);const t=new Pe(new rt(23,24,.5,48),ce("#b9a27c",{roughness:.9}));t.position.y=0,e.add(t);const n=new Pe(new rt(12.5,13,.54,40),ce("#d8c29b",{roughness:.82}));n.position.y=.03,e.add(n);const s=new Pe(new rt(5.2,5.4,.58,8),ce("#f3d79f",{roughness:.6,metalness:.15}));s.position.y=.06,e.add(s);for(let r=0;r<16;r++){const a=r/16*Math.PI*2;Ee(e,new _t(3.4,.5,.75),ce(r%2?"#8e7b63":"#9d896e"),[Math.cos(a)*16.5,.38,Math.sin(a)*16.5],[1,1,1],[0,-a,0])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2+.4,o=Math.cos(a)*12,l=Math.sin(a)*12,c=Ee(e,new rt(1.2,1.4,.65,8),ce("#6d5847"),[o,.34,l]);c.rotation.y=a;for(let h=0;h<5;h++){const d=o+Math.cos(h*2.1)*.55,u=l+Math.sin(h*2.1)*.55;Ee(e,new pn(.22,0),ce("#7fd86c",{emissive:"#3f8f4a",emissiveIntensity:.08}),[d,.85,u])}}this.buildFountain(e,-6.5,-2.5),this.buildShop(e,9.5,5.5),this.buildTreadmillStation(e,9.5,-8.5),this.buildQuestBoard(e,-9.5,6.5),this.buildGuide(e,0,8.5),this.buildPracticeRing(e,-3.5,-13),this.buildArch(e,0,-20,"verdant"),this.buildArch(e,20,-4,"ember"),this.buildArch(e,-20,-3,"tide"),this.buildArch(e,13,18,"frost"),this.buildArch(e,-14,17,"astral"),this.interactables.push({id:"guide",type:"guide",label:"Talk to Guide Wren",position:new P(0,Ke(0,8.5),8.5),radius:3.4}),this.interactables.push({id:"shop",type:"shop",label:"Browse Ember & Elm Supplies",position:new P(9.5,Ke(9.5,5.5),5.5),radius:3.6}),this.interactables.push({id:"treadmill",type:"training",label:"Use the Treadmills",position:new P(9.5,Ke(9.5,-8.5),-8.5),radius:4}),this.interactables.push({id:"questboard",type:"quests",label:"Read the Quest Board",position:new P(-9.5,Ke(-9.5,6.5),6.5),radius:3.4}),this.interactables.push({id:"fountain",type:"heal",label:"Rest at the Starwell",position:new P(-6.5,Ke(-6.5,-2.5),-2.5),radius:3.8}),this.interactables.push({id:"practice",type:"practice",label:"Enter the Practice Ring",position:new P(-3.5,Ke(-3.5,-13),-13),radius:3.6})}buildFountain(e,t,n){Ee(e,new rt(2.6,2.9,.9,12),ce("#8f8069"),[t,.45,n]);const s=new Pe(new rt(2.15,2.15,.12,24),ce("#58d8ff",{emissive:"#39b7e8",emissiveIntensity:.35,transparent:!0,opacity:.8,roughness:.16}));s.position.set(t,.94,n),e.add(s),this.animated.push({type:"spin",mesh:s,speed:.16}),Ee(e,new rt(.34,.46,2.6,8),ce("#b6a88b"),[t,1.9,n]);const r=new Pe(new pn(.58,1),ce("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:1.1,transparent:!0,opacity:.92}));r.position.set(t,3.35,n),e.add(r),this.animated.push({type:"bob",mesh:r,baseY:3.35,amplitude:.16,speed:1.7});const a=new is(6277375,2.2,14,2);a.position.set(t,3.4,n),e.add(a);const o=[];for(let l=0;l<3;l++){const c=new Pe(new Tn(2.4+l*.25,.02,6,40),ce("#a9edff",{emissive:"#5fc8ff",emissiveIntensity:.5,transparent:!0,opacity:.35-l*.07}));c.rotation.x=Math.PI/2,c.position.set(t,1+l*.05,n),e.add(c),o.push(c)}this.animated.push({type:"rings",meshes:o,center:[t,n]}),this.obstacles.push({x:t,z:n,r:2.9})}buildShop(e,t,n){const s=Ke(t,n),r=new je;r.position.set(t,s,n),r.rotation.y=-.4,e.add(r),Ee(r,new _t(4.6,.35,3.2),ce("#7b5a40"),[0,1,0]),Ee(r,new _t(4.4,2,.2),ce("#5c4433"),[0,2,-1.4]);for(const l of[-1,1])Ee(r,new rt(.1,.12,2.4,5),ce("#6b4a35"),[l*2.05,2.1,1.4]);for(let l=0;l<5;l++)Ee(r,new _t(.9,.12,3.5),ce(l%2?"#d4814f":"#f0c07b"),[-1.8+l*.9,3.2,0],[1,1,1],[0,0,0]);for(let l=0;l<4;l++)Ee(r,new rt(.22,.22,.1,8),ce(["#9fe7ff","#c08bff","#63c96b","#ffd166"][l],{emissive:["#9fe7ff","#c08bff","#63c96b","#ffd166"][l],emissiveIntensity:.12}),[-1.4+l*.85,1.27,.4]);const a=this.makeNpc("#d18b5f","#48556c","shopkeeper");a.position.set(t+1.4,s,n-.4),a.rotation.y=2.5,e.add(a),this.animated.push({type:"npc",group:a,baseY:s});const o=Un("EMBER & ELM","#ffd166");o.position.set(t,s+4.4,n),e.add(o),this.obstacles.push({x:t,z:n,r:2.8})}buildTreadmillStation(e,t,n){const s=Ke(t,n),r=new je;r.position.set(t,s,n),e.add(r),Ee(r,new rt(5.4,5.8,.4,10),ce("#85705b"),[0,.2,0]),Ee(r,new _t(8,.3,4.6),ce("#5c4a3d"),[0,.45,-.5]);for(const[l,c]of[-1.8,1.8].entries()){const h=new je;h.position.set(c,.65,-.5),Ee(h,new _t(2.8,.28,1.6),ce("#3d4652"),[0,0,0]);for(let u=0;u<4;u++){const f=Ee(h,new rt(.18,.18,2.4,8),ce("#aeb7bd",{metalness:.45,roughness:.45}),[0,.18,-.6+u*.4],[1,1,1],[0,0,Math.PI/2]);f.rotation.z=Math.PI/2}Ee(h,new _t(.18,1.1,.18),ce("#d4814f"),[-1.2,.8,-.6]),Ee(h,new _t(.18,1.1,.18),ce("#d4814f"),[1.2,.8,-.6]);const d=Ee(h,new _t(2.2,.08,.6),ce("#ffd166",{emissive:"#ffd166",emissiveIntensity:.2}),[0,.5,.55]);d.rotation.x=-.35,r.add(h),this.animated.push({type:"treadmill",group:h,offset:l})}const a=this.makeNpc("#8bbf74","#d9b56c","attendant");a.position.set(t+3.4,s,n+2),a.rotation.y=-2.3,e.add(a),this.animated.push({type:"npc",group:a,baseY:s});const o=Un("TRAINING YARD","#9be8ff");o.position.set(t,s+4,n),e.add(o),this.obstacles.push({x:t,z:n,r:4.1})}buildQuestBoard(e,t,n){const s=Ke(t,n),r=new je;r.position.set(t,s,n),r.rotation.y=.4,e.add(r),Ee(r,new _t(3.6,2.4,.26),ce("#6d5038"),[0,1.9,0]),Ee(r,new _t(3.2,2,.1),ce("#8c6a49"),[0,1.9,.17]);for(const o of[-1,1])Ee(r,new rt(.14,.18,3.4,5),ce("#513a28"),[o*1.5,1.4,0]);for(let o=0;o<3;o++)Ee(r,new _t(.7,.48,.05),ce("#e8d7ae"),[-.9+o*.9,2.2-o%2*.4,.25],[1,1,1],[0,0,(o-1)*.05]);const a=Un("BOUNTIES","#ffd166");a.position.set(t,s+3.9,n),e.add(a),this.obstacles.push({x:t,z:n,r:2.2})}buildGuide(e,t,n){const s=Ke(t,n),r=new je;r.position.set(t,s,n),e.add(r),Ee(r,Qc([[0,0],[.5,.5],[.62,1],[.5,1.7],[.34,1.8]]),ce("#6b7bd8"),[0,.95,0],[1,1,1],[-Math.PI/2,0,0]),Ee(r,jc(.4,14,12),ce("#f1c9a5"),[0,2.75,0],[1,1,1]),Ee(r,Qc([[0,0],[.42,.2],[.48,.7],[.42,1],[0,1.05]],10),ce("#4853a3"),[0,2.9,-.04],[1,1,1],[-Math.PI/2,0,0]),Ee(r,by(.045,2.2,12),ce("#a88c60"),[.55,2.35,.1],[1,1,1],[0,0,-.12]);const a=Ee(r,jc(.22,14,12),ce("#a9edff",{emissive:"#5fc8ff",emissiveIntensity:1}),[.68,3,.15]);this.animated.push({type:"bob",mesh:a,baseY:s+2.25,amplitude:.12,speed:2}),this.animated.push({type:"npc",group:r,baseY:s});const o=Un("GUIDE WREN","#9be8ff");o.position.set(t,s+3.2,n),e.add(o),this.obstacles.push({x:t,z:n,r:1})}buildPracticeRing(e,t,n){const s=Ke(t,n),r=new Pe(new Tn(4.2,.16,8,48),ce("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:.6,roughness:.4}));r.rotation.x=Math.PI/2,r.position.set(t,s+.25,n),e.add(r),this.animated.push({type:"spin",mesh:r,speed:.18});const a=Un("PRACTICE RING","#9be8ff");a.position.set(t,s+2.7,n),e.add(a)}buildArch(e,t,n,s){const r=Ke(t,n),a=vt[s].accent,o=new je;o.position.set(t,r,n),o.rotation.y=Math.atan2(-t,-n)+Math.PI,e.add(o);for(const c of[-1,1])Ee(o,new rt(.38,.58,6.8,5),ce("#75675a"),[c*3.1,3.4,0]),Ee(o,new rn(.72,1.2,4),ce(a,{emissive:a,emissiveIntensity:.22}),[c*3.1,7.2,0]);Ee(o,new _t(7,.5,.6),ce("#75675a"),[0,6.7,0]);const l=Ee(o,new _t(3.6,1,.12),ce(a,{emissive:a,emissiveIntensity:.15}),[0,5.7,.35]);l.rotation.z=.02,this.obstacles.push({x:t-3.1*Math.cos(o.rotation.y),z:n+3.1*Math.sin(o.rotation.y),r:.8}),this.obstacles.push({x:t+3.1*Math.cos(o.rotation.y),z:n-3.1*Math.sin(o.rotation.y),r:.8})}makeNpc(e,t,n){const s=new je;return Ee(s,new rn(.46,1.5,7),ce(e),[0,.75,0]),Ee(s,new pn(.34,1),ce("#f1c9a5"),[0,1.55,0]),Ee(s,new rn(.4,.55,5),ce(t),[0,1.79,-.05]),Ee(s,new rt(.07,.09,1,4),ce(t),[-.36,1,0],[1,1,1],[0,0,.18]),Ee(s,new rt(.07,.09,1,4),ce(t),[.36,1,0],[1,1,1],[0,0,-.18]),s.userData.role=n,s}buildBiomes(){for(const t of Ci){const n=ui(`biome-${t}-v3`),s=vt[t].center,r=vt[t].radius,a=xy[t],o=(c,h,d=5)=>this.isBlocked(c,h,d),l=(c=0)=>{const h=n()*Math.PI*2,d=r*(.32+n()*.62);return[s[0]+Math.cos(h)*d,s[1]+Math.sin(h)*d]};if(t==="verdant"){for(let c=0;c<a.trees;c++){const[h,d]=l();o(h,d,6)||this.addTree(h,d,n,"verdant")}for(let c=0;c<a.rocks;c++){const[h,d]=l();o(h,d,4)||this.addRock(h,d,n,"#6e8060",.6+n()*.7)}for(let c=0;c<a.special;c++){const[h,d]=l();o(h,d,3)||this.addMushroom(h,d,n)}this.addGrassInstances(s,r,a.grass,"#5cc45f",n),this.addFlowerInstances(s,r,a.flowers,n),this.addPond(s[0]-14,s[1]+10,6.5,"#3f9bff"),this.addStream()}else if(t==="ember"){for(let c=0;c<a.spires;c++){const[h,d]=l();o(h,d,5)||this.addBasaltSpire(h,d,n)}for(let c=0;c<a.rocks;c++){const[h,d]=l();o(h,d,4)||this.addRock(h,d,n,"#463c3a",.7+n()*.8)}for(let c=0;c<a.pools;c++){const[h,d]=l(7);this.addLavaPool(h,d,3.2+n()*2.4)}this.addEmberParticles(n)}else if(t==="tide"){for(let c=0;c<a.corals;c++){const[h,d]=l();o(h,d,4)||this.addCoral(h,d,n)}for(let c=0;c<a.rocks;c++){const[h,d]=l();o(h,d,4)||this.addRock(h,d,n,"#8b9b9c",.55+n()*.55)}for(let c=0;c<a.pools;c++){const[h,d]=l(8);this.addPond(h,d,5+n()*3,"#49c7e8")}this.addGrassInstances(s,r,a.grass,"#5b9f8a",n),this.addFlowerInstances(s,r,a.flowers,n,!0),this.addShellProps(s,r,n)}else if(t==="frost"){for(let c=0;c<a.pines;c++){const[h,d]=l();o(h,d,5)||this.addPine(h,d,n)}for(let c=0;c<a.rocks;c++){const[h,d]=l();o(h,d,4)||this.addRock(h,d,n,"#9fbdc9",.6+n()*.8)}for(let c=0;c<a.spikes;c++){const[h,d]=l();o(h,d,4)||this.addIceSpike(h,d,n)}this.addPond(s[0]-13,s[1]-8,6,"#9be8ff",!0),this.addGrassInstances(s,r,a.grass,"#e8fbff",n),this.addSnowParticles(n)}else if(t==="astral"){for(let c=0;c<a.crystals;c++){const[h,d]=l();o(h,d,4)||this.addCrystal(h,d,n)}for(let c=0;c<a.rocks;c++){const[h,d]=l();o(h,d,4)||this.addRock(h,d,n,"#62517a",.6+n()*.7)}for(let c=0;c<a.floaters;c++){const[h,d]=l();o(h,d,4)||this.addFloatingRock(h,d,n)}this.addGrassInstances(s,r,a.grass,"#b98bff",n),this.addFlowerInstances(s,r,a.flowers,n,!1,!0)}}const e=ui("outer-filler-v2");for(let t=0;t<28;t++){const n=e()*Math.PI*2,s=52+e()*55,r=Math.cos(n)*s,a=Math.sin(n)*s;this.isBlocked(r,a,6)||Kc(r,a)<7||(e()>.55?this.addRock(r,a,e,"#66715f",.8+e()):this.addTree(r,a,e,"verdant"))}}buildLandmarks(){for(const e of this.landmarks){const[t,n]=e.position,s=Ke(t,n);e.id==="root-shrine"&&this.buildRootShrine(t,s,n),e.id==="warm-gate"&&this.buildWarmGate(t,s,n),e.id==="shell-spire"&&this.buildShellSpire(t,s,n),e.id==="ice-obelisk"&&this.buildIceObelisk(t,s,n),e.id==="crystal-ring"&&this.buildCrystalRing(t,s,n),this.interactables.push({id:`landmark-${e.id}`,type:"landmark",label:`Inspect ${e.name}`,landmark:e.id,biome:e.biome,position:new P(t,s,n),radius:e.radius})}}buildRootShrine(e,t,n){const s=new je;s.position.set(e,t,n),this.root.add(s);for(let o=0;o<5;o++){const l=o/5*Math.PI*2,c=Ee(s,new rt(.36,.7,3.5,5),ce("#5f4a33"),[Math.cos(l)*2.2,1.7,Math.sin(l)*2.2],[1,1,1],[Math.cos(l)*.3,0,Math.sin(l)*.3]);c.rotation.z=Math.sin(l)*.2}Ee(s,new rt(2.2,2.6,.7,8),ce("#7c8f66"),[0,.35,0]);const r=Ee(s,new pn(.8,1),ce("#a7ff8f",{emissive:"#63c96b",emissiveIntensity:1,transparent:!0,opacity:.9}),[0,2.7,0]);this.animated.push({type:"bob",mesh:r,baseY:t+2.7,amplitude:.18,speed:1.2}),this.animated.push({type:"spin",mesh:r,speed:.22}),this.obstacles.push({x:e,z:n,r:2.4});const a=Un("ROOT SHRINE","#9cff8a");a.position.set(e,t+5.2,n),this.root.add(a)}buildWarmGate(e,t,n){const s=new je;s.position.set(e,t,n),this.root.add(s);for(let l=0;l<2;l++){const c=l?.8:-.8;Ee(s,new _t(1.3,5.8,1.3),ce("#44312f"),[Math.sin(c)*3.2,2.9,Math.cos(c)*.2],[1,1,1],[0,c,0])}Ee(s,new _t(7,.9,1.2),ce("#4f3732"),[0,5.6,0]);const r=Ee(s,new fs(4.2,4.2),ce("#ff8a4c",{emissive:"#ff5e2c",emissiveIntensity:1.2,transparent:!0,opacity:.55,side:en}),[0,3.1,0]);this.animated.push({type:"flicker",mesh:r,base:.55});const a=new is(16742981,2.4,12,2);a.position.set(e,t+3.2,n),this.root.add(a),this.obstacles.push({x:e-2.6,z:n,r:1}),this.obstacles.push({x:e+2.6,z:n,r:1});const o=Un("WARM GATE","#ffb35c");o.position.set(e,t+6.7,n),this.root.add(o)}buildShellSpire(e,t,n){const s=new je;s.position.set(e,t,n),this.root.add(s);let r=0;for(let l=0;l<6;l++){const c=2.7-l*.34,h=1.2,d=Ee(s,new rt(c*.8,c,h,12),ce(l%2?"#f1d9c2":"#e7bea6"),[0,r+h/2,0]);d.rotation.y=l*.3,r+=h}const a=Ee(s,new Tn(2.5,.16,6,36),ce("#9be8ff",{emissive:"#4fcfff",emissiveIntensity:.6}),[0,2.4,0],[1,1,1],[Math.PI/2,0,0]);this.animated.push({type:"spin",mesh:a,speed:.3}),this.obstacles.push({x:e,z:n,r:3});const o=Un("SHELL SPIRE","#9be8ff");o.position.set(e,t+10.2,n),this.root.add(o)}buildIceObelisk(e,t,n){const s=new je;s.position.set(e,t,n),this.root.add(s);for(const o of[-2.1,0,2.1]){const l=o===0?9.5:5.4;Ee(s,new rn(o===0?1.25:.8,l,5),ce("#bff3ff",{emissive:"#67cfff",emissiveIntensity:.24,transparent:!0,opacity:.85,roughness:.18}),[o,l/2,0])}Ee(s,new rt(3.5,3.9,.65,9),ce("#d8eef5"),[0,.32,0]);const r=new is(8051199,2.4,16,2);r.position.set(e,t+7,n),this.root.add(r),this.obstacles.push({x:e,z:n,r:3.4});const a=Un("ICE OBELISK","#e8fbff");a.position.set(e,t+11.4,n),this.root.add(a)}buildCrystalRing(e,t,n){const s=new je;s.position.set(e,t,n),this.root.add(s);for(let l=0;l<9;l++){const c=l/9*Math.PI*2,h=4+l%3*1.8;Ee(s,new rn(.7,h,5),ce("#e2bdff",{emissive:"#c08bff",emissiveIntensity:.5,transparent:!0,opacity:.88,roughness:.2}),[Math.cos(c)*6.5,h/2,Math.sin(c)*6.5],[1,1,1],[Math.cos(c)*.12,0,Math.sin(c)*.12]),this.obstacles.push({x:e+Math.cos(c)*6.5,z:n+Math.sin(c)*6.5,r:.8})}const r=new Pe(new rt(1.7,2.4,16,12,1,!0),ce("#d5a8ff",{emissive:"#b46bff",emissiveIntensity:.8,transparent:!0,opacity:.18,side:en}));r.position.y=8,s.add(r),this.animated.push({type:"flicker",mesh:r,base:.18});const a=new is(12618751,3.2,22,2);a.position.set(e,t+6,n),this.root.add(a);const o=Un("CRYSTAL RING","#f5c8ff");o.position.set(e,t+15,n),this.root.add(o)}buildOuterRim(){const e=ui("outer-rim-v2");for(let t=0;t<64;t++){const n=t/64*Math.PI*2,s=il+e()*8,r=Math.cos(n)*s,a=Math.sin(n)*s,o=4+e()*9;Ee(this.root,new cs(o*.55,0),ce("#5c5b63"),[r,Ke(r,a)+o*.3,a],[1,1+e()*.5,1],[0,e()*Math.PI,0]),this.obstacles.push({x:r,z:a,r:o*.45})}}addTree(e,t,n,s){const r=Ke(e,t),a=.85+n()*.8,o=new je;o.position.set(e,r,t),o.rotation.y=n()*Math.PI*2,this.root.add(o),Ee(o,new rt(.22*a,.42*a,2.7*a,5),ce("#6b5138"),[0,1.35*a,0]);const l=s==="verdant"?["#4b9e4d","#63c96b","#88e07d"]:["#557a58","#6b9b66","#8cb879"];for(let c=0;c<4;c++)Ee(o,new pn((1.1-c*.16)*a,0),ce(l[c%l.length]),[Math.cos(c*2.3)*.5*a,(2.8+c*.66)*a,Math.sin(c*2.3)*.5*a],[1.2,.9,1.2],[n(),n(),n()]);n()>.55&&Ee(o,new pn(.18*a,0),ce("#ffd166",{emissive:"#ffd166",emissiveIntensity:.6}),[.7*a,2.5*a,.4*a]),this.obstacles.push({x:e,z:t,r:.75*a})}addPine(e,t,n){const s=Ke(e,t),r=.8+n()*.7,a=new je;a.position.set(e,s,t),this.root.add(a),Ee(a,new rt(.16*r,.3*r,2.2*r,5),ce("#5c4a3d"),[0,1.1*r,0]);for(let o=0;o<4;o++)Ee(a,new rn((1.5-o*.28)*r,2.1*r,6),ce(o%2?"#d9f4fb":"#a6d7e2"),[0,(1.7+o*1)*r,0]);this.obstacles.push({x:e,z:t,r:.8*r})}addRock(e,t,n,s,r=1){const a=Ke(e,t);Ee(this.root,new cs(r,0),ce(s),[e,a+r*.55,t],[1.2,.9,1],[n(),n(),n()]),this.obstacles.push({x:e,z:t,r:r*.9})}addMushroom(e,t,n){const s=Ke(e,t),r=.5+n()*.8,a=new je;a.position.set(e,s,t),this.root.add(a),Ee(a,new rt(.1*r,.16*r,.8*r,5),ce("#d9c7a8"),[0,.4*r,0]),Ee(a,new Bt(.55*r,8,5,0,Math.PI*2,0,Math.PI/2),ce(n()>.5?"#c77dff":"#ff8fc7",{emissive:"#c77dff",emissiveIntensity:.2}),[0,.82*r,0],[1.2,.65,1.2])}addCoral(e,t,n){const s=Ke(e,t),r=.7+n()*.9,a=new je;a.position.set(e,s,t),this.root.add(a);const o=["#ff8fc7","#ffb35c","#9be8ff","#c08bff"];for(let l=0;l<4;l++){const c=n()*Math.PI*2;Ee(a,new rt(.1*r,.24*r,(1.8+n()*2)*r,5),ce(o[l%o.length],{emissive:o[l%o.length],emissiveIntensity:.08}),[Math.cos(c)*.4*r,1*r,Math.sin(c)*.4*r],[1,1,1],[Math.cos(c)*.2,0,Math.sin(c)*.2])}this.obstacles.push({x:e,z:t,r:.7*r})}addBasaltSpire(e,t,n){const s=Ke(e,t),r=2.5+n()*5,a=new je;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<3;o++)Ee(a,new rt(.35+n()*.2,.7+n()*.4,r*(.5+n()*.5),5),ce(o%2?"#2f2a2f":"#413536"),[Math.cos(o*2.1)*.6,r*.35,Math.sin(o*2.1)*.6],[1,1,1],[Math.cos(o)*.12,0,Math.sin(o)*.12]);Ee(a,new _t(.08,r*.7,.08),ce("#ff5e2c",{emissive:"#ff5e2c",emissiveIntensity:1.4}),[0,r*.42,.4]),this.obstacles.push({x:e,z:t,r:1})}addIceSpike(e,t,n){const s=Ke(e,t),r=2+n()*4,a=new je;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<3;o++)Ee(a,new rn(.5+n()*.3,r*(.6+n()*.4),5),ce("#bff3ff",{emissive:"#67cfff",emissiveIntensity:.16,transparent:!0,opacity:.85,roughness:.2}),[Math.cos(o*2.2)*.5,r*.32,Math.sin(o*2.2)*.5],[1,1,1],[Math.cos(o)*.16,0,Math.sin(o)*.16]);this.obstacles.push({x:e,z:t,r:.9})}addCrystal(e,t,n){const s=Ke(e,t),r=2.5+n()*5,a=new je;a.position.set(e,s,t),this.root.add(a);for(let o=0;o<4;o++){const l=r*(.45+n()*.55);Ee(a,new rn(.35+n()*.35,l,5),ce(o%2?"#d5a8ff":"#b98bff",{emissive:"#b98bff",emissiveIntensity:.4,transparent:!0,opacity:.9,roughness:.2}),[Math.cos(o*1.8)*.5,l*.4,Math.sin(o*1.8)*.5],[1,1,1],[Math.cos(o)*.18,0,Math.sin(o)*.18])}this.obstacles.push({x:e,z:t,r:.85})}addFloatingRock(e,t,n){const s=Ke(e,t)+4+n()*4,r=new je;r.position.set(e,s,t),this.root.add(r),Ee(r,new cs(1.1+n()*.7,0),ce("#6b5a7d"),[0,0,0],[1.2,1,1],[n(),n(),n()]),Ee(r,new rn(.5,1.2,4),ce("#b98bff",{emissive:"#b98bff",emissiveIntensity:.4,transparent:!0,opacity:.75}),[0,-1.1,0],[1,1,1],[Math.PI,0,0]),this.floating.push({group:r,baseY:s,phase:n()*Math.PI*2,speed:.5+n()*.5})}addPond(e,t,n,s,r=!1){const a=Ke(e,t)+.28,o=new Pe(new Qn(n,28),ce(s,{transparent:!0,opacity:r?.78:.72,roughness:.16,metalness:.08,emissive:s,emissiveIntensity:r?.12:.06}));o.rotation.x=-Math.PI/2,o.position.set(e,a,t),this.root.add(o);const l=new Pe(new Tn(n+.2,.22,5,32),ce(r?"#d9f8ff":"#b7a477",{roughness:.9}));l.rotation.x=Math.PI/2,l.position.set(e,a+.02,t),this.root.add(l),this.animated.push({type:"water",mesh:o,phase:ui(`pond-${e}-${t}`)()*10})}addStream(){const e=[];for(let a=0;a<=18;a++){const o=a/18,l=-12+Math.sin(o*5)*4+o*14,c=-27-o*40;e.push([l,c])}const t=new Mt,n=[];for(let a=0;a<e.length;a++){const[o,l]=e[a],c=e[Math.min(e.length-1,a+1)],h=e[Math.max(0,a-1)],d=c[0]-h[0],u=c[1]-h[1],f=Math.hypot(d,u)||1;for(const g of[-1,1])n.push(o-u/f*1.5*g,Ke(o,l)+.2,l+d/f*1.5*g);a<e.length-1&&t.index?.array.push()}const s=[];for(let a=0;a<e.length-1;a++){const o=a*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}t.setAttribute("position",new et(n,3)),t.setIndex(s),t.computeVertexNormals();const r=new Pe(t,ce("#4fb7e8",{transparent:!0,opacity:.72,roughness:.18,emissive:"#2d8fc4",emissiveIntensity:.12}));this.root.add(r),this.animated.push({type:"water",mesh:r,phase:2})}addLavaPool(e,t,n){const s=Ke(e,t)+.18,r=new Pe(new Qn(n,24),ce("#ff5e2c",{emissive:"#ff4a1a",emissiveIntensity:1.5,roughness:.35}));r.rotation.x=-Math.PI/2,r.position.set(e,s,t),this.root.add(r);const a=new Pe(new Tn(n-.2,.32,5,28),ce("#2f2525"));a.rotation.x=Math.PI/2,a.position.set(e,s+.05,t),this.root.add(a),this.animated.push({type:"lava",mesh:r,phase:Math.random()*5}),this.hazards.push({x:e,z:t,r:n-.4,label:"Scalding lava"})}addGrassInstances(e,t,n,s,r){if(n<=0)return;const a=new rn(.09,.65,3),o=ce(s,{roughness:.95}),l=new Sf(a,o,n),c=new Ut;let h=0;for(let d=0;d<n;d++){const u=r()*Math.PI*2,f=Math.sqrt(r())*t*.92,g=e[0]+Math.cos(u)*f,_=e[1]+Math.sin(u)*f;if(this.isBlocked(g,_,1.2))continue;const m=Ke(g,_);c.position.set(g,m+.3,_),c.rotation.set((r()-.5)*.2,r()*Math.PI,(r()-.5)*.25),c.scale.setScalar(.6+r()*.9),c.updateMatrix(),l.setMatrixAt(h++,c.matrix)}l.count=h,this.root.add(l)}addFlowerInstances(e,t,n,s,r=!1,a=!1){if(n<=0)return;const o=r?["#ff8fc7","#ffd166","#9be8ff"]:a?["#c08bff","#ff8fc7","#9be8ff"]:["#ffd166","#ff8fc7","#f7fbff"];for(let l=0;l<n;l++){const c=s()*Math.PI*2,h=Math.sqrt(s())*t*.88,d=e[0]+Math.cos(c)*h,u=e[1]+Math.sin(c)*h;if(this.isBlocked(d,u,.8))continue;const f=Ke(d,u),g=Ed(s,o);Ee(this.root,new Bt(.16+s()*.12,6,4),ce(g,{emissive:g,emissiveIntensity:a?.5:.08}),[d,f+.35,u],[1,.7,1]),Ee(this.root,new rt(.02,.03,.4,3),ce("#4f7d48"),[d,f+.18,u])}}addShellProps(e,t,n){for(let s=0;s<10;s++){const r=n()*Math.PI*2,a=Math.sqrt(n())*t*.8,o=e[0]+Math.cos(r)*a,l=e[1]+Math.sin(r)*a;if(this.isBlocked(o,l,1))continue;const c=Ke(o,l);Ee(this.root,new Bt(.4+n()*.3,8,4,0,Math.PI*2,0,Math.PI/2),ce("#f5dfc8"),[o,c+.1,l],[1.2,.5,1],[0,n()*Math.PI,0])}}addEmberParticles(e){const t=this.quality==="low"?70:150,n=new Mt,s=new Float32Array(t*3);for(let a=0;a<t;a++)s[a*3]=-80+e()*180,s[a*3+1]=e()*10,s[a*3+2]=-40+e()*130;n.setAttribute("position",new Ht(s,3));const r=new Zs(n,new ds({color:16751180,size:.16,transparent:!0,opacity:.8,blending:bn,depthWrite:!1}));this.root.add(r),this.particles.push({points:r,type:"ember",speed:1.2,bounds:{x:[-80,100],z:[-40,90]}})}addSnowParticles(e){const t=this.quality==="low"?120:260,n=new Mt,s=new Float32Array(t*3);for(let a=0;a<t;a++)s[a*3]=10+e()*80,s[a*3+1]=e()*14,s[a*3+2]=42+e()*80;n.setAttribute("position",new Ht(s,3));const r=new Zs(n,new ds({color:16121855,size:.12,transparent:!0,opacity:.85,depthWrite:!1}));this.root.add(r),this.particles.push({points:r,type:"snow",speed:1.5,bounds:{x:[10,90],z:[42,122]}})}isBlocked(e,t,n=4){if(Math.hypot(e,t)<23||Kc(e,t)<3.4)return!0;for(const s of this.landmarks){const[r,a]=s.position;if(Math.hypot(e-r,t-a)<(s.radius||6)+1)return!0}for(const s of this.obstacles)if(Math.hypot(e-s.x,t-s.z)<Math.max(n,s.r+1.2))return!0;return!1}resolveCollision(e,t=.6){const n=Math.hypot(e.x,e.z);if(n>Jc){const s=Jc/n;e.x*=s,e.z*=s}for(const s of this.obstacles){const r=e.x-s.x,a=e.z-s.z,o=s.r+t,l=Math.hypot(r,a);if(l<o&&l>1e-4){const c=(o-l)/l;e.x+=r*c,e.z+=a*c}}return e}hazardAt(e){return this.hazards.find(t=>Math.hypot(e.x-t.x,e.z-t.z)<t.r)||null}nearestInteractable(e,t=3.8){let n=null,s=t;for(const r of this.interactables){const a=Math.hypot(e.x-r.position.x,e.z-r.position.z);a<s&&(n=r,s=a)}return n?{...n,distance:s}:null}update(e,t){for(const n of this.animated)if(n.type==="bob")n.mesh.position.y=n.baseY+Math.sin(t*(n.speed||1)+(n.mesh.id||0))*(n.amplitude||.1);else if(n.type==="spin")n.mesh.rotation.z+=e*(n.speed||.2),n.mesh.rotation.y+=e*(n.speed||.2)*.35;else if(n.type==="water")n.mesh.material.opacity=.66+Math.sin(t*1.2+(n.phase||0))*.05;else if(n.type==="lava")n.mesh.material.emissiveIntensity=1.35+Math.sin(t*2.3+(n.phase||0))*.2;else if(n.type==="flicker")n.mesh.material.opacity=(n.base||.4)+Math.sin(t*3.2)*.07;else if(n.type==="rings")for(const[s,r]of n.meshes.entries()){const a=(t*.18+s*.33)%1;r.scale.setScalar(1+a*.18),r.material.opacity=(.35-s*.07)*(1-a*.5)}else if(n.type==="npc")n.group.position.y=n.baseY+Math.sin(t*1.4+n.group.id)*.04;else if(n.type==="treadmill"){const s=n.group.children.filter(r=>r.geometry?.type==="CylinderGeometry");for(const r of s)r.rotation.x+=e*(n.offset%2?1.4:1)}for(const n of this.floating)n.group.position.y=n.baseY+Math.sin(t*n.speed+n.phase)*.7,n.group.rotation.y+=e*.08;for(const n of this.particles){const s=n.points.geometry.attributes.position.array;if(n.type==="ember")for(let r=0;r<s.length;r+=3)s[r+1]+=e*n.speed*(.5+r%7*.08),s[r+1]>12&&(s[r+1]=0);else if(n.type==="snow")for(let r=0;r<s.length;r+=3)s[r+1]-=e*n.speed*(.5+r%5*.1),s[r]+=Math.sin(t+r)*e*.12,s[r+1]<0&&(s[r+1]=14);n.points.geometry.attributes.position.needsUpdate=!0}return this.ocean&&(this.ocean.material.opacity=.9+Math.sin(t*.55)*.025),t}setQuality(e){this.quality=e}}const Ey=7.2,Ty=11.2,Ay=22,Cy=7.4;function Fn(i,e={}){return new fn({color:i,flatShading:!1,roughness:e.roughness??.62,metalness:e.metalness??.04,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity||0})}function sn(i,e,t,n,s=[1,1,1],r=[0,0,0]){const a=new Pe(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}class Ry{constructor(e,t=[0,0,10]){this.group=new je,this.group.position.set(t[0],Ke(t[0],t[2]),t[2]),e.add(this.group),this.velocity=new P,this.position=this.group.position,this.facing=0,this.cameraYaw=Math.PI,this.cameraPitch=.24,this.cameraDistance=9.4,this.cameraTarget=new P,this.cameraPosition=new P,this.onGround=!0,this.radius=.55,this.speed=0,this.parts={},this.build(),this.cameraPosition.set(0,9,18),this.moving=!1,this.sprinting=!1}build(){const e=Fn("#e8b48f"),t=Fn("#2f7f82"),n=Fn("#1e575c"),s=Fn("#ffcc66"),r=Fn("#352a2a"),a=Fn("#6b4c36"),o=Fn("#cfd6d9",{metalness:.55,roughness:.38}),l=Fn("#9be8ff",{emissive:"#5fc8ff",emissiveIntensity:.8}),c=sn(this.group,new pa(.34,.62,12,12),t,[0,1.06,0],[1,1,.9]);this.parts.body=c,sn(this.group,new rt(.36,.4,.35,12,1),n,[0,.68,0]),sn(this.group,new Bt(.31,12,10),e,[0,1.72,.01]);const h=sn(this.group,new pn(.335,2),r,[0,1.81,-.03],[1,.8,1]);this.parts.hair=h,sn(this.group,new Bt(.075,10,8),Fn("#1b1d24"),[-.11,1.74,.27]),sn(this.group,new Bt(.075,10,8),Fn("#1b1d24"),[.11,1.74,.27]),sn(this.group,new Bt(.09,10,8),e,[0,1.66,.29],[1.2,.6,.55]),sn(this.group,new _t(.76,.16,.42),s,[0,1.42,.02],[1,1,1],[0,0,-.03]),sn(this.group,new _t(.22,.68,.12),s,[-.28,1.14,-.28],[1,1,1],[.18,0,.24]),sn(this.group,new _t(.5,.68,.26),a,[0,1.1,-.38]),sn(this.group,new _t(.38,.38,.18),a,[0,.82,-.54]),sn(this.group,new rt(.045,.05,1.35,12,1),o,[.46,.6,.05],[1,1,1],[.05,0,.04]),sn(this.group,new Bt(.08,10,8),l,[.46,1.29,.05]),this.parts.legs=[this.makeLimb(e,a,[-.18,.6,0],.12,.54),this.makeLimb(e,a,[.18,.6,0],.12,.54)],this.parts.arms=[this.makeLimb(e,t,[-.4,1.28,0],.105,.58),this.makeLimb(e,t,[.4,1.28,0],.105,.58)];const d=new Pe(new Qn(.58,24),new wn({color:724758,transparent:!0,opacity:.3,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.04,this.group.add(d),this.shadow=d}makeLimb(e,t,n,s,r){const a=new je;a.position.set(...n);const o=new Pe(new rt(s,s*.9,r,12,1),t);o.position.y=-r/2,a.add(o);const l=new Pe(new Bt(s*1.2,10,8),e);return l.position.y=-r-s*.3,a.add(l),this.group.add(a),a}update(e,t,n,s=!0){const r=t.consumeLook();if(s){this.cameraYaw-=r.dx*.0045,this.cameraPitch=ql.clamp(this.cameraPitch+r.dy*.0032,-.03,.88);const p=t.consumeWheel();p&&(this.cameraDistance=ql.clamp(this.cameraDistance+p*.8,5.5,15))}const a=s?t.getMoveVector():{x:0,y:0},o=s&&(t.isDown("ShiftLeft")||t.isDown("ShiftRight"));this.sprinting=o&&(a.x!==0||a.y!==0);const l=o?Ty:Ey,c=-Math.sin(this.cameraYaw),h=-Math.cos(this.cameraYaw),d=Math.cos(this.cameraYaw),u=-Math.sin(this.cameraYaw);let f=(c*a.y+d*a.x)*l,g=(h*a.y+u*a.x)*l;s||(f=0,g=0);const _=1-Math.exp(-18*e);this.velocity.x+=(f-this.velocity.x)*_,this.velocity.z+=(g-this.velocity.z)*_,this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.moving=this.speed>.35,s&&t.consumePressed("Space")&&this.onGround&&(this.velocity.y=Cy,this.onGround=!1),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,n.resolveCollision(this.position,this.radius);const m=Ke(this.position.x,this.position.z);if(this.velocity.y-=Ay*e,this.position.y+=this.velocity.y*e,this.position.y<=m&&(this.position.y=m,this.velocity.y=0,this.onGround=!0),this.moving){let M=Math.atan2(this.velocity.x,this.velocity.z)-this.facing;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;this.facing+=M*Math.min(1,e*12)}this.group.rotation.y=this.facing,this.animate(e,t),this.updateCamera(e,n)}animate(e,t){const n=performance.now()/1e3,s=this.moving?this.sprinting?1.8:1.1:0;for(const[r,a]of this.parts.legs.entries())a.rotation.x=Math.sin(n*9*Math.max(.4,s)+r*Math.PI)*(this.moving?.62:.02);for(const[r,a]of this.parts.arms.entries())a.rotation.x=Math.sin(n*9*Math.max(.4,s)+r*Math.PI+Math.PI)*(this.moving?.5:.04);this.parts.body&&(this.parts.body.position.y=1.06+Math.abs(Math.sin(n*9*Math.max(.4,s)))*(this.moving?.035:.012)),this.parts.hair&&(this.parts.hair.rotation.z=Math.sin(n*3.2)*.02),this.shadow.position.y=.04+Math.max(0,Ke(this.position.x,this.position.z)-this.position.y)*.4,this.shadow.scale.setScalar(this.onGround?1:.75)}updateCamera(e,t){const n=new P(this.position.x,this.position.y+1.55,this.position.z),s=Math.cos(this.cameraPitch)*this.cameraDistance,r=new P(Math.sin(this.cameraYaw)*s,Math.sin(this.cameraPitch)*this.cameraDistance+.7,Math.cos(this.cameraYaw)*s);this.cameraTarget.lerp(n,1-Math.exp(-12*e));const a=n.clone().add(r),o=Ke(a.x,a.z)+1.2;a.y<o&&(a.y=o),this.cameraPosition.lerp(a,1-Math.exp(-9*e))}applyCamera(e){e.position.copy(this.cameraPosition),e.lookAt(this.cameraTarget)}getPosition(){return this.position}teleport(e,t){this.position.set(e,Ke(e,t),t),this.velocity.set(0,0,0)}setCameraYaw(e){this.cameraYaw=e}}const Ne=(i,e,t,n,s,r,a,o,l,c={})=>({id:i,name:e,type:t,power:n,cooldown:s,range:r,shape:a,effect:o,description:l,radius:c.radius??4.2,cone:c.cone??Math.PI/3,knockback:c.knockback??0,icon:c.icon??t.toLowerCase()}),aa={tackle:Ne("tackle","Tackle","Stone",34,1.1,2.6,"single",{kind:"damage"},"A dependable body check.",{icon:"stone"}),focus:Ne("focus","Focus","Spirit",0,8,0,"self",{kind:"buff",stat:"attack",amount:.25,duration:7},"Sharpens the next few strikes.",{icon:"spirit"}),rest:Ne("rest","Rest","Nature",0,12,0,"self",{kind:"heal",amount:.24},"Recovers a portion of health.",{icon:"leaf"}),screech:Ne("screech","Screech","Spirit",0,9,5,"aoe",{kind:"debuff",stat:"defence",amount:.22,duration:6},"A piercing cry that weakens nearby foes.",{icon:"spirit"}),leafLash:Ne("leafLash","Leaf Lash","Nature",40,1.5,3.4,"single",{kind:"damage"},"A whip of serrated leaves."),rootSnare:Ne("rootSnare","Root Snare","Nature",22,8,4.2,"aoe",{kind:"damage",status:{id:"snare",chance:.7,duration:4}},"Roots burst up and pin movement."),bloomBurst:Ne("bloomBurst","Bloom Burst","Nature",0,11,0,"self",{kind:"heal",amount:.3},"A rush of pollen closes wounds."),thornVolley:Ne("thornVolley","Thorn Volley","Nature",30,3.8,6.5,"cone",{kind:"damage"},"A fan of hardened thorns."),groveGuard:Ne("groveGuard","Grove Guard","Nature",0,13,0,"self",{kind:"shield",amount:.28,duration:8},"Bark and moss form a living barrier."),seedSling:Ne("seedSling","Seed Sling","Nature",26,1.9,7,"single",{kind:"damage"},"A hard seed fired with surprising force."),verdantPulse:Ne("verdantPulse","Verdant Pulse","Nature",34,7,4.6,"aoe",{kind:"damage",status:{id:"regen",chance:1,duration:5,self:!0}},"Life energy erupts and lingers around the caster."),emberJab:Ne("emberJab","Ember Jab","Fire",42,1.6,2.9,"single",{kind:"damage",status:{id:"burn",chance:.25,duration:4}},"A quick strike wrapped in sparks."),flameWave:Ne("flameWave","Flame Wave","Fire",32,4.4,5.5,"cone",{kind:"damage",status:{id:"burn",chance:.4,duration:4}},"A rolling sheet of fire."),cinderNova:Ne("cinderNova","Cinder Nova","Fire",46,9,5.4,"aoe",{kind:"damage"},"An explosive ring of cinders.",{knockback:2}),heatVeil:Ne("heatVeil","Heat Veil","Fire",0,11,0,"self",{kind:"buff",stat:"speed",amount:.3,duration:7},"Shimmering heat makes the body hard to track."),scorchMark:Ne("scorchMark","Scorch Mark","Fire",20,6,6.5,"aoe",{kind:"damage",status:{id:"burn",chance:1,duration:6}},"Marks an area with persistent embers."),blazeCharge:Ne("blazeCharge","Blaze Charge","Fire",50,7,4.4,"single",{kind:"damage"},"A reckless, blazing rush.",{knockback:3}),hearthGlow:Ne("hearthGlow","Hearth Glow","Fire",0,12,0,"self",{kind:"heal",amount:.2},"A controlled inner flame restores strength."),iceShard:Ne("iceShard","Ice Shard","Frost",38,1.5,7.5,"single",{kind:"damage",status:{id:"chill",chance:.3,duration:4}},"A clean splinter of glacial ice."),frostNova:Ne("frostNova","Frost Nova","Frost",30,7,4.8,"aoe",{kind:"damage",status:{id:"chill",chance:.8,duration:5}},"A wave of cold that slows everything it touches."),snowGuard:Ne("snowGuard","Snow Guard","Frost",0,12,0,"self",{kind:"shield",amount:.3,duration:9},"Packed snow hardens into armor."),glacialSpike:Ne("glacialSpike","Glacial Spike","Frost",55,9,6,"single",{kind:"damage",status:{id:"stun",chance:.25,duration:1.2}},"A spear of ice erupts from below."),auroraMist:Ne("auroraMist","Aurora Mist","Frost",16,8,5.2,"aoe",{kind:"damage",status:{id:"weaken",chance:.6,duration:6}},"Cold light settles over the arena."),rimeShell:Ne("rimeShell","Rime Shell","Frost",0,14,0,"self",{kind:"shield",amount:.24,duration:6},"A shell of hoarfrost absorbs punishment."),bubbleBolt:Ne("bubbleBolt","Bubble Bolt","Water",36,1.4,7.5,"single",{kind:"damage"},"A compressed bubble fired like a stone."),tidalSweep:Ne("tidalSweep","Tidal Sweep","Water",30,4.8,5.2,"cone",{kind:"damage"},"A broad, shoving arc of water.",{knockback:2}),healingSpring:Ne("healingSpring","Healing Spring","Water",0,13,0,"self",{kind:"heal",amount:.32},"Cool, clean water mends the body."),torrentRing:Ne("torrentRing","Torrent Ring","Water",40,8,5.4,"aoe",{kind:"damage"},"A spiraling ring of current."),mistStep:Ne("mistStep","Mist Step","Water",0,9,0,"self",{kind:"buff",stat:"speed",amount:.22,duration:6},"Dissolves into cool mist and reforms elsewhere."),abyssLash:Ne("abyssLash","Abyss Lash","Water",48,6.5,3.2,"single",{kind:"damage"},"A dark tendril of deep water."),soothingRain:Ne("soothingRain","Soothing Rain","Water",0,15,0,"self",{kind:"heal",amount:.2,status:{id:"regen",chance:1,duration:6}},"A private rain shower that keeps healing."),pebbleShot:Ne("pebbleShot","Pebble Shot","Stone",34,1.5,7,"single",{kind:"damage"},"A fistful of stones, aimed precisely."),quakeStomp:Ne("quakeStomp","Quake Stomp","Stone",44,7.5,5,"aoe",{kind:"damage",status:{id:"snare",chance:.5,duration:3}},"The ground buckles around the impact.",{knockback:1}),stoneSkin:Ne("stoneSkin","Stone Skin","Stone",0,13,0,"self",{kind:"shield",amount:.34,duration:9},"A second skin of layered slate."),rockSlide:Ne("rockSlide","Rock Slide","Stone",38,6,5.6,"cone",{kind:"damage"},"A tumbling wall of rubble.",{knockback:2}),gritGuard:Ne("gritGuard","Grit Guard","Stone",0,10,0,"self",{kind:"buff",stat:"defence",amount:.3,duration:7},"Digs in and refuses to move."),fossilJab:Ne("fossilJab","Fossil Jab","Stone",40,2.2,2.8,"single",{kind:"damage"},"A heavy strike with an ancient edge."),terraPulse:Ne("terraPulse","Terra Pulse","Stone",34,8.5,4.8,"aoe",{kind:"damage",status:{id:"weaken",chance:.35,duration:4}},"A low pulse rattles bones and armor."),sparkShot:Ne("sparkShot","Spark Shot","Storm",37,1.3,8,"single",{kind:"damage",status:{id:"shock",chance:.2,duration:3}},"A focused arc of static."),chainArc:Ne("chainArc","Chain Arc","Storm",30,5,6.2,"cone",{kind:"damage",status:{id:"shock",chance:.45,duration:3}},"Lightning skips across everything in front."),windStep:Ne("windStep","Wind Step","Storm",0,8,0,"self",{kind:"buff",stat:"speed",amount:.35,duration:6},"Rides a gust to impossible speed."),thunderFall:Ne("thunderFall","Thunder Fall","Storm",58,10,6.5,"aoe",{kind:"damage"},"A delayed pillar of thunder.",{radius:3.2}),staticField:Ne("staticField","Static Field","Storm",18,7,4.6,"aoe",{kind:"damage",status:{id:"shock",chance:.7,duration:4}},"A crackling field that clings to foes."),galeCut:Ne("galeCut","Gale Cut","Storm",42,2.4,3.4,"single",{kind:"damage"},"A blade of compressed wind."),starBolt:Ne("starBolt","Star Bolt","Astral",41,1.5,8,"single",{kind:"damage"},"A precise shard of falling starlight."),gravityWell:Ne("gravityWell","Gravity Well","Astral",28,8,4.8,"aoe",{kind:"damage",status:{id:"snare",chance:.9,duration:4}},"Space folds and holds the enemy in place."),prismWard:Ne("prismWard","Prism Ward","Astral",0,12,0,"self",{kind:"shield",amount:.32,duration:8},"A shifting prism scatters incoming force."),novaPulse:Ne("novaPulse","Nova Pulse","Astral",46,8.5,5.2,"aoe",{kind:"damage"},"A silent, expanding ring of starfire."),cometTrail:Ne("cometTrail","Comet Trail","Astral",36,4.2,7,"cone",{kind:"damage",status:{id:"burn",chance:.3,duration:4}},"A burning comet trail sweeps the field."),starlightMend:Ne("starlightMend","Starlight Mend","Astral",0,13,0,"self",{kind:"heal",amount:.28},"Starlight knits wounds closed."),phaseShift:Ne("phaseShift","Phase Shift","Astral",0,11,0,"self",{kind:"buff",stat:"speed",amount:.28,duration:5},"Slips partly out of phase with the world."),shadowNip:Ne("shadowNip","Shadow Nip","Spirit",39,1.5,3.2,"single",{kind:"damage",status:{id:"weaken",chance:.25,duration:4}},"A bite from a patch of living shadow."),soulDrain:Ne("soulDrain","Soul Drain","Spirit",30,6,4.2,"single",{kind:"damage",drain:.45},"Steals vitality and gives it to the caster."),haunt:Ne("haunt","Haunt","Spirit",18,7.5,5,"aoe",{kind:"damage",status:{id:"weaken",chance:.8,duration:6}},"A chorus of whispers saps resolve."),spiritVeil:Ne("spiritVeil","Spirit Veil","Spirit",0,12,0,"self",{kind:"shield",amount:.22,duration:7},"A veil of memory softens harm."),wispFlare:Ne("wispFlare","Wisp Flare","Spirit",43,6,5.8,"cone",{kind:"damage",status:{id:"burn",chance:.3,duration:3}},"Cold flames that burn without heat."),echoStep:Ne("echoStep","Echo Step","Spirit",0,9,0,"self",{kind:"buff",stat:"speed",amount:.25,duration:6},"Leaves an afterimage to confuse enemies."),dreamSnare:Ne("dreamSnare","Dream Snare","Spirit",26,8,4.4,"aoe",{kind:"damage",status:{id:"stun",chance:.4,duration:1.5}},"Pulls foes into a brief waking dream.")},no={Nature:["leafLash","rootSnare","bloomBurst","thornVolley","groveGuard","seedSling","verdantPulse"],Fire:["emberJab","flameWave","cinderNova","heatVeil","scorchMark","blazeCharge","hearthGlow"],Frost:["iceShard","frostNova","snowGuard","glacialSpike","auroraMist","rimeShell"],Water:["bubbleBolt","tidalSweep","healingSpring","torrentRing","mistStep","abyssLash","soothingRain"],Stone:["pebbleShot","quakeStomp","stoneSkin","rockSlide","gritGuard","fossilJab","terraPulse"],Storm:["sparkShot","chainArc","windStep","thunderFall","staticField","galeCut"],Astral:["starBolt","gravityWell","prismWard","novaPulse","cometTrail","starlightMend","phaseShift"],Spirit:["shadowNip","soulDrain","haunt","spiritVeil","wispFlare","echoStep","dreamSnare"]};function fi(i){return aa[i]||aa.tackle}const Py=[["Spriglow","Nature","Support","common","verdant","biped",2,16],["Verdantle","Nature","Guardian","uncommon","verdant","quadruped",3,32],["Sylvanox","Nature/Spirit","Guardian","epic","verdant","quadruped",0,0],["Cindrake","Fire","Striker","common","ember","wyvern",5,16],["Pyrolisk","Fire","Bruiser","uncommon","ember","quadruped",6,32],["Volcarion","Fire/Stone","Bruiser","epic","ember","wyvern",0,0],["Tidewisp","Water","Support","common","tide","aquatic",8,16],["Brookfin","Water","Skirmisher","uncommon","tide","aquatic",9,32],["Maeloris","Water/Storm","Controller","epic","tide","serpent",0,0],["Mossling","Nature","Tank","common","verdant","blob",11,18],["Mosswarden","Nature/Stone","Guardian","rare","verdant","golem",0,0],["Fernix","Nature","Assassin","common","verdant","quadruped",0,0],["Bloomble","Nature","Support","common","verdant","blob",0,0],["Petalcub","Nature","Support","common","verdant","quadruped",15,20],["Petalarch","Nature/Astral","Healer","rare","verdant","biped",0,0],["Thistlethorn","Nature","Controller","uncommon","verdant","quadruped",0,0],["Glimmeroot","Nature/Astral","Trickster","rare","verdant","biped",0,0],["Barkling","Nature","Tank","common","verdant","quadruped",19,18],["Timberox","Nature/Stone","Tank","rare","verdant","quadruped",0,0],["Dewdrop","Water/Nature","Support","common","tide","blob",0,0],["Sunpetal","Nature/Fire","Striker","uncommon","verdant","biped",0,0],["Vinecoil","Nature","Controller","uncommon","verdant","serpent",0,0],["Fungalo","Nature","Support","common","verdant","blob",0,0],["Sporelle","Nature","Trickster","common","verdant","flyer",0,0],["Meadowry","Nature","Skirmisher","common","verdant","flyer",0,0],["Briarhide","Nature","Tank","uncommon","verdant","quadruped",0,0],["Acornaut","Nature/Stone","Tank","common","verdant","biped",0,0],["Willowisp","Nature/Astral","Controller","rare","verdant","spirit",0,0],["Clovercub","Nature","Support","common","verdant","quadruped",0,0],["Canopix","Nature","Assassin","rare","verdant","flyer",0,0],["Emberpup","Fire","Striker","common","ember","quadruped",32,16],["Blazemane","Fire","Bruiser","uncommon","ember","quadruped",33,32],["Pyrewolf","Fire/Astral","Assassin","epic","ember","quadruped",0,0],["Magmite","Fire/Stone","Tank","common","ember","golem",0,0],["Ashenwing","Fire","Skirmisher","rare","ember","flyer",0,0],["Coalback","Fire","Tank","common","ember","quadruped",0,0],["Scorchtail","Fire","Striker","uncommon","ember","serpent",0,0],["Flickerfin","Fire/Water","Trickster","rare","ember","aquatic",0,0],["Cinderling","Fire","Support","common","ember","blob",0,0],["Obsidrake","Fire/Stone","Bruiser","epic","ember","wyvern",0,0],["Flamewisp","Fire/Astral","Controller","rare","ember","spirit",0,0],["Smolderox","Fire/Stone","Tank","uncommon","ember","quadruped",0,0],["Emberfly","Fire","Skirmisher","common","ember","flyer",0,0],["Charhound","Fire","Assassin","uncommon","ember","quadruped",0,0],["Lavalux","Fire/Astral","Controller","epic","ember","spirit",0,0],["Pyreling","Fire","Striker","common","ember","biped",0,0],["Sootbeak","Fire","Skirmisher","common","ember","flyer",0,0],["Blazetail","Fire","Skirmisher","uncommon","ember","quadruped",0,0],["Infernalope","Fire/Storm","Striker","rare","ember","quadruped",0,0],["Cinderbean","Fire","Support","common","ember","blob",0,0],["Puddlepaw","Water","Support","common","tide","quadruped",52,16],["Riverfang","Water","Assassin","uncommon","tide","quadruped",0,0],["Coralisk","Water/Stone","Tank","uncommon","tide","golem",0,0],["Kelpkit","Water","Controller","common","tide","serpent",0,0],["Bubblefin","Water","Support","common","tide","aquatic",0,0],["Wavemoth","Water/Astral","Trickster","rare","tide","flyer",0,0],["Shelldrake","Water/Stone","Tank","rare","tide","quadruped",0,0],["Ripplet","Water","Skirmisher","common","tide","aquatic",0,0],["Abyssfang","Water/Spirit","Assassin","epic","tide","serpent",0,0],["Mistray","Water/Astral","Controller","rare","tide","flyer",0,0],["Tidehoof","Water","Striker","uncommon","tide","quadruped",0,0],["Splashcub","Water","Support","common","tide","quadruped",0,0],["Reefwing","Water","Skirmisher","uncommon","tide","flyer",0,0],["Deepcoil","Water/Spirit","Controller","rare","tide","serpent",0,0],["Abyssalune","Water/Astral","Support","legendary","tide","serpent",0,0],["Brineling","Water","Healer","common","tide","blob",0,0],["Aquarune","Water/Astral","Support","rare","tide","spirit",0,0],["Pearlback","Water/Stone","Tank","rare","tide","golem",0,0],["Currentail","Water","Skirmisher","common","tide","aquatic",0,0],["Hydrowl","Water/Storm","Controller","uncommon","tide","flyer",0,0],["Snowkit","Frost","Striker","common","frost","quadruped",72,16],["Frostfang","Frost/Stone","Bruiser","uncommon","frost","quadruped",0,0],["Glaciern","Frost","Tank","rare","frost","golem",0,0],["Icicleaf","Frost/Nature","Support","uncommon","frost","biped",0,0],["Chillwing","Frost/Astral","Skirmisher","rare","frost","flyer",0,0],["Frostbeak","Frost","Assassin","common","frost","flyer",0,0],["Hailstone","Frost/Stone","Tank","common","frost","golem",0,0],["Borealing","Frost/Astral","Controller","rare","frost","serpent",0,0],["Snowmoth","Frost","Support","common","frost","flyer",0,0],["Glaciarch","Frost/Stone","Guardian","legendary","frost","golem",0,0],["Icetooth","Frost","Assassin","uncommon","frost","quadruped",0,0],["Rimecoil","Frost","Controller","uncommon","frost","serpent",0,0],["Blizzardine","Frost/Storm","Striker","epic","frost","quadruped",0,0],["Glacierox","Frost/Stone","Tank","epic","frost","quadruped",0,0],["Permafin","Frost/Water","Skirmisher","common","frost","aquatic",0,0],["Silverfrost","Frost/Astral","Trickster","rare","frost","spirit",0,0],["Coldspike","Frost/Stone","Striker","common","frost","golem",0,0],["Aurorael","Frost/Astral","Healer","epic","frost","spirit",0,0],["Snowdrift","Frost","Support","common","frost","blob",0,0],["Frostmaw","Frost/Spirit","Bruiser","rare","frost","quadruped",0,0],["Stardustling","Astral","Support","common","astral","spirit",92,18],["Nebulynx","Astral/Spirit","Assassin","rare","astral","quadruped",0,0],["Cosmoth","Astral/Frost","Skirmisher","rare","astral","flyer",0,0],["Voidpup","Astral/Spirit","Striker","uncommon","astral","quadruped",0,0],["Lunafin","Astral/Water","Support","uncommon","astral","aquatic",0,0],["Quasaro","Astral/Storm","Striker","epic","astral","flyer",0,0],["Galaxkit","Astral","Trickster","common","astral","quadruped",0,0],["Eclipsil","Astral/Spirit","Controller","rare","astral","serpent",0,0],["Starcaller","Astral","Support","uncommon","astral","biped",0,0],["Aetherion","Astral/Storm","Guardian","legendary","astral","flyer",0,0],["Meteorling","Astral/Stone","Striker","common","astral","golem",0,0],["Chronowisp","Astral/Spirit","Controller","rare","astral","spirit",0,0],["Celestail","Astral/Frost","Skirmisher","uncommon","astral","flyer",0,0],["Riftling","Astral/Spirit","Trickster","rare","astral","blob",0,0],["Orbitox","Astral/Stone","Tank","epic","astral","golem",0,0],["Solstice","Fire/Astral","Striker","legendary","astral","biped",0,0],["Nightbloom","Spirit/Nature","Support","rare","astral","blob",0,0],["Sablemoth","Spirit/Astral","Trickster","uncommon","astral","flyer",0,0],["Prismara","Astral/Water","Healer","epic","astral","serpent",0,0],["Astrafin","Astral/Water","Skirmisher","rare","astral","aquatic",0,0],["Pebblit","Stone","Tank","common","verdant","golem",112,16],["Boulderox","Stone","Tank","uncommon","verdant","golem",0,0],["Granitlet","Stone","Striker","common","ember","quadruped",0,0],["Slatewing","Stone/Storm","Skirmisher","uncommon","astral","flyer",0,0],["Cragmaw","Stone","Bruiser","uncommon","ember","quadruped",0,0],["Geodite","Stone/Astral","Controller","rare","astral","golem",0,0],["Basaltine","Stone/Fire","Tank","rare","ember","golem",0,0],["Terracub","Stone","Support","common","verdant","quadruped",0,0],["Flintbeak","Stone","Skirmisher","common","ember","flyer",0,0],["Quarrymane","Stone","Striker","uncommon","ember","quadruped",0,0],["Sandclaw","Stone","Assassin","common","tide","quadruped",0,0],["Shalewing","Stone/Astral","Skirmisher","rare","frost","flyer",0,0],["Glintstone","Stone/Astral","Support","rare","astral","golem",0,0],["Rubblet","Stone","Trickster","common","ember","blob",0,0],["Cliffcoil","Stone/Storm","Controller","uncommon","frost","serpent",0,0],["Cairnox","Stone/Spirit","Guardian","legendary","astral","golem",0,0],["Sparkit","Storm","Striker","common","astral","quadruped",128,16],["Voltmane","Storm/Spirit","Bruiser","uncommon","astral","quadruped",0,0],["Staticub","Storm","Trickster","common","tide","blob",0,0],["Galewing","Storm/Frost","Skirmisher","uncommon","frost","flyer",0,0],["Thunderhoof","Storm","Striker","rare","verdant","quadruped",0,0],["Zapfin","Storm/Water","Skirmisher","common","tide","aquatic",0,0],["Squallix","Storm/Astral","Controller","rare","astral","flyer",0,0],["Cyclonette","Storm","Controller","uncommon","astral","spirit",0,0],["Breezebeak","Storm","Skirmisher","common","tide","flyer",0,0],["Voltrix","Storm/Astral","Striker","epic","astral","quadruped",0,0],["Tempestail","Storm/Astral","Controller","rare","astral","serpent",0,0],["Windshear","Storm","Assassin","uncommon","frost","flyer",0,0],["Emberstorm","Fire/Storm","Striker","rare","ember","wyvern",0,0],["Tempestrix","Storm/Frost","Guardian","legendary","astral","flyer",0,0],["Shadepup","Spirit","Assassin","common","astral","quadruped",142,16],["Umbrawl","Spirit/Astral","Bruiser","rare","astral","quadruped",0,0],["Wispling","Spirit","Support","common","astral","spirit",0,0],["Ghastelle","Spirit/Astral","Controller","rare","astral","spirit",0,0],["Soulmoth","Spirit","Support","uncommon","astral","flyer",0,0],["Phantomane","Spirit/Astral","Striker","epic","astral","quadruped",0,0],["Gravecoil","Spirit/Stone","Controller","uncommon","astral","serpent",0,0],["Hexkit","Spirit","Trickster","common","astral","quadruped",0,0],["Wraitheling","Spirit/Astral","Assassin","rare","astral","spirit",0,0],["Luminarch","Astral/Spirit","Support","ultra","astral","spirit",0,0]],eh={Nature:[["#71cf6f","#2f7a45","#d7ff8f","#17351f"],["#8bdc72","#3f8f4a","#ffe28a","#18351f"],["#54b96a","#226044","#b9ffa8","#102a1b"],["#a7d85f","#4e7f2e","#ffca7a","#23310e"]],Fire:[["#ff8a4c","#b8331a","#ffd166","#3b130a"],["#ffb347","#d8481f","#fff0a6","#431609"],["#ff6b4a","#8c2418","#ffd08a","#2c0b08"],["#f9a03f","#a63d1a","#ffe066","#321106"]],Frost:[["#b4ecff","#5aa9d6","#ffffff","#173c52"],["#d9f8ff","#7ac6e8","#a4d8ff","#1a3b55"],["#9fe2f5","#4386b8","#f5ffff","#102c42"],["#c8f4ff","#6fb3d6","#ffffff","#203b54"]],Water:[["#65b8ff","#2868b8","#a9f2ff","#0c2246"],["#4fb2d8","#1d6692","#b9ffe8","#0a263a"],["#7cc6f2","#2e5fae","#d8f6ff","#0d1e42"],["#56c8d8","#1e6f8f","#b3ffe2","#082a32"]],Stone:[["#d0aa77","#78573b","#ffe0a3","#332417"],["#b6a58e","#665b4d","#e8d7b7","#2a241d"],["#c5a076","#6d4f36","#ffcf8a","#2d1f14"],["#a58d70","#5c4936","#e0c59a","#241b12"]],Storm:[["#ffe066","#d3a11a","#fffbd1","#3b2b07"],["#f7d94c","#b98a12","#ffffff","#302405"],["#ffef8a","#c59a23","#d6f7ff","#3c2d08"],["#f2e05c","#a97e14","#fff7c2","#2d2205"]],Astral:[["#c08bff","#6139a8","#ffd6ff","#24103f"],["#b8a1ff","#5340a4","#a7f6ff","#1c143f"],["#d3a6ff","#6f42b8","#fff0b8","#2c1250"],["#a98bff","#4a2e8f","#f2b8ff","#1c0d3a"]],Spirit:[["#ff9fd0","#a03a72","#ffe3f2","#3b1128"],["#d7a2ff","#7540a8","#ffd7eb","#28113f"],["#f59ac2","#913963","#e8e0ff","#35101f"],["#c6a4ff","#6c46a6","#ffd0f0","#24123b"]]},th={Nature:["Verdant","Rooted","Blooming","Mossy","Sunlit","Thorned","Canopy","Meadow","Evergreen","Dewy"],Fire:["Ember","Blazing","Scorched","Smoldering","Ashen","Cinder","Furnace","Kindled","Molten","Flare"],Frost:["Glacial","Rimed","Snowbound","Frozen","Auroral","Icicle","Winter","Permafrost","Silver","Hail"],Water:["Tidal","Briny","Rippling","Deepwater","Coral","Mist","Current","Lagoon","Undertow","Rain"],Stone:["Granite","Basalt","Craggy","Fossil","Quarry","Layered","Ironstone","Pebbled","Steadfast","Bedrock"],Storm:["Charged","Crackling","Gale","Thunder","Static","Cyclone","Tempest","Voltaic","Squall","Brightbolt"],Astral:["Starlit","Nebular","Riftborn","Comet","Orbital","Lunar","Quasar","Eclipsed","Celestial","Void"],Spirit:["Haunted","Whispering","Phantom","Dreaming","Umbral","Echoing","Spectral","Memory","Twilight","Wandering"]},io=["Instinct","Pulse","Bond","Guard","Step","Sense","Veil","Surge","Mark","Song","Shell","Ward","Trace","Bloom","Spark"],nh=[{kind:"regen",name:"regeneration",value:.012,text:"Slowly restores health during battle."},{kind:"thorns",name:"retaliation",value:.16,text:"Reflects a portion of contact damage."},{kind:"guard",name:"damage reduction",value:.1,text:"Reduces incoming damage by 10%."},{kind:"swift",name:"speed",value:.12,text:"Moves 12% faster in battle."},{kind:"fierce",name:"attack",value:.12,text:"Deals 12% more move damage."},{kind:"sturdy",name:"defence",value:.12,text:"Takes 12% less damage from heavy hits."},{kind:"lucky",name:"capture fortune",value:.08,text:"Improves capture success when this creature is active."},{kind:"mentor",name:"experience gain",value:.15,text:"Earns 15% bonus experience from victories."},{kind:"intimidate",name:"enemy weakening",value:.08,text:"Wild enemies deal 8% less damage."},{kind:"lastStand",name:"last stand",value:.2,text:"Gains 20% attack while below one third health."},{kind:"vampiric",name:"lifesteal",value:.08,text:"Heals for a portion of damage dealt."},{kind:"static",name:"static shock",value:.18,text:"Contact attacks may shock the attacker."},{kind:"sureFooted",name:"footing",value:1,text:"Cannot be snared or rooted."},{kind:"keenEye",name:"precision",value:.08,text:"Improves critical strike chance."},{kind:"shieldOnLow",name:"emergency shield",value:.18,text:"Creates a shield once when health falls below half."}],ih={verdant:["Grows where old roots remember rain","Nests in the warm hollows beneath the canopy","Follows the stream-song through the undergrowth","Sleeps in moss beds and wakes with the dawn chorus"],ember:["Basks on black-glass ridges above the caldera","Feeds on heat shimmer and cooled cinders","Builds nests from pumice and warm stone","Travels the safe channels between lava rivers"],tide:["Rides the breathing tide along the shell coast","Hides in bright coral mazes at low water","Leaves spiral tracks across wet sand","Listens for storms through the deep current"],frost:["Crosses the blue ice under pale auroras","Shelters in snow caves carved by old winds","Collects frozen starlight in its fur","Follows the ridge line above the silent pines"],astral:["Appears where crystal spires catch the night sky","Drifts through the scar on currents of starlight","Leaves faint constellations in its wake","Hums in harmony with the floating stones"]},Cd={Striker:"Closes distance quickly and looks for a clean opening.",Bruiser:"Applies steady pressure and refuses to give ground.",Tank:"Holds a line, drawing attention away from smaller creatures.",Assassin:"Circles at the edge of a fight, waiting for a mistake.",Controller:"Shapes the battlefield with slows, roots, and forced movement.",Support:"Stays near allies, reinforcing them with steady encouragement.",Healer:"Seeks wounded creatures and restores them before returning to cover.",Guardian:"Patrols a fixed territory and warns intruders before striking.",Skirmisher:"Darts in and out, never staying in one place for long.",Trickster:"Mimics, feints, and steals attention at the worst possible moment."},Ly={biped:"trail edges and open clearings",quadruped:"soft ground near well-worn paths",wyvern:"high ledges and thermal updrafts",aquatic:"shallow pools and slow water",serpent:"tangled roots and narrow crevices",blob:"damp hollows and shaded stones",flyer:"wind-bent branches and open sky",golem:"rock shelves and old foundations",spirit:"thin places where light behaves strangely"},Iy={biped:"Two-legged idle bob, arm swing, hop, flinch, and two attack poses.",quadruped:"Four-leg walk cycle, tail sway, ear flick, lunge, flinch, and rest pose.",wyvern:"Wing flap, tail counterbalance, hover, dive, and recharge pose.",aquatic:"Tail undulation, fin flutter, burst swim, and floating idle.",serpent:"Slither loop, coil, rear-up, strike, and coil-rest.",blob:"Squash-and-stretch idle, bounce, wobble, and compress attack.",flyer:"Hover bob, wing beat, glide, dive, and perch.",golem:"Heavy step, shoulder roll, brace, slam, and dormant state.",spirit:"Float drift, flicker, phase-out, swirl, and reform."},Dy={biped:"Light footfalls, a bright chirp, and a soft wooden click.",quadruped:"Padding steps, a low purr, and a short rising call.",wyvern:"Leathery wingbeats, a smoky hiss, and a resonant cry.",aquatic:"Bubbles, a watery trill, and a splashy tail slap.",serpent:"Dry scales, a papery hiss, and a low whistle.",blob:"Wet pops, a rubbery bounce, and a cheerful gurgle.",flyer:"Quick wingbeats, a thin whistle, and a sharp chirp.",golem:"Grinding stone, a deep thump, and a resonant hum.",spirit:"A breathy choir, glassy chimes, and a fading echo."},Ny={Striker:{health:70,attack:74,defence:46,speed:68},Bruiser:{health:86,attack:78,defence:62,speed:44},Tank:{health:98,attack:52,defence:84,speed:34},Assassin:{health:62,attack:86,defence:40,speed:82},Controller:{health:74,attack:60,defence:58,speed:56},Support:{health:76,attack:54,defence:62,speed:52},Healer:{health:80,attack:48,defence:60,speed:50},Guardian:{health:104,attack:66,defence:82,speed:38},Skirmisher:{health:68,attack:68,defence:48,speed:76},Trickster:{health:66,attack:64,defence:44,speed:80}},Uy={golem:"large",wyvern:"large",quadruped:"medium",serpent:"medium",biped:"small",flyer:"small",aquatic:"small",blob:"small",spirit:"tiny"};function Fy(i,e,t){const n=_s(t),s=no[i[0]]||no.Stone,r=i[1]?no[i[1]]||[]:[],a=["focus","rest","screech","tackle"],o=[],l=(d,u)=>{const f=[...d];for(let g=0;g<u&&f.length;g++){const _=Math.floor(n()*f.length),m=f.splice(_,1)[0];o.includes(m)||o.push(m)}};l(s,3),r.length&&l(r,1),l(a,2),o.length<4&&l(s,2);const c=[1,4,8,14,21,30];return(e==="Support"||e==="Healer"?o.sort((d,u)=>(aa[u].power||0)-(aa[d].power||0)):o).slice(0,6).map((d,u)=>({level:c[u],moveId:d}))}function ky(i,e,t,n,s){const r=_s(n^2654435769),a=nh[Math.floor(r()*nh.length)],o=th[e[0]]||th.Astral;let l=0,c="";do{const h=o[(Math.floor(r()*o.length)+l)%o.length],d=io[(Math.floor(r()*io.length)+l*3)%io.length];c=`${h} ${d}`,l++}while(s.has(c)&&l<60);return s.add(c),{id:`abil-${Al(c).toString(16)}`,name:c,trigger:a.kind==="static"||a.kind==="thorns"?"When struck at close range":a.kind==="lastStand"?"While below one third health":"Passive",effect:a.kind,value:a.value,description:a.text,role:t,types:e}}function Oy(i,e,t,n,s){const r=_s(s^10855845),a=ih[n][Math.floor(r()*ih[n].length)],o=e.map(c=>an[c].id.toLowerCase()).join(" and ");return[`${a}. ${i} is a ${t.toLowerCase()}-minded ${o} creature with a distinct, curious temperament.`,`Field notes describe ${i} as ${Cd[t].toLowerCase()} Its ${e[0].toLowerCase()} affinity is visible in the way it moves, not just in battle.`,`Local naturalists say ${i} remembers individual travellers and will approach those who move calmly and keep a respectful distance.`].join(" ")}function By(){const i=[],e=new Set,t=new Set;Py.forEach((n,s)=>{const[r,a,o,l,c,h,d,u]=n,f=`AST-${String(s+1).padStart(3,"0")}`;if(t.has(r))throw new Error(`Duplicate species name ${r}`);t.add(r);const g=a.split("/"),_=Al(`${f}:${r}`),m=_s(_),p=Ny[o],M=tr[l],T=M.statBonus,x=B=>Math.round((m()-.5)*B),w=l==="legendary"||l==="ultra"?h==="golem"||h==="wyvern"?"colossal":"large":Uy[h]||"small",b=eh[g[0]]||eh.Astral,C=b[s%b.length],v=ky(r,g,o,_,e),E=Fy(g,o,_),R=vt[c].levelRange,L=l==="legendary"||l==="ultra",N=L?0:Math.max(1,Math.round(M.weight/3));i.push({id:f,name:r,types:g,role:o,rarity:l,biome:c,archetype:h,sizeClass:w,stats:{health:Math.round(p.health+T*2+x(10)),attack:Math.round(p.attack+T+x(12)),defence:Math.round(p.defence+T+x(12)),speed:Math.round(p.speed+Math.round(T*.8)+x(14))},growth:l==="common"?"steady":l==="ultra"||l==="legendary"?"late":"early",ability:v,learnset:E,evolution:d?{to:`AST-${String(d).padStart(3,"0")}`,level:u}:null,evolvesFrom:null,height:(.5+zy(w)*.8).toFixed(1),habitat:`${vt[c].name} — ${Ly[h]}`,behavior:Cd[o],encounter:{biome:c,minLevel:L?Math.max(20,R[0]+8):R[0],maxLevel:L?Math.max(30,R[1]+4):R[1],weight:N,time:"any",weather:"any",eventOnly:L,ultraChance:l==="ultra"?1e-7:0},visual:{archetype:h,size:vy[w].scale,primary:C[0],secondary:C[1],accent:C[2],eye:C[3],glow:l==="legendary"||l==="ultra",markings:s%4,horns:h==="wyvern"||s%5===0,wings:h==="flyer"||h==="wyvern",tail:h!=="blob"||s%3===0,crown:l==="legendary"||l==="ultra",aura:L},visualBrief:`${w} ${h} silhouette in ${C[0]} with ${C[1]} undersides and ${C[2]} highlights. Unique hook: ${Hy(h,s)}.`,audioBrief:Dy[h],animation:Iy[h],lore:Oy(r,g,o,c,_),acquisition:d||s<9?["starter-or-wild","evolution"]:["wild"],isStarter:[1,4,7].includes(s+1)})});for(const n of i){if(!n.evolution)continue;const s=i.find(r=>r.id===n.evolution.to);if(!s)throw new Error(`${n.id} has invalid evolution target ${n.evolution.to}`);if(s.evolvesFrom&&s.evolvesFrom!==n.id)throw new Error(`${s.id} has conflicting evolution sources`);s.evolvesFrom=n.id}return i}function zy(i){return{tiny:.2,small:.4,medium:.7,large:1.1,colossal:1.6}[i]||.5}function Hy(i,e){const t={biped:["a leaf-like crest that opens when it is excited","bright forearm frills used for signalling","a tail plume that trails sparks or pollen"],quadruped:["asymmetric horn growth that records age","a patterned mantle along the spine","oversized ears that move independently"],wyvern:["heat vents along the wing edges","a split tail fan with mirrored markings","a throat pouch that glows before a call"],aquatic:["translucent fin membranes with visible veins of light","a shell-like collar that clicks in currents","a trailing ribbon fin longer than its body"],serpent:["a hood of overlapping leaf or scale plates","rings that brighten in sequence when it moves","a tail tip shaped like a small lantern"],blob:["a floating core visible through its skin","bubbles that orbit the body in slow loops","a wobbling crown of soft spines"],flyer:["long ribbon feathers with eye-spots","a forked crest that splits the silhouette","wings that leave brief afterimages"],golem:["a seam of glowing mineral running through the chest","floating shoulder stones held by unseen force","carved markings that change when it speaks"],spirit:["a halo of slowly orbiting fragments","a lower body that dissolves into drifting motes","a face that flickers between calm and mischievous"]};return Ed(_s(e*977+13),t[i]||t.spirit)}const Ri=By(),Gy=Object.fromEntries(Ri.map(i=>[i.id,i]));Object.fromEntries(Ri.map(i=>[i.name,i]));const sl=["AST-001","AST-004","AST-007"],sh=Ri.filter(i=>i.rarity==="legendary").map(i=>i.id),Vy=Ri.filter(i=>i.rarity==="ultra").map(i=>i.id);function Tt(i){return Gy[i]||null}function Wy(i){return Ri.filter(e=>e.biome===i&&!e.encounter.eventOnly)}function Cl(i,e){return e.filter(n=>n.level<=i).map(n=>n.moveId).slice(0,4)}const so=new Map,ro=new Map;function ci(i,e={}){const t=`${i}|${e.emissive||""}|${e.emissiveIntensity||0}|${e.roughness||.7}|${e.metalness||0}|${e.transparent?"t":""}|${e.opacity??1}`;return so.has(t)||so.set(t,new fn({color:i,flatShading:!1,roughness:e.roughness??.66,metalness:e.metalness??.04,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??0,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!0})),so.get(t)}function ms(i,e){return ro.has(i)||ro.set(i,e()),ro.get(i)}function At(i,e=24){return new rr(i.map(([t,n])=>new P(t,n,0)),e)}function dn(i=1,e=16,t=12){return ms(`sphere-${i}-${e}-${t}`,()=>new Bt(i,e,t))}function Fs(i,e,t=16){const n=e*.5;return ms(`capsule-${i}-${e}-${t}`,()=>{const s=[[i,0],[i*.92,n*.18],[i*.78,n*.82],[0,n]];return At(s,t)})}function st(i,e,t,n=[0,0,0],s=[1,1,1],r=[0,0,0]){const a=new Pe(e,t);return a.position.set(...n),a.scale.set(...s),a.rotation.set(...r),i.add(a),a}function oa(i,e={}){const t=i.visual,n=new je,s=(e.scale??1)*t.size*.92;n.scale.setScalar(s);const r=ci(t.primary,{roughness:.66}),a=ci(t.secondary,{roughness:.72}),o=ci(t.accent,{emissive:t.accent,emissiveIntensity:t.glow?.32:.06,roughness:.5}),l=ci(Jy(t.secondary,-.25),{roughness:.74}),c=ci("#f7fbff",{roughness:.35,emissive:"#dff5ff",emissiveIntensity:.14}),h=ci(t.eye,{roughness:.3,emissive:t.eye,emissiveIntensity:.12}),d={legs:[],arms:[],wings:[],segments:[]},u={archetype:t.archetype,parts:d,seed:Math.random()*10,baseY:0};n.userData.animation=u;const f=new Pe(ms("shadow",()=>new Qn(.85,32)),new wn({color:724758,transparent:!0,opacity:.28,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.04,f.scale.setScalar(1.12),n.add(f);const g=t.markings%4,_=(x,w,b)=>{for(const C of[-1,1])st(n,dn(b*.9,12,10),c,[x[0]+C*w,x[1],x[2]],[b,b*1.12,b*.58]),st(n,dn(b*.42,10,8),h,[x[0]+C*w,x[1]-.02,x[2]+b*.42],[b*.5,b*.64,b*.32])},m=(x,w,b,C)=>{if(C)for(const v of[-1,1])st(n,At([[0,0],[.09,.22],[.13,.5],[0,.54]],12),b,[v*.24,.34,-.02],[1,1,1],[.2,0,v*-.38]);else for(const v of[-1,1])st(n,At([[0,0],[.13,.18],[.16,.36],[0,.4]],12),w,[v*.28,.3,-.06],[1,1,.55],[.1,0,v*-.35])},p=(x,w,b,C,v,E,R=[0,0,0])=>{const L=new je;L.position.set(...C),L.rotation.set(...R);const N=new Pe(Fs(v,E,16),w);N.position.y=-E*.5,L.add(N);const B=new Pe(dn(v*1.1,10,8),b);return B.position.y=-E,B.scale.set(1,1,1.3),L.add(B),x.add(L),L},M=(x,w,b,C,v,E=3)=>{const R=new je;R.position.set(...w);let L=R;for(let N=0;N<E;N++){const B=.14-N*.03,F=v*.42,k=new Pe(Fs(B,F,12),N===E-1?C:b);k.position.z=0,k.position.y=-F*.5,k.rotation.x=-Math.PI/2,L.add(k);const q=new je;q.position.z=-F*.66,k.add(q),L=q}return x.add(R),R},T=(x,w,b,C)=>{const v=new je;v.position.set(b*.4,1.12,-.04),v.rotation.z=b*(b>0?-.45:.45);const E=new ad;E.moveTo(0,0),E.quadraticCurveTo(b*.5,.45,b*1,1.1),E.quadraticCurveTo(b*.45,1.55,0,1.7),E.quadraticCurveTo(-b*.45,1.55,-b*1,1.1),E.quadraticCurveTo(-b*.5,.45,0,0);const R=new Pe(new El(E,{depth:.045,bevelEnabled:!0,bevelThickness:.02,bevelSize:.018,bevelSegments:3}),b>0?x:w);R.position.x=b*(.32+.2),R.position.y=.22,R.rotation.z=b*(Math.PI/2-.28),R.scale.set(1,C,.28);const L=new je;return L.add(R),L.rotation.z=b*.18,v.add(L),v.userData.side=b,n.add(v),v};if(t.archetype==="quadruped"){const x=st(n,At([[.22,0],[.44,.22],[.62,.62],[.68,.96],[.56,1.22],[.42,1.46],[.26,1.6]]),r,[0,.86,0],[1,1,1.25]);u.baseY=x.position.y,d.body=x;const w=st(n,Fs(.22,.34,14),r,[0,1.02,.62],[1,1,1],[Math.PI/6,0,0]);d.neck=w;const b=st(n,At([[.18,0],[.34,.22],[.42,.52],[.4,.82],[.3,1.06],[.18,1.26]]),r,[0,1.22,.98],[1,1,.95]);d.head=b,st(n,dn(.3,12,10),a,[0,1.06,.82],[.32,.22,.28]),_([0,1.28,1.26],.22,.2),m(b,r,o,t.horns),d.tail=M(n,[0,.96,-.8],a,o,.62);const C=[[-.36,.56,.44],[.36,.56,.44],[-.36,.56,-.44],[.36,.56,-.44]];for(const v of C)d.legs.push(p(n,r,l,v,.13,.52,[.03,0,v[0]>0?-.04:.04]));zr(n,o,[0,1.16,0],.5,.92,g)}else if(t.archetype==="biped"){const x=st(n,At([[.16,0],[.42,.3],[.48,.7],[.44,1.05],[.36,1.32],[.28,1.52]]),r,[0,1,0],[1,1,.9]);u.baseY=x.position.y,d.body=x,st(n,dn(.32,12,10),a,[0,.68,.02],[.34,.28,.3]);const w=st(n,At([[.16,0],[.36,.24],[.44,.58],[.42,.9],[.32,1.16],[.2,1.36]]),r,[0,1.56,.02],[1,1,.9]);d.head=w,_([0,1.62,.36],.2,.19),m(w,r,o,t.horns),d.arms=[p(n,r,l,[-.42,1.08,0],.18,.6,[-.18,0,.22]),p(n,r,l,[.42,1.08,0],.18,.6,[-.18,0,-.22])],d.legs=[p(n,a,l,[-.22,.5,.02],.2,.5,[.03,0,.05]),p(n,a,l,[.22,.5,.02],.2,.5,[.03,0,-.05])],$y(n,w,o,g),d.tail=M(n,[0,.76,-.34],a,o,.44)}else if(t.archetype==="wyvern"||t.archetype==="flyer"){const x=st(n,At([[.18,0],[.46,.3],[.56,.72],[.52,1.06],[.42,1.32],[.3,1.52]]),r,[0,1.06,0],t.archetype==="flyer"?[.9,.9,1.3]:[1,1,1.35]);u.baseY=x.position.y,d.body=x;const w=st(n,At([[.15,0],[.32,.22],[.4,.56],[.38,.88],[.28,1.12],[.16,1.32]]),r,[0,1.28,.9],[.9,.9,1]);d.head=w,st(n,dn(.28,12,10),a,[0,1.12,.58],[.3,.22,.28]),_([0,1.34,1.3],.19,.18),m(w,r,o,t.horns),d.wings=[T(o,a,-1,t.archetype==="wyvern"?1.35:.95),T(o,a,1,t.archetype==="wyvern"?1.35:.95)],d.tail=M(n,[0,1,-.82],a,o,t.archetype==="wyvern"?.95:.62),d.legs=[p(n,a,l,[-.22,.55,.26],.14,.44,[.25,0,.12]),p(n,a,l,[.22,.55,.26],.14,.44,[.25,0,-.12])],t.archetype==="wyvern"&&zr(n,o,[0,1.4,0],.36,.82,g)}else if(t.archetype==="aquatic"){const x=st(n,At([[.2,0],[.52,.28],[.62,.68],[.58,.98],[.46,1.24],[.34,1.44]]),r,[0,1,0],[1,1,1.2]);u.baseY=x.position.y,d.body=x;const w=st(n,At([[.17,0],[.36,.24],[.44,.58],[.42,.9],[.32,1.12],[.2,1.32]]),r,[0,1.08,.86],[1,1,.95]);d.head=w,st(n,dn(.34,12,10),a,[0,.92,.66],[.38,.2,.3]),_([0,1.16,1.24],.2,.19),d.tail=M(n,[0,1.06,-.86],a,o,.7),Xy(n,a,o,d),st(n,At([[0,0],[.3,.3],[.34,.72],[0,.76]],12),o,[0,1.58,-.08],[1,1,.35],[.12,0,0])}else if(t.archetype==="serpent"){for(let b=0;b<7;b++){const C=b/6,v=.4*(1-C*.5),E=new Pe(Fs(v,.42,14),b%2?a:r);E.position.set(0,.7+Math.sin(C*Math.PI)*.42,.66-C*1.6),E.rotation.x=-Math.PI/2,n.add(E),d.segments.push(E)}const w=st(n,At([[.16,0],[.34,.22],[.42,.56],[.4,.86],[.3,1.1],[.18,1.3]]),r,[0,1.02,.98],[1,1,.95]);d.head=w,_([0,1.1,1.4],.2,.19),m(w,r,o,t.horns),d.tail=M(n,[0,.66,-1.16],a,o,.48),zr(n,o,[0,1.2,.24],.24,.72,g)}else if(t.archetype==="blob"){const x=st(n,At([[.2,0],[.58,.28],[.66,.62],[.62,.96],[.5,1.22],[.36,1.42]]),r,[0,.8,0],[1,1,1]);u.baseY=x.position.y,d.body=x,st(n,dn(.5,14,12),a,[0,.7,.02],[.52,.46,.52]);const w=st(n,At([[.18,0],[.44,.24],[.52,.56],[.5,.88],[.4,1.12],[.28,1.32]]),r,[0,1.04,.1],[1,1,1]);d.head=w,_([0,1.1,.5],.22,.2),qy(n,o,t),d.legs=[p(n,a,l,[-.3,.36,.05],.15,.32,[.04,0,.2]),p(n,a,l,[.3,.36,.05],.15,.32,[.04,0,-.2])]}else if(t.archetype==="golem"){const x=st(n,dn(.8,16,12),r,[0,.92,0],[.7,.72,.58]);u.baseY=x.position.y,d.body=x;const w=st(n,dn(.55,14,10),r,[0,1.62,.1],[.64,.58,.58]);d.head=w,_([0,1.68,.42],.18,.1),st(n,new _t(.16,.72,.05),o,[0,.96,.58],[1,1,1],[0,0,.1]),d.arms=[p(n,a,l,[-.64,.98,0],.24,.7,[.1,0,.36]),p(n,a,l,[.64,.98,0],.24,.7,[.1,0,-.36])],d.legs=[p(n,a,l,[-.27,.4,0],.25,.44,[.02,0,.08]),p(n,a,l,[.27,.4,0],.25,.44,[.02,0,-.08])],zr(n,o,[0,1.16,-.34],.28,.64,g)}else{const x=st(n,At([[.18,0],[.48,.3],[.58,.7],[.54,1.04],[.44,1.32],[.32,1.52]]),r,[0,1,0],[1,1,.95]);u.baseY=x.position.y,d.body=x,st(n,dn(.3,12,10),a,[0,.66,0],[.3,.38,.3]);const w=st(n,At([[.16,0],[.38,.24],[.46,.58],[.44,.9],[.34,1.16],[.22,1.36]]),r,[0,1.52,.04],[1,1,.9]);d.head=w,_([0,1.58,.4],.2,.19),m(w,r,o,t.horns),d.halo=Yy(n,o),d.tail=M(n,[0,.6,-.12],a,o,.42),d.arms=[p(n,r,l,[-.4,1.06,0],.13,.5,[.2,0,.28]),p(n,r,l,[.4,1.06,0],.13,.5,[.2,0,-.28])]}if(t.aura){const x=new Pe(ms("aura-ring",()=>new Tn(1.15,.035,16,48)),new wn({color:t.accent,transparent:!0,opacity:.62,blending:bn,depthWrite:!1}));x.rotation.x=Math.PI/2,x.position.y=.36,n.add(x),d.aura=x;const w=new Zs(new Mt().setAttribute("position",new Ht(Zy(14,1.8),3)),new ds({color:t.accent,size:.14,transparent:!0,opacity:.85,blending:bn,depthWrite:!1}));n.add(w),d.motes=w}if(t.crown){const x=new Pe(At([[0,0],[.18,.22],[.22,.48],[0,.52]],10),ci(t.accent,{emissive:t.accent,emissiveIntensity:.6}));x.position.set(0,1.96,0),x.rotation.y=Math.PI/4,n.add(x),d.crown=x}return n.userData.speciesId=i.id,n.userData.species=i,n}function $y(i,e,t,n){for(const s of[-1,1]){const r=st(i,Fs(.025,.6,10),t,[s*.16,.38,0],[1,1,1],[0,0,s*-.22]);st(r,dn(.08,10,8),t,[0,.34,0])}n===1&&st(i,At([[0,0],[.16,.2],[.18,.4],[0,.44]],10),t,[0,.34,-.3],[1.6,1,.3],[-.4,0,0])}function zr(i,e,t,n,s,r){for(let a=0;a<3;a++)st(i,At([[0,0],[n*.3,n*.4],[n*.18,s*(.4+a*.15)],[0,s*(.4+a*.15)]],10),e,[t[0],t[1]+a*.05,t[2]-a*s*.18],[1,1,.55],[.2,0,0]);r===2&&st(i,ms("mark",()=>new Tn(.16,.035,10,16)),e,[0,t[1],t[2]+.2],[1,1,1],[Math.PI/2,0,0])}function Xy(i,e,t,n){for(const r of[-1,1])st(i,At([[0,0],[.24,.28],[.28,.6],[0,.66]],10),e,[r*.5,.96,.18],[1,1,.32],[0,0,r*-1.1]);const s=st(i,At([[0,0],[.3,.32],[.34,.66],[0,.72]],10),t,[0,1.08,-.9],[1,1,.34],[Math.PI/2,0,0]);n.tailFin=s}function qy(i,e,t){const n=t.markings%2===0?5:3;for(let s=0;s<n;s++){const r=s/n*Math.PI*2;st(i,At([[0,0],[.07,.14],[.08,.3],[0,.34]],10),e,[Math.cos(r)*.32,1.38,Math.sin(r)*.32],[1,1,1],[0,0,Math.cos(r)*.3])}}function Yy(i,e){const t=new Pe(ms("halo",()=>new Tn(.42,.035,12,32)),ci(e,{emissive:e,emissiveIntensity:.65}));return t.position.y=2,t.rotation.x=Math.PI/2.2,i.add(t),t}function nr(i,e,t="idle"){const n=i.userData.animation;if(!n)return;const s=n.parts,r=e+n.seed,a=t==="moving"?8:t==="battle"?2.2:1.7,o=n.baseY??0;s.body&&(s.body.position.y=o+Math.sin(r*a)*.004,s.body.scale.y=1+Math.sin(r*a)*.014),s.head&&(s.head.rotation.y=Math.sin(r*.8)*.08,s.head.position.y=(s.head.position.y||0)+Math.sin(r*a+.4)*.002),s.tail&&(s.tail.rotation.y=Math.sin(r*1.4)*.28,s.tail.rotation.x=Math.sin(r*1.1+1)*.1);for(const[l,c]of s.legs.entries())c.rotation.x=Math.sin(r*a+l*Math.PI/2)*(t==="moving"?.5:.06);for(const[l,c]of s.arms.entries())c.rotation.x=Math.sin(r*a+l*Math.PI)*(t==="moving"?.35:.08);for(const l of s.wings){const c=l.userData.side||1;l.rotation.z=c*(c>0?-.45:.45)+Math.sin(r*3.2)*.42*c}if(s.segments.length)for(const[l,c]of s.segments.entries())c.position.x=Math.sin(r*1.5+l*.5)*.06*l,c.position.y=.7+Math.sin(l/Math.max(1,s.segments.length-1)*Math.PI)*.42+Math.sin(r*1.8+l*.4)*.03;s.halo&&(s.halo.rotation.z=r*.6,s.halo.position.y=2+Math.sin(r*1.3)*.05),s.aura&&(s.aura.rotation.z=r*.5,s.aura.scale.setScalar(1+Math.sin(r*1.4)*.06)),s.motes&&(s.motes.rotation.y=r*.35,s.motes.position.y=Math.sin(r*1.1)*.1)}function Zy(i,e){const t=new Float32Array(i*3);for(let n=0;n<i;n++){const s=n/i*Math.PI*2;t[n*3]=Math.cos(s)*e*(.7+Math.random()*.4),t[n*3+1]=.5+Math.random()*1.5,t[n*3+2]=Math.sin(s)*e*(.7+Math.random()*.4)}return t}function Jy(i,e){const t=new Ve(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l+e))),`#${t.getHexString()}`}const Rl="astra-creatures-save",Rd=1,Pi=6,Pd=60,la=99,Ky={music:.5,sfx:.72,quality:"high",reduceMotion:!1,sensitivity:1,invertY:!1,hints:!0,highContrast:!1},Qy={disc_basic:8,disc_fine:0,potion:2,potion_great:0,treat:1,lure:0};function ca(i=Date.now()){return{version:Rd,playerName:"Wanderer",createdAt:i,updatedAt:i,starterChosen:!1,starterId:null,currency:{shards:250,stardust:0},creatures:[],party:[],activeUid:null,inventory:{...Qy},dex:{seen:[],caught:[]},training:{unlocked:1,slots:[]},quests:{active:[],completed:[],progress:{},claimed:[]},flags:{tutorialSeen:!1,landmarks:{},visitedBiomes:["hub"],totalTrainSeconds:0},stats:{battles:0,wins:0,captures:0,defeats:0,steps:0,playSeconds:0,legendariesSeen:0,evolved:0},legendary:{nextEventAt:i+9e4,active:null,history:[]},settings:{...Ky},lureCharges:0,playStartedAt:i}}function ha(i){return Math.round(40+i*20+i*i*2)}function ar(i,e){const t=i.stats;return{maxHp:Math.round(t.health*1.6+e*6+t.health*e*.09),attack:Math.round(t.attack*1.45+e*2.4),defence:Math.round(t.defence*1.4+e*2.2),speed:Math.round(t.speed*1.35+e*1.7)}}function ao(i,e=5,t={}){const n=Tt(i);if(!n)throw new Error(`Unknown species ${i}`);const s=qt(Math.round(e),1,60),r=ar(n,s),a=t.moves||Cl(s,n.learnset);return{uid:t.uid||ra("ast"),speciesId:i,nickname:t.nickname||"",level:s,xp:0,hp:t.hp??r.maxHp,stats:r,moves:a.length?a:["tackle"],abilityId:n.ability.id,nature:t.nature||jy(ra("nature")),ivs:t.ivs||Ld(i,s),caughtAt:t.caughtAt||Date.now(),provenance:t.provenance||"wild",assignment:t.assignment||"party",statuses:[],evolutionFlags:[]}}function jy(i){const e=["Curious","Calm","Bold","Gentle","Fierce","Patient","Mischievous","Loyal","Watchful","Restless"];let t=0;for(let n=0;n<i.length;n++)t=t*31+i.charCodeAt(n)>>>0;return e[t%e.length]}function Ld(i,e){let t=e*2654435761;for(let s=0;s<i.length;s++)t=Math.imul(t^i.charCodeAt(s),16777619);const n=()=>(t=Math.imul(t^t>>>15,2246822519),4+Math.abs(t)%15);return{health:n(),attack:n(),defence:n(),speed:n()}}function ex(i){const e=Tt(i.speciesId);if(!e)return i;const t=i.stats?.maxHp||1,n=qt((i.hp||t)/t,.05,1);return i.stats=ar(e,i.level),i.hp=Math.max(1,Math.round(i.stats.maxHp*n)),i}function Vs(i,e,t){const n=Math.max(0,Math.round(t));if(!e||n<=0)return{levels:0,evolved:[],xp:0};e.xp+=n;let s=0;const r=[];for(;e.level<60&&e.xp>=ha(e.level);){e.xp-=ha(e.level),e.level++,s++;const a=Tt(e.speciesId);if(a?.evolution&&e.level>=a.evolution.level){const o=Tt(a.evolution.to);o&&(e.speciesId=o.id,e.abilityId=o.ability.id,e.moves=Cl(e.level,o.learnset),e.evolutionFlags.push({from:a.id,to:o.id,level:e.level,at:Date.now()}),r.push(o))}ex(e),e.hp=e.stats.maxHp}return e.level>=60&&(e.xp=0),i.stats=i.stats||{},{levels:s,evolved:r,xp:n}}function tx(i){if(!i||typeof i!="object")return ca();const e=ca(),t={...e,...i,currency:{...e.currency,...i.currency||{}},inventory:{...e.inventory,...i.inventory||{}},dex:{seen:[],caught:[],...i.dex||{}},training:{...e.training,...i.training||{}},quests:{...e.quests,...i.quests||{}},flags:{...e.flags,...i.flags||{}},stats:{...e.stats,...i.stats||{}},legendary:{...e.legendary,...i.legendary||{}},settings:{...e.settings,...i.settings||{}}};t.version=Rd,t.creatures=nx(i.creatures);const n=new Set(t.creatures.map(s=>s.uid));t.party=Array.isArray(i.party)?i.party.filter((s,r,a)=>n.has(s)&&a.indexOf(s)===r).slice(0,Pi):[],!t.party.length&&t.creatures.length&&(t.party=t.creatures.slice(0,Pi).map(s=>s.uid));for(const s of t.creatures)!t.party.includes(s.uid)&&s.assignment==="party"&&(s.assignment="storage");!n.has(t.activeUid)&&t.party.length&&(t.activeUid=t.party[0]),t.dex.seen=rh(t.dex.seen),t.dex.caught=rh(t.dex.caught),t.training.slots=ix(t.training.slots,n);for(const s of Object.keys(t.inventory))t.inventory[s]=qt(Math.floor(Number(t.inventory[s])||0),0,la);return t.currency.shards=qt(Math.floor(Number(t.currency.shards)||0),0,99999999),t.currency.stardust=qt(Math.floor(Number(t.currency.stardust)||0),0,99999999),t.settings.quality=["high","low"].includes(t.settings.quality)?t.settings.quality:"high",t}function rh(i){if(!Array.isArray(i))return[];const e=[];for(const t of i)typeof t=="string"&&Tt(t)&&!e.includes(t)&&e.push(t);return e}function nx(i){if(!Array.isArray(i))return[];const e=new Set,t=[];for(const n of i.slice(0,400)){if(!n||typeof n!="object"||typeof n.uid!="string"||e.has(n.uid))continue;const s=Tt(n.speciesId);if(!s)continue;e.add(n.uid);const r=qt(Math.floor(Number(n.level)||1),1,60),a=ar(s,r),o=Array.isArray(n.moves)?n.moves.filter(l=>typeof l=="string").slice(0,4):[];t.push({uid:n.uid,speciesId:n.speciesId,nickname:typeof n.nickname=="string"?n.nickname.slice(0,24):"",level:r,xp:qt(Math.floor(Number(n.xp)||0),0,9999999),hp:qt(Math.floor(Number(n.hp)||a.maxHp),1,a.maxHp),stats:a,moves:o.length?o:Cl(r,s.learnset),abilityId:typeof n.abilityId=="string"?n.abilityId:s.ability.id,nature:typeof n.nature=="string"?n.nature.slice(0,24):"Curious",ivs:n.ivs&&typeof n.ivs=="object"?n.ivs:Ld(n.speciesId,r),caughtAt:Math.floor(Number(n.caughtAt)||Date.now()),provenance:typeof n.provenance=="string"?n.provenance.slice(0,32):"unknown",assignment:["party","storage","training"].includes(n.assignment)?n.assignment:"storage",statuses:[],evolutionFlags:Array.isArray(n.evolutionFlags)?n.evolutionFlags.slice(-20):[]})}return t}function ix(i,e){if(!Array.isArray(i))return[];const t=new Set,n=[];for(const s of i.slice(0,2))!s||typeof s!="object"||!e.has(s.uid)||t.has(s.uid)||(t.add(s.uid),n.push({uid:s.uid,startedAt:Math.floor(Number(s.startedAt)||Date.now()),lastClaimAt:Math.floor(Number(s.lastClaimAt)||Date.now()),rate:qt(Number(s.rate)||3,1,10)}));return n}function sx(i=globalThis.localStorage){try{const e=i?.getItem(Rl);if(!e)return ca();const t=JSON.parse(e);return tx(t)}catch(e){return console.warn("Astra save could not be read; starting a clean profile.",e),ca()}}function ah(i,e=globalThis.localStorage){if(!i)return!1;try{i.updatedAt=Date.now();const t=JSON.stringify(i);return e?.setItem(Rl,t),!0}catch(t){return console.warn("Astra save could not be written.",t),!1}}function rx(i=globalThis.localStorage){try{i?.removeItem(Rl)}catch{}}function oh(i,e){return e?(i.creatures.push(e),i.party.length<Pi?(i.party.push(e.uid),e.assignment="party",i.activeUid||(i.activeUid=e.uid)):e.assignment="storage",{ok:!0,inParty:e.assignment==="party"}):{ok:!1,reason:"Creature could not be created."}}function ax(i){return i.creatures.filter(e=>!i.party.includes(e.uid)).length}const lh=18e3,ox=36e3;class lx{constructor(e,t,n,s){this.scene=e,this.world=t,this.profile=n,this.getPlayerLevel=s,this.wilds=[],this.respawns=[],this.root=new je,e.add(this.root),this.legendaryWild=null,this.time=0,this.quality="high",this.populate()}populate(){for(const e of Ci){const t=e==="astral"?6:5;for(let n=0;n<t;n++)this.spawnWildForBiome(e)}}spawnWildForBiome(e,t=null,n={}){const s=Wy(e);if(!s.length)return null;let r=t?Tt(t):null;if(!r){const _=s.map(m=>{let p=m.encounter.weight;return this.profile.lureCharges>0&&["rare","epic","legendary"].includes(m.rarity)&&(p*=2.6),{species:m,weight:p}});r=yy(ui(`${e}-${Date.now()}-${Math.random()}`),_,m=>m.weight).species}const[a,o]=vt[e].center,l=vt[e].radius;let c=a,h=o;for(let _=0;_<30;_++){const m=Math.random()*Math.PI*2,p=l*(.35+Math.random()*.58);if(c=a+Math.cos(m)*p,h=o+Math.sin(m)*p,!this.world.isBlocked(c,h,2.2))break}const d=this.getPlayerLevel?.()||5,u=n.level||Math.round(r.encounter.minLevel+Math.random()*(r.encounter.maxLevel-r.encounter.minLevel)),f=qt(u+Math.round((d-5)*.08),1,60);let g=r;return e==="astral"&&Math.random()<1e-7&&(g=Tt(Vy[0])),this.createWild(g,f,c,h,{biome:e,...n})}createWild(e,t,n,s,r={}){const a=ar(e,t),o=oa(e,{scale:r.legendary?1.18:.92});o.position.set(n,Ke(n,s),s),o.rotation.y=Math.random()*Math.PI*2,this.root.add(o);const l={id:r.id||ra("wild"),species:e,speciesId:e.id,level:t,stats:a,hp:a.maxHp,x:n,z:s,home:{x:n,z:s,radius:r.homeRadius||14},target:{x:n,z:s},group:o,biome:r.biome||e.biome,wanderTimer:1+Math.random()*4,state:"idle",visible:!0,legendary:!!r.legendary,eventId:r.eventId||null,defeated:!1,captured:!1,spawnAt:Date.now()};return this.wilds.push(l),l.legendary&&(this.legendaryWild=l),l}spawnLegendary(e){if(!e||e.phase!=="active")return null;const t=this.wilds.find(o=>o.eventId===e.id);if(t)return t;const n=Tt(e.legendaryId);if(!n)return null;const[s,r]=[e.spawn.x,e.spawn.z],a=this.createWild(n,e.level,s,r,{biome:e.biome,legendary:!0,eventId:e.id,homeRadius:8});return a.group.scale.multiplyScalar(1.05),a}removeLegendary(e){const t=this.wilds.find(n=>n.eventId===e);t&&this.removeWild(t,{respawn:!1}),this.legendaryWild?.eventId===e&&(this.legendaryWild=null)}removeWild(e,t={}){!e||!e.group||(e.group.parent?.remove(e.group),this.wilds=this.wilds.filter(n=>n.id!==e.id),this.legendaryWild?.id===e.id&&(this.legendaryWild=null),t.respawn!==!1&&!e.legendary&&this.respawns.push({at:Date.now()+lh+Math.random()*(ox-lh),biome:e.biome,level:e.level}))}hideWild(e){e&&(e.group.visible=!1,e.visible=!1)}showWild(e){e&&(e.group.visible=!0,e.visible=!0)}nearestWild(e,t=3.8){let n=null,s=t;for(const r of this.wilds){if(!r.visible||!r.group.visible)continue;const a=Math.hypot(e.x-r.x,e.z-r.z);a<s&&(n=r,s=a)}return n?{wild:n,distance:s}:null}update(e,t,n,s=null){this.time=t;const r=Date.now();for(let a=this.respawns.length-1;a>=0;a--)if(r>=this.respawns[a].at){const o=this.respawns.splice(a,1)[0];this.spawnWildForBiome(o.biome)}s?.phase==="active"&&this.spawnLegendary(s),s?.phase!=="active"&&this.legendaryWild&&this.removeLegendary(this.legendaryWild.eventId);for(const a of this.wilds){if(!a.visible)continue;const o=Math.hypot(n.x-a.x,n.z-a.z);if(a.group.visible=o<(a.legendary?140:82),!a.group.visible)continue;if(a.legendary&&s?.phase==="active"){a.group.position.y=Ke(a.x,a.z)+Math.sin(t*1.2)*.12,a.group.rotation.y+=e*.18,nr(a.group,t,"battle");continue}if(a.wanderTimer-=e,a.wanderTimer<=0){a.wanderTimer=2.5+Math.random()*5;const u=Math.random()*Math.PI*2,f=3+Math.random()*a.home.radius;a.target.x=a.home.x+Math.cos(u)*f,a.target.z=a.home.z+Math.sin(u)*f}const l=a.target.x-a.x,c=a.target.z-a.z,h=Math.hypot(l,c);if(h>.6){const u=a.legendary?.4:1.2;a.x+=l/h*u*e,a.z+=c/h*u*e;let g=Math.atan2(l,c)-a.group.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;a.group.rotation.y+=g*Math.min(1,e*5),a.state="moving"}else a.state="idle";const d=this.world.resolveCollision({x:a.x,z:a.z},.45);if(a.x=d.x,a.z=d.z,a.group.position.set(a.x,Ke(a.x,a.z),a.z),o<2.4){const u=2.4-o,f=a.x-n.x,g=a.z-n.z,_=Math.hypot(f,g)||1;a.x+=f/_*u*.4,a.z+=g/_*u*.4}nr(a.group,t,a.state)}}wildsForMinimap(){return this.wilds.filter(e=>e.visible).map(e=>({x:e.x,z:e.z,biome:e.biome,rarity:e.species.rarity,legendary:e.legendary}))}}const Id=.82;function cx(i,e,t,n={}){const s=Tt(t.speciesId),r=Tt(e.speciesId),a=e.stats||ar(r,e.level),o=ch(t,s,"player",t.hp),l=ch({...e,stats:a},r,"enemy",Math.max(1,Math.round(a.maxHp*Id))),c={id:ra("battle"),player:o,enemy:l,startedAt:Date.now(),over:!1,result:null,log:[],events:[],wild:{...e,hp:l.hp,stats:{...a,maxHp:l.maxHp}},legendary:n.legendary||null,fleeAttempts:0,lastTick:Date.now()};return jt(c,`A wild ${r.name} (Lv. ${e.level}) blocks the path!`),c}function ch(i,e,t,n){return{uid:i.uid,side:t,name:i.nickname||e.name,species:e,level:i.level,hp:n,maxHp:t==="enemy"?Math.max(1,Math.round(i.stats.maxHp*Id)):i.stats.maxHp,stats:{...i.stats},moves:(i.moves||["tackle"]).map(s=>({id:s,readyAt:0})),buffs:{attack:1,defence:1,speed:1},statuses:{},shield:0,shieldUntil:0,shieldOnLowUsed:!1,ability:e.ability,xp:i.xp||0,assignment:i.assignment}}function Dd(i,e,t,n=Date.now()){const s=e==="player"?i.player:i.enemy;if(i.over||s.hp<=0)return{ok:!1,reason:"Battle is over."};if(Pl(s,n))return{ok:!1,reason:"Stunned."};const r=s.moves.find(a=>a.id===t);return r?r.readyAt>n?{ok:!1,reason:"Move is still cooling down.",remaining:r.readyAt-n}:{ok:!0,slot:r,move:fi(t)}:{ok:!1,reason:"That move is not equipped."}}function oo(i,e,t,n={distance:0,angle:0},s=Date.now()){const r=Dd(i,e,t,s);if(!r.ok)return r;const a=e==="player"?i.player:i.enemy,o=e==="player"?i.enemy:i.player,l=r.move;r.slot.readyAt=s+l.cooldown*1e3;const c=[];if(l.shape==="self")return hx(i,a,l,c,s),jt(i,`${a.name} uses ${l.name}.`),{ok:!0,move:l,events:c};const h=l.shape==="aoe"?n.distance<=(l.radius||l.range)+.5:n.distance<=l.range+.4,d=l.shape!=="cone"||Math.abs(n.angle||0)<=(l.cone||Math.PI/3)/2+.12;if(!h||!d)return r.slot.readyAt=s+550,jt(i,`${a.name}'s ${l.name} misses.`),{ok:!0,move:l,events:[{type:"miss",actor:e}]};if(jt(i,`${a.name} uses ${l.name}.`),l.power>0){const u=dx(i,a,o,l,c,s);if(l.effect.drain){const f=Math.round(u.amount*l.effect.drain);ir(a,f),c.push({type:"heal",target:e,amount:f})}if(l.effect.status&&Math.random()<(l.effect.status.chance??1)&&(l.effect.status.self?Zr(a,l.effect.status.id,l.effect.status.duration,s):l.effect.status.id==="snare"&&o.ability?.effect==="sureFooted"||(Zr(o,l.effect.status.id,l.effect.status.duration,s),c.push({type:"status",target:o===i.player?"player":"enemy",status:l.effect.status.id}))),l.knockback&&c.push({type:"knockback",target:o===i.player?"player":"enemy",amount:l.knockback}),o.ability?.effect==="thorns"&&l.range<=3.2){const f=Math.max(1,Math.round(u.amount*o.ability.value));Nd(a,f,s,c,"thorns")}o.ability?.effect==="static"&&l.range<=3.2&&Math.random()<.3&&Zr(a,"shock",3,s)}return l.effect.kind==="debuff"&&(ux(o,l.effect,s),c.push({type:"debuff",target:o===i.player?"player":"enemy",stat:l.effect.stat})),l.effect.kind==="buff"&&(a.buffs[l.effect.stat]=1+l.effect.amount,c.push({type:"buff",target:e,stat:l.effect.stat})),Ud(i,c),i.events.push(...c),{ok:!0,move:l,events:c}}function hx(i,e,t,n,s){if(t.effect.kind==="heal"){const r=Math.round(e.maxHp*t.effect.amount);ir(e,r),n.push({type:"heal",target:e.side,amount:r}),t.effect.status&&Zr(e,t.effect.status.id,t.effect.status.duration,s)}t.effect.kind==="shield"&&(e.shield=Math.max(e.shield,Math.round(e.maxHp*t.effect.amount)),e.shieldUntil=s+(t.effect.duration||8)*1e3,n.push({type:"shield",target:e.side,amount:e.shield})),t.effect.kind==="buff"&&(e.buffs[t.effect.stat]=1+t.effect.amount,n.push({type:"buff",target:e.side,stat:t.effect.stat}))}function dx(i,e,t,n,s=[],r=Date.now()){const a=gy(n.type,t.species.types);let o=e.stats.attack*(e.buffs?.attack||1),l=t.stats.defence*(t.buffs?.defence||1);e.ability?.effect==="fierce"&&(o*=1+e.ability.value),e.ability?.effect==="lastStand"&&e.hp<e.maxHp/3&&(o*=1+e.ability.value),t.ability?.effect==="intimidate"&&(o*=1-t.ability.value),t.statuses?.weaken&&(o*=.78),t.statuses?.shock&&(l*=.9);const c=.05+(e.ability?.effect==="keenEye"?e.ability.value:0),h=Math.random()<c,d=.92+Math.random()*.16;let u=n.power*(o/(l+80))*1.35*(1+e.level*.02)*a*d;h&&(u*=1.55),(t.ability?.effect==="guard"||t.ability?.effect==="sturdy")&&(u*=1-t.ability.value*.7),u=Math.max(1,Math.round(u));const f=Nd(t,u,r,s,"move");if(e.ability?.effect==="vampiric"&&f.amount>0){const g=Math.max(1,Math.round(f.amount*e.ability.value));ir(e,g),s.push({type:"heal",target:e.side,amount:g})}return s.push({type:"damage",target:t.side,amount:f.amount,absorbed:f.absorbed,crit:h,typeMult:a,moveType:n.type}),a>=2?jt(i,`It's super effective! ${f.amount} damage.`):a<=.5?jt(i,`It's not very effective. ${f.amount} damage.`):jt(i,`${t.name} takes ${f.amount} damage.`),f}function Nd(i,e,t=Date.now(),n=[],s="move"){if(i.hp<=0)return{amount:0,absorbed:0};let r=Math.max(0,Math.round(e)),a=0;return i.shield>0&&i.shieldUntil>t&&(a=Math.min(i.shield,r),i.shield-=a,r-=a),i.hp=Math.max(0,i.hp-r),i.hp>0&&i.ability?.effect==="shieldOnLow"&&!i.shieldOnLowUsed&&i.hp<i.maxHp/2&&(i.shieldOnLowUsed=!0,i.shield=Math.round(i.maxHp*i.ability.value),i.shieldUntil=t+7e3,n.push({type:"shield",target:i.side,amount:i.shield})),i.hp<=0&&n.push({type:"faint",target:i.side,source:s}),{amount:r,absorbed:a}}function ir(i,e){if(i.hp<=0)return 0;const t=i.hp;return i.hp=Math.min(i.maxHp,i.hp+Math.max(0,Math.round(e))),i.hp-t}function Zr(i,e,t=4,n=Date.now()){e&&(i.statuses[e]={id:e,expiresAt:Math.max(i.statuses[e]?.expiresAt||0,n+t*1e3),tickAt:n+1e3})}function ux(i,e,t=Date.now()){i.buffs[e.stat]=Math.max(.65,1-e.amount),i.statuses[`debuff_${e.stat}`]={id:`debuff_${e.stat}`,expiresAt:t+(e.duration||5)*1e3}}function Pl(i,e=Date.now()){return!!(i.statuses?.stun&&i.statuses.stun.expiresAt>e)}function hh(i,e=Date.now()){let t=1;return i.statuses?.chill&&i.statuses.chill.expiresAt>e&&(t*=.72),i.statuses?.snare&&i.statuses.snare.expiresAt>e&&(t*=.45),i.statuses?.shock&&i.statuses.shock.expiresAt>e&&(t*=.92),t*=i.buffs?.speed||1,i.ability?.effect==="swift"&&(t*=1+i.ability.value),t}function fx(i,e=Date.now()){const t=[],n=Math.max(0,(e-i.lastTick)/1e3);i.lastTick=e;for(const s of[i.player,i.enemy])if(!(s.hp<=0)){for(const[r,a]of Object.entries(s.statuses)){if(a.expiresAt<=e){delete s.statuses[r];continue}if(r==="burn"&&e>=(a.tickAt||0)){a.tickAt=e+1e3;const o=Math.max(1,Math.round(s.maxHp*.014));s.hp=Math.max(0,s.hp-o),t.push({type:"statusDamage",target:s.side,status:"burn",amount:o})}if(r==="regen"&&e>=(a.tickAt||0)){a.tickAt=e+1e3;const o=Math.max(1,Math.round(s.maxHp*.018));ir(s,o),t.push({type:"heal",target:s.side,amount:o})}}s.shield>0&&s.shieldUntil<=e&&(s.shield=0),s.ability?.effect==="regen"&&n>0&&ir(s,s.maxHp*s.ability.value*n)}return Ud(i,t),i.events.push(...t),t}function Ud(i,e=[]){return i.over||(i.enemy.hp<=0?(i.over=!0,i.result="victory",jt(i,`${i.enemy.name} is calmed. Victory!`),e.push({type:"battleEnd",result:"victory"})):i.player.hp<=0&&(i.over=!0,i.result="defeat",jt(i,`${i.player.name} can no longer continue.`),e.push({type:"battleEnd",result:"defeat"}))),i.result}function rl(i,e=null){const t=i.enemy;if(i.over)return 0;const n=1-t.hp/t.maxHp,s=t.species.rarity,r={common:0,uncommon:.03,rare:.08,epic:.15,legendary:.34,ultra:.5}[s]||0;let a=0;for(const h of Object.keys(t.statuses))["burn","chill","shock","snare","stun","weaken"].includes(h)&&(a+=.04);a=Math.min(.16,a);const o=e?.captureBonus||0,l=i.player.ability?.effect==="lucky"?i.player.ability.value:0,c=Math.max(0,(t.level-i.player.level)*.006);return qt(.07+n*.62+a+o+l-r-c,.04,.94)}function px(i,e=null){const t=rl(i,e),s=Math.random()<t;return s?(i.over=!0,i.result="captured",jt(i,`${i.enemy.name} accepts the capture field!`),i.events.push({type:"capture",success:!0,chance:t})):(jt(i,`The capture field breaks. ${Math.round(t*100)}% chance.`),i.events.push({type:"capture",success:!1,chance:t})),{success:s,chance:t}}function mx(i){if(!i||i.result!=="victory")return{xp:0,shards:0,item:null};const e=i.enemy,t={common:12,uncommon:26,rare:50,epic:95,legendary:240,ultra:600}[e.species.rarity]||0,n=Math.round(e.level*14+t),s=Math.round(e.level*4+t*1.4);let r=null;return Math.random()<.22&&(r=Math.random()<.72?"potion":"treat"),{xp:n,shards:s,item:r}}function gx(i){if(i.over)return{ok:!1,reason:"Battle is already over."};i.fleeAttempts++;const e=i.legendary?.2:qt(.55+i.fleeAttempts*.15,.55,.95);return Math.random()<e?(i.over=!0,i.result="fled",jt(i,"You retreat safely."),{ok:!0,fled:!0}):(jt(i,"You failed to get away!"),{ok:!0,fled:!1})}function dh(i,e){const t=i.enemy.moves.filter(a=>a.readyAt<=Date.now()&&!Pl(i.enemy));if(!t.length)return null;const n=t.map(a=>({...a,move:fi(a.id)})),s=n.filter(a=>a.move.shape==="self"||a.move.range>=e-.6||a.move.shape==="aoe"),r=s.length?s:n;return r.sort((a,o)=>o.move.power-a.move.power),r[0]?.move.power===0&&Math.random()<.5&&r.length>1?r[1]:r[0]||null}function jt(i,e){i.log.push(e),i.log.length>8&&i.log.shift()}class vx{constructor(e,t,n,s={}){this.engine=e,this.battle=t,this.wild=n,this.options=s,this.onHud=s.onHud||(()=>{}),this.onEnd=s.onEnd||(()=>{}),this.onLog=s.onLog||(()=>{}),this.scene=new Xh,this.scene.background=new Ve(1119530),this.scene.fog=new fa(1119530,.022),this.root=new je,this.scene.add(this.root),this.effects=[],this.texts=[],this.telegraphs=[],this.cameraYaw=.55,this.cameraPitch=.42,this.cameraDistance=14,this.cameraTarget=new P,this.cameraPosition=new P,this.playerPos=new P(-2.7,0,1.6),this.enemyPos=new P(2.7,0,-1.4),this.playerFacing=Math.atan2(this.enemyPos.x-this.playerPos.x,this.enemyPos.z-this.playerPos.z),this.enemyFacing=this.playerFacing+Math.PI,this.playerVelocity=new P,this.enemyVelocity=new P,this.dodge={readyAt:0,until:0,invulnUntil:0,direction:new P},this.enemyCastAt=0,this.enemyMoveCooldownAt=0,this.endTimer=0,this.ended=!1,this.lastHud=0,this.time=0,this.biome=vt[n.biome]||vt.astral,this.buildArena(),this.buildCombatants(),this.buildStars(),this.updateCamera(.016,!0),this.scene.userData.battle=!0}buildArena(){const e=new Ve(this.biome.ground),t=new Ve(this.biome.accent),n=new Pe(new rt(10.5,11.5,1.1,14),new fn({color:e.clone().multiplyScalar(.9),flatShading:!0,roughness:.88,metalness:.04}));n.position.y=-.56,this.root.add(n);const s=new Pe(new Qn(8.4,40),new fn({color:e.clone().lerp(new Ve("#1b2234"),.26),flatShading:!0,roughness:.9}));s.rotation.x=-Math.PI/2,s.position.y=.01,this.root.add(s);const r=new Pe(new Tn(8.5,.1,6,64),new wn({color:t,transparent:!0,opacity:.82,blending:bn}));r.rotation.x=Math.PI/2,r.position.y=.08,this.root.add(r),this.ring=r;for(let h=0;h<12;h++){const d=h/12*Math.PI*2,u=new Pe(new er(.25,.36,5),new wn({color:t,transparent:!0,opacity:.35,side:en,blending:bn}));u.rotation.x=-Math.PI/2,u.position.set(Math.cos(d)*6.4,.06,Math.sin(d)*6.4),this.root.add(u)}const a=new fn({color:"#3f4050",flatShading:!0,roughness:.9});for(let h=0;h<18;h++){const d=h/18*Math.PI*2+.2,u=11+Math.random()*5,f=.6+Math.random()*2.2,g=new Pe(new cs(f,0),a);g.position.set(Math.cos(d)*u,-2-Math.random()*4,Math.sin(d)*u),g.rotation.set(Math.random(),Math.random(),Math.random()),this.root.add(g)}for(let h=0;h<6;h++){const d=h/6*Math.PI*2,u=new Pe(new rn(.45,3+Math.random()*2,5),new fn({color:t,emissive:t,emissiveIntensity:.55,transparent:!0,opacity:.9,flatShading:!0}));u.position.set(Math.cos(d)*9.6,1.4,Math.sin(d)*9.6),u.rotation.z=Math.cos(d)*.25,this.root.add(u)}this.ambient=new ud(12110079,2103331,1.5),this.scene.add(this.ambient);const o=new sa(16769208,2.5);o.position.set(-6,14,8),this.scene.add(o);const l=new sa(10190335,1.6);l.position.set(6,8,-10),this.scene.add(l),this.scene.add(new md(3949672,.8));const c=this.makeTrainer();c.position.set(-.5,0,5.4),c.rotation.y=Math.PI,this.root.add(c),this.trainer=c}makeTrainer(){const e=new je,t=new fn({color:"#2f7f82",flatShading:!1,roughness:.66}),n=new fn({color:"#e8b48f",flatShading:!1,roughness:.62}),s=new fn({color:"#ffcc66",flatShading:!1,roughness:.56}),r=new Pe(new pa(.3,.55,12,12),t);r.position.y=1,e.add(r);const a=new Pe(new pn(.28,2),n);a.position.y=1.7,e.add(a);const o=new Pe(new _t(.68,.14,.38),s);o.position.y=1.38,e.add(o);for(const l of[-1,1]){const c=new Pe(new rt(.1,.11,.5,12,1),t);c.position.set(l*.16,.45,0),e.add(c);const h=new Pe(new Bt(.11,10,8),n);h.position.set(l*.16,.12,0),e.add(h);const d=new Pe(new rt(.08,.09,.5,12,1),t);d.position.set(l*.38,1,.04),d.rotation.z=l*.2,e.add(d);const u=new Pe(new Bt(.09,10,8),n);u.position.set(l*.46,.72,.04),e.add(u)}return e}buildStars(){const t=new Float32Array(660);for(let r=0;r<220;r++)t[r*3]=(Math.random()-.5)*120,t[r*3+1]=8+Math.random()*50,t[r*3+2]=(Math.random()-.5)*120;const n=new Mt;n.setAttribute("position",new Ht(t,3));const s=new Zs(n,new ds({color:14543103,size:.18,transparent:!0,opacity:.75,depthWrite:!1}));this.scene.add(s),this.stars=s}buildCombatants(){const e=this.battle.player.species,t=this.battle.enemy.species;if(this.playerMesh=oa(e,{scale:1.05}),this.playerMesh.position.copy(this.playerPos),this.playerMesh.rotation.y=this.playerFacing,this.root.add(this.playerMesh),this.enemyMesh=oa(t,{scale:this.wild.legendary?1.25:1}),this.enemyMesh.position.copy(this.enemyPos),this.enemyMesh.rotation.y=this.enemyFacing,this.root.add(this.enemyMesh),this.wild.legendary){const n=new is(an[t.types[0]]?.color||"#c08bff",4,22,2);n.position.set(this.enemyPos.x,2,this.enemyPos.z),this.root.add(n),this.enemyAura=n}this.updateCombatantPositions()}updateCombatantPositions(){this.playerMesh&&(this.playerMesh.position.set(this.playerPos.x,this.playerPos.y,this.playerPos.z),this.playerMesh.rotation.y=this.playerFacing),this.enemyMesh&&(this.enemyMesh.position.set(this.enemyPos.x,this.enemyPos.y,this.enemyPos.z),this.enemyMesh.rotation.y=this.enemyFacing)}update(e,t,n=Date.now()){this.time+=e;const s=t.consumeLook();this.cameraYaw-=s.dx*.005,this.cameraPitch=qt(this.cameraPitch+s.dy*.0035,.12,.9);const r=t.consumeWheel();r&&(this.cameraDistance=qt(this.cameraDistance+r*.9,9,22)),this.battle.over||(this.updatePlayer(e,t,n),this.updateEnemy(e,n),this.updateTelegraphs(n),this.dodge.invulnUntil>0&&this.dodge.invulnUntil<n&&(this.dodge.invulnUntil=0)),fx(this.battle,n),this.updateEffects(e),this.updateCamera(e),this.animateCombatants(),this.battle.over&&!this.ended&&(this.endTimer||(this.endTimer=n+1100),n>=this.endTimer&&(this.ended=!0,this.onEnd(this.battle.result,this.battle))),n-this.lastHud>80&&(this.lastHud=n,this.onHud(this.hudState(n)))}updatePlayer(e,t,n){const s=t.getMoveVector(),r=-Math.sin(this.cameraYaw),a=-Math.cos(this.cameraYaw),o=Math.cos(this.cameraYaw),l=-Math.sin(this.cameraYaw);let c=r*s.y+o*s.x,h=a*s.y+l*s.x;const d=Math.hypot(c,h);if(d>1&&(c/=d,h/=d),(t.consumePressed("KeyQ")||t.consumePressed("Space"))&&n>=this.dodge.readyAt){this.dodge.readyAt=n+3800,this.dodge.until=n+220,this.dodge.invulnUntil=n+430;const _=d>.1?new P(c,0,h):new P(Math.sin(this.playerFacing),0,Math.cos(this.playerFacing));this.dodge.direction.copy(_),this.spawnBurst(this.playerPos.clone().add(new P(0,.3,0)),"#9be8ff",12,.7)}const u=hh(this.battle.player,n)*(n<this.dodge.until?16:5.4);let f=c*u,g=h*u;n<this.dodge.until&&(f=this.dodge.direction.x*u,g=this.dodge.direction.z*u),this.playerVelocity.x+=(f-this.playerVelocity.x)*Math.min(1,e*16),this.playerVelocity.z+=(g-this.playerVelocity.z)*Math.min(1,e*16),this.battle.over||(this.playerPos.x+=this.playerVelocity.x*e,this.playerPos.z+=this.playerVelocity.z*e),this.clampToArena(this.playerPos,7.9),Math.hypot(this.playerVelocity.x,this.playerVelocity.z)>.3&&(this.playerFacing=Math.atan2(this.playerVelocity.x,this.playerVelocity.z))}clampToArena(e,t){const n=Math.hypot(e.x,e.z);if(n>t){const s=t/n;e.x*=s,e.z*=s}}updateEnemy(e,t){const n=this.battle;if(n.enemy.hp<=0)return;const s=this.playerPos.x-this.enemyPos.x,r=this.playerPos.z-this.enemyPos.z,a=Math.hypot(s,r)||.001,o=dh(n,a),l=o?.move?.range?Math.max(2.2,o.move.range*.62):2.8;let c=0,h=0;a>l+.4?(c=s/a,h=r/a):a<l-.8?(c=-s/a,h=-r/a):(c=-r/a*.4,h=s/a*.4);const d=hh(n.enemy,t)*2.4;if(this.enemyPos.x+=c*d*e,this.enemyPos.z+=h*d*e,this.clampToArena(this.enemyPos,7.9),this.enemyFacing=Math.atan2(this.playerPos.x-this.enemyPos.x,this.playerPos.z-this.enemyPos.z),Pl(n.enemy,t)||t<this.enemyCastAt||t<this.enemyMoveCooldownAt)return;const u=dh(n,a);if(!u)return;if(this.enemyMoveCooldownAt=t+1200+Math.random()*900,u.move.shape==="self"){this.castEnemyMove(u,t);return}if(a>u.move.range+1.2&&u.move.shape!=="aoe")return;const f={moveId:u.id,center:this.playerPos.clone(),radius:u.move.shape==="aoe"?u.move.radius:u.move.shape==="cone"?2.8:1.7,resolveAt:t+(u.move.power>45?1150:800),mesh:this.makeTelegraph(u.move,this.playerPos)};this.telegraphs.push(f),this.onLog(`Incoming ${u.move.name}!`)}makeTelegraph(e,t){const n=an[e.type]?.color||"#ff8a4c",s=new Pe(new er(.35,1,40),new wn({color:n,transparent:!0,opacity:.7,side:en,blending:bn,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(t.x,.06,t.z),s.scale.setScalar(e.shape==="aoe"?e.radius:1.75);const r=new Pe(new Qn(1,32),new wn({color:n,transparent:!0,opacity:.16,side:en,blending:bn,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.005,s.add(r),this.root.add(s),s}updateTelegraphs(e){for(let t=this.telegraphs.length-1;t>=0;t--){const n=this.telegraphs[t],s=n.resolveAt-e;if(s>0){n.mesh.scale.setScalar(n.mesh.scale.x+(s<400?.001:0));continue}const r=fi(n.moveId),o=Math.hypot(this.playerPos.x-n.center.x,this.playerPos.z-n.center.z)<=n.radius,l=e<this.dodge.invulnUntil;if(this.root.remove(n.mesh),this.telegraphs.splice(t,1),!o||l){jt(this.battle,`${this.battle.enemy.name}'s ${r.name} misses.`),this.onLog(l?"Perfect dodge!":"You escaped the strike zone."),this.spawnFloat("MISS",this.playerPos.clone().add(new P(0,2.2,0)),"#9be8ff");continue}const c=this.castEnemyMoveRaw(n.moveId,e);c?.events&&this.handleEvents(c.events,"enemy")}}castEnemyMove(e,t){const n=oo(this.battle,"enemy",e.id,{distance:0,angle:0},t);return n.ok&&n.events&&this.handleEvents(n.events,"enemy"),this.spawnFloat(e.move.name,this.enemyPos.clone().add(new P(0,2.2,0)),"#ffb35c"),n}castEnemyMoveRaw(e,t){const n=oo(this.battle,"enemy",e,{distance:0,angle:0},t);return n.ok&&n.events&&this.handleEvents(n.events,"enemy"),this.spawnBurst(this.playerPos.clone().add(new P(0,.4,0)),an[fi(e).type]?.color||"#ffb35c",14,1.2),n}castPlayerMove(e,t=Date.now()){if(this.battle.over)return{ok:!1,reason:"Battle is over."};const n=this.battle.player.moves[e];if(!n)return{ok:!1,reason:"No move in that slot."};const s=fi(n.id),r=Dd(this.battle,"player",n.id,t);if(!r.ok)return r;this.playerFacing=Math.atan2(this.enemyPos.x-this.playerPos.x,this.enemyPos.z-this.playerPos.z);const a=this.enemyPos.x-this.playerPos.x,o=this.enemyPos.z-this.playerPos.z,l=Math.hypot(a,o),c=Math.atan2(a,o)-this.playerFacing,h=oo(this.battle,"player",n.id,{distance:l,angle:c},t);return this.onLog(`${this.battle.player.name} uses ${s.name}.`),this.spawnFloat(s.name,this.playerPos.clone().add(new P(0,2.3,0)),an[s.type]?.color||"#9be8ff"),s.shape==="self"?this.spawnBurst(this.playerPos.clone().add(new P(0,.6,0)),an[s.type]?.color||"#63c96b",14,1.1):s.range>4?this.spawnProjectile(s.type,this.playerPos.clone().add(new P(0,1,0)),this.enemyPos.clone().add(new P(0,.8,0))):this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),an[s.type]?.color||"#ff8a4c",16,1.3),h.events&&this.handleEvents(h.events,"player"),h}handleEvents(e,t){for(const n of e){if(n.type==="damage"){const s=n.target==="player"?this.playerPos:this.enemyPos,r=n.crit?"!":"";this.spawnFloat(`-${n.amount}${r}`,s.clone().add(new P(0,2,0)),n.crit?"#ffd166":"#ffffff"),this.spawnBurst(s.clone().add(new P(0,.7,0)),n.typeMult>=2?"#ffe066":"#ff9f7a",n.crit?22:12,.9)}if(n.type==="heal"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat(`+${n.amount}`,s.clone().add(new P(0,2,0)),"#8ef0a0"),this.spawnBurst(s.clone().add(new P(0,.6,0)),"#63c96b",12,1)}if(n.type==="shield"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat("SHIELD",s.clone().add(new P(0,2.3,0)),"#9be8ff"),this.spawnBurst(s.clone().add(new P(0,.7,0)),"#9be8ff",16,1.1)}if(n.type==="status"){const s=n.target==="player"?this.playerPos:this.enemyPos;this.spawnFloat(n.status.toUpperCase(),s.clone().add(new P(0,2.5,0)),"#c08bff")}}}spawnProjectile(e,t,n){const s=an[e]?.color||"#ffe066",r=new Pe(new pn(.24,0),new wn({color:s,transparent:!0,opacity:.95,blending:bn}));r.position.copy(t),this.root.add(r),this.effects.push({mesh:r,life:0,maxLife:.24,update:(o,l)=>{o.life+=l;const c=Math.min(1,o.life/o.maxLife);r.position.lerpVectors(t,n,c),c>=1&&(this.spawnBurst(n,s,18,1),o.dead=!0)}})}spawnBurst(e,t,n=12,s=1){const r=new je;r.position.copy(e),this.root.add(r);const a=[];for(let o=0;o<n;o++){const l=new Pe(new pn(.08+Math.random()*.09,0),new wn({color:t,transparent:!0,opacity:.95,blending:bn})),c=new P(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar((2+Math.random()*3)*s);l.userData.velocity=c,r.add(l),a.push(l)}this.effects.push({mesh:r,life:0,maxLife:.65,update:(o,l)=>{o.life+=l;for(const c of a)c.position.addScaledVector(c.userData.velocity,l),c.userData.velocity.y-=5*l,c.material.opacity=Math.max(0,1-o.life/o.maxLife),c.scale.setScalar(Math.max(.01,1-o.life/o.maxLife));o.life>=o.maxLife&&(o.dead=!0)}})}spawnFloat(e,t,n="#ffffff"){const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.font='bold 52px "Trebuchet MS", sans-serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="rgba(10,14,23,0.9)",r.strokeText(e,128,48),r.fillStyle=n,r.fillText(e,128,48);const a=new ed(s);a.colorSpace=Kt;const o=new Jh(new Sl({map:a,transparent:!0,depthWrite:!1}));o.position.copy(t),o.scale.set(2.8,1.05,1),this.root.add(o),this.effects.push({mesh:o,life:0,maxLife:1.1,update:(l,c)=>{l.life+=c,o.position.y+=c*.9,o.material.opacity=Math.max(0,1-l.life/l.maxLife),l.life>=l.maxLife&&(l.dead=!0)}})}updateEffects(e){for(let t=this.effects.length-1;t>=0;t--){const n=this.effects[t];n.update(n,e),n.dead&&(this.root.remove(n.mesh),this.effects.splice(t,1))}}animateCombatants(){this.playerMesh&&nr(this.playerMesh,this.time,Math.hypot(this.playerVelocity.x,this.playerVelocity.z)>.3?"moving":"battle"),this.enemyMesh&&nr(this.enemyMesh,this.time+1.4,"battle"),this.updateCombatantPositions()}attemptCapture(e,t=Date.now()){if(this.battle.over)return{ok:!1,reason:"Battle is over."};const n=rl(this.battle,e),s=px(this.battle,e);return this.onLog(s.success?"Capture field holds!":`Capture failed (${Math.round(s.chance*100)}% chance).`),s.success?(this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),"#ffe066",28,1.6),this.spawnFloat("CAPTURED!",this.enemyPos.clone().add(new P(0,2.4,0)),"#ffe066")):(this.spawnBurst(this.enemyPos.clone().add(new P(0,.7,0)),"#ff8a4c",10,.8),this.enemyMoveCooldownAt=Math.min(this.enemyMoveCooldownAt,t+350)),{...s,chance:n}}attemptFlee(e=Date.now()){const t=gx(this.battle);return this.onLog(t.fled?"You retreat from the encounter.":"You could not escape!"),t}hudState(e=Date.now()){return{battle:this.battle,cooldowns:this.battle.player.moves.map(t=>Math.max(0,t.readyAt-e)),maxCooldowns:this.battle.player.moves.map(t=>fi(t.id).cooldown*1e3),dodgeRemaining:Math.max(0,this.dodge.readyAt-e),captureChance:rl(this.battle,null),inRange:Math.hypot(this.playerPos.x-this.enemyPos.x,this.playerPos.z-this.enemyPos.z),playerPos:this.playerPos,enemyPos:this.enemyPos,invulnerable:e<this.dodge.invulnUntil}}updateCamera(e,t=!1){const n=new P((this.playerPos.x+this.enemyPos.x)*.5,1.25,(this.playerPos.z+this.enemyPos.z)*.5),s=Math.cos(this.cameraPitch)*this.cameraDistance,r=new P(n.x+Math.sin(this.cameraYaw)*s,n.y+Math.sin(this.cameraPitch)*this.cameraDistance+2.2,n.z+Math.cos(this.cameraYaw)*s);t?(this.cameraTarget.copy(n),this.cameraPosition.copy(r)):(this.cameraTarget.lerp(n,1-Math.exp(-6*e)),this.cameraPosition.lerp(r,1-Math.exp(-5*e)));const a=this.engine.camera;a.position.copy(this.cameraPosition),a.lookAt(this.cameraTarget),this.glowingRing&&(this.glowingRing.rotation.z+=e),this.ring.material.opacity=.62+Math.sin(this.time*2)*.12}dispose(){this.root.removeFromParent();for(const e of this.effects)e.mesh.removeFromParent();this.effects.length=0,this.scene.clear()}}const gn={disc_basic:{id:"disc_basic",name:"Field Disc",category:"disc",price:25,currency:"shards",captureBonus:0,color:"#9fe7ff",icon:"disc",description:"A dependable capture disc. Free with every expedition kit and cheap to replace."},disc_fine:{id:"disc_fine",name:"Prism Disc",category:"disc",price:80,currency:"shards",captureBonus:.18,color:"#c08bff",icon:"disc",description:"A tuned disc with a brighter containment field. Adds 18% to capture chance."},potion:{id:"potion",name:"Sap Salve",category:"heal",price:30,currency:"shards",healPercent:.4,color:"#63c96b",icon:"potion",description:"Restores 40% of one creature's maximum health outside battle."},potion_great:{id:"potion_great",name:"Greater Salve",category:"heal",price:75,currency:"shards",healPercent:.8,color:"#8ef0a0",icon:"potion",description:"Restores 80% of one creature's maximum health outside battle."},treat:{id:"treat",name:"Starlight Treat",category:"xp",price:20,currency:"shards",xp:45,color:"#ffd166",icon:"treat",description:"A small training snack. Grants 45 experience to one creature."},lure:{id:"lure",name:"Scent Lure",category:"lure",price:60,currency:"shards",color:"#ff8fc7",icon:"lure",description:"Slightly raises the chance of rare creatures for the next three encounters."},training_slot:{id:"training_slot",name:"Second Treadmill",category:"upgrade",price:320,currency:"shards",stardust:2,color:"#ffb35c",icon:"treadmill",description:"Unlocks a permanent second treadmill slot. Both slots train independently."}},yx=["disc_basic","disc_fine","potion","potion_great","treat","lure","training_slot"],Fd=[{id:"q_first_steps",name:"First Steps in the Hollow",giver:"Guide Wren",description:"Meet your starter, then find one wild creature and bring it home safely.",autoStart:!0,objectives:[{id:"starter",label:"Choose a starter",type:"starter",count:1},{id:"capture",label:"Capture any wild creature",type:"capture",count:1}],rewards:{shards:120,stardust:1,items:{disc_basic:5,potion:2}}},{id:"q_verdant",name:"Whispers Under Green",giver:"Botanist Sable",description:"The Verdant Hollow is restless. Calm three creatures and inspect the old root shrine.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 3 Verdant creatures",type:"defeat",biome:"verdant",count:3},{id:"visit",label:"Visit the Root Shrine",type:"visit",landmark:"root-shrine",count:1}],rewards:{shards:180,stardust:1,items:{potion:3,treat:2}}},{id:"q_ember",name:"Safe Passage Through Ember",giver:"Warden Cato",description:"Learn the caldera channels. Defeat two Ember Reach creatures and touch the Warm Gate.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 2 Ember Reach creatures",type:"defeat",biome:"ember",count:2},{id:"visit",label:"Visit the Warm Gate",type:"visit",landmark:"warm-gate",count:1}],rewards:{shards:220,stardust:2,items:{disc_fine:2,potion_great:2}}},{id:"q_tide",name:"What the Tide Carries",giver:"Tidekeeper Maru",description:"The coast has been unusually loud. Capture a Water creature and visit the Shell Spire.",autoStart:!1,objectives:[{id:"capture_water",label:"Capture a Water creature",type:"capture",captureType:"Water",count:1},{id:"visit",label:"Visit the Shell Spire",type:"visit",landmark:"shell-spire",count:1}],rewards:{shards:240,stardust:2,items:{disc_fine:2,lure:1}}},{id:"q_frost",name:"A Quiet Above the Pines",giver:"Scout Ilya",description:"The Frostveil is beautiful and unforgiving. Defeat three Frost creatures and reach the Ice Obelisk.",autoStart:!1,objectives:[{id:"defeat",label:"Defeat 3 Frost creatures",type:"defeat",biome:"frost",count:3},{id:"visit",label:"Visit the Ice Obelisk",type:"visit",landmark:"ice-obelisk",count:1}],rewards:{shards:300,stardust:3,items:{potion_great:3,treat:3}}},{id:"q_astral",name:"The Scar Answers",giver:"Astronomer Vey",description:"Something in the Astral Scar is listening. Visit the Crystal Ring and witness a legendary event.",autoStart:!1,objectives:[{id:"visit",label:"Visit the Crystal Ring",type:"visit",landmark:"crystal-ring",count:1},{id:"legendary",label:"Witness a legendary event",type:"legendary",count:1}],rewards:{shards:450,stardust:4,items:{disc_fine:3,lure:2}}},{id:"q_trainer",name:"The Long Road",giver:"Treadmill Attendant Bo",description:"Strength is built in quiet moments. Train a creature for two minutes and raise one to level 10.",autoStart:!1,objectives:[{id:"train",label:"Train for 120 seconds total",type:"train",count:120},{id:"level10",label:"Raise a creature to level 10",type:"level",level:10,count:1}],rewards:{shards:260,stardust:2,items:{treat:5,potion:3}}},{id:"q_collector",name:"A Living Atlas",giver:"Archivist Nim",description:"Discovery is its own reward, but the archive pays well. Record 8 species in the AstraDex.",autoStart:!1,objectives:[{id:"discover8",label:"Discover 8 species",type:"discover",count:8}],rewards:{shards:320,stardust:3,items:{disc_fine:2,lure:1}}}],or=Object.fromEntries(Fd.map(i=>[i.id,i]));function Lt(i,e){return i?.creatures?.find(t=>t.uid===e)||null}function un(i){return Lt(i,i?.activeUid)||i?.creatures?.[0]||null}function xx(i){return(i?.party||[]).map(e=>Lt(i,e)).filter(Boolean)}function _x(i){return(i?.creatures||[]).filter(e=>!i.party.includes(e.uid))}function Sx(i,e){const t=Lt(i,e);return t?i.party.includes(e)?t.assignment==="training"?{ok:!1,reason:"This creature is training. Remove it from the treadmill first."}:(i.activeUid=e,{ok:!0}):{ok:!1,reason:"Move this creature into your party first."}:{ok:!1,reason:"Creature not found."}}function Mx(i,e,t){const n=i.party.indexOf(e);if(n===-1)return{ok:!1,reason:"Creature is not in the party."};const s=n+t;if(s<0||s>=i.party.length)return{ok:!1,reason:"That slot is already at the edge."};const[r]=i.party.splice(n,1);return i.party.splice(s,0,r),{ok:!0}}function bx(i,e){const t=Lt(i,e);return t?i.party.includes(e)?{ok:!0}:i.party.length>=Pi?{ok:!1,reason:`Your party is full (${Pi}). Move another creature to storage first.`}:t.assignment==="training"?{ok:!1,reason:"Remove this creature from the treadmill first."}:(i.party.push(e),t.assignment="party",{ok:!0}):{ok:!1,reason:"Creature not found."}}function wx(i,e){const t=i.party.indexOf(e);if(t===-1)return{ok:!1,reason:"Creature is already in storage."};if(i.party.length<=1)return{ok:!1,reason:"You need at least one creature in your party."};const n=Lt(i,e);return n?.assignment==="training"?{ok:!1,reason:"Remove this creature from the treadmill first."}:(i.party.splice(t,1),n&&(n.assignment="storage"),i.activeUid===e&&(i.activeUid=i.party[0]||null),{ok:!0})}function Ex(i,e){return Lt(i,e)?i.creatures.length<=1?{ok:!1,reason:"You cannot release your last creature."}:i.activeUid===e?{ok:!1,reason:"Set another creature as active before releasing this one."}:(i.creatures=i.creatures.filter(n=>n.uid!==e),i.party=i.party.filter(n=>n!==e),i.training.slots=i.training.slots.filter(n=>n.uid!==e),i.activeUid===e&&(i.activeUid=i.party[0]||i.creatures[0]?.uid||null),{ok:!0}):{ok:!1,reason:"Creature not found."}}function Tx(i,e=1){if(!i)return 0;const t=i.hp;return i.hp=Math.min(i.stats.maxHp,i.hp+Math.round(i.stats.maxHp*e)),i.hp-t}function lo(i){let e=0;for(const t of i.creatures){const n=t.stats.maxHp-t.hp;t.hp=t.stats.maxHp,e+=n}return e}function Ax(i){return Tt(i?.speciesId)?.name||"Unknown"}function Nt(i){return i?.nickname||Ax(i)}function Cx(i){return{used:i.creatures.filter(t=>!i.party.includes(t.uid)).length,limit:Pd}}function Rx(i){if(!i)return 0;const e=i.stats||{};return Math.round((e.maxHp||0)*.28+(e.attack||0)*1.4+(e.defence||0)*1.1+(e.speed||0)*.9+i.level*3)}function pi(i){return(Number(i)||0).toLocaleString("en-US")}function Is(i){const e=Math.max(0,Math.floor(i)),t=Math.floor(e/60),n=e%60;return t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}:${String(n).padStart(2,"0")}`}function Jr(i,e=0,t=0){i.currency.shards=qt((i.currency.shards||0)+Math.max(0,Math.round(e)),0,99999999),i.currency.stardust=qt((i.currency.stardust||0)+Math.max(0,Math.round(t)),0,99999999)}function kd(i,e=0,t=0){return(i.currency.shards||0)>=e&&(i.currency.stardust||0)>=t}function Px(i,e=0,t=0){return kd(i,e,t)?(i.currency.shards-=Math.max(0,Math.round(e)),i.currency.stardust-=Math.max(0,Math.round(t)),{ok:!0}):{ok:!1,reason:"Not enough currency."}}function da(i,e,t=1){if(!gn[e]&&e!=="training_slot")return{ok:!1,reason:"Unknown item."};if(e==="training_slot")return(i.training.unlocked||1)>=2?{ok:!1,reason:"The second treadmill is already unlocked."}:(i.training.unlocked=2,{ok:!0});const n=i.inventory[e]||0,s=Math.min(la,n+Math.max(0,Math.round(t)));return i.inventory[e]=s,{ok:!0,granted:s-n,overflow:n+t>la}}function uh(i,e){const t=gn[e];if(!t)return{ok:!1,reason:"Unknown item."};if(e==="training_slot"){if((i.training.unlocked||1)>=2)return{ok:!1,reason:"You already own both treadmill slots."}}else if((i.inventory[e]||0)>=la)return{ok:!1,reason:`${t.name} is already at the inventory cap.`};const n=Px(i,t.price,t.stardust||0);if(!n.ok)return n;const s=da(i,e,1);return s.ok?{ok:!0,item:t}:(i.currency.shards+=t.price,i.currency.stardust+=t.stardust||0,s)}function Lx(i,e,t="potion"){const n=gn[t];if(!n||n.category!=="heal")return{ok:!1,reason:"That is not a healing item."};if((i.inventory[t]||0)<1)return{ok:!1,reason:`No ${n.name} left.`};const s=Lt(i,e);if(!s)return{ok:!1,reason:"Creature not found."};if(s.hp>=s.stats.maxHp)return{ok:!1,reason:"That creature is already at full health."};const r=Tx(s,n.healPercent);return i.inventory[t]-=1,{ok:!0,healed:r,item:n}}function Ix(i,e,t="treat"){const n=gn[t];if(!n||n.category!=="xp")return{ok:!1,reason:"That is not a training treat."};if((i.inventory[t]||0)<1)return{ok:!1,reason:`No ${n.name} left.`};const s=Lt(i,e);return s?(i.inventory[t]-=1,{ok:!0,result:Vs(i,s,n.xp),item:n}):{ok:!1,reason:"Creature not found."}}function Dx(i){return(i.inventory.lure||0)<1?{ok:!1,reason:"No Scent Lure left."}:(i.inventory.lure-=1,i.lureCharges=3,{ok:!0})}function Nx(i,e){const t=gn[e],n=e==="training_slot"?(i.training.unlocked||1)>=2:i.inventory[e]||0;return{item:t,owned:n,affordable:kd(i,t.price,t.stardust||0),lockedReason:e==="training_slot"&&n?"Already unlocked":null}}function Ux(i){return yx.map(e=>Nx(i,e))}function Od(i,e){const t=or[e];if(!t||i.quests.completed.includes(e)||i.quests.active.some(n=>n.id===e))return null;i.quests.active.push({id:e,startedAt:Date.now()}),i.quests.progress[e]=i.quests.progress[e]||{};for(const n of t.objectives)typeof i.quests.progress[e][n.id]!="number"&&(i.quests.progress[e][n.id]=0);return t}function Fx(i,e){const t=or[e];return t?i.quests.completed.includes(e)?{ok:!1,reason:"Quest already completed."}:i.quests.active.some(n=>n.id===e)?{ok:!1,reason:"Quest already active."}:(Od(i,e),{ok:!0,quest:t}):{ok:!1,reason:"Unknown quest."}}function sr(i){return i.quests.active.map(e=>{const t=or[e.id];if(!t)return null;const n=i.quests.progress[e.id]||{},s=t.objectives.map(r=>({...r,progress:Math.min(r.count,n[r.id]||0),complete:(n[r.id]||0)>=r.count}));return{...t,startedAt:e.startedAt,objectives:s,complete:s.every(r=>r.complete)}}).filter(Boolean)}function kx(i){return Fd.filter(e=>!i.quests.completed.includes(e.id)&&!i.quests.active.some(t=>t.id===e.id))}function ts(i,e){const t=[];for(const n of sr(i)){if(n.complete)continue;let s=!1;for(const r of n.objectives){if(r.complete||!Ox(r,e))continue;const a=i.quests.progress[n.id],o=a[r.id]||0;let l=o;r.type==="discover"?l=Math.max(o,e.count||0):r.type==="level"?l=Math.max(o,e.level||0):r.type==="train"?l=Math.min(r.count,o+(e.seconds||0)):l=Math.min(r.count,o+1),l!==o&&(a[r.id]=l,s=!0)}if(s){const r=sr(i).find(a=>a.id===n.id);t.push({quest:r,justCompleted:!!r?.complete})}}return t}function Ox(i,e){if(i.type!==e.type&&!(i.type==="capture"&&e.type==="capture"))return!1;switch(i.type){case"capture":return!(i.captureType&&!e.types?.includes(i.captureType));case"defeat":return!(i.biome&&e.biome!==i.biome);case"visit":return!!e.landmark&&e.landmark===i.landmark;case"train":return e.type==="train"&&(e.seconds||0)>0;case"level":return e.type==="level"&&(e.level||0)>=i.level;case"discover":return e.type==="discover";case"starter":return e.type==="starter";case"legendary":return e.type==="legendary";default:return!1}}function Bx(i,e){const t=sr(i).find(r=>r.id===e);if(!t)return{ok:!1,reason:"Quest is not active."};if(!t.complete)return{ok:!1,reason:"Quest objectives are not complete yet."};const n=or[e];Jr(i,n.rewards.shards||0,n.rewards.stardust||0);const s=[];for(const[r,a]of Object.entries(n.rewards.items||{}))da(i,r,a).ok&&s.push({itemId:r,amount:a});return i.quests.active=i.quests.active.filter(r=>r.id!==e),i.quests.completed.includes(e)||i.quests.completed.push(e),i.quests.claimed.includes(e)||i.quests.claimed.push(e),{ok:!0,quest:n,items:s}}function zx(i){return{active:sr(i),available:kx(i),completed:i.quests.completed.map(e=>or[e]).filter(Boolean)}}function fh(i){return i.quests.completed.includes("q_first_steps")?null:Od(i,"q_first_steps")}const Hx=3,Bd=480*60;function gs(i){return i.training?.slots||[]}function zd(i){return Math.max(1,Math.min(2,i.training?.unlocked||1))}function Gx(i,e,t=Date.now()){const n=Lt(i,e);return n?i.activeUid===e?{ok:!1,reason:"Set another creature as active before training this one."}:n.assignment==="battle"?{ok:!1,reason:"That creature is currently in battle."}:gs(i).some(s=>s.uid===e)?{ok:!1,reason:"That creature is already on a treadmill."}:gs(i).length>=zd(i)?{ok:!1,reason:"All treadmill slots are occupied. Remove a creature first."}:(n.assignment="training",i.training.slots.push({uid:e,startedAt:t,lastClaimAt:t,rate:Hx}),{ok:!0}):{ok:!1,reason:"That creature is not in your collection."}}function Vx(i,e,t=Date.now()){const n=gs(i).findIndex(a=>a.uid===e);if(n===-1)return{ok:!1,reason:"That creature is not on a treadmill."};const s=Hd(i,t,e);i.training.slots.splice(n,1);const r=Lt(i,e);return r&&(r.assignment=i.party.includes(e)?"party":"storage"),{ok:!0,collected:s}}function Wx(i,e,t=Date.now()){const n=gs(i).find(r=>r.uid===e);if(!n)return null;const s=Math.max(0,Math.min(Bd,(t-n.lastClaimAt)/1e3));return{xp:Math.floor(s*n.rate),elapsed:s,rate:n.rate,startedAt:n.startedAt}}function Hd(i,e=Date.now(),t=null){let n=0;const s=[],r=[];for(const a of gs(i)){if(t&&a.uid!==t)continue;const o=Lt(i,a.uid);if(!o){a.lastClaimAt=e;continue}const l=Math.max(0,Math.min(Bd,(e-a.lastClaimAt)/1e3)),c=Math.floor(l*a.rate);if(a.lastClaimAt=e,c>0){const h=Vs(i,o,c);n+=c,h.levels&&r.push({uid:o.uid,name:Nt(o),levels:h.levels}),s.push(...h.evolved.map(d=>({uid:o.uid,species:d}))),i.flags.totalTrainSeconds=(i.flags.totalTrainSeconds||0)+Math.min(l,60)}}return{xp:n,levels:r,evolutions:s}}function ph(i,e=Date.now()){return gs(i).map(t=>{const n=Lt(i,t.uid),s=Wx(i,t.uid,e),r=n?ha(n.level):1;return{slot:t,creature:n,preview:s,progress:n?Math.min(1,(n.xp+(s?.xp||0))/r):0,nextLevelXp:n?Math.max(1,r-n.xp):0}})}let $x=0;function mh(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function vn(i,e){const t=String(i||"#7fe7d4").replace("#",""),n=t.length===3?t.split("").map(c=>c+c).join(""):t.padEnd(6,"0").slice(0,6),s=Number.parseInt(n,16),r=c=>Math.max(0,Math.min(255,Math.round(c+255*e))),a=r(s>>16&255),o=r(s>>8&255),l=r(s&255);return`#${[a,o,l].map(c=>c.toString(16).padStart(2,"0")).join("")}`}function yn(i,e,t,n,s=1){return`
    <ellipse cx="${i}" cy="${e}" rx="${t*1.12}" ry="${t*1.24}" fill="#f8ffff" opacity="0.94"/>
    <ellipse cx="${i+t*.16*s}" cy="${e+t*.02}" rx="${t*.58}" ry="${t*.84}" fill="${n}"/>
    <circle cx="${i+t*.38*s}" cy="${e-t*.38}" r="${Math.max(1,t*.25)}" fill="#ffffff" opacity="0.92"/>`}function Xx(i,e,t,n){return`<path d="M${i-5*t} ${e} L${i+1*t} ${e-18*t} L${i+6*t} ${e+1*t} Z" fill="${vn(n,-.12)}" stroke="${vn(n,-.3)}" stroke-width="1"/>`}function qx(i,e,t){return`
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
    ${i.horns?Xx(84,85,.95,e):""}
    <path d="M76 101 C84 97 93 99 98 105" fill="none" stroke="${e}" stroke-width="2" opacity="0.8"/>
    <path d="M104 113 C122 108 140 109 151 116" fill="none" stroke="${e}" stroke-width="3" opacity="0.38"/>`}function Yx(i,e,t){return`
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
    <circle cx="100" cy="116" r="5" fill="${e}" opacity="0.75"/>`}function Zx(i,e,t){return`
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
    <path d="M84 110 C94 117 108 117 117 109" fill="none" stroke="${e}" stroke-width="3" opacity="0.7"/>`}function Jx(i,e,t){return`
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
    <path d="M143 83 C152 74 161 78 160 88 C153 92 147 89 143 83 Z" fill="${e}" opacity="0.7"/>`}function Kx(i,e,t){return`
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${t}" stroke-width="25" stroke-linecap="round" opacity="0.72"/>
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${i.primary}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="130" cy="66" r="27" fill="${i.primary}"/>
    <path d="M106 58 C94 40 108 25 130 31 C150 36 157 53 150 67 C143 55 131 51 117 60 Z" fill="${i.secondary}"/>
    <path d="M111 47 C98 38 96 23 110 20 C122 24 126 36 121 47 Z" fill="${e}"/>
    <path d="M145 48 C158 37 170 43 168 57 C160 63 151 59 145 48 Z" fill="${e}"/>
    ${yn(131,68,5.4,i.eye,1)}
    <path d="M129 86 C137 91 144 88 147 82" fill="none" stroke="${vn(i.eye,.3)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M118 107 C110 109 103 108 97 104 M111 116 C102 119 94 118 87 114" fill="none" stroke="${e}" stroke-width="3" opacity="0.55"/>
    <circle cx="152" cy="58" r="3" fill="${i.eye}" opacity="0.9"/>`}function Qx(i,e,t){return`
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
    <path d="M81 70 C84 57 91 51 100 52 C110 53 118 60 120 71" fill="none" stroke="${e}" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`}function jx(i,e,t){return`
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
    <path d="M74 90 L68 83 M126 90 L133 82" stroke="${e}" stroke-width="3" opacity="0.5"/>`}function e_(i,e,t){return`
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
    ${i.horns?`<path d="M81 58 L75 39 L90 50 Z" fill="${e}"/><path d="M119 58 L125 39 L110 50 Z" fill="${e}"/>`:""}`}function li(i,e={}){if(!i)return"";const t=i.visual||{},n={archetype:t.archetype||"quadruped",primary:t.primary||"#7fe7d4",secondary:t.secondary||"#2f7f82",accent:t.accent||"#ffd166",eye:t.eye||"#17351f",horns:!!t.horns,wings:!!t.wings,tail:!!t.tail,crown:!!t.crown,aura:!!t.aura},s=n.accent,r=n.secondary,a=`p${++$x}`;let o;switch(n.archetype){case"biped":o=Yx(n,s,r);break;case"flyer":case"wyvern":o=Zx(n,s,r);break;case"aquatic":o=Jx(n,s,r);break;case"serpent":o=Kx(n,s,r);break;case"blob":o=Qx(n,s,r);break;case"golem":o=jx(n,s,r);break;case"spirit":o=e_(n,s,r);break;default:o=qx(n,s,r)}const l=n.crown?`
    <g transform="translate(100 28)">
      <path d="M-16 8 L-20 -8 L-9 -2 L0 -14 L9 -2 L20 -8 L16 8 Z" fill="${s}" stroke="${vn(s,-.2)}" stroke-width="1.5"/>
      <circle cx="0" cy="-12" r="3" fill="#fff"/>
    </g>`:"",c=Array.from({length:5},(d,u)=>{const f=u/5*Math.PI*2+.6,g=100+Math.cos(f)*(58+u%2*7),_=100+Math.sin(f)*(54+u%2*4);return`<circle cx="${g.toFixed(1)}" cy="${_.toFixed(1)}" r="${(1.5+u%2).toFixed(1)}" fill="${s}" opacity="${.32+u*.04}"/>`}).join(""),h=e.className||"portrait-svg";return`
<svg class="${mh(h)}" viewBox="0 0 200 200" role="img" aria-label="${mh(i.name)} portrait" xmlns="http://www.w3.org/2000/svg">
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
</svg>`}const t_={burn:"Burn",chill:"Chill",shock:"Shock",snare:"Snare",stun:"Stun",weaken:"Weaken",regen:"Regen",buff_attack:"Atk+",buff_defence:"Def+",debuff_attack:"Atk-",debuff_defence:"Def-"},n_={Nature:"✦",Fire:"▲",Frost:"❉",Water:"●",Stone:"◆",Storm:"ϟ",Astral:"✧",Spirit:"◐"},Gd={common:"",uncommon:"",rare:"rare",epic:"epic",legendary:"legendary",ultra:"ultra"};function Re(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ks(i,e){return e?Math.max(0,Math.min(100,i/e*100)):0}function al(i=[]){return i.map(e=>`<span class="type-chip" style="--type-color:${an[e]?.color||"#9fb0c9"}">${n_[e]||"•"} ${Re(e)}</span>`).join("")}function Vd(i){const e=tr[i]||tr.common;return`<span class="rarity-chip ${Gd[i]||""}">${Re(e.label)}</span>`}function gh(i,e=!1){return i?[["HP",i.maxHp||i.health||0,240],["ATK",i.attack||0,160],["DEF",i.defence||0,160],["SPD",i.speed||0,160]].map(([n,s,r])=>`
    <div class="stat-row"><span>${n}</span><div class="stat-bar"><div style="width:${Math.min(100,s/r*100)}%"></div></div><strong>${s}</strong></div>
  `).join(""):""}function i_(i,e,t=""){const n=ks(i,e),s=n<=28?" low":"";return`<div class="hp-bar ${t}${s}"><div class="hp-fill" style="width:${n}%"></div><span>${Math.max(0,Math.round(i))} / ${Math.round(e)}</span></div>`}function vh(i){return i?i.category==="heal"?"✚":i.category==="xp"?"★":i.category==="lure"?"❋":i.category==="upgrade"?"▤":"◉":"?"}function ss(i){return Tt(i?.speciesId)}function s_(i){const e=ss(i);return e?`<div class="cc-badges">${al(e.types)}${Vd(e.rarity)}</div>`:""}function r_(i){return`<div class="quest-objective-line ${i.complete?"done":""}">
    <span class="qmark">${i.complete?"✓":"○"}</span>
    <span>${Re(i.label)}</span>
    <span class="qcount">${Math.min(i.progress,i.count)} / ${i.count}</span>
  </div>`}class a_{constructor(e,t={}){this.profile=e,this.callbacks=t,this.activeScreen=null,this.selectedDexId=null,this.dexStatus="all",this.dexType="all",this.questTab="active",this.inventoryFilter="all",this.selectedStarter=null,this.battleId=null,this.moveButtons=[],this.lastMoveSignature="",this.toastTimer=0,this.lastMinimapAt=0,this.lastTrainingAt=0,this.legendaryStatus=null,this.pendingConfirm=null,this.root=document.getElementById("modal-root"),this.title=document.getElementById("title-screen"),this.loading=document.getElementById("loading-screen"),this.enterButton=document.getElementById("enter-button"),this.tracker=document.getElementById("quest-tracker"),this.currency=document.getElementById("currency-bar"),this.partyDock=document.getElementById("party-dock"),this.minimap=document.getElementById("minimap"),this.minimapBiome=document.getElementById("minimap-biome"),this.location=document.getElementById("location-label"),this.prompt=document.getElementById("interaction-prompt"),this.promptText=document.getElementById("interaction-text"),this.hint=document.getElementById("hint-line"),this.toastStack=document.getElementById("toast-stack"),this.legendaryBanner=document.getElementById("legendary-banner"),this.legendaryTitle=document.getElementById("legendary-title"),this.legendaryDetail=document.getElementById("legendary-detail"),this.legendaryTimer=document.getElementById("legendary-timer"),this.battleHud=document.getElementById("battle-hud"),this.battleElements={enemyName:document.getElementById("enemy-name"),enemyLevel:document.getElementById("enemy-level"),enemyRarity:document.getElementById("enemy-rarity"),enemyHpFill:document.getElementById("enemy-hp-fill"),enemyHpText:document.getElementById("enemy-hp-text"),enemyHpBar:document.getElementById("enemy-hp-fill")?.parentElement,enemyStatuses:document.getElementById("enemy-statuses"),playerName:document.getElementById("battle-player-name"),playerLevel:document.getElementById("battle-player-level"),playerHpFill:document.getElementById("player-hp-fill"),playerHpText:document.getElementById("player-hp-text"),playerHpBar:document.getElementById("player-hp-fill")?.parentElement,playerStatus:document.getElementById("battle-active-status"),shield:document.getElementById("player-shield"),roundLabel:document.getElementById("battle-round-label"),log:document.getElementById("battle-log-line"),moveBar:document.getElementById("move-bar"),dodge:document.getElementById("battle-dodge"),dodgeCd:document.getElementById("dodge-cd"),capture:document.getElementById("battle-capture"),captureChance:document.getElementById("capture-chance"),potion:document.getElementById("battle-potion"),pot:document.getElementById("battle-pot"),flee:document.getElementById("battle-flee")},this.bindStatic(),this.applySettings(),document.body.classList.add("title-active"),this.refresh(),this.drawMinimap({player:{x:0,z:10},wilds:[],landmarks:[]})}setProfile(e){this.profile=e,this.applySettings(),this.refresh(),this.activeScreen&&this.activeScreen!=="starter"&&this.renderScreen(this.activeScreen)}bindStatic(){document.querySelectorAll("[data-screen]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.screen;this.callbacks.onScreenRequest?this.callbacks.onScreenRequest(t):this.openScreen(t)})}),this.enterButton?.addEventListener("click",()=>{this.enterButton.disabled||this.callbacks.onEnter?.()}),document.getElementById("how-to-button")?.addEventListener("click",()=>this.openHowTo()),this.partyDock.addEventListener("click",e=>{const t=e.target.closest(".party-slot");t&&(t.classList.contains("empty")||(this.callbacks.onScreenRequest?this.callbacks.onScreenRequest("party"):this.openScreen("party")))}),this.root.addEventListener("click",e=>{e.target.closest("[data-close]")&&this.closeModal(),e.target===this.root&&this.activeScreen&&this.activeScreen!=="starter"&&this.closeModal()}),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.activeScreen&&this.activeScreen!=="starter"&&(e.preventDefault(),this.closeModal())}),this.battleElements.moveBar.addEventListener("click",e=>{const t=e.target.closest("[data-move-index]");t&&this.callbacks.onBattleMove?.(Number(t.dataset.moveIndex))}),this.battleElements.dodge.addEventListener("click",()=>this.callbacks.onBattleDodge?.()),this.battleElements.capture.addEventListener("click",()=>this.callbacks.onBattleCapture?.()),this.battleElements.potion.addEventListener("click",()=>this.callbacks.onBattlePotion?.()),this.battleElements.flee.addEventListener("click",()=>this.callbacks.onBattleFlee?.())}applySettings(){const e=this.profile?.settings||{};document.body.classList.toggle("reduce-motion",!!e.reduceMotion),document.body.classList.toggle("high-contrast",!!e.highContrast),document.body.classList.toggle("touch",matchMedia("(pointer: coarse)").matches)}refresh(){this.renderCurrency(),this.renderTracker(),this.renderPartyDock(),this.renderLegendary()}renderCurrency(){const e=this.profile.currency||{};this.currency.innerHTML=`
      <div class="currency-pill"><span class="coin"></span><span>${pi(e.shards)}</span></div>
      <div class="currency-pill stardust"><span class="coin"></span><span>${pi(e.stardust)}</span></div>
    `}renderTracker(){const e=sr(this.profile);if(!e.length){this.tracker.innerHTML=`
        <div class="eyebrow">ACTIVE BOUNTY</div>
        <h3>No bounty pinned</h3>
        <p>Visit the quest board in Hearthlight Haven, or talk to Guide Wren for a lead.</p>
      `;return}const t=e.find(r=>!r.complete)||e[0],n=t.objectives.find(r=>!r.complete)||t.objectives[0],s=n.complete;this.tracker.innerHTML=`
      <div class="spread"><span class="eyebrow">ACTIVE BOUNTY</span><span class="quest-progress">${t.objectives.filter(r=>r.complete).length}/${t.objectives.length}</span></div>
      <h3>${Re(t.name)}</h3>
      <p>${Re(t.giver)} · ${Re(vt[t.objectives[0]?.biome]?.short||"Haven")}</p>
      <div class="quest-objective ${s?"done":""}">
        <span class="dot"></span><span>${Re(n.label)}</span>
        <span class="quest-progress">${n.progress} / ${n.count}</span>
      </div>
    `}renderPartyDock(){const e=this.profile.activeUid,t=new Set((this.profile.training?.slots||[]).map(s=>s.uid)),n=[];for(let s=0;s<Pi;s++){const r=this.profile.party[s],a=r?Lt(this.profile,r):null;if(!a){n.push(`<div class="party-slot empty">${s===this.profile.party.length?"+ Slot":"Empty"}</div>`);continue}const o=ss(a),l=ks(a.hp,a.stats.maxHp);n.push(`
        <div class="party-slot ${r===e?"active":""} ${t.has(r)?"training":""}" title="${Re(Nt(a))} · Lv. ${a.level}">
          <div class="slot-hp"><div style="width:${l}%"></div></div>
          <span class="active-dot"></span>
          <div class="portrait">${li(o)}</div>
          <div class="slot-label"><span>${Re(Nt(a))}</span><span class="slot-level">${a.level}</span></div>
        </div>
      `)}this.partyDock.innerHTML=n.join("")}renderLegendary(){const e=this.legendaryStatus;e&&(this.legendaryBanner.classList.toggle("hidden",!1),this.legendaryBanner.dataset.state=e.state,this.legendaryBanner.classList.toggle("warning",e.state==="warning"),this.legendaryTitle.textContent=e.label,this.legendaryDetail.textContent=e.detail,this.legendaryTimer.textContent=Is(e.nextIn||0))}setLegendary(e){this.legendaryStatus=e,this.renderLegendary()}setLocation(e){const t=vt[e]||vt.hub;this.location.textContent=t.name,this.minimapBiome.textContent=t.short||t.name,this.legendaryDetail?.setAttribute("data-biome",t.short)}setLoading(e,t){const n=document.getElementById("loading-fill"),s=document.getElementById("loading-text");n&&(n.style.width=`${Math.max(4,Math.min(100,e))}%`),s&&t&&(s.textContent=t)}hideLoading(){this.loading?.classList.add("leaving"),setTimeout(()=>this.loading?.classList.add("hidden"),600)}revealTitle(e=!0){this.hideLoading(),this.enterButton.disabled=!e,this.enterButton.innerHTML=e?"<span>Enter the Wilds</span>":'<span class="button-spinner"></span><span>Preparing the wilds…</span>'}enterWorld(){document.body.classList.remove("title-active"),this.title?.classList.add("leaving"),setTimeout(()=>this.title?.classList.add("hidden"),700)}showTitle(){document.body.classList.add("title-active"),this.title?.classList.remove("hidden","leaving"),this.hideLoading(),this.enterButton.disabled=!1,this.enterButton.innerHTML="<span>Enter the Wilds</span>"}setHint(e){this.hint&&(this.hint.textContent=e||"")}setInteraction(e){if(this.prompt){if(!e){this.prompt.classList.add("hidden");return}this.promptText.textContent=e,this.prompt.classList.remove("hidden")}}setBattleVisible(e){this.battleHud.classList.toggle("hidden",!e),document.body.classList.toggle("battle-active",e);const t=document.getElementById("mobile-controls");t&&t.classList.toggle("hidden",!matchMedia("(pointer: coarse)").matches);const n=[document.querySelector(".hud-left"),this.partyDock,document.getElementById("minimap-panel"),document.querySelector(".hud-right"),this.prompt,this.hint];for(const s of n)s?.classList.toggle("hidden",e);e||(this.moveButtons=[],this.lastMoveSignature="")}showToast(e,t="",n=""){const s=document.createElement("div");for(s.className=`toast ${t}`,s.innerHTML=`<span class="toast-icon">${n||(t==="success"?"✓":t==="error"?"!":t==="gold"?"✦":"•")}</span><span>${Re(e)}</span>`,this.toastStack.append(s);this.toastStack.children.length>4;)this.toastStack.firstElementChild.remove();setTimeout(()=>{s.classList.add("leaving"),setTimeout(()=>s.remove(),280)},3400)}refreshTrainingLive(e=Date.now()){if(this.activeScreen!=="training"||e-this.lastTrainingAt<1e3)return;this.lastTrainingAt=e;const t=ph(this.profile,e);for(const{creature:n,preview:s,progress:r}of t){if(!n||!s)continue;const a=this.root.querySelector(`[data-train-card="${n.uid}"]`);if(!a)continue;const o=a.querySelector("[data-train-session]"),l=a.querySelector("[data-train-ready]"),c=a.querySelector("[data-train-bar]"),h=a.querySelector('[data-train-action="collect"]');o&&(o.textContent=`+${s.rate} XP/sec · ${Is(s.elapsed)} this session`),l&&(l.textContent=`${s.xp} XP ready`),c&&(c.style.width=`${Math.round(r*100)}%`),h&&(h.textContent=`Collect ${s.xp} XP`)}}updateBattle(e){if(!e?.battle)return;const t=e.battle,n=this.battleElements,s=t.enemy,r=t.player,a=ks(s.hp,s.maxHp),o=ks(r.hp,r.maxHp);this.setBattleVisible(!0),n.enemyName.textContent=s.name,n.enemyLevel.textContent=`Lv. ${s.level}`,n.enemyRarity.textContent=tr[s.species.rarity]?.label||"Wild",n.enemyRarity.className=`rarity-chip ${Gd[s.species.rarity]||""}`,n.enemyHpFill.style.width=`${a}%`,n.enemyHpText.textContent=`${Math.max(0,Math.round(s.hp))} / ${Math.round(s.maxHp)}`,n.enemyHpBar.classList.toggle("low",a<=28),n.playerName.textContent=r.name,n.playerLevel.textContent=`Lv. ${r.level}`,n.playerHpFill.style.width=`${o}%`,n.playerHpText.textContent=`${Math.max(0,Math.round(r.hp))} / ${Math.round(r.maxHp)}`,n.playerHpBar.classList.toggle("low",o<=28),n.enemyStatuses.innerHTML=this.statusChips(s),n.playerStatus.innerHTML=this.statusChips(r),n.shield.classList.toggle("hidden",!(r.shield>0)),n.shield.textContent=`Shield ${Math.round(r.shield)}`;const l=e.inRange||0;n.roundLabel.textContent=t.over?t.result==="victory"?"Creature calmed":t.result==="captured"?"Capture complete":t.result==="defeat"?"Retreat required":"Encounter ended":`Distance ${l.toFixed(1)}m · ${t.legendary?"Legendary event":"Real-time encounter"}`,n.log.textContent=t.log[t.log.length-1]||"Stay mobile. Dodge telegraphed attacks.",this.updateMoveBar(t,e);const c=e.dodgeRemaining<=0;n.dodge.disabled=!c||t.over,n.dodgeCd.textContent=c?"Ready":`${(e.dodgeRemaining/1e3).toFixed(1)}s`,n.capture.disabled=t.over,n.captureChance.textContent=`${Math.round((e.captureChance||0)*100)}%`,n.potion.disabled=t.over,n.pot.textContent=String(this.profile.inventory.potion||0),n.flee.disabled=t.over}statusChips(e){return Object.keys(e.statuses||{}).filter(t=>!t.startsWith("debuff_")).map(t=>`<span class="status-chip ${t}">${t_[t]||t}</span>`).join("")}updateMoveBar(e,t){const n=e.player.moves.map(s=>s.id).join("-");n!==this.lastMoveSignature&&(this.lastMoveSignature=n,this.battleElements.moveBar.innerHTML=e.player.moves.map((s,r)=>{const a=fi(s.id);return`<button class="move-button" data-move-index="${r}" style="--type-color:${an[a.type]?.color||"#7fe7d4"}">
          <span class="move-type-dot"></span><span class="move-key">${r+1}</span>
          <strong>${Re(a.name)}</strong><small>${Re(a.type)} · ${a.power>0?`${a.power} pow`:"utility"}</small>
          <span class="cooldown-sweep" style="width:0%"></span><span class="cd-text"></span>
        </button>`}).join(""),this.moveButtons=[...this.battleElements.moveBar.querySelectorAll(".move-button")]),this.moveButtons.forEach((s,r)=>{const a=t.cooldowns[r]||0,o=t.maxCooldowns[r]||1,l=s.querySelector(".cooldown-sweep"),c=s.querySelector(".cd-text");s.disabled=e.over||a>0,s.classList.toggle("cooling",a>0),l&&(l.style.width=a>0?`${Math.min(100,a/o*100)}%`:"0%"),c&&(c.textContent=a>0?`${(a/1e3).toFixed(1)}s`:"")})}openScreen(e){["dex","party","training","quests","inventory","shop","settings"].includes(e)&&(this.activeScreen=e,this.root.classList.remove("hidden"),this.renderScreen(e))}closeModal(){this.activeScreen!=="starter"&&(this.activeScreen=null,this.root.classList.add("hidden"),this.root.innerHTML="")}renderScreen(e){const t={dex:()=>this.renderDex(),party:()=>this.renderParty(),training:()=>this.renderTraining(),quests:()=>this.renderQuests(),inventory:()=>this.renderInventory(),shop:()=>this.renderShop(),settings:()=>this.renderSettings()};this.root.classList.remove("hidden"),this.root.innerHTML=t[e]?.()||"",this.bindScreen(e)}screenShell(e,t,n,s,r=""){return`<div class="modal-card ${e==="AstraDex"?"wide":""}">
      <div class="modal-header">
        <div class="modal-title"><span class="eyebrow">${Re(t)}</span><h2>${Re(e)}</h2><p>${n}</p></div>
        <button class="modal-close" data-close aria-label="Close">×</button>
      </div>
      <div class="modal-body">${s}</div>
      ${r?`<div class="modal-footer">${r}</div>`:""}
    </div>`}renderDex(){const e=new Set(this.profile.dex.seen),t=new Set(this.profile.dex.caught),n=Ri.filter(h=>!(this.dexStatus==="caught"&&!t.has(h.id)||this.dexStatus==="seen"&&!e.has(h.id)||this.dexStatus==="missing"&&(e.has(h.id)||t.has(h.id))||this.dexType!=="all"&&!h.types.includes(this.dexType)));(!this.selectedDexId||!n.some(h=>h.id===this.selectedDexId))&&(this.selectedDexId=n[0]?.id||Ri[0].id);const s=n.map(h=>{const d=e.has(h.id);return`<div class="dex-card ${d?"":"undiscovered"} ${h.id===this.selectedDexId?"selected":""}" data-dex-id="${h.id}">
        <span class="dex-id">${h.id}</span>
        ${t.has(h.id)?'<span class="caught-check">✓</span>':""}
        <div class="portrait">${li(h)}</div>
        <div class="dex-meta"><strong>${d?Re(h.name):"???"}</strong><span>${d?Re(h.types.join(" / ")):"Unrecorded"}</span></div>
      </div>`}).join(""),r=Tt(this.selectedDexId),a=r&&e.has(r.id),o=r&&t.has(r.id),l=a?this.dexDetail(r,o,e,t):`
      <div class="detail-portrait" style="filter:grayscale(1) brightness(.32)">${r?li(r):""}</div>
      <h3>???</h3><p class="lore">This species has not been recorded yet. Find it in the wild, or hear about it from a traveller.</p>`,c=`
      <div class="toolbar">
        <div class="tabs" style="margin:0">
          ${["all","seen","caught","missing"].map(h=>`<button class="tab ${this.dexStatus===h?"active":""}" data-dex-status="${h}">${h==="all"?"All 150":h[0].toUpperCase()+h.slice(1)}</button>`).join("")}
        </div>
        <span class="spacer"></span>
        <span class="pill gold">${t.size} caught</span><span class="pill">${e.size} seen</span>
        <select class="field" data-dex-type>
          <option value="all">All types</option>
          ${Object.keys(an).filter(h=>h!=="None").map(h=>`<option value="${h}" ${this.dexType===h?"selected":""}>${h}</option>`).join("")}
        </select>
      </div>
      <div class="dex-layout">
        <div>
          <div class="dex-grid">${s||'<div class="empty-state">No species match this filter.</div>'}</div>
        </div>
        <div class="dex-detail">${l}</div>
      </div>`;return this.screenShell("AstraDex","ARCHIVE OF THE SCAR","Every confirmed species is recorded here. Seen entries reveal field notes; captured entries unlock full stat and move data.",c)}dexDetail(e,t,n,s){const r=e.learnset.slice(0,t?6:4);return`
      <div class="detail-portrait">${li(e)}</div>
      <h3>${Re(e.name)}</h3>
      <div class="spread"><div class="type-row">${al(e.types)} ${Vd(e.rarity)}</div><span class="small muted">${e.id}</span></div>
      <p class="lore">${Re(e.lore)}</p>
      <div class="detail-stats">${gh(e.stats)}</div>
      <div class="detail-section"><h4>Field notes</h4><p>${Re(e.habitat)}<br>${Re(e.behavior)}</p></div>
      <div class="detail-section"><h4>Ability</h4><p><strong style="color:var(--gold-soft)">${Re(e.ability.name)}</strong> — ${Re(e.ability.description||"A signature adaptation recorded by the archive.")}</p></div>
      <div class="detail-section"><h4>${t?"Learned moves":"Field moves"}</h4>
        <div class="move-list">${r.map(a=>{const o=fi(a.moveId);return`<div class="move-row"><span>${Re(o.name)}</span><small>${Re(o.type)} · Lv. ${a.level}</small></div>`}).join("")}</div>
      </div>
      ${e.evolution?`<div class="detail-section"><h4>Evolution</h4><p>Evolves into <strong style="color:var(--gold-soft)">${Re(Tt(e.evolution.to)?.name||"???")}</strong> at level ${e.evolution.level}.</p></div>`:""}
    `}renderParty(){const e=xx(this.profile),t=_x(this.profile),n=Cx(this.profile),s=a=>{const o=ss(a);if(!o)return"";const l=a.uid===this.profile.activeUid,c=this.profile.party.includes(a.uid),h=a.assignment==="training",d=ha(a.level),u=ks(a.hp,a.stats.maxHp);return`<div class="creature-card ${l?"active":""}">
        <div class="cc-top">
          <div class="cc-portrait">${li(o)}</div>
          <div class="cc-name">
            <strong>${Re(Nt(a))}</strong>
            <span>${Re(o.name)} · Lv. ${a.level} · ${Re(a.nature)}</span>
            ${s_(a)}
          </div>
        </div>
        <div class="cc-hp">${i_(a.hp,a.stats.maxHp)}</div>
        <div class="cc-meta"><span>XP ${a.xp} / ${d}</span><span>Power ${Rx(a)}</span>${h?'<span class="pill teal" style="margin-left:auto">Training</span>':""}${l?'<span class="pill gold" style="margin-left:auto">Active</span>':""}</div>
        <div class="cc-actions">
          ${c&&!l&&!h?`<button class="small-button" data-party-action="active" data-uid="${a.uid}">Set active</button>`:""}
          ${!c&&!h?`<button class="small-button" data-party-action="toParty" data-uid="${a.uid}">To party</button>`:""}
          ${c&&!l?`<button class="small-button" data-party-action="up" data-uid="${a.uid}">↑</button><button class="small-button" data-party-action="down" data-uid="${a.uid}">↓</button>`:""}
          ${c&&!l&&!h?`<button class="small-button training-tag" data-party-action="train" data-uid="${a.uid}">Train</button>`:""}
          ${c&&!l&&!h?`<button class="small-button" data-party-action="toStorage" data-uid="${a.uid}">Storage</button>`:""}
          ${h?`<button class="small-button training-tag" data-party-action="stopTrain" data-uid="${a.uid}">Stop training</button>`:""}
          ${l?"":`<button class="small-button" data-party-action="release" data-uid="${a.uid}" style="color:var(--danger)">Release</button>`}
        </div>
        <div class="cc-meta" style="padding-top:0"><span style="color:${u<=28?"var(--danger)":"var(--muted)"}">${Math.round(u)}% HP</span><span>${Re(o.role)}</span></div>
      </div>`},r=`
      <div class="notice">Your active creature leads encounters. Party members gain experience from battle; storage creatures wait safely at Haven. Training continues while you explore.</div>
      <div class="subhead"><h3>Party · ${e.length} / ${Pi}</h3><span>Click a card action to manage</span></div>
      <div class="party-grid">${e.map(s).join("")}</div>
      <div class="subhead"><h3>Storage · ${n.used} / ${n.limit}</h3><span>${t.length} waiting</span></div>
      <div class="party-grid">${t.length?t.map(s).join(""):'<div class="empty-state">No creatures in storage yet. Captures beyond a full party are sent here automatically.</div>'}</div>
    `;return this.screenShell("Party & Storage","YOUR COMPANIONS","Set a lead, reorder your party, move creatures to storage, or start a training session. Your active creature cannot train.",r)}renderTraining(){const e=ph(this.profile),t=zd(this.profile),n=this.profile.party.map(l=>Lt(this.profile,l)).filter(l=>l&&l.uid!==this.profile.activeUid&&l.assignment!=="training"),s=e.map(({creature:l,preview:c,progress:h,nextLevelXp:d})=>{const u=ss(l);return`<div class="treadmill-card" data-train-card="${l.uid}">
        <div class="tm-portrait">${li(u)}</div>
        <div class="tm-info">
          <strong>${Re(Nt(l))} <span class="small muted">Lv. ${l.level}</span></strong>
          <span data-train-session>+${c?.rate||3} XP/sec · ${Is(c?.elapsed||0)} this session</span>
          <div class="tm-progress"><div data-train-bar style="width:${Math.round(h*100)}%"></div></div>
          <span class="small muted"><span data-train-ready>${c?.xp||0} XP ready</span> · ${d} XP to next level</span>
        </div>
        <div class="tm-actions">
          <button class="small-button" data-train-action="collect" data-uid="${l.uid}">Collect ${c?.xp||0} XP</button>
          <button class="small-button" data-train-action="remove" data-uid="${l.uid}">Remove</button>
        </div>
      </div>`}).join(""),r=[];for(let l=e.length;l<t;l++){const c=n.map(h=>`<option value="${h.uid}">${Re(Nt(h))} · Lv. ${h.level}</option>`).join("");r.push(`<div class="treadmill-card empty">
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
      <div class="spread"><div><strong>Total training time</strong><br><span class="small muted">${Is(this.profile.flags.totalTrainSeconds||0)} recorded</span></div><div class="pill violet">${n.length} eligible</div></div>
    `;return this.screenShell("Training Yard","PATIENCE IS POWER","Leave creatures on a treadmill while you explore. XP keeps accruing offline, up to eight hours per claim.",o)}renderQuests(){const e=zx(this.profile),n=(this.questTab==="active"?e.active:this.questTab==="available"?e.available:e.completed).map(r=>this.questTab==="available"?`<div class="quest-card">
          <span class="quest-giver">${Re(r.giver)}</span><h3>${Re(r.name)}</h3><p>${Re(r.description)}</p>
          <div class="reward-row">${r.rewards.shards?`<span class="reward-pill gold">${r.rewards.shards} Shards</span>`:""}${r.rewards.stardust?`<span class="reward-pill violet">${r.rewards.stardust} Stardust</span>`:""}${Object.entries(r.rewards.items||{}).map(([a,o])=>`<span class="reward-pill">${o}× ${Re(gn[a]?.name||a)}</span>`).join("")}</div>
          <div class="quest-actions"><button class="small-button" data-quest-action="start" data-quest-id="${r.id}">Accept bounty</button></div>
        </div>`:this.questTab==="completed"?`<div class="quest-card complete"><span class="quest-giver">${Re(r.giver)}</span><h3>${Re(r.name)}</h3><p>${Re(r.description)}</p><div class="reward-row"><span class="reward-pill gold">Completed</span></div></div>`:`<div class="quest-card ${r.complete?"complete":""}">
        <span class="quest-giver">${Re(r.giver)}</span><h3>${Re(r.name)}</h3><p>${Re(r.description)}</p>
        <div class="quest-objectives">${r.objectives.map(r_).join("")}</div>
        <div class="reward-row">${r.rewards.shards?`<span class="reward-pill gold">${r.rewards.shards} Shards</span>`:""}${r.rewards.stardust?`<span class="reward-pill violet">${r.rewards.stardust} Stardust</span>`:""}${Object.entries(r.rewards.items||{}).map(([a,o])=>`<span class="reward-pill">${o}× ${Re(gn[a]?.name||a)}</span>`).join("")}</div>
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
      <div class="shop-grid" style="margin-top:14px">${Ux(this.profile).map(({item:s,owned:r,affordable:a,lockedReason:o})=>{const l=s.id==="training_slot";return`<div class="shop-card">
        <div class="shop-icon">${vh(s)}</div>
        <h3>${Re(s.name)}</h3>
        <p>${Re(s.description)}</p>
        <div class="spread"><span class="price">${pi(s.price)} Shards${s.stardust?` + ${s.stardust} Stardust`:""}</span>
        <button class="small-button" data-shop-buy="${s.id}" ${r&&l?"disabled":""}>${r&&l?"Unlocked":"Buy"}</button></div>
        <span class="owned">${l?r?"Permanent upgrade owned":"One-time unlock":`Owned: ${r}`}${!a&&!(r&&l)?" · Not enough currency":""}${o?` · ${Re(o)}`:""}</span>
      </div>`}).join("")}</div>
      <div class="divider"></div>
      <div class="spread"><span class="small muted">Haggling is not supported. The shopkeeper has heard every offer.</span><span class="pill gold">${pi(this.profile.currency.shards)} Shards</span></div>
    `;return this.screenShell("Ember & Elm","FIELD SUPPLIES","Discs, salves, treats, lures, and permanent conveniences. Purchases are saved immediately.",n)}renderInventory(){const e=un(this.profile),n=["disc_basic","disc_fine","potion","potion_great","treat","lure"].map(r=>{const a=gn[r],o=this.profile.inventory[r]||0,l=["potion","potion_great","treat","lure"].includes(r);return`<div class="inv-card">
        <div class="inv-icon" style="color:${a.color}">${vh(a)}</div>
        <div style="min-width:0"><strong>${Re(a.name)}</strong><span>${Re(a.description)}</span></div>
        <span class="inv-count">${o}</span>
        ${l?`<button class="small-button" data-use-item="${r}" ${o<=0?"disabled":""}>Use</button>`:""}
      </div>`}).join(""),s=`
      <div class="notice">${e?`Using a salve or treat targets your active creature: <strong style="color:var(--gold-soft)">${Re(Nt(e))}</strong> (Lv. ${e.level}, ${Math.round(e.hp)}/${e.stats.maxHp} HP).`:"Choose a starter to use field items."}</div>
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
          <div class="setting-row"><span>Play time</span><strong>${Is((t.playSeconds||0)+Math.max(0,(Date.now()-(this.profile.playStartedAt||Date.now()))/1e3))}</strong></div>
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
    </div>`,this.bindScreen("howto")}openStarterSelection(e){this.activeScreen="starter",this.selectedStarter=null,this.starterCallback=e;const t=sl.map(n=>Tt(n)).filter(Boolean);this.root.classList.remove("hidden"),this.root.innerHTML=`<div class="modal-card starter-card">
      <div class="starter-body">
        <div class="starter-intro">
          <span class="eyebrow" style="color:var(--gold)">FIELD RESEARCH BEGINS</span>
          <h2>Choose your first companion</h2>
          <p>Guide Wren has three young creatures ready for a field assignment. Each one grows into a different role. You can find the others later, but this choice shapes your first hours.</p>
        </div>
        <div class="starter-grid">
          ${t.map(n=>`
            <div class="starter-card-item" data-starter-id="${n.id}" style="--type-color:${an[n.types[0]]?.color||"#7fe7d4"}">
              <div class="starter-halo"></div>
              <div class="starter-portrait">${li(n)}</div>
              <h3>${Re(n.name)}</h3>
              <div class="starter-role">${Re(n.role)} · ${Re(n.rarity)}</div>
              <div class="type-row">${al(n.types)}</div>
              <p class="starter-desc">${Re(n.lore)}</p>
              <div class="starter-stats">${gh(n.stats,!0)}</div>
              <div class="starter-ability"><strong>${Re(n.ability.name)}</strong>${Re(n.ability.description||"A signature adaptation.")}</div>
            </div>`).join("")}
        </div>
        <div class="starter-actions">
          <button class="primary-button large" data-confirm-starter disabled>Begin expedition</button>
          <button class="ghost-button" data-how-to>Field manual</button>
        </div>
        <p class="starter-warning">Your starter is saved immediately. All 150 species are original to Astra Creatures.</p>
      </div>
    </div>`,this.root.querySelectorAll("[data-starter-id]").forEach(n=>{n.addEventListener("click",()=>{this.selectedStarter=n.dataset.starterId,this.root.querySelectorAll("[data-starter-id]").forEach(r=>r.classList.toggle("selected",r===n));const s=this.root.querySelector("[data-confirm-starter]");s&&(s.disabled=!1)})}),this.root.querySelector("[data-confirm-starter]")?.addEventListener("click",()=>{this.selectedStarter&&this.starterCallback?.(this.selectedStarter)}),this.root.querySelector("[data-how-to]")?.addEventListener("click",()=>this.openHowTo())}bindScreen(e){this.root.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>this.closeModal())),e==="dex"&&(this.root.querySelectorAll("[data-dex-id]").forEach(t=>t.addEventListener("click",()=>{this.selectedDexId=t.dataset.dexId,this.renderScreen("dex")})),this.root.querySelectorAll("[data-dex-status]").forEach(t=>t.addEventListener("click",()=>{this.dexStatus=t.dataset.dexStatus,this.renderScreen("dex")})),this.root.querySelector("[data-dex-type]")?.addEventListener("change",t=>{this.dexType=t.target.value,this.renderScreen("dex")})),e==="party"&&this.root.querySelectorAll("[data-party-action]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.uid,s=t.dataset.partyAction,r=this.callbacks;if(s==="active"&&r.onSetActive?.(n),s==="toParty"&&r.onMoveToParty?.(n),s==="toStorage"&&r.onMoveToStorage?.(n),s==="train"&&r.onAssignTraining?.(n),s==="stopTrain"&&r.onRemoveTraining?.(n),s==="up"&&r.onSwapParty?.(n,-1),s==="down"&&r.onSwapParty?.(n,1),s==="release"){const a=Lt(this.profile,n);this.confirm({title:`Release ${Nt(a)}?`,message:"This removes the creature and its training progress from your expedition permanently.",confirmLabel:"Release creature",danger:!0}).then(o=>{o&&r.onRelease?.(n)})}})),e==="training"&&this.root.querySelectorAll("[data-train-action]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.trainAction,s=t.dataset.uid,r=this.callbacks;if(n==="assign"){const a=this.root.querySelector(`[data-training-select="${t.dataset.slot}"]`);if(!a?.value)return this.showToast("Choose a creature first.","error");r.onAssignTraining?.(a.value)}n==="collect"&&r.onCollectTraining?.(s),n==="collectAll"&&r.onCollectTraining?.(),n==="remove"&&r.onRemoveTraining?.(s),n==="unlock"&&r.onUnlockTraining?.()})),e==="quests"&&(this.root.querySelectorAll("[data-quest-tab]").forEach(t=>t.addEventListener("click",()=>{this.questTab=t.dataset.questTab,this.renderScreen("quests")})),this.root.querySelectorAll("[data-quest-action]").forEach(t=>t.addEventListener("click",()=>{t.dataset.questAction==="start"&&this.callbacks.onStartQuest?.(t.dataset.questId),t.dataset.questAction==="claim"&&this.callbacks.onClaimQuest?.(t.dataset.questId)}))),e==="inventory"&&(this.root.querySelectorAll("[data-use-item]").forEach(t=>t.addEventListener("click",()=>{this.callbacks.onUseItem?.(t.dataset.useItem)})),this.root.querySelector("[data-screen-open]")?.addEventListener("click",()=>this.openScreen(this.root.querySelector("[data-screen-open]").dataset.screenOpen))),e==="shop"&&this.root.querySelectorAll("[data-shop-buy]").forEach(t=>t.addEventListener("click",()=>{this.callbacks.onBuyItem?.(t.dataset.shopBuy)})),e==="settings"&&(this.root.querySelectorAll("[data-setting]").forEach(t=>{t.addEventListener("input",()=>{const n=t.dataset.setting;this.profile.settings[n]=Number(t.value),this.callbacks.onSettingChange?.(n,Number(t.value))})}),this.root.querySelectorAll("[data-setting-select]").forEach(t=>{t.addEventListener("change",()=>{const n=t.dataset.settingSelect;this.profile.settings[n]=t.value,this.callbacks.onSettingChange?.(n,t.value)})}),this.root.querySelectorAll("[data-toggle]").forEach(t=>t.addEventListener("click",()=>{const n=t.dataset.toggle,s=!this.profile.settings[n];this.profile.settings[n]=s,t.classList.toggle("on",s),this.applySettings(),this.callbacks.onSettingChange?.(n,s),this.renderScreen("settings")})),this.root.querySelector("[data-reset-save]")?.addEventListener("click",()=>{this.confirm({title:"Reset the expedition?",message:"All creatures, progress, inventory, bounties, and legendary history will be erased. This cannot be undone.",confirmLabel:"Reset everything",danger:!0}).then(t=>{t&&this.callbacks.onResetSave?.()})}))}drawMinimap(e){const t=performance.now();if(t-this.lastMinimapAt<130)return;this.lastMinimapAt=t;const n=this.minimap,s=n?.getContext("2d");if(!s)return;const r=n.width,a=n.height,o=r/2,l=a/2,c=r/280;s.clearRect(0,0,r,a),s.fillStyle="#0a1120",s.fillRect(0,0,r,a);const h=(u,f)=>({x:o+u*c,y:l+f*c});for(const u of Ci){const f=vt[u],g=h(f.center[0],f.center[1]),_=f.radius*c,m=s.createRadialGradient(g.x,g.y,2,g.x,g.y,_);m.addColorStop(0,`${f.color}3f`),m.addColorStop(1,`${f.color}05`),s.fillStyle=m,s.beginPath(),s.arc(g.x,g.y,_,0,Math.PI*2),s.fill(),s.strokeStyle=`${f.color}40`,s.lineWidth=1,s.stroke(),s.fillStyle=`${f.color}b8`,s.font='bold 7px "Trebuchet MS", sans-serif',s.textAlign="center",s.fillText(f.short.toUpperCase(),g.x,g.y+2)}s.strokeStyle="rgba(255,209,102,0.18)",s.lineWidth=2;for(const u of Ci){const f=vt[u],g=h(0,0),_=h(f.center[0],f.center[1]);s.beginPath(),s.moveTo(g.x,g.y),s.lineTo(_.x,_.y),s.stroke()}const d=h(0,0);s.fillStyle="rgba(255,209,102,0.16)",s.beginPath(),s.arc(d.x,d.y,22*c,0,Math.PI*2),s.fill(),s.fillStyle="#ffd166",s.beginPath(),s.arc(d.x,d.y,2.2,0,Math.PI*2),s.fill();for(const u of e.landmarks||[]){const f=Array.isArray(u.position)?u.position:[u.x,u.z],g=h(f[0],f[1]);s.fillStyle="rgba(192,139,255,0.75)",s.fillRect(g.x-1.5,g.y-1.5,3,3)}for(const u of e.wilds||[]){if(!u.visible)continue;const f=h(u.x,u.z),g=u.legendary?"#ffd166":tr[u.rarity]?.color||"#9fb0c9";s.fillStyle=g,s.beginPath(),s.arc(f.x,f.y,u.legendary?2.8:1.6,0,Math.PI*2),s.fill(),u.legendary&&(s.strokeStyle="rgba(255,209,102,0.45)",s.beginPath(),s.arc(f.x,f.y,5.5+Math.sin(t/300)*1.5,0,Math.PI*2),s.stroke())}if(e.player){const u=h(e.player.x,e.player.z);s.save(),s.translate(u.x,u.y);const f=e.player.facing||0;s.rotate(f+Math.PI),s.fillStyle="#ffffff",s.shadowColor="#7fe7d4",s.shadowBlur=8,s.beginPath(),s.moveTo(0,-6),s.lineTo(4.2,4.5),s.lineTo(0,2.6),s.lineTo(-4.2,4.5),s.closePath(),s.fill(),s.restore()}s.strokeStyle="rgba(151,196,255,0.16)",s.lineWidth=1,s.strokeRect(.5,.5,r-1,a-1)}showBattleResult({result:e,battle:t,rewards:n,captured:s,onContinue:r,onOpenParty:a}){const o={victory:"Creature calmed",captured:"Capture successful",defeat:"Your lead needs rest",fled:"You slipped away"},l={victory:"The encounter ends without a capture. The creature retreats into the biome.",captured:`${s?Nt(s):"The creature"} is now part of your expedition.`,defeat:"Your active creature fainted. You return to Haven with the party patched up, but lose some Shards.",fled:"You leave the encounter. The wild creature remains in its territory."},c=n?.item?`<span class="reward-pill">${Re(gn[n.item]?.name||n.item)}</span>`:"",h=`<div style="text-align:center;padding:6px 0 4px">
      ${s&&ss(s)?`<div style="width:180px;height:180px;margin:0 auto">${li(ss(s))}</div>`:""}
      <span class="eyebrow" style="color:var(--gold)">ENCOUNTER RESULT</span>
      <h2 style="font-family:var(--font-display);font-size:28px;margin:7px 0">${Re(o[e]||"Encounter complete")}</h2>
      <p class="small muted" style="max-width:430px;margin:0 auto;line-height:1.55">${Re(l[e]||"")}</p>
      <div class="reward-row" style="justify-content:center;margin-top:16px">
        ${n?.xp?`<span class="reward-pill violet">+${n.xp} XP</span>`:""}
        ${n?.shards?`<span class="reward-pill gold">+${n.shards} Shards</span>`:""}
        ${c}
        ${s?'<span class="reward-pill teal">Added to collection</span>':""}
      </div>
      ${t?.enemy?`<p class="small muted" style="margin-top:13px">${Re(t.enemy.name)} · Lv. ${t.enemy.level} · ${Re(vt[t.enemy.species.biome]?.name||"Wilds")}</p>`:""}
    </div>`;this.activeScreen="result",this.root.classList.remove("hidden"),this.root.innerHTML=`<div class="modal-card narrow">
      <div class="modal-body">${h}</div>
      <div class="modal-footer" style="justify-content:center">
        ${a?'<button class="ghost-button" data-result-party>View party</button>':""}
        <button class="primary-button" data-close>Continue exploring</button>
      </div>
    </div>`,this.root.querySelector("[data-close]")?.addEventListener("click",()=>{this.closeModal(),r?.()}),this.root.querySelector("[data-result-party]")?.addEventListener("click",()=>{this.closeModal(),r?.(),a()})}confirm({title:e,message:t,confirmLabel:n="Confirm",danger:s=!1}){return new Promise(r=>{const a=document.createElement("div");a.style.cssText="position:absolute;inset:0;z-index:45;display:flex;align-items:center;justify-content:center;background:rgba(3,6,13,.7);backdrop-filter:blur(7px);padding:20px",a.innerHTML=`<div class="modal-card narrow" style="animation:modalIn .2s ease both">
        <div class="modal-header"><div class="modal-title"><span class="eyebrow" style="color:${s?"var(--danger)":"var(--gold)"}">PLEASE CONFIRM</span><h2>${Re(e)}</h2><p>${Re(t)}</p></div></div>
        <div class="modal-footer"><button class="ghost-button" data-cancel>Cancel</button><button class="${s?"danger-button":"primary-button"}" data-confirm>${Re(n)}</button></div>
      </div>`,document.getElementById("game-shell").append(a);const o=l=>{a.remove(),r(l)};a.querySelector("[data-cancel]").addEventListener("click",()=>o(!1)),a.querySelector("[data-confirm]").addEventListener("click",()=>o(!0)),a.addEventListener("click",l=>{l.target===a&&o(!1)})})}}const yh=15,Wd=240,xh=360*1e3,o_=600*1e3,_h={astral:[[-54,78],[-44,88],[-64,70]],tide:[[-80,-12],[-90,-24],[-68,-4]],frost:[[48,80],[40,68],[60,90]],ember:[[80,-16],[90,-26],[68,-6]],verdant:[[0,-72],[-12,-82],[14,-62]]};function l_(i,e=Date.now()){const t=i.legendary;if(!t)return i.legendary={nextEventAt:e+9e4,active:null,history:[]},{changed:!1,event:null};if(t.active){const n=t.active;return n.phase==="warning"&&e>=n.startsAt?(n.phase="active",t.active=n,{changed:!0,event:n,spawned:!0}):n.phase==="active"&&e>=n.endsAt?(t.history.push({...n,outcome:n.captured?"captured":"expired"}),t.history=t.history.slice(-20),t.active=null,t.nextEventAt=e+$d(e),{changed:!0,event:null,expired:n}):{changed:!1,event:n}}if(e>=(t.nextEventAt||0)){const n=c_(i,e);return t.active=n,{changed:!0,event:n,warning:!0}}return{changed:!1,event:null}}function $d(i){const e=ui(`legendary-${i}`);return xh+e()*(o_-xh)}function c_(i,e=Date.now()){const t=sh.filter(h=>!i.legendary.history.slice(-6).some(d=>d.legendaryId===h)),n=t.length?t:sh,s=n[Math.floor(ui(`legendary-pick-${e}-${i.stats.legendariesSeen||0}`)()*n.length)],a=Tt(s)?.biome||"astral",o=_h[a]||_h.astral,l=o[Math.floor(ui(`legendary-spawn-${e}`)()*o.length)],c=Math.max(24,(vt[a]?.levelRange?.[1]||25)+2);return{id:`legend-${e}`,legendaryId:s,biome:a,phase:"warning",spawnedAt:e,startsAt:e+yh*1e3,endsAt:e+(yh+Wd)*1e3,spawn:{x:l[0],z:l[1]},level:c,captured:!1}}function h_(i,e=Date.now()){const t=i.legendary?.active;return t?t.phase==="warning"?Math.max(0,t.startsAt-e)/1e3:Math.max(0,t.endsAt-e)/1e3:Math.max(0,(i.legendary?.nextEventAt||e)-e)/1e3}function Hr(i,e=Date.now()){const t=i.legendary?.active;if(!t)return{state:"idle",nextIn:h_(i,e),label:"The Scar is quiet",detail:"Legendary events are server-simulated and announced before they begin."};const n=Tt(t.legendaryId);return t.phase==="warning"?{state:"warning",event:t,species:n,nextIn:Math.max(0,t.startsAt-e)/1e3,label:`${n?.name||"A legendary creature"} is approaching`,detail:`A rift is opening in ${vt[t.biome]?.name||"the wilds"}. Arrive within ${Wd/60} minutes.`}:{state:"active",event:t,species:n,nextIn:Math.max(0,t.endsAt-e)/1e3,label:`${n?.name||"A legendary creature"} is present`,detail:`Seen in ${vt[t.biome]?.name||"the wilds"}. One capture per event.`}}function d_(i,e,t=Date.now()){const n=i.legendary?.active;return!n||n.id!==e.id||n.captured?{ok:!1,reason:"That legendary event is no longer available."}:(n.captured=!0,n.capturedAt=t,i.legendary.history.push({...n,outcome:"captured"}),i.legendary.history=i.legendary.history.slice(-20),i.legendary.active=null,i.legendary.nextEventAt=t+$d(t),{ok:!0})}function u_(i){i.stats.legendariesSeen=(i.stats.legendariesSeen||0)+1}const ol=[0,0,14],f_=2e4,p_=13;function Sh(){return new Promise(i=>requestAnimationFrame(()=>i()))}class m_{constructor({engine:e,profile:t,world:n,player:s,wilds:r}){this.engine=e,this.profile=t,this.world=n,this.player=s,this.wilds=r,this.input=new py(e.canvas),this.mode="title",this.battle=null,this.battleScene=null,this.pendingWild=null,this.focus=null,this.legendaryEvent=null,this.hazardCooldownAt=0,this.lastBiomeCheck=0,this.lastSeenScan=0,this.lastPromptAt=0,this.lastLegendaryUi=0,this.lastHint="",this.lastPrompt=null,this.lastBiome=null,this.autosaveAt=performance.now(),this.dirty=!1,this.time=0,this.sessionStartedAt=Date.now(),this.companion=null,this.companionSpecies=null,this.profile.settings=this.profile.settings||{},this.input.sensitivity=this.profile.settings.sensitivity||1,this.input.invertY=!!this.profile.settings.invertY,this.input.setEnabled(!1),this.ui=new a_(t,this.makeCallbacks()),this.bindInput(),this.bindTouch(),this.syncCollectionDex(),this.player.cameraYaw=0,this.player.facing=Math.PI,this.player.setCameraYaw(0),this.player.applyCamera(this.engine.camera),this.ui.setLocation("hub"),this.ui.setHint("Drag to look · WASD to move · Shift to sprint · E to interact"),this.ui.setLegendary(Hr(t)),this.lastBiome="hub",this.syncCompanion()}makeCallbacks(){return{onEnter:()=>this.enter(),onChooseStarter:e=>this.chooseStarter(e),onScreenRequest:e=>this.openScreen(e),onSetActive:e=>this.handleSetActive(e),onSwapParty:(e,t)=>this.handleSwapParty(e,t),onMoveToParty:e=>this.handleMoveToParty(e),onMoveToStorage:e=>this.handleMoveToStorage(e),onRelease:e=>this.handleRelease(e),onAssignTraining:e=>this.handleAssignTraining(e),onRemoveTraining:e=>this.handleRemoveTraining(e),onCollectTraining:e=>this.handleCollectTraining(e),onUnlockTraining:()=>this.handleUnlockTraining(),onStartQuest:e=>this.handleStartQuest(e),onClaimQuest:e=>this.handleClaimQuest(e),onBuyItem:e=>this.handleBuyItem(e),onUseItem:e=>this.handleUseItem(e),onSettingChange:(e,t)=>this.handleSettingChange(e,t),onResetSave:()=>this.resetSave(),onBattleMove:e=>this.handleBattleMove(e),onBattleDodge:()=>this.handleBattleDodge(),onBattleCapture:()=>this.handleBattleCapture(),onBattlePotion:()=>this.handleBattlePotion(),onBattleFlee:()=>this.handleBattleFlee()}}bindInput(){const e={KeyC:"dex",KeyP:"party",KeyT:"training",KeyJ:"quests",KeyI:"inventory",KeyO:"settings"};this.input.onAction("KeyE",()=>this.interact());for(const[n,s]of Object.entries(e))this.input.onAction(n,()=>this.openScreen(s));const t=["Digit1","Digit2","Digit3","Digit4"];for(const[n,s]of t.entries())this.input.onAction(s,()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleMove(n)}),this.input.onAction(`Numpad${n+1}`,()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleMove(n)});this.input.onAction("KeyF",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleCapture()}),this.input.onAction("KeyR",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattlePotion()}),this.input.onAction("Escape",()=>{this.mode==="battle"&&!this.ui.activeScreen&&this.handleBattleFlee()})}bindTouch(){const e=document.getElementById("joystick"),t=document.getElementById("joystick-knob"),n=document.getElementById("mobile-interact"),s=document.getElementById("mobile-sprint"),r=matchMedia("(pointer: coarse)").matches;if(document.getElementById("mobile-controls")?.classList.toggle("hidden",!r),e&&t){let a=null;const o=(c,h)=>{const u=Math.hypot(c,h),f=u>42?42/u:1,g=c*f,_=h*f;t.style.transform=`translate(${g}px, ${_}px)`,this.input.setTouchMove(g/42,-_/42)};e.addEventListener("pointerdown",c=>{if(this.ui.activeScreen||this.mode!=="explore"&&this.mode!=="battle")return;a=c.pointerId,e.setPointerCapture?.(c.pointerId);const h=e.getBoundingClientRect();o(c.clientX-h.left-h.width/2,c.clientY-h.top-h.height/2)}),e.addEventListener("pointermove",c=>{if(c.pointerId!==a)return;const h=e.getBoundingClientRect();o(c.clientX-h.left-h.width/2,c.clientY-h.top-h.height/2)});const l=()=>{a=null,t.style.transform="translate(0px, 0px)",this.input.setTouchMove(0,0)};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}if(n?.addEventListener("pointerdown",()=>this.interact()),s){s.addEventListener("pointerdown",o=>{o.preventDefault(),this.input.keys.add("ShiftLeft")});const a=()=>this.input.keys.delete("ShiftLeft");s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("pointerleave",a)}}start(){this.ui.revealTitle(!0),this.engine.start((e,t)=>this.tick(e,t))}enter(){if(this.mode==="starter"||this.mode==="explore"||this.mode==="battle")return;this.ui.enterWorld();const e=un(this.profile);if(!this.profile.starterChosen||!e){this.mode="starter",this.ui.openStarterSelection(t=>this.chooseStarter(t));return}this.beginExplore()}chooseStarter(e){if(!sl.includes(e))return;if(un(this.profile)){this.finishStarter();return}const n=ao(e,5,{provenance:"starter"});oh(this.profile,n),this.profile.starterChosen=!0,this.profile.starterId=e,this.profile.activeUid=n.uid,this.profile.party=[n.uid],n.assignment="party",this.markDex(e,!0),fh(this.profile),ts(this.profile,{type:"starter"}),this.ui.showToast(`${Nt(n)} joined your expedition.`,"gold","✦"),this.finishStarter(),this.save(!0),this.ui.refresh(),this.syncCompanion(),this.beginExplore()}finishStarter(){this.ui.activeScreen=null,this.ui.root.classList.add("hidden"),this.ui.root.innerHTML=""}beginExplore(){this.mode="explore",this.input.setEnabled(!0),fh(this.profile),this.syncCollectionDex(),this.syncCompanion(),this.ui.refresh(),this.ui.setBattleVisible(!1),this.ui.setLocation("hub"),this.ui.showToast("Hearthlight Haven is safe. Follow the paths into the wilds.","","✦"),this.ui.setLegendary(Hr(this.profile)),this.save()}syncCollectionDex(){for(const e of this.profile.creatures)this.markDex(e.speciesId,!0,!1)}syncCompanion(){const e=un(this.profile);if(!e){this.companion&&(this.companion.visible=!1);return}if(this.companionSpecies!==e.speciesId){this.companion&&this.companion.parent?.remove(this.companion);const t=Tt(e.speciesId);this.companion=oa(t,{scale:.42}),this.companion.position.copy(this.player.position).add({x:1.5,y:0,z:1}),this.engine.scene.add(this.companion),this.companionSpecies=e.speciesId}this.companion.visible=!0}updateCompanion(e,t,n){if(!this.companion)return;const s=un(this.profile);if(!s){this.companion.visible=!1;return}s.speciesId!==this.companionSpecies&&this.syncCompanion();const r=this.player.position,a=Math.sin(this.player.facing)*-1,o=Math.cos(this.player.facing)*-1,l=Math.cos(this.player.facing)*1.15,c=-Math.sin(this.player.facing)*1.15,h={x:r.x+a+l,z:r.z+o+c},d=h.x-this.companion.position.x,u=h.z-this.companion.position.z,f=Math.hypot(d,u);if(f>9)this.companion.position.set(h.x,this.player.position.y,h.z);else if(f>.15){const _=1-Math.exp(-(n?7.5:3.5)*e);this.companion.position.x+=d*_,this.companion.position.z+=u*_;let p=Math.atan2(d,u)-this.companion.rotation.y;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.companion.rotation.y+=p*Math.min(1,e*7)}const g=this.player.position.y;this.companion.position.y+=(g-this.companion.position.y)*Math.min(1,e*8),nr(this.companion,t,f>.5?"moving":"idle")}markDex(e,t=!1,n=!0){const s=Tt(e);if(!s)return!1;let r=!1;return this.profile.dex.seen.includes(e)||(this.profile.dex.seen.push(e),r=!0,n&&(this.ui.showToast(`New species recorded: ${s.name}.`,"gold","◈"),ts(this.profile,{type:"discover",count:this.profile.dex.seen.length}),this.dirty=!0)),t&&!this.profile.dex.caught.includes(e)&&(this.profile.dex.caught.push(e),this.dirty=!0),r}tick(e,t){if(this.time=t,this.mode==="battle"&&this.battleScene){const r=this.battleScene;this.world.update(e,t),this.wilds.update(e,t,this.player.position,this.legendaryEvent),r.update(e,this.input),this.engine.render(this.mode==="battle"&&this.battleScene===r?r.scene:this.engine.scene),this.input.clearFrame(),this.autosave(e);return}const n=!!this.ui.activeScreen,s=this.mode==="explore"&&!n;this.player.update(e,this.input,this.world,s),this.player.applyCamera(this.engine.camera),this.updateCompanion(e,t,s),this.world.update(e,t),this.wilds.update(e,t,this.player.position,this.legendaryEvent),this.ui.refreshTrainingLive(co()),this.mode==="explore"?(this.profile.stats.playSeconds=(this.profile.stats.playSeconds||0)+e,this.updateLegendary(co()),s?this.updateExploration(co()):(this.ui.setInteraction(null),this.setHint(""))):(this.ui.setInteraction(null),this.setHint("")),this.engine.render(this.engine.scene),this.input.clearFrame(),this.autosave(e)}updateExploration(e){const t=this.player.position;if(e>=this.lastBiomeCheck){this.lastBiomeCheck=e+350;const n=Sy(t.x,t.z);n!==this.lastBiome&&(this.lastBiome=n,this.ui.setLocation(n),this.profile.flags.visitedBiomes.includes(n)?n!=="hub"&&this.ui.showToast(`Entered ${vt[n]?.name||n}.`,"","•"):(this.profile.flags.visitedBiomes.push(n),this.ui.showToast(`Discovered ${vt[n]?.name||n}.`,"gold","✦"),this.dirty=!0))}e>=this.lastSeenScan&&(this.lastSeenScan=e+600,this.scanWilds()),this.checkHazard(e),this.updateFocus(e)}scanWilds(){const e=this.player.position;for(const t of this.wilds.wilds)t.visible&&(Math.hypot(e.x-t.x,e.z-t.z)>p_||this.profile.dex.seen.includes(t.species.id)||this.markDex(t.species.id,!1))}checkHazard(e){if(e<this.hazardCooldownAt)return;const t=this.world.hazardAt(this.player.position);if(!t)return;this.hazardCooldownAt=e+1700;const n=un(this.profile);if(!n)return;const s=Math.max(2,Math.round(n.stats.maxHp*.055));n.hp=Math.max(0,n.hp-s),this.flash(),this.ui.showToast(`${t.label}: ${Nt(n)} loses ${s} HP.`,"error","!"),this.ui.refresh(),n.hp<=0&&(lo(this.profile),this.teleportToHub(),this.ui.showToast("Your lead collapsed. You wake at the Starwell, party restored.","error","!")),this.save(!0)}updateLegendary(e){const t=l_(this.profile,e);if(t.changed){const n=t.event;if(t.warning&&n){const s=Tt(n.legendaryId);this.ui.showToast(`Astral event: ${s?.name||"a legendary creature"} is approaching ${vt[n.biome]?.name||"the wilds"}.`,"gold","✦"),this.markLegendaryWitnessed(n),this.dirty=!0}else t.spawned&&n?this.ui.showToast(`The rift is open. ${Tt(n.legendaryId)?.name||"A legendary"} is present for four minutes.`,"gold","✦"):t.expired&&(this.ui.showToast("The astral rift closes. The legendary presence fades.","","•"),this.dirty=!0);this.save()}this.legendaryEvent=this.profile.legendary.active,this.legendaryEvent&&!this.profile.flags.legendaryWitnessed?.includes(this.legendaryEvent.id)&&this.markLegendaryWitnessed(this.legendaryEvent),e>=this.lastLegendaryUi&&(this.lastLegendaryUi=e+500,this.ui.setLegendary(Hr(this.profile,e)))}markLegendaryWitnessed(e){this.profile.flags.legendaryWitnessed=this.profile.flags.legendaryWitnessed||[],!this.profile.flags.legendaryWitnessed.includes(e.id)&&(this.profile.flags.legendaryWitnessed.push(e.id),this.profile.flags.legendaryWitnessed=this.profile.flags.legendaryWitnessed.slice(-20),u_(this.profile),ts(this.profile,{type:"legendary"}),this.markDex(e.legendaryId,!1),this.dirty=!0)}updateFocus(e){if(e<this.lastPromptAt)return;this.lastPromptAt=e+130;const t=this.player.position,n=this.wilds.nearestWild(t,4.4),s=this.world.nearestInteractable(t,3.9);let r=null;n&&(!s||n.distance<=s.distance+.2)?r={type:"wild",wild:n.wild,distance:n.distance}:s&&(r={type:"interactable",data:s,distance:s.distance}),this.focus=r;let a="";if(r?.type==="wild"?a=`Encounter ${r.wild.species.name} · Lv. ${r.wild.level}`:r?.type==="interactable"&&(a=r.data.label),a!==this.lastPrompt&&(this.lastPrompt=a,this.ui.setInteraction(a||null)),!this.profile.settings.hints){this.setHint("");return}let o="Drag to look · WASD move · Shift sprint · Space jump · E interact";r?.type==="wild"?o="Press E near a wild creature to begin a real-time encounter.":this.world.hazardAt(t)?o="Scalding ground. Move to safety.":r?.type==="interactable"&&(o=`${r.data.label}. Press E.`),this.setHint(o)}setHint(e){e!==this.lastHint&&(this.lastHint=e,this.ui.setHint(e))}interact(){if(this.mode!=="explore"||this.ui.activeScreen)return;const e=this.focus;if(!e)return;if(e.type==="wild"){this.startBattle(e.wild);return}const t=e.data;if(t)switch(t.type){case"shop":this.ui.openScreen("shop");break;case"training":this.ui.openScreen("training");break;case"quests":this.ui.openScreen("quests");break;case"guide":this.profile.flags.tutorialSeen=!0,this.ui.openHowTo(),this.save();break;case"heal":{const n=lo(this.profile);this.ui.showToast(n>0?`The Starwell restores ${pi(n)} total HP.`:"Your party is already at full health.","success","✚"),this.ui.refresh(),this.save(!0);break}case"practice":this.startPractice();break;case"landmark":this.inspectLandmark(t);break}}inspectLandmark(e){const t=this.world.landmarks.find(r=>r.id===e.landmark);if(!t)return;const n=!this.profile.flags.landmarks[t.id];this.profile.flags.landmarks[t.id]=Date.now();const s=ts(this.profile,{type:"visit",landmark:t.id});n?(Jr(this.profile,25,0),this.markDexFromLandmark(t),this.ui.showToast(`${t.name} recorded. +25 Shards.`,"gold","✦")):this.ui.showToast(`${t.name}: ${t.description}`,"","◈"),this.handleQuestUpdates(s),this.ui.refresh(),this.save(!0)}markDexFromLandmark(e){this.profile.flags.landmarks[e.id]=Date.now()}startPractice(){if(this.mode!=="explore"||this.ui.activeScreen)return;const e=un(this.profile);if(!e)return this.ui.showToast("You need an active creature first.","error");if(e.hp<=0)return this.ui.showToast("Your lead needs healing before practice.","error");const t=Tt("AST-012")||Tt(sl[0]),n=Math.max(3,e.level-1),s=ao(t.id,n,{provenance:"practice"}),r={id:`practice-${Date.now()}`,species:t,speciesId:t.id,level:n,x:this.player.position.x,z:this.player.position.z,stats:s.stats,hp:s.stats.maxHp,biome:"verdant",legendary:!1,visible:!0,practice:!0};this.beginBattle(r)}startBattle(e){if(this.mode!=="explore"||this.ui.activeScreen)return;const t=un(this.profile);if(!t){this.ui.showToast("Choose an active creature before entering the wilds.","error");return}if(t.hp<=0){this.ui.showToast(`${Nt(t)} needs a salve or the Starwell before battling.`,"error");return}this.markDex(e.species.id,!1),this.wilds.hideWild(e),this.beginBattle(e)}beginBattle(e){this.pendingWild=e;const t=un(this.profile);this.battle=cx(this.profile,e,t,{legendary:e.legendary?this.legendaryEvent:null}),this.profile.stats.battles=(this.profile.stats.battles||0)+1,this.mode="battle",this.input.keys.clear(),this.input.justPressed.clear(),this.input.setTouchMove(0,0),this.ui.setInteraction(null),this.ui.setHint(""),this.ui.setBattleVisible(!0),this.battleScene=new vx(this.engine,this.battle,e,{onHud:n=>this.ui.updateBattle(n),onEnd:(n,s)=>this.finishBattle(n,s)}),this.ui.setBattleVisible(!0),this.save()}finishBattle(e,t){if(this.mode!=="battle"||this.battle!==t)return;const n=this.pendingWild,s=Lt(this.profile,t.player.uid)||un(this.profile);s&&(s.hp=Math.max(0,Math.round(t.player.hp)),s.statuses=[]);let r=null,a={xp:0,shards:0,item:null},o=[],l=[];if(e==="victory"&&n){if(a=mx(t),s&&a.xp){const c=Vs(this.profile,s,a.xp);o.push({creature:s,levels:c.levels,levelsText:c.levels}),l.push(...c.evolved.map(h=>({creature:s,species:h})));for(const h of this.profile.party){if(h===s.uid)continue;const d=Lt(this.profile,h);if(!d||d.assignment==="training")continue;const u=Vs(this.profile,d,Math.round(a.xp*.3));u.levels&&o.push({creature:d,levels:u.levels}),l.push(...u.evolved.map(f=>({creature:d,species:f})))}}Jr(this.profile,a.shards,0),a.item&&da(this.profile,a.item,1),this.profile.stats.wins=(this.profile.stats.wins||0)+1,this.recordQuestEvent({type:"defeat",biome:n.biome}),this.ui.showToast(`Victory. +${a.xp} XP, +${a.shards} Shards.`,"success","✓")}if(e==="captured"&&n){this.profile.stats.captures=(this.profile.stats.captures||0)+1,r=ao(n.speciesId,n.level,{provenance:n.legendary?"legendary":"wild"});const c=oh(this.profile,r);this.markDex(n.speciesId,!0);const h=Math.round(n.level*10+(n.legendary?180:0));if(a={xp:h,shards:Math.round(n.level*3+(n.legendary?120:0)),item:Math.random()<.18?"treat":null},s){const d=Vs(this.profile,s,h);o.push({creature:s,levels:d.levels}),l.push(...d.evolved.map(u=>({creature:s,species:u})))}Jr(this.profile,a.shards,n.legendary?2:0),a.item&&da(this.profile,a.item,1),this.recordQuestEvent({type:"capture",types:n.species.types,biome:n.biome}),n.legendary&&this.legendaryEvent&&d_(this.profile,this.legendaryEvent).ok&&this.ui.showToast(`${n.species.name} accepted the capture. Legendary event complete.`,"gold","✦"),this.ui.showToast(c.inParty?`${Nt(r)} joined your party.`:`${Nt(r)} was sent to storage.`,"success","◉")}if(e==="defeat"){this.profile.stats.defeats=(this.profile.stats.defeats||0)+1;const c=Math.round((this.profile.currency.shards||0)*.1);this.profile.currency.shards=Math.max(0,(this.profile.currency.shards||0)-c),lo(this.profile),this.teleportToHub(),this.ui.showToast(`You retreat to Haven. The party is restored; ${pi(c)} Shards were lost.`,"error","!")}n?.legendary&&e==="victory"&&(this.profile.legendary.history.push({...this.legendaryEvent,outcome:"escaped"}),this.profile.legendary.history=this.profile.legendary.history.slice(-20),this.profile.legendary.active=null,this.profile.legendary.nextEventAt=Date.now()+360*1e3),n&&(n.practice||((e==="fled"||e==="defeat")&&!n.legendary?this.wilds.showWild(n):this.wilds.removeWild(n,{respawn:!n.legendary}))),this.processProgression(o,l),this.battleScene?.dispose(),this.battleScene=null,this.battle=null,this.pendingWild=null,this.legendaryEvent=this.profile.legendary.active,this.mode="explore",this.input.setEnabled(!0),this.input.keys.clear(),this.input.justPressed.clear(),this.input.setTouchMove(0,0),this.ui.setBattleVisible(!1),this.ui.setLegendary(Hr(this.profile)),this.ui.refresh(),this.save(!0),this.ui.showBattleResult({result:e,battle:t,rewards:a,captured:r,onContinue:()=>{this.focus=null,this.lastPrompt="",this.ui.setInteraction(null)},onOpenParty:()=>this.ui.openScreen("party")})}processProgression(e,t){const n=new Set;for(const s of e){if(!s.levels)continue;const r=`${s.creature.uid}-${s.creature.level}`;n.has(r)||(n.add(r),this.ui.showToast(`${Nt(s.creature)} reached level ${s.creature.level}.`,"gold","↑"),ts(this.profile,{type:"level",level:s.creature.level}))}for(const s of t)this.profile.stats.evolved=(this.profile.stats.evolved||0)+1,this.ui.showToast(`${Nt(s.creature)} evolved into ${s.species.name}.`,"gold","✦")}recordQuestEvent(e){const t=ts(this.profile,e);return this.handleQuestUpdates(t),t}handleQuestUpdates(e=[]){let t=!1;for(const n of e)t=!0,n.justCompleted&&this.ui.showToast(`Bounty complete: ${n.quest.name}. Claim it at the board.`,"gold","✧");t&&(this.ui.refresh(),this.dirty=!0)}handleSetActive(e){const t=Sx(this.profile,e);this.reportResult(t,"Creature is now your active lead."),t.ok&&(this.syncCompanion(),this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleSwapParty(e,t){const n=Mx(this.profile,e,t);this.reportResult(n),n.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleMoveToParty(e){const t=bx(this.profile,e);this.reportResult(t,"Moved to the party."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleMoveToStorage(e){const t=wx(this.profile,e);this.reportResult(t,"Moved to storage."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleRelease(e){const t=Lt(this.profile,e),n=Ex(this.profile,e);this.reportResult(n,`${Nt(t)} was released.`),n.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleAssignTraining(e){const t=Gx(this.profile,e);this.reportResult(t,`${Nt(Lt(this.profile,e))} started training.`),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleRemoveTraining(e){const t=this.profile.flags.totalTrainSeconds||0,n=Vx(this.profile,e);if(this.reportResult(n,"Training stopped and XP collected."),n.ok){const s=(this.profile.flags.totalTrainSeconds||0)-t;s>0&&this.recordQuestEvent({type:"train",seconds:s}),this.processTrainingProgression(n.collected),this.ui.refresh(),this.rerenderScreen(),this.save(!0)}}handleCollectTraining(e){const t=this.profile.flags.totalTrainSeconds||0,n=Hd(this.profile,Date.now(),e||null);if(!n.xp){this.ui.showToast("No training XP ready yet.","","•");return}const s=(this.profile.flags.totalTrainSeconds||0)-t;s>0&&this.recordQuestEvent({type:"train",seconds:s}),this.ui.showToast(`Collected ${pi(n.xp)} training XP.`,"success","↑"),this.processTrainingProgression(n),this.ui.refresh(),this.rerenderScreen(),this.save(!0)}processTrainingProgression(e={}){const t=(e.levels||[]).map(s=>({creature:Lt(this.profile,s.uid),levels:s.levels})).filter(s=>s.creature),n=(e.evolutions||[]).map(s=>({creature:Lt(this.profile,s.uid),species:s.species})).filter(s=>s.creature&&s.species);this.processProgression(t,n)}handleUnlockTraining(){const e=uh(this.profile,"training_slot");this.reportResult(e,"Second treadmill unlocked."),e.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleStartQuest(e){const t=Fx(this.profile,e);this.reportResult(t,"Bounty accepted."),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleClaimQuest(e){const t=Bx(this.profile,e);this.reportResult(t,"Rewards claimed."),t.ok&&(this.ui.showToast("Bounty rewards added to your expedition.","gold","✧"),this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleBuyItem(e){const t=uh(this.profile,e);this.reportResult(t,`${gn[e]?.name||"Item"} purchased.`),t.ok&&(this.ui.refresh(),this.rerenderScreen(),this.save(!0))}handleUseItem(e){const t=un(this.profile);if(!t)return this.ui.showToast("You need an active creature.","error");const n=gn[e];let s;n?.category==="heal"?s=Lx(this.profile,t.uid,e):n?.category==="xp"?s=Ix(this.profile,t.uid,e):n?.category==="lure"?s=Dx(this.profile):s={ok:!1,reason:"That item cannot be used here."},s.ok?(e==="lure"?this.ui.showToast("Scent Lure active for the next three encounters.","success","❋"):n?.category==="xp"?(s.result?.levels&&this.processProgression([{creature:t,levels:s.result.levels}],(s.result.evolved||[]).map(r=>({creature:t,species:r}))),this.ui.showToast(`${Nt(t)} gained ${n.xp} XP.`,"success","★")):this.ui.showToast(`${Nt(t)} restored ${pi(s.healed)} HP.`,"success","✚"),this.ui.refresh(),this.rerenderScreen(),this.save(!0)):this.ui.showToast(s.reason,"error")}handleSettingChange(e,t){e==="quality"&&(this.engine.setQuality(t),this.world.setQuality(t)),e==="sensitivity"&&(this.input.sensitivity=t),e==="invertY"&&(this.input.invertY=!!t),this.ui.applySettings(),this.save(!0)}handleBattleMove(e){if(!this.battleScene||this.battle?.over)return;const t=this.battleScene.castPlayerMove(e);t?.ok||this.ui.showToast(t?.reason||"That move is not ready.","","•")}handleBattleDodge(){!this.battleScene||this.battle?.over||this.input.justPressed.add("KeyQ")}handleBattleCapture(){if(!this.battleScene||!this.battle||this.battle.over)return;if(this.profile.party.length>=6&&ax(this.profile)>=Pd){this.ui.showToast("Party and storage are full. Make room before capturing.","error","!");return}const e=(this.profile.inventory.disc_fine||0)>0?"disc_fine":"disc_basic",t=gn[e];if(!t||(this.profile.inventory[e]||0)<=0){this.ui.showToast("No capture discs left. Visit Ember & Elm.","error","!");return}this.profile.inventory[e]-=1;const n=this.battleScene.attemptCapture(t);n.success?this.ui.showToast("Capture field holds.","gold","◉"):this.ui.showToast(`Capture failed (${Math.round(n.chance*100)}% chance).`,"error","◉"),this.ui.refresh(),this.save(!0)}handleBattlePotion(){if(!this.battleScene||!this.battle||this.battle.over)return;if((this.profile.inventory.potion||0)<=0){this.ui.showToast("No Sap Salve left.","error","!");return}const e=this.battle.player;if(e.hp>=e.maxHp){this.ui.showToast("Your creature is already at full health.","","•");return}const t=Math.min(e.maxHp-e.hp,Math.round(e.maxHp*.4));e.hp+=t,this.profile.inventory.potion-=1,jt(this.battle,`${e.name} recovers ${t} HP from a Sap Salve.`),this.battleScene.spawnFloat(`+${t}`,this.battleScene.playerPos.clone().add({x:0,y:2.2,z:0}),"#8ef0a0"),this.battleScene.spawnBurst(this.battleScene.playerPos.clone().add({x:0,y:.7,z:0}),"#63c96b",14,1),this.ui.showToast(`Sap Salve restored ${t} HP.`,"success","✚"),this.ui.refresh(),this.save(!0)}handleBattleFlee(){if(!this.battleScene||!this.battle||this.battle.over)return;const e=this.battleScene.attemptFlee();e.ok?e.fled||this.ui.showToast("You could not escape. Keep moving.","error","!"):this.ui.showToast(e.reason,"error")}openScreen(e){if(this.mode==="battle"){this.ui.showToast("Finish the encounter before opening menus.","","•");return}if(this.mode!=="starter"){if(this.ui.activeScreen===e){this.ui.closeModal();return}this.ui.openScreen(e)}}rerenderScreen(){this.ui.activeScreen&&this.ui.activeScreen!=="starter"&&this.ui.renderScreen(this.ui.activeScreen)}reportResult(e,t){if(!e?.ok){this.ui.showToast(e?.reason||"That action is not available.","error");return}t&&this.ui.showToast(t,"success")}teleportToHub(){this.player.teleport(ol[0],ol[2]),this.player.cameraYaw=0,this.player.setCameraYaw(0),this.player.applyCamera(this.engine.camera),this.lastBiome="hub",this.ui.setLocation("hub")}flash(){const e=document.getElementById("flash");e&&(e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),80))}resetSave(){this.resetting=!0,rx(),location.reload()}autosave(e){const t=performance.now();t-this.autosaveAt<f_||(this.autosaveAt=t,this.save())}save(e=!1){if(this.resetting)return!1;this.mode==="title"&&!e||(this.profile.updatedAt=Date.now(),ah(this.profile),this.dirty=!1)}destroy(){this.resetting||ah(this.profile),this.engine.renderer.setAnimationLoop(null),this.battleScene?.dispose(),this.input.setEnabled(!1)}}async function g_(i,e=()=>{}){e(8,"Charting the Astral Scar…");const t=new fy(i);e(18,"Reading the expedition archive…");const n=sx();e(30,"Raising the five biomes…");const s=new wy(t.scene,n.settings.quality);e(62,"Waking the wild creatures…"),await Sh();const r=new Ry(t.scene,ol),a=new lx(t.scene,s,n,()=>un(n)?.level||5);e(84,"Tuning real-time encounters…"),await Sh();const o=new m_({engine:t,profile:n,world:s,player:r,wilds:a});return e(100,"Ready."),o}function co(){return Date.now()}const v_=document.getElementById("scene"),Mh=document.getElementById("loading-fill"),bh=document.getElementById("loading-text");function wh(i,e){Mh&&(Mh.style.width=`${i}%`),bh&&e&&(bh.textContent=e)}async function y_(){try{const i=await g_(v_,wh);window.__ASTRA_GAME__=i,i.start(),window.addEventListener("beforeunload",()=>i.save(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&i.save(!0)})}catch(i){console.error(i),wh(100,"The Astral Scar could not be reached.");const e=document.getElementById("loading-screen");e&&(e.innerHTML=`
        <div style="max-width:520px;text-align:center;padding:24px">
          <div class="loading-mark" style="color:var(--danger)">!</div>
          <h1 style="font-family:var(--font-display);font-size:24px;margin:14px 0 8px">The expedition could not start</h1>
          <p style="font-size:12px;line-height:1.6;color:var(--muted)">${String(i?.message||i).replace(/</g,"&lt;")}</p>
          <button class="primary-button" style="margin-top:18px" onclick="location.reload()">Try again</button>
        </div>`)}}y_();
