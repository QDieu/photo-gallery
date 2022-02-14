import { instance } from '.';

export const PhotosAPI = {
    fetchPhotos: () => {
        return instance
            .get(`/photos`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    },
};
