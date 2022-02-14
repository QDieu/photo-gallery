import React from 'react';
import styled from 'styled-components';
import { TPhoto } from '../../../../types/Photo';
import { CardItem } from '../../atoms';

const GridWrapper = styled.div``;

const Wrapper = styled.div`
    background-color: skyblue;
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
`;

type TProps = {
    photos: Array<TPhoto>;
};

export const CardRow: React.FC<TProps> = ({ photos }) => {
    console.log(photos);
    return (
        <Wrapper>
            {photos.map((item) => (
                <GridWrapper>
                    <CardItem
                        albumId={item.albumId}
                        id={item.id}
                        title={item.title}
                        url={item.thumbnailUrl}
                    />
                </GridWrapper>
            ))}
        </Wrapper>
    );
};
