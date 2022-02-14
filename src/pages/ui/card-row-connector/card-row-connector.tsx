import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../../features/redux/photos-reducer';
import { TAppState } from '../../../features/redux/store';
import { TPhoto } from '../../../shared/types/Photo';
import { CardRow } from '../../../shared/ui/core/molecules';

export const CardRowConnector: React.FC<{}> = () => {
    let dispatch = useDispatch();
    let photos = useSelector((state: TAppState) => state.photos.photos);

    React.useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    const [mockData, setMockData] = React.useState<Array<TPhoto>>([]);

    React.useEffect(() => {
        if (photos[0] === undefined) return;
        for (let i = 0; i < 20; i++) {
            setMockData((prevState) => [...prevState, photos[i]]);
        }
    }, [photos]);

    return <CardRow photos={mockData} />;
};
