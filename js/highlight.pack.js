!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")}),n.filter(function(e){return N(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function i(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function o(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function u(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function c(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,o){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),o&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&o.tE&&(a.tE+=(a.e?"|":"")+o.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(i(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,o);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=E.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":x.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function d(){if(!L.k)return n(y);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(L,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(y)}return e+n(y.substr(t))}function h(){if(L.sL&&!w[L.sL])return n(y);var e=L.sL?s(L.sL,y,!0,M[L.sL]):l(y);return L.r>0&&(B+=e.r),"continuous"==L.subLanguageMode&&(M[L.sL]=e.top),p(e.language,e.value,!1,!0)}function b(){return void 0!==L.sL?h():d()}function v(e,t){var r=e.cN?p(e.cN,"",!0):"";e.rB?(k+=r,y=""):e.eB?(k+=n(t)+r,y=""):(k+=r,y=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(y+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(y+=t),k+=b();do L.cN&&(k+="</span>"),B+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),y="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(f(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return y+=t,t.length||1}var E=N(e);if(!E)throw new Error('Unknown language: "'+e+'"');c(E);var R,L=i||E,M={},k="";for(R=L;R!=E;R=R.parent)R.cN&&(k=p(R.cN,"",!0)+k);var y="",B=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),R=L;R.parent;R=R.parent)R.cN&&(k+="</span>");return{r:B,value:k,language:e,top:L}}catch(S){if(-1!=S.message.indexOf("Illegal"))return{r:0,value:n(t)};throw S}}function l(e,t){t=t||x.languages||Object.keys(w);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return x.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,x.tabReplace)})),x.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?E[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=a(e);if(!/no(-?)highlight|plain|text/.test(n)){var t;x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,i=n?s(n,r,!0):l(r),c=o(t);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=i.value,i.value=u(c,o(p),r)}i.value=f(i.value),e.innerHTML=i.value,e.className=g(e.className,n,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function d(e){x=i(x,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function b(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){E[e]=n})}function m(){return Object.keys(w)}function N(e){return w[e]||w[E[e]]}var x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},E={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=b,e.registerLanguage=v,e.listLanguages=m,e.getLanguage=N,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("cpp",function(t){var i={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","cc","h","c++","h++","hpp"],k:i,i:"</",c:[t.CLCM,t.CBCM,t.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},t.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:/\\\n/,r:0},{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},t.CLCM]},{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:i,c:["self"]},{b:t.IR+"::",k:i},{bK:"new throw return else",r:0},{cN:"function",b:"("+t.IR+"\\s+)+"+t.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:t.IR+"\\s*\\(",rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:i,r:0,c:[t.CBCM]},t.CLCM,t.CBCM]}]}});hljs.registerLanguage("python",function(e){var r={cN:"prompt",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},l={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},c={cN:"params",b:/\(/,e:/\)/,c:["self",r,l,b]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[r,l,b,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,c]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",b:"\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}]}});hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})",a=[],c=[],n=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},i=function(e,r,t){return{cN:e,b:r,r:t}},s=function(r,t,a){return e.inherit({cN:r,b:t+"\\(",e:"\\(",rB:!0,eE:!0,r:0},a)},b={b:"\\(",e:"\\)",c:c,r:0};c.push(e.CLCM,e.CBCM,n("'"),n('"'),e.CSSNM,i("hexcolor","#[0-9A-Fa-f]+\\b"),s("function","(url|data-uri)",{starts:{cN:"string",e:"[\\)\\n]",eE:!0}}),s("function",r),b,i("variable","@@?"+r,10),i("variable","@{"+r+"}"),i("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0});var o=c.concat({b:"{",e:"}",c:a}),u={bK:"when",eW:!0,c:[{bK:"and not"}].concat(c)},C={cN:"attribute",b:t,e:":",eE:!0,c:[e.CLCM,e.CBCM],i:/\S/,starts:{e:"[;}]",rE:!0,c:c,i:"[<=$]"}},l={cN:"at_rule",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:c,r:0}},d={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:o}},p={v:[{b:"[\\.#:&\\[]",e:"[;{}]"},{b:t+"[^;]*{",e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",c:[e.CLCM,e.CBCM,u,i("keyword","all\\b"),i("variable","@{"+r+"}"),i("tag",t+"%?",0),i("id","#"+t),i("class","\\."+t,0),i("keyword","&",0),s("pseudo",":not"),s("keyword",":extend"),i("pseudo","::?"+t),{cN:"attr_selector",b:"\\[",e:"\\]"},{b:"\\(",e:"\\)",c:o},{b:"!important"}]};return a.push(e.CLCM,e.CBCM,l,d,p,C),{cI:!0,i:"[=>'/<($\"]",c:a}});hljs.registerLanguage("swift",function(e){var i={keyword:"class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"},t={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n=e.C("/\\*","\\*/",{c:["self"]}),r={cN:"subst",b:/\\\(/,e:"\\)",k:i,c:[]},s={cN:"number",b:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",r:0},o=e.inherit(e.QSM,{c:[r,e.BE]});return r.c=[s],{k:i,c:[o,e.CLCM,n,t,s,{cN:"func",bK:"func",e:"{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/,i:/\(/}),{cN:"generics",b:/</,e:/>/,i:/>/},{cN:"params",b:/\(/,e:/\)/,endsParent:!0,k:i,c:["self",s,o,e.CBCM,{b:":"}],i:/["']/}],i:/\[|%/},{cN:"class",bK:"struct protocol class extension enum",k:i,e:"\\{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/})]},{cN:"preprocessor",b:"(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"}]}});hljs.registerLanguage("ruby",function(e){var c="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",b={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},n=[e.C("#","$",{c:[b]}),e.C("^\\=begin","^\\=end",{c:[b],r:10}),e.C("^__END__","\\n$")],s={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},i={cN:"params",b:"\\(",e:"\\)",k:r},d=[t,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(n)},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:c}),i].concat(n)},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[t,{b:c}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,{cN:"regexp",c:[e.BE,s],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(n),r:0}].concat(n);s.c=d,i.c=d;var o="[>?]>",l="[\\w#]+\\(\\w+\\):\\d+:\\d+>",u="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",N=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:d}},{cN:"prompt",b:"^("+o+"|"+l+"|"+u+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:n.concat(N).concat(d)}});
