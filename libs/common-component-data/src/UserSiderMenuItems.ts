import { RouterStore } from "mobx-state-router";

interface IUserSiderMenuItem {
  title: string;
  onClick: (routerStore: RouterStore, e: any) => void;
}

const handleLogout = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  /**
   * avoid calling this during development
   */
  routerStore.goTo("signIn", { logout: true });
};

const handleProfileClick = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  routerStore.goTo("userProfile");
};

// const handleBlogClick = (routerStore: RouterStore, e: any) => {
//   e?.preventDefault();
//   // routerStore.goTo("signIn", { logout: true });
// };

const handleDashboardClick = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  routerStore.goTo("dashboard");
};

const handleLeaderBoardsClick = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  routerStore.goTo("leaderboardsList");
};

export const userSiderMenuItems: IUserSiderMenuItem[] = [
  {
    title: "Profile",
    onClick: handleProfileClick,
  },
  {
    title: "Leaderboards",
    onClick: handleLeaderBoardsClick,
  },
  {
    title: "Dashboard",
    onClick: handleDashboardClick,
  },
  // {
  //   title: "Blog",
  //   onClick: handleBlogClick,
  // },
  {
    title: "Log out",
    onClick: handleLogout,
  },
];
