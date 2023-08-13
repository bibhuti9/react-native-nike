import React from 'react';
import {observer} from 'mobx-react';
import {ScrollView, StyleSheet} from 'react-native';

import {sizes} from 'src/theme/colors';
import RenderProduct from './RenderItem';
import {ProdutType} from 'src/data/dummyData';

function Products({finalProduct}) {
  const products: ProdutType[] = finalProduct;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((item, index) => (
        <RenderProduct key={String(index)} item={item} />
      ))}
    </ScrollView>
  );
}

export default observer(Products);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: sizes.padding + 5,
  },
});
