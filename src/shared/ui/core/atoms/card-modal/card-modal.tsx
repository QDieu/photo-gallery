import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ active }) => (active ? "1" : "0")};
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  transition: 0.5s;
`;

const Content = styled.div<{ active: boolean }>`
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  width: 40vw;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0.5)")};
  transition: 0.5s all;
`;

type TProps = {
  active: boolean;
  onClickHandlerModal: () => void;
  url: string;
};

export const CardModal: React.FC<TProps> = ({
  active,
  onClickHandlerModal,
  url,
}) => {
  return (
    <Wrapper
      active={active}
      onClick={(e) => {
        onClickHandlerModal();
        e.stopPropagation();
      }}
    >
      <Content active={active} onClick={(e) => e.stopPropagation()}>
        <img src={url} />
      </Content>
    </Wrapper>
  );
};
