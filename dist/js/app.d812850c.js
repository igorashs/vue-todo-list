(function(t){function e(e){for(var r,a,s=e[0],l=e[1],d=e[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&v.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("nav-bar"),o("v-content",{staticClass:"ma-4"},[o("todo-list")],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",[o("v-app-bar",{attrs:{flat:"",app:""}},[o("v-toolbar-title",{staticClass:"display-1"},[o("span",[t._v("Todo")]),o("span",{staticClass:"font-weight-bold"},[t._v("List")])]),o("v-spacer"),o("v-btn",{staticClass:"grey darken-3",attrs:{depressed:"",fab:""}},[o("v-icon",{attrs:{"x-large":"",rigth:""}},[t._v("mdi-github-circle")])],1)],1)],1)},s=[],l={},d=l,c=o("2877"),u=o("6544"),v=o.n(u),p=o("40dc"),f=o("8336"),m=o("132d"),b=o("2fa4"),h=o("2a7f"),y=Object(c["a"])(d,a,s,!1,null,null,null),g=y.exports;v()(y,{VAppBar:p["a"],VBtn:f["a"],VIcon:m["a"],VSpacer:b["a"],VToolbarTitle:h["a"]});var _=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",[o("todo-form",{on:{"add-todo":t.onAddTodo}})],1)],1),o("v-row",t._l(t.todos,(function(e){return o("v-col",{key:e.id,attrs:{cols:"12",lg:"4",md:"6"}},[o("todo",{attrs:{"init-todo":e},on:{"remove-todo":t.onRemoveTodo,"save-todo":t.onSaveTodo}})],1)})),1)],1)},x=[],O=(o("c740"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{style:t.todo.isCompleted?"text-decoration: line-through":null},[t._v(" "+t._s(t.todo.title)+" ")]),o("v-card-subtitle",[o("span",{style:t.todo.isCompleted?"text-decoration: line-through":null},[t._v(t._s(t.todo.dueDate))]),o("v-spacer"),t._l(t.priorityLevel,(function(e){return o("v-icon",{key:e},[t._v(" mdi-star-outline ")])}))],2),o("v-card-actions",[o("todo-info",{attrs:{"init-todo":t.todo}}),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({staticClass:"ml-2",class:t.todo.isCompleted?"grey":"blue",attrs:{small:t.isXsScreen},on:{click:t.onToggleComplete}},r),[o("v-icon",{attrs:{small:t.isXsScreen}},[t._v(" mdi-check ")])],1)]}}])},[t.todo.isCompleted?o("span",[t._v("Mark Incomplete")]):o("span",[t._v("Mark Complete")])]),o("v-spacer"),o("todo-edit-form",{attrs:{"init-todo":t.todo},on:{"edit-todo":t.onEditTodo}}),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({staticClass:"error",attrs:{small:t.isXsScreen},on:{click:t.removeTodoHandler}},r),[o("v-icon",{attrs:{small:t.isXsScreen}},[t._v(" mdi-close-circle ")])],1)]}}])},[o("span",[t._v("Remove Todo")])])],1)],1)}),T=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"620",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"success mr-2",attrs:{small:t.isXsScreen}},Object.assign({},r,n)),[o("v-icon",{attrs:{small:t.isXsScreen}},[t._v(" mdi-pencil ")])],1)]}}],null,!0)},[o("span",[t._v("Edit Todo")])])]}}]),model:{value:t.todoEditForm,callback:function(e){t.todoEditForm=e},expression:"todoEditForm"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Edit Todo ")]),o("v-card-text",[o("v-form",{ref:"form"},[o("v-container",{staticClass:"title"},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Title","prepend-inner-icon":"mdi-card-text",rules:t.titleRules},model:{value:t.todo.title,callback:function(e){t.$set(t.todo,"title",e)},expression:"todo.title"}})],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-text-field",t._g({attrs:{readonly:"",value:t.todo.dueDate,label:"Pick a Date","prepend-inner-icon":"mdi-calendar"}},r))]}}])},[o("v-date-picker",{attrs:{"no-title":""},model:{value:t.todo.dueDate,callback:function(e){t.$set(t.todo,"dueDate",e)},expression:"todo.dueDate"}})],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Todo Description","no-resize":"","prepend-inner-icon":"mdi-text"},model:{value:t.todo.text,callback:function(e){t.$set(t.todo,"text",e)},expression:"todo.text"}})],1)],1),o("v-row",[o("v-col",[o("v-overflow-btn",{attrs:{items:t.priorities,label:"Priority","prepend-inner-icon":"mdi-menu-open"},model:{value:t.todo.priority,callback:function(e){t.$set(t.todo,"priority",e)},expression:"todo.priority"}})],1)],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"error",on:{click:function(e){t.todoEditForm=!1}}},[t._v(" Cancel ")]),o("v-btn",{staticClass:"success",on:{click:t.editTodoHandler}},[t._v(" Edit ")])],1)],1)],1)},C=[],w=(o("a4d3"),o("4de4"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3"));function k(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function S(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?k(Object(o),!0).forEach((function(e){Object(w["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var j={props:["initTodo"],data:function(){return{priorities:["low","medium","high"],todoEditForm:!1,todo:S({},this.initTodo),titleRules:[function(t){return!!t||"Title is required"}]}},computed:{isXsScreen:function(){return this.$vuetify.breakpoint.xsOnly}},methods:{editTodoHandler:function(){this.$refs.form.validate()&&(this.todoEditForm=!1,this.$emit("edit-todo",this.todo))}}},D=j,P=o("b0af"),E=o("99d9"),$=o("62ad"),F=o("a523"),I=o("2e4b"),L=o("169a"),A=o("4bd4"),R=o("e449"),X=o("de8e"),B=o("0fd9"),M=o("8654"),H=o("a844"),q=o("3a2f"),J=Object(c["a"])(D,V,C,!1,null,null,null),N=J.exports;v()(J,{VBtn:f["a"],VCard:P["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:$["a"],VContainer:F["a"],VDatePicker:I["a"],VDialog:L["a"],VForm:A["a"],VIcon:m["a"],VMenu:R["a"],VOverflowBtn:X["a"],VRow:B["a"],VSpacer:b["a"],VTextField:M["a"],VTextarea:H["a"],VTooltip:q["a"]});var z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"620"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"purple",attrs:{small:t.isXsScreen}},Object.assign({},r,n)),[o("v-icon",{attrs:{small:t.isXsScreen}},[t._v(" mdi-book-open-variant ")])],1)]}}],null,!0)},[o("span",[t._v("Show All")])])]}}]),model:{value:t.todoEditForm,callback:function(e){t.todoEditForm=e},expression:"todoEditForm"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v(t._s(t.initTodo.title))]),o("v-spacer"),t._l(t.priorityLevel,(function(e){return o("v-icon",{key:e},[t._v(" mdi-star-outline ")])}))],2),o("v-card-text",[o("v-container",[o("v-divider"),o("v-row",{staticClass:"px-2"},[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("span",[t._v("Due Date: "+t._s(t.initTodo.dueDate))])])],1),o("v-divider"),o("v-row",{staticClass:"px-2"},[o("v-col",{attrs:{cols:"12"}},[o("span",{staticClass:"title",staticStyle:{"word-break":"break-word"}},[t._v(" "+t._s(t.initTodo.text)+" ")])])],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"error",on:{click:function(e){t.todoEditForm=!1}}},[t._v(" Cancel ")])],1)],1)],1)},U=[],G={props:["initTodo"],data:function(){return{priorities:["low","medium","high"],todoEditForm:!1}},computed:{priorityLevel:function(){var t=this.initTodo.priority;return"high"===t?3:"medium"===t?2:1},isXsScreen:function(){return this.$vuetify.breakpoint.xsOnly}}},K=G,Q=o("ce7e"),W=Object(c["a"])(K,z,U,!1,null,null,null),Y=W.exports;v()(W,{VBtn:f["a"],VCard:P["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:$["a"],VContainer:F["a"],VDialog:L["a"],VDivider:Q["a"],VIcon:m["a"],VRow:B["a"],VSpacer:b["a"],VTooltip:q["a"]});var Z={components:{TodoEditForm:N,TodoInfo:Y},props:["initTodo"],data:function(){return{todo:this.initTodo}},computed:{priorityLevel:function(){var t=this.todo.priority;return"high"===t?3:"medium"===t?2:1},isXsScreen:function(){return this.$vuetify.breakpoint.xsOnly}},methods:{removeTodoHandler:function(){this.$emit("remove-todo",this.todo.id)},onEditTodo:function(t){this.todo=t,this.$emit("save-todo",this.todo)},onToggleComplete:function(){this.todo.isCompleted=!this.todo.isCompleted,this.$emit("save-todo",this.todo)}}},tt=Z,et=Object(c["a"])(tt,O,T,!1,null,null,null),ot=et.exports;v()(et,{VBtn:f["a"],VCard:P["a"],VCardActions:E["a"],VCardSubtitle:E["b"],VCardTitle:E["d"],VIcon:m["a"],VSpacer:b["a"],VTooltip:q["a"]});var rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"620",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"grey darken-2"},Object.assign({},r,n)),[o("v-icon",[t._v("mdi-plus")])],1)]}}],null,!0)},[o("span",[t._v("Create new Todo")])])]}}]),model:{value:t.todoForm,callback:function(e){t.todoForm=e},expression:"todoForm"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Create new Todo ")]),o("v-card-text",[o("v-form",{ref:"form"},[o("v-container",{staticClass:"title"},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-text-field",{attrs:{label:"Title","prepend-inner-icon":"mdi-card-text",rules:t.titleRules},model:{value:t.todo.title,callback:function(e){t.$set(t.todo,"title",e)},expression:"todo.title"}})],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-text-field",t._g({attrs:{readonly:"",value:t.todo.dueDate,label:"Pick a Date","prepend-inner-icon":"mdi-calendar"}},r))]}}])},[o("v-date-picker",{attrs:{"no-title":""},model:{value:t.todo.dueDate,callback:function(e){t.$set(t.todo,"dueDate",e)},expression:"todo.dueDate"}})],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Todo Description","no-resize":"","prepend-inner-icon":"mdi-text"},model:{value:t.todo.text,callback:function(e){t.$set(t.todo,"text",e)},expression:"todo.text"}})],1)],1),o("v-row",[o("v-col",[o("v-overflow-btn",{attrs:{items:t.priorities,label:"Priority","prepend-inner-icon":"mdi-menu-open"},model:{value:t.todo.priority,callback:function(e){t.$set(t.todo,"priority",e)},expression:"todo.priority"}})],1)],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"error",on:{click:function(e){t.todoForm=!1}}},[t._v("Cancel")]),o("v-btn",{staticClass:"success",on:{click:t.addTodoHandler}},[t._v("Add")])],1)],1)],1)},nt=[],it=[{id:1,title:"First Demo",dueDate:"2019-10-23",text:"Hello There this is a demo",priority:"low",isCompleted:!1},{id:2,title:"Second Demo",dueDate:"2019-10-23",text:"The Second Demo",priority:"medium",isCompleted:!0}],at=2,st={getTodoList:function(){var t=localStorage.getItem("todoList"),e=localStorage.getItem("uniqueId");if(e&&(at=JSON.parse(e)),t){var o=JSON.parse(t);if(o.length>0)return o}return it},setTodoList:function(t){var e=JSON.stringify(t),o=JSON.stringify(at);localStorage.setItem("todoList",e),localStorage.setItem("uniqueId",o)},getUniqueId:function(){return at+=1,at}};function lt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function dt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(o),!0).forEach((function(e){Object(w["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):lt(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var ct={data:function(){return{priorities:["low","medium","high"],todoForm:!1,todo:{id:null,title:"",dueDate:(new Date).toISOString().substr(0,10),text:"",priority:"low",isCompleted:!1},titleRules:[function(t){return!!t||"Title is required"}]}},methods:{addTodoHandler:function(){if(this.$refs.form.validate()){this.todoForm=!1;var t=dt({},this.todo);t.id=st.getUniqueId(),this.$emit("add-todo",t),this.$refs.form.reset(),this.reset()}},reset:function(){var t=this.todo;t.title="",t.dueDate=(new Date).toISOString().substr(0,10),t.text="",t.priority="low"}}},ut=ct,vt=Object(c["a"])(ut,rt,nt,!1,null,null,null),pt=vt.exports;v()(vt,{VBtn:f["a"],VCard:P["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:$["a"],VContainer:F["a"],VDatePicker:I["a"],VDialog:L["a"],VForm:A["a"],VIcon:m["a"],VMenu:R["a"],VOverflowBtn:X["a"],VRow:B["a"],VSpacer:b["a"],VTextField:M["a"],VTextarea:H["a"],VTooltip:q["a"]});var ft={components:{Todo:ot,"todo-form":pt},data:function(){return{todos:[]}},created:function(){this.todos=st.getTodoList()},methods:{onSaveTodo:function(t){var e=this.todos.findIndex((function(e){return e.id===t.id}));this.todos.splice(e,1,t),st.setTodoList(this.todos)},onAddTodo:function(t){this.todos.unshift(t),st.setTodoList(this.todos)},onRemoveTodo:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));this.todos.splice(e,1),st.setTodoList(this.todos)}}},mt=ft,bt=Object(c["a"])(mt,_,x,!1,null,null,null),ht=bt.exports;v()(bt,{VCol:$["a"],VContainer:F["a"],VRow:B["a"]});var yt={name:"App",components:{"nav-bar":g,"todo-list":ht},data:function(){return{}}},gt=yt,_t=o("7496"),xt=o("a75b"),Ot=Object(c["a"])(gt,n,i,!1,null,null,null),Tt=Ot.exports;v()(Ot,{VApp:_t["a"],VContent:xt["a"]});var Vt=o("f309");r["a"].use(Vt["a"]);var Ct=new Vt["a"]({icons:{iconfont:"mdi"},theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Ct,render:function(t){return t(Tt)}}).$mount("#app")}});
//# sourceMappingURL=app.d812850c.js.map