import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionPhotos,
  fetchPhotos,
  setFilterId,
} from "../../../features/redux/photos-reducer";
import { TAppState } from "../../../features/redux/store";
import { CardRow } from "../../../shared/ui/core/molecules";

export const CardRowConnector: React.FC<{}> = () => {
  let dispatch = useDispatch();
  let { photos, filterId } = useSelector((state: TAppState) => ({
    photos: state.photos.portionPhotos,
    filterId: state.photos.filterId,
  }));

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const deleteCard = (value: number) => {
    dispatch(actionPhotos.deleteCard(value));
    dispatch(actionPhotos.updatePortionPhotos());
  };

  const setFilter = (value: number) => {
    if (filterId === value) value = NaN;
    dispatch(setFilterId(value));
  };

  return (
    <CardRow photos={photos} deleteCard={deleteCard} setFilter={setFilter} />
  );
};
