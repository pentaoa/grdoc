import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "关于博客", icon: "discover", link: "/demo/" },
  {
    text: "博文",
    icon: "edit",
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
    icon:"edit",
    link:"/zip/"
  }
]);
