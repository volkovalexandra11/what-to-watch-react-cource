import {useAppDispatch} from '../../hooks';
import {increaseCardCount} from '../../store/main-data/main-data';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={ (evt) => {
          dispatch(increaseCardCount());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
