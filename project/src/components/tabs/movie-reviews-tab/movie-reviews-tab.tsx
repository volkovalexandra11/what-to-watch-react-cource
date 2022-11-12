import { FC } from 'react';
import Review from '../../review/review'
import { TReview } from '../../../types/TReview';

type Props = {
  reviews: TReview[];
}

const MovieReviewsTab: FC<Props> = (props) => {
  const { reviews } = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default MovieReviewsTab;
