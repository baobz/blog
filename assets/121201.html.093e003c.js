import{_ as t,o as l,c as r,a as n,b as a,f as c,e as s,d as i,r as o}from"./app.9a681789.js";const d={},p={class:"custom-container tip"},u=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),v=n("p",{class:"custom-container-title"},"TIP",-1),m=s("\u5728\u6211\u4EEC\u5B8C\u6210\u9879\u76EE\u5F00\u53D1\u540E\uFF0C\u63D0\u4EA4\u5230git\uFF0C\u5F53\u76D1\u542C\u63D0\u4EA4\u540E\uFF0C\u81EA\u52A8\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5E76\u8FDB\u884C\u9879\u76EE\u7684\u90E8\u7F72\uFF0C\u662F\u4E0D\u662F\u4E00\u60F3\u5C31\u5F88\u723D\uFF0C\u6240\u4EE5\u4E0B\u9762\u5F15\u5165\u6211\u4EEC\u7684\u4E3B\u89D2 \u2014\u2014 gitlab-CI\uFF0C"),b={href:"https://fennay.github.io/gitlab-ci-cn/",target:"_blank",rel:"noopener noreferrer"},h=s("\u4E2D\u6587\u6587\u6863"),g=s("\u3002"),k=i(`<h2 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci" aria-hidden="true">#</a> Gitlab CI</h2><p>Gitlab-CI \u662F GitLab Continuous Integration\uFF08Gitlab\u6301\u7EED\u96C6\u6210\uFF09\u7684\u7B80\u79F0\u3002 \u4ECEGitlab\u76848.0\u7248\u672C\u5F00\u59CB\uFF0Cgitlab\u5C31\u5168\u9762\u96C6\u6210\u4E86Gitlab-CI,\u5E76\u4E14\u5BF9\u6240\u6709\u9879\u76EE\u9ED8\u8BA4\u5F00\u542F\u3002 \u53EA\u8981\u5728\u9879\u76EE\u4ED3\u5E93\u7684\u6839\u76EE\u5F55\u6DFB\u52A0.gitlab-ci.yml\u6587\u4EF6\uFF0C\u5E76\u4E14\u914D\u7F6E\u4E86Runner\uFF08\u8FD0\u884C\u5668\uFF09\uFF0C\u90A3\u4E48\u6BCF\u4E00\u6B21\u5408\u5E76\u8BF7\u6C42\uFF08MR\uFF09\u6216\u8005push\u90FD\u4F1A\u89E6\u53D1CI pipeline\u3002</p><h2 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner" aria-hidden="true">#</a> Gitlab-Runner</h2><h4 id="\u5B89\u88C5gitlab-ci-multi-runner-linux" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5gitlab-ci-multi-runner-linux" aria-hidden="true">#</a> \u5B89\u88C5gitlab-ci-multi-runner\uFF08linux\uFF09</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0yum\u6E90</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>

<span class="token comment"># \u5B89\u88C5</span>
yum <span class="token function">install</span> gitlab-ci-multi-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528-gitlab-ci-multi-runner-\u6CE8\u518C-specific-runners" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-gitlab-ci-multi-runner-\u6CE8\u518C-specific-runners" aria-hidden="true">#</a> \u4F7F\u7528 gitlab-ci-multi-runner \u6CE8\u518C Specific Runners</h4><p><img src="https://upload-images.jianshu.io/upload_images/4660406-23e31a052864a7a0.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="runners.jpg"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ gitlab-ci-multi-runner register
Running <span class="token keyword">in</span> system-mode.

Please enter the gitlab-ci coordinator URL <span class="token punctuation">(</span>e.g. https://gitlab.com/<span class="token punctuation">)</span>:
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u4F60\u7684URL

Please enter the gitlab-ci token <span class="token keyword">for</span> this runner:
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u4F60\u7684Token

Please enter the gitlab-ci description <span class="token keyword">for</span> this runner:
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u4F60\u5BF9\u8BE5runner\u7684\u63CF\u8FF0

Please enter the gitlab-ci tags <span class="token keyword">for</span> this runner <span class="token punctuation">(</span>comma separated<span class="token punctuation">)</span>:
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u8BE5runner\u7684\u6807\u7B7E

Whether to run untagged builds <span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>:
<span class="token punctuation">[</span>false<span class="token punctuation">]</span>: <span class="token boolean">true</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u662F\u5426\u8FD0\u884C\u6CA1\u6709\u6807\u8BB0\u7684\u9879\u76EE\uFF08\u540E\u671F\u53EF\u4EE5\u6539\uFF09

Whether to lock Runner to current project <span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>:
<span class="token punctuation">[</span>false<span class="token punctuation">]</span>:

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u662F\u5426\u9501\u5B9A\u53EA\u8FD0\u884C\u5F53\u524D\u9879\u76EE\uFF08\u540E\u671F\u53EF\u4EE5\u6539\uFF09

Registering runner<span class="token punctuation">..</span>. succeeded                     <span class="token assign-left variable">runner</span><span class="token operator">=</span>9e48baqx

Please enter the executor: parallels, docker+machine, ssh, virtualbox, docker-ssh+machine, kubernetes, docker, docker-ssh, shell:

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> \u9009\u62E9runner\u7684\u7C7B\u578B\uFF08\u6839\u636E\u4F60\u7684\u9700\u6C42\u9009\u62E9\uFF0C\u6211\u9009\u62E9\u7684shell\uFF0C\u6211\u7684\u9879\u76EE\u662Fnode\u9879\u76EE\uFF09

Runner registered successfully. Feel <span class="token function">free</span> to start it, but <span class="token keyword">if</span> it&#39;s running already the config should be automatically reloaded<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("ol",null,[n("li",null,[s("\u9996\u5148\u4F60\u7684\u9879\u76EE\u4E2D\u7684 "),n("code",null,"getlab-runner.yml"),s(" \u6587\u4EF6\u4E2D\u7684\u547D\u4EE4\u9700\u8981\u7684\u73AF\u5883\uFF0C\u4F60\u7684runner\u6240\u5728\u7684\u670D\u52A1\u5668\u662F\u5FC5\u987B\u8981\u642D\u597D\u7684\uFF0C\u5FC5\u987B\u4F60\u9700\u8981\u6267\u884C "),n("code",null,"npm install"),s(" \u548C "),n("code",null,"npm run build"),s(" \uFF0C\u90A3\u4F60\u7684\u670D\u52A1\u5668\u5FC5\u987B\u8981\u6709node\u73AF\u5883\uFF1B")]),n("li",null,"runner\u7684\u7C7B\u578B\u6BD4\u8F83\u91CD\u8981\uFF0C\u4F60\u5FC5\u987B\u8981\u6E05\u695A\u4F60\u9700\u8981\u4E00\u4E2A\u4EC0\u4E48\u7C7B\u578B\u7684runner\u3002\u6BD4\u5982\uFF0C\u5F00\u59CB\u6211\u662F\u9700\u8981\u4E00\u4E2A\u80FD\u591F\u8FD0\u884Cnode\u9879\u76EE\u7684runner\uFF0C\u4F46\u662F\u7F51\u4E0A\u7684\u5F88\u591A\u6559\u7A0B\u7EDF\u4E00\u90FD\u662F\u90FD\u9009\u62E9docker\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u7535\u8111\u4E0A\u5FC5\u987B\u8981\u5B89\u88C5\u4E86docker\u624D\u53EF\u4EE5\uFF0C\u56E0\u4E3A\u8FD9\u76F8\u5F53\u4E8E\u5728docker\u91CC\u9762\u53C8\u5B89\u88C5\u4E86\u4E00\u4E2Adocker\uFF08docker in docker\uFF09\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u6211\u7684\u9700\u6C42\u6765\u8BF4\uFF0C\u6211\u9009\u62E9shell\u5C31\u53EF\u4EE5\u4E86\uFF1B"),n("li",null,[s("\u901A\u8FC7Gitlab\u4E2D\u67D0\u4E2A\u9879\u76EE\u7684 "),n("code",null,"Settings"),s(" \u4E0B\u7684 "),n("code",null,"CI/CD Pipelines"),s(" \u6309\u94AE\u8FDB\u5165\u7684\u9875\u9762\u4E2D\u5F97\u5230\u7684URL\u548CToken\u6240\u6CE8\u518C\u7684runner\u53EA\u670D\u52A1\u4E8E\u672C\u9879\u76EE\uFF0C\u5F53\u4F60\u5728\u5176\u4ED6\u9879\u76EE\u7684\u5F53\u524D\u9875\u9762\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9\u8BA9\u8FD9\u4E2Arunner\u4E3A\u5F53\u524D\u9879\u76EE\u5F00\u542F\u670D\u52A1\u3002")])])],-1),_=i(`<h2 id="\u914D\u7F6E-gitlab-runner-yml" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-gitlab-runner-yml" aria-hidden="true">#</a> \u914D\u7F6E gitlab-runner.yml</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mage: node:9.11.1

pages:
 cache:
   paths:
   - node_modules/

 script:
 - cnpm <span class="token function">install</span>
 - <span class="token function">npm</span> run build
 - <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /data/ftp/http/files/scfAdminDoc
 - <span class="token function">sudo</span> <span class="token function">mv</span> ./scfAdminDoc /data/ftp/http/files/
 artifacts:
   paths:
   - public
 only:
 - master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x=s("\u5177\u4F53\u914D\u7F6E\u89C1"),w={href:"https://fennay.github.io/gitlab-ci-cn/gitlab-ci-yaml.html",target:"_blank",rel:"noopener noreferrer"},y=s("\u6587\u6863"),I=i(`<h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h4 id="\u4EE3\u7801\u63A8\u9001\u5230gitlab\u4E0A\u4E4B\u540E-\u4E00\u76F4\u662Fpending\u72B6\u6001-\u8981\u7B49\u5F88\u4E45\u624Dpick\u5230\u4E00\u4E2Arunner\u6765\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u63A8\u9001\u5230gitlab\u4E0A\u4E4B\u540E-\u4E00\u76F4\u662Fpending\u72B6\u6001-\u8981\u7B49\u5F88\u4E45\u624Dpick\u5230\u4E00\u4E2Arunner\u6765\u6267\u884C" aria-hidden="true">#</a> \u4EE3\u7801\u63A8\u9001\u5230gitlab\u4E0A\u4E4B\u540E\uFF0C\u4E00\u76F4\u662Fpending\u72B6\u6001\uFF0C\u8981\u7B49\u5F88\u4E45\u624Dpick\u5230\u4E00\u4E2Arunner\u6765\u6267\u884C</h4><p>\u8FD9\u4E2A\u73B0\u8C61\u4E00\u822C\u53D1\u751F\u5728\u672C\u673A\u6CE8\u518C\u4E86\u591A\u4E2Arunner\uFF0C\u4E4B\u524D\u7684\u90FD\u5220\u9664\u4E86\uFF0C\u53EA\u7559\u4E0B\u4E00\u4E2A\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u5728gitlab\u7BA1\u7406\u5E73\u53F0\u79FB\u9664\u4E86\u67D0\u4E2Arunner\u7684\u65F6\u5019\uFF0C\u5E76\u6CA1\u6709\u5B8C\u5168\u5220\u9664\u8BB0\u5F55\uFF0C\u5F53\u6267\u884C\u7684 <code>gitlab-ci-multi-runner list</code> \u7684\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\u5B83\u4ECD\u7136\u8FD8\u5728\uFF0C\u5982\u679C\u9700\u8981\u5F7B\u5E95\u5220\u9664\u5B83\uFF0C\u8FD8\u5E94\u8BE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/gitlab-runner
<span class="token function">ls</span>

<span class="token comment"># \u4F60\u4F1A\u770B\u5230config.toml\u6587\u4EF6\uFF0C\u6253\u5F00\u5B83\u5E76\u5220\u9664\u5DF2\u6709\u7684\u90A3\u4E9Brunner\u8BB0\u5F55</span>
<span class="token function">vim</span> config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u914D\u7F6Enode\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Enode\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6Enode\u73AF\u5883</h4><ol><li>\u4E0B\u8F7Dnode-v9.11.1-linux-x64.tar.xz\u6587\u4EF6</li><li>\u4F8B\u5982\u653E\u5728 <code>/home</code> \u6587\u4EF6\u5939<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u6240\u5728\u76EE\u5F55\uFF0C\u89E3\u538B</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> node-v9.11.1-linux-x64.tar.xz

<span class="token comment"># \u91CD\u547D\u540D\u6587\u4EF6\u5939</span>
<span class="token function">mv</span> node-v9.11.1-linux-x64 nodejs

<span class="token comment"># \u5EFA\u7ACB\u8F6F\u94FE\u63A5\uFF0C\u914D\u7F6E\u5168\u5C40\u73AF\u5883\u53D8\u91CF\uFF08\u6E90\u8DEF\u5F84\u548C\u76EE\u6807\u8DEF\u5F84\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF09</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/nodejs/bin/npm /usr/local/bin/
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/nodejs/bin/node /usr/local/bin/

<span class="token comment"># \u68C0\u67E5\u662F\u5426\u914D\u7F6E\u6210\u529F</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="scp\u4E0A\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#scp\u4E0A\u4E0A\u4F20" aria-hidden="true">#</a> scp\u4E0A\u4E0A\u4F20</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u666E\u901A</span>
<span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/
<span class="token function">scp</span> \u6E90\u8DEF\u5F84/\u6E90\u6587\u4EF6 \u7528\u6237\u540D<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@\u670D\u52A1\u5668IP:\u76EE\u6807\u8DEF\u5F84


<span class="token comment"># \u514D\u5BC6\u7801</span>
yum <span class="token function">install</span> sshpass
sshpass <span class="token parameter variable">-p</span> <span class="token number">111111</span> <span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/
sshpass <span class="token parameter variable">-p</span> \u5BC6\u7801 <span class="token function">scp</span> \u6E90\u8DEF\u5F84/\u6E90\u6587\u4EF6 \u7528\u6237\u540D<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@\u670D\u52A1\u5668IP:\u76EE\u6807\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u4E0B\u8F7D\uFF0C\u8C03\u6362\u987A\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> root@192.168.0.226:/data/ftp/http/files/ ./public/*
<span class="token function">scp</span> \u7528\u6237\u540D<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@\u670D\u52A1\u5668IP:\u76EE\u6807\u8DEF\u5F84 \u6E90\u8DEF\u5F84/\u6E90\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),C=s("\u4E2A\u4EBA\u535A\u5BA2\uFF1A"),R={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},P=n("strong",null,"\u5348\u540E\u5357\u6742",-1);function j(G,L){const e=o("ExternalLinkIcon");return l(),r("div",null,[n("div",p,[u,v,n("p",null,[m,n("a",b,[h,a(e)]),g])]),c(" more "),k,f,_,n("p",null,[x,n("a",w,[y,a(e)])]),I,n("p",null,[C,n("a",R,[P,a(e)])])])}const M=t(d,[["render",j],["__file","121201.html.vue"]]);export{M as default};
