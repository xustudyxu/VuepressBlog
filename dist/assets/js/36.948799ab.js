(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{427:function(t,a,r){t.exports=r.p+"assets/img/01.9c1db09c.png"},428:function(t,a,r){t.exports=r.p+"assets/img/02.2c6d5ec2.png"},429:function(t,a,r){t.exports=r.p+"assets/img/03.9581f84e.png"},430:function(t,a,r){t.exports=r.p+"assets/img/04.4acbd131.png"},845:function(t,a,r){"use strict";r.r(a);var n=r(44),_=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第二十章-linux-源码介绍-内核升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二十章-linux-源码介绍-内核升级"}},[t._v("#")]),t._v(" 第二十章 Linux 源码介绍&内核升级")]),t._v(" "),n("h2",{attrs:{id:"_20-1-为什么要阅读linux内核"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-1-为什么要阅读linux内核"}},[t._v("#")]),t._v(" 20.1 为什么要阅读Linux内核")]),t._v(" "),n("ol",[n("li",[t._v("爱好，就是喜欢linux(黑客精神)")]),t._v(" "),n("li",[t._v("想深入理解linux底层运行机制，对操作系统有深入理解")]),t._v(" "),n("li",[t._v("阅读Linux 内核，你会对整个计算机体系有一个更深刻的认识。作为开发者，不管你从事的是驱动开发，应用开发还是后台开发，你都需要了解操作系统内核的运行机制，这样才能写出更好的代码。")]),t._v(" "),n("li",[t._v("作为开发人员不应该只局限在自己的领域，你设计的模块看起来小，但是你不了解进程的调用机制，你不知道进程为什么会阻塞、就绪、执行几个状态。那么很难写出优质的代码。")]),t._v(" "),n("li",[t._v("找工作面试的需要，作为有追求的程序员，还是应该深入的了解一个操作系统的底层机制,(比如 linux/unix)最好是源码级别的，这样你写多线程高并发程序，包括架构，优化，算法等，高度不一样的，当然也不是要求小伙伴儿把一个非常庞大的Linux内核每一行都读懂。我觉得。你至少能看几个核心的模块。")])]),t._v(" "),n("h2",{attrs:{id:"_20-2-linux0-01内核源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-linux0-01内核源码"}},[t._v("#")]),t._v(" 20.2 Linux0.01内核源码")]),t._v(" "),n("h3",{attrs:{id:"_20-2-1-基本介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-1-基本介绍"}},[t._v("#")]),t._v(" 20.2.1 基本介绍")]),t._v(" "),n("p",[t._v("Linux 的内核源代码可以从网上下载,解压缩后文件一般也都位于linux目录下。内核源代码有很多版本，可以从linux0.01内核入手，总共的代码1w行左右，最新版本 5.9.8总共代码超过700w行，非常庞大.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.kernel.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("内核地址"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("很多人害怕读Linux 内核，Linux内核这样大而复杂的系统代码，阅读起来确实有很多困难，但是也不象想象的那么高不可攀。建议可以从linux0.01 入手。")]),t._v(" "),n("h3",{attrs:{id:"_20-2-2-linux-内核源码目录-阅读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-2-2-linux-内核源码目录-阅读"}},[t._v("#")]),t._v(" 20.2.2 Linux 内核源码目录&阅读")]),t._v(" "),n("ul",[n("li",[t._v("提示阅读源码技巧")])]),t._v(" "),n("ol",[n("li",[t._v("linux0.01 的阅读需要懂c语言")]),t._v(" "),n("li",[t._v("阅读源码前，应知道Linux 内核源码的整体分布情况。现代的操作系统一般由进程管理、内存管理、文件系统、驱动程序和网络等组成。Linux内核源码的各个目录大致与此相对应.")]),t._v(" "),n("li",[t._v("在阅读方法或顺序上，有纵向与横向之分。所谓纵向就是顺着程序的执行顺序逐步进行;所谓横向，就是按模块进行。它们经常结合在一起进行。")]),t._v(" "),n("li",[t._v("对于Linux启动的代码可顺着Linux 的启动顺序一步步来阅读;对于像内存管理部分，可以单独拿出来进行阅读分析。实际上这是一个反复的过程，不可能读一遍就理解")])]),t._v(" "),n("ul",[n("li",[t._v("linux内核源码阅读&目录介绍&main.c说明")])]),t._v(" "),n("p",[n("img",{attrs:{src:r(427),alt:"1632734247610"}})]),t._v(" "),n("p",[n("img",{attrs:{src:r(428),alt:"1632735117138"}})]),t._v(" "),n("h2",{attrs:{id:"_20-3-linux内核最新版和内核升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-linux内核最新版和内核升级"}},[t._v("#")]),t._v(" 20.3 Linux内核最新版和内核升级")]),t._v(" "),n("h3",{attrs:{id:"_20-3-1内核地址-查看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-1内核地址-查看"}},[t._v("#")]),t._v(" 20.3.1"),n("a",{attrs:{href:"https://www.kernel.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("内核地址"),n("OutboundLink")],1),t._v(" 查看")]),t._v(" "),n("p",[n("img",{attrs:{src:r(429),alt:"1632745273207"}})]),t._v(" "),n("h3",{attrs:{id:"_20-3-2-下载-解压最新版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-2-下载-解压最新版"}},[t._v("#")]),t._v(" 20.3.2 下载&解压最新版")]),t._v(" "),n("p",[n("strong",[t._v("wget htts:/cdn.kernel.org/pub/linux/kermel/v5.x/linux-5.8.16.tar.gz")])]),t._v(" "),n("p",[n("strong",[t._v("tar -zxvf linux-5.8.16.tar.gz")])]),t._v(" "),n("h3",{attrs:{id:"_20-3-3-linux内核升级应用实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-3-linux内核升级应用实例"}},[t._v("#")]),t._v(" 20.3.3 Linux内核升级应用实例")]),t._v(" "),n("p",[t._v("将CentOS系统从7.6内核升级到7.8版本内核(兼容性问题)")]),t._v(" "),n("p",[n("img",{attrs:{src:r(430),alt:"1632745498273"}})]),t._v(" "),n("h3",{attrs:{id:"_20-3-4-具体步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-3-4-具体步骤"}},[t._v("#")]),t._v(" 20.3.4 具体步骤")]),t._v(" "),n("p",[n("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("uname -a ")]),t._v("                           //查看 当前的内核版本")],1),t._v(" "),n("p",[n("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("yum info kernel -q")]),t._v("          //检测内核版本，显示可以升级的内核")],1),t._v(" "),n("p",[n("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("yum update kernel  ")]),t._v("      //升级内核")],1),t._v(" "),n("p",[n("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("yum list kernel -q ")]),t._v("       //查看已经安装的内核")],1),t._v(" "),n("blockquote",[n("p",[t._v("重启centos即可")])])])}),[],!1,null,null,null);a.default=_.exports}}]);