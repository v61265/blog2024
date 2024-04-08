"use strict";(self.webpackChunkv61265_blog=self.webpackChunkv61265_blog||[]).push([[848],{1173:function(e,n,l){l.d(n,{p:function(){return E},A:function(){return p}});var t=l(6540),a=l(557),r=l(6835),c=l(3328),o=l(7715),m=l(7169);var u=e=>{let{post:n}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var i=e=>{let{data:{post:n},children:l}=e;return(0,a.Y)(c.A,null,(0,a.Y)(r.DZ,{as:"h1",variant:"styles.h1"},n.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,n.date),n.tags&&(0,a.Y)(t.Fragment,null," — ",(0,a.Y)(o.A,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,a.Y)("span",null,n.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},l),(0,a.Y)(u,{post:n}))};const E=e=>{var n,l,t;let{data:{post:r}}=e;return(0,a.Y)(m.A,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(n=r.banner)||void 0===n||null===(l=n.childImageSharp)||void 0===l||null===(t=l.resize)||void 0===t?void 0:t.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function p(e){let{...n}=e;return t.createElement(i,n)}},7715:function(e,n,l){var t=l(557),a=l(6540),r=l(4194),c=l(3601),o=l(2174);n.A=e=>{let{tags:n}=e;const{tagsPath:l,basePath:m}=(0,c.A)();return(0,t.Y)(a.Fragment,null,n.map(((e,n)=>(0,t.Y)(a.Fragment,{key:e.slug},!!n&&", ",(0,t.Y)(r.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,o.A)("/"+m+"/"+l+"/"+e.slug)},e.name)))))}},7169:function(e,n,l){var t=l(6540),a=l(4194),r=l(7533);n.A=e=>{let{title:n="",description:l="",pathname:c="",image:o="",children:m=null,canonicalUrl:u=""}=e;const s=(0,r.A)(),{siteTitle:i,siteTitleAlt:E,siteUrl:p,siteDescription:g,siteImage:d,author:b,siteLanguage:f}=s,v={title:n?n+" | "+i:E,description:l||g,url:""+p+(c||""),image:""+p+(o||d)};return t.createElement(t.Fragment,null,t.createElement("html",{lang:f}),t.createElement("title",null,v.title),t.createElement("meta",{name:"description",content:v.description}),t.createElement("meta",{name:"image",content:v.image}),t.createElement("meta",{property:"og:title",content:v.title}),t.createElement("meta",{property:"og:url",content:v.url}),t.createElement("meta",{property:"og:description",content:v.description}),t.createElement("meta",{property:"og:image",content:v.image}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:image:alt",content:v.description}),t.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),t.createElement("meta",{name:"twitter:title",content:v.title}),t.createElement("meta",{name:"twitter:url",content:v.url}),t.createElement("meta",{name:"twitter:description",content:v.description}),t.createElement("meta",{name:"twitter:image",content:v.image}),t.createElement("meta",{name:"twitter:image:alt",content:v.description}),t.createElement("meta",{name:"twitter:creator",content:b}),t.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),t.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),t.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),t.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),u?t.createElement("link",{rel:"canonical",href:u}):null,m)}},1157:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.p},default:function(){return m}});var t=l(6540),a=l(8453);function r(e){const n=Object.assign({p:"p",a:"a",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote",h4:"h4"},(0,a.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"耶耶「給自己看的」系列重開 XD"),"\n",t.createElement(n.p,null,"發現之前做過的筆記有一點點重覆：\n",t.createElement(n.a,{href:"/JavaScript-base-other"},"給自己看的 JavaScript 基礎 - 迴圈、函式及其他觀念")),"\n",t.createElement(n.h3,null,"變數型態"),"\n",t.createElement(n.p,null,"七種資料型態：\nprimitive type 原始型態"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"null"),"\n",t.createElement(n.li,null,"undefined"),"\n",t.createElement(n.li,null,"string"),"\n",t.createElement(n.li,null,"number"),"\n",t.createElement(n.li,null,"boolean"),"\n",t.createElement(n.li,null,"symbol(ES6)"),"\n"),"\n",t.createElement(n.p,null,"其他都是 boject 物件 7. object(array, function, date ...)"),"\n",t.createElement(n.p,null,"原始型態都是 Immutable ，也就是不能改變。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"let a = 10;\na = 20;\n")),"\n",t.createElement(n.p,null,"是重新賦值而非改變，改變例如："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var str = 'hello';\nstr.toUpperCase();\nconsoel.log(str); // 'hello'\n")),"\n",t.createElement(n.p,null,"上面例子中第二行雖然會回傳新字串 ",t.createElement(n.code,null,"HELLO")," ，但並不會影響 ",t.createElement(n.code,null,"str")," 本身。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var str = 'hello';\nvar newStr = str.toUpperCase();\nconsoel.log(newStr); // 'HELLO'\n")),"\n",t.createElement(n.p,null,"array 因為不是原始型態，因此可以被改變："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var arr = ['a'];\narr.push('b');\nconsole.log(arr) / ['a', 'b'];\n")),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"偵測型態"),"\n",t.createElement(n.code,null,"typeof")," 可以偵測型態："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"console.log(typeof 10); // number\nconsole.log(typeof []); // object\nconsole.log(typeof function () {}); // function\n")),"\n",t.createElement(n.p,null,"不過有些小 bug 例如："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"console.log(typeof null); // object\n")),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof"},"MDN - typeof")," 對此解釋如下："),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"自從 JavaScript 一開始出現, JavaScript 的值就總以型別標簽跟著一個值的方式表示。物件的型別標簽是 0. 而 null 這個值是使用 NULL 指標 (在大部份平台上是 0x00) 來表示. 因此, null 看起來像是一個以 0 為型別標簽的值, 並使得 typeof 傳回不甚正確的結果."),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"typeof")," 時常用在檢測錯誤上。例如 undefined 不能直接被 console.log 出來，此時就可以先用 typeof ："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"// a 沒有被宣告過，因此 a !== undefined 也是 true\nif (typeof a !== 'undefined') {\n  console.log(a);\n}\n")),"\n",t.createElement(n.p,null,"就可以避免噴錯了。"),"\n",t.createElement(n.p,null,"不過 typeof 無法檢測一個變數是不是 Array ，因此可以用："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"conaole.log(Array.isArray([])); // true\n")),"\n",t.createElement(n.p,null,"這裡要注意有些比較舊的瀏覽器上沒有這個方法。"),"\n",t.createElement(n.p,null,"另一個檢測型態的方法："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"console.log(Object.prototype.toSting.call(<欲檢測物>))\nconsole.log(Object.prototype.toSting.call(1)) // [Object Number]\nconsole.log(Object.prototype.toSting.call('a')) // [Object String]\nconsole.log(Object.prototype.toSting.call(null)) // [Object Null]\n")),"\n",t.createElement(n.h3,null,"賦值 ",t.createElement(n.code,null,"=")),"\n",t.createElement(n.p,null,"primitive type 的賦值是直接儲存在記憶體中，因此賦值時很直觀："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 10;\nvar b = a;\nb = 20;\nconsole.log(a, b); // 10 20\n")),"\n",t.createElement(n.p,null,"但 object 和 array 就沒那麼簡單了："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = { num: 10 };\nvar b = a;\nb.num = 20;\nconsolo.log(a, b); // { num: 20 } { num: 20 }\n")),"\n",t.createElement(n.p,null,"這四行電腦實際在做的事情如下："),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"內容 ",t.createElement(n.code,null,"{ num: 10 }")," 存入某個記憶體位置 ",t.createElement(n.code,null,"0x01")," 中。"),"\n",t.createElement(n.li,null,"指定 b 的內容也是在 ",t.createElement(n.code,null,"0x01")," 。"),"\n",t.createElement(n.li,null,t.createElement(n.strong,null,"存取")," b 所指向的 ",t.createElement(n.code,null,"0x01")," 中的內容，將 num 改成 20 。"),"\n",t.createElement(n.li,null,"找 a 時就是叫出 ",t.createElement(n.code,null,"0x01")," 的內容，因此找到 ",t.createElement(n.code,null,"{ num: 20 }")," 。"),"\n"),"\n",t.createElement(n.p,null,"不過，如果指定 b 的新值時用別的方法，結果又會不一樣了。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = { num: 10 };\nvar b = a;\nb = { num: 20 };\nconsolo.log(a, b); // { num: 10 } { num: 20 }\n")),"\n",t.createElement(n.p,null,"因為對電腦來說，這四行是在："),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"內容 ",t.createElement(n.code,null,"{ num: 10 }")," 存入某個記憶體位置 ",t.createElement(n.code,null,"0x01")," 中。"),"\n",t.createElement(n.li,null,"指定 b 的內容也是在 ",t.createElement(n.code,null,"0x01")," 。"),"\n",t.createElement(n.li,null,t.createElement(n.strong,null,"重新指定 b 的記憶體位置，指向 ",t.createElement(n.code,null,"0x02")," ，並將 ",t.createElement(n.code,null,"{ num: 20 }")," 放入。")),"\n",t.createElement(n.li,null,"找 a 時就是叫出 ",t.createElement(n.code,null,"0x01")," 的內容，因此找到 ",t.createElement(n.code,null,"{ num: 10 }")," 。"),"\n"),"\n",t.createElement(n.p,null,"另外，若在判斷時使用 ",t.createElement(n.code,null,"=")," ："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"if ((a = 20)) {\n  consoel.log('hihi'); // hihi\n}\n")),"\n",t.createElement(n.p,null,"對電腦來說："),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"將 a 賦值 20 。"),"\n",t.createElement(n.li,null,"判斷 a 的值， 20 對應到的 boolean 值是 true。"),"\n",t.createElement(n.li,null,"執行 console.log 。"),"\n"),"\n",t.createElement(n.h3,null,"== 和 ==="),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"console.log(2 == '2'); // true\nconsole.log(2 === '2'); //false\n")),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"==")," 會先將兩邊的型態轉換成一樣的，但 ",t.createElement(n.code,null,"===")," 不會，因此會連型態一起檢查。因此會優先推薦使用 ",t.createElement(n.code,null,"===")," 最嚴謹，比較不會出 bug 。"),"\n",t.createElement(n.p,null,"值得注意的是，非 primitive type 的物件中， ",t.createElement(n.code,null,"===")," 比較的實際上不是內容，而是記憶體位置。因此："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var arr1 = [1];\nvar arr2 = [1];\nconsole.log(arr1 === arr2); // false\narr2 = arr1;\nconsole.log(arr1 === arr2); // true\n")),"\n",t.createElement(n.p,null,"也因此 ",t.createElement(n.code,null,"{} === {}")," 的結果會是 false 。"),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"特殊例子"),"\n",t.createElement(n.code,null,"NaN")," 是一種數字，表示它並不是一個數字，例如："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = Number('hi');\nconsole.log(typeof a); // NaN\n")),"\n",t.createElement(n.p,null,"此時來看看："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"console.log(a === a); // false\n")),"\n",t.createElement(n.p,null,"NaN 不等於任何東西，包含它自己。\n若要檢測某個東西是否為 NaN 可用 ",t.createElement(n.code,null,"isNaN()")," 。"),"\n",t.createElement(n.h3,null,"var 、 let 和 const"),"\n",t.createElement(n.h4,null,"作用域：變數的生存範圍"),"\n",t.createElement(n.p,null,"ES6 以前作用域的基本單位是 function ，出了 function 就失去作用。\n在任何 function 外的變數被稱為全域 (global) 變數，其在所有 function 內皆適用（因為會往上找）。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 20;\nfunction test() {\n  var a = 10;\n  console.log(a);\n}\n\ntest(); // 10\nconsole.log(a); // 找到全域變數的 a 是 20\n")),"\n",t.createElement(n.p,null,"但若第三行不是再宣告一次變數 ",t.createElement(n.code,null,"a")," 而是重新賦值，結果會如下："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 20;\nfunction test() {\n  a = 10;\n  console.log(a);\n}\n\ntest(); // 10 ，還順便更改了 a 的值\nconsole.log(a); // 10\n")),"\n",t.createElement(n.p,null,"如果在 function 內沒有使用 ",t.createElement(n.code,null,"var")," 宣告，會自動被認為是全域變數："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"function test() {\n  a = 10; // 變成全域變數\n  console.log(a);\n}\n\ntest(); // 10\nconsole.log(a); // 10\n")),"\n",t.createElement(n.p,null,"來看個複雜一點的例子："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 'global';\nfunction test() {\n  var a = 'test scope a';\n  var b = 'test scope b';\n  console.log(a, b); // test scope a test scope b\n  function inner() {\n    var b = 'inner b';\n    console.log(a, b); // test scope a inner b\n  }\n  inner();\n}\ntest();\n")),"\n",t.createElement(n.p,null,"在 ",t.createElement(n.code,null,"inner()")," 中，因為找不到 a 這個變數，所以往上一層找到 ",t.createElement(n.code,null,"var a = 'test scope a'")," 。往上找的過程稱為 ",t.createElement(n.code,null,"scope chain")," 。"),"\n",t.createElement(n.p,null,"另外， scope 之間也不會共享變數， scope chain 和在哪裡有關，而不是在哪裡被呼叫。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 'global'\n\nfunction change() {\n\tvar a = 'change'\n\ttest()\n}\n\nfuction test() {\n\tconsole.log(a) // global\n}\n\nchange()\n")),"\n",t.createElement(n.p,null,"上面例子中，因為 test scope 中沒有定義 a ，因此會往上找到全域變數 ",t.createElement(n.code,null,"var a = 'global'")," ，和 change() 中的 a 一點關係也沒有。"),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"回到 const 和 let")),"\n",t.createElement(n.p,null,"var 的作用域在 function 之中，但 const 和 let 的作用域僅限 block （看到 ",t.createElement(n.code,null,"{}")," 都算）。"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 60;\nif (a === 60) {\n  var b = 10;\n}\nconsoel.log(b); // 10\n\n// 另一個情境\nvar a = 60;\nif (a === 60) {\n  let b = 10; // 只在 if 裡面可用\n}\nconsoel.log(b); // 錯誤\n")),"\n",t.createElement(n.p,null,"另外， ",t.createElement(n.code,null,"constance")," 是常數，宣告 ",t.createElement(n.code,null,"const")," 時一定要給一個初始值，而且一旦給定就不能變動。"),"\n",t.createElement(n.p,null,"不過因為 object 的儲存方式是依賴記憶體位置，因此只要記憶體沒變就可："),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"conat arr = [1]\narr.push(2) // 可以\narr = [1, 2] // 不行，噴 error\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)},o=l(1173);function m(e){return t.createElement(o.A,e,t.createElement(c,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-給自己看的-java-script-進階-變數-index-mdx-019ce2b0f98813597dd8.js.map