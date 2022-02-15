import e from "express";
import React from "react";
import styled from "styled-components";

type TStyle = {
  disabled: boolean;
  active: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div<TStyle>`
  margin: 8px;

  padding: 4px;

  width: 32px;
  height: 32px;

  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ active }) => (active ? "#4200FF" : "#dfe3e8")};

  background-color: ${({ disabled }) => (disabled ? "#919EAB" : "#fff")};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: ${({ active }) => (active ? "#4200FF" : "#C4CDD5")};

  &:hover {
    color: ${({ disabled }) => (disabled ? "" : "#4200ff")};
    border-color: ${({ disabled }) => (disabled ? "" : "#4200ff")};
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  margin-left: 16px;
  padding: 8px;

  width: 100px;
  height: 36px;

  border: 1px solid #dfe3e8;
  border-radius: 16px;

  &:focus,
  &:active {
    outline: none;
    border: 2px solid #4200ff;
  }
`;

const Label = styled.label`
  margin-left: 8px;
  font-weight: 200;
`;

type TProps = {
  portionSize: number;
  pagesCount: number;
  portionNumber: number;
  setPortionNumber: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  setPortionSizePhotos: (value: number) => void;
};

export const Pagination: React.FC<TProps> = ({
  portionSize = 5,
  pagesCount = 10,
  portionNumber = 1,
  setPortionNumber,
  currentPage,
  setCurrentPage,
  setPortionSizePhotos,
}) => {
  const getPaginationGroup = () => {
    return new Array(portionSize)
      .fill(0)
      .map((_, idx) => portionSize * (portionNumber - 1) + idx + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let input = e.currentTarget.children[0] as HTMLInputElement;
    if (input.value == "") setPortionSizePhotos(10);
    else setPortionSizePhotos(+input.value);
  };

  return (
    <Wrapper>
      <Button
        onClick={() =>
          portionNumber !== 1 && setPortionNumber(portionNumber - 1)
        }
        disabled={portionNumber === 1}
        active={false}
      >
        &#60;
      </Button>
      <Button
        onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        active={false}
      >
        prev
      </Button>

      {getPaginationGroup()
        .filter((p) => p >= 1 && p <= pagesCount)
        .map((item, index) => (
          <Button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={false}
            active={item === currentPage}
          >
            {item}
          </Button>
        ))}

      <Button
        onClick={() =>
          currentPage !== pagesCount && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === pagesCount}
        active={false}
      >
        next
      </Button>
      <Button
        onClick={() =>
          portionNumber < pagesCount / portionSize &&
          setPortionNumber(portionNumber + 1)
        }
        disabled={!(portionNumber < pagesCount / portionSize)}
        active={false}
      >
        &#62;
      </Button>
      <form onSubmit={handleSubmit}>
        <Input />
        <Label>Количество фоток на странице</Label>
      </form>
    </Wrapper>
  );
};
