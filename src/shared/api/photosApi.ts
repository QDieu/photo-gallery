import { instance } from '.';

export const PhotosAPI = {
    fetchPhotos: (id? : number) => {
        return instance
            .get(`/photos`, {
                params : id && {
                    albumId : id
                }
            })
            .then((res) => res.data)
            .catch((err) => console.error(err));
    },
};
