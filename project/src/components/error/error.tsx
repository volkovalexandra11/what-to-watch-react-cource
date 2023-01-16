import {useAppSelector} from '../../hooks';
import './error.css';
import {getError} from '../../store/app-process/selectors';

function Error(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default Error;
