---
cover: https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/big10.png
title: 建站小记
stiky: true
star: 1
icon: config
order: 3
category:
  - 文档
tag:
  - 主打文章
date: 2023-04-17

navbar: true
sidebar: false
breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: true
next: false
comment: true
footer: true
headerDepth: 5
backtotop: false
toc: true
---
### 高三建站的随笔

距离高考 50 天，走上了效率的不归路（bushi）。

<!-- more -->

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=39227591&auto=0&height=66"></iframe>

有人说，一直处于知识输入的状态，会忘记知识输出的优势，所以，就有了我的个人网站！！作为个人网站，“Grdoc” 主要承担着记录生活、存放思绪的作用，它也可以是我展示生活、记录生活的舞台。总的来说，博客是我的文档库的一个分支，充当和外界交流信息的接口。当然，欢迎各位在本网站投稿。作为一个前端小白，建站并不容易，在 GitHub、Gitee、腾讯云、Vercel 等平台辗转，有时回家都没打开过书包。建站对一个高三生来说确实非常的艰难，间接导致年段排名倒退30名——刚好最近在进行强基/高校专项的填报，回家后就特别忙。建站的过程非常的有趣，我从文档都看不懂到到熟悉 GitHub 的工作流，到了解网站证书和备案，到惊叹图床的便利，体会 vscode 对效率的巨大提升，体会使用 Vercel 那种行云流水般的畅快，在VSC、终端的花花绿绿中找到和电脑对话的节奏。

3 月，主要进行一些理论的准备，以及文章管理工具的选择。我开始使用 Craft, Notion, Typora, Obsidian 等编辑器，复习了 Markdown 语法。

4月上旬，开始构建博客。中间换了多种环境，包括 Docsify、Veupress、Vite 等等（其实应该先试试 WordPress 的）。其中，Veupress 比较方便，对用 md 管理文档的人来说比较省事，功能也很齐全。中途认识了 Mr.Hope 。他的项目使整个博客的构建变的非常畅通，其 Theme-Hope 可能是 Veupress 里的最优解。尝试了多种构建器，最开始在本地构建，但是，项目运行起来电脑 8 个G的内存不太够用。（中途还在 Node.js 的内存限制中摸爬滚打了好久。）后来使用腾讯云。腾讯云构建速度一般，支持从 Gitee 和 GitHub 中导入仓库，操作界面不友好，使用命令行也同样难受，搞个环境变量也得找半天。但是至少已经能从公网访问了。

腾讯云有两种使用方式，一种是静态网站托管，属于云开发范畴下，要使用它应该先开通云开发，再將本地的静态网文件通过命令行上传到服务器。另一种是 Web 应用托管，可以线上构建 GitHub 上的项目。

我的域名是在腾讯云购买，还算便宜。但是，但是，如果要使用腾讯的服务，需要將域名备案，备案是非常麻烦的，而且腾讯云要我主机钱（2G内存一个月大概50元）。因此，最后选择了 Vercel。Vercel 构建速度、访问速度非常的快。

现在的工作流：本地编辑>在VSC中上传>什么都不用做，Vercel 自动 Build>完成更新。

后续文章的更新频率应该不高，这个网站的 release 会在高考后会和大家见面。此外，网站的深色模式还没适配，请先凑合着用。

世事如苍狗，生命终凋零。在隽永的文字中寻找更丰富的生命伸张，能纂刻在我们的记忆里，拓宽人们的交流面。有人说，”程序员是互联网时代的思想家“ ，言之凿凿。面对当前 AI 改变职场秩序，新一轮变革又是在他们手中诞生，而博客正是他们记录文字的场所，就像这个网站能让我们“程序地”思考问题，发表观点。告别铅与火，跨进光与电，融合数与网，希望我的网站能成功如同人类科技进步永不止息，为我的大学布局，为未来布局。

### 建站费用

- 域名（.site）：第一年7元
- Web应用托管：按量计费，用了大概1.2元。
- 图床费用算在 COS 内，我原本就在使用腾讯云对象储存，因此，几乎不用钱。
- 腾讯云开发（个人版）：20元
- Vercel：免费
- GitHub：免费

所以说，要实现一个这样的网站，费用大概是······7元！
