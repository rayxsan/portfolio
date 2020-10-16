import styled, { css } from "styled-components";

interface Props {
  show: boolean;
  styledType?: "simple" | "selected" | "dotted" | any;
  selectedText?: string;
}

export const StyledMenuWrapper = styled.div``;

export const StyledMainButton = styled.button.attrs<Props>((props) => ({
  show: props.show || false,
  styledType: props.type || "simple",
  selectedText: props.selectedText || "",
}))`
  display: ${(props: Props) => (props.show ? "block" : "none")};

  ${(props: Props) =>
    props.styledType === "selected" &&
    css`
      background: blue;
    `}/* ::after {
        content: " ${(props: Props) => props.selectedText}";
        display: block;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        color: #aaa;
      } */
`;

export const StyledMenuList = styled.ul.attrs<Props>((props) => ({
  show: props.show || false,
}))`
  display: ${(props: Props) => (props.show ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  button {
    border: 0;
  }
`;
