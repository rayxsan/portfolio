const theme1 = {
  //Colors
  primaryColor: "#7467ef",
  secondaryColor: "#222A45",
  fontColor: "#fff",
  backgroundColor: "#222A45",
  solidBackground: "#7467ef",

  //Dimensions
  headerHeight: "4rem",
  footerHeight: "4rem",
  sidebarWidth: "12rem",

  //Menus
  MENUS: [
    {
      name: "Simple Menu",
      header: "Open Menu",
      items: [{ value: "Profile" }, { value: "My account" }, { value: "Logout" }],
    },
    {
      name: "Selected Menu",
      header: "When device is locked",
      items: [
        { value: "Fly to the moon" },
        { value: "Show all notification content" },
        { value: "Hide sensitive notification content" },
        { value: "Hide all notification content" },
      ],
    },
  ],
};

export const theme = theme1;

export type ThemeType = typeof theme;
