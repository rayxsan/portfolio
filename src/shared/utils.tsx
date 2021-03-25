import { useCallback, useEffect, useRef, useState } from "react";

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

interface useWindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<useWindowSizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
