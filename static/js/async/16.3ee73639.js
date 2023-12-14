/*! For license information please see 16.3ee73639.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["16"],{16099:function(t,d,a){"use strict";a.r(d),a.d(d,{default:function(){return n}});var s=a("46359"),e=a("35859"),n=(0,e.default)({},[["render",s.render]])},46359:function(t,d,a){"use strict";a.r(d);var s=a("56357");a.es(s,d)},56357:function(t,d,a){"use strict";a.r(d),a.d(d,{render:function(){return r}});var s=a("38613");let e={class:"van-doc-markdown-body"},n=[(0,s.createStaticVNode)('<h1>Internationalization</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant uses Chinese as the default language. If you want to use other languages, please follow the instructions below.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="switch-languages" tabindex="-1">Switch languages</h3><p>Vant supports multiple languages with the Locale component, and the <code>Locale.use</code> method allows you to switch to different languages.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant/es/locale/lang/en-US&#39;</span>;\n\n<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;en-US&#39;</span>, enUS);\n</code></pre></div><div class="van-doc-card"><h3 id="override-default-configs" tabindex="-1">Override default configs</h3><p>Use <code>Locale.add</code> method to modify the default configs.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> messages = {\n  <span class="hljs-string">&#39;en-US&#39;</span>: {\n    <span class="hljs-attr">vanPicker</span>: {\n      <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;Close&#39;</span>,\n    },\n  },\n};\n\n<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">add</span>(messages);\n</code></pre></div><div class="van-doc-card"><h3 id="config-files" tabindex="-1">Config files</h3><p>Current supported languages:</p><table><thead><tr><th>Language</th><th>Filename</th><th>Version</th></tr></thead><tbody><tr><td>Arabic</td><td>ar-SA</td><td><code>v3.5.0</code></td></tr><tr><td>Bulgarian</td><td>bg-BG</td><td><code>v3.5.0</code></td></tr><tr><td>Bangla (Bangladesh)</td><td>bn-BD</td><td><code>v3.4.5</code></td></tr><tr><td>Danish</td><td>da-DK</td><td><code>v3.4.8</code></td></tr><tr><td>German</td><td>de-DE</td><td>-</td></tr><tr><td>German (formal)</td><td>de-DE-formal</td><td>-</td></tr><tr><td>Greek</td><td>el-GR</td><td><code>v3.5.0</code></td></tr><tr><td>English</td><td>en-US</td><td>-</td></tr><tr><td>Esperanto</td><td>eo-EO</td><td><code>v4.0.9</code></td></tr><tr><td>Spanish (Spain)</td><td>es-ES</td><td>-</td></tr><tr><td>Farsi</td><td>fa-IR</td><td><code>v3.5.0</code></td></tr><tr><td>French</td><td>fr-FR</td><td>-</td></tr><tr><td>Hebrew</td><td>he-IL</td><td><code>v3.5.0</code></td></tr><tr><td>Hindi</td><td>hi-IN</td><td><code>v3.4.3</code></td></tr><tr><td>Indonesian</td><td>id-ID</td><td><code>v3.4.5</code></td></tr><tr><td>Icelandic</td><td>is-IS</td><td><code>v3.4.7</code></td></tr><tr><td>Italian</td><td>it-IT</td><td><code>v3.4.5</code></td></tr><tr><td>Japanese</td><td>ja-JP</td><td>-</td></tr><tr><td>Khmer</td><td>km-KH</td><td><code>v4.1.2</code></td></tr><tr><td>Korean</td><td>ko-KR</td><td><code>v3.4.3</code></td></tr><tr><td>Lao</td><td>la-LA</td><td><code>v3.4.7</code></td></tr><tr><td>Mongolian</td><td>mm-MN</td><td><code>v4.0.5</code></td></tr><tr><td>Norwegian</td><td>nb-NO</td><td>-</td></tr><tr><td>Dutch</td><td>nl-NL</td><td><code>v4.0.5</code></td></tr><tr><td>Portuguese (Brazil)</td><td>pt-BR</td><td><code>v3.3.3</code></td></tr><tr><td>Romanian</td><td>ro-RO</td><td>-</td></tr><tr><td>Russian</td><td>ru-RU</td><td><code>v3.1.5</code></td></tr><tr><td>Serbian</td><td>sr-RS</td><td><code>v4.6.4</code></td></tr><tr><td>Swedish</td><td>sv-SE</td><td><code>v3.4.7</code></td></tr><tr><td>Thai</td><td>th-TH</td><td>-</td></tr><tr><td>Turkish</td><td>tr-TR</td><td>-</td></tr><tr><td>Ukrainian</td><td>uk-UA</td><td><code>v3.4.5</code></td></tr><tr><td>Vietnamese</td><td>vi-VN</td><td><code>v3.4.5</code></td></tr><tr><td>Chinese</td><td>zh-CN</td><td>-</td></tr><tr><td>Traditional Chinese (HK)</td><td>zh-HK</td><td>-</td></tr><tr><td>Traditional Chinese (TW)</td><td>zh-TW</td><td>-</td></tr></tbody></table><blockquote><p>View all language configs <a href="https://github.com/vant-ui/vant/tree/main/packages/vant/src/locale/lang" target="_blank">Here</a>.</p></blockquote></div><div class="van-doc-card"><h3 id="add-new-language" tabindex="-1">Add new language</h3><p>If you can\u2019t find the language you need, please send us a Pull Request to add the new language pack, you can refer to <a href="https://github.com/vant-ui/vant/pull/7245" target="_blank">Add German language pack</a> PR.</p></div><div class="van-doc-card"><h3 id="get-current-lang" tabindex="-1">Get Current Lang</h3><p>You can get the current language using <code>useCurrentLang</code> method.</p><ul><li><strong>Type:</strong></li></ul><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCurrentLang</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">string</span>&gt;;\n</code></pre><ul><li><strong>Example:</strong></li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { useCurrentLang } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> currentLang = <span class="hljs-title function_">useCurrentLang</span>();\n\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(currentLang.<span class="hljs-property">value</span>); <span class="hljs-comment">// --&gt; &#39;en-US&#39;</span>\n</code></pre></div>',8)];function r(t,d){return(0,s.openBlock)(),(0,s.createElementBlock)("div",e,n)}}}]);