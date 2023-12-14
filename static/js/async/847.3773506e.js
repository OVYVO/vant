/*! For license information please see 847.3773506e.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["847"],{62261:function(s,t,a){"use strict";a.r(t),a.d(t,{default:function(){return e}});var n=a("76732"),l=a("35859"),e=(0,l.default)({},[["render",n.render]])},76732:function(s,t,a){"use strict";a.r(t);var n=a("83431");a.es(n,t)},83431:function(s,t,a){"use strict";a.r(t),a.d(t,{render:function(){return p}});var n=a("38613");let l={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>Grid</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to divide the page into blocks of equal width in the horizontal direction for displaying content or page navigation.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Grid</span>, <span class="hljs-title class_">GridItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Grid</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">GridItem</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="column-num" tabindex="-1">Column Num</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 6&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="square" tabindex="-1">Square</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">square</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 8&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="gutter" tabindex="-1">Gutter</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 8&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="route" tabindex="-1">Route</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Vue Router&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;URL&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="show-badge" tabindex="-1">Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="grid-props" tabindex="-1">Grid Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>column-num</td><td>Column Num</td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td>icon-size</td><td>Icon size</td><td><em>number | string</em></td><td><code>28px</code></td></tr><tr><td>gutter</td><td>Gutter</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>border</td><td>Whether to show border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>center</td><td>Whether to center content</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>square</td><td>Whether to be square shape</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>Whether to show click feedback when clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>direction</td><td>Content arrangement direction, can be set to <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>reverse</td><td>Whether to reverse the position of icon and text</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="griditem-props" tabindex="-1">GridItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>Icon name or URL</td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>icon-color</td><td>Icon color</td><td><em>string</em></td><td>-</td></tr><tr><td>dot</td><td>Whether to show red dot</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>Content of the badge</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>Props of Badge, see <a href="#/en-US/badge#props" target="_blank">Badge - props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>Link URL</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="griditem-events" tabindex="-1">GridItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="griditem-slots" tabindex="-1">GridItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content</td></tr><tr><td>icon</td><td>Custom icon</td></tr><tr><td>text</td><td>Custom text</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">GridProps</span>, <span class="hljs-title class_">GridDirection</span>, <span class="hljs-title class_">GridItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-grid-item-content-padding</td><td><em>var(--van-padding-md) var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-grid-item-content-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-grid-item-content-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-grid-item-icon-size</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-grid-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-grid-item-text-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr></tbody></table></div>',20)];function p(s,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,e)}}}]);