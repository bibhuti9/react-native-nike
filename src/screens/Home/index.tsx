import {View} from 'react-native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';

import {styles} from './styles';
import HomeHeader from './component/Header';
import HomeFilter from './component/Filter';
import Products from './component/Products';
import {filterType, useProducts} from './controller';
import Loader from 'src/component/Loader';

const defaultFilters = {
  name: '',
  brand: '',
  minPrice: null,
  maxPrice: null,
  ratting: null,
};

function Home() {
  const [searchText, setSearchText] = useState<filterType>(defaultFilters);
  const finalProduct = useProducts(searchText);
  return (
    <View style={styles.container}>
      <Loader title="Load products..." />
      <HomeHeader setSearchText={setSearchText} searchText={searchText} />
      <HomeFilter setSearchText={setSearchText} searchText={searchText} />
      {finalProduct && <Products finalProduct={finalProduct} />}
    </View>
  );
}
export default observer(Home);
