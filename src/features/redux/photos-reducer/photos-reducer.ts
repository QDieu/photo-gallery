import { PhotosAPI } from '../../../shared/api';
import { TPhoto } from '../../../shared/types/Photo';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

const initialState = {
    photos: [] as Array<TPhoto>,
    portionSizePhotos: 20,
    portionPhotos: [] as Array<TPhoto>,
    currentPage: 1,
    pagesCount: 0,
};

type TInitialState = typeof initialState;

export const photosReducer = (state = initialState, action: TActionPhotoReducer): TInitialState => {
    switch (action.type) {
        case 'SET_PHOTO':
            let pagesCount = action.payload.length / state.portionSizePhotos;
            return {
                ...state,
                photos: [...action.payload],
                pagesCount: pagesCount,
                portionPhotos: action.payload.slice(0, state.portionSizePhotos),
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
                portionPhotos: state.photos.slice(
                    (action.payload - 1) * state.portionSizePhotos,
                    action.payload * state.portionSizePhotos,
                ),
            };
        case 'SET_PORTION_SIZE_PHOTOS' :
            return {
                ...state,
                portionSizePhotos : action.payload,
                currentPage : 1,
                pagesCount : state.photos.length / action.payload,
                portionPhotos : state.photos.slice (0, action.payload),
            };
        case 'DELETE_CARD' : 
            return {
                ...state,
                photos : state.photos.filter(photo => {return photo.id !== action.payload}),
            };
        case "UPDATE_PORTION_PHOTOS" : 
        return {...state, portionPhotos : state.photos.slice((state.currentPage - 1) * state.portionSizePhotos,
            state.currentPage * state.portionSizePhotos,)};
        default:
            return state;
    }
};

type TActionPhotoReducer = ActionTypesCreator<typeof actionPhotos>;

export const actionPhotos = {
    setPhotos: (photos: Array<TPhoto>) => ({ type: 'SET_PHOTO', payload: photos } as const),
    setCurrentPage: (currentPage: number) =>
        ({ type: 'SET_CURRENT_PAGE', payload: currentPage } as const),
    setPortionSizePhotos : (portionSizePhotos : number) => ({type : "SET_PORTION_SIZE_PHOTOS", payload : portionSizePhotos} as const),
    deleteCard : (id : number) => ({type : 'DELETE_CARD', payload : id} as const),
    updatePortionPhotos : () => ({type : 'UPDATE_PORTION_PHOTOS'} as const),
}; 

type TThunkPhotosReducer = ThunkTypeCreator<TActionPhotoReducer>;

export const fetchPhotos = (): TThunkPhotosReducer => {
    return async (dispatch) => {
        let data = await PhotosAPI.fetchPhotos();
        dispatch(actionPhotos.setPhotos(data));
    };
};
