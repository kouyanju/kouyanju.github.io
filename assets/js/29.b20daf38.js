(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{603:function(t,e,a){"use strict";a.r(e);var l=a(31),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("h2",{attrs:{id:"基本数据类型-值类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型-值类型"}},[t._v("#")]),t._v(" 基本数据类型(值类型)")]),t._v(" "),a("ul",[a("li",[t._v("① Undefined、Null、Number、String、Boolean、Symbol")]),t._v(" "),a("li",[t._v("② Undefined和Null的区别：Undefined类型只有一个值，就是undefined，Null类型也只有一个值，也就是null。Undefined 就是已声明未赋值的变量输出的结果；null 就是一个不存在的对象的结果。")]),t._v(" "),a("li",[t._v("③ Number：整数、浮点（小数）、Infinity（无限大）、NAN（not a number）将其他类型向数字进行转换，转换失败得到的结果。\n"),a("ul",[a("li",[t._v("<1>当字符串与数字相加时，会将数字转为字符串，输出的结果类型为字符串；")]),t._v(" "),a("li",[t._v("<2>当数字与字符串进行减法操作时，会将字符串转换为数字。")])])]),t._v(" "),a("li",[t._v("④ Boolean：")])]),t._v(" "),a("h2",{attrs:{id:"symbol及使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol及使用"}},[t._v("#")]),t._v(" symbol及使用")]),t._v(" "),a("p",[t._v("Symbol：ES6中新添加的数据类型\nES5的对象属性名都是字符串，这容易造成属性名的冲突。ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。\nSymbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。Symbol 值不能与其他类型的值进行运算，会报错。Symbol 值可以显式转为字符串。另外，Symbol 值也可以转为布尔值，但是不能转为数值。ES2019提供了一个实例属性description，直接返回 Symbol 的描述。注意，Symbol 值作为对象属性名时，不能用点运算符。还有一点需要注意，Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。")]),t._v(" "),a("h2",{attrs:{id:"引用类型-object类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用类型-object类型"}},[t._v("#")]),t._v(" 引用类型(Object类型)")]),t._v(" "),a("p",[t._v("细分为Object 类型、Array 类型、Date 类型、RegExp 类型、Function 类型等。")]),t._v(" "),a("ul",[a("li",[t._v("① 数组Array：\n"),a("ul",[a("li",[t._v("特点：数组是一组数据的组合；js数组长度可变，元素类型也可以不同；数组长度随时可变，随时可以修改（length属性）。")])])]),t._v(" "),a("li",[t._v("② 对象Object：\n"),a("ul",[a("li",[t._v("我们目前为止大多数引用类型都是Object类型的实例，Object也是ECMAScript中使用最多的一种类型。")]),t._v(" "),a("li",[t._v("(1) 创建方法：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二种")]),t._v("\n")])])]),a("ul",[a("li",[t._v("(2) 对于Object类型应用for-in枚举循环")]),t._v(" "),a("li",[t._v("(3) Object每个实例都会有如下属性和方法：")]),t._v(" "),a("li",[t._v("<1> Constructor：保存着用于创建当前对象的函数（构造函数）。")]),t._v(" "),a("li",[t._v("<2> hasOwnProperty(propertyName)：用于检测给定的属性在当前对象实例中(而不是原型中)是否存在。")]),t._v(" "),a("li",[t._v("<3> isPrototypeOf(Object)：用于检查加入的对象是否是另外一个对象的原型")]),t._v(" "),a("li",[t._v("<4> propertyisElemerable(propertyNmae)：用于检查给定的属性是否能够用for-in语句来枚举。")]),t._v(" "),a("li",[t._v("<5> toLocalString()：返回对象的字符串表示，该字符串与执行环境的对应。")]),t._v(" "),a("li",[t._v("<6> toString()：返回对象的字符串表示。")]),t._v(" "),a("li",[t._v("<7> valueOf()：返回对象的字符串，数值或布尔表示。")])])])]),t._v(" "),a("h2",{attrs:{id:"基本类型与引用类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本类型与引用类型的区别"}},[t._v("#")]),t._v(" 基本类型与引用类型的区别")]),t._v(" "),a("ul",[a("li",[t._v("① 基本类型：\n"),a("ul",[a("li",[t._v("(1) 占用空间固定，保存在栈中；\n"),a("ul",[a("li",[t._v("注：为什么修改引用类型总会影响到其他指向这个地址的引用变量。\n"),a("ul",[a("li",[t._v("当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址。")])])])])]),t._v(" "),a("li",[t._v("(2) 保存与复制的是值本身；")]),t._v(" "),a("li",[t._v("(3) 使用typeof检测基本数据的类型；")]),t._v(" "),a("li",[t._v("(4) 基本类型数据是值类型。")])])]),t._v(" "),a("li",[t._v("② 引用数据类型\n"),a("ul",[a("li",[t._v("(1) 占用空间不固定，保存在堆中；")]),t._v(" "),a("li",[t._v("注：当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。")]),t._v(" "),a("li",[t._v("(2) 保存与复制的是指向对象的一个指针；")]),t._v(" "),a("li",[t._v("(3) 使用instanceof检测数据类型；")]),t._v(" "),a("li",[t._v("(4) 使用new()方法构造出的对象是引用型。")])])])]),t._v(" "),a("h2",{attrs:{id:"栈内存和堆内存的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存和堆内存的区别"}},[t._v("#")]),t._v(" 栈内存和堆内存的区别")]),t._v(" "),a("p",[t._v("在js引擎中对变量的存储主要有两种位置，堆内存和栈内存。基本数据类型就是保存在栈内存中的简单数据段，这些类型在内存中分别占有固定大小的空间，他们的值保存在栈空间，我们通过按值来访问的。而引用类型就是那些保存在堆内存中的对象，它们的值大小不固定，栈内存中存放地址指向堆内存中的对象。是按引用访问的。")]),t._v(" "),a("h2",{attrs:{id:"js判断类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js判断类型"}},[t._v("#")]),t._v(" js判断类型")]),t._v(" "),a("ul",[a("li",[t._v("① typeof：\n"),a("ul",[a("li",[t._v("typeof可以识别出基本类型boolean,number,undefined,string,symbol，但是不能识别null，typeof null返回的是object。不能识别引用数据类型，会把null、array、object统一归为object类型,但是可以识别出function。所以typeof可以用来识别一些基本类型。")])])]),t._v(" "),a("li",[t._v("② instanceof：\n"),a("ul",[a("li",[t._v("不能识别出基本的数据类型，但是可以检测出引用类型，如array、object、function，同时对于是使用new声明的类型，它还可以检测出多层继承关系。所以instanceof一般用来检测对象类型，以及继承关系。")]),t._v(" "),a("li",[t._v("原理：查看对象B的prototype指向的对象是否在对象A的[[prototype]]链上。")])])]),t._v(" "),a("li",[t._v("③ Object.prototype.toString.call：\n"),a("ul",[a("li",[t._v("此方法可以相对较全的判断js的数据类型。")])])]),t._v(" "),a("li",[t._v("④ constructor：\n-constructor不能判断undefined和null。但是他是不安全的，因为contructor的指向是可以被改变。")])]),t._v(" "),a("vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);