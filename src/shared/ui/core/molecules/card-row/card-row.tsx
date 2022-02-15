import React from "react";
import styled from "styled-components";
import { TPhoto } from "../../../../types/Photo";
import { CardItem } from "../../atoms";

const GridWrapper = styled.div``;

const Wrapper = styled.div`
  padding: 32px;
  display: grid;

  gap: 15px;
  grid-template-columns: repeat(4, 1fr);

  & ${GridWrapper}:nth-child(4n - 3) {
    grid-column: 1/4;
  }

  & ${GridWrapper}:nth-child(4n - 2) {
    grid-column: 4/5;
  }

  & ${GridWrapper}:nth-child(4n - 1) {
    grid-column: 1/2;
  }

  & ${GridWrapper}:nth-child(4n) {
    grid-column: 2/5;
  }

  @media screen and (max-width: 991px) {
    & {
      grid-template-columns: 1fr 1fr;
    }

    & ${GridWrapper}:nth-child(4n - 3) {
      grid-column: 1/2;
    }

    & ${GridWrapper}:nth-child(4n - 2) {
      grid-column: 2/3;
    }

    & ${GridWrapper}:nth-child(4n - 1) {
      grid-column: 1/2;
    }

    & ${GridWrapper}:nth-child(4n) {
      grid-column: 2/3;
    }
  }

  @media screen and (max-width: 479px) {
    & {
      grid-template-columns: 100%;
    }
  }
`;

type TProps = {
  photos: Array<TPhoto>;
  deleteCard: (value: number) => void;
  setFilter: (value: number) => void;
};

export const CardRow: React.FC<TProps> = ({
  photos,
  deleteCard,
  setFilter,
}) => {
  return (
    <Wrapper>
      {photos.map((item) => (
        <GridWrapper>
          <CardItem
            photo={item}
            deleteCard={deleteCard}
            setFilter={setFilter}
          />
        </GridWrapper>
      ))}
    </Wrapper>
  );
};
