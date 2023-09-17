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
  // routerStore.goTo("signIn", { logout: true });
};

const handleBlogClick = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  // routerStore.goTo("signIn", { logout: true });
};

const handleDashboardClick = (routerStore: RouterStore, e: any) => {
  e?.preventDefault();
  // routerStore.goTo("signIn", { logout: true });
};

export const userSiderMenuItems: IUserSiderMenuItem[] = [
  {
    title: "Profile",
    onClick: handleProfileClick,
  },
  {
    title: "Dashboard",
    onClick: handleDashboardClick,
  },
  {
    title: "Blog",
    onClick: handleBlogClick,
  },
  {
    title: "Log out",
    onClick: handleLogout,
  },
];
