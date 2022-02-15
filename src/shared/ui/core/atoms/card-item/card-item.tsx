import React from "react";
import styled from "styled-components";
import { CardModal } from "..";
import { TPhoto } from "../../../../types/Photo";

const Property = styled.div`
  opacity: 0;
  position: relative;
  top: 100px;
  transition: 0s 0.2s top, opacity;

  margin: 4px;

  &:nth-child(2) span {
    display: inline-block;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 15px;

    cursor: pointer;

    transition: 0.2s all;

    &:hover {
      color: #fff;
      border-color: #fff;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    }
  }

  &:nth-child(4) {
    margin-top: 8px;

    & span {
      margin-right: 5px;

      display: inline-block;
      border: 1px solid black;
      padding: 0 15px;
      border-radius: 15px;

      cursor: pointer;

      transition: 0.2s all;

      &:hover {
        color: #fff;
        border-color: #fff;
        box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:before {
    content: "";
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    width: 100%;
    height: 50%;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    transition: 0.3s top, opacity;
  }

  &:focus:before,
  &:focus ${Property}, &:hover:before,
  &:hover:hover ${Property} {
    opacity: 1;
  }

  &:focus:before,
  &:hover:before {
    top: 50%;
  }

  &:focus ${Property}, &:hover ${Property} {
    top: 0;
  }
`;

const Dropdown = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

type TProps = {
  photo: TPhoto;
  deleteCard: (value: number) => void;
  setFilter: (value: number) => void;
};

export const CardItem: React.FC<TProps> = ({
  photo,
  deleteCard,
  setFilter,
}) => {
  const onClickHandler = () => {
    deleteCard(photo.id);
  };

  const [active, setActive] = React.useState(false);

  const onClickHandlerModal = () => {
    setActive(false);
  };

  const onClickHandlerFilter = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.currentTarget.textContent && setFilter(+e.currentTarget.textContent);
  };

  return (
    <Wrapper>
      <img src={photo.thumbnailUrl} alt={"photo" + photo.thumbnailUrl} />
      <Dropdown>
        <Property>
          Title : <span>{photo.title}</span>
        </Property>
        <Property>
          AlbumId : <span onClick={onClickHandlerFilter}>{photo.albumId}</span>
        </Property>
        <Property>
          id : <span>{photo.id}</span>
        </Property>
        <Property>
          <span onClick={onClickHandler}>Удалить</span>
          <span onClick={() => setActive(true)}>Увеличить</span>
        </Property>
      </Dropdown>
      <CardModal
        active={active}
        onClickHandlerModal={onClickHandlerModal}
        url={photo.url}
      />
    </Wrapper>
  );
};
