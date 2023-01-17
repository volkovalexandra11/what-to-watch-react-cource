import { useAppDispatch } from '../../hooks';
import { increaseCardCount } from '../../store/main-data/main-data';

const ShowMoreButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(_) => {dispatch(increaseCardCount());}}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
