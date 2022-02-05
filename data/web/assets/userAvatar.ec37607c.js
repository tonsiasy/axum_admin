import{a0 as F,M as A,N as _,o as W,i as I,V as T,W as z,m as v,n as S,l as E,p as V,t as N,u as j,g as k,a9 as q,r as M,k as X,j as C,w as x,c as G,y as Z,z as B,P as J}from"./vendor.8d886737.js";import{_ as K,u as Q}from"./index.c83df884.js";const P={};P.getData=t=>new Promise((e,i)=>{let s={};(function(h){let r=null;return new Promise((o,a)=>{if(h.src)if(/^data\:/i.test(h.src))r=function(p){p=p.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var u=atob(p),g=u.length,l=new ArrayBuffer(g),m=new Uint8Array(l),d=0;d<g;d++)m[d]=u.charCodeAt(d);return l}(h.src),o(r);else if(/^blob\:/i.test(h.src)){var n=new FileReader;n.onload=function(p){r=p.target.result,o(r)},function(p,u){var g=new XMLHttpRequest;g.open("GET",p,!0),g.responseType="blob",g.onload=function(l){this.status!=200&&this.status!==0||u(this.response)},g.send()}(h.src,function(p){n.readAsArrayBuffer(p)})}else{var c=new XMLHttpRequest;c.onload=function(){if(this.status!=200&&this.status!==0)throw"Could not load image";r=c.response,o(r),c=null},c.open("GET",h.src,!0),c.responseType="arraybuffer",c.send(null)}else a("img error")})})(t).then(h=>{s.arrayBuffer=h,s.orientation=function(r){var o,a,n,c,p,u,g,l,m,d=new DataView(r),w=d.byteLength;if(d.getUint8(0)===255&&d.getUint8(1)===216)for(l=2;l<w;){if(d.getUint8(l)===255&&d.getUint8(l+1)===225){u=l;break}l++}if(u&&(a=u+10,function(y,f,b){var O,L="";for(O=f,b+=f;O<b;O++)L+=String.fromCharCode(y.getUint8(O));return L}(d,u+4,4)==="Exif"&&((c=(p=d.getUint16(a))===18761)||p===19789)&&d.getUint16(a+2,c)===42&&(n=d.getUint32(a+4,c))>=8&&(g=a+n)),g){for(w=d.getUint16(g,c),m=0;m<w;m++)if(l=g+12*m+2,d.getUint16(l,c)===274){l+=8,o=d.getUint16(l,c);break}}return o}(h),e(s)}).catch(h=>{i(h)})});const $=F({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),this.enlarge!==1&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:()=>!!window.ActiveXObject||"ActiveXObject"in window,passive(){return this.isIE?null:{passive:!1}}},watch:{img(){this.checkedImg()},imgs(t){t!==""&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const h=new RegExp(t,"i");for(var r=0;r<e.length;r++)h.test(e[r])&&(i=e[r]);return s=i?i.split("/")[1].split("."):["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const o=this.getVersion("version");o[0]>13&&o[1]>1&&(e=-1)}else{const o=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(o){let a=o[1];a=a.split("_"),(a[0]>13||a[0]>=13&&a[1]>=4)&&(e=-1)}}let h=document.createElement("canvas"),r=h.getContext("2d");switch(r.save(),e){case 2:h.width=i,h.height=s,r.translate(i,0),r.scale(-1,1);break;case 3:h.width=i,h.height=s,r.translate(i/2,s/2),r.rotate(180*Math.PI/180),r.translate(-i/2,-s/2);break;case 4:h.width=i,h.height=s,r.translate(0,s),r.scale(1,-1);break;case 5:h.height=i,h.width=s,r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:h.width=s,h.height=i,r.translate(s/2,i/2),r.rotate(90*Math.PI/180),r.translate(-i/2,-s/2);break;case 7:h.height=i,h.width=s,r.rotate(.5*Math.PI),r.translate(i,-s),r.scale(-1,1);break;case 8:h.height=i,h.width=s,r.translate(s/2,i/2),r.rotate(-90*Math.PI/180),r.translate(-i/2,-s/2);break;default:h.width=i,h.height=s}r.drawImage(t,0,0,i,s),r.restore(),h.toBlob(o=>{let a=URL.createObjectURL(o);URL.revokeObjectURL(this.imgs),this.imgs=a},"image/"+this.outputType,1)},checkedImg(){if(this.img===null||this.img==="")return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();let t=new Image;if(t.onload=()=>{if(this.img==="")return this.$emit("imgLoad","error"),this.$emit("img-load","error"),!1;let i=t.width,s=t.height;P.getData(t).then(h=>{this.orientation=h.orientation||1;let r=Number(this.maxImgSize);!this.orientation&&i<r&s<r?this.imgs=this.img:(i>r&&(s=s/i*r,i=r),s>r&&(i=i/s*r,s=r),this.checkOrientationImage(t,this.orientation,i,s))})},t.onerror=()=>{this.$emit("imgLoad","error"),this.$emit("img-load","error")},this.img.substr(0,4)!=="data"&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var i=URL.createObjectURL(this.response);t.src=i},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),t.touches.length==2&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i=this.touches[0].clientX,s=this.touches[0].clientY,h=t.touches[0].clientX,r=t.touches[0].clientY,o=this.touches[1].clientX,a=this.touches[1].clientY,n=t.touches[1].clientX,c=t.touches[1].clientY,p=Math.sqrt(Math.pow(i-o,2)+Math.pow(s-a,2)),u=Math.sqrt(Math.pow(h-n,2)+Math.pow(r-c,2))-p,g=1,l=(g=(g=g/this.trueWidth>g/this.trueHeight?g/this.trueHeight:g/this.trueWidth)>.1?.1:g)*u;if(!this.touchNow){if(this.touchNow=!0,u>0?e+=Math.abs(l):u<0&&e>Math.abs(l)&&(e-=Math.abs(l)),this.touches=t.touches,setTimeout(()=>{this.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&t.touches.length===2)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,h="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.moveX,i=h-this.moveY,this.$nextTick(()=>{if(this.centerBox){let r,o,a,n,c=this.getImgAxis(e,i,this.scale),p=this.getCropAxis(),u=this.trueHeight*this.scale,g=this.trueWidth*this.scale;switch(this.rotate){case 1:case-1:case 3:case-3:r=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(u-g)/2,o=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(g-u)/2,a=r-u+this.cropW,n=o-g+this.cropH;break;default:r=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,o=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,a=r-g+this.cropW,n=o-u+this.cropH}c.x1>=p.x1&&(e=r),c.y1>=p.y1&&(i=o),c.x2<=p.x2&&(e=a),c.y2<=p.y2&&(i=n)}this.x=e,this.y=i,this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})})},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta;i=navigator.userAgent.indexOf("Firefox")>0?30*i:i,this.isIE&&(i=-i);var s=this.coe,h=(s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth)*i;h<0?e+=Math.abs(h):e>Math.abs(h)&&(e-=Math.abs(h));let r=h<0?"add":"reduce";if(r!==this.coeStatus&&(this.coeStatus=r,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(()=>{this.scaling=!1,this.coe=this.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if((t*=i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(()=>{var s=e-this.cropX,h=i-this.cropY;if(s>0?(this.cropW=s+this.cropChangeX>this.w?this.w-this.cropChangeX:s,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(s)>this.w?this.cropChangeX:Math.abs(s),this.cropOffsertX=this.cropChangeX+s>0?this.cropChangeX+s:0),this.fixed){var r=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];r+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.cropOffsertX=s>0?this.cropChangeX:this.cropChangeX-this.cropW):this.cropH=r,this.cropOffsertY=this.cropOffsertY}else h>0?(this.cropH=h+this.cropChangeY>this.h?this.h-this.cropChangeY:h,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(h)>this.h?this.cropChangeY:Math.abs(h),this.cropOffsertY=this.cropChangeY+h>0?this.cropChangeY+h:0)})},changeCropSize(t,e,i,s,h){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=h,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,h=this.h,r=0,o=0;if(this.centerBox){let a=this.getImgAxis(),n=a.x2,c=a.y2;r=a.x1>0?a.x1:0,o=a.y1>0?a.y1:0,s>n&&(s=n),h>c&&(h=c)}this.$nextTick(()=>{var a=e-this.cropX,n=i-this.cropY;if(this.canChangeX&&(this.changeCropTypeX===1?this.cropOldW-a>0?(this.cropW=s-this.cropChangeX-a<=s-r?this.cropOldW-a:this.cropOldW+this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX-a<=s-r?this.cropChangeX+a:r):(this.cropW=Math.abs(a)+this.cropChangeX<=s?Math.abs(a)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):this.changeCropTypeX===2&&(this.cropOldW+a>0?(this.cropW=this.cropOldW+a+this.cropOffsertX<=s?this.cropOldW+a:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(a+this.cropOldW)<=s-r?Math.abs(a+this.cropOldW):this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX+Math.abs(a+this.cropOldW)<=s-r?this.cropChangeX-Math.abs(a+this.cropOldW):r))),this.canChangeY&&(this.changeCropTypeY===1?this.cropOldH-n>0?(this.cropH=h-this.cropChangeY-n<=h-o?this.cropOldH-n:this.cropOldH+this.cropChangeY-o,this.cropOffsertY=h-this.cropChangeY-n<=h-o?this.cropChangeY+n:o):(this.cropH=Math.abs(n)+this.cropChangeY<=h?Math.abs(n)-this.cropOldH:h-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):this.changeCropTypeY===2&&(this.cropOldH+n>0?(this.cropH=this.cropOldH+n+this.cropOffsertY<=h?this.cropOldH+n:h-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=h-this.cropChangeY+Math.abs(n+this.cropOldH)<=h-o?Math.abs(n+this.cropOldH):this.cropChangeY-o,this.cropOffsertY=h-this.cropChangeY+Math.abs(n+this.cropOldH)<=h-o?this.cropChangeY-Math.abs(n+this.cropOldH):o))),this.canChangeX&&this.fixed){var c=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];c+this.cropOffsertY>h?(this.cropH=h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0]):this.cropH=c}if(this.canChangeY&&this.fixed){var p=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];p+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=p}})},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return s=Array.isArray[i]?i:[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop(){this.cropW===0&&this.cropH===0&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&t.touches.length===2)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,h="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.cropOffsertX,i=h-this.cropOffsertY,this.cropX=e,this.cropY=i,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(()=>{let h,r,o=i-this.cropX,a=s-this.cropY;if(e&&(o=this.cropOffsertX,a=this.cropOffsertY),h=o<=0?0:o+this.cropW>this.w?this.w-this.cropW:o,r=a<=0?0:a+this.cropH>this.h?this.h-this.cropH:a,this.centerBox){let n=this.getImgAxis();h<=n.x1&&(h=n.x1),h+this.cropW>n.x2&&(h=n.x2-this.cropW),r<=n.y1&&(r=n.y1),r+this.cropH>n.y2&&(r=n.y2-this.cropH)}this.cropOffsertX=h,this.cropOffsertY=r,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})})},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},h=this.trueWidth*i,r=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(h-r)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(r-h)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=new Image,s=this.rotate,h=this.trueWidth,r=this.trueHeight,o=this.cropOffsertX,a=this.cropOffsertY;function n(c,p){e.width=Math.round(c),e.height=Math.round(p)}i.onload=()=>{if(this.cropW!==0){let c=e.getContext("2d"),p=1;this.high&!this.full&&(p=window.devicePixelRatio),this.enlarge!==1&!this.full&&(p=Math.abs(Number(this.enlarge)));let u=this.cropW*p,g=this.cropH*p,l=h*this.scale*p,m=r*this.scale*p,d=(this.x-o+this.trueWidth*(1-this.scale)/2)*p,w=(this.y-a+this.trueHeight*(1-this.scale)/2)*p;switch(n(u,g),c.save(),s){case 0:this.full?(n(u/this.scale,g/this.scale),c.drawImage(i,d/this.scale,w/this.scale,l/this.scale,m/this.scale)):c.drawImage(i,d,w,l,m);break;case 1:case-3:this.full?(n(u/this.scale,g/this.scale),d=d/this.scale+(l/this.scale-m/this.scale)/2,w=w/this.scale+(m/this.scale-l/this.scale)/2,c.rotate(90*s*Math.PI/180),c.drawImage(i,w,-d-m/this.scale,l/this.scale,m/this.scale)):(d+=(l-m)/2,w+=(m-l)/2,c.rotate(90*s*Math.PI/180),c.drawImage(i,w,-d-m,l,m));break;case 2:case-2:this.full?(n(u/this.scale,g/this.scale),c.rotate(90*s*Math.PI/180),d/=this.scale,w/=this.scale,c.drawImage(i,-d-l/this.scale,-w-m/this.scale,l/this.scale,m/this.scale)):(c.rotate(90*s*Math.PI/180),c.drawImage(i,-d-l,-w-m,l,m));break;case 3:case-1:this.full?(n(u/this.scale,g/this.scale),d=d/this.scale+(l/this.scale-m/this.scale)/2,w=w/this.scale+(m/this.scale-l/this.scale)/2,c.rotate(90*s*Math.PI/180),c.drawImage(i,-w-l/this.scale,d,l/this.scale,m/this.scale)):(d+=(l-m)/2,w+=(m-l)/2,c.rotate(90*s*Math.PI/180),c.drawImage(i,-w-l,d,l,m));break;default:this.full?(n(u/this.scale,g/this.scale),c.drawImage(i,d/this.scale,w/this.scale,l/this.scale,m/this.scale)):c.drawImage(i,d,w,l,m)}c.restore()}else{let c=h*this.scale,p=r*this.scale,u=e.getContext("2d");switch(u.save(),s){case 0:n(c,p),u.drawImage(i,0,0,c,p);break;case 1:case-3:n(p,c),u.rotate(90*s*Math.PI/180),u.drawImage(i,0,-p,c,p);break;case 2:case-2:n(c,p),u.rotate(90*s*Math.PI/180),u.drawImage(i,-c,-p,c,p);break;case 3:case-1:n(p,c),u.rotate(90*s*Math.PI/180),u.drawImage(i,-c,0,c,p);break;default:n(c,p),u.drawImage(i,0,0,c,p)}u.restore()}t(e)},this.img.substr(0,4)!=="data"&&(i.crossOrigin="Anonymous"),i.src=this.imgs},getCropData(t){this.getCropChecked(e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))})},getCropBlob(t){this.getCropChecked(e=>{e.toBlob(i=>t(i),"image/"+this.outputType,this.outputSize)})},showPreview(){if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(()=>{this.isCanShow=!0},16);let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let h=(this.x-this.cropOffsertX)/i,r=(this.y-this.cropOffsertY)/i;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${h}px, ${r}px, 0px)rotateZ(${90*this.rotate}deg)`},s.html=`
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${t}px; height: ${e}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${h}px, ${r}px, 0px)rotateZ(${90*this.rotate}deg)">
        </div>
      </div>`,this.$emit("realTime",s),this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick(()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),this.$emit("imgLoad","success"),setTimeout(()=>{this.showPreview()},20)})},t.onerror=()=>{this.$emit("imgLoad","error"),this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i*=t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let h=s[0];if(h.search("px")!==-1){h=h.replace("px",""),e=parseFloat(h);const r=e/this.trueWidth;let o=1,a=s[1];a.search("px")!==-1&&(a=a.replace("px",""),i=parseFloat(a),o=i/this.trueHeight),t=Math.min(r,o)}if(h.search("%")!==-1&&(h=h.replace("%",""),e=parseFloat(h)/100*this.w,t=e/this.trueWidth),s.length===2&&h==="auto"){let r=s[1];r.search("px")!==-1&&(r=r.replace("px",""),i=parseFloat(r),t=i/this.trueHeight),r.search("%")!==-1&&(r=r.replace("%",""),i=parseFloat(r)/100*this.h,t=i/this.trueHeight)}}catch{t=1}}return t},goAutoCrop(t,e){if(this.imgs===""||this.imgs===null)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const o=Math.abs(this.rotate)%2>0;let a=(o?this.trueHeight:this.trueWidth)*this.scale,n=(o?this.trueWidth:this.trueHeight)*this.scale;i=a<i?a:i,s=n<s?n:s}var h=t||parseFloat(this.autoCropWidth),r=e||parseFloat(this.autoCropHeight);h!==0&&r!==0||(h=.8*i,r=.8*s),h=h>i?i:h,r=r>s?s:r,this.fixed&&(r=h/this.fixedNumber[0]*this.fixedNumber[1]),r>this.h&&(h=(r=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(h,r)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(e=(t=i.x2-i.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(t=(e=i.y2-i.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)})},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(()=>{this.checkedImg()})},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let h=this.getImgAxis(t,e,i),r=this.getCropAxis();h.x1>=r.x1&&(s=!1),h.x2<=r.x2&&(s=!1),h.y1>=r.y1&&(s=!1),h.y2<=r.y2&&(s=!1)}return s}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(i,s,h){for(var r=atob(this.toDataURL(s,h).split(",")[1]),o=r.length,a=new Uint8Array(o),n=0;n<o;n++)a[n]=r.charCodeAt(n);i(new Blob([a],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}});A("data-v-48aab112");const tt={key:0,class:"cropper-box"},et=["src"],it={class:"cropper-view-box"},st=["src"],ot={key:1};_(),$.render=function(t,e,i,s,h,r){return W(),I("div",{class:"vue-cropper",ref:"cropper",onMouseover:e[28]||(e[28]=(...o)=>t.scaleImg&&t.scaleImg(...o)),onMouseout:e[29]||(e[29]=(...o)=>t.cancelScale&&t.cancelScale(...o))},[t.imgs?(W(),I("div",tt,[T(v("div",{class:"cropper-box-canvas",style:S({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"})},[v("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,et)],4),[[z,!t.loading]])])):E("",!0),v("div",{class:V(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:e[0]||(e[0]=(...o)=>t.startMove&&t.startMove(...o)),onTouchstart:e[1]||(e[1]=(...o)=>t.startMove&&t.startMove(...o))},null,34),T(v("div",{class:"cropper-crop-box",style:S({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[v("span",it,[v("img",{style:S({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,st)]),v("span",{class:"cropper-face cropper-move",onMousedown:e[2]||(e[2]=(...o)=>t.cropMove&&t.cropMove(...o)),onTouchstart:e[3]||(e[3]=(...o)=>t.cropMove&&t.cropMove(...o))},null,32),t.info?(W(),I("span",{key:0,class:"crop-info",style:S({top:t.cropInfo.top})},N(t.cropInfo.width)+" \xD7 "+N(t.cropInfo.height),5)):E("",!0),t.fixedBox?E("",!0):(W(),I("span",ot,[v("span",{class:"crop-line line-w",onMousedown:e[4]||(e[4]=o=>t.changeCropSize(o,!1,!0,0,1)),onTouchstart:e[5]||(e[5]=o=>t.changeCropSize(o,!1,!0,0,1))},null,32),v("span",{class:"crop-line line-a",onMousedown:e[6]||(e[6]=o=>t.changeCropSize(o,!0,!1,1,0)),onTouchstart:e[7]||(e[7]=o=>t.changeCropSize(o,!0,!1,1,0))},null,32),v("span",{class:"crop-line line-s",onMousedown:e[8]||(e[8]=o=>t.changeCropSize(o,!1,!0,0,2)),onTouchstart:e[9]||(e[9]=o=>t.changeCropSize(o,!1,!0,0,2))},null,32),v("span",{class:"crop-line line-d",onMousedown:e[10]||(e[10]=o=>t.changeCropSize(o,!0,!1,2,0)),onTouchstart:e[11]||(e[11]=o=>t.changeCropSize(o,!0,!1,2,0))},null,32),v("span",{class:"crop-point point1",onMousedown:e[12]||(e[12]=o=>t.changeCropSize(o,!0,!0,1,1)),onTouchstart:e[13]||(e[13]=o=>t.changeCropSize(o,!0,!0,1,1))},null,32),v("span",{class:"crop-point point2",onMousedown:e[14]||(e[14]=o=>t.changeCropSize(o,!1,!0,0,1)),onTouchstart:e[15]||(e[15]=o=>t.changeCropSize(o,!1,!0,0,1))},null,32),v("span",{class:"crop-point point3",onMousedown:e[16]||(e[16]=o=>t.changeCropSize(o,!0,!0,2,1)),onTouchstart:e[17]||(e[17]=o=>t.changeCropSize(o,!0,!0,2,1))},null,32),v("span",{class:"crop-point point4",onMousedown:e[18]||(e[18]=o=>t.changeCropSize(o,!0,!1,1,0)),onTouchstart:e[19]||(e[19]=o=>t.changeCropSize(o,!0,!1,1,0))},null,32),v("span",{class:"crop-point point5",onMousedown:e[20]||(e[20]=o=>t.changeCropSize(o,!0,!1,2,0)),onTouchstart:e[21]||(e[21]=o=>t.changeCropSize(o,!0,!1,2,0))},null,32),v("span",{class:"crop-point point6",onMousedown:e[22]||(e[22]=o=>t.changeCropSize(o,!0,!0,1,2)),onTouchstart:e[23]||(e[23]=o=>t.changeCropSize(o,!0,!0,1,2))},null,32),v("span",{class:"crop-point point7",onMousedown:e[24]||(e[24]=o=>t.changeCropSize(o,!1,!0,0,2)),onTouchstart:e[25]||(e[25]=o=>t.changeCropSize(o,!1,!0,0,2))},null,32),v("span",{class:"crop-point point8",onMousedown:e[26]||(e[26]=o=>t.changeCropSize(o,!0,!0,2,2)),onTouchstart:e[27]||(e[27]=o=>t.changeCropSize(o,!0,!0,2,2))},null,32)]))],4),[[z,t.cropping]])],544)},$.__scopeId="data-v-48aab112";typeof window!="undefined"&&window.Vue&&window.Vue.createApp({}).component("VueCropper",$);const ht=t=>(A("data-v-216307cb"),t=t(),_(),t),rt=["src"],at={class:"avatar-upload-preview"},ct=["src"],nt=ht(()=>v("br",null,null,-1)),pt=B(" \u9009\u62E9 "),lt=B("\u63D0 \u4EA4"),ut={setup(t){const e=j(),{proxy:i}=J(),s=k(!1),h=k(!1),r=k("\u4FEE\u6539\u5934\u50CF"),o=q({img:e.getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,previews:{}});function a(){s.value=!0}function n(){h.value=!0}function c(){}function p(){i.$refs.cropper.rotateLeft()}function u(){i.$refs.cropper.rotateRight()}function g(y){y=y||1,i.$refs.cropper.changeScale(y)}function l(y){if(y.type.indexOf("image/")==-1)i.$modal.msgError("\u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u4E0A\u4F20\u56FE\u7247\u7C7B\u578B,\u5982\uFF1AJPG\uFF0CPNG\u540E\u7F00\u7684\u6587\u4EF6\u3002");else{const f=new FileReader;f.readAsDataURL(y),f.onload=()=>{o.img=f.result}}}function m(){i.$refs.cropper.getCropBlob(y=>{let f=new FormData;f.append("avatarfile",y),Q(f).then(b=>{s.value=!1,o.img="api"+b.imgUrl,e.commit("SET_AVATAR",o.img),i.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),h.value=!1})})}function d(y){o.previews=y}function w(){o.img=e.getters.avatar,o.visible=!1}return(y,f)=>{const b=M("el-col"),O=M("el-row"),L=M("Upload"),U=M("el-icon"),H=M("el-button"),R=M("el-upload"),D=M("el-dialog");return W(),I(Z,null,[v("div",{class:"user-info-head",onClick:f[0]||(f[0]=Y=>a())},[v("img",{src:X(o).img,title:"\u70B9\u51FB\u4E0A\u4F20\u5934\u50CF",class:"img-circle img-lg"},null,8,rt)]),C(D,{title:r.value,modelValue:s.value,"onUpdate:modelValue":f[6]||(f[6]=Y=>s.value=Y),width:"800px","append-to-body":"",onOpened:n,onClose:w},{default:x(()=>[C(O,null,{default:x(()=>[C(b,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[h.value?(W(),G(X($),{key:0,ref:"cropper",img:X(o).img,info:!0,autoCrop:X(o).autoCrop,autoCropWidth:X(o).autoCropWidth,autoCropHeight:X(o).autoCropHeight,fixedBox:X(o).fixedBox,onRealTime:d},null,8,["img","autoCrop","autoCropWidth","autoCropHeight","fixedBox"])):E("",!0)]),_:1}),C(b,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[v("div",at,[v("img",{src:X(o).previews.url,style:S(X(o).previews.img)},null,12,ct)])]),_:1})]),_:1}),nt,C(O,null,{default:x(()=>[C(b,{lg:2,md:2},{default:x(()=>[C(R,{action:"#","http-request":c,"show-file-list":!1,"before-upload":l},{default:x(()=>[C(H,{size:"small"},{default:x(()=>[pt,C(U,{class:"el-icon--right"},{default:x(()=>[C(L)]),_:1})]),_:1})]),_:1})]),_:1}),C(b,{lg:{span:1,offset:2},md:2},{default:x(()=>[C(H,{icon:"Plus",size:"small",onClick:f[1]||(f[1]=Y=>g(1))})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(H,{icon:"Minus",size:"small",onClick:f[2]||(f[2]=Y=>g(-1))})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(H,{icon:"RefreshLeft",size:"small",onClick:f[3]||(f[3]=Y=>p())})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(H,{icon:"RefreshRight",size:"small",onClick:f[4]||(f[4]=Y=>u())})]),_:1}),C(b,{lg:{span:2,offset:6},md:2},{default:x(()=>[C(H,{type:"primary",size:"small",onClick:f[5]||(f[5]=Y=>m())},{default:x(()=>[lt]),_:1})]),_:1})]),_:1})]),_:1},8,["title","modelValue"])],64)}}};var mt=K(ut,[["__scopeId","data-v-216307cb"]]);export{mt as default};
