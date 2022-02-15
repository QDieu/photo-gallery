import { PhotosAPI } from '../../../shared/api';
import { TPhoto } from '../../../shared/types/Photo';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

const initialState = {
    photos: [] as Array<TPhoto>,
    portionNumber: 20,
    portionPhotos: [] as Array<TPhoto>,
    currentPage: 1,
    pagesCount: 0,
};

type TInitialState = typeof initialState;

export const photosReducer = (state = initialState, action: TActionPhotoReducer): TInitialState => {
    switch (action.type) {
        case 'SET_PHOTO':
            let pagesCount = action.payload.length / state.portionNumber;
            return {
                ...state,
                photos: [...action.payload],
                pagesCount: pagesCount,
                portionPhotos: action.payload.slice(0, state.portionNumber),
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
                portionPhotos: state.photos.slice(
                    (action.payload - 1) * state.portionNumber,
                    action.payload * state.portionNumber,
                ),
            };
        default:
            return state;
    }
};

type TActionPhotoReducer = ActionTypesCreator<typeof actionPhotos>;

export const actionPhotos = {
    setPhotos: (photos: Array<TPhoto>) => ({ type: 'SET_PHOTO', payload: photos } as const),
    setCurrentPage: (currentPage: number) =>
        ({ type: 'SET_CURRENT_PAGE', payload: currentPage } as const),
};

type TThunkPhotosReducer = ThunkTypeCreator<TActionPhotoReducer>;

export const fetchPhotos = (): TThunkPhotosReducer => {
    return async (dispatch) => {
        let data = await PhotosAPI.fetchPhotos();
        dispatch(actionPhotos.setPhotos(data));
    };
};
