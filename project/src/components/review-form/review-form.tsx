import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {postComment} from '../../store/api-actions';
import {UserComment} from '../../types/user-comment';

function ReviewForm(): JSX.Element{
  const id = Number(useParams().id);

  const [reviewData, setReviewData] = React.useState({
    rating: 0,
    review: ''
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
    if (evt.target.value.length > 50 && evt.target.value.length < 400) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: +value });
    if (evt.target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onSubmit({comment: reviewData.review, rating: reviewData.rating, filmId: id.toString()});
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };

  return (
    <div className='add-review'>
      <form onSubmit={submitHandler} className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => (
                <>
                  <input
                    className='rating__input'
                    id={`star-${number}`}
                    type='radio'
                    name='rating'
                    value={number}
                    onChange={ratingChangeHandler}
                  />
                  <label className='rating__label' htmlFor={`star-${number}`}>
                    {`Rating ${number}`}
                  </label>
                </>
              ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            onChange={reviewTextChangeHandler}
          >
          </textarea>
          <div className='add-review__submit'>
            <button
              className='add-review__btn'
              type='submit'
              disabled={isDisabled}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
