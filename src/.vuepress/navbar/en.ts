import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "关于博客", 
    link: "/demo/"
  },
  {
    text: "博文",
    link: "/posts/",
  },
  { 
    text:"存档",
    link:"/zips/",
  },
]);
