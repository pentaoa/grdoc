import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "博文",
    link: "/posts/",
  },
  { 
    text: "关于博客", 
    link: "/demo/"
  },
  { 
    text:"存档",
    link:"/zips/",
  },
  {
    text:"标签",
    link:"/tag/",
  },
  {
    text:"时间轴",
    link:"/timeline/",
  },
]);
