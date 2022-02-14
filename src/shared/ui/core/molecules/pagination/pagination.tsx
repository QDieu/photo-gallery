import React from 'react';
import styled from 'styled-components';

type TStyle = {
    disabled: boolean;
    active: boolean;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.div<TStyle>`
    margin: 8px;

    padding: 4px;

    width: 32px;
    height: 32px;

    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ active }) => (active ? '#4200FF' : '#dfe3e8')};

    background-color: ${({ disabled }) => (disabled ? '#919EAB' : '#fff')};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: ${({ active }) => (active ? '#4200FF' : '#C4CDD5')};

    &:hover {
        color: ${({ disabled }) => (disabled ? '' : '#4200ff')};
        border-color: ${({ disabled }) => (disabled ? '' : '#4200ff')};
    }
`;

type TProps = {
    portionSize?: number;
    pageCount?: number;
    portionNumber?: number;
};

export const Pagination: React.FC<TProps> = ({
    portionSize = 5,
    pageCount = 10,
    portionNumber = 1,
}) => {
    const getPaginationGroup = () => {
        return new Array(portionSize)
            .fill(0)
            .map((_, idx) => portionSize * (portionNumber - 1) + idx + 1);
    };

    return (
        <Wrapper>
            <Button onClick={() => {}} disabled={true} active={false}>
                &#60;
            </Button>
            <Button onClick={() => {}} disabled={true} active={false}>
                prev
            </Button>

            {getPaginationGroup()
                .filter((p) => p >= 1 && p <= 10)
                .map((item, index) => (
                    <Button key={index} onClick={() => {}} disabled={false} active={false}>
                        {item}
                    </Button>
                ))}

            <Button onClick={() => {}} disabled={false} active={false}>
                next
            </Button>
            <Button onClick={() => {}} disabled={true} active={false}>
                &#62;
            </Button>
        </Wrapper>
    );
};
