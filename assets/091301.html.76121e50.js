import{_ as p,o,c,a as n,b as t,f as l,e as s,d as e,r as i}from"./app.9a681789.js";const r={},u={class:"custom-container tip"},d=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),k=n("p",{class:"custom-container-title"},"TIP",-1),v=n("code",null,"fetch",-1),m=s(" \u5FC5\u7136\u8981\u66FF\u6362 "),h=n("code",null,"XMLHttpRequest",-1),b=s(" \uFF0C\u6240\u4EE5\u662F\u65F6\u5019\u5C1D\u8BD5 "),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"},f=s("fetch"),y=s(" \u4E86\uFF1B"),_=n("li",null,"\u672C\u5C01\u88C5\u4EC5\u9488\u5BF9npm\u5F15\u5165\uFF1B",-1),x=s("\u672C\u5C01\u88C5\u4F9D\u8D56 "),j={href:"https://github.com/github/fetch",target:"_blank",rel:"noopener noreferrer"},w=s("es6-promise"),F=s(" \u548C "),S={href:"https://github.com/stefanpenner/es6-promise",target:"_blank",rel:"noopener noreferrer"},q=s("whatwg-fetch"),I=s("\uFF0C\u5206\u522B\u5BF9 "),P=n("code",null,"promise",-1),D=s(" \u548C "),E=n("code",null,"fetch",-1),N=s(" \u8FDB\u884C\u517C\u5BB9\u6027\u5904\u7406\uFF1B"),T=s("\u8FD8\u6709\u4E00\u79CD\u517C\u5BB9\u6027\u5904\u7406\u662F\u4F9D\u8D56 "),L={href:"https://github.com/github/fetch",target:"_blank",rel:"noopener noreferrer"},O=s("es6-promise"),A=s(" \u548C"),C={href:"https://github.com/matthew-andrews/isomorphic-fetch",target:"_blank",rel:"noopener noreferrer"},M=s("isomorphic-fetch"),U=s(" \uFF0C\u4F46\u662F\u770B\u5B83\u7684\u6E90\u7801\u5C31\u4F1A\u53D1\u73B0\uFF0C"),V=n("code",null,"isomorphic-fetch",-1),B=s(" \u53EA\u4E0D\u8FC7\u662F\u5F15\u7528\u4E86 "),R=n("code",null,"whatwg-fetch",-1),W=s(" \uFF0C\u5E76\u6CA1\u6709\u505A\u4E8C\u6B21\u5F00\u53D1\uFF0C"),z=n("code",null,"isomorphic-fetch",-1),J=s(" \u53EA\u662F\u5C06fetch\u6DFB\u52A0\u4E3A\u5168\u5C40\uFF0C\u4EE5\u4FBF\u5176API\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u4FDD\u6301\u4E00\u81F4\uFF0C\u6240\u4EE5\u6CA1\u5FC5\u8981\u3002"),$=e(`<h2 id="\u5C01\u88C5\u7684\u4E3B\u8981\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7684\u4E3B\u8981\u5185\u5BB9" aria-hidden="true">#</a> \u5C01\u88C5\u7684\u4E3B\u8981\u5185\u5BB9</h2><ol><li><code>fetch</code> \u7684\u8BF7\u6C42\u65B9\u5F0F\u540C <code>$ajax</code> \u548C <code>axios</code> \u90FD\u4E0D\u592A\u4E00\u6837\uFF0C\u5E76\u4E14\u5B83\u672C\u8EAB\u7684get\u8BF7\u6C42\u540C\u5176\u4ED6\u8BF7\u6C42\u5BF9\u6570\u636E\u7684\u5904\u7406\u548Cherder\u4E5F\u4E0D\u592A\u76F8\u540C\uFF0C\u6240\u4EE5\u4E3A\u4E86\u7EDF\u4E00\u8BF7\u6C42\u884C\u4E3A\uFF0C\u65B9\u4FBF\u8BF7\u6C42\u8FC7\u7A0B\uFF0C\u5C06\u8BF7\u6C42\u8FC7\u7A0B\u8FDB\u884C\u5C01\u88C5\uFF1B</li><li><code>fetch</code> \u8BF7\u6C42\u7684\u7ED3\u679C\u5747\u8FD4\u56DE\u5230.then()\u4E2D\uFF0C\u4F46\u662F\u5E73\u65F6\u7684\u4E60\u60EF\u662F\u662F\u5728 <code>.then()</code> \u4E2D\u5904\u7406\u6B63\u786E\u7ED3\u679C\uFF0C<code>.catch()</code> \u4E2D\u5904\u7406\u9519\u8BEF\uFF0C\u6240\u4EE5\u5BF9\u8BF7\u6C42\u7ED3\u679C\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\uFF1B</li><li><code>fetch</code> \u672C\u8EAB\u6CA1\u6709 <strong>\u8BF7\u6C42\u8D85\u65F6</strong> \u8FD9\u4E2A\u6982\u5FF5\uFF0C\u6240\u4EE5\u901A\u8FC7 <code>Promise.race</code> \u6765\u5904\u7406\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u591A\u4E2Apromise\u540C\u65F6\u8FD0\u884C\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4EE5\u6700\u5FEB\u8FD4\u56DE\u7ED3\u679C\u7684\u90A3\u4E2Apromise\u7684\u503C\u4E3A\u51C6\u3002</li></ol><p>Fetch for browser.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> isntall reco-fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="including-reco-fetch" tabindex="-1"><a class="header-anchor" href="#including-reco-fetch" aria-hidden="true">#</a> Including reco-fetch</h2><h3 id="script-tag" tabindex="-1"><a class="header-anchor" href="#script-tag" aria-hidden="true">#</a> Script tag</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/node_modules/reco-fetch/dist/recoFetch.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h3><div class="language-javscript ext-javscript line-numbers-mode"><pre class="language-javscript"><code>import recoFetch from &#39;reco-fetch&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2>`,11),G=s("In addition to the parameters given below, please combine other parameters "),H={href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options",target:"_blank",rel:"noopener noreferrer"},X=s("MDN"),K=s("."),Q=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">,</span> must<span class="token punctuation">}</span></span> <span class="token parameter">url</span>    API URL
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">,</span> must<span class="token punctuation">}</span></span> <span class="token parameter">options</span> Parameter objects, including:
 *        method  <span class="token punctuation">{</span>String, optional<span class="token punctuation">}</span> Request method, default &#39;get&#39;
 *        headers <span class="token punctuation">{</span>Object, optional<span class="token punctuation">}</span> Set request header
 *        params  <span class="token punctuation">{</span>Object, optional<span class="token punctuation">}</span> url parameters
 *        body    <span class="token punctuation">{</span>Object, optional<span class="token punctuation">}</span> request body
 *        timeout <span class="token punctuation">{</span>Number, optional<span class="token punctuation">}</span> Request timeout
 *        type    <span class="token punctuation">{</span>String, optional<span class="token punctuation">}</span> When &#39;post&#39; requests, you can set: &#39;json&#39;, &#39;formData&#39;
 */</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-json" tabindex="-1"><a class="header-anchor" href="#post-json" aria-hidden="true">#</a> POST JSON</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>POST formData</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;formData&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>

