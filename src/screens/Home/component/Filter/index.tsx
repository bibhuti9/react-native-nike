import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {sizes} from 'src/theme/colors';

import {theme} from 'src/theme';
import {Heading} from 'src/component/Heading';
import {FilterPropsTypes} from '../Header/types';
import ButtonIcon from 'src/component/Button/ButtonIcon';
import RBSheet from 'react-native-raw-bottom-sheet';
import ConfirmBottom from '../ConfirmBottom';
import ProductFilter from '../ConfirmBottom/ProductFilter';

export default function HomeFilter({
  setSearchText,
  searchText,
}: FilterPropsTypes) {
  const refRBSheet = React.createRef<RBSheet>();
  return (
    <View style={styles.container}>
      <ConfirmBottom refRBSheet={refRBSheet}>
        <ProductFilter
          refRBSheet={refRBSheet}
          setSearchText={setSearchText}
          searchText={searchText}
        />
      </ConfirmBottom>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Sneakers</Text>
        <ButtonIcon
          onAction={() => refRBSheet?.current?.open()}
          iconName={'filter'}
          iconProps={{type: 'antdesign', size: sizes.iconSize}}
          iconColor={theme.colors.black}
        />
      </View>
      <View style={{marginVertical: sizes.margin}}>
        <Heading type={4} title={'25 product found'} />
      </View>
    </View>
  );
}
