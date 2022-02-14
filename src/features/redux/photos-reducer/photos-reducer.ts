import { PhotosAPI } from '../../../shared/api';
import { TPhoto } from '../../../shared/types/Photo';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

const initialState = {
    photos: [] as Array<TPhoto>,
};

type TInitialState = typeof initialState;

export const photosReducer = (state = initialState, action: TActionPhotoReducer): TInitialState => {
    switch (action.type) {
        case 'SET_PHOTO':
            return { ...state, photos: [...action.payload] };
        default:
            return state;
    }
};

type TActionPhotoReducer = ActionTypesCreator<typeof actionPhotos>;

export const actionPhotos = {
    setPhotos: (photos: Array<TPhoto>) => ({ type: 'SET_PHOTO', payload: photos } as const),
};

type TThunkPhotosReducer = ThunkTypeCreator<TActionPhotoReducer>;

export const fetchPhotos = (): TThunkPhotosReducer => {
    return async (dispatch) => {
        let data = await PhotosAPI.fetchPhotos();
        dispatch(actionPhotos.setPhotos(data));
    };
};
