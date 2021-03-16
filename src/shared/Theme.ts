export const theme2 = {
  //Colors
  primaryColor: "#1976d2",
  secondaryColor: "#FFAF38",
  defaultColor: "#bbb",
  disabledColor: "#ccc",
  solidBackground: "#fff",
  sidebarBGColor: "rgb(0, 31, 51)",
  sidebarFontColor: "rgba(255, 255, 255, 0.65)",
  sidebarFontActiveColor: "rgba(255, 255, 255, 1)",
  headerBGColor: "#fff",
  footerBGColor: "rgb(0, 31, 51)",
  footerFontColor: "#ccc",
  fontColor: "black",
  warningColor: "#fb6944",
  successColor: "#99cc33",
  layoutColor: "rgb(247, 249, 252)",

  //Dimensions
  headerHeight: "3rem",
  footerHeight: "3rem",
  //FooterHeight + headerHeight
  mainContentMinHeight: "6rem",
  sidebarWidth: "12rem",

  //Menus
};

export const theme1 = {
  //Colors
  primaryColor: "#1976d2",
  secondaryColor: "#FFAF38",
  defaultColor: "#bbb",
  disabledColor: "#ccc",
  solidBackground: "#fff",
  sidebarBGColor: "rgb(0, 0, 0, 0.87)",
  sidebarFontColor: "rgba(255, 255, 255, 0.65)",
  sidebarFontActiveColor: "rgba(255, 255, 255, 1)",
  headerBGColor: "#fff",
  footerBGColor: "rgb(0, 31, 51)",
  footerFontColor: "#ccc",
  fontColor: "black",
  warningColor: "#fb6944",
  successColor: "#99cc33",
  layoutColor: "rgb(247, 249, 252)",

  //Dimensions
  headerHeight: "3rem",
  footerHeight: "3rem",
  //FooterHeight + headerHeight
  mainContentMinHeight: "6rem",
  sidebarWidth: "12rem",

  //Menus
};

export let theme = theme1;

export type ThemeType = typeof theme;

export const themeChanger = (theme: ThemeType) => {
  return theme;
};
