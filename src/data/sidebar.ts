import { LuUser, LuWrench, LuNewspaper, LuClapperboard, LuMusic } from "react-icons/lu";

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
      title: `电影`,
      url: `movies`,
      icon: LuClapperboard
    },
    {
      title: `音乐`,
      url: `music`,
      icon: LuMusic
    }
  ]
};