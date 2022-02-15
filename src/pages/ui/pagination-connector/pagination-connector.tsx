import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionPhotos } from "../../../features/redux/photos-reducer";
import { TAppState } from "../../../features/redux/store";
import { Pagination } from "../../../shared/ui/core/molecules";

export const PaginationConnector: React.FC<{}> = () => {
  //Настройка пагинации
  const [portionSize, setPortionSize] = React.useState(5);
  const [portionNumber, setPortionNumber] = React.useState(1);

  const dispatch = useDispatch();
  const { currentPage, pagesCount, portionSizePhotos } = useSelector(
    (state: TAppState) => ({
      currentPage: state.photos.currentPage,
      pagesCount: state.photos.pagesCount,
      portionSizePhotos: state.photos.portionSizePhotos,
    })
  );

  const setCurrentPage = (value: number) => {
    dispatch(actionPhotos.setCurrentPage(value));
  };

  React.useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [currentPage, portionSize]);

  const setPortionSizePhotos = (value: number) => {
    dispatch(actionPhotos.setPortionSizePhotos(value));
  };

  return (
    <Pagination
      portionSize={portionSize}
      portionNumber={portionNumber}
      setPortionNumber={setPortionNumber}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      pagesCount={pagesCount}
      setPortionSizePhotos={setPortionSizePhotos}
    />
  );
};
