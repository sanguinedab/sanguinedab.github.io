import { LuUser, LuWrench, LuGraduationCap, LuClapperboard, LuMusic } from "react-icons/lu";

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
      title: `校园经历`,
      url: `campus`,
      icon: LuGraduationCap
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