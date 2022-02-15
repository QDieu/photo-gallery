import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../../features/redux/photos-reducer';
import { TAppState } from '../../../features/redux/store';
import { TPhoto } from '../../../shared/types/Photo';
import { CardRow } from '../../../shared/ui/core/molecules';

export const CardRowConnector: React.FC<{}> = () => {
    let dispatch = useDispatch();
    let photos = useSelector((state: TAppState) => state.photos.portionPhotos);

    React.useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    return <CardRow photos={photos} />;
};
