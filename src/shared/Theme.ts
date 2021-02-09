const theme1 = {
  //Colors
  primaryColor: "#1976d2",
  secondaryColor: "#FFAF38",
  defaultColor: "#000",
  disabledColor: "#bbb",
  solidBackground: "#fff",
  sidebarBGColor: "rgba(0,0,0,.85)",
  headerBGColor: "#fff",
  footerBGColor: "rgba(0,0,0,.85)",
  sidebarFontColor: "#fff",
  footerFontColor: "#ccc",
  fontColor: "black",

  //Dimensions
  headerHeight: "3rem",
  footerHeight: "3rem",
  //FooterHeight + headerHeight
  mainContentMinHeight: "6rem",
  sidebarWidth: "12rem",

  //Menus
};

export const theme = theme1;

export type ThemeType = typeof theme;
