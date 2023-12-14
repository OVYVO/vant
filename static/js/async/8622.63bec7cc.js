/*! For license information please see 8622.63bec7cc.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8622"],{66632:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return l}});var n=a("47187"),o=a("35859"),l=(0,o.default)({},[["render",n.render]])},47187:function(t,s,a){"use strict";a.r(s);var n=a("90065");a.es(n,s)},90065:function(t,s,a){"use strict";a.r(s),a.d(s,{render:function(){return e}});var n=a("38613");let o={class:"van-doc-markdown-body"},l=[(0,n.createStaticVNode)('<h1>ActionBar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to provide convenient interaction for page-related operations.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionBar</span>, <span class="hljs-title class_">ActionBarIcon</span>, <span class="hljs-title class_">ActionBarButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBar</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarIcon</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarButton</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon1&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon2&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon3&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickIcon</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Click Icon&#39;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Click Button&#39;</span>);\n    <span class="hljs-keyword">return</span> {\n      onClickIcon,\n      onClickButton,\n    };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="icon-badge" tabindex="-1">Icon Badge</h3><p>Use <code>badge</code> prop to show badge in icon.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon1&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon2&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon3&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;12&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-icon-color" tabindex="-1">Custom Icon Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon1&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;star&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Collected&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff5000&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-button-color" tabindex="-1">Custom Button Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Icon2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#be99ff&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Button&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="actionbar-props" tabindex="-1">ActionBar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-props" tabindex="-1">ActionBarIcon Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Button text</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>Icon color</td><td><em>string</em></td><td><code>#323233</code></td></tr><tr><td>icon-class</td><td>Icon class name</td><td><em>string | Array | object</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>Whether to show red dot</td><td><em>boolean</em></td><td>-</td></tr><tr><td>badge</td><td>Content of the badge</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>Props of Badge, see <a href="#/en-US/badge#props" target="_blank">Badge - props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>Link URL</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-props" tabindex="-1">ActionBarButton Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Button text</td><td><em>string</em></td><td>-</td></tr><tr><td>type</td><td>Button type, Can be set to <code>default</code> <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>color</td><td>Button color, support linear-gradient</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>Left Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>Whether to show loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>Link</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-slots" tabindex="-1">ActionBarIcon Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Text</td></tr><tr><td>icon</td><td>Custom icon</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-slots" tabindex="-1">ActionBarButton Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Button content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ActionBarProps</span>,\n  <span class="hljs-title class_">ActionBarIconProps</span>,\n  <span class="hljs-title class_">ActionBarButtonProps</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-action-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-action-bar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-width</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-height</td><td><em>100%</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-action-bar-button-warning-color</td><td><em>var(--van-gradient-orange)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-danger-color</td><td><em>var(--van-gradient-red)</em></td><td>-</td></tr></tbody></table></div>',17)];function e(t,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,l)}}}]);