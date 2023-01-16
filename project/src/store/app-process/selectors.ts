import { NameSpace } from '../../constants/constants';
import { State } from '../../types/TStore';

export const getError = (state: State): string | null => state[NameSpace.App].error;
