import {Dispatch, SetStateAction} from 'react';
import {filterType} from '../../controller';

export interface FilterPropsTypes {
  setSearchText: Dispatch<SetStateAction<filterType>>;
  searchText: filterType;
}
