import{a as b}from"./chunk-NWGNBHJR.js";import{Da as f,Ha as u,Ia as v,Ja as S,Ka as e,La as n,Na as E,O as p,Oa as y,Pa as c,Q as C,Ra as a,Sa as m,Ta as d,Ua as T,Y as x,Z as _,ta as o}from"./chunk-SGN75A4L.js";var w=(i,r)=>r.id;function F(i,r){i&1&&(e(0,"div",0),a(1,"No Items in Cart"),n())}function $(i,r){if(i&1){let t=E();e(0,"tr")(1,"th"),a(2),n(),e(3,"td"),a(4),n(),e(5,"td"),a(6),n(),e(7,"td",4),y("click",function(){let h=x(t).$implicit,I=c(2);return _(I.cartService.removeFromCart(h))}),a(8,"\u274C"),n()()}if(i&2){let t=r.$implicit,l=r.$index;o(2),m(l+1),o(2),m(t.name),o(2),d("\u20AC ",t.cost,"")}}function g(i,r){if(i&1&&(e(0,"div",1)(1,"table",2)(2,"thead")(3,"tr")(4,"th"),a(5,"#"),n(),e(6,"th"),a(7,"Name"),n(),e(8,"th"),a(9,"Cost"),n(),e(10,"th"),a(11,"Remove"),n()()(),e(12,"tbody"),v(13,$,9,3,"tr",null,w),n()()(),e(15,"div",3),a(16),n()),i&2){let t=c();o(13),S(t.cartService.items()),o(3),d(" TOTAL: \u20AC ",t.cartService.totalCartCost()," ")}}var s=class i{cartService=p(b);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["app-cart"]],standalone:!0,features:[T],decls:2,vars:1,consts:[[1,"text-center","my-6"],[1,"overflow-x-auto"],[1,"table","table-zebra"],[1,"text-xl","my-6","flex","justify-end"],[1,"cursor-pointer",3,"click"]],template:function(t,l){t&1&&f(0,F,2,0,"div",0)(1,g,17,1),t&2&&u(l.cartService.cartIsEmpty()?0:1)}})};export{s as default};
