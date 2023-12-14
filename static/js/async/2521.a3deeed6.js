/*! For license information please see 2521.a3deeed6.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2521"],{41320:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return e}});var l=a("25036"),n=a("35859"),e=(0,n.default)({},[["render",l.render]])},25036:function(t,s,a){"use strict";a.r(s);var l=a("6200");a.es(l,s)},6200:function(t,s,a){"use strict";a.r(s),a.d(s,{render:function(){return d}});var l=a("38613");let n={class:"van-doc-markdown-body"},e=[(0,l.createStaticVNode)('<h1>Cell</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The cell is a single display item in the list.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cell</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cell</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="inset-grouped" tabindex="-1">Inset Grouped</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="size" tabindex="-1">Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>\n    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span>\n    <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="left-icon" tabindex="-1">Left Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;location-o&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="link" tabindex="-1">Link</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="router" tabindex="-1">Router</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Vue Router&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="group-title" tabindex="-1">Group Title</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Group 1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Group 2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="use-slots" tabindex="-1">Use Slots</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Use the title slot to customize the title --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-title&quot;</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Use the right-icon slot to customize the right icon --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search-icon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom-title</span> {\n    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">4px</span>;\n    <span class="hljs-attribute">vertical-align</span>: middle;\n  }\n\n  <span class="hljs-selector-class">.search-icon</span> {\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;\n    <span class="hljs-attribute">line-height</span>: inherit;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="vertical-center" tabindex="-1">Vertical Center</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="cellgroup-props" tabindex="-1">CellGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Group title</td><td><em>string</em></td><td>-</td></tr><tr><td>inset</td><td>Whether to be inset grouped</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>Whether to show outer border</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-props" tabindex="-1">Cell Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><em>number | string</em></td><td>-</td></tr><tr><td>value</td><td>Right text</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>Description below the title</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>Size, can be set to <code>large</code> <code>normal</code></td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>Left Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>tag</td><td>Custom element tag</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>url</td><td>Link URL</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>Whether to show inner border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>center</td><td>Whether to center content vertically</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>Whether to show click feedback when clicked</td><td><em>boolean</em></td><td><code>null</code></td></tr><tr><td>is-link</td><td>Whether to show link icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>required</td><td>Whether to show required mark</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>arrow-direction</td><td>Can be set to <code>left</code> <code>up</code> <code>down</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>title-style</td><td>Title style</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>title-class</td><td>Title className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>value-class</td><td>Value className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>label-class</td><td>Label className</td><td><em>string | Array | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-events" tabindex="-1">Cell Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when cell is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cellgroup-slots" tabindex="-1">CellGroup Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>title</td><td>Custom title</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-slots" tabindex="-1">Cell Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td></tr><tr><td>value</td><td>Custom value</td></tr><tr><td>label</td><td>Custom label</td></tr><tr><td>icon</td><td>Custom left icon</td></tr><tr><td>right-icon</td><td>Custom right icon</td></tr><tr><td>extra</td><td>Custom extra content on the right</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CellSize</span>,\n  <span class="hljs-title class_">CellProps</span>,\n  <span class="hljs-title class_">CellGroupProps</span>,\n  <span class="hljs-title class_">CellArrowDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-cell-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-cell-vertical-padding</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-cell-horizontal-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cell-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-cell-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-cell-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-cell-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-cell-required-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-cell-label-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-label-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-cell-label-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-cell-label-margin-top</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-cell-value-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-value-font-size</td><td><em>inherit</em></td><td>-</td></tr><tr><td>--van-cell-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-cell-right-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-cell-large-vertical-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-cell-large-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-cell-large-label-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-large-value-font-size</td><td><em>inherit</em></td><td>-</td></tr><tr><td>--van-cell-group-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-padding</td><td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-title-padding</td><td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)</em></td><td>-</td></tr></tbody></table></div>',22)];function d(t,s){return(0,l.openBlock)(),(0,l.createElementBlock)("div",n,e)}}}]);