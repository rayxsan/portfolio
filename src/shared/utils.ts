const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

export const convertToRem = (text: string) => {
  //const font = "16px times new roman";
  // context.font = font;
  //if (context) context.font = font;
  let width = Math.ceil(context!.measureText(text).width / 16);

  return width;
};
