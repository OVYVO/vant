/*! For license information please see 4090.20073e45.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4090"],{69442:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var t=a("53585"),e=a("35859"),l=(0,e.default)({},[["render",t.render]])},53585:function(s,n,a){"use strict";a.r(n);var t=a("91630");a.es(t,n)},91630:function(s,n,a){"use strict";a.r(n),a.d(n,{render:function(){return p}});var t=a("38613");let e={class:"van-doc-markdown-body"},l=[(0,t.createStaticVNode)('<h1>useRelation</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Establish the association relationship between parent and child components, perform data communication and method invocation, based on <code>provide</code> and <code>inject</code> implementation.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>useChildren</code> in parent to associate child components:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#39;my-relation&#39;</span>);\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {\n      count.<span class="hljs-property">value</span>++;\n    };\n\n    <span class="hljs-comment">// provide data and methods to children</span>\n    <span class="hljs-title function_">linkChildren</span>({ add, count });\n  },\n};\n</code></pre><p>Use <code>useParent</code> in child component to get the data and methods provided by parent.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-comment">// use data and methods provided by parent</span>\n    <span class="hljs-keyword">if</span> (parent) {\n      parent.<span class="hljs-title function_">add</span>();\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>\n    }\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {\n  parent?: T;\n  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params">key: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {\n  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];\n  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n</code></pre></div><div class="van-doc-card"><h3 id="return-value-of-useparent" tabindex="-1">Return Value of useParent</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>parent</td><td>Data and methods provided by parent</td><td><em>any</em></td></tr><tr><td>index</td><td>Index position of the current component in all child of the parent component</td><td><em>Ref&lt;number&gt;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value-of-usechildren" tabindex="-1">Return Value of useChildren</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>children</td><td>Component list of children</td><td><em>ComponentPublicInstance[]</em></td></tr><tr><td>linkChildren</td><td>Function to provide values to child</td><td><em>(value: any) =&gt; void</em></td></tr></tbody></table></div>',8)];function p(s,n){return(0,t.openBlock)(),(0,t.createElementBlock)("div",e,l)}}}]);