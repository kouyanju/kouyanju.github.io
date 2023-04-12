(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{588:function(t,s,a){"use strict";a.r(s);var r=a(31),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"position属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position属性"}},[t._v("#")]),t._v(" position属性")]),t._v(" "),a("h4",{attrs:{id:"_1-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-static"}},[t._v("#")]),t._v(" "),a("strong",[t._v("① static")]),t._v("：")]),t._v(" "),a("p",[t._v("默认值，表示无定位")]),t._v(" "),a("h4",{attrs:{id:"_2-relative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-relative"}},[t._v("#")]),t._v(" "),a("strong",[t._v("② relative")]),t._v("：")]),t._v(" "),a("p",[t._v("表示采用相对定位的方式，相对于元素原本的位置进行定位，该值 "),a("em",[a("strong",[t._v("不会使元素脱离文档流")])]),t._v("，使用该值后可以用left，right，top，bottom对元素进行移动定位")]),t._v(" "),a("h4",{attrs:{id:"_3-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-absolute"}},[t._v("#")]),t._v(" "),a("strong",[t._v("③ absolute")]),t._v("：")]),t._v(" "),a("p",[t._v("表示采用绝对定位方式，相对于position值不是static的父容器进行定位，该值会使元素 "),a("em",[a("strong",[t._v("脱离文档流")])]),t._v("，使用该值后可以用left，right，top，bottom对元素进行移动定位。\n如何解决因设置position:absolute造成父元素高度塌陷：\n给父元素添加高度；给父元素添加overflow:hidden；给元素添加after伪类；\n通过js解决：拿到子元素的高度，再赋值给父元素。")]),t._v(" "),a("h4",{attrs:{id:"_4-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-fixed"}},[t._v("#")]),t._v(" "),a("strong",[t._v("④ fixed")]),t._v("：")]),t._v(" "),a("p",[t._v("表示采用固定定位的方式，通常\n相对于浏览器窗口进行定位，并且无论滚动条怎么滚动，使用了该值的元素都始终处于固定位置，该值会使元素 "),a("em",[a("strong",[t._v("脱离文档流")])]),t._v("，使用该值后可以用left，right，top，bottom对元素进行移动定位")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("有一点得注意一下，他并不总是相对于窗口定位的，如果他的父级元素中出现了 transform 不为 none 的情况，他会相对于有 transform 的父级定位")])]),t._v(" "),a("h4",{attrs:{id:"_5-sticky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-sticky"}},[t._v("#")]),t._v(" "),a("strong",[t._v("⑤ sticky")]),t._v("：")]),t._v(" "),a("p",[t._v("relative+fixed")]),t._v(" "),a("h2",{attrs:{id:"脱离文档流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脱离文档流"}},[t._v("#")]),t._v(" 脱离文档流")]),t._v(" "),a("h4",{attrs:{id:"什么是文档流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是文档流"}},[t._v("#")]),t._v(" 什么是文档流：")]),t._v(" "),a("p",[t._v("将窗体自上而下分成一行行, 并在每行中按从左至右的顺序排放元素,即为文档流.(自己的理解是从头到尾按照文档的顺序，该在什么位置就在什么位置，也可以按照上面的意思理解，自上而下，自左到右的顺序)。")]),t._v(" "),a("h4",{attrs:{id:"哪些会导致脱离文档流的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些会导致脱离文档流的"}},[t._v("#")]),t._v(" 哪些会导致脱离文档流的")]),t._v(" "),a("p",[t._v("① 浮动：float：left/right；"),a("br"),t._v("\n② 定位：position：absolute/fixed；"),a("br"),t._v("\n③ 注意：float浮动跟position:absolute一样拥有脱离文档流的功能，但是float虽然脱离了文档流但是仍然会占据位置，其他的文本内容会按照顺序继续排列。")]),t._v(" "),a("vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);