<span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> form
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> PUT</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uploadfile" tabindex="-1"><a class="header-anchor" href="#uploadfile" aria-hidden="true">#</a> uploadFile</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fileField <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=&#39;file&#39;]&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> fileField<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;formData&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>

<span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fileField <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=&#39;file&#39;]&quot;</span><span class="token punctuation">)</span>

formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> fileField<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> formData
<span class="token punctuation">}</span>

<span class="token function">recoFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>`,15),Y={href:"https://github.com/recoluan/reco-fetch/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},Z=s("MIT"),nn=s("\u5982\u679C\u89C9\u5F97\u8FD8\u53EF\u4EE5\uFF0C\u6B22\u8FCE\u7ED9\u4E2A "),sn={href:"https://github.com/recoluan/reco-fetch",target:"_blank",rel:"noopener noreferrer"},an=s("Star"),tn=s("\u4E2A\u4EBA\u535A\u5BA2\uFF1A"),en={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},pn=n("strong",null,"\u5348\u540E\u5357\u6742",-1);function on(cn,ln){const a=i("ExternalLinkIcon");return o(),c("div",null,[n("div",u,[d,k,n("ul",null,[n("li",null,[v,m,h,b,n("a",g,[f,t(a)]),y]),_,n("li",null,[x,n("a",j,[w,t(a)]),F,n("a",S,[q,t(a)]),I,P,D,E,N]),n("li",null,[T,n("a",L,[O,t(a)]),A,n("a",C,[M,t(a)]),U,V,B,R,W,z,J])])]),l(" more "),$,n("p",null,[G,n("a",H,[X,t(a)]),K]),Q,n("p",null,[n("a",Y,[Z,t(a)])]),n("p",null,[n("strong",null,[nn,n("a",sn,[an,t(a)])])]),n("p",null,[tn,n("a",en,[pn,t(a)])])])}const un=p(r,[["render",on],["__file","091301.html.vue"]]);export{un as default};
