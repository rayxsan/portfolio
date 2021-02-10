import React, { FunctionComponent } from "react";
import { StyledCard } from "./Card.styled";

interface Props {
  title: string;
  text?: string;
  img?: {
    src: string;
  };
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
  img,
  className,
  ref,
  onClick,
}) => {
  const imagen = <div onClick={onClick} />;

  return (
    <StyledCard
      img={img !== undefined}
      src={img?.src}
      className={className}
      ref={ref}
    >
      {img && imagen}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      <div>{children}</div>
    </StyledCard>
  );
};

export default Card;
