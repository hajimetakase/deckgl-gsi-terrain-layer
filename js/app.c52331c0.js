(function(e){function n(n){for(var t,i,c=n[0],u=n[1],s=n[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(t=!1)}t&&(a.splice(n--,1),e=i(i.s=r[0]))}return e}var t={},o={app:0},a=[];function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(r,t,function(n){return e[n]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;a.push([1,"chunk-vendors"]),r()})({0:function(e,n){},"034f":function(e,n,r){"use strict";r("85ec")},"0f14":function(e,n,r){"use strict";r("d243")},1:function(e,n,r){e.exports=r("56d7")},2:function(e,n){},"56d7":function(e,n,r){"use strict";r.r(n);r("e623"),r("e379"),r("5dc8"),r("37e1");var t,o=r("2b0e"),a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("GsiTerrainLayer")],1)},i=[],c=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"gsiTerrainLayer"}})},u=[],s=(r("96cf"),r("1da1")),l=r("c06b"),p=r("4278"),f=r("9b26"),d=r("e192"),y=r.n(d),g="https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png",b="https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg",v={scaler:.01,offset:0},h={name:"gsiTerrain",data:function(){return{}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.render();case 1:case"end":return n.stop()}}),n)})))()},methods:{render:function(){t=new y.a.Map({container:"gsiTerrainLayer",style:{version:8,sources:{},layers:[]},center:[138.73,35.36],zoom:12,maxZoom:20,pitch:60});var e=new l["a"]({id:"gsiTerrain",minZoom:0,maxZoom:15,elevationDecoder:v,elevationData:g,texture:b}),n=new f["a"]({gl:t.painter.context.gl,controller:!0,layers:[e]});t.on("load",(function(){t.addLayer(new p["a"]({id:"gsiTerrain",deck:n}))}))}}},m=h,w=(r("0f14"),r("2877")),j=Object(w["a"])(m,c,u,!1,null,"cab6d3e6",null),x=j.exports,O={name:"App",components:{GsiTerrainLayer:x}},_=O,T=(r("034f"),Object(w["a"])(_,a,i,!1,null,null,null)),P=T.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,n,r){},d243:function(e,n,r){}});
//# sourceMappingURL=app.c52331c0.js.map