import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "关于博客", link: "/demo/"},
  {
    text: "博文",
    prefix: "/posts/",
    children: [
      {
        text: "Banana",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
    ],
  },
  { 
    text:"存档",
    
    link:"/zip/"
  }
]);
