import { LuUser, LuWrench, LuNewspaper, LuBox, LuMusic } from "react-icons/lu";

export const sidebar = {
  userName: `sanguinedab`,
  profileImage: `https://github.com/sanguinedab.png`,
  sections: [
    {
      title: `关于我`,
      url: ``,
      icon: LuUser
    },
    {
      title: `项目`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `文章`,
      url: `articles`,
      icon: LuNewspaper
    },
    {
      title: `魔方`,
      url: `cube`,
      icon: LuBox
    },
    {
      title: `音乐`,
      url: `music`,
      icon: LuMusic
    }
  ]
};