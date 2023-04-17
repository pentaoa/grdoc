import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "关于",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      icon:"edit",
      text:"存档",
      link:"zips/",
      prefix:"zips/",
      children:"structure",
    }
  ],
});
