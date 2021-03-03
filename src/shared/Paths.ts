const dashboardPath = "/";
const buttonPath = "/components/button";
const chartPath = "/components/chart";
const checkboxPath = "/components/checkbox";
const progressPath = "/components/progress";
const radioPath = "/components/radio";
const menuPath = "/components/menu";
const cardPath = "/components/card";
const dropdownPath = "/components/dropdown";
const formPath = "/components/form";
const tablePath = "/components/table";
const signinPath = "/auth/signin";
const signupPath = "/auth/signup";
const passwordResetPath = "/auth/reset_password";
const privatePagePath = "/auth/signin/private_page";
const profilePath = "/pages/profile";
const notFoundPath = "*";

const validPath = (value: string) => {
  const validRoutes = [
    dashboardPath,
    buttonPath,
    chartPath,
    checkboxPath,
    progressPath,
    radioPath,
    menuPath,
    cardPath,
    dropdownPath,
    formPath,
    tablePath,
    signinPath,
    signupPath,
    passwordResetPath,
    privatePagePath,
    profilePath,
    notFoundPath,
  ];
  for (let i = 0; i < validRoutes.length; i++) {
    if (value === validRoutes[i]) return true;
  }
  return false;
};

export {
  dashboardPath,
  buttonPath,
  chartPath,
  checkboxPath,
  progressPath,
  radioPath,
  menuPath,
  cardPath,
  dropdownPath,
  formPath,
  tablePath,
  signinPath,
  signupPath,
  passwordResetPath,
  privatePagePath,
  profilePath,
  notFoundPath,
};

export default validPath;
