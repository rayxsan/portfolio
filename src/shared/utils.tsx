import { useCallback, useEffect, useRef } from "react";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

export const convertToRem = (text: string) => {
  //const font = "16px times new roman";
  // context.font = font;
  //if (context) context.font = font;
  let width = Math.ceil(context!.measureText(text).width / 16);

  return width;
};

//Code reference: https://dev.to/vibhanshu909/click-outside-listener-for-react-components-in-10-lines-of-code-using-hooks-pp8
export const useClickOutsideListenerRef = (onClose: () => void) => {
  const ref = useRef(null);
  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((ref.current as any).contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      onClose();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keyup", escapeListener);
    };
  }, [escapeListener, onClose]);
  return ref;
};
