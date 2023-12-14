/*! For license information please see 9896.b1743b09.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9896"],{69772:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var n=t("60255"),e=t("35859"),l=(0,e.default)({},[["render",n.render]])},60255:function(s,a,t){"use strict";t.r(a);var n=t("50272");t.es(n,a)},50272:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return p}});var n=t("38613");let e={class:"van-doc-markdown-body"},l=[(0,n.createStaticVNode)('<h1>Sticky</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The sticky component is consistent with the effect achieved by the <code>position: sticky</code> property in CSS, in that when the component is within screen range, it will follow the normal layout arrangement, and when the component rolls out of screen range, it will always be fixed at the top of the screen.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sticky</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sticky</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="offset-top" tabindex="-1">Offset Top</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Offset Top<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="set-container" tabindex="-1">Set Container</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:container</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Set Container<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> container = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">return</span> { container };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="offset-bottom" tabindex="-1">Offset Bottom</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-bottom</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Offset Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>position</td><td>Offset position, can be set to <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>offset-top</td><td>Offset top, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>offset-bottom</td><td>Offset bottom, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>z-index</td><td>z-index when sticky</td><td><em>number | string</em></td><td><code>99</code></td></tr><tr><td>container</td><td>Container DOM</td><td><em>Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when sticky status changed</td><td><em>isFixed: boolean</em></td></tr><tr><td>scroll</td><td>Emitted when scrolling</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StickyProps</span>, <span class="hljs-title class_">StickyPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-sticky-z-index</td><td><em>99</em></td><td>-</td></tr></tbody></table></div>',14)];function p(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",e,l)}}}]);