import React from 'react';
import styled from 'styled-components';

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
            box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
        }
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);

    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:before {
        content: '';
        background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
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
    width: 100%;
    padding: 20px;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
`;

type TProps = {
    url: string;
    albumId: number;
    id: number;
    title: string;
};

export const CardItem: React.FC<TProps> = ({ url, title, albumId, id }) => {
    return (
        <Wrapper>
            <img src={url} alt={'photo' + url} />
            <Dropdown>
                <Property>
                    Title : <span>{title}</span>
                </Property>
                <Property>
                    AlbumId : <span>{albumId}</span>
                </Property>
                <Property>
                    id : <span>{id}</span>
                </Property>
            </Dropdown>
        </Wrapper>
    );
};
