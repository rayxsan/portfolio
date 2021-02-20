import React, { FunctionComponent } from "react";
import { StyledContentBox } from "./ContentBox.styled";

interface Props {
  title: string;
  text?: string;
  // img?: {
  //   src: string;
  //   tooltip?: string;
  // };
  className?: string;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Card: FunctionComponent<Props> = ({
  title,
  text,
  children,
  //img,
  className,
  ref,
  onClick,
}) => {
  //const imagen = <div onClick={onClick} title={img?.tooltip} />;

  return (
    <StyledContentBox
      // img={img !== undefined}
      // src={img?.src}
      className={className}
      ref={ref}
    >
      {/* {img && imagen} */}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      <div>{children}</div>
    </StyledContentBox>
  );
};

export default Card;
