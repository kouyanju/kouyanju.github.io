(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{608:function(v,t,s){"use strict";s.r(t);var a=s(31),l=Object(a.a)({},(function(){var v=this,t=v.$createElement,s=v._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"v-if和v-show的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show的区别"}},[v._v("#")]),v._v(" v-if和v-show的区别")]),v._v(" "),s("h3",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[v._v("#")]),v._v(" 区别")]),v._v(" "),s("ol",[s("li",[v._v("手段：")])]),v._v(" "),s("ul",[s("li",[v._v("v-if是通过控制DOM节点的存在与否来控制元素的显隐；")]),v._v(" "),s("li",[v._v("v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；")])]),v._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[v._v("编译过程：")])]),v._v(" "),s("ul",[s("li",[v._v("v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；")]),v._v(" "),s("li",[v._v("v-show只是简单的基于css切换；")])]),v._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[v._v("编译条件：")])]),v._v(" "),s("ul",[s("li",[v._v("v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载)；")]),v._v(" "),s("li",[v._v("v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；")])]),v._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[v._v("性能消耗：")])]),v._v(" "),s("ul",[s("li",[v._v("v-if有更高的切换消耗；")]),v._v(" "),s("li",[v._v("v-show有更高的初始渲染消耗；")])]),v._v(" "),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" 使用场景")]),v._v(" "),s("p",[v._v("基于以上区别，因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。")]),v._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),s("ul",[s("li",[v._v("v-if判断是否加载，可以减轻服务器的压力，在需要时加载,但有更高的切换开销；")]),v._v(" "),s("li",[v._v("v-show调整DOM元素的CSS的dispaly属性，可以使客户端操作更加流畅，但有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。")])]),v._v(" "),s("vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);