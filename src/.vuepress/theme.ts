import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "鲲鹏",
    url: "https://github.com/pentaoa",
  },

  iconAssets: [
    "https://at.alicdn.com/t/c/font_4018576_t81f3kv3g9m.css",
    "iconfont",
  ],

  logo: "logo.svg",

  repo: "https://github.com/pentaoa/grdoc",

  docsDir: "src",

  themeColor: {
    blue: "#2196f3",
    green: "#27ae60",
  },
  
  contributors: false,
  lastUpdated: true,
  editLink: false,
  fullscreen: true,  
  rtl: false,
  backToTop: false,
  
  blog: {
    roundAvatar: false,
    medias: {
      BiliBili: "https://space.bilibili.com/272294799",
      Gitee: "https://gitee.com/pentaoa",
      GitHub: "https://github.com/pentaoa",
    },
  },
  
  //darkmode: "disable",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "欢迎来到我的小破站~",

      displayFooter: true,

      blog: {
        description: "贫乏就是富足，自律产生喜悦",
        intro: "/intro.html",
      },

    },

    /**
     * Chinese locale config
     */
  },


  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "pentaoa/grdoc",
      repoId: "R_kgDOJXMhaA",
      category: "Announcements",
      categoryId: "DIC_kwDOJXMhaM4CV16d",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: false,
      echarts: true,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,

      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: false,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
