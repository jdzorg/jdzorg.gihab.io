(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2b3a654"],{1511:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("b-row",[a("b-col",{attrs:{cols:"4"}},[Object.keys(e.user).length>0?a("user-card",{attrs:{"user-data":e.user,"with-link":!1}}):a("span",[e._v("Now you will be redirected to the Users page")])],1)],1)],1)},s=[],n=a("5530"),i=a("2f62"),o=a("2957"),c={name:"UserSingle",components:{UserCard:o["a"]},computed:Object(n["a"])({},Object(i["d"])(["user"])),mounted:function(){this.getUser(this.$route.params.id)},beforeDestroy:function(){this.setLastUser(this.user)},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])({getUser:"GET_USER"})),Object(i["c"])({setLastUser:"SET_LAST_USER"}))},u=c,l=a("2877"),d=Object(l["a"])(u,r,s,!1,null,"d0392d50",null);t["default"]=d.exports},2957:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{key:e.userData.id,attrs:{title:e.userData.first_name+" "+e.userData.last_name,"img-src":e.userData.avatar,"img-alt":e.userData.first_name+"_"+e.userData.last_name,"img-height":"200px","img-top":"","data-user-id":e.userData.id}},[a("b-card-text",[e._v(e._s(e.userData.email))]),e.withLink?a("b-link",{staticClass:"btn btn-success mr-2",attrs:{to:e.getUserLink()}},[e._v("Show")]):e._e(),a("b-button",{staticClass:"mr-2",attrs:{variant:"info"},on:{click:e.showModal}},[e._v("Edit")]),a("b-button",{attrs:{variant:"warning"},on:{click:e.deleteUser}},[e._v("Delete")])],1)},s=[],n=(a("99af"),a("b0c0"),a("ac1f"),a("5319"),a("5530")),i=a("2f62"),o={name:"UserCard",props:{userData:{type:Object,default:function(){return{}}},withLink:{type:Boolean,default:!0}},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["c"])({setEditableUser:"SET_EDITABLE_USER"})),Object(i["b"])({removeUser:"DELETE_USER"})),{},{getUserLink:function(){return{name:"User-single",params:{user:"".concat(this.userData.first_name,"_").concat(this.userData.last_name),id:this.userData.id}}},showModal:function(){this.setEditableUser(this.userData),this.$bvModal.show("editUser")},deleteUser:function(){var e=this;this.$bvToast.show("userDelete"),this.removeUser({stateName:this.$route.name,userId:this.userData.id}),"user-single"===this.$route.name.toLowerCase()&&setTimeout((function(){return e.$router.replace("/users")}),2e3)}})},c=o,u=a("2877"),l=Object(u["a"])(c,r,s,!1,null,"b0a60160",null);t["a"]=l.exports},"99af":function(e,t,a){"use strict";var r=a("23e7"),s=a("d039"),n=a("e8b5"),i=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),d=a("1dde"),b=a("b622"),h=a("2d00"),f=b("isConcatSpreadable"),m=9007199254740991,_="Maximum allowed index exceeded",p=h>=51||!s((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=d("concat"),w=function(e){if(!i(e))return!1;var t=e[f];return void 0!==t?!!t:n(e)},U=!p||!v;r({target:"Array",proto:!0,forced:U},{concat:function(e){var t,a,r,s,n,i=o(this),d=l(i,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(n=-1===t?i:arguments[t],w(n)){if(s=c(n.length),b+s>m)throw TypeError(_);for(a=0;a<s;a++,b++)a in n&&u(d,b,n[a])}else{if(b>=m)throw TypeError(_);u(d,b++,n)}return d.length=b,d}})}}]);
//# sourceMappingURL=chunk-f2b3a654.ad86c106.js.map