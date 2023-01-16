import { Dispatch, FC, SetStateAction } from 'react';
import { VISIBLE_FILMS_COUNT_STEP } from '../../constants/constants';

type Props = {
  isVisible: boolean;
  setVisibleMoviesCount: Dispatch<SetStateAction<number>>;
};

const ShowMoreButton: FC<Props> = (props) => {
  const { setVisibleMoviesCount, isVisible } = props;

  return (
    <div className="catalog__more" style={{display: isVisible ? 'block' : 'none'}}>
      <button className="catalog__button" type="button" onClick={() => setVisibleMoviesCount((prev) => prev + VISIBLE_FILMS_COUNT_STEP)}>Show more</button>
    </div>
  );
};

export default ShowMoreButton;
